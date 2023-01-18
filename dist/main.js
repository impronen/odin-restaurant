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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    color: rgb(73, 4, 4);\n}\n\n@font-face {\n    font-family: 'FixedSys';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf')\n}\n\n.header {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    font-family: 'FixedSys';\n    background-color: darkgoldenrod;\n    width: 100vw;\n    height: 10vh;\n}\n\n.headingMenu {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.headingButton {\n    margin: 20px;\n    outline: none;\n    width: 100px;\n  height: 30px;\n  border: 2px solid rgb(73, 4, 4);\n  background: transparent;\n  transition: all 0.3s ease;\n  position: relative;\n  display: inline-block;\n}\n\n.headingButton:hover{\n    background: transparent;\n    color: rgb(73, 4, 4);\n  }\n  .headingButton span {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n  .headingButton:before,\n  .headingButton:after {\n    position: absolute;\n    content: \"\";\n    left: 0;\n    top: 0;\n    background: rgb(73, 4, 4);\n    transition: all 0.3s ease;\n  }\n  .headingButton:before {\n    height: 0%;\n    width: 2px;\n  }\n  .headingButton:after {\n    width: 0%;\n    height: 2px;\n  }\n  .headingButton:hover:before {\n    height: 100%;\n  }\n  .headingButton:hover:after {\n    width: 100%;\n  }\n  .headingButton span:before,\n  .headingButton span:after {\n    position: absolute;\n    content: \"\";\n    right: 0;\n    bottom: 0;\n    background: rgb(73, 4, 4);\n    transition: all 0.3s ease;\n  }\n  .headingButton span:before {\n    width: 2px;\n    height: 0%;\n  }\n  .headingButton span:after {\n    width: 0%;\n    height: 2px;\n  }\n  .headingButton span:hover:before {\n    height: 100%;\n  }\n  .headingButton span:hover:after {\n    width: 100%;\n  }\n\n\n.main {\n    background-color: #B86E03;\n    height: 80vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.welcomeMessage {\n    margin: 20px;\n\n}\n\n.adText {\n    padding: 20px;\n    width: 25%;\n    text-align: center;\n}\n\n.menuContainer {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  width: 80%;\n}\n\n.menucard {\n  margin: 10px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  text-align: center;\n  background-color: beige;\n}\n\n.footer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 10vh;\n    background-color: darkgoldenrod;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,oBAAoB;AACxB;;AAEA;IACI,uBAAuB;IACvB;AACJ;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,uBAAuB;IACvB,+BAA+B;IAC/B,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;EACd,YAAY;EACZ,+BAA+B;EAC/B,uBAAuB;EACvB,yBAAyB;EACzB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;IACI,uBAAuB;IACvB,oBAAoB;EACtB;EACA;IACE,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,YAAY;EACd;EACA;;IAEE,kBAAkB;IAClB,WAAW;IACX,OAAO;IACP,MAAM;IACN,yBAAyB;IACzB,yBAAyB;EAC3B;EACA;IACE,UAAU;IACV,UAAU;EACZ;EACA;IACE,SAAS;IACT,WAAW;EACb;EACA;IACE,YAAY;EACd;EACA;IACE,WAAW;EACb;EACA;;IAEE,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,SAAS;IACT,yBAAyB;IACzB,yBAAyB;EAC3B;EACA;IACE,UAAU;IACV,UAAU;EACZ;EACA;IACE,SAAS;IACT,WAAW;EACb;EACA;IACE,YAAY;EACd;EACA;IACE,WAAW;EACb;;;AAGF;IACI,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;;AAEhB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,kBAAkB;AACtB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,6BAA6B;EAC7B,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,+BAA+B;AACnC","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    color: rgb(73, 4, 4);\n}\n\n@font-face {\n    font-family: 'FixedSys';\n    src: url('../fonts/Fixedsys.ttf') format('ttf')\n}\n\n.header {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    font-family: 'FixedSys';\n    background-color: darkgoldenrod;\n    width: 100vw;\n    height: 10vh;\n}\n\n.headingMenu {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.headingButton {\n    margin: 20px;\n    outline: none;\n    width: 100px;\n  height: 30px;\n  border: 2px solid rgb(73, 4, 4);\n  background: transparent;\n  transition: all 0.3s ease;\n  position: relative;\n  display: inline-block;\n}\n\n.headingButton:hover{\n    background: transparent;\n    color: rgb(73, 4, 4);\n  }\n  .headingButton span {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n  .headingButton:before,\n  .headingButton:after {\n    position: absolute;\n    content: \"\";\n    left: 0;\n    top: 0;\n    background: rgb(73, 4, 4);\n    transition: all 0.3s ease;\n  }\n  .headingButton:before {\n    height: 0%;\n    width: 2px;\n  }\n  .headingButton:after {\n    width: 0%;\n    height: 2px;\n  }\n  .headingButton:hover:before {\n    height: 100%;\n  }\n  .headingButton:hover:after {\n    width: 100%;\n  }\n  .headingButton span:before,\n  .headingButton span:after {\n    position: absolute;\n    content: \"\";\n    right: 0;\n    bottom: 0;\n    background: rgb(73, 4, 4);\n    transition: all 0.3s ease;\n  }\n  .headingButton span:before {\n    width: 2px;\n    height: 0%;\n  }\n  .headingButton span:after {\n    width: 0%;\n    height: 2px;\n  }\n  .headingButton span:hover:before {\n    height: 100%;\n  }\n  .headingButton span:hover:after {\n    width: 100%;\n  }\n\n\n.main {\n    background-color: #B86E03;\n    height: 80vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.welcomeMessage {\n    margin: 20px;\n\n}\n\n.adText {\n    padding: 20px;\n    width: 25%;\n    text-align: center;\n}\n\n.menuContainer {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  width: 80%;\n}\n\n.menucard {\n  margin: 10px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  text-align: center;\n  background-color: beige;\n}\n\n.footer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 10vh;\n    background-color: darkgoldenrod;\n}"],"sourceRoot":""}]);
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
            "Name": "Sausages in Grease",
            "price": "5£"
        },
        {
            "Name": "Soggy Fish & Chips",
            "price": "9£"
        },
        {
            "Name": "Bangers and Watery Mash",
            "price": "11£"
        },
        {
            "Name": "Vegan Sheperd's Pie",
            "price": "8£"
        },
        {
            "Name": "Spam Sandwich",
            "price": "8£"
        },
        {
            "Name": "Spam Salad",
            "price": "12£"
        },
    ]
}



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
    let content = document.getElementById('mainContent')
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
}




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
    
    const mainPageContent = document.createElement('div')
    mainPageContent.classList.add('main')
    mainPageContent.setAttribute('id', 'mainContent')
    return mainPageContent
}

function messageGenerator() {
    (0,_functions_reusableFunctions__WEBPACK_IMPORTED_MODULE_0__.pageScrubber)()
    let content = document.getElementById('mainContent')
    const welcomeMessage = document.createElement('div')
    welcomeMessage.classList.add('welcomeMessage')
    welcomeMessage.innerHTML = '<h2>Welcome to The Jolly Badger</h2>';
    content.appendChild(welcomeMessage)

    const adText = document.createElement('div')
    adText.classList.add('adText')
    adText.innerHTML = '<h3>The place for mediocre ale, depressing pub food and frequent fights.</h3>'
    content.appendChild(adText)

    const adText2 = document.createElement('div')
    adText2.classList.add('adText')
    adText2.innerHTML = '<p>Step in and experience the utter bleariness of life in Britain.</p>'
    content.appendChild(adText2)
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
    (0,_functions_reusableFunctions__WEBPACK_IMPORTED_MODULE_0__.pageScrubber)()
    let content = document.getElementById('mainContent')

    let menuHeading = document.createElement('div')
    menuHeading.classList.add('menuHeading')
    menuHeading.setAttribute('id', 'menuHeading')
    menuHeading.innerHTML = '<h2>Menu</h2>'
    content.appendChild(menuHeading)


    let menuContainer = document.createElement('div')
    menuContainer.classList.add('menuContainer')
    menuContainer.setAttribute('id', 'menuContainer')
    content.appendChild(menuContainer)



}

function menuPopulator() {
let menuContainer = document.getElementById('menuContainer')
    _data_menuData__WEBPACK_IMPORTED_MODULE_1__.menu.menuItems.forEach((menuObject) => {
        let menuCard = document.createElement('div')
        menuCard.classList.add('menucard')
        menuCard.innerHTML = `<h4>${menuObject.Name}</h4><br><h3>${menuObject.price}</h3>`
        menuContainer.appendChild(menuCard)
    })
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
    const header = document.createElement('div')
    header.classList.add('header')

    const headingLogo = document.createElement('div')
    headingLogo.classList.add('headingLogo')
    headingLogo.setAttribute('id', 'buttonContainer')
    headingLogo.innerHTML = `<h1>The Jolly Badger</h1>`
    header.appendChild(headingLogo)

    const headingMenu = document.createElement('div')
    headingMenu.classList.add('headingMenu')
    headingMenu.setAttribute('id', 'headingMenu')
    header.appendChild(headingMenu)

    return header;
}


function buttonGenerator() {
    let menuVar = document.getElementById('headingMenu')

    let homeBtn = document.createElement('button')
    homeBtn.innerHTML = "Home"
    homeBtn.classList.add('headingButton')
    homeBtn.setAttribute('id', 'homeBtn')
    menuVar.appendChild(homeBtn)
/*     homeBtn.addEventListener('click', function(){
        console.log("Working?")
    }) */
    
    const menuBtn = document.createElement('button')
    menuBtn.innerHTML = "Menu"
    menuBtn.classList.add('headingButton')
    menuBtn.setAttribute('id', 'menuBtn')
    menuVar.appendChild(menuBtn)

    const contactBtn = document.createElement('button')
    contactBtn.innerHTML = "Contact"
    contactBtn.classList.add('headingButton')
    contactBtn.setAttribute('id', 'contactBtn')
    menuVar.appendChild(contactBtn) 
}

function footerGenerator() {
    let content = document.getElementById('content')
    const footer = document.createElement('div')
    footer.classList.add('footer')
    footer.innerHTML = "antero 2023"
    content.appendChild(footer)
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
/* harmony import */ var _data_menuData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/menuData */ "./src/data/menuData.js");






let content = document.getElementById('content');

//Generate mainpage on load
content.appendChild((0,_pages_menuCreation__WEBPACK_IMPORTED_MODULE_1__.headerGenerator)());
(0,_pages_menuCreation__WEBPACK_IMPORTED_MODULE_1__.buttonGenerator)();
content.appendChild((0,_pages_mainPage__WEBPACK_IMPORTED_MODULE_2__.mainPageGenerator)());
(0,_pages_mainPage__WEBPACK_IMPORTED_MODULE_2__.messageGenerator)();
(0,_pages_menuCreation__WEBPACK_IMPORTED_MODULE_1__.footerGenerator)();


//Event listeners
const homeBtn = document.getElementById('homeBtn')
homeBtn.addEventListener('click', function(){
    ;(0,_pages_mainPage__WEBPACK_IMPORTED_MODULE_2__.messageGenerator)()
})

const menuBtn = document.getElementById('menuBtn')
menuBtn.addEventListener('click', function(){
    ;(0,_pages_menu__WEBPACK_IMPORTED_MODULE_3__.menuGenerator)()
    ;(0,_pages_menu__WEBPACK_IMPORTED_MODULE_3__.menuPopulator)()
})

const contactBtn = document.getElementById('contactBtn')
contactBtn.addEventListener('click', function(){
    console.log(_data_menuData__WEBPACK_IMPORTED_MODULE_4__.menu)
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQzJEO0FBQ25CO0FBQ1g7QUFDckI7O0FBRXBDOztBQUVBO0FBQ0Esb0JBQW9CLG9FQUFlO0FBQ25DLG9FQUFlO0FBQ2Ysb0JBQW9CLGtFQUFpQjtBQUNyQyxpRUFBZ0I7QUFDaEIsb0VBQWU7OztBQUdmO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQWdCO0FBQ3BCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksMkRBQWE7QUFDakIsSUFBSSwyREFBYTtBQUNqQixDQUFDOztBQUVEO0FBQ0E7QUFDQSxnQkFBZ0IsZ0RBQUk7QUFDcEIsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvZGF0YS9tZW51RGF0YS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvZnVuY3Rpb25zL3JldXNhYmxlRnVuY3Rpb25zLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9wYWdlcy9tYWluUGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvbWVudUNyZWF0aW9uLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9GaXhlZHN5cy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogcmdiKDczLCA0LCA0KTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRml4ZWRTeXMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0dGYnKVxcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnRml4ZWRTeXMnO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ29sZGVucm9kO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTB2aDtcXG59XFxuXFxuLmhlYWRpbmdNZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkaW5nQnV0dG9uIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNzMsIDQsIDQpO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uaGVhZGluZ0J1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiByZ2IoNzMsIDQsIDQpO1xcbiAgfVxcbiAgLmhlYWRpbmdCdXR0b24gc3BhbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICAuaGVhZGluZ0J1dHRvbjpiZWZvcmUsXFxuICAuaGVhZGluZ0J1dHRvbjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDczLCA0LCA0KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIH1cXG4gIC5oZWFkaW5nQnV0dG9uOmJlZm9yZSB7XFxuICAgIGhlaWdodDogMCU7XFxuICAgIHdpZHRoOiAycHg7XFxuICB9XFxuICAuaGVhZGluZ0J1dHRvbjphZnRlciB7XFxuICAgIHdpZHRoOiAwJTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICB9XFxuICAuaGVhZGluZ0J1dHRvbjpob3ZlcjpiZWZvcmUge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICAuaGVhZGluZ0J1dHRvbjpob3ZlcjphZnRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmhlYWRpbmdCdXR0b24gc3BhbjpiZWZvcmUsXFxuICAuaGVhZGluZ0J1dHRvbiBzcGFuOmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDczLCA0LCA0KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIH1cXG4gIC5oZWFkaW5nQnV0dG9uIHNwYW46YmVmb3JlIHtcXG4gICAgd2lkdGg6IDJweDtcXG4gICAgaGVpZ2h0OiAwJTtcXG4gIH1cXG4gIC5oZWFkaW5nQnV0dG9uIHNwYW46YWZ0ZXIge1xcbiAgICB3aWR0aDogMCU7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgfVxcbiAgLmhlYWRpbmdCdXR0b24gc3Bhbjpob3ZlcjpiZWZvcmUge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICAuaGVhZGluZ0J1dHRvbiBzcGFuOmhvdmVyOmFmdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuXFxuLm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjg2RTAzO1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWxjb21lTWVzc2FnZSB7XFxuICAgIG1hcmdpbjogMjBweDtcXG5cXG59XFxuXFxuLmFkVGV4dCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4ubWVudWNhcmQge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxufVxcblxcbi5mb290ZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dvbGRlbnJvZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0VBQ2QsWUFBWTtFQUNaLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTs7SUFFRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE9BQU87SUFDUCxNQUFNO0lBQ04seUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7RUFDWjtFQUNBO0lBQ0UsU0FBUztJQUNULFdBQVc7RUFDYjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTs7SUFFRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7RUFDWjtFQUNBO0lBQ0UsU0FBUztJQUNULFdBQVc7RUFDYjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7OztBQUdGO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6IHJnYig3MywgNCwgNCk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0ZpeGVkU3lzJztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL0ZpeGVkc3lzLnR0ZicpIGZvcm1hdCgndHRmJylcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0ZpeGVkU3lzJztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dvbGRlbnJvZDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxufVxcblxcbi5oZWFkaW5nTWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGluZ0J1dHRvbiB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDczLCA0LCA0KTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmhlYWRpbmdCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogcmdiKDczLCA0LCA0KTtcXG4gIH1cXG4gIC5oZWFkaW5nQnV0dG9uIHNwYW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbiAgLmhlYWRpbmdCdXR0b246YmVmb3JlLFxcbiAgLmhlYWRpbmdCdXR0b246YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYig3MywgNCwgNCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICB9XFxuICAuaGVhZGluZ0J1dHRvbjpiZWZvcmUge1xcbiAgICBoZWlnaHQ6IDAlO1xcbiAgICB3aWR0aDogMnB4O1xcbiAgfVxcbiAgLmhlYWRpbmdCdXR0b246YWZ0ZXIge1xcbiAgICB3aWR0aDogMCU7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgfVxcbiAgLmhlYWRpbmdCdXR0b246aG92ZXI6YmVmb3JlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbiAgLmhlYWRpbmdCdXR0b246aG92ZXI6YWZ0ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5oZWFkaW5nQnV0dG9uIHNwYW46YmVmb3JlLFxcbiAgLmhlYWRpbmdCdXR0b24gc3BhbjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYig3MywgNCwgNCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICB9XFxuICAuaGVhZGluZ0J1dHRvbiBzcGFuOmJlZm9yZSB7XFxuICAgIHdpZHRoOiAycHg7XFxuICAgIGhlaWdodDogMCU7XFxuICB9XFxuICAuaGVhZGluZ0J1dHRvbiBzcGFuOmFmdGVyIHtcXG4gICAgd2lkdGg6IDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gIH1cXG4gIC5oZWFkaW5nQnV0dG9uIHNwYW46aG92ZXI6YmVmb3JlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbiAgLmhlYWRpbmdCdXR0b24gc3Bhbjpob3ZlcjphZnRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcblxcbi5tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I4NkUwMztcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2VsY29tZU1lc3NhZ2Uge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuXFxufVxcblxcbi5hZFRleHQge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tZW51Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLm1lbnVjYXJkIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbn1cXG5cXG4uZm9vdGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtnb2xkZW5yb2Q7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBtZW51ID0ge1xuICAgIG1lbnVJdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcIk5hbWVcIjogXCJTYXVzYWdlcyBpbiBHcmVhc2VcIixcbiAgICAgICAgICAgIFwicHJpY2VcIjogXCI1wqNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIk5hbWVcIjogXCJTb2dneSBGaXNoICYgQ2hpcHNcIixcbiAgICAgICAgICAgIFwicHJpY2VcIjogXCI5wqNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIk5hbWVcIjogXCJCYW5nZXJzIGFuZCBXYXRlcnkgTWFzaFwiLFxuICAgICAgICAgICAgXCJwcmljZVwiOiBcIjExwqNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIk5hbWVcIjogXCJWZWdhbiBTaGVwZXJkJ3MgUGllXCIsXG4gICAgICAgICAgICBcInByaWNlXCI6IFwiOMKjXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJOYW1lXCI6IFwiU3BhbSBTYW5kd2ljaFwiLFxuICAgICAgICAgICAgXCJwcmljZVwiOiBcIjjCo1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiTmFtZVwiOiBcIlNwYW0gU2FsYWRcIixcbiAgICAgICAgICAgIFwicHJpY2VcIjogXCIxMsKjXCJcbiAgICAgICAgfSxcbiAgICBdXG59XG5cbmV4cG9ydCB7XG4gICAgbWVudVxufSIsIlxuZnVuY3Rpb24gcGFnZVNjcnViYmVyKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50JylcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKVxuICAgIH1cbn1cblxuXG5leHBvcnQge1xuICAgIHBhZ2VTY3J1YmJlcixcbn0iLCJpbXBvcnQge3BhZ2VTY3J1YmJlcn0gZnJvbSAnLi4vZnVuY3Rpb25zL3JldXNhYmxlRnVuY3Rpb25zJztcblxuZnVuY3Rpb24gbWFpblBhZ2VHZW5lcmF0b3IoKSB7XG4gICAgXG4gICAgY29uc3QgbWFpblBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYWluUGFnZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbicpXG4gICAgbWFpblBhZ2VDb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbkNvbnRlbnQnKVxuICAgIHJldHVybiBtYWluUGFnZUNvbnRlbnRcbn1cblxuZnVuY3Rpb24gbWVzc2FnZUdlbmVyYXRvcigpIHtcbiAgICBwYWdlU2NydWJiZXIoKVxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50JylcbiAgICBjb25zdCB3ZWxjb21lTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgd2VsY29tZU1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnd2VsY29tZU1lc3NhZ2UnKVxuICAgIHdlbGNvbWVNZXNzYWdlLmlubmVySFRNTCA9ICc8aDI+V2VsY29tZSB0byBUaGUgSm9sbHkgQmFkZ2VyPC9oMj4nO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2VsY29tZU1lc3NhZ2UpXG5cbiAgICBjb25zdCBhZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFkVGV4dC5jbGFzc0xpc3QuYWRkKCdhZFRleHQnKVxuICAgIGFkVGV4dC5pbm5lckhUTUwgPSAnPGgzPlRoZSBwbGFjZSBmb3IgbWVkaW9jcmUgYWxlLCBkZXByZXNzaW5nIHB1YiBmb29kIGFuZCBmcmVxdWVudCBmaWdodHMuPC9oMz4nXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZFRleHQpXG5cbiAgICBjb25zdCBhZFRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhZFRleHQyLmNsYXNzTGlzdC5hZGQoJ2FkVGV4dCcpXG4gICAgYWRUZXh0Mi5pbm5lckhUTUwgPSAnPHA+U3RlcCBpbiBhbmQgZXhwZXJpZW5jZSB0aGUgdXR0ZXIgYmxlYXJpbmVzcyBvZiBsaWZlIGluIEJyaXRhaW4uPC9wPidcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkVGV4dDIpXG59XG5cbmV4cG9ydCB7XG4gICAgbWFpblBhZ2VHZW5lcmF0b3IsIG1lc3NhZ2VHZW5lcmF0b3Jcbn0iLCJpbXBvcnQge3BhZ2VTY3J1YmJlcn0gZnJvbSAnLi4vZnVuY3Rpb25zL3JldXNhYmxlRnVuY3Rpb25zJztcbmltcG9ydCB7bWVudX0gZnJvbSAnLi4vZGF0YS9tZW51RGF0YSdcblxuXG5mdW5jdGlvbiBtZW51R2VuZXJhdG9yKCkge1xuICAgIHBhZ2VTY3J1YmJlcigpXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnQnKVxuXG4gICAgbGV0IG1lbnVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51SGVhZGluZy5jbGFzc0xpc3QuYWRkKCdtZW51SGVhZGluZycpXG4gICAgbWVudUhlYWRpbmcuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51SGVhZGluZycpXG4gICAgbWVudUhlYWRpbmcuaW5uZXJIVE1MID0gJzxoMj5NZW51PC9oMj4nXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51SGVhZGluZylcblxuXG4gICAgbGV0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudUNvbnRhaW5lcicpXG4gICAgbWVudUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVDb250YWluZXInKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcilcblxuXG5cbn1cblxuZnVuY3Rpb24gbWVudVBvcHVsYXRvcigpIHtcbmxldCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVDb250YWluZXInKVxuICAgIG1lbnUubWVudUl0ZW1zLmZvckVhY2goKG1lbnVPYmplY3QpID0+IHtcbiAgICAgICAgbGV0IG1lbnVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbWVudUNhcmQuY2xhc3NMaXN0LmFkZCgnbWVudWNhcmQnKVxuICAgICAgICBtZW51Q2FyZC5pbm5lckhUTUwgPSBgPGg0PiR7bWVudU9iamVjdC5OYW1lfTwvaDQ+PGJyPjxoMz4ke21lbnVPYmplY3QucHJpY2V9PC9oMz5gXG4gICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNhcmQpXG4gICAgfSlcbn1cblxuXG5leHBvcnQge1xuICAgIG1lbnVHZW5lcmF0b3IsXG4gICAgbWVudVBvcHVsYXRvclxufSIsIlxuXG5mdW5jdGlvbiBoZWFkZXJHZW5lcmF0b3IoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcblxuICAgIGNvbnN0IGhlYWRpbmdMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkaW5nTG9nby5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nTG9nbycpXG4gICAgaGVhZGluZ0xvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdidXR0b25Db250YWluZXInKVxuICAgIGhlYWRpbmdMb2dvLmlubmVySFRNTCA9IGA8aDE+VGhlIEpvbGx5IEJhZGdlcjwvaDE+YFxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkaW5nTG9nbylcblxuICAgIGNvbnN0IGhlYWRpbmdNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkaW5nTWVudS5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nTWVudScpXG4gICAgaGVhZGluZ01lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkaW5nTWVudScpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmdNZW51KVxuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuXG5mdW5jdGlvbiBidXR0b25HZW5lcmF0b3IoKSB7XG4gICAgbGV0IG1lbnVWYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGluZ01lbnUnKVxuXG4gICAgbGV0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGhvbWVCdG4uaW5uZXJIVE1MID0gXCJIb21lXCJcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmdCdXR0b24nKVxuICAgIGhvbWVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdob21lQnRuJylcbiAgICBtZW51VmFyLmFwcGVuZENoaWxkKGhvbWVCdG4pXG4vKiAgICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV29ya2luZz9cIilcbiAgICB9KSAqL1xuICAgIFxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIG1lbnVCdG4uaW5uZXJIVE1MID0gXCJNZW51XCJcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmdCdXR0b24nKVxuICAgIG1lbnVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdtZW51QnRuJylcbiAgICBtZW51VmFyLmFwcGVuZENoaWxkKG1lbnVCdG4pXG5cbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb250YWN0QnRuLmlubmVySFRNTCA9IFwiQ29udGFjdFwiXG4gICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nQnV0dG9uJylcbiAgICBjb250YWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdEJ0bicpXG4gICAgbWVudVZhci5hcHBlbmRDaGlsZChjb250YWN0QnRuKSBcbn1cblxuZnVuY3Rpb24gZm9vdGVyR2VuZXJhdG9yKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpXG4gICAgZm9vdGVyLmlubmVySFRNTCA9IFwiYW50ZXJvIDIwMjNcIlxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKVxufVxuXG5leHBvcnQge1xuICAgIGhlYWRlckdlbmVyYXRvcixcbiAgICBidXR0b25HZW5lcmF0b3IsXG4gICAgZm9vdGVyR2VuZXJhdG9yXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQge2hlYWRlckdlbmVyYXRvciwgYnV0dG9uR2VuZXJhdG9yLCBmb290ZXJHZW5lcmF0b3J9IGZyb20gJy4vcGFnZXMvbWVudUNyZWF0aW9uJztcbmltcG9ydCB7bWFpblBhZ2VHZW5lcmF0b3IsIG1lc3NhZ2VHZW5lcmF0b3J9IGZyb20gJy4vcGFnZXMvbWFpblBhZ2UnXG5pbXBvcnQge21lbnVHZW5lcmF0b3IsIG1lbnVQb3B1bGF0b3J9IGZyb20gJy4vcGFnZXMvbWVudSdcbmltcG9ydCB7bWVudX0gZnJvbSAnLi9kYXRhL21lbnVEYXRhJ1xuXG5sZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbi8vR2VuZXJhdGUgbWFpbnBhZ2Ugb24gbG9hZFxuY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJHZW5lcmF0b3IoKSk7XG5idXR0b25HZW5lcmF0b3IoKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpblBhZ2VHZW5lcmF0b3IoKSk7XG5tZXNzYWdlR2VuZXJhdG9yKCk7XG5mb290ZXJHZW5lcmF0b3IoKTtcblxuXG4vL0V2ZW50IGxpc3RlbmVyc1xuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lQnRuJylcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIG1lc3NhZ2VHZW5lcmF0b3IoKVxufSlcblxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51QnRuJylcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIG1lbnVHZW5lcmF0b3IoKVxuICAgIG1lbnVQb3B1bGF0b3IoKVxufSlcblxuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0QnRuJylcbmNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGNvbnNvbGUubG9nKG1lbnUpXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==