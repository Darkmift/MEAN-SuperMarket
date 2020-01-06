function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/helpers/helpers.ts":
  /*!************************************!*\
    !*** ./src/app/helpers/helpers.ts ***!
    \************************************/

  /*! exports provided: Capitalize, func2 */

  /***/
  function srcAppHelpersHelpersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Capitalize", function () {
      return Capitalize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "func2", function () {
      return func2;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function Capitalize(s) {
      if (typeof s !== 'string') {
        return '';
      }

      return s.charAt(0).toUpperCase() + s.slice(1);
    }

    function func2() {}
    /***/

  },

  /***/
  "./src/app/shop/services/products.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shop/services/products.service.ts ***!
    \***************************************************/

  /*! exports provided: ProductsService */

  /***/
  function srcAppShopServicesProductsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
      return ProductsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var ProductsService =
    /*#__PURE__*/
    function () {
      function ProductsService(http, router, authService) {
        _classCallCheck(this, ProductsService);

        this.http = http;
        this.router = router;
        this.authService = authService;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.countSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.productsByCategoryDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.searchProductsResult = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.productToEdit = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      } // Subject getters


      _createClass(ProductsService, [{
        key: "getCountSubject",
        value: function getCountSubject() {
          return this.countSubject.asObservable();
        }
      }, {
        key: "getproductsByCategoryDataSubject",
        value: function getproductsByCategoryDataSubject() {
          return this.productsByCategoryDataSubject.asObservable();
        }
      }, {
        key: "getsearchProductsResult",
        value: function getsearchProductsResult() {
          return this.searchProductsResult.asObservable();
        }
      }, {
        key: "getProductToEdit",
        value: function getProductToEdit() {
          return this.productToEdit.asObservable();
        } ////

      }, {
        key: "sendProductToEdit",
        value: function sendProductToEdit(product) {
          this.productToEdit.next(product);
        }
      }, {
        key: "getProductCount",
        value: function getProductCount() {
          var _this = this;

          this.http.get("".concat(this.apiUrl, "/products/getCount")).subscribe(function (response) {
            var count = response.ProductCount;

            if (!isNaN(count)) {
              _this.countSubject.next(count);
            }
          });
        }
      }, {
        key: "getProductsByCategory",
        value: function getProductsByCategory(categoryId) {
          var _this2 = this;

          this.http.get("".concat(this.apiUrl, "/products/getByCategory/").concat(categoryId)).subscribe(function (response) {
            var productsArray = response.Product;

            if (productsArray) {
              _this2.productsByCategoryDataSubject.next(productsArray);
            }
          });
        }
      }, {
        key: "getProductsByRegex",
        value: function getProductsByRegex(regex) {
          var _this3 = this;

          this.http.get("".concat(this.apiUrl, "/products/search/").concat(regex)).subscribe(function (response) {
            var productsArray = response.searchResults;

            if (productsArray) {
              _this3.searchProductsResult.next(productsArray);
            }
          });
        } // createOrEdit true=create/false=edit

      }, {
        key: "createOrEdit",
        value: function createOrEdit(_createOrEdit, name, categoryId, price, amount, id, imageUrl, image) {
          console.log('TCL: imageUrl', imageUrl);
          var postData = new FormData();
          postData.append('name', name);
          postData.append('categoryId', categoryId);
          postData.append('price', price);
          postData.append('amount', amount);

          if (_createOrEdit) {
            postData.append('image', image);
            this.http.post(this.apiUrl + '/products/create', postData).subscribe(function (resData) {
              console.log('TCL: createOrEdit -> resData', resData);
            });
          } else {
            if (image) {
              postData.append('image', image);
            } else {
              postData.append('imgUrl', imageUrl);
            }

            postData.append('_id', id);
            console.log('TCL: imageUrl', imageUrl);
            this.http.put(this.apiUrl + '/products/edit', postData).subscribe(function (resData) {
              console.log('TCL: createOrEdit -> resData', resData);
            });
          }
        }
      }]);

      return ProductsService;
    }();

    ProductsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProductsService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map