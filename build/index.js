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

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


var __ = wp.i18n.__;
var useState = wp.element.useState;
var Demo_Item = function Demo_Item(props) {
  var _useState = useState(1),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      importerLoader = _useState2[0],
      setImporterLoader = _useState2[1];

  var getSelectedDemoPluginDetails = function getSelectedDemoPluginDetails(demo) {
    console.log(demo);
  };

  var loaderCss = {};

  if (props.selectedDemo !== '' && props.slug === props.selectedDemo && props.isAjaxLoading) {
    loaderCss = {
      display: 'block'
    };
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "theme-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "theme qube-tools-open-popup",
    "data-demo-id": "main"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "theme-screenshot"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
    src: props.args.screenshot
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "select-theme",
    onClick: function onClick() {
      props.setSelectedDemo(props.slug);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, "Select ", props.args.title, " demo")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "demo-import-loader preview-all preview-all-main",
    style: loaderCss
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "demo-import-loader preview-icon preview-main",
    style: loaderCss
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", {
    className: "custom-loader"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "theme-id-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", {
    className: "theme-name",
    id: "main"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, props.args.title)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "theme-actions"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
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
/*! exports provided: GetTab, Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTab", function() { return GetTab; });
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
var Main = function Main(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TabPanel, {
    className: "qube-tools-header-bar",
    activeClass: "qube-tools-tab-active",
    tabs: GetTab(),
    onSelect: function onSelect(selectedTab) {
      props.tabSelect(selectedTab);
    },
    initialTabName: "elementor"
  }, function (tab) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_tab_content__WEBPACK_IMPORTED_MODULE_2__["Tab_Content"], {
      tab: tab,
      demos: props.demos,
      setSelectedDemo: props.setSelectedDemo,
      selectedDemo: props.selectedDemo,
      isAjaxLoading: props.isAjaxLoading
    });
  });
};

/***/ }),

/***/ "./src/components/process/content-import-failed.js":
/*!*********************************************************!*\
  !*** ./src/components/process/content-import-failed.js ***!
  \*********************************************************/
/*! exports provided: Content_Import_Failed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content_Import_Failed", function() { return Content_Import_Failed; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var Content_Import_Failed = function Content_Import_Failed(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("form", {
    className: "qube-tools-demo-failed-feedback-form",
    method: "post"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, "You can submit the problem from here "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "hidden",
    id: "_wpnonce",
    name: "_wpnonce",
    value: "e31091aa0c"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "hidden",
    name: "_wp_http_referer",
    value: "/wp-admin/admin-ajax.php?action=qube_tools_ajax_get_demo_data&demo_name=main&demo_data_nonce=1bdff2a34f&_fs_blog_admin=true"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "hidden",
    id: "_wpnonce",
    name: "_wpnonce",
    value: "e31091aa0c"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "hidden",
    name: "_wp_http_referer",
    value: "/wp-admin/admin-ajax.php?action=qube_tools_ajax_get_demo_data&demo_name=main&demo_data_nonce=1bdff2a34f&_fs_blog_admin=true"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "hidden",
    name: "admin_email",
    value: "mantrabrain@gmail.com"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "hidden",
    name: "site_url",
    value: "https://staging.mantrabrain.com"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "hidden",
    name: "selected_demo",
    value: "main"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "hidden",
    name: "action",
    value: "qube_tools_feedback_form_demo_failed_response"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "hidden",
    name: "error_message",
    className: "error_message",
    value: ""
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("textarea", {
    className: "feedback",
    name: "feedback",
    placeholder: "Leave us your message. We will help you to import demo data."
  }, "DDDD")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Clicking on send button will send your message, admin email, website url, selected demo name, php and wordpress version"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    type: "submit",
    name: "qube_tools_demo_failed_send",
    className: "button button-secondary"
  }, "Send message"));
};

/***/ }),

/***/ "./src/components/process/content-import-success.js":
/*!**********************************************************!*\
  !*** ./src/components/process/content-import-success.js ***!
  \**********************************************************/
/*! exports provided: Content_Import_Success */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content_Import_Success", function() { return Content_Import_Success; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var Content_Import_Success = function Content_Import_Success(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "qube-tools-import-success"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
    style: {
      fontSize: '45px'
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    draggable: "false",
    role: "img",
    className: "emoji",
    alt: "\uD83C\uDF89",
    src: "https://s.w.org/images/core/emoji/13.1.0/svg/1f389.svg"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    draggable: "false",
    role: "img",
    className: "emoji",
    alt: "\uD83C\uDF89",
    src: "https://s.w.org/images/core/emoji/13.1.0/svg/1f389.svg"
  }), " Congratulations", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    draggable: "false",
    role: "img",
    className: "emoji",
    alt: "\uD83C\uDF89",
    src: "https://s.w.org/images/core/emoji/13.1.0/svg/1f389.svg"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    draggable: "false",
    role: "img",
    className: "emoji",
    alt: "\uD83C\uDF89",
    src: "https://s.w.org/images/core/emoji/13.1.0/svg/1f389.svg"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Successfully Demo Imported!"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("form", {
    className: "qube-tools-demo-success-feedback",
    method: "post"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "hidden",
    id: "_wpnonce",
    name: "_wpnonce",
    value: "e61f151d10"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "hidden",
    name: "_wp_http_referer",
    value: "/wp-admin/admin-ajax.php?action=qube_tools_ajax_get_demo_data&demo_name=main&demo_data_nonce=1bdff2a34f&_fs_blog_admin=true"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "hidden",
    id: "_wpnonce",
    name: "_wpnonce",
    value: "e61f151d10"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "hidden",
    name: "_wp_http_referer",
    value: "/wp-admin/admin-ajax.php?action=qube_tools_ajax_get_demo_data&demo_name=main&demo_data_nonce=1bdff2a34f&_fs_blog_admin=true"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "hidden",
    name: "admin_email",
    value: "mantrabrain@gmail.com"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "hidden",
    name: "site_url",
    value: "https://staging.mantrabrain.com"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "hidden",
    name: "installed_demo",
    value: "main"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "hidden",
    name: "action",
    value: "qube_tools_feedback_form_response"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("textarea", {
    className: "feedback",
    name: "feedback",
    placeholder: "Do  you have any suggestion? You can give us feedback from here."
  }, "Feed")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Clicking on send button will send your feedback message, admin email, website url and installed demo name."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    type: "submit",
    name: "qube_tools_demo_success_send",
    className: "button button-secondary"
  }, "Send")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    style: {
      fontWeight: "bold",
      fontSize: "16px"
    }
  }, "If you have some spare time, can you please write review from here?"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    style: {
      textDecoration: 'none',
      border: 'none',
      display: 'block',
      padding: '15px',
      background: "#007cba",
      color: '#fff',
      fontSize: "20px",
      margin: "20px 0",
      borderRadius: "50px"
    },
    href: "https://wordpress.org/support/theme/qube/reviews/?filter=5",
    target: "_blank"
  }, "Yes I Would Like to Write Review"), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "https://staging.mantrabrain.com",
    target: "_blank"
  }, "View Your Site"));
};

/***/ }),

/***/ "./src/components/process/content-importing.js":
/*!*****************************************************!*\
  !*** ./src/components/process/content-importing.js ***!
  \*****************************************************/
/*! exports provided: Content_Importing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content_Importing", function() { return Content_Importing; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);




var __ = wp.i18n.__;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _wp = wp,
    apiFetch = _wp.apiFetch;
var Content_Importing = function Content_Importing(props) {
  var _useState = useState(getImportQueue()),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      importQueue = _useState2[0],
      setImportQueue = _useState2[1];

  var _useState3 = useState({
    xml: '',
    customizer: '',
    widget: ''
  }),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      importStatus = _useState4[0],
      setImportStatus = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      ajaxImportStatus = _useState6[0],
      setAjaxImportStatus = _useState6[1];

  var _useState7 = useState({
    xml: {
      importing: 'Importing XML Data',
      imported: 'XML Data Successfully imported',
      failed: 'Failed to import xml data'
    },
    widget: {
      importing: 'Importing Widget Data',
      imported: 'Widget Data Successfully imported',
      failed: 'Failed to import widget data'
    },
    customizer: {
      importing: 'Importing Customizer Data',
      imported: 'Customizer Data Successfully imported',
      failed: 'Failed to import customizer data'
    }
  }),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      importMessages = _useState8[0],
      setImportMessages = _useState8[1];

  var _useState9 = useState({
    xml: qubeToolsImporterObj.xml_import_nonce,
    widget: qubeToolsImporterObj.widget_import_nonce,
    customizer: qubeToolsImporterObj.customizer_import_nonce
  }),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),
      importNonce = _useState10[0],
      setImportNonce = _useState10[1];

  function getImportQueue() {
    var importType = [];

    if (props.isXMLDataChecked) {
      importType.push('xml');
    }

    if (props.isCustomizerDataChecked) {
      importType.push('customizer');
    }

    if (props.isWidgetDataChecked) {
      importType.push('widget');
    }

    return importType;
  }

  function importSelected(_x) {
    return _importSelected.apply(this, arguments);
  }

  function _importSelected() {
    _importSelected = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(queue) {
      var _importNonce$import_f;

      var newImportQueue, import_file, importingStatus, nonce, formData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              newImportQueue = queue.slice(0);
              import_file = newImportQueue[0];
              newImportQueue.splice(0, 1);
              importingStatus = Object.assign({}, importStatus); // creating copy of state variable

              importingStatus[import_file] = 'IMPORTING';
              setImportStatus(importingStatus);
              nonce = (_importNonce$import_f = importNonce[import_file]) !== null && _importNonce$import_f !== void 0 ? _importNonce$import_f : '';
              formData = new FormData();
              formData.append('action', qubeToolsImporterObj.import_action);
              formData.append('selected_demo', props.selectedDemo);
              formData.append('import_file', import_file);
              formData.append('qube_tools_nonce', nonce);
              apiFetch({
                url: qubeToolsImporterObj.ajax_url,
                method: 'POST',
                credentials: 'same-origin',
                body: formData
              }).then(function (response) {
                var is_success = typeof response.success !== "undefined" ? response.success : false;
                var new_import_file = typeof response.data !== "undefined" ? response.data.import_file : import_file;

                if (is_success) {
                  importingStatus[new_import_file] = "IMPORTED";
                  setImportQueue(newImportQueue);
                  setImportStatus(importingStatus);
                } else {
                  importingStatus[new_import_file] = "FAILED";
                  setImportQueue(newImportQueue);
                  setImportStatus(importingStatus);
                }
              }).catch(function (err) {
                importingStatus[import_file] = "FAILED";
                setImportQueue(newImportQueue);
                setImportStatus(importingStatus);
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _importSelected.apply(this, arguments);
  }

  useEffect(function () {
    if (importQueue.length > 0) {
      importSelected(importQueue);
    }
  }, [importQueue]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "qube-tools-importing-notice"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "qube-tools-import-status qube-tools-popup-text"
  }, Object.keys(importStatus).map(function (key) {
    if (importStatus[key] !== '') {
      var _importMessages$key$i;

      var importStatusValue = importStatus[key].toLowerCase();
      var importMessage = (_importMessages$key$i = importMessages[key][importStatusValue]) !== null && _importMessages$key$i !== void 0 ? _importMessages$key$i : 'Something Wrong, please try again';
      var className = '';

      if (importStatus[key] === 'IMPORTING') {
        className = 'qube-tools-importing';
      } else if (importStatus[key] === 'IMPORTED') {
        className = 'qube-tools-imported';
      } else {
        className = 'qube-tools-importing-failed';
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", {
        className: className
      }, importMessage);
    }
  })));
};

/***/ }),

/***/ "./src/components/process/content-plugin-install.js":
/*!**********************************************************!*\
  !*** ./src/components/process/content-plugin-install.js ***!
  \**********************************************************/
/*! exports provided: Content_Plugin_Install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content_Plugin_Install", function() { return Content_Plugin_Install; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _required_plugin_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./required-plugin-items */ "./src/components/process/required-plugin-items.js");





var __ = wp.i18n.__;
var useState = wp.element.useState;
var _wp = wp,
    apiFetch = _wp.apiFetch;
var Content_Plugin_Install = function Content_Plugin_Install(props) {
  var selectedDemoConfig = typeof props.selectedDemoConfig !== "undefined" ? props.selectedDemoConfig : {};
  var requiredPlugins = typeof selectedDemoConfig.required_plugins !== "undefined" ? selectedDemoConfig.required_plugins : {};

  var _useState = useState(requiredPlugins),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      pluginInstallationDetails = _useState2[0],
      setPluginInstallationDetails = _useState2[1];

  var getPluginInstallationDetails = function getPluginInstallationDetails(plugin) {
    var pluginDetails = {};
    pluginInstallationDetails.map(function (plugin_item) {
      if (plugin.slug === plugin_item.slug) {
        pluginDetails = plugin_item;
      }
    });
    return pluginDetails;
  };

  var updateSinglePluginData = function updateSinglePluginData(plugin) {
    var ajax_response = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var plugin_details = pluginInstallationDetails.map(function (plugin_item) {
      if (plugin.slug === plugin_item.slug && !ajax_response) {
        if (plugin.status === 'NONE') {
          plugin_item.ajax_status = 'INSTALLING';
        } else if (plugin.status === 'INSTALLED') {
          plugin_item.ajax_status = 'ACTIVATING';
        } else {
          plugin_item.ajax_status = 'ACTIVATED';
        }
      } else if (plugin.slug === plugin_item.slug && ajax_response) {
        plugin_item.status = plugin.status;
        plugin_item.ajax_status = plugin.ajax_status;
      }

      return plugin_item;
    });
    setPluginInstallationDetails(plugin_details);
  };

  function sleep(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }

  function _installWordPressPlugin2(_x) {
    return _installWordPressPlugin.apply(this, arguments);
  }

  function _installWordPressPlugin() {
    _installWordPressPlugin = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(plugin) {
      var is_pro, url, win, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              is_pro = typeof plugin.is_pro === "undefined" ? false : true;

              if (!is_pro) {
                _context.next = 8;
                break;
              }

              url = typeof plugin.url === "undefined" ? '' : plugin.url;

              if (!(url === '')) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return");

            case 5:
              win = window.open(url, '_blank');
              win.focus();
              return _context.abrupt("return");

            case 8:
              updateSinglePluginData(plugin);
              _context.next = 11;
              return apiFetch({
                path: qubeToolsImporterObj.rest.namespace + qubeToolsImporterObj.rest.version + '/action_for_plugin',
                method: 'POST',
                data: {
                  plugin: plugin
                }
              });

            case 11:
              data = _context.sent;

              if (data) {
                updateSinglePluginData(data, true);
              } //setAjaxLoading(false);


            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _installWordPressPlugin.apply(this, arguments);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "qube-tools-popup-text"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", null, "Qube tools help you browse and import ready made websites with few clicks. We recommend you to upload sample data on a fresh WordPress install to prevent conflicts with your current content. You can use this plugin to reset your site if needed: ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
    href: "https://staging.mantrabrain.com/wp-admin/plugin-install.php?s=Wordpress+Database+Reset&tab=search",
    target: "_blank"
  }, "Wordpress Database Reset"), "."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "qube-tools-required-plugins-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h3", null, "Recommended Plugins"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", null, "For your site to look exactly like this demo, the plugins below need to be activated."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "qube-tools-required-plugins qube-tools-plugin-installer"
  }, pluginInstallationDetails.map(function (plugin) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_required_plugin_items__WEBPACK_IMPORTED_MODULE_4__["Required_Plugin_Items"], {
      plugin: plugin,
      singlePluginInstallationDetails: function singlePluginInstallationDetails() {
        return getPluginInstallationDetails(plugin);
      },
      installWordPressPlugin: function installWordPressPlugin(plugin) {
        _installWordPressPlugin2(plugin);
      }
    });
  }), ";")));
};

/***/ }),

/***/ "./src/components/process/content-select-files.js":
/*!********************************************************!*\
  !*** ./src/components/process/content-select-files.js ***!
  \********************************************************/
/*! exports provided: Content_Select_Files */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content_Select_Files", function() { return Content_Select_Files; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var CheckboxControl = wp.components.CheckboxControl;
var useState = wp.element.useState;
var Content_Select_Files = function Content_Select_Files(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("form", {
    method: "post",
    id: "qube-tools-demo-import-form"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    id: "qube_tools_import_demo",
    type: "hidden",
    name: "qube_tools_import_demo",
    value: "main"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "qube-tools-demo-import-form-types"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
    className: "qube-tools-popup-text qube-tools-import-file-list"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CheckboxControl, {
    label: "Import XML Data(pages, posts, images, menus, etc...)",
    checked: props.isXMLDataChecked,
    onChange: props.setXMLDataChecked
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CheckboxControl, {
    label: "Import Customizer Settings",
    checked: props.isCustomizerDataChecked,
    onChange: props.setCustomizerDataChecked
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CheckboxControl, {
    label: "Import Widgets",
    checked: props.isWidgetDataChecked,
    onChange: props.setWidgetDataChecked
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "hidden",
    id: "qube_tools_import_demo_data_nonce",
    name: "qube_tools_import_demo_data_nonce",
    value: "ab01363357"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "hidden",
    name: "_wp_http_referer",
    value: " "
  }));
};

/***/ }),

/***/ "./src/components/process/footer.js":
/*!******************************************!*\
  !*** ./src/components/process/footer.js ***!
  \******************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var Footer = function Footer(props) {
  var footer_text = 'Next';

  if (props.currentStep === 2) {
    footer_text = 'Import Selected Demos';
  }

  if (props.currentStep === 3) {// /  return (<></>);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    className: "qube-tools-button qube-tools-plugins-next",
    onClick: function onClick() {
      props.nextStep(props.currentContentStep);
    }
  }, footer_text);
};

/***/ }),

/***/ "./src/components/process/header.js":
/*!******************************************!*\
  !*** ./src/components/process/header.js ***!
  \******************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var Header = function Header(props) {
  var headingStyle = {
    color: '#4285f4',
    fontWeight: 'bold'
  };
  var header_text = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "Import the ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", {
    style: headingStyle
  }, " ", props.selectedDemo, " "), " demo");

  if (props.currentStep === 2) {
    header_text = 'Select what you want to import:';
  } else if (props.currentStep === 3) {
    header_text = "The import process could take some time, please be patient";
  } else if (props.currentStep === 4) {
    if (props.importStatus) {
      header_text = "Successfully Demo Imported!";
    } else {
      header_text = "Problem during demo import?";
    }
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
    className: "title"
  }, header_text);
};

/***/ }),

/***/ "./src/components/process/overlay.js":
/*!*******************************************!*\
  !*** ./src/components/process/overlay.js ***!
  \*******************************************/
/*! exports provided: Overlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var Overlay = function Overlay(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "qube-tools-demo-popup-overlay"
  });
};

/***/ }),

/***/ "./src/components/process/popup.js":
/*!*****************************************!*\
  !*** ./src/components/process/popup.js ***!
  \*****************************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay */ "./src/components/process/overlay.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ "./src/components/process/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "./src/components/process/footer.js");
/* harmony import */ var _content_plugin_install__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content-plugin-install */ "./src/components/process/content-plugin-install.js");
/* harmony import */ var _content_select_files__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content-select-files */ "./src/components/process/content-select-files.js");
/* harmony import */ var _content_importing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content-importing */ "./src/components/process/content-importing.js");
/* harmony import */ var _content_import_success__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content-import-success */ "./src/components/process/content-import-success.js");
/* harmony import */ var _content_import_failed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content-import-failed */ "./src/components/process/content-import-failed.js");











var useState = wp.element.useState;
var __ = wp.i18n.__;
var Popup = function Popup(_ref) {
  var selectedDemo = _ref.selectedDemo,
      closePopup = _ref.closePopup,
      selectedDemoConfig = _ref.selectedDemoConfig;

  var _useState = useState(1),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      currentContentStep = _useState2[0],
      setCurrentContentStep = _useState2[1];

  var _useState3 = useState(true),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      isXMLDataChecked = _useState4[0],
      _setXMLDataChecked = _useState4[1];

  var _useState5 = useState(true),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      isCustomizerDataChecked = _useState6[0],
      _setCustomizerDataChecked = _useState6[1];

  var _useState7 = useState(true),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      isWidgetDataChecked = _useState8[0],
      _setWidgetDataChecked = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),
      importStatus = _useState10[0],
      setImportStatus = _useState10[1];

  var nextStep = function nextStep() {
    var currentStep = currentContentStep;
    currentStep++;
    setCurrentContentStep(currentStep);

    if (currentContentStep === 2) {}
  };

  var wrap_style = {};

  if (selectedDemo && selectedDemo !== '' && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(selectedDemoConfig) === "object") {
    wrap_style = {
      display: 'block'
    };
  } else {
    wrap_style = {
      display: 'none'
    };
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    id: "qube-tools-demo-popup-wrap",
    style: wrap_style
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "qube-tools-demo-popup-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "qube-tools-demo-popup-content-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "qube-tools-demo-popup-content-inner"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
    className: "qube-tools-demo-popup-close",
    onClick: function onClick() {
      closePopup();
    }
  }, "\xD7"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    id: "qube-tools-demo-popup-content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    selectedDemo: selectedDemo,
    currentStep: currentContentStep,
    importStatus: importStatus
  }), function () {
    switch (currentContentStep) {
      case 1:
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_content_plugin_install__WEBPACK_IMPORTED_MODULE_6__["Content_Plugin_Install"], {
          selectedDemoConfig: selectedDemoConfig
        });

      case 2:
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_content_select_files__WEBPACK_IMPORTED_MODULE_7__["Content_Select_Files"], {
          selectedDemoConfig: selectedDemoConfig,
          selectedDemo: selectedDemo,
          isXMLDataChecked: isXMLDataChecked,
          setXMLDataChecked: function setXMLDataChecked() {
            _setXMLDataChecked();
          },
          isCustomizerDataChecked: isCustomizerDataChecked,
          setCustomizerDataChecked: function setCustomizerDataChecked() {
            _setCustomizerDataChecked();
          },
          isWidgetDataChecked: isWidgetDataChecked,
          setWidgetDataChecked: function setWidgetDataChecked() {
            _setWidgetDataChecked();
          }
        });

      case 3:
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_content_importing__WEBPACK_IMPORTED_MODULE_8__["Content_Importing"], {
          selectedDemoConfig: selectedDemoConfig,
          isXMLDataChecked: isXMLDataChecked,
          isCustomizerDataChecked: isCustomizerDataChecked,
          isWidgetDataChecked: isWidgetDataChecked,
          selectedDemo: selectedDemo
        });

      case 4:
        if (importStatus) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_content_import_success__WEBPACK_IMPORTED_MODULE_9__["Content_Import_Success"], {
            selectedDemoConfig: selectedDemoConfig
          });
        }

        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_content_import_failed__WEBPACK_IMPORTED_MODULE_10__["Content_Import_Failed"], {
          selectedDemoConfig: selectedDemoConfig
        });

      default:
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_content_plugin_install__WEBPACK_IMPORTED_MODULE_6__["Content_Plugin_Install"], {
          selectedDemoConfig: selectedDemoConfig
        });
    }
  }(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_footer__WEBPACK_IMPORTED_MODULE_5__["Footer"], {
    nextStep: nextStep,
    currentStep: currentContentStep
  }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"], null));
};

/***/ }),

/***/ "./src/components/process/required-plugin-items.js":
/*!*********************************************************!*\
  !*** ./src/components/process/required-plugin-items.js ***!
  \*********************************************************/
/*! exports provided: Required_Plugin_Items */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Required_Plugin_Items", function() { return Required_Plugin_Items; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var Required_Plugin_Items = function Required_Plugin_Items(_ref) {
  var plugin = _ref.plugin,
      singlePluginInstallationDetails = _ref.singlePluginInstallationDetails,
      installWordPressPlugin = _ref.installWordPressPlugin;
  var button_label = 'Install Now';
  var disabled = false;
  var tick_icon = '';
  var is_pro = typeof plugin.is_pro !== 'undefined' && plugin.is_pro;

  if (plugin.status === 'INSTALLED') {
    button_label = 'Activate Now';
  } else if (plugin.status === 'ACTIVATED') {
    button_label = 'Activated';
    disabled = "disabled";
    tick_icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "plugin-activated-icon dashicons dashicons-yes-alt"
    });
  }

  if (is_pro && plugin.status === 'NONE') {
    button_label = 'Get This Addon';
  }

  var single_plugin_installation_detail = singlePluginInstallationDetails();
  var ajax_status = typeof single_plugin_installation_detail.ajax_status !== 'undefined' ? single_plugin_installation_detail.ajax_status : '';
  var className = 'button ';

  if (ajax_status === 'INSTALLING') {
    className += 'installing';
    disabled = "disabled";
    button_label = 'Installing....';
  } else if (ajax_status === 'INSTALLED') {
    className += 'installed';
    disabled = "";
    button_label = 'Activate Now';
  } else if (ajax_status === 'ACTIVATING') {
    className += 'installing';
    disabled = "disabled";
    button_label = 'Activating....';
  } else if (ajax_status === 'ACTIVATED') {
    disabled = "disabled";
    className += 'install-now';
    button_label = 'Activated';
    tick_icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "plugin-activated-icon dashicons dashicons-yes-alt"
    });
  } else {
    className += 'install-now';
    button_label = button_label;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'qube-tools-plugin qube-tools-clr qube-tools-plugin-' + plugin.slug
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, tick_icon, plugin.name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: className,
    disabled: disabled,
    onClick: function onClick() {
      installWordPressPlugin(plugin);
    }
  }, button_label));
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
  var demosKeys = Object.keys(props.demos);

  if (demosKeys.length < 1) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Demo not found....");
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "themes wp-clearfix"
  }, demosKeys.map(function (keyName, keyIndex) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_demo_item__WEBPACK_IMPORTED_MODULE_1__["Demo_Item"], {
      slug: keyName,
      args: props.demos[keyName],
      setSelectedDemo: props.setSelectedDemo,
      selectedDemo: props.selectedDemo,
      isAjaxLoading: props.isAjaxLoading
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
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main */ "./src/components/main.js");
/* harmony import */ var _components_process_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/process/popup */ "./src/components/process/popup.js");







var __ = wp.i18n.__;
var _wp$element = wp.element,
    render = _wp$element.render,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _wp = wp,
    apiFetch = _wp.apiFetch;
var _wp$components = wp.components,
    Card = _wp$components.Card,
    CardHeader = _wp$components.CardHeader,
    CardBody = _wp$components.CardBody,
    CardDivider = _wp$components.CardDivider,
    CardFooter = _wp$components.CardFooter;


var DemoImporterPage = function DemoImporterPage() {
  var _useState = useState({}),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      demoList = _useState2[0],
      setDemoList = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      activeTab = _useState4[0],
      setActiveTab = _useState4[1];

  var _useState5 = useState(''),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
      selectedDemo = _useState6[0],
      setSelectedDemo = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState7, 2),
      ajaxLoading = _useState8[0],
      setAjaxLoading = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState9, 2),
      selectedDemoPluginDetails = _useState10[0],
      setSelectedDemoPluginDetails = _useState10[1];

  function getSelectedDemoPluginConfigs(_x) {
    return _getSelectedDemoPluginConfigs.apply(this, arguments);
  }

  function _getSelectedDemoPluginConfigs() {
    _getSelectedDemoPluginConfigs = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee(selected) {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setSelectedDemo(selected);
              setAjaxLoading(true);
              _context.next = 4;
              return apiFetch({
                path: qubeToolsImporterObj.rest.namespace + qubeToolsImporterObj.rest.version + '/get_selected_demo_plugin_config',
                method: 'POST',
                data: {
                  selected_demo: selected
                }
              });

            case 4:
              data = _context.sent;

              if (data) {
                setSelectedDemoPluginDetails(data);
              } else {
                setSelectedDemoPluginDetails(false);
              }

              setAjaxLoading(false);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getSelectedDemoPluginConfigs.apply(this, arguments);
  }

  var tabSelect = function tabSelect(currentTab) {
    setActiveTab(currentTab);
  };

  var getCategoryWiseDemoList = function getCategoryWiseDemoList() {
    var categoryWiseDemoList = {};
    var all_demos = qubeToolsImporterObj.all_demos;

    for (var _i = 0, _Object$entries = Object.entries(all_demos); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_Object$entries[_i], 2),
          demo_item_key = _Object$entries$_i[0],
          demo_configs = _Object$entries$_i[1];

      var categories = typeof demo_configs.categories !== "undefined" ? demo_configs.categories : {};

      for (var _i2 = 0, _Object$entries2 = Object.entries(categories); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_Object$entries2[_i2], 2),
            cat_key = _Object$entries2$_i[0],
            category = _Object$entries2$_i[1];

        if (typeof categoryWiseDemoList[cat_key] == "undefined") {
          categoryWiseDemoList[cat_key] = [];
        }

        categoryWiseDemoList[cat_key].push(demo_item_key);
      }
    }

    return categoryWiseDemoList;
  };

  var initAllDemoLists = function initAllDemoLists(category) {
    var categoryWiseDemoIndexList = getCategoryWiseDemoList();
    var all_demos = qubeToolsImporterObj.all_demos;
    var categoryWiseFullDemoDataLists = {};

    if (categoryWiseDemoIndexList === '') {
      setDemoList({});
      return;
    }

    categoryWiseDemoIndexList[category].map(function (demo_item_key) {
      return categoryWiseFullDemoDataLists[demo_item_key] = all_demos[demo_item_key];
    });
    setDemoList(categoryWiseFullDemoDataLists);
  };

  var closePopup = function closePopup() {
    setSelectedDemo('');
    setSelectedDemoPluginDetails(false);
  };

  useEffect(function () {
    var active_tab = activeTab === '' ? 'elementor' : activeTab;
    initAllDemoLists(active_tab);
  }, [activeTab]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("h1", {
    className: "screen-reader-text"
  }, __('Theme Demo Import', 'qube-tools')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Card, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(CardHeader, {
    style: {
      overflow: 'hidden',
      height: '70px'
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("h2", null, __('Theme Demo Import', 'qube-tools'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(CardBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "theme-browser rendered"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_components_main__WEBPACK_IMPORTED_MODULE_6__["Main"], {
    demos: demoList,
    tabSelect: tabSelect,
    selectedDemo: selectedDemo,
    setSelectedDemo: function setSelectedDemo(selected) {
      return getSelectedDemoPluginConfigs(selected);
    },
    isAjaxLoading: ajaxLoading
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(CardDivider, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(CardFooter, null, console.log(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(selectedDemoPluginDetails)), _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(selectedDemoPluginDetails) === "object" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_components_process_popup__WEBPACK_IMPORTED_MODULE_7__["Popup"], {
    selectedDemo: selectedDemo,
    closePopup: closePopup,
    selectedDemoConfig: selectedDemoPluginDetails
  }) : '')));
};

document.addEventListener('DOMContentLoaded', function () {
  if ('undefined' !== typeof document.getElementById(qubeToolsImporterObj.root_id) && null !== document.getElementById(qubeToolsImporterObj.root_id)) {
    render(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(DemoImporterPage, null), document.getElementById(qubeToolsImporterObj.root_id));
  }
});

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