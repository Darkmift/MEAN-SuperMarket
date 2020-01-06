function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-portal-portalGroup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/portal/panel-left/panel-left.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/portal/panel-left/panel-left.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShopPortalPanelLeftPanelLeftComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isLoading\"\n  class=\"d-flex justify-content-center m-5\">\n  <div class=\"spinner-border\"\n    role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n<div *ngIf=\"!isLoading\"\n  class=\"card-body\">\n\n  <ng-container *ngIf=\"user.role; else elseTemplate\">\n\n    <h5>Welcome Administrator, {{user.firstName}}</h5>\n    <p class=\"card-text\">Please click below to open your management</p>\n\n    <hr>\n    <a class=\"btn btn-warning text-light\"\n      (click)=\"checkIsAdmin()\">Manage Shop</a>\n    <hr>\n  </ng-container>\n  <ng-template #elseTemplate>\n\n    <div *ngIf=\"hasPreviousCart\">\n      <h5 class=\"card-title\">Welcome Back, {{user.firstName}}</h5>\n      <p class=\"card-text\">Please click below to pick up from where you left off: </p>\n      <hr>\n      <a class=\"btn btn-success text-light\"\n        (click)=\"resumeShopping()\">Resume Shopping</a>\n      <hr>\n    </div>\n\n    <div *ngIf=\"!hasPreviousCart\">\n      <h5 class=\"card-title\">Welcome, {{user.firstName}}</h5>\n      <p class=\"card-text\">Click below to start a new cart: </p>\n      <hr>\n      <a class=\"btn btn-success text-light\"\n        (click)=\"resumeShopping()\">Start Shopping</a>\n      <hr>\n    </div>\n  </ng-template>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/portal/panel-middle/panel-middle.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/portal/panel-middle/panel-middle.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShopPortalPanelMiddlePanelMiddleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "      <!--  -->\n      <div *ngIf=\"!isLoading\"\n        class=\"m-5\">\n        <img src=\"{{imagePath}}\"\n          class=\"card-img-top\"\n          alt=\"{{imagePath}} is a picture of cat\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">You should buy here</h5>\n          <p class=\"card-text\">Meow</p>\n          <br>\n        </div>\n      </div>\n      <!--  -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/portal/panel-right/panel-right.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/portal/panel-right/panel-right.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShopPortalPanelRightPanelRightComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isLoading\"\n  class=\"d-flex justify-content-center m-5\">\n  <div class=\"spinner-border\"\n    role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n\n<div *ngIf=\"!isLoading\"\n  class=\"m-3\">\n  <img src=\"{{imagePath}}\"\n    class=\"card-img-top\"\n    alt=\"{{imagePath}} is a picture of cat\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Some useful info</h5>\n    <ol class=\"card-text\">\n      <li>Available products in our store:&nbsp;\n        <span class=\"badge badge-success text-light\"> {{totalProductCount}}</span>\n      </li>\n      <li>Number of orders submitted in our store:&nbsp;\n        <span class=\"badge badge-success text-light\">{{totalOrderCount}}</span>\n      </li>\n    </ol>\n    <br>\n\n    <span *ngIf=\"hasPreviousCart && !userRole\">\n      <h5 class=\"card-title\">Notification:</h5>\n      <p class=\"card-text\">\n        You have an open cart from: <span class=\"badge badge-success text-light\">{{formatDate(lastCartDate)}}</span>\n      </p>\n    </span>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/portal/portal.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/portal/portal.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShopPortalPortalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row sizing\">\n  <div class=\"col-4 padding-custom\">\n    <div class=\"card mt-1 bg-light-blue\">\n      <app-panel-left [isLoading]=\"isLoading\"\n        [user]=\"user\"\n        [hasPreviousCart]=\"hasPreviousCart\"\n        [lastActiveCartId]=\"lastActiveCart?._id\"></app-panel-left>\n    </div>\n  </div>\n  <div class=\"col-4 padding-custom\">\n    <div class=\"card mt-1 bg-light-blue\">\n      <app-panel-middle [imagePath]=\"imagePath\"\n        [isLoading]=\"isLoading\"></app-panel-middle>\n    </div>\n  </div>\n  <div class=\"col-4 padding-custom\">\n    <div class=\"card mt-1 bg-light-blue\">\n      <app-panel-right [userRole]=\"user.role\"\n        [isLoading]=\"isLoading\"\n        [imagePath]=\"imagePath\"\n        [totalProductCount]=\"totalProductCount\"\n        [totalOrderCount]=\"totalOrderCount\"\n        [hasPreviousCart]=\"hasPreviousCart\"\n        [lastCartDate]=\"lastCartDate\"></app-panel-right>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/shop/portal/panel-left/panel-left.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/shop/portal/panel-left/panel-left.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShopPortalPanelLeftPanelLeftComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3AvcG9ydGFsL3BhbmVsLWxlZnQvcGFuZWwtbGVmdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shop/portal/panel-left/panel-left.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shop/portal/panel-left/panel-left.component.ts ***!
    \****************************************************************/

  /*! exports provided: PanelLeftComponent */

  /***/
  function srcAppShopPortalPanelLeftPanelLeftComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelLeftComponent", function () {
      return PanelLeftComponent;
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


    var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _helpers_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../helpers/helpers */
    "./src/app/helpers/helpers.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var PanelLeftComponent =
    /*#__PURE__*/
    function () {
      function PanelLeftComponent(authService, router, toastService) {
        _classCallCheck(this, PanelLeftComponent);

        this.authService = authService;
        this.router = router;
        this.toastService = toastService;
        this.capitalize = _helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["Capitalize"];
      }

      _createClass(PanelLeftComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "checkIsAdmin",
        value: function checkIsAdmin() {
          var isAdmin = this.authService.getRole();
          console.log('TCL: PanelLeftComponent -> checkIsAdmin -> isAdmin', isAdmin);

          if (!isAdmin) {
            this.authService.logOut();
            this.toastService.error('Alert!', 'Not authorized', {
              progressBar: true
            });
          }

          this.resumeShopping();
        }
      }, {
        key: "resumeShopping",
        value: function resumeShopping() {
          this.router.navigate(['shop']);
        }
      }]);

      return PanelLeftComponent;
    }();

    PanelLeftComponent.ctorParameters = function () {
      return [{
        type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PanelLeftComponent.prototype, "isLoading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PanelLeftComponent.prototype, "hasPreviousCart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PanelLeftComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PanelLeftComponent.prototype, "lastActiveCartId", void 0);
    PanelLeftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-panel-left',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./panel-left.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/portal/panel-left/panel-left.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./panel-left.component.css */
      "./src/app/shop/portal/panel-left/panel-left.component.css")).default]
    })], PanelLeftComponent);
    /***/
  },

  /***/
  "./src/app/shop/portal/panel-middle/panel-middle.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/shop/portal/panel-middle/panel-middle.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShopPortalPanelMiddlePanelMiddleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3AvcG9ydGFsL3BhbmVsLW1pZGRsZS9wYW5lbC1taWRkbGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shop/portal/panel-middle/panel-middle.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shop/portal/panel-middle/panel-middle.component.ts ***!
    \********************************************************************/

  /*! exports provided: PanelMiddleComponent */

  /***/
  function srcAppShopPortalPanelMiddlePanelMiddleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelMiddleComponent", function () {
      return PanelMiddleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PanelMiddleComponent =
    /*#__PURE__*/
    function () {
      function PanelMiddleComponent() {
        _classCallCheck(this, PanelMiddleComponent);
      }

      _createClass(PanelMiddleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PanelMiddleComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PanelMiddleComponent.prototype, "isLoading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PanelMiddleComponent.prototype, "imagePath", void 0);
    PanelMiddleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-panel-middle',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./panel-middle.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/portal/panel-middle/panel-middle.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./panel-middle.component.css */
      "./src/app/shop/portal/panel-middle/panel-middle.component.css")).default]
    })], PanelMiddleComponent);
    /***/
  },

  /***/
  "./src/app/shop/portal/panel-right/panel-right.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/shop/portal/panel-right/panel-right.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShopPortalPanelRightPanelRightComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3AvcG9ydGFsL3BhbmVsLXJpZ2h0L3BhbmVsLXJpZ2h0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shop/portal/panel-right/panel-right.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shop/portal/panel-right/panel-right.component.ts ***!
    \******************************************************************/

  /*! exports provided: PanelRightComponent */

  /***/
  function srcAppShopPortalPanelRightPanelRightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelRightComponent", function () {
      return PanelRightComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PanelRightComponent =
    /*#__PURE__*/
    function () {
      function PanelRightComponent() {
        _classCallCheck(this, PanelRightComponent);
      }

      _createClass(PanelRightComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "formatDate",
        value: function formatDate(dateString) {
          var parsedDate = new Date(dateString);
          var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          var day = parsedDate.getDate();
          var monthIndex = parsedDate.getMonth();
          var year = parsedDate.getFullYear();
          return day + ' ' + monthNames[monthIndex] + ' ' + year;
        }
      }]);

      return PanelRightComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PanelRightComponent.prototype, "isLoading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PanelRightComponent.prototype, "imagePath", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PanelRightComponent.prototype, "totalProductCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PanelRightComponent.prototype, "totalOrderCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PanelRightComponent.prototype, "hasPreviousCart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PanelRightComponent.prototype, "lastCartDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PanelRightComponent.prototype, "userRole", void 0);
    PanelRightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-panel-right',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./panel-right.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/portal/panel-right/panel-right.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./panel-right.component.css */
      "./src/app/shop/portal/panel-right/panel-right.component.css")).default]
    })], PanelRightComponent);
    /***/
  },

  /***/
  "./src/app/shop/portal/portal-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/shop/portal/portal-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: PortalRoutingModule */

  /***/
  function srcAppShopPortalPortalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalRoutingModule", function () {
      return PortalRoutingModule;
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


    var _portal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./portal.component */
    "./src/app/shop/portal/portal.component.ts");

    var routes = [{
      path: '',
      component: _portal_component__WEBPACK_IMPORTED_MODULE_3__["PortalComponent"]
    }];

    var PortalRoutingModule = function PortalRoutingModule() {
      _classCallCheck(this, PortalRoutingModule);
    };

    PortalRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PortalRoutingModule);
    /***/
  },

  /***/
  "./src/app/shop/portal/portal.component.css":
  /*!**************************************************!*\
    !*** ./src/app/shop/portal/portal.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShopPortalPortalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3AvcG9ydGFsL3BvcnRhbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shop/portal/portal.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/shop/portal/portal.component.ts ***!
    \*************************************************/

  /*! exports provided: PortalComponent */

  /***/
  function srcAppShopPortalPortalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalComponent", function () {
      return PortalComponent;
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


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_carts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/carts.service */
    "./src/app/shop/services/carts.service.ts");
    /* harmony import */


    var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/products.service */
    "./src/app/shop/services/products.service.ts");
    /* harmony import */


    var _services_orders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/orders.service */
    "./src/app/shop/services/orders.service.ts");

    var PortalComponent =
    /*#__PURE__*/
    function () {
      function PortalComponent(authService, router, productsService, ordersService, cartService) {
        _classCallCheck(this, PortalComponent);

        this.authService = authService;
        this.router = router;
        this.productsService = productsService;
        this.ordersService = ordersService;
        this.cartService = cartService;
        this.isLoading = true;
        this.loadPaenlInfo = false;
      }

      _createClass(PortalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
            if (!isAuthenticated) {
              // tslint:disable-next-line: no-unused-expression
              _this.router.navigate['/auth/login'];
            }
          });
          this.isLoading = false;
          this.imagePath = 'http://localhost:3000/public/images/grumpy.jpg';
          this.user = this.authService.getUser();
          this.role = this.user.role;
          this.hasPreviousCart = false;
          this.totalProductCount = 0;
          this.totalOrderCount = 0; // fetch product count

          this.productsService.getProductCount(); // subscribe to count

          this.getProductCountSubjectListener = this.productsService.getCountSubject().subscribe(function (count) {
            _this.totalProductCount = count;
          }); // fetch order count

          this.ordersService.getOrderCount(); // subscribe to count

          this.getOrderCountSubjectListener = this.ordersService.getCountSubject().subscribe(function (count) {
            _this.totalOrderCount = count;
          });

          if (this.hasPreviousCart) {
            this.lastCartDate = this.lastActiveCart.dateEdited;
          } // fetch lastActiveCart chunk - undefined or Cart object


          this.cartService.getLastActiveCart(this.user.id, false);
          this.getHasPreviousCart = this.cartService.gethasPreviousCart().subscribe(function (hasLastCart) {
            _this.hasPreviousCart = hasLastCart;
          });
          this.getlastCartDataSubjectLisetner = this.cartService.getlastCartDataSubject().subscribe(function (cartData) {
            if (cartData.active) {
              _this.lastActiveCart = cartData;
              _this.lastCartDate = _this.lastActiveCart.dateEdited;
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authStatusSub.unsubscribe();
          this.getProductCountSubjectListener.unsubscribe();
          this.getOrderCountSubjectListener.unsubscribe();
          this.getHasPreviousCart.unsubscribe();
          this.getlastCartDataSubjectLisetner.unsubscribe();
        }
      }]);

      return PortalComponent;
    }();

    PortalComponent.ctorParameters = function () {
      return [{
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"]
      }, {
        type: _services_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"]
      }, {
        type: _services_carts_service__WEBPACK_IMPORTED_MODULE_4__["CartsService"]
      }];
    };

    PortalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-portal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./portal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/portal/portal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./portal.component.css */
      "./src/app/shop/portal/portal.component.css")).default]
    })], PortalComponent);
    /***/
  },

  /***/
  "./src/app/shop/portal/portalGroup.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/shop/portal/portalGroup.module.ts ***!
    \***************************************************/

  /*! exports provided: PortalGroupModule */

  /***/
  function srcAppShopPortalPortalGroupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalGroupModule", function () {
      return PortalGroupModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_bootstrapGroup_bootstrap_modules_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/bootstrapGroup/bootstrap-modules.module */
    "./src/app/bootstrapGroup/bootstrap-modules.module.ts");
    /* harmony import */


    var _portal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./portal.component */
    "./src/app/shop/portal/portal.component.ts");
    /* harmony import */


    var _panel_left_panel_left_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./panel-left/panel-left.component */
    "./src/app/shop/portal/panel-left/panel-left.component.ts");
    /* harmony import */


    var _panel_middle_panel_middle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./panel-middle/panel-middle.component */
    "./src/app/shop/portal/panel-middle/panel-middle.component.ts");
    /* harmony import */


    var _panel_right_panel_right_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./panel-right/panel-right.component */
    "./src/app/shop/portal/panel-right/panel-right.component.ts");
    /* harmony import */


    var _portal_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./portal-routing.module */
    "./src/app/shop/portal/portal-routing.module.ts");

    var PortalGroupModule = function PortalGroupModule() {
      _classCallCheck(this, PortalGroupModule);
    };

    PortalGroupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_portal_component__WEBPACK_IMPORTED_MODULE_5__["PortalComponent"], _panel_left_panel_left_component__WEBPACK_IMPORTED_MODULE_6__["PanelLeftComponent"], _panel_middle_panel_middle_component__WEBPACK_IMPORTED_MODULE_7__["PanelMiddleComponent"], _panel_right_panel_right_component__WEBPACK_IMPORTED_MODULE_8__["PanelRightComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_bootstrapGroup_bootstrap_modules_module__WEBPACK_IMPORTED_MODULE_4__["BootstrapModuleGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _portal_routing_module__WEBPACK_IMPORTED_MODULE_9__["PortalRoutingModule"]]
    })], PortalGroupModule);
    /***/
  }
}]);
//# sourceMappingURL=shop-portal-portalGroup-module-es5.js.map