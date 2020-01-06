(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-authGroup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row sizing\">\r\n  <div class=\"col-4 padding-custom\">\r\n    <div class=\"card mt-1 bg-light-blue\">\r\n      <div class=\"card-body\">\r\n\r\n        <!-- form start -->\r\n        <form class=\"bg-light p-2 border-custom\"\r\n          #loginForm=\"ngForm\"\r\n          name=\"loginForm\"\r\n          (ngSubmit)=\"onSubmit(loginForm)\">\r\n\r\n          <h6 class=\"ml-1\">Welcome GUEST, Please Login.</h6>\r\n\r\n          <!-- email input control -->\r\n          <div class=\"form-group m-2\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"text\"\r\n              [readonly]=\"isReadOnly\"\r\n              class=\"form-control\"\r\n              name=\"email\"\r\n              [(ngModel)]=\"submittedUserData.email\"\r\n              #email=\"ngModel\"\r\n              [ngClass]=\"{ 'is-invalid': loginForm.submitted && email.invalid }\"\r\n              placeholder=\"Please provide your email\"\r\n              required\r\n              email />\r\n            <div *ngIf=\"loginForm.submitted && email.invalid\"\r\n              class=\"invalid-feedback\">\r\n              <div *ngIf=\"email.errors.required\">Email is required</div>\r\n              <div *ngIf=\"email.errors.email\">Email must be a valid email address</div>\r\n              <div *ngIf=\"email.errors.invalidID\">Credntials invalid - maybe a typo on email or password?</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- password input control -->\r\n          <div class=\"form-group m-2\">\r\n\r\n            <label for=\"passowrdId\">Password</label>\r\n\r\n            <input type=\"password\"\r\n              class=\"form-control\"\r\n              id=\"passowrdId\"\r\n              placeholder=\"Password\"\r\n              aria-describedby=\"passwordError\"\r\n              [(ngModel)]=\"submittedUserData.password\"\r\n              name=\"password\"\r\n              required\r\n              #password=\"ngModel\"\r\n              [readonly]=\"isReadOnly\">\r\n\r\n            <div *ngIf=\"loginForm.submitted && password.invalid\"\r\n              class=\"invalid-feedback\">\r\n              <div *ngIf=\"password.errors.required\">Password is required</div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <!-- Submit form/registerLink -->\r\n          <div class=\"row m-1\">\r\n\r\n            <a class=\"mr-auto mt-1\"\r\n              [routerLink]=\"['/auth/signup']\">\r\n              <span>Not Registered? Click HERE!</span>\r\n            </a>\r\n\r\n            <button type=\"submit\"\r\n              class=\"btn btn-primary\">\r\n              <span>SUBMIT</span>\r\n            </button>\r\n\r\n          </div>\r\n          <hr>\r\n          <br>\r\n        </form>\r\n        <!-- form end -->\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-4 padding-custom\">\r\n    <div class=\"card mt-1 bg-light-blue\">\r\n      <div class=\"card-body\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-4 padding-custom\">\r\n    <div class=\"card mt-1 bg-light-blue\">\r\n      <div class=\"card-body\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row sizing\">\r\n  <div class=\"col-4 padding-custom\">\r\n    <div class=\"card mt-1 bg-light-blue\">\r\n      <div class=\"card-body\">\r\n\r\n        <!-- signupFormA start -->\r\n        <form *ngIf=\"!partOneValid\"\r\n          class=\"bg-light p-2 border-custom\"\r\n          name=\"form\"\r\n          (ngSubmit)=\"signupFormA.form.valid && onSubmitPartOne(signupFormA)\"\r\n          #signupFormA=\"ngForm\"\r\n          [mustMatch]=\"['password', 'confirmPassword']\"\r\n          novalidate>\r\n\r\n          <!-- tz id -->\r\n          <div class=\"form-group\">\r\n            <label for=\"tzId\">TZ ID</label>\r\n            <input type=\"text\"\r\n              [readonly]=\"isReadOnly\"\r\n              class=\"form-control\"\r\n              name=\"tzId\"\r\n              [(ngModel)]=\"submittedUserData.tzId\"\r\n              #tzId=\"ngModel\"\r\n              [ngClass]=\"{ 'is-invalid': signupFormA.submitted && tzId.invalid }\"\r\n              placeholder=\"Please enter your 9 digit id\"\r\n              required\r\n              minlength=\"9\"\r\n              maxlength=\"9\"\r\n              pattern=\"[0-9]+\" />\r\n\r\n            <div *ngIf=\"signupFormA.submitted && tzId.invalid\"\r\n              class=\"invalid-feedback\">\r\n              <div *ngIf=\"tzId.errors.required\">Last Name is required</div>\r\n              <div *ngIf=\"tzId.errors.minlength||tzId.errors.maxlength||tzId.errors.pattern\">TzId must be 9 digits</div>\r\n              <div *ngIf=\"tzId.errors.invalidID\">\r\n                TzId is in use - please <a [routerLink]=\"['/','auth','login']\">LOGIN</a>\r\n                instead\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- email -->\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"text\"\r\n              [readonly]=\"isReadOnly\"\r\n              class=\"form-control\"\r\n              name=\"email\"\r\n              [(ngModel)]=\"submittedUserData.email\"\r\n              #email=\"ngModel\"\r\n              [ngClass]=\"{ 'is-invalid': signupFormA.submitted && email.invalid }\"\r\n              placeholder=\"Please provide your email\"\r\n              required\r\n              email />\r\n            <div *ngIf=\"signupFormA.submitted && email.invalid\"\r\n              class=\"invalid-feedback\">\r\n              <div *ngIf=\"email.errors.required\">Email is required</div>\r\n              <div *ngIf=\"email.errors.email\">Email must be a valid email address</div>\r\n              <div *ngIf=\"email.errors.unique\">This email is already registered please <a\r\n                  [routerLink]=\"['/','auth','login']\">LOGIN</a>\r\n                instead</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- password -->\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\"\r\n              [readonly]=\"isReadOnly\"\r\n              class=\"form-control\"\r\n              name=\"password\"\r\n              [(ngModel)]=\"submittedUserData.password\"\r\n              #password=\"ngModel\"\r\n              [ngClass]=\"{ 'is-invalid': signupFormA.submitted && password.invalid }\"\r\n              placeholder=\"Password must be 6 characters long\"\r\n              required\r\n              minlength=\"6\" />\r\n            <div *ngIf=\"signupFormA.submitted && password.invalid\"\r\n              class=\"invalid-feedback\">\r\n              <div *ngIf=\"password.errors.required\">Password is required</div>\r\n              <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- confirm -->\r\n          <div class=\"form-group\">\r\n            <label for=\"confirmPassword\">Confirm Password</label>\r\n            <input type=\"password\"\r\n              [readonly]=\"isReadOnly\"\r\n              class=\"form-control\"\r\n              name=\"confirmPassword\"\r\n              [(ngModel)]=\"submittedUserData.confirmPassword\"\r\n              #confirmPassword=\"ngModel\"\r\n              [ngClass]=\"{ 'is-invalid': signupFormA.submitted && confirmPassword.invalid }\"\r\n              placeholder=\"Password must be 6 characters long\"\r\n              required />\r\n            <div *ngIf=\"signupFormA.submitted && confirmPassword.invalid\"\r\n              class=\"invalid-feedback\">\r\n              <div *ngIf=\"confirmPassword.errors.required\">Confirm Password is required</div>\r\n              <div *ngIf=\"confirmPassword.errors.mustMatch\">Passwords must match</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n\r\n            <div *ngIf=\"isLoading\"\r\n              class=\"spinner-border text-primary\"\r\n              role=\"status\">\r\n              <span class=\"sr-only\">Loading...</span>\r\n            </div>\r\n\r\n            <button *ngIf=\"!isLoading\"\r\n              class=\"btn btn-primary\">Continue Registration</button>\r\n          </div>\r\n\r\n        </form>\r\n        <!-- signupFormA end -->\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-4 padding-custom\">\r\n    <div class=\"card mt-1 bg-light-blue\">\r\n      <div class=\"card-body\">\r\n\r\n        <!-- signupFormB start -->\r\n        <form *ngIf=\"partOneValid\"\r\n          class=\"bg-light p-2 border-custom\"\r\n          name=\"form\"\r\n          (ngSubmit)=\"signupFormB.form.valid && onSubmitPartTwo(signupFormB)\"\r\n          #signupFormB=\"ngForm\"\r\n          novalidate>\r\n\r\n          <!-- firstname -->\r\n          <div class=\"form-group\">\r\n            <label for=\"firstname\">First Name</label>\r\n            <input type=\"text\"\r\n              [readonly]=\"isReadOnly\"\r\n              class=\"form-control\"\r\n              name=\"firstname\"\r\n              [(ngModel)]=\"submittedUserData.firstname\"\r\n              #firstname=\"ngModel\"\r\n              [ngClass]=\"{ 'is-invalid': signupFormB.submitted && firstname.invalid }\"\r\n              placeholder=\"Please enter your first name\"\r\n              required\r\n              minlength=\"3\" />\r\n\r\n            <div *ngIf=\"signupFormB.submitted && firstname.invalid\"\r\n              class=\"invalid-feedback\">\r\n              <div *ngIf=\"firstname.errors.required\">Please add your first name</div>\r\n              <div *ngIf=\"firstname.errors.minlength\">first name must be at least 3 charcters</div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <!-- lastname -->\r\n          <div class=\"form-group\">\r\n            <label for=\"lastname\">Last Name</label>\r\n            <input type=\"text\"\r\n              [readonly]=\"isReadOnly\"\r\n              class=\"form-control\"\r\n              name=\"lastname\"\r\n              [(ngModel)]=\"submittedUserData.lastname\"\r\n              #lastname=\"ngModel\"\r\n              [ngClass]=\"{ 'is-invalid': signupFormB.submitted && lastname.invalid }\"\r\n              placeholder=\"Please provide your lastname\"\r\n              required\r\n              minlength=\"3\" />\r\n            <div *ngIf=\"signupFormB.submitted && lastname.invalid\"\r\n              class=\"invalid-feedback\">\r\n              <div *ngIf=\"lastname.errors.required\">Please add your last name</div>\r\n              <div *ngIf=\"lastname.errors.minlength\">last name must be at least 3 charcters</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- city select -->\r\n          <div class=\"form-group\">\r\n            <label for=\"city\">Select your city</label>\r\n            <select class=\"form-control\"\r\n              #city=\"ngModel\"\r\n              name=\"city\"\r\n              [ngClass]=\"{ 'is-invalid': signupFormB.submitted && street.invalid }\"\r\n              [(ngModel)]=\"submittedUserData.city\"\r\n              [disabled]=\"isReadOnly\"\r\n              required>\r\n              <!-- <option [selected]=\"'default'\">No Default Layout</option> -->\r\n              <option *ngFor=\"let option of cityList\"\r\n                [value]=\"option\">{{option}}</option>\r\n            </select>\r\n\r\n            <div *ngIf=\"signupFormB.submitted && city.invalid\"\r\n              class=\"invalid-feedback\">\r\n              <div *ngIf=\"city.errors.required\">Please select your city</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- street -->\r\n          <div class=\"form-group\">\r\n            <label for=\"street\">street Name</label>\r\n            <input type=\"text\"\r\n              [readonly]=\"isReadOnly\"\r\n              class=\"form-control\"\r\n              name=\"street\"\r\n              [(ngModel)]=\"submittedUserData.street\"\r\n              #street=\"ngModel\"\r\n              [ngClass]=\"{ 'is-invalid': signupFormB.submitted && street.invalid }\"\r\n              placeholder=\"Please provide your street\"\r\n              required\r\n              minlength=\"3\" />\r\n            <div *ngIf=\"signupFormB.submitted && street.invalid\"\r\n              class=\"invalid-feedback\">\r\n              <div *ngIf=\"street.errors.required\">Please add your last name</div>\r\n              <div *ngIf=\"street.errors.minlength\">last name must be at least 3 charcters</div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\">Complete Registration</button>\r\n          </div>\r\n\r\n        </form>\r\n\r\n        <!-- signupFormB end -->\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-4 padding-custom\">\r\n    <div class=\"card mt-1 bg-light-blue\">\r\n      <div class=\"card-body\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");





const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/auth/authGroup.module.ts":
/*!******************************************!*\
  !*** ./src/app/auth/authGroup.module.ts ***!
  \******************************************/
/*! exports provided: AuthGroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGroupModule", function() { return AuthGroupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _bootstrapGroup_bootstrap_modules_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bootstrapGroup/bootstrap-modules.module */ "./src/app/bootstrapGroup/bootstrap-modules.module.ts");
/* harmony import */ var _signup_matchPasswords_must_match_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/matchPasswords/must-match.directive */ "./src/app/auth/signup/matchPasswords/must-match.directive.ts");









let AuthGroupModule = class AuthGroupModule {
};
AuthGroupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
            _signup_matchPasswords_must_match_directive__WEBPACK_IMPORTED_MODULE_8__["MustMatchDirective"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bootstrapGroup_bootstrap_modules_module__WEBPACK_IMPORTED_MODULE_7__["BootstrapModuleGroup"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"]
        ]
    })
], AuthGroupModule);



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");




let LoginComponent = class LoginComponent {
    constructor(authService, toastService) {
        this.authService = authService;
        this.toastService = toastService;
        this.isReadOnly = true;
        this.submittedUserData = {
            email: 'sysAdmin@email.com',
            password: 'MooCow1',
        };
    }
    ngOnInit() {
        // deal with pesky autocomplete
        setTimeout(() => {
            this.isReadOnly = false;
        }, 1000);
    }
    onSubmit(form) {
        this.loginForm.form.markAllAsTouched();
        if (this.loginForm.invalid) {
            return;
        }
        const { email, password } = this.loginForm.value;
        this.submittedUserData = {
            // tslint:disable-next-line: object-literal-shorthand
            email: email,
            // tslint:disable-next-line: object-literal-shorthand
            password: password,
        };
        this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe((authStatus) => {
            if (!authStatus) {
                this.toastService.error('Please try again', 'Not authorized', { progressBar: true });
                form.controls.email.setErrors({ invalidID: true });
                form.controls.password.setErrors({ invalidID: true });
                this.submittedUserData.password = '';
            }
        });
    }
    ngOnDestroy() {
        if (this.authStatusSub !== undefined) {
            this.authStatusSub.unsubscribe();
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginForm', { static: true })
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/signup/matchPasswords/must-match.directive.ts":
/*!********************************************************************!*\
  !*** ./src/app/auth/signup/matchPasswords/must-match.directive.ts ***!
  \********************************************************************/
/*! exports provided: MustMatchDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatchDirective", function() { return MustMatchDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _must_match_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./must-match.validator */ "./src/app/auth/signup/matchPasswords/must-match.validator.ts");
var MustMatchDirective_1;




let MustMatchDirective = MustMatchDirective_1 = class MustMatchDirective {
    constructor() {
        // tslint:disable-next-line: no-input-rename
        this.mustMatch = [];
    }
    validate(formGroup) {
        return Object(_must_match_validator__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])(this.mustMatch[0], this.mustMatch[1])(formGroup);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mustMatch')
], MustMatchDirective.prototype, "mustMatch", void 0);
MustMatchDirective = MustMatchDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        // tslint:disable-next-line: directive-selector
        selector: '[mustMatch]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: MustMatchDirective_1, multi: true }]
    })
], MustMatchDirective);



/***/ }),

/***/ "./src/app/auth/signup/matchPasswords/must-match.validator.ts":
/*!********************************************************************!*\
  !*** ./src/app/auth/signup/matchPasswords/must-match.validator.ts ***!
  \********************************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
            return null;
        }
        // return null if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-group{\r\n  min-height: 6vw;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cHtcclxuICBtaW4taGVpZ2h0OiA2dnc7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



let SignupComponent = class SignupComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLoading = true;
        this.isReadOnly = true;
        this.tempUserName = 'GUEST';
        this.partOneValid = false;
        this.cannotRegisterId = false;
        this.cityList = ['Select City', 'Tel-Aviv', 'Holon', 'Arad', `Be'er Sheva`, 'Yokneam', 'Rehovot', 'Safed', 'Netivot', 'Eilat', 'Metula'];
    }
    ngOnInit() {
        this.isLoading = false;
        // init user data model for ngform use
        this.submittedUserData = {
            // DEV VARS -- DELETE before production!
            email: 'test2@email.com',
            tzId: '789546322',
            password: 'MooCow1',
            confirmPassword: 'MooCow1',
            city: this.cityList[4],
            street: 'Moo St',
            firstname: 'Jerry',
            lastname: 'Seinfeld',
        };
        // deal with pesky autocomplete
        setTimeout(() => {
            this.isReadOnly = false;
        }, 1000);
        this.submittedUserData.city = this.cityList[0];
    }
    ngAfterViewInit() {
    }
    onSubmitPartOne(form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.uniqueIdAndEmail(this.submittedUserData.tzId, this.submittedUserData.email);
        // handle this.authservice.uniqueIdAndEmail() response
        this.validTzId = this.authService.validEmailandTzId().subscribe((response) => {
            this.isLoading = false;
            this.partOneValid = response.canUseTzId && response.canUseEmail;
            if (!response.canUseTzId) {
                this.cannotRegisterId = true;
                form.controls.tzId.setErrors({ invalidID: true });
            }
            if (!response.canUseEmail) {
                this.cannotRegisterId = true;
                form.controls.email.setErrors({ unique: true });
            }
        });
    }
    onSubmitPartTwo(form) {
        if (form.invalid) {
            return;
        }
        const applicant = this.submittedUserData;
        const registerUserData = {
            email: applicant.email,
            iic: applicant.tzId,
            password: applicant.password,
            city: applicant.city,
            street: applicant.street,
            firstName: applicant.firstname,
            lastName: applicant.lastname,
            role: false,
            id: '',
        };
        this.isLoading = true;
        this.authService.createUser(registerUserData);
    }
    ngOnDestroy() {
        if (this.validTzId !== undefined) {
            this.validTzId.unsubscribe();
        }
    }
};
SignupComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ })

}]);