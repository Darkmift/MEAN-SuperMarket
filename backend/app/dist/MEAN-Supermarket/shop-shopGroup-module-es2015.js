(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-shopGroup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/admin-edit/admin-edit.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/admin-edit/admin-edit.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"isLoading; else showEditForm\">\n  <div class=\"spinner-border\"\n    role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</ng-container>\n<ng-template #showEditForm>\n  <!-- form strat -->\n  <form class=\"p-2\"\n    [formGroup]=\"productForm\"\n    #productFormNg=\"ngForm\"\n    (ngSubmit)=\"productFormNg.valid && onSubmit()\">\n\n    <a class=\"btn btn-success text-light\" *ngIf=\"!createOrEdit\"\n      (click)=\"createNew()\">Create new</a>\n    <hr>\n\n    <h5>Edit or Create Product:</h5>\n\n    <!-- category -->\n    <div class=\"form-group\"\n      [ngClass]=\"{ 'mb-0': productFormNg.submitted && productForm.get('category').invalid }\">\n      <label for=\"category\">Category</label>\n      <select class=\"form-control\"\n        name=\"category\"\n        [ngClass]=\"{ 'is-invalid': productFormNg.submitted && productForm.get('category').invalid }\"\n        formControlName=\"category\"\n        required>\n        <option *ngFor=\"let category of categoryList\"\n          [value]=\"category._id\">\n          <span>{{category.name}}</span>\n        </option>\n      </select>\n\n      <div *ngIf=\"productFormNg.submitted && productForm.get('category').invalid\">\n        <small style=\"color:#dc3545;\"\n          *ngIf=\"productForm.get('category').errors.required\">category is required</small>\n        <small style=\"color:#dc3545;\"\n          *ngIf=\"productForm.get('category').errors.required && productForm.get('category').errors.nullSelected\">\n          - The first one is not valid!\n        </small>\n      </div>\n    </div>\n\n    <!-- productName -->\n    <div class=\"form-group\"\n      [ngClass]=\"{ 'mb-0': productFormNg.submitted && productForm.get('productName').invalid }\">\n      <label for=\"productName\">Name</label>\n      <input type=\"text\"\n        class=\"form-control\"\n        name=\"productName\"\n        id=\"productName\"\n        [value]=\"submittedProductData.name\"\n        [ngClass]=\"{ 'is-invalid': productFormNg.submitted && productForm.get('productName').invalid }\"\n        formControlName=\"productName\">\n\n      <div *ngIf=\"productFormNg.submitted && productForm.get('productName').invalid\"\n        class=\"invalid-feedback\">\n        <div *ngIf=\"productForm.get('productName').errors.required\">product name is required</div>\n        <div *ngIf=\"productForm.get('productName').errors.minlength||productForm.get('productName').errors.maxlength\">\n          Name must be between 5 and 16 Characters\n        </div>\n      </div>\n    </div>\n\n    <!-- price -->\n    <div class=\"form-group\"\n      [ngClass]=\"{ 'mb-0': productFormNg.submitted && productForm.get('price').invalid }\">\n      <label for=\"price\">Price</label>\n      <input type=\"text\"\n        class=\"form-control\"\n        name=\"price\"\n        id=\"price\"\n        [value]=\"submittedProductData.price\"\n        [ngClass]=\"{ 'is-invalid': productFormNg.submitted && productForm.get('price').invalid }\"\n        formControlName=\"price\">\n\n      <div *ngIf=\"productFormNg.submitted && productForm.get('price').invalid\"\n        class=\"invalid-feedback\">\n        <div *ngIf=\"productForm.get('price').errors.required\">price is required</div>\n        <div *ngIf=\"productForm.get('price').errors.min\">\n          You wanna give away for free?\n        </div>\n        <div *ngIf=\"productForm.get('price').errors.pattern\">\n          Not a number\n        </div>\n      </div>\n    </div>\n\n    <!-- amount -->\n    <div class=\"form-group\"\n      [ngClass]=\"{ 'mb-0': productFormNg.submitted && productForm.get('amount').invalid }\">\n      <label for=\"amount\">Amount</label>\n      <input type=\"number\"\n        class=\"form-control\"\n        name=\"amount\"\n        id=\"amount\"\n        [value]=\"submittedProductData.amount\"\n        [ngClass]=\"{ 'is-invalid': productFormNg.submitted && productForm.get('amount').invalid }\"\n        formControlName=\"amount\">\n\n      <div *ngIf=\"productFormNg.submitted && productForm.get('amount').invalid\"\n        class=\"invalid-feedback\">\n        <div *ngIf=\"productForm.get('amount').errors.required\">amount is required</div>\n        <div *ngIf=\"productForm.get('amount').errors.min\">\n          no amount specified\n        </div>\n        <div *ngIf=\"productForm.get('amount').errors.pattern\">\n          Not a number\n        </div>\n      </div>\n    </div>\n\n    <!-- img -->\n    <div class=\"form-group\" *ngIf=\"createOrEdit\">\n      <input type=\"file\"\n        style=\"visibility: hidden;\"\n        #filePicker\n        (change)=\"onImagePick($event)\">\n      <a class=\"btn btn-primary text-light btn-block\"\n        [ngClass]=\"{ 'btn-danger': productFormNg.submitted && productForm.get('imageUrl').invalid }\"\n        (click)=\"filePicker.click()\">Upload Image</a>\n\n      <div *ngIf=\"productFormNg.submitted && productForm.get('imageUrl').invalid\">\n        <small style=\"color:#dc3545;\"\n          *ngIf=\"productForm.get('imageUrl').errors.required\">Image is required</small>\n      </div>\n    </div>\n\n    <button class=\"btn btn-primary\"\n      type=\"submit\">Submit</button>\n  </form>\n  <!-- form end -->\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/cart/cart-item/cart-item.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/cart/cart-item/cart-item.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-3 p-2\"\n  [ngStyle]=\"{'height':shopOrOrderConfig ? '22vh' : '12vh'}\"\n  *ngIf=\"isShown\">\n\n  <div class=\"row no-gutters\">\n\n    <div class=\"col-md-4\">\n      <img src=\"http://localhost:3000/public/images/pickleRick.png\"\n        class=\"card-img img-thumbnail m-1\"\n        alt=\"pickleRick\">\n    </div>\n\n    <div class=\"col-md-8\">\n      <div class=\"card-body p-2\"\n        style=\"height: 9vw;\">\n\n        <!-- delete -->\n        <button *ngIf=\"shopOrOrderConfig\"\n          type=\"button\"\n          class=\"close\"\n          aria-label=\"Close\"\n          (click)=\"removeItem()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n\n        <!-- product name -->\n        <h5 class=\"card-title m-1\"\n          [innerHTML]=\"capitalize(cartItemObj.name)| highlight: searchTerm\">\n          {{capitalize(cartItemObj.name)}}</h5>\n\n        <!-- price -->\n        <div class=\"card-text gridList p-0\">\n\n          <ng-container *ngIf=\"shopOrOrderConfig; else elseTemplate\">\n            <span>&nbsp;Price:&nbsp;</span>\n            <span class=\"badge badge-success text-light m-1\"> ${{cartItemObj.price}} </span>\n            <span>&nbsp;Amount:&nbsp;</span>\n            <span class=\"badge badge-success text-light m-1\"> {{cartItemObj.amount}} </span>\n            <span>&nbsp;Total:&nbsp;</span>\n            <span class=\"badge badge-success text-light m-1\"> ${{cartItemObj.total}} </span>\n          </ng-container>\n          <ng-template #elseTemplate>\n            <span>&nbsp;Total:&nbsp;</span>\n            <span class=\"badge badge-success text-light m-1\"> ${{cartItemObj.total}} </span>\n          </ng-template>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/cart/cart.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/cart/cart.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body m-0 p-0\">\n\n  <!-- Title section -->\n  <ng-container *ngIf=\"shopOrOrderConfig; else elseOrder\">\n    <span class=\"card-title font-weight-bold\">\n      Welcome<span *ngIf=\"hasPreviousCart\">&nbsp;back</span>&nbsp;{{user?.firstName}},\n      <br>\n      <small>Items in cart: <span class=\"badge badge-success text-light p-1\">{{activeItems}} </span></small>\n    </span>\n    <hr>\n  </ng-container>\n  <ng-template #elseOrder>\n    <small class=\"card-title m-2 font-italic\">\n      Feel free to review your cart contents\n      <br>&nbsp;&nbsp;before completing your order:\n    </small>\n    <br>\n    <a class=\"badge badge-primary text-light mt-1 ml-1 p-1\"\n      (click)=\"switchToOrder(true)\">Return to shop</a>\n    <span style=\"height: 10px;\">&nbsp;</span>\n  </ng-template>\n\n\n  <!-- itemList container -->\n  <div class=\"card itemList\">\n    <div class=\"card-body overflow-auto\">\n      <!-- itemList -->\n      <app-cart-item [shopOrOrderConfig]=\"shopOrOrderConfig\"\n        *ngFor=\"let item of cartItemArray\"\n        [cartItemObj]=\"item\"></app-cart-item>\n    </div>\n  </div>\n  <hr *ngIf=\"shopOrOrderConfig\">\n\n  <!-- bottom section -->\n  <div class=\"row\">\n    <!-- shop view -->\n    <ng-container *ngIf=\"shopOrOrderConfig; else bottomElse\">\n      <p class=\"card-text col-6 mt-2 font-weight-bold\">\n        Total:&nbsp;<span class=\"badge badge-success text-light\">${{cart?.total.toFixed(2)}}</span>\n      </p>\n      <ng-container *ngIf=\"cart?.total===0; else elseButton\">\n        <button class=\"card-link btn btn-primary col-5 mb-2\"\n          [disabled]=\"true\"\n          role=\"button\"\n          aria-disabled=\"true\">Fill out Cart</button>\n      </ng-container>\n      <ng-template #elseButton>\n        <button class=\"card-link btn btn-primary col-5 mb-2\"\n          (click)=\"switchToOrder(false)\">Check Out</button>\n      </ng-template>\n    </ng-container>\n    <!-- cart view -->\n    <ng-template #bottomElse>\n      <div class=\"col-12 d-flex ml-1 mt-3\">\n        <small class=\"card-text\">Items in cart: <span class=\"badge badge-success text-light p-1\">{{activeItems}}\n          </span>\n        </small>\n        <span style=\"margin:auto;\"></span>\n        <small class=\"card-text font-weight-bold mr-5\">\n          Total:&nbsp;<span class=\"badge badge-success text-light p-1\">${{cart?.total.toFixed(2)}}</span>\n        </small>\n      </div>\n\n    </ng-template>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/order/order-modal/order-modal.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/order/order-modal/order-modal.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h5>Thank you for shopping with us.</h5>\n  <button type=\"button\"\n    class=\"close\"\n    aria-label=\"Close\"\n    (click)=\"[activeModal.dismiss('Cross click'),navigateOut()]\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"row\">\n    <table class=\"table offset-1 col-10 border\">\n      <th class=\"bg-light-blue\"\n        colspan=\"2\">Order #:&nbsp;{{order.cartRef}}</th>\n      <tr>\n        <td class=\"bg-light-blue\">\n          <span>Address:</span>\n\n        </td>\n        <td>\n          <span>{{order.street}},{{order.city}}</span>\n\n        </td>\n      </tr>\n      <tr>\n        <td class=\"bg-light-blue\">\n          <span>Deliver on:</span>\n\n        </td>\n        <td>\n          <span>{{order.deliveryDate}}</span>\n\n        </td>\n      </tr>\n      <tr>\n        <td class=\"bg-light-blue\">\n          <span>CC:</span>\n\n        <td>\n          <span>{{order.ccType}}: {{order.ccLastDigits}}</span>\n\n        </td>\n      </tr>\n      <tr>\n        <td class=\"bg-light-blue\">\n          <span>Total:</span>\n\n        <td>\n          <span>${{total}}</span>\n        </td>\n      </tr>\n    </table>\n  </div>\n\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\"\n    class=\"btn btn-outline-dark\"\n    (click)=\"[activeModal.close('Close click'),navigateOut()]\">Close</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/order/order.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/order/order.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("        <!-- orderForm start -->\n        <div class=\"row mx-3\" *ngIf=\"!hideOnSubmit\">\n          <form class=\"bg-light p-2 border-custom offset-2 col-8 p-4 overflow-auto\"\n            style=\"height: 75vh;\"\n            name=\"form\"\n            (ngSubmit)=\"orderForm.valid && onSubmit(orderForm)\"\n            #orderForm=\"ngForm\"\n            novalidate>\n\n            <h4 class=\"font-italic\">Almost done! just a few more details...</h4>\n            <br>\n\n            <h5>Shipping details:</h5>\n            <hr>\n            <!-- city select -->\n            <div class=\"form-group\">\n              <label for=\"city\">Select your city</label>\n              <select class=\"form-control\"\n                #city=\"ngModel\"\n                name=\"city\"\n                [ngClass]=\"{ 'is-invalid': orderForm.submitted && city.value===cityList[0] }\"\n                [(ngModel)]=\"submittedUserData.city\"\n                [disabled]=\"isReadOnly\"\n                (dblclick)=\"fillUserDataOnDClick('city')\"\n                required>\n                <option *ngFor=\"let option of cityList\"\n                  [value]=\"option\">{{option}}</option>\n              </select>\n\n              <div *ngIf=\"orderForm.submitted && city.value===cityList[0]\"\n                class=\"invalid-feedback\">\n                <div>Please select your city</div>\n              </div>\n            </div>\n\n            <!-- street -->\n            <div class=\"form-group\">\n              <label for=\"street\">Street Name</label>\n              <input type=\"text\"\n                [readonly]=\"isReadOnly\"\n                class=\"form-control\"\n                name=\"street\"\n                [(ngModel)]=\"submittedUserData.street\"\n                #street=\"ngModel\"\n                [ngClass]=\"{ 'is-invalid': orderForm.submitted && street.invalid }\"\n                placeholder=\"Please provide your street\"\n                (dblclick)=\"fillUserDataOnDClick('street')\"\n                required\n                minlength=\"3\" />\n              <div *ngIf=\"orderForm.submitted && street.invalid\"\n                class=\"invalid-feedback\">\n                <div *ngIf=\"street.errors.required\">Please add your street name</div>\n                <div *ngIf=\"street.errors.minlength\">street name must be at least 3 charcters</div>\n              </div>\n            </div>\n\n            <!-- shipping date -->\n            <div class=\"form-group\">\n              <label for=\"date\">Pick shipping date:</label>\n              <input class=\"form-control\"\n                placeholder=\"yyyy-mm-dd\"\n                name=\"ngbShippingDate\"\n                [minDate]=\"{year: minMaxDates.startDate.year, month: minMaxDates.startDate.month, day: minMaxDates.startDate.day}\"\n                [maxDate]=\"{year: minMaxDates.endDate.year, month: minMaxDates.endDate.month, day: minMaxDates.endDate.day}\"\n                [(ngModel)]=\"submittedUserData.ngbShippingDate\"\n                [markDisabled]=\"isDisabled\"\n                ngbDatepicker\n                #toggleID=\"ngbDatepicker\"\n                #ngbShippingDate=\"ngModel\"\n                (click)=\"[dateNotAvailabe=false,toggleID.toggle()]\"\n                [ngClass]=\"{'is-invalid': orderForm.submitted && !ngbShippingDate.value||dateNotAvailabe}\">\n              <div *ngIf=\"orderForm.submitted && !ngbShippingDate.value\"\n                class=\"text-danger\">\n                <small>Please select a Date</small>\n              </div>\n            </div>\n\n            <h5>Payments:</h5>\n\n            <div class=\"row\">\n              <!-- cc number -->\n              <div class=\"form-group col-8\">\n                <label for=\"street\">Credit Card:</label>\n                <input type=\"text\"\n                  [readonly]=\"isReadOnly\"\n                  class=\"form-control\"\n                  name=\"cc\"\n                  [(ngModel)]=\"submittedUserData.ccLastDigits\"\n                  #ccc=\"ngModel\"\n                  [ngClass]=\"{ 'is-invalid': orderForm.submitted && ccc.invalid}\"\n                  placeholder=\"Please provide your cc number\"\n                  (change)=\"matchCCRegex()\"\n                  (keyup)=\"matchCCRegex()\"\n                  minlength=\"15\"\n                  pattern=\"[0-9]+\"\n                  required />\n                <div *ngIf=\"orderForm.submitted && ccc.invalid\"\n                  class=\"invalid-feedback\">\n                  <div *ngIf=\"ccc.errors.required\">Please add your cc number</div>\n                  <div *ngIf=\"ccc.errors.minlength\">cc must be at least 15 charcters</div>\n                </div>\n              </div>\n              <!-- cc type -->\n              <div class=\"form-group col-4\">\n                <label for=\"street\">Credit Card:</label>\n                <input type=\"text\"\n                  [readonly]=\"true\"\n                  class=\"form-control\"\n                  name=\"ccType\"\n                  [(ngModel)]=\"submittedUserData.ccType\"\n                  #cc=\"ngModel\"\n                  required />\n              </div>\n            </div>\n\n            <hr>\n            <div class=\"form-group\">\n\n              <div *ngIf=\"isLoading\"\n                class=\"spinner-border text-primary\"\n                role=\"status\">\n                <span class=\"sr-only\">Loading...</span>\n              </div>\n\n              <button *ngIf=\"!isLoading\"\n                class=\"btn btn-primary\">Submit Order</button>\n            </div>\n\n          </form>\n        </div>\n\n        <!-- orderForm end -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-select/categories/categories.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-select/categories/categories.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body pb-0\">\n  <div class=\"card-title inlineChildren\">\n\n    <ngb-pagination [collectionSize]=\"categories.length\"\n      [pageSize]=\"itemsPerPage\"\n      [(page)]=\"page\"\n      [maxSize]=\"itemsPerPage\"\n      [rotate]=\"true\"\n      (pageChange)=\"loadPage($event)\"></ngb-pagination>\n    <!--  -->\n    <span style=\"margin:auto\">&nbsp;</span>\n    <!--  -->\n    <ul class=\"pagination\">\n      <li class=\"page-item\"\n        [ngClass]=\"[isActive[i]?'active':'']\"\n        (click)=\"classToggle(i)\"\n        *ngFor=\"let category of categoryPortion; let i=index;\">\n        <a class=\"page-link\"\n          (click)=\"onCategoryClick(category._id)\">{{category.name}}</a>\n      </li>\n    </ul>\n\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-select/product-display/product-display.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-select/product-display/product-display.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card card-size\">\n  <div class=\"card-body overflow-auto row\">\n    <span id=\"resetView565656\"></span>\n    <div class=\"alert alert-info col-12 p-2 my-1\"\n      role=\"alert\"\n      *ngIf=\"isSearchResults\">\n      Search result: <span class=\"badge badge-success text-light\">{{productArray.length}} </span>\n    </div>\n\n    <app-product-item class=\"col-lg-3 col-md-4 col-sm-6 p-0 my-1\"\n      *ngFor=\"let product of productArray\"\n      [productObj]=\"product\"\n      [isAdmin]=\"isAdmin\"\n      [initialAmount]=\"initialAmount[product._id] || 0\"></app-product-item>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-select/product-item/product-item.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-select/product-item/product-item.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-1 bg-light-blue\">\n  <div class=\"card-body m-1\">\n\n    <img src=\"{{productObj.imgUrl}}\"\n      class=\"card-img-top\"\n      alt=\"image of {{productObj.name}}\">\n    <hr>\n    <h5 class=\"card-title\">{{capitalize(productObj.name).substr(0, 15)}}</h5>\n\n    <p class=\"card-text\"\n      *ngIf=\"!isAdmin;\">\n      <span class=\"badge badge-success text-light\">\n        ${{productObj.price.toFixed(2)}}\n      </span>\n    </p>\n\n    <ng-container *ngIf=\"isAdmin; else showUserBtns\">\n      <div class=\"btn btn-warning\"\n        (click)=\"sendToEdit()\">Edit</div>\n    </ng-container>\n    <ng-template #showUserBtns>\n      <!-- buttons -->\n      <div class=\"card-text btn-group\"\n        role=\"group\"\n        aria-label=\"Basic example\">\n\n        <!-- add btn -->\n        <button class=\"btn btn-success\"\n          (click)=\"upDateCartItem(true)\">\n          <span class=\"plus-minus\">+</span>\n        </button>\n\n        <!-- amount display input -->\n        <input type=\"number\"\n          min=\"0\"\n          max=\"{{productObj.amount}}\"\n          [(ngModel)]=\"cartItem.amount\"\n          (change)=\"setCartItemAmount()\"\n          style=\"width:3vw;\">\n\n        <!-- reduce btn -->\n        <button class=\"btn btn-danger\"\n          (click)=\"upDateCartItem(false)\">\n          <span class=\"plus-minus font-weight-bold\">-</span>\n        </button>\n      </div>\n    </ng-template>\n\n\n\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-select/product-select.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-select/product-select.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-categories></app-categories>\n<app-product-display [isAdmin]=\"isAdmin\"></app-product-display>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/search/search.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/search/search.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar mt-1 navbar-expand-lg navbar-light\">\n  <span class=\"form-inline my-2 my-lg-0\">\n    <input class=\"form-control my-2 my-lg-0 mr-sm-2\"\n      type=\"search\"\n      placeholder=\"Search\"\n      [(ngModel)]=\"searchValue\"\n      aria-label=\"Search\">\n    <button class=\"btn btn-outline-success my-2 my-sm-0\"\n      type=\"submit\"\n      (click)=\"onSearchSubmit(searchValue)\">Search</button>\n  </span>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-search></app-search>\r\n<div #parentContainer\r\n  class=\"parentContainer\">\r\n  <!-- cartDiv -->\r\n  <div class=\"cartDiv bg-light-blue card bg-light-blue\"\r\n    [style.width.px]=\"cartDiv.width\">\r\n    <app-cart *ngIf=\"!isAdmin\"\r\n      [shopOrOrderConfig]=\"showShopOrOrder\"></app-cart>\r\n    <app-admin-edit *ngIf=\"isAdmin\"></app-admin-edit>\r\n    <div class=\"grabber\"\r\n      id=\"resizeDiv\"></div>\r\n  </div>\r\n  <!-- ShopDiv -->\r\n  <div class=\"shopDiv card bg-light-blue\"\r\n    [style.width.px]=\"shopDiv.width\">\r\n\r\n    <ng-container *ngIf=\"showShopOrOrder; else elseTemplate\">\r\n      <app-product-select [isAdmin]=\"isAdmin\"></app-product-select>\r\n    </ng-container>\r\n    <ng-template #elseTemplate>\r\n      <app-order></app-order>\r\n    </ng-template>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pipes/highlight.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/highlight.pipe.ts ***!
  \*****************************************/
/*! exports provided: HighlightSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightSearchPipe", function() { return HighlightSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let HighlightSearchPipe = class HighlightSearchPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, args) {
        if (!args) {
            return value;
        }
        // Match in a case insensitive maneer
        const re = new RegExp(args, 'gi');
        const match = value.match(re);
        // If there's no match, just return the original value.
        if (!match) {
            return value;
        }
        const replacedValue = value.replace(re, '<span style="background:#ffff00">' + match[0] + '</span>');
        return this.sanitizer.bypassSecurityTrustHtml(replacedValue);
    }
};
HighlightSearchPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
HighlightSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'highlight'
    })
], HighlightSearchPipe);



/***/ }),

/***/ "./src/app/shop/admin-edit/admin-edit.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shop/admin-edit/admin-edit.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3AvYWRtaW4tZWRpdC9hZG1pbi1lZGl0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/shop/admin-edit/admin-edit.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shop/admin-edit/admin-edit.component.ts ***!
  \*********************************************************/
/*! exports provided: AdminEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditComponent", function() { return AdminEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mime-type.validator */ "./src/app/shop/admin-edit/mime-type.validator.ts");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/categories.service */ "./src/app/shop/services/categories.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/products.service */ "./src/app/shop/services/products.service.ts");






let AdminEditComponent = class AdminEditComponent {
    constructor(categoryService, productsService) {
        this.categoryService = categoryService;
        this.productsService = productsService;
        this.isLoading = true;
        this.isReadOnly = true;
        this.categoryList = [];
        // createOrEdit: true = create,false=edit
        this.createOrEdit = true;
        // define optional or required file input
        this.requiredImg = null;
        this.submittedProductData = {
            name: '',
            price: 0,
            amount: 0,
            category: this.categoryList[0],
            imgUrl: null,
            id: null
        };
    }
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
    categorySelected(control) {
        const response = control.value ? null : { nullSelected: true };
        return control.value ? null : { nullSelected: true };
    }
    // image file input handler
    onImagePick(event) {
        const file = event.target.files[0];
        this.productForm.patchValue({ imageUrl: file });
        this.productForm.get('imageUrl').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    }
    formBuilder() {
        if (this.createOrEdit) {
            this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.categorySelected] }),
                productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16)] }),
                price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.01), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[,.0-9]+')] }),
                amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.01), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[,0-9]+')] }),
                imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_3__["mimeType"]] }),
            });
        }
        else {
            this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.categorySelected] }),
                productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16)] }),
                price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.01), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[,.0-9]+')] }),
                amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.01), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[,0-9]+')] })
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
        }
        else {
            imgName = this.submittedProductData.imgUrl;
        }
        this.productsService.createOrEdit(this.createOrEdit, this.productForm.value.productName, this.productForm.value.category, this.productForm.value.price.toString(), this.productForm.value.amount.toString(), this.submittedProductData.id, imgName, imgFile);
    }
    ngOnDestroy() {
        if (this.getProductToEditSubjectListener) {
            this.getProductToEditSubjectListener.unsubscribe();
        }
    }
};
AdminEditComponent.ctorParameters = () => [
    { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"] },
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] }
];
AdminEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/admin-edit/admin-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-edit.component.css */ "./src/app/shop/admin-edit/admin-edit.component.css")).default]
    })
], AdminEditComponent);



/***/ }),

/***/ "./src/app/shop/admin-edit/mime-type.validator.ts":
/*!********************************************************!*\
  !*** ./src/app/shop/admin-edit/mime-type.validator.ts ***!
  \********************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/*
mime type file signatures:
https://gist.github.com/qti3e/6341245314bf3513abb080677cd1c93b
*/


const mimeType = (control) => {
    if (typeof (control.value) === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
    const file = control.value;
    const fileReader = new FileReader();
    const frObs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
        fileReader.addEventListener('loadend', () => {
            const arr = new Uint8Array(fileReader.result).subarray(0, 4);
            let header = '';
            let isValid = false;
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < arr.length; i++) {
                const element = arr[i];
                header += arr[i].toString(16);
            }
            switch (header) {
                case '89504e47':
                    isValid = true;
                    break;
                case 'ffd8ffe0':
                case 'ffd8ffe1':
                case 'ffd8ffe2':
                case 'ffd8ffe3':
                case 'ffd8ffe8':
                    isValid = true;
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "./src/app/shop/cart/cart-item/cart-item.component.css":
/*!*************************************************************!*\
  !*** ./src/app/shop/cart/cart-item/cart-item.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gridList {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\nimg {\r\n  width: 4vw;\r\n  height: 4vw;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9jYXJ0L2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvc2hvcC9jYXJ0L2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkTGlzdCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDR2dztcclxuICBoZWlnaHQ6IDR2dztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/shop/cart/cart-item/cart-item.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shop/cart/cart-item/cart-item.component.ts ***!
  \************************************************************/
/*! exports provided: CartItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemComponent", function() { return CartItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/helpers */ "./src/app/helpers/helpers.ts");
/* harmony import */ var _services_carts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/carts.service */ "./src/app/shop/services/carts.service.ts");




let CartItemComponent = class CartItemComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.isShown = false;
        this.capitalize = _helpers_helpers__WEBPACK_IMPORTED_MODULE_2__["Capitalize"];
    }
    ngOnInit() {
        if (this.cartItemObj.amount) {
            this.isShown = true;
        }
        this.searchTerm = this.cartService.getSearchTerm();
        this.getSearchTermSubjectListener = this.cartService.getSearchTermSubject().subscribe((searchTerm) => {
            this.searchTerm = searchTerm;
        });
    }
    removeItem() {
        this.isShown = false;
        this.cartItemObj.amount = 0;
        this.cartService.sendToCart(this.cartItemObj, this.cartItemObj.productRef);
    }
    ngOnDestroy() {
        if (this.getSearchTermSubjectListener) {
            this.getSearchTermSubjectListener.unsubscribe();
        }
    }
};
CartItemComponent.ctorParameters = () => [
    { type: _services_carts_service__WEBPACK_IMPORTED_MODULE_3__["CartsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CartItemComponent.prototype, "cartItemObj", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CartItemComponent.prototype, "shopOrOrderConfig", void 0);
CartItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/cart/cart-item/cart-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart-item.component.css */ "./src/app/shop/cart/cart-item/cart-item.component.css")).default]
    })
], CartItemComponent);



/***/ }),

/***/ "./src/app/shop/cart/cart.component.css":
/*!**********************************************!*\
  !*** ./src/app/shop/cart/cart.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".itemList {\r\n  height: 56vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3Nob3AvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbUxpc3Qge1xyXG4gIGhlaWdodDogNTZ2aDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/shop/cart/cart.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shop/cart/cart.component.ts ***!
  \*********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_carts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/carts.service */ "./src/app/shop/services/carts.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/orders.service */ "./src/app/shop/services/orders.service.ts");





let CartComponent = class CartComponent {
    constructor(authService, cartService, orderService) {
        this.authService = authService;
        this.cartService = cartService;
        this.orderService = orderService;
    }
    ngOnInit() {
        // fetch user data
        this.user = this.authService.getUser();
        if (!this.isAdmin) {
            // fetch cart
            this.cartService.getLastActiveCart(this.user.id, true);
        }
        // hasPreviousCart boolean
        this.getHasPreviousCartSubjectLisetner = this.cartService.gethasPreviousCart().subscribe((response) => {
            this.hasPreviousCart = response;
        });
        // cart data
        this.getlastOrNewDataSubjectLisetner = this.cartService.getlastOrNewDataSubject().subscribe((cart) => {
            if (cart) {
                this.cart = cart;
                // fetch cartItems
                this.cartService.getCartItems(this.cart._id);
            }
        });
        // cart items
        this.getCartItemsSubjectListener = this.cartService.getItemsCartDataSubject().subscribe((cartItems) => {
            this.cartItemArray = cartItems;
            this.activeItems = cartItems.filter((item) => item.amount).length;
        });
        // cart total sum
        this.getCartTotalSubjectListener = this.cartService.getCartTotalSubject().subscribe((total) => {
            console.log('TCL: CartComponent -> ngOnInit -> total', total);
            this.cart.total = total;
        });
    }
    switchToOrder(switchView) {
        this.orderService.switchViews(switchView);
    }
    ngOnDestroy() {
        this.getlastOrNewDataSubjectLisetner.unsubscribe();
        this.getHasPreviousCartSubjectLisetner.unsubscribe();
        this.getCartItemsSubjectListener.unsubscribe();
        this.getCartTotalSubjectListener.unsubscribe();
    }
};
CartComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_carts_service__WEBPACK_IMPORTED_MODULE_2__["CartsService"] },
    { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CartComponent.prototype, "isAdmin", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CartComponent.prototype, "shopOrOrderConfig", void 0);
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/cart/cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.css */ "./src/app/shop/cart/cart.component.css")).default]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/shop/order/order-modal/order-modal.component.css":
/*!******************************************************************!*\
  !*** ./src/app/shop/order/order-modal/order-modal.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3Avb3JkZXIvb3JkZXItbW9kYWwvb3JkZXItbW9kYWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/shop/order/order-modal/order-modal.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shop/order/order-modal/order-modal.component.ts ***!
  \*****************************************************************/
/*! exports provided: OrderModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModalComponent", function() { return OrderModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let OrderModalComponent = class OrderModalComponent {
    constructor(router, activeModal) {
        this.router = router;
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
    navigateOut() {
        this.router.navigate(['/portal']);
    }
    onClose() {
        this.activeModal.close('closed');
        this.navigateOut();
    }
    onDismiss(reason) {
        this.activeModal.dismiss(reason);
        this.navigateOut();
    }
};
OrderModalComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrderModalComponent.prototype, "order", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrderModalComponent.prototype, "total", void 0);
OrderModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/order/order-modal/order-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-modal.component.css */ "./src/app/shop/order/order-modal/order-modal.component.css")).default]
    })
], OrderModalComponent);



/***/ }),

/***/ "./src/app/shop/order/order.component.css":
/*!************************************************!*\
  !*** ./src/app/shop/order/order.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3Avb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/shop/order/order.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shop/order/order.component.ts ***!
  \***********************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/orders.service */ "./src/app/shop/services/orders.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_carts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/carts.service */ "./src/app/shop/services/carts.service.ts");
/* harmony import */ var _order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-modal/order-modal.component */ "./src/app/shop/order/order-modal/order-modal.component.ts");
/*
* https://www.regular-expressions.info/creditcard.html
*/








let OrderComponent = class OrderComponent {
    // blockDate: NgbDateStruct[] = [
    //   { year: 0, month: 0, day: 0 }
    // ];
    constructor(orderService, toastrService, cartService, authService, modalService) {
        this.orderService = orderService;
        this.toastrService = toastrService;
        this.cartService = cartService;
        this.authService = authService;
        this.modalService = modalService;
        this.isLoading = true;
        this.isReadOnly = true;
        this.hideOnSubmit = false;
        this.cityList = ['Select City', 'Tel-Aviv', 'Holon', 'Arad', `Be'er Sheva`, 'Yokneam', 'Rehovot', 'Safed', 'Netivot', 'Eilat', 'Metula'];
        this.submittedUserData = {
            cartRef: '',
            city: this.cityList[0],
            street: null,
            ngbShippingDate: null,
            deliveryDate: new Date(),
            ccLastDigits: null,
            ccType: 'Other'
        };
        this.minMaxDates = this.setMinMaxDates();
        this.dateNotAvailabe = false;
    }
    ngOnInit() {
        // for dclick autofill
        this.user = this.authService.getUser();
        // fetch cart
        this.cartService.getLastActiveCart(this.user.id, false);
        // cart data
        this.getlastOrNewDataSubjectLisetner = this.cartService.getlastOrNewDataSubject().subscribe((cart) => {
            if (cart) {
                this.cart = cart;
                this.submittedUserData.cartRef = this.cart._id;
                // fetch cartItems
                this.cartService.getCartItems(this.cart._id);
            }
        });
        // dev stuff -- remove before deployment
        this.submittedUserData = {
            cartRef: '',
            city: this.cityList[1],
            street: 'Main',
            ngbShippingDate: { year: 2020, month: 1, day: 18 },
            deliveryDate: new Date(),
            ccLastDigits: '4111111111111111',
            ccType: 'VISA'
        };
        ////
        this.getDateIsAvailableSubjectListener = this.orderService.getDateIsAvailableSubject().subscribe((dateAvailable) => {
            if (!dateAvailable) {
                this.toastrService.info(`We're sorry`, `We cannot deliver in said date`, { progressBar: true });
                this.dateNotAvailabe = true;
            }
            else {
                this.hideOnSubmit = true;
                const ngbModalOptions = {
                    backdrop: 'static',
                    keyboard: false
                };
                this.submittedUserData.ccLastDigits = this.submittedUserData.ccLastDigits.substr(this.submittedUserData.ccLastDigits.length - 4);
                const modalRef = this.modalService.open(_order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_7__["OrderModalComponent"], ngbModalOptions);
                modalRef.componentInstance.order = this.submittedUserData;
                modalRef.componentInstance.total = this.cart.total;
            }
        });
        this.isLoading = false;
        setTimeout(() => {
            this.isReadOnly = false;
        }, 1000);
    }
    // some date stuff
    setMinMaxDates() {
        const datePick = new Date();
        const year = datePick.getFullYear();
        const startMonth = datePick.getMonth() + 1;
        const endMonth = startMonth === 12 ? 1 : startMonth + 1;
        const endYear = startMonth === 12 ? year + 1 : year;
        const day = datePick.getDate() + 1;
        console.log('TCL: OrderComponent -> setMinMaxDates -> day', day);
        return {
            startDate: { day, month: startMonth, year },
            endDate: { day, month: endMonth, year: endYear }
        };
    }
    // disable weekends
    isDisabled(date /*, current: { month: number, year: number; }*/) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() >= 6 || d.getDay() === 0;
        // || this.blockDate.find(x => NgbDate.from(x).equals(date)) ? true : false;
    }
    fillUserDataOnDClick(detail) {
        if (this.user[detail]) {
            this.submittedUserData[detail] = this.user[detail];
        }
    }
    matchCCRegex() {
        this.submittedUserData.ccType = 'Other';
        let ccNum = this.submittedUserData.ccLastDigits;
        if (!ccNum) {
            return;
        }
        ccNum = this.submittedUserData.ccLastDigits = this.submittedUserData.ccLastDigits.replace(/ /g, '').trim();
        const ccRegex = {
            visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
            masterCard: /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
            amex: /^3[47][0-9]{13}$/,
            dinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
        };
        for (const ccRegexName in ccRegex) {
            if (ccNum.match(ccRegex[ccRegexName])) {
                this.submittedUserData.ccType = ccRegexName.toUpperCase();
            }
        }
    }
    onSubmit(form) {
        if (!form.valid) {
            return;
        }
        this.matchCCRegex();
        const submittedDate = this.submittedUserData.ngbShippingDate;
        const jsDate = new Date(submittedDate.year, submittedDate.month - 1, submittedDate.day);
        const orderInfo = Object.assign({}, this.submittedUserData);
        orderInfo.deliveryDate = jsDate;
        orderInfo.ccLastDigits = orderInfo.ccLastDigits.substr(orderInfo.ccLastDigits.length - 4);
        console.log('TCL: OrderComponent -> onSubmit -> orderInfo', orderInfo);
        // this.blockDate[0] = this.submittedUserData.ngbShippingDate;
        this.orderService.createOrder(orderInfo);
    }
    ngOnDestroy() {
        this.getDateIsAvailableSubjectListener.unsubscribe();
        this.getlastOrNewDataSubjectLisetner.unsubscribe();
    }
};
OrderComponent.ctorParameters = () => [
    { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _services_carts_service__WEBPACK_IMPORTED_MODULE_6__["CartsService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/order/order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order.component.css */ "./src/app/shop/order/order.component.css")).default]
    })
], OrderComponent);



/***/ }),

/***/ "./src/app/shop/product-select/categories/categories.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shop/product-select/categories/categories.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inlineChildren {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.page-link {\r\n  height: 3vw;\r\n  font-size: 1vw;\r\n  line-height: 1.5vw;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\nngb-pagination ::ng-deep .page-link {\r\n  height: 3vw;\r\n  line-height: 1.5vw;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9wcm9kdWN0LXNlbGVjdC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaG9wL3Byb2R1Y3Qtc2VsZWN0L2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubGluZUNoaWxkcmVuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5wYWdlLWxpbmsge1xyXG4gIGhlaWdodDogM3Z3O1xyXG4gIGZvbnQtc2l6ZTogMXZ3O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjV2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5uZ2ItcGFnaW5hdGlvbiA6Om5nLWRlZXAgLnBhZ2UtbGluayB7XHJcbiAgaGVpZ2h0OiAzdnc7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNXZ3O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/shop/product-select/categories/categories.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shop/product-select/categories/categories.component.ts ***!
  \************************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/categories.service */ "./src/app/shop/services/categories.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/shop/services/products.service.ts");




let CategoriesComponent = class CategoriesComponent {
    constructor(categoryService, productService) {
        this.categoryService = categoryService;
        this.productService = productService;
        this.categories = [];
        // pagination controls
        this.page = 1;
        this.itemsPerPage = 5;
        this.previousPage = 0;
        this.categoryPortion = [];
        this.isActive = {};
    }
    ngOnInit() {
        this.categoryService.getCategories();
        this.categoryService.getCategoryListSubject().subscribe((categoryArray) => {
            this.categories = categoryArray;
            this.loadPage(1);
        });
    }
    onCategoryClick(categoryId) {
        this.productService.getProductsByCategory(categoryId);
    }
    // pagination functions - start
    loadPage(page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.loadData();
            this.onCategoryClick(this.categoryPortion[0]._id);
            this.classToggle(0);
        }
    }
    loadData() {
        this.categoryPortion = this.categories.slice(this.page, (this.itemsPerPage + 1));
        // css stuff
        this.isActive = [];
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < this.categoryPortion.length; index++) {
            this.isActive[index] = false;
        }
    }
    classToggle(num) {
        for (let index = 0; index < this.categoryPortion.length; index++) {
            this.isActive[index] = false;
        }
        this.isActive[num] = true;
    }
};
CategoriesComponent.ctorParameters = () => [
    { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] },
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }
];
CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-select/categories/categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories.component.css */ "./src/app/shop/product-select/categories/categories.component.css")).default]
    })
], CategoriesComponent);



/***/ }),

/***/ "./src/app/shop/product-select/product-display/product-display.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/shop/product-select/product-display/product-display.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-size{\r\n  height: 65vh;\r\n}\r\n\r\n.product-card-size{\r\n  height: 30vh;\r\n}\r\n\r\n.tiny-margin{\r\n  /* margin: 1px; */\r\n}\r\n\r\n.card-img-custom{\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  width: 6vw;\r\n  height: 6vh;\r\n}\r\n\r\n.padding-custom{\r\n  padding: 10px 10px 0 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9wcm9kdWN0LXNlbGVjdC9wcm9kdWN0LWRpc3BsYXkvcHJvZHVjdC1kaXNwbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zaG9wL3Byb2R1Y3Qtc2VsZWN0L3Byb2R1Y3QtZGlzcGxheS9wcm9kdWN0LWRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXNpemV7XHJcbiAgaGVpZ2h0OiA2NXZoO1xyXG59XHJcblxyXG4ucHJvZHVjdC1jYXJkLXNpemV7XHJcbiAgaGVpZ2h0OiAzMHZoO1xyXG59XHJcblxyXG4udGlueS1tYXJnaW57XHJcbiAgLyogbWFyZ2luOiAxcHg7ICovXHJcbn1cclxuXHJcbi5jYXJkLWltZy1jdXN0b217XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICB3aWR0aDogNnZ3O1xyXG4gIGhlaWdodDogNnZoO1xyXG59XHJcblxyXG4ucGFkZGluZy1jdXN0b217XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/shop/product-select/product-display/product-display.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shop/product-select/product-display/product-display.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDisplayComponent", function() { return ProductDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/shop/services/products.service.ts");
/* harmony import */ var _services_carts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/carts.service */ "./src/app/shop/services/carts.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let ProductDisplayComponent = class ProductDisplayComponent {
    constructor(authService, cartService, productService, toastrService) {
        this.authService = authService;
        this.cartService = cartService;
        this.productService = productService;
        this.toastrService = toastrService;
        this.isSearchResults = false;
        this.productArray = [];
        this.initialAmount = [];
    }
    ngOnInit() {
        this.user = this.authService.getUser();
        this.cartService.getLastActiveCart(this.user.id, false);
        // cart data
        this.getActiveCartsubjectLisenter = this.cartService.getlastOrNewDataSubject().subscribe((cart) => {
            this.activeCart = cart;
            this.cartService.getCartItems(this.activeCart._id);
        });
        // get cart items
        this.getCartItemsSubjectListener = this.cartService.getItemsCartDataSubject().subscribe((cartItems) => {
            this.exisitingCartItems = cartItems;
            this.initialAmount = [];
            for (const item of this.exisitingCartItems) {
                const { productRef, amount } = item;
                this.initialAmount[productRef] = amount;
            }
        });
        // get products by category
        this.productsByCategoryListener = this.productService.getproductsByCategoryDataSubject().subscribe((productArray) => {
            document.getElementById('resetView565656').scrollIntoView(true);
            this.isSearchResults = false;
            this.productArray = productArray;
        });
        // get products by regex -- manage conditional display of results
        this.getsearchProductsResultSubjectListener = this.productService.getsearchProductsResult().subscribe((productArray) => {
            console.log('hello?');
            document.getElementById('resetView565656').scrollIntoView(true);
            if (productArray.length) {
                this.isSearchResults = true;
                this.productArray = productArray;
            }
            else {
                this.isSearchResults = false;
                this.toastrService.info(`We're sorry`, `There are no matches for your search`, { progressBar: true });
            }
        });
    }
    ngOnDestroy() {
        this.productsByCategoryListener.unsubscribe();
        this.getActiveCartsubjectLisenter.unsubscribe();
        this.getCartItemsSubjectListener.unsubscribe();
        this.getsearchProductsResultSubjectListener.unsubscribe();
    }
};
ProductDisplayComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_carts_service__WEBPACK_IMPORTED_MODULE_3__["CartsService"] },
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductDisplayComponent.prototype, "isAdmin", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductDisplayComponent.prototype, "selectedCategoryId", void 0);
ProductDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-select/product-display/product-display.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-display.component.css */ "./src/app/shop/product-select/product-display/product-display.component.css")).default]
    })
], ProductDisplayComponent);



/***/ }),

/***/ "./src/app/shop/product-select/product-item/product-item.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/shop/product-select/product-item/product-item.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Chrome, Safari, Edge, Opera */\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n/* Firefox */\r\ninput[type=number] {\r\n  -moz-appearance: textfield;\r\n  text-align: center;\r\n}\r\nbutton {\r\n  display: flex;\r\n  font-weight: 900;\r\n  line-height: 2vw;\r\n  font-size: 2vw;\r\n  text-align: center;\r\n  padding: 4px 8px;\r\n}\r\n.plus-minus {\r\n  margin-bottom: 5px;\r\n}\r\nimg {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9wcm9kdWN0LXNlbGVjdC9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7QUFFQSxZQUFZO0FBQ1o7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2hvcC9wcm9kdWN0LXNlbGVjdC9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cclxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBGaXJlZm94ICovXHJcbmlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBsaW5lLWhlaWdodDogMnZ3O1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0cHggOHB4O1xyXG59XHJcblxyXG4ucGx1cy1taW51cyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/shop/product-select/product-item/product-item.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shop/product-select/product-item/product-item.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/helpers */ "./src/app/helpers/helpers.ts");
/* harmony import */ var _services_carts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/carts.service */ "./src/app/shop/services/carts.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/shop/services/products.service.ts");






let ProductItemComponent = class ProductItemComponent {
    constructor(toastService, productService, cartService) {
        this.toastService = toastService;
        this.productService = productService;
        this.cartService = cartService;
        this.capitalize = _helpers_helpers__WEBPACK_IMPORTED_MODULE_3__["Capitalize"];
    }
    ngOnInit() {
        this.cart = this.cartService.getActiveCart();
        this.cartItem = {
            _id: '',
            amount: this.initialAmount,
            name: this.productObj.name,
            price: this.productObj.price,
            imgUrl: this.productObj.imgUrl,
            total: 0,
            productRef: this.productObj._id,
            cartRef: this.cart._id
        };
        this.cartItemSubjectListener = this.cartService.getCartItem().subscribe((cartItem) => {
            if (cartItem.productRef === this.productObj._id) {
                this.cartItem.amount = cartItem.amount;
            }
        });
    }
    upDateCartItem(addOrReduce) {
        clearTimeout(this.waitForClicksEnd);
        // if amount is too high
        if (this.cartItem.amount >= this.productObj.amount) {
            return this.toastService.warning(`We're sorry`, `we cannot supply more than ${this.productObj.amount} units of this item`, { progressBar: true });
        }
        // if amount is too low
        if (this.cartItem.amount < 1 && !addOrReduce) {
            return;
        }
        addOrReduce ? this.cartItem.amount++ : this.cartItem.amount--;
        this.waitForClicksEnd = setTimeout(() => {
            this.sendToCart();
        }, 200);
    }
    setCartItemAmount() {
        const amount = this.cartItem.amount;
        if (amount >= this.productObj.amount) {
            this.cartItem.amount = this.productObj.amount;
            this.toastService.warning(`We're sorry`, `we cannot supply more than ${this.productObj.amount} units of this item`, { progressBar: true });
        }
        this.sendToCart();
    }
    sendToEdit() {
        this.productService.sendProductToEdit(this.productObj);
    }
    sendToCart() {
        this.cartService.sendToCart(this.cartItem, this.productObj._id);
    }
    ngOnDestroy() {
        this.cartItemSubjectListener.unsubscribe();
    }
};
ProductItemComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] },
    { type: _services_carts_service__WEBPACK_IMPORTED_MODULE_4__["CartsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductItemComponent.prototype, "isAdmin", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductItemComponent.prototype, "productObj", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductItemComponent.prototype, "initialAmount", void 0);
ProductItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-select/product-item/product-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-item.component.css */ "./src/app/shop/product-select/product-item/product-item.component.css")).default]
    })
], ProductItemComponent);



/***/ }),

/***/ "./src/app/shop/product-select/product-select.component.css":
/*!******************************************************************!*\
  !*** ./src/app/shop/product-select/product-select.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3AvcHJvZHVjdC1zZWxlY3QvcHJvZHVjdC1zZWxlY3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/shop/product-select/product-select.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shop/product-select/product-select.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSelectComponent", function() { return ProductSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/products.service */ "./src/app/shop/services/products.service.ts");



let ProductSelectComponent = class ProductSelectComponent {
    constructor(productService) {
        this.productService = productService;
    }
    ngOnInit() {
    }
};
ProductSelectComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductSelectComponent.prototype, "isAdmin", void 0);
ProductSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-select',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-select/product-select.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-select.component.css */ "./src/app/shop/product-select/product-select.component.css")).default]
    })
], ProductSelectComponent);



/***/ }),

/***/ "./src/app/shop/search/search.component.css":
/*!**************************************************!*\
  !*** ./src/app/shop/search/search.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3Avc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/shop/search/search.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shop/search/search.component.ts ***!
  \*************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/products.service */ "./src/app/shop/services/products.service.ts");
/* harmony import */ var _services_carts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/carts.service */ "./src/app/shop/services/carts.service.ts");




let SearchComponent = class SearchComponent {
    constructor(cartService, productService) {
        this.cartService = cartService;
        this.productService = productService;
        this.searchValue = '';
    }
    ngOnInit() {
    }
    onSearchSubmit(regex) {
        this.productService.getProductsByRegex(regex);
        this.cartService.setSearchTerm(regex);
    }
};
SearchComponent.ctorParameters = () => [
    { type: _services_carts_service__WEBPACK_IMPORTED_MODULE_3__["CartsService"] },
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.css */ "./src/app/shop/search/search.component.css")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/shop/services/categories.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shop/services/categories.service.ts ***!
  \*****************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");







let CategoriesService = class CategoriesService {
    constructor(http, router, authService) {
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.countSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.categoryListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    getCountSubject() {
        return this.countSubject.asObservable();
    }
    getCategoryListSubject() {
        return this.categoryListSubject.asObservable();
    }
    getCategories() {
        this.http.get(`${this.apiUrl}/categories/get`).subscribe((response) => {
            const count = response.categoryCount;
            if (!isNaN(count)) {
                this.countSubject.next(count);
            }
            const categories = response.categoryList;
            if (categories instanceof Array) {
                this.categoryListSubject.next(categories);
            }
        });
    }
};
CategoriesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoriesService);



/***/ }),

/***/ "./src/app/shop/shop-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shop/shop-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ShopRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopRoutingModule", function() { return ShopRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop.component */ "./src/app/shop/shop.component.ts");




const routes = [
    { path: '', component: _shop_component__WEBPACK_IMPORTED_MODULE_3__["ShopComponent"] },
];
let ShopRoutingModule = class ShopRoutingModule {
};
ShopRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ShopRoutingModule);



/***/ }),

/***/ "./src/app/shop/shop.component.css":
/*!*****************************************!*\
  !*** ./src/app/shop/shop.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".parentContainer {\r\n  display: flex;\r\n  /* flex-direction: row; */\r\n  width: calc(98vw - 5px);\r\n}\r\n\r\n.cartDiv {\r\n  border: 1px solid #ddd;\r\n  padding: 15px;\r\n  position: relative;\r\n  margin: 5px;\r\n  height: 80vh;\r\n}\r\n\r\n.shopDiv {\r\n  border: 1px solid #ddd;\r\n  padding: 15px;\r\n  position: relative;\r\n  margin: 5px;\r\n  height: 80vh;\r\n}\r\n\r\n.grabber {\r\n  content: '';\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  /* margin-left: -15px; */\r\n  cursor: ew-resize;\r\n  height: 100%;\r\n  width: 10px;\r\n  border-top: 1px solid #f1f1f1;\r\n  overflow: hidden;\r\n  background-color: #eff0f1;\r\n  background-image: url('https://cdn.sstatic.net/Sites/stackoverflow/img/sprites.svg'), none;\r\n  background-position: 210px -364px;\r\n  background-size: initial;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtFQUNOLFNBQVM7RUFDVCx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsMEZBQTBGO0VBQzFGLGlDQUFpQztFQUNqQyx3QkFBd0I7RUFDeEIsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyZW50Q29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiByb3c7ICovXHJcbiAgd2lkdGg6IGNhbGMoOTh2dyAtIDVweCk7XHJcbn1cclxuXHJcbi5jYXJ0RGl2IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGhlaWdodDogODB2aDtcclxufVxyXG5cclxuLnNob3BEaXYge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG59XHJcblxyXG4uZ3JhYmJlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IC0xNXB4OyAqL1xyXG4gIGN1cnNvcjogZXctcmVzaXplO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmYwZjE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2Nkbi5zc3RhdGljLm5ldC9TaXRlcy9zdGFja292ZXJmbG93L2ltZy9zcHJpdGVzLnN2ZycpLCBub25lO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDIxMHB4IC0zNjRweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGluaXRpYWw7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/orders.service */ "./src/app/shop/services/orders.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
// credit: https://www.freakyjolly.com/angular-8-re-sizable-elements-and-layouts-in-angular-8-application/





let ShopComponent = class ShopComponent {
    constructor(route, router, ordersService, authService) {
        this.route = route;
        this.router = router;
        this.ordersService = ordersService;
        this.authService = authService;
        // resize config
        this.cartDiv = {
            width: 0,
            x: 100,
            oldX: 0,
            grabber: false,
        };
        this.shopDiv = {
            width: 0,
        };
        ////
        // admin view
        this.isAdmin = false;
    }
    ngOnInit() {
        this.showShopOrOrder = this.ordersService.getShopOrOrder();
        // listen to view switch
        this.switchToOrderViewSubjectListener = this.ordersService.getswitchToOrderViewSubject().subscribe((shopOrOrder) => {
            console.log('TCL: ShopComponent -> ngOnInit -> shopOrOrder', shopOrOrder);
            this.showShopOrOrder = shopOrOrder;
        });
        this.authService.getRole().then((role) => {
            this.isAdmin = role;
        });
        console.log('TCL: ShopComponent -> ngOnInit ->  this.isAdmin', this.isAdmin);
        // resize code
        const totalWidth = this.parentDiv.nativeElement.offsetWidth;
        this.cartDiv.width = Math.floor((totalWidth / 100) * 25);
        this.shopDiv.width = Math.floor((totalWidth / 100) * 75);
        /////
    }
    // resize methods
    onMouseMove(event) {
        if (!this.cartDiv.grabber) {
            return;
        }
        this.resizer(event.clientX - this.cartDiv.oldX);
        this.cartDiv.oldX = event.clientX;
    }
    onMouseUp(event) {
        this.cartDiv.grabber = false;
    }
    resizer(offsetX) {
        const totalWidth = this.parentDiv.nativeElement.offsetWidth;
        const cartWidth = this.cartDiv.oldX;
        if (cartWidth < Math.floor((totalWidth / 100) * 22)) {
            this.shopDiv.width = Math.floor((totalWidth / 100) * 77);
            this.cartDiv.width = Math.floor((totalWidth / 100) * 22);
            return;
        }
        if (cartWidth > Math.floor((totalWidth / 100) * 40)) {
            return;
        }
        this.shopDiv.width = totalWidth - cartWidth;
        this.cartDiv.width += offsetX;
    }
    onMouseDown(event) {
        if (event.target.id === 'resizeDiv') {
            this.cartDiv.grabber = true;
            this.cartDiv.oldX = event.clientX;
        }
    }
    ////
    // switch back to shop
    // switchToShop() {
    //   this.ordersService.switchViews(false);
    // }
    ngOnDestroy() {
        this.switchToOrderViewSubjectListener.unsubscribe();
    }
};
ShopComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('parentContainer', { static: true })
], ShopComponent.prototype, "parentDiv", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mousemove', ['$event'])
], ShopComponent.prototype, "onMouseMove", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mouseup', ['$event'])
], ShopComponent.prototype, "onMouseUp", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mousedown', ['$event'])
], ShopComponent.prototype, "onMouseDown", null);
ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shop.component.css */ "./src/app/shop/shop.component.css")).default]
    })
], ShopComponent);



/***/ }),

/***/ "./src/app/shop/shopGroup.module.ts":
/*!******************************************!*\
  !*** ./src/app/shop/shopGroup.module.ts ***!
  \******************************************/
/*! exports provided: ShopGroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopGroupModule", function() { return ShopGroupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _bootstrapGroup_bootstrap_modules_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bootstrapGroup/bootstrap-modules.module */ "./src/app/bootstrapGroup/bootstrap-modules.module.ts");
/* harmony import */ var _shop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/shop/cart/cart.component.ts");
/* harmony import */ var _product_select_product_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-select/product-select.component */ "./src/app/shop/product-select/product-select.component.ts");
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shop-routing.module */ "./src/app/shop/shop-routing.module.ts");
/* harmony import */ var _product_select_categories_categories_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-select/categories/categories.component */ "./src/app/shop/product-select/categories/categories.component.ts");
/* harmony import */ var _product_select_product_display_product_display_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-select/product-display/product-display.component */ "./src/app/shop/product-select/product-display/product-display.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search/search.component */ "./src/app/shop/search/search.component.ts");
/* harmony import */ var _product_select_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-select/product-item/product-item.component */ "./src/app/shop/product-select/product-item/product-item.component.ts");
/* harmony import */ var _cart_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cart/cart-item/cart-item.component */ "./src/app/shop/cart/cart-item/cart-item.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./order/order.component */ "./src/app/shop/order/order.component.ts");
/* harmony import */ var _pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pipes/highlight.pipe */ "./src/app/pipes/highlight.pipe.ts");
/* harmony import */ var _order_order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./order/order-modal/order-modal.component */ "./src/app/shop/order/order-modal/order-modal.component.ts");
/* harmony import */ var _admin_edit_admin_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-edit/admin-edit.component */ "./src/app/shop/admin-edit/admin-edit.component.ts");


















let ShopGroupModule = class ShopGroupModule {
};
ShopGroupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _shop_component__WEBPACK_IMPORTED_MODULE_5__["ShopComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"],
            _product_select_product_select_component__WEBPACK_IMPORTED_MODULE_7__["ProductSelectComponent"],
            _product_select_categories_categories_component__WEBPACK_IMPORTED_MODULE_9__["CategoriesComponent"],
            _product_select_product_display_product_display_component__WEBPACK_IMPORTED_MODULE_10__["ProductDisplayComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"],
            _product_select_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_12__["ProductItemComponent"],
            _cart_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_13__["CartItemComponent"],
            _order_order_component__WEBPACK_IMPORTED_MODULE_14__["OrderComponent"],
            _pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_15__["HighlightSearchPipe"],
            _order_order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_16__["OrderModalComponent"],
            _admin_edit_admin_edit_component__WEBPACK_IMPORTED_MODULE_17__["AdminEditComponent"]
        ],
        entryComponents: [_order_order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_16__["OrderModalComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bootstrapGroup_bootstrap_modules_module__WEBPACK_IMPORTED_MODULE_4__["BootstrapModuleGroup"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shop_routing_module__WEBPACK_IMPORTED_MODULE_8__["ShopRoutingModule"]
        ]
    })
], ShopGroupModule);



/***/ })

}]);