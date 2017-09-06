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

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "virtual-scroll,\n[virtualScroll] {\n  overflow: hidden;\n  overflow-y: auto;\n  border: 1px solid #d1dadf;\n  height: 75vh;\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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
    function AppComponent(http) {
        this.http = http;
        this.codeListWithApi = "\n        import { ChangeEvent } from '@angular2-virtual-scroll';\n        ...\n\n        @Component({\n            selector: 'list-with-api',\n            template: `\n                <virtual-scroll [items]=\"buffer\" (update)=\"scrollItems = $event\"\n                    (change)=\"onListChange($event)\">\n\n                    <list-item *ngFor=\"let item of scrollItems\" [item]=\"item\"> </list-item>\n                    <div *ngIf=\"loading\" class=\"loader\">Loading...</div>\n\n                </virtual-scroll>\n            `\n        })\n        export class ListWithApiComponent implements OnChanges {\n\n            @Input()\n            items: ListItem[];\n\n            protected buffer: ListItem[] = [];\n            protected loading: boolean;\n\n            protected onListChange(event: ChangeEvent) {\n                if (event.end !== this.buffer.length) return;\n                this.loading = true;\n                this.fetchNextChunk(this.buffer.length, 10).then(chunk => {\n                    this.buffer = this.buffer.concat(chunk);\n                    this.loading = false;\n                }, () => this.loading = false);\n            }\n\n            protected fetchNextChunk(skip: number, limit: number): Promise<ListItem[]> {\n                return new Promise((resolve, reject) => {\n                    ....\n                });\n            }\n        }\n    ".replace(/^        /mg, '');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('assets/data/items.json')
            .map(function (response) { return response.json(); })
            .subscribe(function (data) { return _this.items = data; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: "\n        <h2>With <span>Single Column</span></h2>\n        <vertical-list [items]=\"items\"></vertical-list>\n\n        <h2>With <span>Multiple Columns</span></h2>\n        <multi-col-list [items]=\"items\"></multi-col-list>\n\n        <h2>With <span>Table</span></h2>\n        <table-list [items]=\"items\"></table-list>\n\n        <h2>Loading in <span>Chunks</span></h2>\n        <list-with-api [items]=\"items\"></list-with-api>\n        <p><strong>change</strong> event is fired every time start or end index change.\n        You could use this to load more items at the end of the scroll. See below.</p>\n        <pre><code class=\"javascript\">{{codeListWithApi}}</code></pre>\n    ",
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lists_list_item_component__ = __webpack_require__("../../../../../src/app/lists/list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lists_list_with_api_component__ = __webpack_require__("../../../../../src/app/lists/list-with-api.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lists_multi_col_list_component__ = __webpack_require__("../../../../../src/app/lists/multi-col-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lists_table_list_component__ = __webpack_require__("../../../../../src/app/lists/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lists_vertical_list_component__ = __webpack_require__("../../../../../src/app/lists/vertical-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_virtual_scroll__ = __webpack_require__("../../../../angular2-virtual-scroll/dist/virtual-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_virtual_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_virtual_scroll__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__lists_list_item_component__["a" /* ListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_5__lists_list_with_api_component__["a" /* ListWithApiComponent */],
            __WEBPACK_IMPORTED_MODULE_6__lists_multi_col_list_component__["a" /* MultiColListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__lists_table_list_component__["a" /* TableListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__lists_vertical_list_component__["a" /* VerticalListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10_angular2_virtual_scroll__["VirtualScrollModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/lists/list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListItemComponent = (function () {
    function ListItemComponent() {
    }
    return ListItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ListItemComponent.prototype, "item", void 0);
ListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'list-item',
        template: "\n        <div class=\"avatar\">{{item.index}}</div>\n        <div class=\"item-content\">\n            <div class=\"name\">{{item.name}}</div>\n            <div>\n                <span class=\"badge\">{{item.age}}/{{item.gender?.substr(0, 1).toUpperCase()}}</span>\n                <span>{{item.email}} | {{item.phone}}</span>\n            </div>\n            <div>{{item.address}}</div>\n        </div>\n    ",
        styles: [__webpack_require__("../../../../../src/app/lists/list-item.scss")]
    })
], ListItemComponent);

//# sourceMappingURL=list-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/lists/list-item.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  border-bottom: 1px solid #d1dadf;\n  background: white;\n  font-size: 1em;\n  padding: 20px;\n  height: 100px;\n  line-height: 1.2em;\n  overflow: hidden; }\n\n.avatar {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  vertical-align: top;\n  margin-top: 5px;\n  display: inline-block;\n  border-radius: 100%;\n  background: #3d4f5d;\n  color: #fff; }\n\n.item-content {\n  display: inline-block;\n  width: calc(100% - 60px);\n  padding: 5px;\n  vertical-align: middle; }\n  .item-content div {\n    opacity: .6; }\n  .item-content .name {\n    display: inline-block;\n    font-weight: bold;\n    opacity: 1; }\n  .item-content .badge {\n    opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lists/list-with-api.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListWithApiComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListWithApiComponent = (function () {
    function ListWithApiComponent() {
        this.buffer = [];
        this.bufferSize = 10;
    }
    ListWithApiComponent.prototype.ngOnChanges = function (changes) {
        this.reset();
    };
    ListWithApiComponent.prototype.reset = function () {
        var _this = this;
        this.fetchNextChunk(0, this.bufferSize, {}).then(function (chunk) { return _this.buffer = chunk; });
    };
    ListWithApiComponent.prototype.fetchMore = function (event) {
        var _this = this;
        this.indices = event;
        if (event.end === this.buffer.length) {
            this.loading = true;
            this.fetchNextChunk(this.buffer.length, this.bufferSize, event).then(function (chunk) {
                _this.buffer = _this.buffer.concat(chunk);
                _this.loading = false;
            }, function () { return _this.loading = false; });
        }
    };
    ListWithApiComponent.prototype.fetchNextChunk = function (skip, limit, event) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            clearTimeout(_this.timer);
            _this.timer = setTimeout(function () {
                if (skip < _this.items.length) {
                    return resolve(_this.items.slice(skip, skip + limit));
                }
                reject();
            }, 1000 + Math.random() * 1000);
        });
    };
    return ListWithApiComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ListWithApiComponent.prototype, "items", void 0);
ListWithApiComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'list-with-api',
        template: "\n    <div class=\"status\">\n      Showing <span class=\"badge\">{{indices?.start + 1}}</span>\n      - <span class=\"badge\">{{indices?.end}}</span>\n      of <span class=\"badge\">{{buffer?.length}}</span>\n      <span>({{scrollItems?.length}} nodes)</span>\n    </div>\n\n    <virtual-scroll\n      [items]=\"buffer\"\n      (update)=\"scrollItems = $event\"\n      (end)=\"fetchMore($event)\">\n\n      <list-item *ngFor=\"let item of scrollItems\" [item]=\"item\"> </list-item>\n      <div *ngIf=\"loading\" class=\"loader\">Loading...</div>\n\n    </virtual-scroll>\n    ",
        styles: [__webpack_require__("../../../../../src/app/lists/list-with-api.scss")]
    })
], ListWithApiComponent);

//# sourceMappingURL=list-with-api.component.js.map

/***/ }),

/***/ "../../../../../src/app/lists/list-with-api.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host list-item {\n  display: inline-block;\n  overflow: hidden;\n  vertical-align: top;\n  border: 0;\n  margin: 0px;\n  width: 100%; }\n\n:host button {\n  background: #03A9F4;\n  border: none;\n  color: white;\n  margin: 1em;\n  width: 4em;\n  border-radius: 5em;\n  font-size: .8em;\n  line-height: 1em;\n  padding: .5em;\n  outline: none; }\n\n:host .loader {\n  height: 4em;\n  display: block;\n  line-height: 4em;\n  text-align: center;\n  position: relative; }\n\n:host .loader:before {\n  content: ' ';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20%;\n  height: 2px;\n  background: red;\n  -webkit-animation: loader-animation 2s ease-out infinite;\n          animation: loader-animation 2s ease-out infinite; }\n\n@-webkit-keyframes loader-animation {\n  0% {\n    -webkit-transform: translate(0%);\n            transform: translate(0%); }\n  100% {\n    -webkit-transform: translate(500%);\n            transform: translate(500%); } }\n\n@keyframes loader-animation {\n  0% {\n    -webkit-transform: translate(0%);\n            transform: translate(0%); }\n  100% {\n    -webkit-transform: translate(500%);\n            transform: translate(500%); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lists/multi-col-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiColListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MultiColListComponent = (function () {
    function MultiColListComponent() {
    }
    MultiColListComponent.prototype.reduceListToEmpty = function () {
        this.filteredList = [];
    };
    MultiColListComponent.prototype.reduceList = function () {
        this.filteredList = (this.items || []).slice(0, 100);
    };
    MultiColListComponent.prototype.sortByName = function () {
        this.filteredList = [].concat(this.filteredList || []).sort(function (a, b) { return -(a.name < b.name) || +(a.name !== b.name); });
    };
    MultiColListComponent.prototype.sortByIndex = function () {
        this.filteredList = [].concat(this.filteredList || []).sort(function (a, b) { return -(a.index < b.index) || +(a.index !== b.index); });
    };
    MultiColListComponent.prototype.setToFullList = function () {
        this.filteredList = (this.items || []).slice();
    };
    MultiColListComponent.prototype.ngOnChanges = function () {
        this.setToFullList();
    };
    return MultiColListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], MultiColListComponent.prototype, "items", void 0);
MultiColListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'multi-col-list',
        template: "\n\n    <button (click)=\"sortByName()\">Sort By Name</button>\n    <button (click)=\"sortByIndex()\">Sort By Index</button>\n    <button (click)=\"reduceListToEmpty()\">Reduce to 0 Items</button>\n    <button (click)=\"reduceList()\">Reduce to 100 Items</button>\n    <button (click)=\"setToFullList()\">Revert to 1000 Items</button>\n\n    <div class=\"status\">\n        Showing <span class=\"badge\">{{indices?.start + 1}}</span>\n        - <span class=\"badge\">{{indices?.end}}</span>\n        of <span class=\"badge\">{{filteredList?.length}}</span>\n      <span>({{scrollItems?.length}} nodes)</span>\n      </div>\n\n    <div virtualScroll\n      [items]=\"filteredList\"\n      (update)=\"scrollItems = $event\"\n      (change)=\"indices = $event\">\n\n      <list-item *ngFor=\"let item of scrollItems\" [item]=\"item\"> </list-item>\n\n    </div>\n  ",
        styles: [__webpack_require__("../../../../../src/app/lists/multi-col-list.scss")]
    })
], MultiColListComponent);

//# sourceMappingURL=multi-col-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/lists/multi-col-list.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host virtual-scroll {\n  background: #ebf1f5; }\n\n:host list-item {\n  display: inline-block;\n  overflow: hidden;\n  vertical-align: top;\n  height: 150px;\n  border: 0;\n  margin: 0px;\n  width: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lists/table-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableListComponent = (function () {
    function TableListComponent() {
    }
    TableListComponent.prototype.reduceListToEmpty = function () {
        this.filteredList = [];
    };
    TableListComponent.prototype.reduceList = function () {
        this.filteredList = (this.items || []).slice(0, 100);
    };
    TableListComponent.prototype.sortByName = function () {
        this.filteredList = [].concat(this.filteredList || []).sort(function (a, b) { return -(a.name < b.name) || +(a.name !== b.name); });
    };
    TableListComponent.prototype.sortByIndex = function () {
        this.filteredList = [].concat(this.filteredList || []).sort(function (a, b) { return -(a.index < b.index) || +(a.index !== b.index); });
    };
    TableListComponent.prototype.setToFullList = function () {
        this.filteredList = (this.items || []).slice();
    };
    TableListComponent.prototype.ngOnChanges = function () {
        this.setToFullList();
    };
    return TableListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], TableListComponent.prototype, "items", void 0);
TableListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'table-list',
        template: "\n    <button (click)=\"sortByName()\">Sort By Name</button>\n    <button (click)=\"sortByIndex()\">Sort By Index</button>\n    <button (click)=\"reduceListToEmpty()\">Reduce to 0 Items</button>\n    <button (click)=\"reduceList()\">Reduce to 100 Items</button>\n    <button (click)=\"setToFullList()\">Revert to 1000 Items</button>\n\n    <div class=\"status\">\n        Showing <span class=\"badge\">{{indices?.start + 1}}</span>\n        - <span class=\"badge\">{{indices?.end}}</span>\n        of <span class=\"badge\">{{filteredList?.length}}</span>\n      <span>({{scrollItems?.length}} nodes)</span>\n      </div>\n\n    <virtual-scroll\n      [items]=\"filteredList\"\n      [childHeight]=\"43\"\n      (update)=\"scrollItems = $event\"\n      (change)=\"indices = $event\">\n      <table>\n        <tr *ngFor=\"let item of scrollItems\">\n          <td>{{item.index}}</td>\n          <td>{{item.name}}</td>\n          <td>{{item.gender}}</td>\n          <td>{{item.age}}</td>\n          <td>{{item.address}}</td>\n        </tr>\n      </table>\n    </virtual-scroll>\n  ",
        styles: [__webpack_require__("../../../../../src/app/lists/table-list.scss")]
    })
], TableListComponent);

//# sourceMappingURL=table-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/lists/table-list.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host virtual-scroll {\n  background: #ebf1f5; }\n\n:host table {\n  overflow: hidden;\n  width: 100%;\n  display: block; }\n\n:host td {\n  padding: .5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lists/vertical-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_virtual_scroll__ = __webpack_require__("../../../../angular2-virtual-scroll/dist/virtual-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_virtual_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_virtual_scroll__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerticalListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerticalListComponent = (function () {
    function VerticalListComponent() {
    }
    VerticalListComponent.prototype.reduceListToEmpty = function () {
        this.filteredList = [];
    };
    VerticalListComponent.prototype.reduceList = function () {
        this.filteredList = (this.items || []).slice(0, 100);
    };
    VerticalListComponent.prototype.sortByName = function () {
        this.filteredList = [].concat(this.filteredList || []).sort(function (a, b) { return -(a.name < b.name) || +(a.name !== b.name); });
    };
    VerticalListComponent.prototype.sortByIndex = function () {
        this.filteredList = [].concat(this.filteredList || []).sort(function (a, b) { return -(a.index < b.index) || +(a.index !== b.index); });
    };
    VerticalListComponent.prototype.setToFullList = function () {
        this.filteredList = (this.items || []).slice();
    };
    VerticalListComponent.prototype.scrollTo = function () {
        this.virtualScroll.scrollInto(this.items[50]);
    };
    VerticalListComponent.prototype.ngOnChanges = function () {
        this.setToFullList();
    };
    return VerticalListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], VerticalListComponent.prototype, "items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_angular2_virtual_scroll__["VirtualScrollComponent"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_virtual_scroll__["VirtualScrollComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_virtual_scroll__["VirtualScrollComponent"]) === "function" && _a || Object)
], VerticalListComponent.prototype, "virtualScroll", void 0);
VerticalListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'vertical-list',
        template: "\n    <button (click)=\"sortByName()\">Sort By Name</button>\n    <button (click)=\"sortByIndex()\">Sort By Index</button>\n    <button (click)=\"reduceListToEmpty()\">Reduce to 0 Items</button>\n    <button (click)=\"reduceList()\">Reduce to 100 Items</button>\n    <button (click)=\"setToFullList()\">Revert to 1000 Items</button>\n    <button (click)=\"scrollTo()\">Scroll to 50</button>\n\n    <div class=\"status\">\n        Showing <span class=\"badge\">{{indices?.start + 1}}</span>\n        - <span class=\"badge\">{{indices?.end}}</span>\n        of <span class=\"badge\">{{filteredList?.length}}</span>\n      <span>({{scrollItems?.length}} nodes)</span>\n      </div>\n\n    <virtual-scroll\n      [items]=\"filteredList\"\n      (update)=\"scrollItems = $event\"\n      (change)=\"indices = $event\">\n\n      <list-item *ngFor=\"let item of scrollItems\" [item]=\"item\"> </list-item>\n\n    </virtual-scroll>\n  "
    })
], VerticalListComponent);

var _a;
//# sourceMappingURL=vertical-list.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");

// Statics

// Operators










if (__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_8__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** Evergreen browsers require these. **/


/**
 * Required to support Web Animations `@angular/animation`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map