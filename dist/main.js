/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Fixedsys.ttf */ "./src/fonts/Fixedsys.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    color: rgb(73, 4, 4);\n}\n\n@font-face {\n    font-family: 'FixedSys';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf')\n}\n\nh2 {\n  margin-bottom: 25px;\n}\n\n.header {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    font-family: 'FixedSys';\n    background-color: darkgoldenrod;\n    width: 100vw;\n    height: 10vh;\n}\n\n.headingMenu {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.headingButton {\n    margin: 20px;\n    outline: none;\n    width: 100px;\n  height: 30px;\n  border: 2px solid rgb(73, 4, 4);\n  background: transparent;\n  transition: all 0.3s ease;\n  position: relative;\n  display: inline-block;\n}\n\n.headingButton:hover{\n    background: transparent;\n    color: rgb(73, 4, 4);\n  }\n  .headingButton span {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n  .headingButton:before,\n  .headingButton:after {\n    position: absolute;\n    content: \"\";\n    left: 0;\n    top: 0;\n    background: rgb(73, 4, 4);\n    transition: all 0.3s ease;\n  }\n  .headingButton:before {\n    height: 0%;\n    width: 2px;\n  }\n  .headingButton:after {\n    width: 0%;\n    height: 2px;\n  }\n  .headingButton:hover:before {\n    height: 100%;\n  }\n  .headingButton:hover:after {\n    width: 100%;\n  }\n  .headingButton span:before,\n  .headingButton span:after {\n    position: absolute;\n    content: \"\";\n    right: 0;\n    bottom: 0;\n    background: rgb(73, 4, 4);\n    transition: all 0.3s ease;\n  }\n  .headingButton span:before {\n    width: 2px;\n    height: 0%;\n  }\n  .headingButton span:after {\n    width: 0%;\n    height: 2px;\n  }\n  .headingButton span:hover:before {\n    height: 100%;\n  }\n  .headingButton span:hover:after {\n    width: 100%;\n  }\n\n\n.main {\n    background-color: #B86E03;\n    height: 80vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.welcomeMessage {\n    margin: 20px;\n\n}\n\n.moreText {\n    padding: 20px;\n    width: 25%;\n    text-align: center;\n}\n\n.menuHeading {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 50px;\n}\n\n.onTap {\n  width: 80%;\n  text-align: center;\n  overflow-wrap: break-word;\n}\n\n.menuContainer {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  align-content: space-around;\n  width: 70%;\n}\n\n.menucard {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  text-align: center;\n  width: 180px;\n  min-height: 120px;\n  margin: 10px;\n  padding: 15px;\n  background-color: darkgoldenrod;\n}\n\n.dishDescription {\n  font-size: 15px;\n  margin-top: 8px;\n  overflow-wrap: break-word;\n}\n\n.iFrame {\n  width: 70%;\n  height: 55%;\n}\n\n.dontCallUs {\n  padding-top: 50px;\n  width: 40%;\n  text-align: center;\n  overflow-wrap: break-word;\n}\n\n.footer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 10vh;\n    background-color: darkgoldenrod;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,oBAAoB;AACxB;;AAEA;IACI,uBAAuB;IACvB;AACJ;;AAEA;EACE,mBAAmB;AACrB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,uBAAuB;IACvB,+BAA+B;IAC/B,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;EACd,YAAY;EACZ,+BAA+B;EAC/B,uBAAuB;EACvB,yBAAyB;EACzB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;IACI,uBAAuB;IACvB,oBAAoB;EACtB;EACA;IACE,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,YAAY;EACd;EACA;;IAEE,kBAAkB;IAClB,WAAW;IACX,OAAO;IACP,MAAM;IACN,yBAAyB;IACzB,yBAAyB;EAC3B;EACA;IACE,UAAU;IACV,UAAU;EACZ;EACA;IACE,SAAS;IACT,WAAW;EACb;EACA;IACE,YAAY;EACd;EACA;IACE,WAAW;EACb;EACA;;IAEE,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,SAAS;IACT,yBAAyB;IACzB,yBAAyB;EAC3B;EACA;IACE,UAAU;IACV,UAAU;EACZ;EACA;IACE,SAAS;IACT,WAAW;EACb;EACA;IACE,YAAY;EACd;EACA;IACE,WAAW;EACb;;;AAGF;IACI,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;;AAEhB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,kBAAkB;AACtB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,6BAA6B;EAC7B,mBAAmB;EACnB,2BAA2B;EAC3B,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,eAAe;EACf,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,UAAU;EACV,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,+BAA+B;AACnC","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    color: rgb(73, 4, 4);\n}\n\n@font-face {\n    font-family: 'FixedSys';\n    src: url('../fonts/Fixedsys.ttf') format('ttf')\n}\n\nh2 {\n  margin-bottom: 25px;\n}\n\n.header {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    font-family: 'FixedSys';\n    background-color: darkgoldenrod;\n    width: 100vw;\n    height: 10vh;\n}\n\n.headingMenu {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.headingButton {\n    margin: 20px;\n    outline: none;\n    width: 100px;\n  height: 30px;\n  border: 2px solid rgb(73, 4, 4);\n  background: transparent;\n  transition: all 0.3s ease;\n  position: relative;\n  display: inline-block;\n}\n\n.headingButton:hover{\n    background: transparent;\n    color: rgb(73, 4, 4);\n  }\n  .headingButton span {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n  .headingButton:before,\n  .headingButton:after {\n    position: absolute;\n    content: \"\";\n    left: 0;\n    top: 0;\n    background: rgb(73, 4, 4);\n    transition: all 0.3s ease;\n  }\n  .headingButton:before {\n    height: 0%;\n    width: 2px;\n  }\n  .headingButton:after {\n    width: 0%;\n    height: 2px;\n  }\n  .headingButton:hover:before {\n    height: 100%;\n  }\n  .headingButton:hover:after {\n    width: 100%;\n  }\n  .headingButton span:before,\n  .headingButton span:after {\n    position: absolute;\n    content: \"\";\n    right: 0;\n    bottom: 0;\n    background: rgb(73, 4, 4);\n    transition: all 0.3s ease;\n  }\n  .headingButton span:before {\n    width: 2px;\n    height: 0%;\n  }\n  .headingButton span:after {\n    width: 0%;\n    height: 2px;\n  }\n  .headingButton span:hover:before {\n    height: 100%;\n  }\n  .headingButton span:hover:after {\n    width: 100%;\n  }\n\n\n.main {\n    background-color: #B86E03;\n    height: 80vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.welcomeMessage {\n    margin: 20px;\n\n}\n\n.moreText {\n    padding: 20px;\n    width: 25%;\n    text-align: center;\n}\n\n.menuHeading {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 50px;\n}\n\n.onTap {\n  width: 80%;\n  text-align: center;\n  overflow-wrap: break-word;\n}\n\n.menuContainer {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  align-content: space-around;\n  width: 70%;\n}\n\n.menucard {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  text-align: center;\n  width: 180px;\n  min-height: 120px;\n  margin: 10px;\n  padding: 15px;\n  background-color: darkgoldenrod;\n}\n\n.dishDescription {\n  font-size: 15px;\n  margin-top: 8px;\n  overflow-wrap: break-word;\n}\n\n.iFrame {\n  width: 70%;\n  height: 55%;\n}\n\n.dontCallUs {\n  padding-top: 50px;\n  width: 40%;\n  text-align: center;\n  overflow-wrap: break-word;\n}\n\n.footer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 10vh;\n    background-color: darkgoldenrod;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/data/menuData.js":
/*!******************************!*\
  !*** ./src/data/menuData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
const menu = {
  menuItems: [
    {
      Name: 'Sausages in Grease',
      price: '5£',
      description: 'Depression in an intestine',
    },
    {
      Name: 'Soggy Fish & Chips',
      price: '9£',
      description: 'Low in taste and in salt',
    },
    {
      Name: 'Bangers and Watery Mash',
      price: '11£',
      description: 'Come taste the Thames',
    },
    {
      Name: "Vegan Sheperd's Pie",
      price: '8£',
      description: 'Famous meat dish - now for vegans',
    },
    {
      Name: 'Spam Sandwich',
      price: '8£',
      description: 'Spam slices with filling of fried spam',
    },
    {
      Name: 'Spam Salad',
      price: '12£',
      description: 'No nasty veggies on this one',
    },
  ],
};




/***/ }),

/***/ "./src/functions/reusableFunctions.js":
/*!********************************************!*\
  !*** ./src/functions/reusableFunctions.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageScrubber": () => (/* binding */ pageScrubber)
/* harmony export */ });
function pageScrubber() {
  const content = document.querySelector('#mainContent');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}




/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_reusableFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/reusableFunctions */ "./src/functions/reusableFunctions.js");


function contactPageGenerator() {
  (0,_functions_reusableFunctions__WEBPACK_IMPORTED_MODULE_0__.pageScrubber)();

  const content = document.getElementById('mainContent');

  const contactHeading = document.createElement('div');
  contactHeading.classList.add('contactHeading');
  contactHeading.setAttribute('id', 'contactHeading');
  contactHeading.innerHTML = '<h2>Contact</h2>';
  content.appendChild(contactHeading);

  const iFrame = document.createElement('iframe');
  iFrame.classList.add('iFrame');
  iFrame.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.383292256044!2d-2.249838448313972!3d53.47948097233313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c2599cafdf%3A0x528fc2455d6aa672!2sThe%20Rising%20Sun!5e0!3m2!1sen!2sfi!4v1674065264010!5m2!1sen!2sfi';
  content.appendChild(iFrame);

  const dontCallUs = document.createElement('div');
  dontCallUs.classList.add('dontCallUs');
  dontCallUs.innerHTML = 'Do not call us or mail us. We are not liable for any discomfort you may or may not have endured after visiting us.';
  content.appendChild(dontCallUs);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPageGenerator);


/***/ }),

/***/ "./src/pages/mainPage.js":
/*!*******************************!*\
  !*** ./src/pages/mainPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainPageGenerator": () => (/* binding */ mainPageGenerator),
/* harmony export */   "messageGenerator": () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _functions_reusableFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/reusableFunctions */ "./src/functions/reusableFunctions.js");


function mainPageGenerator() {
  const mainPageContent = document.createElement('div');
  mainPageContent.classList.add('main');
  mainPageContent.setAttribute('id', 'mainContent');
  return mainPageContent;
}

function messageGenerator() {
  (0,_functions_reusableFunctions__WEBPACK_IMPORTED_MODULE_0__.pageScrubber)();
  const content = document.getElementById('mainContent');
  const welcomeMessage = document.createElement('div');
  welcomeMessage.classList.add('welcomeMessage');
  welcomeMessage.innerHTML = '<h2>Welcome to The Jolly Badger</h2>';
  content.appendChild(welcomeMessage);

  const adText = document.createElement('div');
  adText.classList.add('moreText');
  adText.innerHTML = '<h3>The place for mediocre ale, depressing pub food and frequent fights.</h3>';
  content.appendChild(adText);

  const adText2 = document.createElement('div');
  adText2.classList.add('moreText');
  adText2.innerHTML = '<p>Step in and experience the utter bleariness of life in Britain.</p>';
  content.appendChild(adText2);
}




/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuGenerator": () => (/* binding */ menuGenerator),
/* harmony export */   "menuPopulator": () => (/* binding */ menuPopulator)
/* harmony export */ });
/* harmony import */ var _functions_reusableFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/reusableFunctions */ "./src/functions/reusableFunctions.js");
/* harmony import */ var _data_menuData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/menuData */ "./src/data/menuData.js");



function menuGenerator() {
  (0,_functions_reusableFunctions__WEBPACK_IMPORTED_MODULE_0__.pageScrubber)();
  const content = document.getElementById('mainContent');

  const menuHeading = document.createElement('div');
  menuHeading.classList.add('menuHeading');
  menuHeading.setAttribute('id', 'menuHeading');
  menuHeading.innerHTML = '<h2>Menu</h2>';
  content.appendChild(menuHeading);

  const onTap = document.createElement('div');
  onTap.classList.add('onTap');
  onTap.innerHTML = '<p>Enjoy classic British cuisine while sipping some watery ale.</p>';
  menuHeading.appendChild(onTap);

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menuContainer');
  menuContainer.setAttribute('id', 'menuContainer');
  content.appendChild(menuContainer);
}

function menuPopulator() {
  const menuContainer = document.getElementById('menuContainer');
  _data_menuData__WEBPACK_IMPORTED_MODULE_1__.menu.menuItems.forEach((menuObject) => {
    const menuCard = document.createElement('div');
    menuCard.classList.add('menucard');
    menuContainer.appendChild(menuCard);
    const dishName = document.createElement('div');
    dishName.innerHTML = `<h4>${menuObject.Name}</h4>`;
    menuCard.appendChild(dishName);
    const dishDescription = document.createElement('div');
    dishDescription.classList.add('dishDescription');
    dishDescription.innerHTML = `<p>${menuObject.description}</p>`;
    menuCard.appendChild(dishDescription);
    const dishPrice = document.createElement('div');
    dishPrice.innerHTML = `<br><h3>${menuObject.price}</h3>`;
    menuCard.appendChild(dishPrice);
  });
}




/***/ }),

/***/ "./src/pages/menuCreation.js":
/*!***********************************!*\
  !*** ./src/pages/menuCreation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonGenerator": () => (/* binding */ buttonGenerator),
/* harmony export */   "footerGenerator": () => (/* binding */ footerGenerator),
/* harmony export */   "headerGenerator": () => (/* binding */ headerGenerator)
/* harmony export */ });
function headerGenerator() {
  const header = document.createElement('div');
  header.classList.add('header');

  const headingLogo = document.createElement('div');
  headingLogo.classList.add('headingLogo');
  headingLogo.setAttribute('id', 'buttonContainer');
  headingLogo.innerHTML = '<h1>The Jolly Badger</h1>';
  header.appendChild(headingLogo);

  const headingMenu = document.createElement('div');
  headingMenu.classList.add('headingMenu');
  headingMenu.setAttribute('id', 'headingMenu');
  header.appendChild(headingMenu);

  return header;
}

function buttonGenerator() {
  const menuVar = document.getElementById('headingMenu');

  const homeBtn = document.createElement('button');
  homeBtn.innerHTML = 'Home';
  homeBtn.classList.add('headingButton');
  homeBtn.setAttribute('id', 'homeBtn');
  menuVar.appendChild(homeBtn);
  /*     homeBtn.addEventListener('click', function(){
        console.log("Working?")
    }) */

  const menuBtn = document.createElement('button');
  menuBtn.innerHTML = 'Menu';
  menuBtn.classList.add('headingButton');
  menuBtn.setAttribute('id', 'menuBtn');
  menuVar.appendChild(menuBtn);

  const contactBtn = document.createElement('button');
  contactBtn.innerHTML = 'Contact';
  contactBtn.classList.add('headingButton');
  contactBtn.setAttribute('id', 'contactBtn');
  menuVar.appendChild(contactBtn);
}

function footerGenerator() {
  const content = document.getElementById('content');
  const footer = document.createElement('div');
  footer.classList.add('footer');
  footer.innerHTML = 'antero 2023';
  content.appendChild(footer);
}




/***/ }),

/***/ "./src/fonts/Fixedsys.ttf":
/*!********************************!*\
  !*** ./src/fonts/Fixedsys.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c79051f539825f0859aa.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _pages_menuCreation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menuCreation */ "./src/pages/menuCreation.js");
/* harmony import */ var _pages_mainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/mainPage */ "./src/pages/mainPage.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact */ "./src/pages/contact.js");
/* harmony import */ var _data_menuData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/menuData */ "./src/data/menuData.js");







const content = document.getElementById('content');

// Generate mainpage on load
content.appendChild((0,_pages_menuCreation__WEBPACK_IMPORTED_MODULE_1__.headerGenerator)());
(0,_pages_menuCreation__WEBPACK_IMPORTED_MODULE_1__.buttonGenerator)();
content.appendChild((0,_pages_mainPage__WEBPACK_IMPORTED_MODULE_2__.mainPageGenerator)());
(0,_pages_mainPage__WEBPACK_IMPORTED_MODULE_2__.messageGenerator)();
(0,_pages_menuCreation__WEBPACK_IMPORTED_MODULE_1__.footerGenerator)();

// Event listeners
const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', () => {
  (0,_pages_mainPage__WEBPACK_IMPORTED_MODULE_2__.messageGenerator)();
});

const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
  (0,_pages_menu__WEBPACK_IMPORTED_MODULE_3__.menuGenerator)();
  (0,_pages_menu__WEBPACK_IMPORTED_MODULE_3__.menuPopulator)();
});

const contactBtn = document.getElementById('contactBtn');
contactBtn.addEventListener('click', () => {
  (0,_pages_contact__WEBPACK_IMPORTED_MODULE_4__.contactPageGenerator)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUM2RDtBQUNsQjtBQUNYO0FBQ0w7QUFDaEI7O0FBRXZDOztBQUVBO0FBQ0Esb0JBQW9CLG9FQUFlO0FBQ25DLG9FQUFlO0FBQ2Ysb0JBQW9CLGtFQUFpQjtBQUNyQyxpRUFBZ0I7QUFDaEIsb0VBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpRUFBZ0I7QUFDbEIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSwwREFBYTtBQUNmLEVBQUUsMERBQWE7QUFDZixDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLG9FQUFvQjtBQUN0QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvZGF0YS9tZW51RGF0YS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvZnVuY3Rpb25zL3JldXNhYmxlRnVuY3Rpb25zLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9wYWdlcy9tYWluUGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvbWVudUNyZWF0aW9uLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9GaXhlZHN5cy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogcmdiKDczLCA0LCA0KTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRml4ZWRTeXMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0dGYnKVxcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnRml4ZWRTeXMnO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ29sZGVucm9kO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTB2aDtcXG59XFxuXFxuLmhlYWRpbmdNZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkaW5nQnV0dG9uIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNzMsIDQsIDQpO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uaGVhZGluZ0J1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiByZ2IoNzMsIDQsIDQpO1xcbiAgfVxcbiAgLmhlYWRpbmdCdXR0b24gc3BhbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICAuaGVhZGluZ0J1dHRvbjpiZWZvcmUsXFxuICAuaGVhZGluZ0J1dHRvbjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDczLCA0LCA0KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIH1cXG4gIC5oZWFkaW5nQnV0dG9uOmJlZm9yZSB7XFxuICAgIGhlaWdodDogMCU7XFxuICAgIHdpZHRoOiAycHg7XFxuICB9XFxuICAuaGVhZGluZ0J1dHRvbjphZnRlciB7XFxuICAgIHdpZHRoOiAwJTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICB9XFxuICAuaGVhZGluZ0J1dHRvbjpob3ZlcjpiZWZvcmUge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICAuaGVhZGluZ0J1dHRvbjpob3ZlcjphZnRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmhlYWRpbmdCdXR0b24gc3BhbjpiZWZvcmUsXFxuICAuaGVhZGluZ0J1dHRvbiBzcGFuOmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDczLCA0LCA0KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIH1cXG4gIC5oZWFkaW5nQnV0dG9uIHNwYW46YmVmb3JlIHtcXG4gICAgd2lkdGg6IDJweDtcXG4gICAgaGVpZ2h0OiAwJTtcXG4gIH1cXG4gIC5oZWFkaW5nQnV0dG9uIHNwYW46YWZ0ZXIge1xcbiAgICB3aWR0aDogMCU7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgfVxcbiAgLmhlYWRpbmdCdXR0b24gc3Bhbjpob3ZlcjpiZWZvcmUge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICAuaGVhZGluZ0J1dHRvbiBzcGFuOmhvdmVyOmFmdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuXFxuLm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjg2RTAzO1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWxjb21lTWVzc2FnZSB7XFxuICAgIG1hcmdpbjogMjBweDtcXG5cXG59XFxuXFxuLm1vcmVUZXh0IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWVudUhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4ub25UYXAge1xcbiAgd2lkdGg6IDgwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5tZW51Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLm1lbnVjYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDE4MHB4O1xcbiAgbWluLWhlaWdodDogMTIwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dvbGRlbnJvZDtcXG59XFxuXFxuLmRpc2hEZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uaUZyYW1lIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDU1JTtcXG59XFxuXFxuLmRvbnRDYWxsVXMge1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxuICB3aWR0aDogNDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLmZvb3RlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ29sZGVucm9kO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCO0FBQ0o7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7RUFDZCxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBOztJQUVFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsT0FBTztJQUNQLE1BQU07SUFDTix5QkFBeUI7SUFDekIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsVUFBVTtFQUNaO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBOztJQUVFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsVUFBVTtFQUNaO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7RUFDYjs7O0FBR0Y7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osK0JBQStCO0FBQ25DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOiByZ2IoNzMsIDQsIDQpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdGaXhlZFN5cyc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9GaXhlZHN5cy50dGYnKSBmb3JtYXQoJ3R0ZicpXFxufVxcblxcbmgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdGaXhlZFN5cyc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtnb2xkZW5yb2Q7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4uaGVhZGluZ01lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRpbmdCdXR0b24ge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYig3MywgNCwgNCk7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5oZWFkaW5nQnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHJnYig3MywgNCwgNCk7XFxuICB9XFxuICAuaGVhZGluZ0J1dHRvbiBzcGFuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG4gIC5oZWFkaW5nQnV0dG9uOmJlZm9yZSxcXG4gIC5oZWFkaW5nQnV0dG9uOmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzMsIDQsIDQpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgfVxcbiAgLmhlYWRpbmdCdXR0b246YmVmb3JlIHtcXG4gICAgaGVpZ2h0OiAwJTtcXG4gICAgd2lkdGg6IDJweDtcXG4gIH1cXG4gIC5oZWFkaW5nQnV0dG9uOmFmdGVyIHtcXG4gICAgd2lkdGg6IDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gIH1cXG4gIC5oZWFkaW5nQnV0dG9uOmhvdmVyOmJlZm9yZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG4gIC5oZWFkaW5nQnV0dG9uOmhvdmVyOmFmdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAuaGVhZGluZ0J1dHRvbiBzcGFuOmJlZm9yZSxcXG4gIC5oZWFkaW5nQnV0dG9uIHNwYW46YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzMsIDQsIDQpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgfVxcbiAgLmhlYWRpbmdCdXR0b24gc3BhbjpiZWZvcmUge1xcbiAgICB3aWR0aDogMnB4O1xcbiAgICBoZWlnaHQ6IDAlO1xcbiAgfVxcbiAgLmhlYWRpbmdCdXR0b24gc3BhbjphZnRlciB7XFxuICAgIHdpZHRoOiAwJTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICB9XFxuICAuaGVhZGluZ0J1dHRvbiBzcGFuOmhvdmVyOmJlZm9yZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG4gIC5oZWFkaW5nQnV0dG9uIHNwYW46aG92ZXI6YWZ0ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG5cXG4ubWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCODZFMDM7XFxuICAgIGhlaWdodDogODB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndlbGNvbWVNZXNzYWdlIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcblxcbn1cXG5cXG4ubW9yZVRleHQge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tZW51SGVhZGluZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5vblRhcCB7XFxuICB3aWR0aDogODAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLm1lbnVDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4ubWVudWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTgwcHg7XFxuICBtaW4taGVpZ2h0OiAxMjBweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ29sZGVucm9kO1xcbn1cXG5cXG4uZGlzaERlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5pRnJhbWUge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogNTUlO1xcbn1cXG5cXG4uZG9udENhbGxVcyB7XFxuICBwYWRkaW5nLXRvcDogNTBweDtcXG4gIHdpZHRoOiA0MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uZm9vdGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtnb2xkZW5yb2Q7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBtZW51ID0ge1xuICBtZW51SXRlbXM6IFtcbiAgICB7XG4gICAgICBOYW1lOiAnU2F1c2FnZXMgaW4gR3JlYXNlJyxcbiAgICAgIHByaWNlOiAnNcKjJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGVwcmVzc2lvbiBpbiBhbiBpbnRlc3RpbmUnLFxuICAgIH0sXG4gICAge1xuICAgICAgTmFtZTogJ1NvZ2d5IEZpc2ggJiBDaGlwcycsXG4gICAgICBwcmljZTogJznCoycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0xvdyBpbiB0YXN0ZSBhbmQgaW4gc2FsdCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBOYW1lOiAnQmFuZ2VycyBhbmQgV2F0ZXJ5IE1hc2gnLFxuICAgICAgcHJpY2U6ICcxMcKjJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ29tZSB0YXN0ZSB0aGUgVGhhbWVzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIE5hbWU6IFwiVmVnYW4gU2hlcGVyZCdzIFBpZVwiLFxuICAgICAgcHJpY2U6ICc4wqMnLFxuICAgICAgZGVzY3JpcHRpb246ICdGYW1vdXMgbWVhdCBkaXNoIC0gbm93IGZvciB2ZWdhbnMnLFxuICAgIH0sXG4gICAge1xuICAgICAgTmFtZTogJ1NwYW0gU2FuZHdpY2gnLFxuICAgICAgcHJpY2U6ICc4wqMnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGFtIHNsaWNlcyB3aXRoIGZpbGxpbmcgb2YgZnJpZWQgc3BhbScsXG4gICAgfSxcbiAgICB7XG4gICAgICBOYW1lOiAnU3BhbSBTYWxhZCcsXG4gICAgICBwcmljZTogJzEywqMnLFxuICAgICAgZGVzY3JpcHRpb246ICdObyBuYXN0eSB2ZWdnaWVzIG9uIHRoaXMgb25lJyxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IHtcbiAgbWVudSxcbn07XG4iLCJmdW5jdGlvbiBwYWdlU2NydWJiZXIoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbkNvbnRlbnQnKTtcbiAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBwYWdlU2NydWJiZXIsXG59O1xuIiwiaW1wb3J0IHsgcGFnZVNjcnViYmVyIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3JldXNhYmxlRnVuY3Rpb25zJztcblxuZnVuY3Rpb24gY29udGFjdFBhZ2VHZW5lcmF0b3IoKSB7XG4gIHBhZ2VTY3J1YmJlcigpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnQnKTtcblxuICBjb25zdCBjb250YWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0SGVhZGluZy5jbGFzc0xpc3QuYWRkKCdjb250YWN0SGVhZGluZycpO1xuICBjb250YWN0SGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3RIZWFkaW5nJyk7XG4gIGNvbnRhY3RIZWFkaW5nLmlubmVySFRNTCA9ICc8aDI+Q29udGFjdDwvaDI+JztcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0SGVhZGluZyk7XG5cbiAgY29uc3QgaUZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIGlGcmFtZS5jbGFzc0xpc3QuYWRkKCdpRnJhbWUnKTtcbiAgaUZyYW1lLnNyYyA9ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQyMzc0LjM4MzI5MjI1NjA0NCEyZC0yLjI0OTgzODQ0ODMxMzk3MiEzZDUzLjQ3OTQ4MDk3MjMzMzEzITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg0ODdiYjFjMjU5OWNhZmRmJTNBMHg1MjhmYzI0NTVkNmFhNjcyITJzVGhlJTIwUmlzaW5nJTIwU3VuITVlMCEzbTIhMXNlbiEyc2ZpITR2MTY3NDA2NTI2NDAxMCE1bTIhMXNlbiEyc2ZpJztcbiAgY29udGVudC5hcHBlbmRDaGlsZChpRnJhbWUpO1xuXG4gIGNvbnN0IGRvbnRDYWxsVXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZG9udENhbGxVcy5jbGFzc0xpc3QuYWRkKCdkb250Q2FsbFVzJyk7XG4gIGRvbnRDYWxsVXMuaW5uZXJIVE1MID0gJ0RvIG5vdCBjYWxsIHVzIG9yIG1haWwgdXMuIFdlIGFyZSBub3QgbGlhYmxlIGZvciBhbnkgZGlzY29tZm9ydCB5b3UgbWF5IG9yIG1heSBub3QgaGF2ZSBlbmR1cmVkIGFmdGVyIHZpc2l0aW5nIHVzLic7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZG9udENhbGxVcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RQYWdlR2VuZXJhdG9yO1xuIiwiaW1wb3J0IHsgcGFnZVNjcnViYmVyIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3JldXNhYmxlRnVuY3Rpb25zJztcblxuZnVuY3Rpb24gbWFpblBhZ2VHZW5lcmF0b3IoKSB7XG4gIGNvbnN0IG1haW5QYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluUGFnZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICBtYWluUGFnZUNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluQ29udGVudCcpO1xuICByZXR1cm4gbWFpblBhZ2VDb250ZW50O1xufVxuXG5mdW5jdGlvbiBtZXNzYWdlR2VuZXJhdG9yKCkge1xuICBwYWdlU2NydWJiZXIoKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudCcpO1xuICBjb25zdCB3ZWxjb21lTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWxjb21lTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lTWVzc2FnZScpO1xuICB3ZWxjb21lTWVzc2FnZS5pbm5lckhUTUwgPSAnPGgyPldlbGNvbWUgdG8gVGhlIEpvbGx5IEJhZGdlcjwvaDI+JztcbiAgY29udGVudC5hcHBlbmRDaGlsZCh3ZWxjb21lTWVzc2FnZSk7XG5cbiAgY29uc3QgYWRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFkVGV4dC5jbGFzc0xpc3QuYWRkKCdtb3JlVGV4dCcpO1xuICBhZFRleHQuaW5uZXJIVE1MID0gJzxoMz5UaGUgcGxhY2UgZm9yIG1lZGlvY3JlIGFsZSwgZGVwcmVzc2luZyBwdWIgZm9vZCBhbmQgZnJlcXVlbnQgZmlnaHRzLjwvaDM+JztcbiAgY29udGVudC5hcHBlbmRDaGlsZChhZFRleHQpO1xuXG4gIGNvbnN0IGFkVGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWRUZXh0Mi5jbGFzc0xpc3QuYWRkKCdtb3JlVGV4dCcpO1xuICBhZFRleHQyLmlubmVySFRNTCA9ICc8cD5TdGVwIGluIGFuZCBleHBlcmllbmNlIHRoZSB1dHRlciBibGVhcmluZXNzIG9mIGxpZmUgaW4gQnJpdGFpbi48L3A+JztcbiAgY29udGVudC5hcHBlbmRDaGlsZChhZFRleHQyKTtcbn1cblxuZXhwb3J0IHtcbiAgbWFpblBhZ2VHZW5lcmF0b3IsIG1lc3NhZ2VHZW5lcmF0b3IsXG59O1xuIiwiaW1wb3J0IHsgcGFnZVNjcnViYmVyIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3JldXNhYmxlRnVuY3Rpb25zJztcbmltcG9ydCB7IG1lbnUgfSBmcm9tICcuLi9kYXRhL21lbnVEYXRhJztcblxuZnVuY3Rpb24gbWVudUdlbmVyYXRvcigpIHtcbiAgcGFnZVNjcnViYmVyKCk7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnQnKTtcblxuICBjb25zdCBtZW51SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51SGVhZGluZy5jbGFzc0xpc3QuYWRkKCdtZW51SGVhZGluZycpO1xuICBtZW51SGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVIZWFkaW5nJyk7XG4gIG1lbnVIZWFkaW5nLmlubmVySFRNTCA9ICc8aDI+TWVudTwvaDI+JztcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51SGVhZGluZyk7XG5cbiAgY29uc3Qgb25UYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb25UYXAuY2xhc3NMaXN0LmFkZCgnb25UYXAnKTtcbiAgb25UYXAuaW5uZXJIVE1MID0gJzxwPkVuam95IGNsYXNzaWMgQnJpdGlzaCBjdWlzaW5lIHdoaWxlIHNpcHBpbmcgc29tZSB3YXRlcnkgYWxlLjwvcD4nO1xuICBtZW51SGVhZGluZy5hcHBlbmRDaGlsZChvblRhcCk7XG5cbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnVDb250YWluZXInKTtcbiAgbWVudUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVDb250YWluZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gbWVudVBvcHVsYXRvcigpIHtcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Q29udGFpbmVyJyk7XG4gIG1lbnUubWVudUl0ZW1zLmZvckVhY2goKG1lbnVPYmplY3QpID0+IHtcbiAgICBjb25zdCBtZW51Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnVjYXJkJyk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q2FyZCk7XG4gICAgY29uc3QgZGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXNoTmFtZS5pbm5lckhUTUwgPSBgPGg0PiR7bWVudU9iamVjdC5OYW1lfTwvaDQ+YDtcbiAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChkaXNoTmFtZSk7XG4gICAgY29uc3QgZGlzaERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGlzaERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rpc2hEZXNjcmlwdGlvbicpO1xuICAgIGRpc2hEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBgPHA+JHttZW51T2JqZWN0LmRlc2NyaXB0aW9ufTwvcD5gO1xuICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKGRpc2hEZXNjcmlwdGlvbik7XG4gICAgY29uc3QgZGlzaFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGlzaFByaWNlLmlubmVySFRNTCA9IGA8YnI+PGgzPiR7bWVudU9iamVjdC5wcmljZX08L2gzPmA7XG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoZGlzaFByaWNlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7XG4gIG1lbnVHZW5lcmF0b3IsXG4gIG1lbnVQb3B1bGF0b3IsXG59O1xuIiwiZnVuY3Rpb24gaGVhZGVyR2VuZXJhdG9yKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gIGNvbnN0IGhlYWRpbmdMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRpbmdMb2dvLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmdMb2dvJyk7XG4gIGhlYWRpbmdMb2dvLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnV0dG9uQ29udGFpbmVyJyk7XG4gIGhlYWRpbmdMb2dvLmlubmVySFRNTCA9ICc8aDE+VGhlIEpvbGx5IEJhZGdlcjwvaDE+JztcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmdMb2dvKTtcblxuICBjb25zdCBoZWFkaW5nTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkaW5nTWVudS5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nTWVudScpO1xuICBoZWFkaW5nTWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRpbmdNZW51Jyk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkaW5nTWVudSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gYnV0dG9uR2VuZXJhdG9yKCkge1xuICBjb25zdCBtZW51VmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRpbmdNZW51Jyk7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBob21lQnRuLmlubmVySFRNTCA9ICdIb21lJztcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nQnV0dG9uJyk7XG4gIGhvbWVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdob21lQnRuJyk7XG4gIG1lbnVWYXIuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gIC8qICAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJXb3JraW5nP1wiKVxuICAgIH0pICovXG5cbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtZW51QnRuLmlubmVySFRNTCA9ICdNZW51JztcbiAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nQnV0dG9uJyk7XG4gIG1lbnVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdtZW51QnRuJyk7XG4gIG1lbnVWYXIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5cbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb250YWN0QnRuLmlubmVySFRNTCA9ICdDb250YWN0JztcbiAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nQnV0dG9uJyk7XG4gIGNvbnRhY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0QnRuJyk7XG4gIG1lbnVWYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG59XG5cbmZ1bmN0aW9uIGZvb3RlckdlbmVyYXRvcigpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gIGZvb3Rlci5pbm5lckhUTUwgPSAnYW50ZXJvIDIwMjMnO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmV4cG9ydCB7XG4gIGhlYWRlckdlbmVyYXRvcixcbiAgYnV0dG9uR2VuZXJhdG9yLFxuICBmb290ZXJHZW5lcmF0b3IsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCB7IGhlYWRlckdlbmVyYXRvciwgYnV0dG9uR2VuZXJhdG9yLCBmb290ZXJHZW5lcmF0b3IgfSBmcm9tICcuL3BhZ2VzL21lbnVDcmVhdGlvbic7XG5pbXBvcnQgeyBtYWluUGFnZUdlbmVyYXRvciwgbWVzc2FnZUdlbmVyYXRvciB9IGZyb20gJy4vcGFnZXMvbWFpblBhZ2UnO1xuaW1wb3J0IHsgbWVudUdlbmVyYXRvciwgbWVudVBvcHVsYXRvciB9IGZyb20gJy4vcGFnZXMvbWVudSc7XG5pbXBvcnQgeyBjb250YWN0UGFnZUdlbmVyYXRvciB9IGZyb20gJy4vcGFnZXMvY29udGFjdCc7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSAnLi9kYXRhL21lbnVEYXRhJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbi8vIEdlbmVyYXRlIG1haW5wYWdlIG9uIGxvYWRcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyR2VuZXJhdG9yKCkpO1xuYnV0dG9uR2VuZXJhdG9yKCk7XG5jb250ZW50LmFwcGVuZENoaWxkKG1haW5QYWdlR2VuZXJhdG9yKCkpO1xubWVzc2FnZUdlbmVyYXRvcigpO1xuZm9vdGVyR2VuZXJhdG9yKCk7XG5cbi8vIEV2ZW50IGxpc3RlbmVyc1xuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lQnRuJyk7XG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtZXNzYWdlR2VuZXJhdG9yKCk7XG59KTtcblxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51QnRuJyk7XG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtZW51R2VuZXJhdG9yKCk7XG4gIG1lbnVQb3B1bGF0b3IoKTtcbn0pO1xuXG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RCdG4nKTtcbmNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnRhY3RQYWdlR2VuZXJhdG9yKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==