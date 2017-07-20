webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container #wrapper class=\"ll-container\">\n  <md-sidenav #sidenav class=\"ll-sidenav\" md-is-locked-open=\"false\" mode=\"{{menuMode}}\" [opened]=\"opened\">\n    <app-sidebar [loggedIn]=\"loggedIn\"></app-sidebar>\n  </md-sidenav>\n  <app-header (navToggle)=\"sidenav.toggle()\" class=\"ll-h-c\"></app-header>\n  <div class=\"ll-body\">\n    <div style=\"margin-top: 64px;\"  fxHide.lt-sm=\"false\" fxHide.gt-sm=\"true\" fxHide></div>\n    <router-outlet></router-outlet>\n  </div>\n</md-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ll-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  background: #fff; }\n  .ll-container .ll-sidenav {\n    width: 250px; }\n\n.ll-body {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  overflow: auto;\n  background: #f8f8f8; }\n\n.ll-h-c {\n  height: 64px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.title = 'LoungeLobby';
        this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.errorMessage = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        // Do your simple test on the container, for example
        if (this.width <= 600) {
            this.menuMode = "push";
            this.opened = "false";
        }
        else {
            this.menuMode = "side";
            this.opened = "true;";
        }
        this.isLoggedIn();
    };
    AppComponent.prototype.isLoggedIn = function () {
        var _this = this;
        this.userService.isLoggedIn().subscribe(function (loggedIn) { return _this.loggedIn = loggedIn.loggedin; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.onResize = function (event) {
        this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (this.width <= 600) {
            this.menuMode = "push";
            this.opened = "false";
        }
        else {
            this.menuMode = "side";
            this.opened = "true;";
        }
        console.log("resize :)");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */]],
        host: {
            '(window:resize)': 'onResize($event)'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_slick__ = __webpack_require__("../../../../ngx-slick/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_header_loggedin_header_loggedin_component__ = __webpack_require__("../../../../../src/app/components/header-loggedin/header-loggedin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_index_index_component__ = __webpack_require__("../../../../../src/app/components/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_account_account_component__ = __webpack_require__("../../../../../src/app/components/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_show_show_component__ = __webpack_require__("../../../../../src/app/components/show/show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_watch_watch_component__ = __webpack_require__("../../../../../src/app/components/watch/watch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_videogular2_core__ = __webpack_require__("../../../../videogular2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_videogular2_controls__ = __webpack_require__("../../../../videogular2/controls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_videogular2_overlay_play__ = __webpack_require__("../../../../videogular2/overlay-play.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_videogular2_overlay_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_videogular2_overlay_play__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_videogular2_buffering__ = __webpack_require__("../../../../videogular2/buffering.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_videogular2_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_videogular2_buffering__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_12__components_index_index_component__["a" /* IndexComponent */] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */] },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */] },
    { path: "account/:id", component: __WEBPACK_IMPORTED_MODULE_15__components_account_account_component__["a" /* AccountComponent */] },
    { path: "show/:id", component: __WEBPACK_IMPORTED_MODULE_16__components_show_show_component__["a" /* ShowComponent */] },
    { path: "watch/:id/:season/:episode", component: __WEBPACK_IMPORTED_MODULE_18__components_watch_watch_component__["a" /* WatchComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_header_loggedin_header_loggedin_component__["a" /* HeaderLoggedinComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_show_show_component__["a" /* ShowComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_watch_watch_component__["a" /* WatchComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_19_videogular2_core__["VgCoreModule"],
            __WEBPACK_IMPORTED_MODULE_20_videogular2_controls__["VgControlsModule"],
            __WEBPACK_IMPORTED_MODULE_21_videogular2_overlay_play__["VgOverlayPlayModule"],
            __WEBPACK_IMPORTED_MODULE_22_videogular2_buffering__["VgBufferingModule"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_slick__["a" /* SlickModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  account works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/account/account.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountComponent = (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account',
        template: __webpack_require__("../../../../../src/app/components/account/account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/account/account.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AccountComponent);

//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header-loggedin/header-loggedin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ll-header {\n  position: fixed;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n}\n\n.ll-toolbar {\n\n}\n\n.ll-fillspace {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.ll-sidebar {\n  width: 250px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header-loggedin/header-loggedin.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  header-loggedin works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/header-loggedin/header-loggedin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderLoggedinComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderLoggedinComponent = (function () {
    function HeaderLoggedinComponent() {
    }
    HeaderLoggedinComponent.prototype.ngOnInit = function () {
    };
    return HeaderLoggedinComponent;
}());
HeaderLoggedinComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header-loggedin',
        template: __webpack_require__("../../../../../src/app/components/header-loggedin/header-loggedin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header-loggedin/header-loggedin.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderLoggedinComponent);

//# sourceMappingURL=header-loggedin.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"ll-header\" fxHide.lt-sm=\"false\" fxHide>\n  <md-toolbar color=\"white\" class=\"ll-toolbar\">\n    <span (click)=\"navOpen()\" class=\"header-nav\"><md-icon>menu</md-icon></span>\n\n    <span class=\"ll-fillspace\"></span>\n    <span class=\"ll-logo\">LoungeLobby</span>\n    <span class=\"ll-fillspace\"></span>\n\n    <span class=\"header-nav\"><md-icon>search</md-icon></span>\n  </md-toolbar>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ll-header {\n  position: fixed;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  z-index: 99;\n  background: #fff; }\n  .ll-header .ll-toolbar {\n    background: #fff; }\n  .ll-header span {\n    padding: 0 5px;\n    height: 32px;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    vertical-align: middle; }\n    .ll-header span.header-nav {\n      cursor: pointer; }\n    .ll-header span .mat-icon {\n      line-height: 32px;\n      padding-right: 10px; }\n\n.ll-logo {\n  position: absolute;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  left: 50%; }\n\n.ll-fillspace {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.navToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HeaderComponent.prototype.navOpen = function () {
        this.navToggle.emit(true);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "navToggle", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-container\" *ngIf=\"!featured\">\n  <md-spinner></md-spinner>\n</div>\n<!-- featured -->\n<div class=\"ll-home-slide featured\" *ngIf=\"featured\">\n  <div class=\"ll-slide-header\">\n    LoungeLobby's Featured Shows\n  </div>\n  <div class=\"ll-slide-body\">\n    <ngx-slick class=\"carousel\" #slickModal=\"slick-modal\" [config]=\"featureConfig\">\n      <div ngxSlickItem *ngFor=\"let show of featured\" class=\"slide\">\n        <a  routerLink=\"/show/{{show.id}}\" routerLinkActive=\"active\" style=\"display: block\">\n          <div class=\"ll-slide-image\">\n            <img src=\"{{ show.poster_path }}\" alt=\"\" width=\"100%\">\n          </div>\n        </a>\n      </div>\n    </ngx-slick>\n  </div>\n</div>\n\n<!-- recently added -->\n<div class=\"ll-home-slide\" *ngIf=\"airing\">\n  <div class=\"ll-slide-header\">\n    Recently Added\n  </div>\n  <div class=\"ll-slide-body bll-body\">\n    <div fxLayout=\"row\" fxLayoutGap=\"0px\" fxLayoutWrap>\n      <div fxFlex=\"20%\" fxFlex.lt-md=\"33%\" *ngFor=\"let show of airing\" class=\"bll-show-container\">\n        <a routerLink=\"/show/{{show.id}}\" routerLinkActive=\"active\" style=\"display: block\">\n          <div class=\"image\">\n            <img src=\"{{show.poster_path}}\" alt=\"Watch {{show.name}} Online\" title=\"Watch {{show.name}} Online free at LoungeLobby\">\n          </div>\n          <div class=\"info\">\n            <div class=\"title\">{{show.name}}</div>\n            <div class=\"date\">{{show.first_air_date.substring(0,4)}}</div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- my shows -->\n\n\n<!-- trending -->\n\n<!--<div class=\"ll-home-slide\">\n  <div class=\"ll-slide-header\">\n    Trending\n  </div>\n  <div class=\"ll-slide-body\">\n    <ngx-slick class=\"carousel\" #slickModal=\"slick-modal\" [config]=\"slideConfig\">\n      <div ngxSlickItem *ngFor=\"let show of trending\" class=\"slide\">\n        <a  routerLink=\"/show/{{show.id}}\" routerLinkActive=\"active\" style=\"display: block\">\n          <div class=\"ll-slide-image\">\n            <img src=\"{{ show.backdrop_path }}\" alt=\"\" width=\"100%\">\n          </div>\n          <div class=\"ll-slide-ibody\">\n            <h3>{{show.name}}</h3>\n            <div class=\"ll-slide-info\">\n              <div class=\"info-rating\">{{show.vote_average}}/10</div>\n              <div class=\"info-year\">{{show.first_air_date.substring(0,4)}}</div>\n              <div class=\"info-summary\">{{show.overview}}</div>\n            </div>\n          </div>\n        </a>\n      </div>\n    </ngx-slick>\n  </div>\n</div>-->\n\n<!-- Recently Added -->\n<!--<div class=\"ll-home-slide\">\n  <div class=\"ll-slide-header\">\n    Recently Added\n  </div>\n  <div class=\"ll-slide-body\">\n    <ngx-slick class=\"carousel\" #slickModal=\"slick-modal\" [config]=\"slideConfig\">\n      <div ngxSlickItem *ngFor=\"let show of airing\" class=\"slide\">\n        <a  routerLink=\"/show/{{show.id}}\" routerLinkActive=\"active\" style=\"display: block\">\n          <div class=\"ll-slide-image\">\n            <img src=\"{{ show.backdrop_path }}\" alt=\"\" width=\"100%\">\n          </div>\n          <div class=\"ll-slide-ibody\">\n            <h3>{{show.name}}</h3>\n            <div class=\"ll-slide-info\">\n              <div class=\"info-rating\">{{show.vote_average}}/10</div>\n              <div class=\"info-year\">{{show.first_air_date.substring(0,4)}}</div>\n              <div class=\"info-summary\">{{show.overview}}</div>\n            </div>\n          </div>\n        </a>\n      </div>\n    </ngx-slick>\n  </div>\n</div>-->\n\n<!-- Discover -->\n\n<!--<md-grid-list cols=\"6\" rowHeight=\"100%\" gutterSize=\"10px\">\n  <md-grid-tile\n      *ngFor=\"let show of trending\"\n      [colspan]=\"2\"\n      [rowspan]=\"1\">\n\n      <md-card class=\"ll-show-card\">\n        <img md-card-image src=\"{{show.backdrop_path}}\">\n        <md-card-content>\n          {{show.name}}\n        </md-card-content>\n      </md-card>\n\n  </md-grid-tile>\n</md-grid-list>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/index/index.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ll-home-slide {\n  margin-bottom: 30px;\n  width: 100%;\n  position: relative; }\n  .ll-home-slide a {\n    text-decoration: none;\n    color: #1b1b1b; }\n  .ll-home-slide .ll-slide-header {\n    width: 100%;\n    text-align: center;\n    padding: 10px 0;\n    text-transform: uppercase;\n    color: #999; }\n  .ll-home-slide .ll-slide-body .ll-slide-ibody {\n    padding: 10px 60px; }\n    .ll-home-slide .ll-slide-body .ll-slide-ibody h3 {\n      font-size: 18px;\n      margin: 0;\n      padding: 0; }\n    .ll-home-slide .ll-slide-body .ll-slide-ibody .ll-slide-info {\n      font-size: 12px;\n      position: relative; }\n      .ll-home-slide .ll-slide-body .ll-slide-ibody .ll-slide-info div {\n        float: left;\n        padding-right: 5px; }\n      .ll-home-slide .ll-slide-body .ll-slide-ibody .ll-slide-info .info-rating {\n        font-size: 12px; }\n      .ll-home-slide .ll-slide-body .ll-slide-ibody .ll-slide-info .info-summary {\n        font-size: 12px;\n        padding-top: 5px;\n        color: #999;\n        height: 42px;\n        overflow: hidden; }\n\n.bll-body {\n  padding: 0px 30px; }\n\n.bll-show-container {\n  margin-top: 20px; }\n  .bll-show-container .image {\n    position: relative;\n    padding: 0 10px; }\n    .bll-show-container .image img {\n      width: 100%;\n      height: auto;\n      border-radius: 20px; }\n  .bll-show-container .info {\n    text-align: center;\n    padding-top: 10px;\n    width: 100%; }\n    .bll-show-container .info .title {\n      font-weight: 400;\n      font-size: 16px;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n    .bll-show-container .info .date {\n      font-weight: 300;\n      font-size: 14px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_trending_trending_service__ = __webpack_require__("../../../../../src/app/services/trending/trending.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = (function () {
    function IndexComponent(trendingService) {
        this.trendingService = trendingService;
        this.slideConfig = {
            "slidesToShow": 4,
            "slidesToScroll": 4,
            "speed": 300,
            "dots": false,
            "autoplay": false,
            "autoplaySpeed": 5000,
            "responsive": [
                {
                    "breakpoint": 1024,
                    settings: {
                        "slidesToShow": 3,
                        "slidesToScroll": 3
                    }
                },
                {
                    "breakpoint": 800,
                    settings: {
                        "slidesToShow": 2,
                        "slidesToScroll": 2
                    }
                },
                {
                    "breakpoint": 500,
                    settings: {
                        "slidesToShow": 1,
                        "slidesToScroll": 1
                    }
                }
            ]
        };
        this.featureConfig = {
            "slidesToShow": 5,
            "slidesToScroll": 1,
            "speed": 300,
            "dots": false,
            "autoplay": true,
            "autoplaySpeed": 5000,
            "centerMode": true,
            "centerPadding": "60px",
            "responsive": [
                {
                    "breakpoint": 1024,
                    settings: {
                        "slidesToShow": 3,
                        "slidesToScroll": 1
                    }
                },
                {
                    "breakpoint": 800,
                    settings: {
                        "slidesToShow": 2,
                        "slidesToScroll": 1,
                        "centerMode": false
                    }
                }
            ]
        };
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.getTrending();
        this.getAiring();
        this.getFeatured();
    };
    IndexComponent.prototype.getTrending = function () {
        var _this = this;
        this.trendingService.getTrending().subscribe(function (trending) { return _this.trending = trending; }, function (error) { return _this.errorMessage = error; });
    };
    IndexComponent.prototype.getAiring = function () {
        var _this = this;
        this.trendingService.getAiring().subscribe(function (airing) { return _this.airing = airing; }, function (error) { return _this.errorMessage = error; });
    };
    IndexComponent.prototype.getFeatured = function () {
        var _this = this;
        this.trendingService.getFeatured().subscribe(function (featured) { return _this.featured = featured; }, function (error) { return _this.errorMessage = error; });
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-index',
        template: __webpack_require__("../../../../../src/app/components/index/index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/index/index.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_trending_trending_service__["a" /* TrendingService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_trending_trending_service__["a" /* TrendingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_trending_trending_service__["a" /* TrendingService */]) === "function" && _a || Object])
], IndexComponent);

var _a;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ll-form-container login\">\n  <md-card class=\"login-card ll-form-card\">\n    <md-card-header>\n      <md-card-title class=\"ll-form-title\">Login</md-card-title>\n    </md-card-header>\n    <md-card-content>\n      <div class=\"ll-form-form\">\n        <md-input-container class=\"ll-form-input\">\n          <input mdInput placeholder=\"Username\" type=\"text\" name=\"username\" class=\"ll-username\" #user>\n        </md-input-container>\n        <md-input-container class=\"ll-form-input\">\n          <input mdInput placeholder=\"Password\" type=\"password\" name=\"password\" class=\"ll-password\" #pass>\n        </md-input-container>\n        <div class=\"warning-row\" style=\"margin-bottom: 10px; color: #E53935\" *ngIf=\"loginError\">\n          {{loginMessage}}\n        </div>\n        <div class=\"button-row\">\n          <button md-raised-button color=\"primary\" (click)=\"doLogin(user.value, pass.value)\">Log In</button>\n          <a md-button  routerLink=\"/register\" routerLinkActive=\"active\">Or Register</a>\n        </div>\n      </div>\n    </md-card-content>\n  </md-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ll-form-container {\n  width: 450px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  position: absolute;\n  top: 50%;\n  left: 50%; }\n  .ll-form-container .ll-form-input {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(userService) {
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.doLogin = function (user, password) {
        var _this = this;
        this.userService.login(user, password).subscribe(function (user) { return _this.loginResult = user; }, function (error) { return _this.errorMessage = error; }, function () { return _this.processLogin(); });
        //console.log(user, password);
    };
    LoginComponent.prototype.processLogin = function () {
        if (this.loginResult.error && this.loginResult.error == true) {
            console.log(this.loginResult);
            this.loginError = true;
            this.loginMessage = this.loginResult.errormessage;
        }
        else {
            window.location.href = "/";
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ll-form-container register\">\n  <md-card class=\"register-card ll-form-card\">\n    <md-card-header>\n      <md-card-title class=\"ll-form-title\">Register</md-card-title>\n    </md-card-header>\n    <md-card-content>\n      <div class=\"ll-form-form\">\n        <md-input-container class=\"ll-form-input\">\n          <input mdInput placeholder=\"Email\" type=\"text\" name=\"email\" class=\"ll-email\">\n        </md-input-container>\n        <md-input-container class=\"ll-form-input\">\n          <input mdInput placeholder=\"Username\" type=\"text\" name=\"username\" class=\"ll-username\">\n        </md-input-container>\n        <md-input-container class=\"ll-form-input\">\n          <input mdInput placeholder=\"Password\" type=\"password\" name=\"password\" class=\"ll-password\">\n        </md-input-container>\n        <div class=\"button-row\">\n          <button md-raised-button color=\"primary\">Register</button>\n          <a md-button routerLink=\"/login\" routerLinkActive=\"active\">Or Login</a>\n        </div>\n      </div>\n    </md-card-content>\n  </md-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ll-form-container {\n  width: 450px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  position: absolute;\n  top: 50%;\n  left: 50%; }\n  .ll-form-container .ll-form-input {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/show/show.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-container\" *ngIf=\"!episodes\">\n  <md-spinner></md-spinner>\n</div>\n<div class=\"show-container\" *ngIf=\"episodes\">\n  <div class=\"show-header-container\" style=\"\">\n    <img src=\"{{show.backdrop_path}}\">\n    <div class=\"show-information\">\n      <span class=\"show-exp\" *ngIf=\"loggedIn == true\">15exp per episode</span>\n      <h1 class=\"show-name\">{{show.name}}</h1>\n      <span class=\"show-season-count\">{{show.number_of_seasons}} seasons / {{show.episode_run_time[0]}} minute runtime</span>\n      <div class=\"show-genres\">\n        {{show.vote_average}}/10 / Genre\n      </div>\n      <div class=\"show-summary\">\n        {{show.overview}}\n      </div>\n      <div class=\"show-watch\">\n\n      </div>\n      <div class=\"show-add\" *ngIf=\"loggedIn == true\">\n        <a md-raised-button color=\"primary\">Add To My Shows</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"episode-selection\">\n    <div class=\"show-season-container\" *ngFor=\"let season of episodes.seasons\">\n      <h3>Season {{season.season_number}}</h3>\n      <div fxLayout=\"row\" fxLayoutGap=\"0px\" fxLayoutWrap>\n        <ng-container *ngFor=\"let episode of season.episodes\">\n          <div fxFlex=\"25%\" fxFlex.lt-md=\"33%\" class=\"show-episode-container\" *ngIf=\"episode.showep == true\">\n            <md-card>\n              <img md-card-image src=\"{{episodes.img_path}}{{episode.still_path}}\">\n              <md-card-content class=\"show-episode-info\">\n                <h4>Episode {{episode.episode_number}}</h4>\n                <span>{{episode.name}}</span>\n              </md-card-content>\n              <md-card-actions>\n                <a md-button routerLink=\"/watch/{{show.id}}/{{season.season_number}}/{{episode.episode_number}}\" routerLinkActive=\"active\">Watch Episode</a>\n              </md-card-actions>\n            </md-card>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/show/show.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".show-header-container {\n  width: 100%;\n  min-height: 100vh;\n  overflow: hidden;\n  z-index: 1; }\n  .show-header-container img {\n    width: auto;\n    height: 100%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    -webkit-font-smoothing: antialiased;\n    margin-left: 50%; }\n  .show-header-container .show-information {\n    position: absolute;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    -webkit-font-smoothing: antialiased;\n    top: 50%;\n    left: 50px;\n    width: 90%;\n    color: #fff; }\n    .show-header-container .show-information .show-exp {\n      color: #ff851b;\n      font-weight: 400; }\n    .show-header-container .show-information .show-name {\n      font-size: 4rem;\n      margin: 5px 0px; }\n    .show-header-container .show-information .show-genres {\n      font-size: 1.5rem;\n      font-weight: 500; }\n    .show-header-container .show-information .show-summary {\n      font-weight: 300;\n      line-height: 1rem; }\n    .show-header-container .show-information .show-add {\n      margin-top: 10px; }\n\n.episode-selection {\n  background: #f8f8f8;\n  width: 100%;\n  min-height: 100vh;\n  z-index: 2; }\n  .episode-selection .show-season-container {\n    padding: 15px; }\n    .episode-selection .show-season-container h3 {\n      margin: 0; }\n    .episode-selection .show-season-container .show-episode-container {\n      padding: 0px 10px;\n      margin-top: 10px; }\n      .episode-selection .show-season-container .show-episode-container .show-episode-image img {\n        width: 100%;\n        height: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/show/show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_show_show_service__ = __webpack_require__("../../../../../src/app/services/show/show.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowComponent = (function () {
    function ShowComponent(showService, userService, route) {
        this.showService = showService;
        this.userService = userService;
        this.route = route;
    }
    ShowComponent.prototype.ngOnInit = function () {
        this.showId = this.route.snapshot.paramMap.get('id');
        this.loadShowDetails();
        this.isLoggedIn();
        var d = new Date();
        this.today = d.toLocaleDateString();
    };
    ShowComponent.prototype.loadShowDetails = function () {
        var _this = this;
        this.showService.getShow(this.showId).subscribe(function (show) { return _this.show = show; }, function (error) { return _this.errorMessage = error; }, function () { return _this.loadEpisodes(); });
    };
    ShowComponent.prototype.loadEpisodes = function () {
        var _this = this;
        this.showService.getEpisodes(this.showId, this.show.number_of_seasons).subscribe(function (episodes) { return _this.episodes = episodes; }, function (error) { return _this.errorMessage = error; }, function () { return console.log(_this.episodes); });
    };
    ShowComponent.prototype.isLoggedIn = function () {
        var _this = this;
        this.userService.isLoggedIn().subscribe(function (loggedIn) { return _this.loggedIn = loggedIn.loggedin; }, function (error) { return _this.errorMessage = error; }, function () { return _this.isMyShow(); });
    };
    ShowComponent.prototype.isMyShow = function () {
        var _this = this;
        if (this.loggedIn) {
            this.showService.isMyShow(this.showId).subscribe(function (myShow) { return _this.myShow = myShow.myshow; }, function (error) { return _this.errorMessage = error; });
        }
    };
    return ShowComponent;
}());
ShowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-show',
        template: __webpack_require__("../../../../../src/app/components/show/show.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/show/show.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_show_show_service__["a" /* ShowService */], __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_show_show_service__["a" /* ShowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_show_show_service__["a" /* ShowService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], ShowComponent);

var _a, _b, _c;
//# sourceMappingURL=show.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-container\">\n  <div class=\"sidebar-header\">\n    <h1>LoungeLobby<span>.</span></h1>\n  </div>\n  <div class=\"sidebar-navigation\">\n    <ul>\n      <li><a routerLink=\"/\" routerLinkActive=\"active\">Home</a></li>\n      <li><a href=\"#!\">Discover</a></li>\n      <li><a href=\"#!\">Popular</a></li>\n    </ul>\n  </div>\n  <div class=\"sidebar-footer\">\n    <ul *ngIf=\"loggedIn == false\">\n      <li><a routerLink=\"/login\" routerLinkActive=\"active\">Login</a></li>\n      <li><a routerLink=\"/register\" routerLinkActive=\"active\">Register</a></li>\n    </ul>\n    <ul *ngIf=\"loggedIn == true\">\n      <li><a routerLink=\"/login\" routerLinkActive=\"active\">My Account</a></li>\n      <li><a routerLink=\"/register\" routerLinkActive=\"active\">Logout</a></li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  text-decoration: none; }\n\n.sidebar-container {\n  width: 100%;\n  height: calc(100% - 188px);\n  position: relative;\n  color: #1b1b1b;\n  padding-bottom: 188px;\n  overflow: auto; }\n  .sidebar-container .sidebar-header {\n    padding: 30px 0px;\n    text-align: center; }\n    .sidebar-container .sidebar-header h1 {\n      color: #1b1b1b;\n      font-size: 20px;\n      font-weight: 500px;\n      margin: 0; }\n      .sidebar-container .sidebar-header h1 span {\n        color: #ff851b; }\n  .sidebar-container .sidebar-navigation {\n    padding: 0 20px;\n    padding-top: 20px; }\n    .sidebar-container .sidebar-navigation ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n      transition: 0.2s all ease-in-out; }\n      .sidebar-container .sidebar-navigation ul li {\n        font-weight: 400;\n        color: #1b1b1b;\n        padding-left: 30px;\n        position: relative;\n        padding-bottom: 10px; }\n        .sidebar-container .sidebar-navigation ul li a {\n          color: #1b1b1b; }\n        .sidebar-container .sidebar-navigation ul li.selected::before, .sidebar-container .sidebar-navigation ul li:hover::before {\n          opacity: 1; }\n        .sidebar-container .sidebar-navigation ul li::before {\n          position: absolute;\n          left: 5px;\n          background-color: #ff851b;\n          height: 2px;\n          top: 10px;\n          width: 15px;\n          display: block;\n          content: '';\n          opacity: 0;\n          transition: 0.2s all ease-in-out; }\n  .sidebar-container .sidebar-footer {\n    background-color: #f3f3f3;\n    padding: 30px 0px;\n    position: absolute;\n    bottom: 0px;\n    width: 250px; }\n    .sidebar-container .sidebar-footer ul {\n      list-style-type: none;\n      margin-bottom: none; }\n      .sidebar-container .sidebar-footer ul li {\n        font-size: 12px;\n        padding: 5px 0; }\n        .sidebar-container .sidebar-footer ul li a {\n          color: #1b1b1b; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], SidebarComponent.prototype, "loggedIn", void 0);
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/watch/watch.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-container\" *ngIf=\"!videosrc\">\n  <md-spinner></md-spinner>\n</div>\n<div class=\"ll-watch-container\" *ngIf=\"videosrc\">\n  <md-card>\n    <div md-card-image class=\"ll-video-player\">\n      <vg-player>\n        <vg-overlay-play></vg-overlay-play>\n        <vg-buffering></vg-buffering>\n\n        <vg-scrub-bar>\n            <vg-scrub-bar-current-time [vgSlider]=\"true\"></vg-scrub-bar-current-time>\n            <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n        </vg-scrub-bar>\n\n        <vg-controls [vgAutohide]=\"true\" [vgAutohideTime]=\"3\">\n            <vg-play-pause></vg-play-pause>\n\n            <vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\n\n            <vg-scrub-bar style=\"pointer-events: none;\"></vg-scrub-bar>\n\n            <vg-time-display vgProperty=\"left\" vgFormat=\"mm:ss\"></vg-time-display>\n            <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\n\n            <vg-mute></vg-mute>\n            <vg-volume></vg-volume>\n\n            <vg-fullscreen></vg-fullscreen>\n        </vg-controls>\n        <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" crossorigin>\n            <source src=\"{{videosrc.link}}\" type=\"video/mp4\">\n        </video>\n      </vg-player>\n    </div>\n    <md-card-actions>\n      <a md-button routerLink=\"/show/{{showId}}\" routerLinkActive=\"active\">Return to Show Page</a>\n    </md-card-actions>\n  </md-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/watch/watch.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ll-watch-container {\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  width: 80%;\n  height: auto;\n  -webkit-font-smoothing: antialiased; }\n  .ll-watch-container video {\n    width: 100%;\n    height: calc(100% * 9); }\n\n.native-fullscreen video {\n  width: 100% !important;\n  height: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/watch/watch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_show_show_service__ = __webpack_require__("../../../../../src/app/services/show/show.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WatchComponent = (function () {
    function WatchComponent(showService, route) {
        this.showService = showService;
        this.route = route;
    }
    WatchComponent.prototype.ngOnInit = function () {
        this.showId = this.route.snapshot.paramMap.get('id');
        this.season = this.route.snapshot.paramMap.get('season');
        this.episode = this.route.snapshot.paramMap.get('episode');
        this.loadEpisode();
    };
    WatchComponent.prototype.loadEpisode = function () {
        var _this = this;
        this.showService.getEpisodeLink(this.showId, this.season, this.episode).subscribe(function (link) { return _this.videosrc = link; }, function (error) { return _this.errorMessage = error; });
    };
    return WatchComponent;
}());
WatchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-watch',
        template: __webpack_require__("../../../../../src/app/components/watch/watch.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/watch/watch.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_show_show_service__["a" /* ShowService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_show_show_service__["a" /* ShowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_show_show_service__["a" /* ShowService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], WatchComponent);

var _a, _b;
//# sourceMappingURL=watch.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/show/show.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShowService = (function () {
    function ShowService(http) {
        this.http = http;
        this.showUrl = "/api/show/";
    }
    ShowService.prototype.getShow = function (id) {
        return this.http.get(this.showUrl + ("" + id)).map(this.extractData).catch(this.handleError);
    };
    ShowService.prototype.isMyShow = function (id) {
        return this.http.get("/api/myshows/" + id).map(this.extractData).catch(this.handleError);
    };
    ShowService.prototype.getEpisodes = function (id, seasoncount) {
        return this.http.get("/api/show/" + id + "/episodes/" + seasoncount).map(this.extractData).catch(this.handleError);
    };
    ShowService.prototype.getEpisodeLink = function (id, season, episode) {
        return this.http.get("/api/show/" + id + "/season/" + season + "/episode/" + episode + "/links").map(this.extractData).catch(this.handleError);
    };
    ShowService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ShowService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return ShowService;
}());
ShowService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ShowService);

var _a;
//# sourceMappingURL=show.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/trending/trending.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrendingService = (function () {
    function TrendingService(http) {
        this.http = http;
        this.trendingUrl = "/api/trending/12";
        this.airingUrl = "/api/airing/15";
        this.featuredUrl = "/api/featured";
    }
    TrendingService.prototype.getTrending = function () {
        return this.http.get(this.trendingUrl).map(this.extractData).catch(this.handleError);
    };
    TrendingService.prototype.getAiring = function () {
        return this.http.get(this.airingUrl).map(this.extractData).catch(this.handleError);
    };
    TrendingService.prototype.getFeatured = function () {
        return this.http.get(this.featuredUrl).map(this.extractData).catch(this.handleError);
    };
    TrendingService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    TrendingService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return TrendingService;
}());
TrendingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TrendingService);

var _a;
//# sourceMappingURL=trending.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.links = {
            loggedIn: "/api/user/loggedin",
            login: "/api/user/login",
            register: "/api/user/register",
            logout: "/api/user/logout",
            user: "/api/user/me"
        };
    }
    UserService.prototype.isLoggedIn = function () {
        return this.http.get(this.links.loggedIn).map(this.extractData).catch(this.handleError);
    };
    UserService.prototype.login = function (username, password) {
        return this.http.post(this.links.login, { u: username, p: password }).map(this.extractData).catch(this.handleError);
    };
    UserService.prototype.register = function (username, password, email) {
        return this.http.post(this.links.login, { u: username, p: password, e: email }).map(this.extractData).catch(this.handleError);
        ;
    };
    UserService.prototype.logout = function () {
        return this.http.get(this.links.logout).map(this.extractData).catch(this.handleError);
    };
    UserService.prototype.me = function () {
        return this.http.get(this.links.user).map(this.extractData).catch(this.handleError);
        ;
    };
    UserService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    UserService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);