(window["webpackJsonp_qube_tools"] = window["webpackJsonp_qube_tools"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_qube_tools"] = window["webpackJsonp_qube_tools"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/components/demo-item.js":
/*!*************************************!*\
  !*** ./src/components/demo-item.js ***!
  \*************************************/
/*! exports provided: Demo_Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Demo_Item", function() { return Demo_Item; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var Demo_Item = function Demo_Item(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "theme-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "theme qube-tools-open-popup",
    "data-demo-id": "main"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "theme-screenshot"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: props.args.screenshot
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "select-theme"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, props.args.blog_title)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "demo-import-loader preview-all preview-all-main"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "demo-import-loader preview-icon preview-main"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", {
    className: "custom-loader"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "theme-id-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
    className: "theme-name",
    id: "main"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, props.args.blog_title)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "theme-actions"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    className: "button button-primary",
    href: props.args.preview_url,
    target: "_blank"
  }, "Live Preview")))));
};

/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/*! exports provided: GetTab, RenderTab, Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTab", function() { return GetTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderTab", function() { return RenderTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tab_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-content */ "./src/components/tab-content.js");



var TabPanel = wp.components.TabPanel;
var __ = wp.i18n.__;
var GetTab = function GetTab() {
  var all_tabs = qubeToolsImporterObj.demo_categories;
  var updated_all_tabs = [];

  for (var _i = 0, _Object$entries = Object.entries(all_tabs); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        title = _Object$entries$_i[1];

    updated_all_tabs.push({
      name: key,
      title: title,
      className: key
    });
  }

  return updated_all_tabs;
};
var RenderTab = function RenderTab(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_tab_content__WEBPACK_IMPORTED_MODULE_2__["Tab_Content"], {
    tab: props.tab,
    demos: props.demos
  });
};
var Main = function Main(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TabPanel, {
    className: "qube-tools-header-bar",
    activeClass: "qube-tools-tab-active",
    tabs: GetTab()
  }, function (tab) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RenderTab, {
      tab: tab,
      demos: props.demos
    });
  });
};

/***/ }),

/***/ "./src/components/tab-content.js":
/*!***************************************!*\
  !*** ./src/components/tab-content.js ***!
  \***************************************/
/*! exports provided: Tab_Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab_Content", function() { return Tab_Content; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _demo_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo-item */ "./src/components/demo-item.js");


var __ = wp.i18n.__;
var Tab_Content = function Tab_Content(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "themes wp-clearfix"
  }, Object.keys(props.demos).map(function (keyName, keyIndex) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_demo_item__WEBPACK_IMPORTED_MODULE_1__["Demo_Item"], {
      slug: keyName,
      args: props.demos[keyName]
    });
  }));
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main */ "./src/components/main.js");
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/components */ "./src/utils/components.js");





/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


var __ = wp.i18n.__;
var _wp$element = wp.element,
    render = _wp$element.render,
    useState = _wp$element.useState;
var _lodash = lodash,
    isEqual = _lodash.isEqual;
var _wp = wp,
    apiFetch = _wp.apiFetch;
var _wp$components = wp.components,
    TabPanel = _wp$components.TabPanel,
    Notice = _wp$components.Notice,
    Button = _wp$components.Button,
    Card = _wp$components.Card,
    CardHeader = _wp$components.CardHeader,
    CardBody = _wp$components.CardBody,
    CardDivider = _wp$components.CardDivider,
    CardFooter = _wp$components.CardFooter,
    Spinner = _wp$components.Spinner;


var AddSettings = function AddSettings() {
  var _useState = useState({}),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      allSetting = _useState2[0],
      setInitialSetting = _useState2[1],
      _useState3 = useState(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      isSaving = _useState4[0],
      setIsSaving = _useState4[1],
      _useState5 = useState(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      hasNotice = _useState6[0],
      setNotice = _useState6[1],
      _useState7 = useState(false),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      hasError = _useState8[0],
      setError = _useState8[1],
      _useState9 = useState(false),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),
      needSave = _useState10[0],
      setNeedSave = _useState10[1];

  var SettingNotice = function SettingNotice() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Notice, {
      onRemove: function onRemove() {
        return setNotice(false);
      },
      status: hasError ? 'error' : 'success'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", null, hasError && __('An error occurred.', 'qube-tools'), !hasError && __('Saved Successfully.', 'qube-tools')));
  };

  function getSettings() {
    return _getSettings.apply(this, arguments);
  }

  function _getSettings() {
    _getSettings = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return apiFetch({
                path: qubeToolsImporterObj.rest.namespace + qubeToolsImporterObj.rest.version + '/get_settings'
              });

            case 2:
              data = _context.sent;

              if (data) {
                setInitialSetting(data);
              } else {
                setInitialSetting({});
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getSettings.apply(this, arguments);
  }

  function setSettings() {
    return _setSettings.apply(this, arguments);
  }

  function _setSettings() {
    _setSettings = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setIsSaving(true);
              _context2.next = 3;
              return apiFetch({
                path: qubeToolsImporterObj.rest.namespace + qubeToolsImporterObj.rest.version + '/set_settings',
                method: 'POST',
                data: {
                  settings: allSetting
                }
              });

            case 3:
              data = _context2.sent;

              if (isEqual(allSetting, data)) {
                setError(false);
                setIsSaving(false);
                setNeedSave(false);
                setInitialSetting(data);
              } else {
                setIsSaving(false);
                setError(true);
                setNeedSave(true);
              }

              setNotice(true);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _setSettings.apply(this, arguments);
  }

  var setStateSettings = function setStateSettings(key, val) {
    var newSetting = Object.assign({}, allSetting);
    newSetting[key] = val;
    setInitialSetting(newSetting);
    setNeedSave(true);
  };

  Object(_utils_components__WEBPACK_IMPORTED_MODULE_6__["useComponentDidMount"])(function () {
    getSettings();
  });
  Object(_utils_components__WEBPACK_IMPORTED_MODULE_6__["useComponentDidUpdate"])(function () {
    /*Nothing for now*/
  });
  Object(_utils_components__WEBPACK_IMPORTED_MODULE_6__["useComponentWillUnmount"])(function () {
    /*Nothing for now*/
  });

  if (!Object.keys(allSetting).length) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Spinner, null);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Card, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(CardHeader, {
    style: {
      overflow: 'hidden',
      height: '70px'
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h1", null, __('Theme Demo Import', 'qube-tools')), hasNotice && !isSaving && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SettingNotice, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(CardBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "theme-browser rendered"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_main__WEBPACK_IMPORTED_MODULE_5__["Main"], null))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(CardDivider, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(CardFooter, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Button, {
    className: "button",
    onClick: function onClick() {
      return setSettings();
    },
    isPrimary: true,
    disabled: isSaving || !needSave
  }, needSave ? __('Save Settings', 'qube-tools') : __('Saved', 'qube-tools'), isSaving ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Spinner, null) : '')));
};

var DemoImporterPage = function DemoImporterPage() {
  var _useState11 = useState({
    'agency': {
      'blog_title': "Blog",
      'categories': ['Elementor', 'Corporate & Business', 'WooCommerce'],
      'elementor_width': 1140,
      "screenshot": "https://raw.githubusercontent.com/qubethemes/qube-tools-demo-data/master/vyom/agency/screenshot.png",
      "preview_url": "https://demo.qubethemes.com/themes/agency",
      "theme_settings": "https://raw.githubusercontent.com/qubethemes/qube-tools-demo-data/master/vyom/agency/customizer.dat",
      "widgets_file": "https://raw.githubusercontent.com/qubethemes/qube-tools-demo-data/master/vyom/agency/widgets.wie",
      "xml_file": "https://raw.githubusercontent.com/qubethemes/qube-tools-demo-data/master/vyom/agency/content.xml",
      'required_plugins': {
        'free': [{
          'init': 'elementor/elementor.php',
          'name': 'Elementor',
          'slug': 'elementor'
        }]
      }
    },
    'woocommerce': {
      'blog_title': "WooCommerce",
      'categories': ['Elementor', 'Corporate & Business', 'WooCommerce'],
      'elementor_width': 1140,
      "screenshot": "https://raw.githubusercontent.com/qubethemes/qube-tools-demo-data/master/vyom/agency/screenshot.png",
      "preview_url": "https://demo.qubethemes.com/themes/woocommerce",
      "theme_settings": "https://raw.githubusercontent.com/qubethemes/qube-tools-demo-data/master/vyom/agency/customizer.dat",
      "widgets_file": "https://raw.githubusercontent.com/qubethemes/qube-tools-demo-data/master/vyom/agency/widgets.wie",
      "xml_file": "https://raw.githubusercontent.com/qubethemes/qube-tools-demo-data/master/vyom/agency/content.xml",
      'required_plugins': {
        'free': [{
          'init': 'elementor/elementor.php',
          'name': 'Elementor',
          'slug': 'elementor'
        }]
      }
    }
  }),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState11, 2),
      demoList = _useState12[0],
      setDemoList = _useState12[1];

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Card, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(CardHeader, {
    style: {
      overflow: 'hidden',
      height: '70px'
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h1", null, __('Theme Demo Import', 'qube-tools'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(CardBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "theme-browser rendered"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_main__WEBPACK_IMPORTED_MODULE_5__["Main"], {
    demos: demoList
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(CardDivider, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(CardFooter, null));
};

document.addEventListener('DOMContentLoaded', function () {
  if ('undefined' !== typeof document.getElementById(qubeToolsImporterObj.root_id) && null !== document.getElementById(qubeToolsImporterObj.root_id)) {
    render(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(DemoImporterPage, null), document.getElementById(qubeToolsImporterObj.root_id));
  }
});

/***/ }),

/***/ "./src/utils/components.js":
/*!*********************************!*\
  !*** ./src/utils/components.js ***!
  \*********************************/
/*! exports provided: useComponentDidMount, useComponentDidUpdate, useComponentWillUnmount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useComponentDidMount", function() { return useComponentDidMount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useComponentDidUpdate", function() { return useComponentDidUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useComponentWillUnmount", function() { return useComponentWillUnmount; });
var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useRef = _wp$element.useRef;
var useComponentDidMount = function useComponentDidMount(handler) {
  return useEffect(function () {
    return handler();
  }, []);
};
var useComponentDidUpdate = function useComponentDidUpdate(handler, deps) {
  var isInitialMount = useRef(true);
  useEffect(function () {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    return handler();
  }, deps);
};
var useComponentWillUnmount = function useComponentWillUnmount(handler) {
  return useEffect(function () {
    return handler;
  }, []);
};

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*************************************!*\
  !*** external "regeneratorRuntime" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["regeneratorRuntime"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map