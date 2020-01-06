(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/helpers/helpers.ts":
/*!************************************!*\
  !*** ./src/app/helpers/helpers.ts ***!
  \************************************/
/*! exports provided: Capitalize, func2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Capitalize", function() { return Capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "func2", function() { return func2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function Capitalize(s) {
    if (typeof s !== 'string') {
        return '';
    }
    return s.charAt(0).toUpperCase() + s.slice(1);
}
function func2() { }


/***/ }),

/***/ "./src/app/shop/services/products.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shop/services/products.service.ts ***!
  \***************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");







let ProductsService = class ProductsService {
    constructor(http, router, authService) {
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.countSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.productsByCategoryDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.searchProductsResult = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.productToEdit = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    // Subject getters
    getCountSubject() {
        return this.countSubject.asObservable();
    }
    getproductsByCategoryDataSubject() {
        return this.productsByCategoryDataSubject.asObservable();
    }
    getsearchProductsResult() {
        return this.searchProductsResult.asObservable();
    }
    getProductToEdit() {
        return this.productToEdit.asObservable();
    }
    ////
    sendProductToEdit(product) {
        this.productToEdit.next(product);
    }
    getProductCount() {
        this.http.get(`${this.apiUrl}/products/getCount`).subscribe((response) => {
            const count = response.ProductCount;
            if (!isNaN(count)) {
                this.countSubject.next(count);
            }
        });
    }
    getProductsByCategory(categoryId) {
        this.http.get(`${this.apiUrl}/products/getByCategory/${categoryId}`).subscribe((response) => {
            const productsArray = response.Product;
            if (productsArray) {
                this.productsByCategoryDataSubject.next(productsArray);
            }
        });
    }
    getProductsByRegex(regex) {
        this.http.get(`${this.apiUrl}/products/search/${regex}`).subscribe((response) => {
            const productsArray = response.searchResults;
            if (productsArray) {
                this.searchProductsResult.next(productsArray);
            }
        });
    }
    // createOrEdit true=create/false=edit
    createOrEdit(createOrEdit, name, categoryId, price, amount, id, imageUrl, image) {
        console.log('TCL: imageUrl', imageUrl);
        const postData = new FormData();
        postData.append('name', name);
        postData.append('categoryId', categoryId);
        postData.append('price', price);
        postData.append('amount', amount);
        if (createOrEdit) {
            postData.append('image', image);
            this.http
                .post(this.apiUrl + '/products/create', postData)
                .subscribe((resData) => {
                console.log('TCL: createOrEdit -> resData', resData);
            });
        }
        else {
            if (image) {
                postData.append('image', image);
            }
            else {
                postData.append('imgUrl', imageUrl);
            }
            postData.append('_id', id);
            console.log('TCL: imageUrl', imageUrl);
            this.http
                .put(this.apiUrl + '/products/edit', postData)
                .subscribe((resData) => {
                console.log('TCL: createOrEdit -> resData', resData);
            });
        }
    }
};
ProductsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductsService);



/***/ })

}]);