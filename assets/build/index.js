/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/demo-item.js":
/*!*************************************!*\
  !*** ./src/components/demo-item.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Demo_Item": function() { return /* binding */ Demo_Item; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const {
  useState
} = wp.element;
const Demo_Item = props => {
  const [importerLoader, setImporterLoader] = useState(1);

  const getSelectedDemoPluginDetails = demo => {
    console.log(demo);
  };

  let loaderCss = {};

  if (props.selectedDemo !== '' && props.slug === props.selectedDemo && props.isAjaxLoading) {
    loaderCss = {
      display: 'block'
    };
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "theme-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "theme qube-tools-open-popup",
    "data-demo-id": "main"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "theme-screenshot"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: props.args.screenshot
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "select-theme",
    onClick: () => {
      props.setSelectedDemo(props.slug);
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Select ", props.args.title, " demo")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "demo-import-loader preview-all preview-all-main",
    style: loaderCss
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "demo-import-loader preview-icon preview-main",
    style: loaderCss
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "custom-loader"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "theme-id-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "theme-name",
    id: "main"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, props.args.title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "theme-actions"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetTab": function() { return /* binding */ GetTab; },
/* harmony export */   "Main": function() { return /* binding */ Main; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tab_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-content */ "./src/components/tab-content.js");


const {
  TabPanel
} = wp.components;
const {
  __
} = wp.i18n;
const GetTab = () => {
  let all_tabs = qubeToolsImporterObj.demo_categories;
  let updated_all_tabs = [];

  for (const [key, title] of Object.entries(all_tabs)) {
    updated_all_tabs.push({
      name: key,
      title: title,
      className: key
    });
  }

  return updated_all_tabs;
};
const Main = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TabPanel, {
    className: "qube-tools-header-bar",
    activeClass: "qube-tools-tab-active",
    tabs: GetTab(),
    onSelect: selectedTab => {
      props.tabSelect(selectedTab);
    },
    initialTabName: "elementor"
  }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tab_content__WEBPACK_IMPORTED_MODULE_1__.Tab_Content, {
    tab: tab,
    demos: props.demos,
    setSelectedDemo: props.setSelectedDemo,
    selectedDemo: props.selectedDemo,
    isAjaxLoading: props.isAjaxLoading
  }));
};

/***/ }),

/***/ "./src/components/process/content-import-failed.js":
/*!*********************************************************!*\
  !*** ./src/components/process/content-import-failed.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Content_Import_Failed": function() { return /* binding */ Content_Import_Failed; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const {
  useState
} = wp.element;
const {
  apiFetch
} = wp;
const Content_Import_Failed = props => {
  const [importFeedbackText, setImportFeedbackText] = useState('');
  const [errorMessageSendingStatus, setErrorMessageSendingStatus] = useState('');

  const importFeedbackTextChanged = val => {
    setImportFeedbackText(val);
  };

  async function handleSendMessageClicked() {
    setErrorMessageSendingStatus('sending');
    let formData = new FormData();
    formData.append('action', qubeToolsImporterObj.import_feedback_action);
    formData.append('selected_demo', props.selectedDemo);
    formData.append('qube_tools_nonce', qubeToolsImporterObj.import_feedback_nonce);
    formData.append('feedback_text', importFeedbackText);
    formData.append('error_message', "Error Message");
    apiFetch({
      url: qubeToolsImporterObj.ajax_url,
      method: 'POST',
      credentials: 'same-origin',
      body: formData
    }).then(function (response) {
      var is_success = typeof response.success !== "undefined" ? response.success : false;

      if (is_success) {
        setErrorMessageSendingStatus('finish');
      } else {
        setErrorMessageSendingStatus('error');
      }
    }).catch(function (err) {
      setErrorMessageSendingStatus('error');
    });
  }

  var disableStatus = errorMessageSendingStatus === 'sending';
  var sendButtonText = "Send Message";

  switch (errorMessageSendingStatus) {
    case "sending":
      sendButtonText = __("Sending.....", 'qube-tools');
      break;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "qube-tools-demo-failed-feedback-form"
  }, (() => {
    if (errorMessageSendingStatus === "finish") {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
        style: {
          margin: "100px 0",
          textTransform: "uppercase"
        }
      }, __('Thank you for the message. We will get back to you soon', 'qube-tools'));
    } else if (errorMessageSendingStatus === "error") {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
        style: {
          margin: "100px 0"
        }
      }, __('Something goes wrong. Please email your problem at qubethemes@gmail.com', 'qube-tools'));
    } else {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, __('You can submit the problem from here', 'qube-tools')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
        className: "feedback",
        name: "feedback",
        placeholder: __('Leave us your message. We will help you to import demo data', 'qube-tools'),
        onChange: event => {
          importFeedbackTextChanged(event.target.value);
        },
        disabled: disableStatus
      }, errorMessageSendingStatus)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __('Clicking on send button will send your message, admin email, website url, selected demo name, php and wordpress version', 'qube-tools')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        type: "button",
        name: "qube_tools_demo_failed_send",
        className: "button button-secondary",
        onClick: () => {
          if (errorMessageSendingStatus === '') {
            handleSendMessageClicked();
          }
        },
        style: {
          margin: "20px 0"
        }
      }, sendButtonText));
    }
  })());
};

/***/ }),

/***/ "./src/components/process/content-import-success.js":
/*!**********************************************************!*\
  !*** ./src/components/process/content-import-success.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Content_Import_Success": function() { return /* binding */ Content_Import_Success; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const Content_Import_Success = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "qube-tools-import-success"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    style: {
      fontSize: '45px',
      textAlign: 'center'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    draggable: "false",
    role: "img",
    className: "emoji",
    alt: "\uD83C\uDF89",
    src: "https://s.w.org/images/core/emoji/13.1.0/svg/1f389.svg"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    draggable: "false",
    role: "img",
    className: "emoji",
    alt: "\uD83C\uDF89",
    src: "https://s.w.org/images/core/emoji/13.1.0/svg/1f389.svg"
  }), __('Congratulations', 'qube-tools'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    draggable: "false",
    role: "img",
    className: "emoji",
    alt: "\uD83C\uDF89",
    src: "https://s.w.org/images/core/emoji/13.1.0/svg/1f389.svg"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    draggable: "false",
    role: "img",
    className: "emoji",
    alt: "\uD83C\uDF89",
    src: "https://s.w.org/images/core/emoji/13.1.0/svg/1f389.svg"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    style: {
      textAlign: 'center',
      marginBottom: '50px'
    }
  }, __('Successfully Demo Imported!', 'qube-tools')));
};

/***/ }),

/***/ "./src/components/process/content-importing.js":
/*!*****************************************************!*\
  !*** ./src/components/process/content-importing.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Content_Importing": function() { return /* binding */ Content_Importing; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const {
  useState,
  useEffect
} = wp.element;
const {
  apiFetch
} = wp;
const Content_Importing = props => {
  const [importQueue, setImportQueue] = useState(getImportQueue());
  const [importStatus, setImportStatus] = useState({
    xml: '',
    customizer: '',
    widget: ''
  });
  const [ajaxImportStatus, setAjaxImportStatus] = useState();
  const [importMessages, setImportMessages] = useState({
    xml: {
      importing: __('Importing XML Data', 'qube-tools'),
      imported: __('XML Data Successfully imported', 'qube-tools'),
      failed: __('Failed to import xml data', 'qube-tools')
    },
    widget: {
      importing: __('Importing Widget Data', 'qube-tools'),
      imported: __('Widget Data Successfully imported', 'qube-tools'),
      failed: __('Failed to import widget data', 'qube-tools')
    },
    customizer: {
      importing: __('Importing Customizer Data', 'qube-tools'),
      imported: __('Customizer Data Successfully imported', 'qube-tools'),
      failed: __('Failed to import customizer data', 'qube-tools')
    }
  });
  const [importNonce, setImportNonce] = useState({
    xml: qubeToolsImporterObj.xml_import_nonce,
    widget: qubeToolsImporterObj.widget_import_nonce,
    customizer: qubeToolsImporterObj.customizer_import_nonce
  });

  function getImportQueue() {
    let importType = [];

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

  async function importSelected(queue) {
    var _importNonce$import_f;

    var newImportQueue = queue.slice(0);
    var import_file = newImportQueue[0];
    newImportQueue.splice(0, 1);
    let importingStatus = Object.assign({}, importStatus); // creating copy of state variable

    importingStatus[import_file] = 'IMPORTING';
    setImportStatus(importingStatus);
    let nonce = (_importNonce$import_f = importNonce[import_file]) !== null && _importNonce$import_f !== void 0 ? _importNonce$import_f : '';
    let formData = new FormData();
    formData.append('action', qubeToolsImporterObj.import_action);
    formData.append('selected_demo', props.selectedDemo);
    formData.append('import_file', import_file);
    formData.append('qube_tools_nonce', nonce);

    for (var importStatusKey in importStatus) {
      formData.append('import_status[' + importStatusKey + ']', importStatus[importStatusKey]);
    }

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
  }

  useEffect(() => {
    if (importQueue.length > 0) {
      importSelected(importQueue);
    }
  }, [importQueue]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "qube-tools-importing-notice"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "qube-tools-import-status qube-tools-popup-text"
  }, props.updateImportCount(importStatus), Object.keys(importStatus).map(function (key) {
    if (importStatus[key] !== '') {
      var _importMessages$key$i;

      var importStatusValue = importStatus[key].toLowerCase();
      var importMessage = (_importMessages$key$i = importMessages[key][importStatusValue]) !== null && _importMessages$key$i !== void 0 ? _importMessages$key$i : __('Something Wrong, please try again', 'qube-tools');
      var className = '';

      if (importStatus[key] === 'IMPORTING') {
        className = 'qube-tools-importing';
      } else if (importStatus[key] === 'IMPORTED') {
        className = 'qube-tools-imported';
      } else {
        className = 'qube-tools-importing-failed';
      }

      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Content_Plugin_Install": function() { return /* binding */ Content_Plugin_Install; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _required_plugin_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./required-plugin-items */ "./src/components/process/required-plugin-items.js");


const {
  __
} = wp.i18n;
const {
  useState
} = wp.element;
const {
  apiFetch
} = wp;
const Content_Plugin_Install = props => {
  const selectedDemoConfig = typeof props.selectedDemoConfig !== "undefined" ? props.selectedDemoConfig : {};
  const requiredPlugins = typeof selectedDemoConfig.required_plugins !== "undefined" ? selectedDemoConfig.required_plugins : {};
  const [pluginInstallationDetails, setPluginInstallationDetails] = useState(requiredPlugins);

  const getPluginInstallationDetails = plugin => {
    var pluginDetails = {};
    pluginInstallationDetails.map(plugin_item => {
      if (plugin.slug === plugin_item.slug) {
        pluginDetails = plugin_item;
      }
    });
    return pluginDetails;
  };

  const updateSinglePluginData = (plugin, ajax_response = false) => {
    var plugin_details = pluginInstallationDetails.map(plugin_item => {
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
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function installWordPressPlugin(plugin) {
    let is_pro = typeof plugin.is_pro === "undefined" ? false : true;

    if (is_pro) {
      let url = typeof plugin.url === "undefined" ? '' : plugin.url;

      if (url === '') {
        return;
      }

      var win = window.open(url, '_blank');
      win.focus();
      return;
    }

    updateSinglePluginData(plugin);
    let data = await apiFetch({
      path: qubeToolsImporterObj.rest.namespace + qubeToolsImporterObj.rest.version + '/action_for_plugin',
      method: 'POST',
      data: {
        plugin: plugin
      }
    });

    if (data) {
      updateSinglePluginData(data, true);
    } //setAjaxLoading(false);

  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "qube-tools-popup-text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Qube tools help you browse and import ready made websites with few clicks. We recommend you to upload sample data on a fresh WordPress install to prevent conflicts with your current content. You can use this plugin to reset your site if needed: ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://staging.mantrabrain.com/wp-admin/plugin-install.php?s=Wordpress+Database+Reset&tab=search",
    target: "_blank"
  }, "Wordpress Database Reset"), "."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "qube-tools-required-plugins-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Recommended Plugins"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "For your site to look exactly like this demo, the plugins below need to be activated."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "qube-tools-required-plugins qube-tools-plugin-installer"
  }, pluginInstallationDetails.map(plugin => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_required_plugin_items__WEBPACK_IMPORTED_MODULE_1__.Required_Plugin_Items, {
      plugin: plugin,
      singlePluginInstallationDetails: () => {
        return getPluginInstallationDetails(plugin);
      },
      installWordPressPlugin: plugin => {
        installWordPressPlugin(plugin);
      }
    });
  }), ";")));
};

/***/ }),

/***/ "./src/components/process/content-select-files.js":
/*!********************************************************!*\
  !*** ./src/components/process/content-select-files.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Content_Select_Files": function() { return /* binding */ Content_Select_Files; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const {
  CheckboxControl
} = wp.components;
const {
  useState
} = wp.element;
const Content_Select_Files = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    method: "post",
    id: "qube-tools-demo-import-form"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: "qube_tools_import_demo",
    type: "hidden",
    name: "qube_tools_import_demo",
    value: "main"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "qube-tools-demo-import-form-types"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "qube-tools-popup-text qube-tools-import-file-list"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
    label: "Import XML Data(pages, posts, images, menus, etc...)",
    checked: props.isXMLDataChecked,
    onChange: props.setXMLDataChecked
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
    label: "Import Customizer Settings",
    checked: props.isCustomizerDataChecked,
    onChange: props.setCustomizerDataChecked
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
    label: "Import Widgets",
    checked: props.isWidgetDataChecked,
    onChange: props.setWidgetDataChecked
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    id: "qube_tools_import_demo_data_nonce",
    name: "qube_tools_import_demo_data_nonce",
    value: "ab01363357"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const Footer = props => {
  let footer_text = 'Next';

  if (props.currentStep === 2) {
    footer_text = 'Import Selected Demos';
  } else if (props.currentStep === 4) {
    footer_text = 'Visit Your Site';
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "qube-tools-button qube-tools-plugins-next",
    onClick: () => {
      if (props.currentStep === 4) {
        window.open(qubeToolsImporterObj.site_url, '_blank');
        return false;
      }

      if (props.currentStep < 3) {
        props.nextStep(props.currentContentStep);
      }

      return false;
    }
  }, footer_text);
};

/***/ }),

/***/ "./src/components/process/header.js":
/*!******************************************!*\
  !*** ./src/components/process/header.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const Header = props => {
  const headingStyle = {
    color: '#4285f4',
    fontWeight: 'bold'
  };
  let header_text = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "Import the ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", {
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

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "title"
  }, header_text);
};

/***/ }),

/***/ "./src/components/process/overlay.js":
/*!*******************************************!*\
  !*** ./src/components/process/overlay.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Overlay": function() { return /* binding */ Overlay; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const Overlay = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "qube-tools-demo-popup-overlay"
  });
};

/***/ }),

/***/ "./src/components/process/popup.js":
/*!*****************************************!*\
  !*** ./src/components/process/popup.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popup": function() { return /* binding */ Popup; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overlay */ "./src/components/process/overlay.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/components/process/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/components/process/footer.js");
/* harmony import */ var _content_plugin_install__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-plugin-install */ "./src/components/process/content-plugin-install.js");
/* harmony import */ var _content_select_files__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-select-files */ "./src/components/process/content-select-files.js");
/* harmony import */ var _content_importing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content-importing */ "./src/components/process/content-importing.js");
/* harmony import */ var _content_import_success__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content-import-success */ "./src/components/process/content-import-success.js");
/* harmony import */ var _content_import_failed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content-import-failed */ "./src/components/process/content-import-failed.js");









const {
  useState
} = wp.element;
const {
  __
} = wp.i18n;
const Popup = ({
  selectedDemo,
  closePopup,
  selectedDemoConfig
}) => {
  const [currentContentStep, setCurrentContentStep] = useState(1);
  const [isXMLDataChecked, setXMLDataChecked] = useState(true);
  const [isCustomizerDataChecked, setCustomizerDataChecked] = useState(true);
  const [isWidgetDataChecked, setWidgetDataChecked] = useState(true);
  const [importStatus, setImportStatus] = useState(false);

  const nextStep = () => {
    let currentStep = currentContentStep;
    currentStep++;
    setCurrentContentStep(currentStep);
  };

  const updateImportCount = updatedImportStatus => {
    console.log(JSON.stringify(updatedImportStatus));
    var totalUpdatedImportedStatusLength = Object.keys(updatedImportStatus).length;
    var totalUpdateCount = 0;
    var totalProcessCount = 0;
    Object.keys(updatedImportStatus).map(function (key) {
      if (updatedImportStatus[key] !== '') {
        totalProcessCount++;

        if (updatedImportStatus[key] === 'IMPORTED') {
          totalUpdateCount++;
        }
      }
    });

    if (totalProcessCount === totalUpdatedImportedStatusLength) {
      if (totalUpdatedImportedStatusLength === totalUpdateCount) {
        setImportStatus(true);
      } else {
        setImportStatus(false);
      }

      setTimeout(function () {
        nextStep();
      }, 3000);
    }
  };

  let wrap_style = {};

  if (selectedDemo && selectedDemo !== '' && typeof selectedDemoConfig === "object") {
    wrap_style = {
      display: 'block'
    };
  } else {
    wrap_style = {
      display: 'none'
    };
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "qube-tools-demo-popup-wrap",
    style: wrap_style
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "qube-tools-demo-popup-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "qube-tools-demo-popup-content-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "qube-tools-demo-popup-content-inner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "qube-tools-demo-popup-close",
    onClick: () => {
      closePopup();
    }
  }, "\xD7"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "qube-tools-demo-popup-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_header__WEBPACK_IMPORTED_MODULE_2__.Header, {
    selectedDemo: selectedDemo,
    currentStep: currentContentStep,
    importStatus: importStatus
  }), (() => {
    switch (currentContentStep) {
      case 1:
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_plugin_install__WEBPACK_IMPORTED_MODULE_4__.Content_Plugin_Install, {
          selectedDemoConfig: selectedDemoConfig
        });

      case 2:
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_select_files__WEBPACK_IMPORTED_MODULE_5__.Content_Select_Files, {
          selectedDemoConfig: selectedDemoConfig,
          selectedDemo: selectedDemo,
          isXMLDataChecked: isXMLDataChecked,
          setXMLDataChecked: () => {
            setXMLDataChecked();
          },
          isCustomizerDataChecked: isCustomizerDataChecked,
          setCustomizerDataChecked: () => {
            setCustomizerDataChecked();
          },
          isWidgetDataChecked: isWidgetDataChecked,
          setWidgetDataChecked: () => {
            setWidgetDataChecked();
          }
        });

      case 3:
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_importing__WEBPACK_IMPORTED_MODULE_6__.Content_Importing, {
          selectedDemoConfig: selectedDemoConfig,
          isXMLDataChecked: isXMLDataChecked,
          isCustomizerDataChecked: isCustomizerDataChecked,
          isWidgetDataChecked: isWidgetDataChecked,
          selectedDemo: selectedDemo,
          updateImportCount: updatedImportStatus => {
            updateImportCount(updatedImportStatus);
          }
        });

      case 4:
        if (importStatus) {
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_import_success__WEBPACK_IMPORTED_MODULE_7__.Content_Import_Success, {
            selectedDemoConfig: selectedDemoConfig
          });
        }

        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_import_failed__WEBPACK_IMPORTED_MODULE_8__.Content_Import_Failed, {
          selectedDemoConfig: selectedDemoConfig,
          selectedDemo: selectedDemo
        });

      default:
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_plugin_install__WEBPACK_IMPORTED_MODULE_4__.Content_Plugin_Install, {
          selectedDemoConfig: selectedDemoConfig
        });
    }
  })(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_footer__WEBPACK_IMPORTED_MODULE_3__.Footer, {
    nextStep: nextStep,
    currentStep: currentContentStep
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_overlay__WEBPACK_IMPORTED_MODULE_1__.Overlay, null));
};

/***/ }),

/***/ "./src/components/process/required-plugin-items.js":
/*!*********************************************************!*\
  !*** ./src/components/process/required-plugin-items.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Required_Plugin_Items": function() { return /* binding */ Required_Plugin_Items; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const Required_Plugin_Items = ({
  plugin,
  singlePluginInstallationDetails,
  installWordPressPlugin
}) => {
  let button_label = 'Install Now';
  let disabled = false;
  let tick_icon = '';
  let is_pro = typeof plugin.is_pro !== 'undefined' && plugin.is_pro;

  if (plugin.status === 'INSTALLED') {
    button_label = 'Activate Now';
  } else if (plugin.status === 'ACTIVATED') {
    button_label = 'Activated';
    disabled = "disabled";
    tick_icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "plugin-activated-icon dashicons dashicons-yes-alt"
    });
  }

  if (is_pro && plugin.status === 'NONE') {
    button_label = 'Get This Addon';
  }

  let single_plugin_installation_detail = singlePluginInstallationDetails();
  var ajax_status = typeof single_plugin_installation_detail.ajax_status !== 'undefined' ? single_plugin_installation_detail.ajax_status : '';
  let className = 'button ';

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
    tick_icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "plugin-activated-icon dashicons dashicons-yes-alt"
    });
  } else {
    className += 'install-now';
    button_label = button_label;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'qube-tools-plugin qube-tools-clr qube-tools-plugin-' + plugin.slug
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, tick_icon, plugin.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: className,
    disabled: disabled,
    onClick: () => {
      installWordPressPlugin(plugin);
    }
  }, button_label));
};

/***/ }),

/***/ "./src/components/tab-content.js":
/*!***************************************!*\
  !*** ./src/components/tab-content.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab_Content": function() { return /* binding */ Tab_Content; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _demo_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo-item */ "./src/components/demo-item.js");


const {
  __
} = wp.i18n;
const Tab_Content = props => {
  const demosKeys = Object.keys(props.demos);

  if (demosKeys.length < 1) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __('Demo not found....', 'qube-tools'));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "themes wp-clearfix"
  }, demosKeys.map(function (keyName, keyIndex) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_demo_item__WEBPACK_IMPORTED_MODULE_1__.Demo_Item, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main */ "./src/components/main.js");
/* harmony import */ var _components_process_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/process/popup */ "./src/components/process/popup.js");



const {
  __
} = wp.i18n;
const {
  render,
  useState,
  useEffect
} = wp.element;
const {
  apiFetch
} = wp;
const {
  Card,
  CardHeader,
  CardBody,
  CardDivider,
  CardFooter
} = wp.components;


const DemoImporterPage = () => {
  const [demoList, setDemoList] = useState({});
  const [activeTab, setActiveTab] = useState('');
  const [selectedDemo, setSelectedDemo] = useState('');
  const [ajaxLoading, setAjaxLoading] = useState(false);
  const [selectedDemoPluginDetails, setSelectedDemoPluginDetails] = useState(false);

  async function getSelectedDemoPluginConfigs(selected) {
    setSelectedDemo(selected);
    setAjaxLoading(true);
    let data = await apiFetch({
      path: qubeToolsImporterObj.rest.namespace + qubeToolsImporterObj.rest.version + '/get_selected_demo_plugin_config',
      method: 'POST',
      data: {
        selected_demo: selected
      }
    });

    if (data) {
      setSelectedDemoPluginDetails(data);
    } else {
      setSelectedDemoPluginDetails(false);
    }

    setAjaxLoading(false);
  }

  const tabSelect = currentTab => {
    setActiveTab(currentTab);
  };

  const getCategoryWiseDemoList = () => {
    var categoryWiseDemoList = {};
    var all_demos = qubeToolsImporterObj.all_demos;

    for (const [demo_item_key, demo_configs] of Object.entries(all_demos)) {
      var categories = typeof demo_configs.categories !== "undefined" ? demo_configs.categories : {};

      for (const [cat_key, category] of Object.entries(categories)) {
        if (typeof categoryWiseDemoList[cat_key] == "undefined") {
          categoryWiseDemoList[cat_key] = [];
        }

        categoryWiseDemoList[cat_key].push(demo_item_key);
      }
    }

    return categoryWiseDemoList;
  };

  const initAllDemoLists = category => {
    var categoryWiseDemoIndexList = getCategoryWiseDemoList();
    var all_demos = qubeToolsImporterObj.all_demos;
    var categoryWiseFullDemoDataLists = {};

    if (categoryWiseDemoIndexList === '') {
      setDemoList({});
      return;
    }

    categoryWiseDemoIndexList[category].map(demo_item_key => categoryWiseFullDemoDataLists[demo_item_key] = all_demos[demo_item_key]);
    setDemoList(categoryWiseFullDemoDataLists);
  };

  const closePopup = () => {
    setSelectedDemo('');
    setSelectedDemoPluginDetails(false);
  };

  useEffect(() => {
    var active_tab = activeTab === '' ? 'elementor' : activeTab;
    initAllDemoLists(active_tab);
  }, [activeTab]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "screen-reader-text"
  }, __('Theme Demo Import', 'qube-tools')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Card, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardHeader, {
    style: {
      overflow: 'hidden',
      height: '70px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, __('Theme Demo Import', 'qube-tools'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "theme-browser rendered"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_main__WEBPACK_IMPORTED_MODULE_2__.Main, {
    demos: demoList,
    tabSelect: tabSelect,
    selectedDemo: selectedDemo,
    setSelectedDemo: selected => {
      return getSelectedDemoPluginConfigs(selected);
    },
    isAjaxLoading: ajaxLoading
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardDivider, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardFooter, null, console.log(typeof selectedDemoPluginDetails), typeof selectedDemoPluginDetails === "object" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_process_popup__WEBPACK_IMPORTED_MODULE_3__.Popup, {
    selectedDemo: selectedDemo,
    closePopup: closePopup,
    selectedDemoConfig: selectedDemoPluginDetails
  }) : '')));
};

document.addEventListener('DOMContentLoaded', () => {
  if ('undefined' !== typeof document.getElementById(qubeToolsImporterObj.root_id) && null !== document.getElementById(qubeToolsImporterObj.root_id)) {
    render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DemoImporterPage, null), document.getElementById(qubeToolsImporterObj.root_id));
  }
});

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"style-index": 0
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
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkqube_tools"] = self["webpackChunkqube_tools"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map