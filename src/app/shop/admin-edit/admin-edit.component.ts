import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductCategory } from '../models/Category';
import { mimeType } from './mime-type.validator';
import { Observable, Subscription } from 'rxjs';
import { CategoriesService } from '../services/categories.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit, OnDestroy {
  imagePreview: string;
  isLoading = true;
  isReadOnly = true;
  categoryList: ProductCategory[] = [];
  private getProductToEditSubjectListener: Subscription;
  productForm: FormGroup;
  // createOrEdit: true = create,false=edit
  createOrEdit = true;
  // define optional or required file input
  requiredImg = null;
  submittedProductData = {
    name: '',
    price: 0,
    amount: 0,
    category: this.categoryList[0],
    imgUrl: null,
    id: null
  };

  constructor(
    private categoryService: CategoriesService,
    private productsService: ProductsService) { }

  ngOnInit() {
    this.isLoading = false;
    this.formBuilder();

    this.getProductToEditSubjectListener = this.productsService.getProductToEdit().subscribe((product) => {

      this.createOrEdit = false;
      this.formBuilder();

      const categoryIndex = this.categoryList.findIndex(categoryObj => categoryObj._id === product.category);
      this.submittedProductData = {
        name: product.name,
        price: product.price,
        amount: product.amount,
        category: this.categoryList[categoryIndex],
        imgUrl: product.imgUrl,
        id: product._id
      };


      this.productForm.controls.productName.patchValue(product.name);
      this.productForm.controls.category.patchValue(this.categoryList[categoryIndex]._id);
      this.productForm.controls.price.patchValue(product.price);
      this.productForm.controls.amount.patchValue(product.amount);

      console.log('TCL: AdminEditComponent -> ngOnInit -> this.productForm.value', this.productForm.value);
    });


    this.categoryService.getCategories();
    this.categoryService.getCategoryListSubject().subscribe((categoryList) => {
      this.categoryList = [...categoryList];
      this.categoryList.unshift({ _id: null, name: 'please select category' });
    });




  }

  createNew() {
    this.submittedProductData = {
      name: '',
      price: 0,
      amount: 0,
      category: this.categoryList[0],
      imgUrl: null,
      id: ''
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
    let imgFile = null;
    let imgName = null;

    if (this.createOrEdit) {
      imgFile = this.productForm.value.imageUrl;
      imgName = imgFile.name;
    } else {
      imgName = this.submittedProductData.imgUrl;
    }

    this.productsService.createOrEdit(
      this.createOrEdit,
      this.productForm.value.productName,
      this.productForm.value.category,
      this.productForm.value.price.toString(),
      this.productForm.value.amount.toString(),
      this.submittedProductData.id,
      imgName,
      imgFile);
  }

  ngOnDestroy(): void {
    if (this.getProductToEditSubjectListener) {
      this.getProductToEditSubjectListener.unsubscribe();
    }
  }

}
