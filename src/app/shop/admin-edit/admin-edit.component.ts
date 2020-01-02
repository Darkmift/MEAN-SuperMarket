import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductCategory } from '../models/Category';
import { mimeType } from './mime-type.validator';
import { Observable } from 'rxjs';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit, AfterViewInit {
  imagePreview: string;
  isLoading = true;
  isReadOnly = true;
  categoryList: ProductCategory[] = [];
  productForm: FormGroup;
  isSubmitted = false;
  submittedProductData = {
    name: '',
    price: 0,
    amount: 0,
    category: this.categoryList[0],
    imgUrl: null
  };

  constructor(private categoryService: CategoriesService, ) { }

  ngOnInit() {
    this.isLoading = false;

    this.categoryService.getCategories();
    this.categoryService.getCategoryListSubject().subscribe((categoryList) => {
      this.categoryList = [...categoryList];
      this.categoryList.unshift({ _id: null, name: 'please select category' });
    });

    this.productForm = new FormGroup({
      category: new FormControl(
        null,
        { validators: [Validators.required, this.categorySelected] }),
      productName: new FormControl(
        null,
        { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(16)] }),
      price: new FormControl(
        null,
        { validators: [Validators.required, Validators.min(0.01), Validators.pattern('[,.0-9]+')] }),
      amount: new FormControl(
        null,
        { validators: [Validators.required, Validators.min(0.01), Validators.pattern('[,0-9]+')] }),
      imageUrl: new FormControl(null, { validators: [Validators.required], asyncValidators: [mimeType] }),
    });
  }

  ngAfterViewInit(): void {

    setTimeout(() => {
      this.isReadOnly = false;
    }, 1000);
  }


  categorySelected(control: FormControl): { [key: string]: any; } {
    const response = control.value ? null : { nullSelected: true };
    return control.value ? null : { nullSelected: true };
  }


  onImagePick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.productForm.patchValue({ imageUrl: file });
    this.productForm.get('imageUrl').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log('TCL: onSubmit ->  this.productForm.value', this.productForm.value);
    this.submittedProductData = { ...this.productForm.value };
    console.log('TCL: onSubmit -> this.submittedProductData', this.submittedProductData);
  }

}
