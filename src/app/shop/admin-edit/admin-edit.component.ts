import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductCategory } from '../models/Category';
import { mimeType } from './mime-type.validator';
import { Observable } from 'rxjs';
import { CategoriesService } from '../services/categories.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  imagePreview: string;
  isLoading = true;
  isReadOnly = true;
  categoryList: ProductCategory[] = [];
  productForm: FormGroup;
  // createOrEdit: true = create,false=edit
  createOrEdit = false;
  // define optional or required file input
  requiredImg = null;
  submittedProductData = {
    name: '',
    price: 0,
    amount: 0,
    category: this.categoryList[0],
    imgUrl: null
  };

  constructor(
    private categoryService: CategoriesService,
    private productsService: ProductsService) { }

  ngOnInit() {
    this.isLoading = false;

    this.categoryService.getCategories();
    this.categoryService.getCategoryListSubject().subscribe((categoryList) => {
      this.categoryList = [...categoryList];
      this.categoryList.unshift({ _id: null, name: 'please select category' });
    });

    this.requiredImg = this.createOrEdit ? Validators.required : null;

    this.createOrEdit = false;
    this.formBuilder();


  }

  createNew() {
    this.submittedProductData = {
      name: '',
      price: 0,
      amount: 0,
      category: this.categoryList[0],
      imgUrl: null
    };

    this.createOrEdit = true;
    this.formBuilder();

    this.productForm.reset();

  }

  // custom category validator
  categorySelected(control: FormControl): { [key: string]: any; } {
    const response = control.value ? null : { nullSelected: true };
    return control.value ? null : { nullSelected: true };
  }

  // image file input handler
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

  formBuilder() {
    if (this.createOrEdit) {
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
    } else {
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
          { validators: [Validators.required, Validators.min(0.01), Validators.pattern('[,0-9]+')] })
      });
    }
  }

  onSubmit() {
    console.log('TCL: onSubmit ->  this.productForm.value', this.productForm.value);
    this.submittedProductData = { ...this.productForm.value };
    console.log('TCL: onSubmit -> this.submittedProductData', this.submittedProductData);
    return;

    if (this.createOrEdit) {
      this.productsService.createOrEdit(
        this.createOrEdit,
        this.submittedProductData.name,
        this.submittedProductData.category._id,
        this.submittedProductData.price.toString(),
        this.submittedProductData.amount.toString(),
        this.submittedProductData.imgUrl,
        this.submittedProductData.imgUrl);
    }
  }

}
