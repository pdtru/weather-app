/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  font-family: 'Poppins', sans-serif;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(234, 234, 234, 255);\r\n}\r\n\r\n.main-container {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 40px 0 20px 0;\r\n  height: 100%;\r\n  width: calc(100% - 75px);\r\n  border-radius: 24px;\r\n  background: rgba(250, 250, 250, 255);\r\n}\r\n\r\n.header-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 42px;\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  margin-top: 32px;\r\n  color: rgba(65, 65, 65, 255);\r\n}\r\n\r\n.location-input {\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  padding: 6px;\r\n  border-style: none;\r\n  color: rgba(65, 65, 65, 255);\r\n  background: rgba(250, 250, 250, 255);\r\n}\r\n\r\n.location-input:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.unit-toggle-button-container {\r\n  display: flex;\r\n  gap: 12px;\r\n}\r\n\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 34px;\r\n}\r\n\r\n.switch input {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  border-radius: 34px;\r\n  background-color: #ccc;\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: '';\r\n  height: 26px;\r\n  width: 26px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  border-radius: 50%;\r\n  background-color: white;\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: #2196f3;\r\n}\r\n\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px #2196f3;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(26px);\r\n  -ms-transform: translateX(26px);\r\n  transform: translateX(26px);\r\n}\r\n\r\n.content-container {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.temperature-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0;\r\n  gap: 32px;\r\n}\r\n\r\n.temperature {\r\n  font-size: 12rem;\r\n  font-weight: 600;\r\n  color: rgba(105, 105, 105, 255);\r\n}\r\n\r\n.forecast {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n  color: rgba(105, 105, 105, 255);\r\n}\r\n\r\n.condition-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 16px;\r\n}\r\n\r\n.condition {\r\n  font-size: 4rem;\r\n  color: rgba(105, 105, 105, 255);\r\n}\r\n\r\n.condition-icon {\r\n  height: 4rem;\r\n  width: 4rem;\r\n}\r\n\r\n.last-updated-container {\r\n  margin: 16px;\r\n}\r\n\r\n.last-updated {\r\n  font-size: 14px;\r\n  color: rgba(105, 105, 105, 255);\r\n}\r\n\r\n.link-back {\r\n  position: absolute;\r\n  right: 80;\r\n  bottom: 80;\r\n}\r\n\r\n.link-back-img {\r\n  border: 0;\r\n}\r\n\r\n.footer-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  margin-top: 4px;\r\n  color: rgba(105, 105, 105, 255);\r\n}\r\n\r\n.fa-github {\r\n  font-size: 20px;\r\n  color: #6e5494;\r\n}\r\n\r\n.fa-github:hover {\r\n  color: #8a77a5;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/App.ts":
/*!*******************************!*\
  !*** ./src/components/App.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ \"./src/components/Footer.ts\");\n/* harmony import */ var _MainContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainContainer */ \"./src/components/MainContainer.ts\");\n\n\nvar App = /** @class */ (function () {\n    function App() {\n        this.render = function () {\n            document.body.innerHTML = '';\n            document.body.append(new _MainContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().render(), new _Footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().render());\n        };\n    }\n    return App;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://weather-app/./src/components/App.ts?");

/***/ }),

/***/ "./src/components/Content.ts":
/*!***********************************!*\
  !*** ./src/components/Content.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _stores_AppState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stores/AppState */ \"./src/stores/AppState.ts\");\n\nvar Content = /** @class */ (function () {\n    function Content() {\n        this.render = function () {\n            var _a, _b, _c, _d, _e, _f, _g;\n            var container = document.createElement('div');\n            container.className = 'content-container';\n            var temperatureContainer = document.createElement('div');\n            temperatureContainer.className = 'temperature-container';\n            var temperature = document.createElement('div');\n            temperature.className = 'temperature';\n            if (_stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].current) {\n                temperature.innerText =\n                    (_stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isCelsius\n                        ? _stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].current.temp_c.toString()\n                        : _stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].current.temp_f.toString()) + '°';\n            }\n            else {\n                temperature.innerText = '--';\n            }\n            var forecast = document.createElement('div');\n            forecast.className = 'forecast';\n            var high = document.createElement('div');\n            var low = document.createElement('div');\n            if (_stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].current) {\n                high.innerText =\n                    (_stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isCelsius\n                        ? 'High: ' +\n                            ((_a = _stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forecast) === null || _a === void 0 ? void 0 : _a.forecastday[0].day.maxtemp_c.toString())\n                        : 'High: ' +\n                            ((_b = _stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forecast) === null || _b === void 0 ? void 0 : _b.forecastday[0].day.maxtemp_f.toString())) + '°';\n                low.innerText =\n                    (_stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isCelsius\n                        ? 'Low: ' + ((_c = _stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forecast) === null || _c === void 0 ? void 0 : _c.forecastday[0].day.mintemp_c.toString())\n                        : 'Low: ' +\n                            ((_d = _stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forecast) === null || _d === void 0 ? void 0 : _d.forecastday[0].day.mintemp_f.toString())) + '°';\n            }\n            else {\n                high.innerText = '--';\n                low.innerText = '--';\n            }\n            forecast.append(high, low);\n            temperatureContainer.append(temperature, forecast);\n            var conditionContainer = document.createElement('div');\n            conditionContainer.className = 'condition-container';\n            var condition = document.createElement('div');\n            condition.className = 'condition';\n            condition.innerText = ((_e = _stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].current) === null || _e === void 0 ? void 0 : _e.condition.text)\n                ? _stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].current.condition.text\n                : '--';\n            var conditionIcon = document.createElement('img');\n            conditionIcon.src = (_f = _stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].current) === null || _f === void 0 ? void 0 : _f.condition.icon;\n            conditionIcon.className = 'condition-icon';\n            conditionContainer.append(condition, conditionIcon);\n            var lastUpdatedContainer = document.createElement('div');\n            lastUpdatedContainer.className = 'last-updated-container';\n            var lastUpdated = document.createElement('p');\n            lastUpdated.className = 'last-updated';\n            lastUpdated.innerText = ((_g = _stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].current) === null || _g === void 0 ? void 0 : _g.last_updated)\n                ? 'Last updated: ' + _stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].current.last_updated\n                : '--';\n            var linkBack = document.createElement('a');\n            linkBack.className = 'link-back';\n            linkBack.href = 'https://www.weatherapi.com/';\n            linkBack.title = 'Free Weather API';\n            var linkBackImg = document.createElement('img');\n            linkBackImg.className = 'link-back-img';\n            linkBackImg.src =  true\n                ? '//cdn.weatherapi.com/v4/images/weatherapi_logo.png'\n                : 0;\n            linkBackImg.alt = 'Weather data by WeatherAPI.com';\n            linkBack.append(linkBackImg);\n            lastUpdatedContainer.append(lastUpdated);\n            container.append(temperatureContainer, conditionContainer, lastUpdatedContainer, linkBack);\n            return container;\n        };\n    }\n    return Content;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);\n\n\n//# sourceURL=webpack://weather-app/./src/components/Content.ts?");

/***/ }),

/***/ "./src/components/Footer.ts":
/*!**********************************!*\
  !*** ./src/components/Footer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Footer = /** @class */ (function () {\n    function Footer() {\n        this.render = function () {\n            var container = document.createElement('div');\n            container.className = 'footer-container';\n            var footer = document.createElement('p');\n            footer.className = 'footer';\n            footer.innerHTML = 'Copyright © 2023 pdtru&nbsp';\n            container.appendChild(footer);\n            var github = document.createElement('a');\n            github.href = 'https://github.com/pdtru';\n            footer.appendChild(github);\n            var githubIcon = document.createElement('i');\n            githubIcon.className = 'fa-brands fa-github';\n            github.appendChild(githubIcon);\n            return container;\n        };\n    }\n    return Footer;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n\n//# sourceURL=webpack://weather-app/./src/components/Footer.ts?");

/***/ }),

/***/ "./src/components/Header.ts":
/*!**********************************!*\
  !*** ./src/components/Header.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _stores_AppState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stores/AppState */ \"./src/stores/AppState.ts\");\n/* harmony import */ var _services_WeatherApiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/WeatherApiService */ \"./src/services/WeatherApiService.ts\");\n\n\nvar Header = /** @class */ (function () {\n    function Header() {\n        var _this = this;\n        this.currentDate = new Date();\n        this.locationInput = document.createElement('input');\n        this.render = function () {\n            var _a, _b;\n            var container = document.createElement('div');\n            container.className = 'header-container';\n            _this.locationInput.className = 'location-input';\n            _this.locationInput.value = (_b = (_a = _stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].location) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '--';\n            _this.locationInput.addEventListener('click', _this.locationOnClick);\n            _this.locationInput.addEventListener('blur', _this.locationOnBlur);\n            var date = document.createElement('div');\n            date.className = 'date';\n            date.innerText = _this.currentDate.toJSON().slice(0, 10);\n            var unitToggleButtonConatiner = document.createElement('div');\n            unitToggleButtonConatiner.className = 'unit-toggle-button-container';\n            var unitToggleButton = document.createElement('label');\n            unitToggleButton.className = 'switch';\n            var checkbox = document.createElement('input');\n            checkbox.type = 'checkbox';\n            checkbox.checked = !_stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isCelsius;\n            var slider = document.createElement('div');\n            slider.className = 'slider';\n            slider.onclick = _this.buttonOnClick;\n            var unit = document.createElement('p');\n            unit.innerText = '°' + (_stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isCelsius ? 'C' : 'F');\n            unitToggleButton.append(checkbox, slider);\n            unitToggleButtonConatiner.append(unitToggleButton, unit);\n            container.append(_this.locationInput, date, unitToggleButtonConatiner);\n            return container;\n        };\n        this.locationOnClick = function () {\n            _this.locationInput.value = '';\n        };\n        this.locationOnBlur = function () {\n            var _a, _b;\n            _this.locationInput.value = (_b = (_a = _stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].location) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '--';\n        };\n        this.locationOnSubmit = function () {\n            _services_WeatherApiService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCurrentWeather(undefined, _this.locationInput.value);\n            _services_WeatherApiService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getForecast(undefined, _this.locationInput.value);\n        };\n        this.buttonOnClick = function () {\n            _stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isCelsius = !_stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isCelsius;\n            _stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].app.render();\n        };\n        this.locationInput.addEventListener('keypress', function (event) {\n            if (event.key === 'Enter') {\n                _this.locationOnSubmit();\n            }\n        });\n    }\n    return Header;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n\n//# sourceURL=webpack://weather-app/./src/components/Header.ts?");

/***/ }),

/***/ "./src/components/MainContainer.ts":
/*!*****************************************!*\
  !*** ./src/components/MainContainer.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.ts\");\n/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content */ \"./src/components/Content.ts\");\n\n\nvar MainContainer = /** @class */ (function () {\n    function MainContainer() {\n        var _this = this;\n        this.header = new _Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.content = new _Content__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.render = function () {\n            var container = document.createElement('div');\n            container.className = 'main-container';\n            container.append(_this.header.render(), _this.content.render());\n            return container;\n        };\n    }\n    return MainContainer;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainContainer);\n\n\n//# sourceURL=webpack://weather-app/./src/components/MainContainer.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../styles.css */ \"./styles.css\");\n/* harmony import */ var _assets_favicon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/favicon.png */ \"./src/assets/favicon.png\");\n/* harmony import */ var _services_WeatherApiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/WeatherApiService */ \"./src/services/WeatherApiService.ts\");\n/* harmony import */ var _services_GeolocationService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/GeolocationService */ \"./src/services/GeolocationService.ts\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.ts\");\n/* harmony import */ var _stores_AppState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stores/AppState */ \"./src/stores/AppState.ts\");\n\n\n\n\n\n\nfunction setFavicons(favImg) {\n    var headTitle = document.querySelector('head');\n    var setFavicon = document.createElement('link');\n    setFavicon.setAttribute('rel', 'shortcut icon');\n    setFavicon.setAttribute('href', favImg);\n    headTitle.appendChild(setFavicon);\n}\nsetFavicons(_assets_favicon_png__WEBPACK_IMPORTED_MODULE_1__);\n_services_GeolocationService__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getCurrentLocation(_services_WeatherApiService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getCurrentWeather);\n_services_GeolocationService__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getCurrentLocation(_services_WeatherApiService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getForecast);\n_stores_AppState__WEBPACK_IMPORTED_MODULE_5__[\"default\"].app = new _components_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n_stores_AppState__WEBPACK_IMPORTED_MODULE_5__[\"default\"].app.render();\n\n\n//# sourceURL=webpack://weather-app/./src/index.ts?");

/***/ }),

/***/ "./src/services/GeolocationService.ts":
/*!********************************************!*\
  !*** ./src/services/GeolocationService.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar GeolocationService = /** @class */ (function () {\n    function GeolocationService() {\n        var _this = this;\n        this.options = {\n            maximumAge: 30000,\n            timeout: 5000,\n            enableHighAccuracy: true,\n        };\n        this.getCurrentLocation = function (callBack) { return __awaiter(_this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                if (!navigator.geolocation) {\n                    alert('Geolocation is not supported in this browser.');\n                }\n                else {\n                    navigator.geolocation.getCurrentPosition(callBack, this.error, this.options);\n                }\n                return [2 /*return*/];\n            });\n        }); };\n        this.error = function (e) {\n            console.warn(\"ERROR(\".concat(e.code, \"): \").concat(e.message));\n        };\n    }\n    return GeolocationService;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new GeolocationService());\n\n\n//# sourceURL=webpack://weather-app/./src/services/GeolocationService.ts?");

/***/ }),

/***/ "./src/services/WeatherApiService.ts":
/*!*******************************************!*\
  !*** ./src/services/WeatherApiService.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _stores_AppState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stores/AppState */ \"./src/stores/AppState.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\nvar WeatherApiService = /** @class */ (function () {\n    function WeatherApiService() {\n        var _this = this;\n        this.apiKey = \"a3baa756b85d474eb63164046230809\";\n        this.params = {\n            key: this.apiKey,\n            q: '',\n        };\n        this.getCurrentWeather = function (position, city) { return __awaiter(_this, void 0, void 0, function () {\n            var url, responseJson, response;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        url = 'https://api.weatherapi.com/v1/current.json?';\n                        if (position) {\n                            this.params.q = \"\".concat(position.coords.latitude, \",\").concat(position.coords.longitude);\n                        }\n                        else if (city) {\n                            this.params.q = city;\n                        }\n                        return [4 /*yield*/, fetch(url + new URLSearchParams(this.params))];\n                    case 1:\n                        responseJson = _a.sent();\n                        return [4 /*yield*/, responseJson.json()];\n                    case 2:\n                        response = _a.sent();\n                        _stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].location = response.location;\n                        _stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].current = response.current;\n                        _stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].app.render();\n                        return [2 /*return*/];\n                }\n            });\n        }); };\n        this.getForecast = function (position, city) { return __awaiter(_this, void 0, void 0, function () {\n            var url, responseJson, response;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        url = 'https://api.weatherapi.com/v1/forecast.json?';\n                        if (position) {\n                            this.params.q = \"\".concat(position.coords.latitude, \",\").concat(position.coords.longitude);\n                        }\n                        else if (city) {\n                            this.params.q = city;\n                        }\n                        return [4 /*yield*/, fetch(url + new URLSearchParams(this.params))];\n                    case 1:\n                        responseJson = _a.sent();\n                        return [4 /*yield*/, responseJson.json()];\n                    case 2:\n                        response = _a.sent();\n                        _stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].location = response.location;\n                        _stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forecast = response.forecast;\n                        _stores_AppState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].app.render();\n                        return [2 /*return*/];\n                }\n            });\n        }); };\n    }\n    return WeatherApiService;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new WeatherApiService());\n\n\n//# sourceURL=webpack://weather-app/./src/services/WeatherApiService.ts?");

/***/ }),

/***/ "./src/stores/AppState.ts":
/*!********************************!*\
  !*** ./src/stores/AppState.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar AppState = /** @class */ (function () {\n    function AppState() {\n        this.isCelsius = true;\n    }\n    return AppState;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AppState());\n\n\n//# sourceURL=webpack://weather-app/./src/stores/AppState.ts?");

/***/ }),

/***/ "./src/assets/favicon.png":
/*!********************************!*\
  !*** ./src/assets/favicon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"44c04144cf9d31c1fffa.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/favicon.png?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;