module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@hippy/vue-css-loader/dist/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./node_modules/unicode-loader/index.js!./node_modules/scope-loader/index.js!./src/components/HiButton/HiButton.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hippy/vue-css-loader/dist!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unicode-loader!./node_modules/scope-loader!./src/components/HiButton/HiButton.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports=(function() {\n    if (!global['__HIPPY_VUE_STYLES__']) {\n      global['__HIPPY_VUE_STYLES__'] = [];\n    }\n    global['__HIPPY_VUE_STYLES__'] = global['__HIPPY_VUE_STYLES__'].concat([{\"selectors\":[\".hi_btn\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"overflow\",\"value\":\"hidden\"},{\"type\":\"declaration\",\"property\":\"textAlign\",\"value\":\"center\"}]},{\"selectors\":[\".hi_btn_s\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"height\",\"value\":32},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":32},{\"type\":\"declaration\",\"property\":\"paddingLeft\",\"value\":14},{\"type\":\"declaration\",\"property\":\"paddingRight\",\"value\":14},{\"type\":\"declaration\",\"property\":\"borderRadius\",\"value\":16},{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":12}]},{\"selectors\":[\".hi_btn_m\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"height\",\"value\":37},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":37},{\"type\":\"declaration\",\"property\":\"paddingLeft\",\"value\":20},{\"type\":\"declaration\",\"property\":\"paddingRight\",\"value\":20},{\"type\":\"declaration\",\"property\":\"borderRadius\",\"value\":18},{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":16}]},{\"selectors\":[\".hi_btn_l\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"width\",\"value\":158},{\"type\":\"declaration\",\"property\":\"height\",\"value\":46},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":46},{\"type\":\"declaration\",\"property\":\"textAlign\",\"value\":\"center\"},{\"type\":\"declaration\",\"property\":\"borderRadius\",\"value\":24},{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":20}]},{\"selectors\":[\".hi_btn_xl\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"width\",\"value\":240},{\"type\":\"declaration\",\"property\":\"height\",\"value\":46},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":46},{\"type\":\"declaration\",\"property\":\"textAlign\",\"value\":\"center\"},{\"type\":\"declaration\",\"property\":\"borderRadius\",\"value\":24},{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":20}]},{\"selectors\":[\".primary\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"backgroundColor\",\"value\":4281167851},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4294967295}]},{\"selectors\":[\".primary_touch\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"backgroundColor\",\"value\":4280242349},{\"type\":\"declaration\",\"property\":\"color\",\"value\":2164260863}]},{\"selectors\":[\".primary_disable\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"backgroundColor\",\"value\":4286949350},{\"type\":\"declaration\",\"property\":\"color\",\"value\":1308622847}]},{\"selectors\":[\".regular\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"backgroundColor\",\"value\":4294375158},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4281167851}]},{\"selectors\":[\".regular_touch\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"backgroundColor\",\"value\":4293848814},{\"type\":\"declaration\",\"property\":\"color\",\"value\":2162675663}]},{\"selectors\":[\".regular_disable\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"color\",\"value\":1294823403},{\"type\":\"declaration\",\"property\":\"backgroundColor\",\"value\":4294440951}]},{\"selectors\":[\".info\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"backgroundColor\",\"value\":4286019447},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4294967295}]},{\"selectors\":[\".info_touch\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"backgroundColor\",\"value\":1040187391},{\"type\":\"declaration\",\"property\":\"color\",\"value\":2164260863}]},{\"selectors\":[\".info_disable\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"backgroundColor\",\"value\":4291151301},{\"type\":\"declaration\",\"property\":\"color\",\"value\":1308622847}]},{\"selectors\":[\".default\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"backgroundColor\",\"value\":4294375158},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4284045657}]},{\"selectors\":[\".default_touch\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"backgroundColor\",\"value\":4293848814},{\"type\":\"declaration\",\"property\":\"color\",\"value\":2153339225}]},{\"selectors\":[\".default_disable\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"backgroundColor\",\"value\":4294440951},{\"type\":\"declaration\",\"property\":\"color\",\"value\":1297701209}]}]);\n    return global['__HIPPY_VUE_STYLES__'];\n  })()\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/components/HiButton/HiButton.vue?./node_modules/@hippy/vue-css-loader/dist!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unicode-loader!./node_modules/scope-loader");

/***/ }),

/***/ "./node_modules/@hippy/vue-css-loader/dist/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./node_modules/unicode-loader/index.js!./node_modules/scope-loader/index.js!./src/components/HiText/HiText.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hippy/vue-css-loader/dist!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unicode-loader!./node_modules/scope-loader!./src/components/HiText/HiText.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports=(function() {\n    if (!global['__HIPPY_VUE_STYLES__']) {\n      global['__HIPPY_VUE_STYLES__'] = [];\n    }\n    global['__HIPPY_VUE_STYLES__'] = global['__HIPPY_VUE_STYLES__'].concat([{\"selectors\":[\".SmallRegularPrimary\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":12},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":18},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4280953386},{\"type\":\"declaration\",\"property\":\"fontWeight\",\"value\":\"normal\"}]},{\"selectors\":[\".SmallRegularSecondary\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":12},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":18},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4287730065},{\"type\":\"declaration\",\"property\":\"fontWeight\",\"value\":\"normal\"}]},{\"selectors\":[\".SmallRegularBrand\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":12},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":18},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4281167851},{\"type\":\"declaration\",\"property\":\"fontWeight\",\"value\":\"normal\"}]},{\"selectors\":[\".SmallBoldPrimary\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":12},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":18},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4280953386},{\"type\":\"declaration\",\"property\":\"fontWeight\",\"value\":\"bold\"}]},{\"selectors\":[\".SmallBoldSecondary\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":12},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":18},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4287730065},{\"type\":\"declaration\",\"property\":\"fontWeight\",\"value\":\"bold\"}]},{\"selectors\":[\".SmallBoldBrand\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":12},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":18},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4281167851},{\"type\":\"declaration\",\"property\":\"fontWeight\",\"value\":\"bold\"}]},{\"selectors\":[\".MiddleRegularPrimary\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":16},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":24},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4280953386},{\"type\":\"declaration\",\"property\":\"fontWeight\",\"value\":\"normal\"}]},{\"selectors\":[\".MiddleRegularSecondary\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":16},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":24},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4287730065},{\"type\":\"declaration\",\"property\":\"fontWeight\",\"value\":\"normal\"}]},{\"selectors\":[\".MiddleRegularBrand\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":16},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":24},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4281167851},{\"type\":\"declaration\",\"property\":\"fontWeight\",\"value\":\"normal\"}]},{\"selectors\":[\".MiddleBoldPrimary\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":16},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":24},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4280953386},{\"type\":\"declaration\",\"property\":\"fontWeight\",\"value\":\"bold\"}]},{\"selectors\":[\".MiddleBoldSecondary\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":16},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":24},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4287730065},{\"type\":\"declaration\",\"property\":\"fontWeight\",\"value\":\"bold\"}]},{\"selectors\":[\".MiddleBoldBrand\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":16},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":24},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4281167851},{\"type\":\"declaration\",\"property\":\"fontWeight\",\"value\":\"bold\"}]},{\"selectors\":[\".LargeRegularPrimary\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":20},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":30},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4280953386},{\"type\":\"declaration\",\"property\":\"fontWeight\",\"value\":\"normal\"}]},{\"selectors\":[\".LargeRegularSecondary\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":20},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":30},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4287730065},{\"type\":\"declaration\",\"property\":\"fontWeight\",\"value\":\"normal\"}]},{\"selectors\":[\".LargeRegularBrand\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":20},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":30},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4281167851},{\"type\":\"declaration\",\"property\":\"fontWeight\",\"value\":\"normal\"}]},{\"selectors\":[\".LargeBoldPrimary\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":20},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":30},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4280953386},{\"type\":\"declaration\",\"property\":\"fontWeight\",\"value\":\"bold\"}]},{\"selectors\":[\".LargeBoldSecondary\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":20},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":30},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4287730065},{\"type\":\"declaration\",\"property\":\"fontWeight\",\"value\":\"bold\"}]},{\"selectors\":[\".LargeBoldBrand\"],\"declarations\":[{\"type\":\"declaration\",\"property\":\"fontSize\",\"value\":20},{\"type\":\"declaration\",\"property\":\"lineHeight\",\"value\":30},{\"type\":\"declaration\",\"property\":\"color\",\"value\":4281167851},{\"type\":\"declaration\",\"property\":\"fontWeight\",\"value\":\"bold\"}]}]);\n    return global['__HIPPY_VUE_STYLES__'];\n  })()\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/components/HiText/HiText.vue?./node_modules/@hippy/vue-css-loader/dist!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unicode-loader!./node_modules/scope-loader");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/unicode-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/scope-loader/index.js!./src/components/HiButton/HiButton.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/unicode-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/scope-loader!./src/components/HiButton/HiButton.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"HiButton\",\n  data: function data() {\n    return {\n      isTouching: false,\n      lock: false,\n      timing: null,\n      types: [\"regular\", \"primary\", \"info\", \"default\"],\n      sizes: [\"s\", \"m\", \"l\", \"xl\"]\n    };\n  },\n  props: {\n    disable: {\n      type: Boolean,\n      \"default\": false\n    },\n    text: {\n      type: String,\n      \"default\": \"\"\n    },\n    size: {\n      type: String,\n      \"default\": \"m\" // s,m,l,xl\n\n    },\n    type: {\n      type: String,\n      \"default\": \"default\" // regular, primary, info, default\n\n    }\n  },\n  computed: {\n    hi_button: function hi_button() {\n      if (this.sizes.indexOf(this.size) < 0) {\n        this.size = \"m\";\n      }\n\n      if (this.types.indexOf(this.type) < 0) {\n        this.type = \"default\";\n      }\n\n      var touchCls = this.isTouching ? \"\".concat(this.type, \"_touch\") : \"\";\n      var disableCls = this.disable ? \"\".concat(this.type, \"_disable\") : \"\";\n      return \"hi_btn \".concat(this.type, \" hi_btn_\").concat(this.size, \" \").concat(touchCls, \" \").concat(disableCls);\n    }\n  },\n  methods: {\n    onPress: function onPress() {\n      this.fadeOut();\n\n      if (this.disable) {\n        console.warn(\"\\u4E0D\\u53EF\\u70B9\\u51FB\");\n        return;\n      }\n\n      if (this.lock) {\n        console.warn(\"\\u4E0D\\u8981\\u8FDE\\u7EED\\u70B9\\u51FB\");\n        return;\n      }\n\n      console.warn(\"\\u786E\\u8BA4\\u70B9\\u51FB\");\n      this.lock = true;\n      this.$emit(\"onTouchablePress\");\n    },\n    fadeOut: function fadeOut() {\n      var _this = this;\n\n      if (this.disable) {\n        this.isTouching = false;\n        console.warn(\"\\u4E0D\\u53EF fade out\");\n        return;\n      }\n\n      this.timing && clearTimeout(this.timing);\n      this.timing = setTimeout(function () {\n        _this.lock = false;\n        _this.isTouching = false;\n      }, this.timeout);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/HiButton/HiButton.vue?./node_modules/babel-loader/lib??ref--5-0!./node_modules/unicode-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/scope-loader");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/unicode-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/scope-loader/index.js!./src/components/HiText/HiText.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/unicode-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/scope-loader!./src/components/HiText/HiText.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: Type, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Type */ \"./src/components/HiText/Type.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Type\", function() { return _Type__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"HiText\",\n  props: {\n    type: {\n      type: String,\n      \"default\": _Type__WEBPACK_IMPORTED_MODULE_0__[\"default\"].middleRegularPrimary\n    },\n    numberOfLines: [String, Number]\n  }\n});\n\n//# sourceURL=webpack:///./src/components/HiText/HiText.vue?./node_modules/babel-loader/lib??ref--5-0!./node_modules/unicode-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/scope-loader");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unicode-loader/index.js!./node_modules/scope-loader/index.js!./src/components/HiButton/HiButton.vue?vue&type=template&id=6ad589a2&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unicode-loader!./node_modules/scope-loader!./src/components/HiButton/HiButton.vue?vue&type=template&id=6ad589a2& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      on: {\n        touchStart: function($event) {\n          _vm.isTouching = true\n        },\n        touchMove: function($event) {\n          _vm.isTouching = false\n        },\n        touchEnd: _vm.onPress\n      }\n    },\n    [_c(\"span\", { class: _vm.hi_button }, [_vm._t(\"default\")], 2)]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/HiButton/HiButton.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unicode-loader!./node_modules/scope-loader");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unicode-loader/index.js!./node_modules/scope-loader/index.js!./src/components/HiText/HiText.vue?vue&type=template&id=6f480dcf&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unicode-loader!./node_modules/scope-loader!./src/components/HiText/HiText.vue?vue&type=template&id=6f480dcf& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"span\",\n    _vm._g(\n      _vm._b(\n        {\n          ref: \"hiTextRef\",\n          class: _vm.type,\n          attrs: { numberOfLines: _vm.numberOfLines }\n        },\n        \"span\",\n        _vm.$attrs,\n        false\n      ),\n      _vm.$listeners\n    ),\n    [_vm._t(\"default\")],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/HiText/HiText.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unicode-loader!./node_modules/scope-loader");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n        injectStyles.call(\n          this,\n          (options.functional ? this.parent : this).$root.$options.shadowRoot\n        )\n      }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar g; // This works in non-strict mode\n\ng = function () {\n  return this;\n}();\n\ntry {\n  // This works if eval is allowed (see CSP)\n  g = g || new Function(\"return this\")();\n} catch (e) {\n  // This works if the window reference is available\n  if ((typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\") g = window;\n} // g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\n\nmodule.exports = g;\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/components/HiButton/HiButton.vue":
/*!**********************************************!*\
  !*** ./src/components/HiButton/HiButton.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HiButton_vue_vue_type_template_id_6ad589a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HiButton.vue?vue&type=template&id=6ad589a2& */ \"./src/components/HiButton/HiButton.vue?vue&type=template&id=6ad589a2&\");\n/* harmony import */ var _HiButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HiButton.vue?vue&type=script&lang=js& */ \"./src/components/HiButton/HiButton.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _HiButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HiButton.vue?vue&type=style&index=0&lang=scss& */ \"./src/components/HiButton/HiButton.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _HiButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _HiButton_vue_vue_type_template_id_6ad589a2___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _HiButton_vue_vue_type_template_id_6ad589a2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/HiButton/HiButton.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/HiButton/HiButton.vue?");

/***/ }),

/***/ "./src/components/HiButton/HiButton.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/components/HiButton/HiButton.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_unicode_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_scope_loader_index_js_HiButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--5-0!../../../node_modules/unicode-loader!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/scope-loader!./HiButton.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/unicode-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/scope-loader/index.js!./src/components/HiButton/HiButton.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_unicode_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_scope_loader_index_js_HiButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/HiButton/HiButton.vue?");

/***/ }),

/***/ "./src/components/HiButton/HiButton.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************!*\
  !*** ./src/components/HiButton/HiButton.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_hippy_vue_css_loader_dist_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unicode_loader_index_js_node_modules_scope_loader_index_js_HiButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@hippy/vue-css-loader/dist!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/unicode-loader!../../../node_modules/scope-loader!./HiButton.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/@hippy/vue-css-loader/dist/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./node_modules/unicode-loader/index.js!./node_modules/scope-loader/index.js!./src/components/HiButton/HiButton.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_hippy_vue_css_loader_dist_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unicode_loader_index_js_node_modules_scope_loader_index_js_HiButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_hippy_vue_css_loader_dist_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unicode_loader_index_js_node_modules_scope_loader_index_js_HiButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_hippy_vue_css_loader_dist_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unicode_loader_index_js_node_modules_scope_loader_index_js_HiButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_hippy_vue_css_loader_dist_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unicode_loader_index_js_node_modules_scope_loader_index_js_HiButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_hippy_vue_css_loader_dist_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unicode_loader_index_js_node_modules_scope_loader_index_js_HiButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/HiButton/HiButton.vue?");

/***/ }),

/***/ "./src/components/HiButton/HiButton.vue?vue&type=template&id=6ad589a2&":
/*!*****************************************************************************!*\
  !*** ./src/components/HiButton/HiButton.vue?vue&type=template&id=6ad589a2& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unicode_loader_index_js_node_modules_scope_loader_index_js_HiButton_vue_vue_type_template_id_6ad589a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/unicode-loader!../../../node_modules/scope-loader!./HiButton.vue?vue&type=template&id=6ad589a2& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unicode-loader/index.js!./node_modules/scope-loader/index.js!./src/components/HiButton/HiButton.vue?vue&type=template&id=6ad589a2&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unicode_loader_index_js_node_modules_scope_loader_index_js_HiButton_vue_vue_type_template_id_6ad589a2___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unicode_loader_index_js_node_modules_scope_loader_index_js_HiButton_vue_vue_type_template_id_6ad589a2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/HiButton/HiButton.vue?");

/***/ }),

/***/ "./src/components/HiButton/index.js":
/*!******************************************!*\
  !*** ./src/components/HiButton/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HiButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HiButton.vue */ \"./src/components/HiButton/HiButton.vue\");\n\n/* istanbul ignore next */\n\n_HiButton_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].install = function (Vue) {\n  Vue.component(_HiButton_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].name, _HiButton_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_HiButton_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/components/HiButton/index.js?");

/***/ }),

/***/ "./src/components/HiText/HiText.vue":
/*!******************************************!*\
  !*** ./src/components/HiText/HiText.vue ***!
  \******************************************/
/*! exports provided: Type, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HiText_vue_vue_type_template_id_6f480dcf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HiText.vue?vue&type=template&id=6f480dcf& */ \"./src/components/HiText/HiText.vue?vue&type=template&id=6f480dcf&\");\n/* harmony import */ var _HiText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HiText.vue?vue&type=script&lang=js& */ \"./src/components/HiText/HiText.vue?vue&type=script&lang=js&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Type\", function() { return _HiText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"Type\"]; });\n\n/* harmony import */ var _HiText_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HiText.vue?vue&type=style&index=0&lang=scss& */ \"./src/components/HiText/HiText.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _HiText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _HiText_vue_vue_type_template_id_6f480dcf___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _HiText_vue_vue_type_template_id_6f480dcf___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/HiText/HiText.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/HiText/HiText.vue?");

/***/ }),

/***/ "./src/components/HiText/HiText.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/HiText/HiText.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default, Type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_unicode_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_scope_loader_index_js_HiText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--5-0!../../../node_modules/unicode-loader!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/scope-loader!./HiText.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/unicode-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/scope-loader/index.js!./src/components/HiText/HiText.vue?vue&type=script&lang=js&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Type\", function() { return _node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_unicode_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_scope_loader_index_js_HiText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"Type\"]; });\n\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_unicode_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_scope_loader_index_js_HiText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/HiText/HiText.vue?");

/***/ }),

/***/ "./src/components/HiText/HiText.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************!*\
  !*** ./src/components/HiText/HiText.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_hippy_vue_css_loader_dist_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unicode_loader_index_js_node_modules_scope_loader_index_js_HiText_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@hippy/vue-css-loader/dist!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/unicode-loader!../../../node_modules/scope-loader!./HiText.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/@hippy/vue-css-loader/dist/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./node_modules/unicode-loader/index.js!./node_modules/scope-loader/index.js!./src/components/HiText/HiText.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_hippy_vue_css_loader_dist_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unicode_loader_index_js_node_modules_scope_loader_index_js_HiText_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_hippy_vue_css_loader_dist_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unicode_loader_index_js_node_modules_scope_loader_index_js_HiText_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_hippy_vue_css_loader_dist_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unicode_loader_index_js_node_modules_scope_loader_index_js_HiText_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_hippy_vue_css_loader_dist_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unicode_loader_index_js_node_modules_scope_loader_index_js_HiText_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_hippy_vue_css_loader_dist_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unicode_loader_index_js_node_modules_scope_loader_index_js_HiText_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/HiText/HiText.vue?");

/***/ }),

/***/ "./src/components/HiText/HiText.vue?vue&type=template&id=6f480dcf&":
/*!*************************************************************************!*\
  !*** ./src/components/HiText/HiText.vue?vue&type=template&id=6f480dcf& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unicode_loader_index_js_node_modules_scope_loader_index_js_HiText_vue_vue_type_template_id_6f480dcf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/unicode-loader!../../../node_modules/scope-loader!./HiText.vue?vue&type=template&id=6f480dcf& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unicode-loader/index.js!./node_modules/scope-loader/index.js!./src/components/HiText/HiText.vue?vue&type=template&id=6f480dcf&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unicode_loader_index_js_node_modules_scope_loader_index_js_HiText_vue_vue_type_template_id_6f480dcf___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unicode_loader_index_js_node_modules_scope_loader_index_js_HiText_vue_vue_type_template_id_6f480dcf___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/HiText/HiText.vue?");

/***/ }),

/***/ "./src/components/HiText/Type.js":
/*!***************************************!*\
  !*** ./src/components/HiText/Type.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  SmallRegularPrimary: \"SmallRegularPrimary\",\n  SmallRegularSecondary: \"SmallRegularSecondary\",\n  SmallRegularBrand: \"SmallRegularBrand\",\n  SmallBoldPrimary: \"SmallBoldPrimary\",\n  SmallBoldSecondary: \"SmallBoldSecondary\",\n  SmallBoldBrand: \"SmallBoldBrand\",\n  MiddleRegularPrimary: \"MiddleRegularPrimary\",\n  MiddleRegularSecondary: \"MiddleRegularSecondary\",\n  MiddleRegularBrand: \"MiddleRegularBrand\",\n  MiddleBoldPrimary: \"MiddleBoldPrimary\",\n  MiddleBoldSecondary: \"MiddleBoldSecondary\",\n  MiddleBoldBrand: \"MiddleBoldBrand\",\n  LargeRegularPrimary: \"LargeRegularPrimary\",\n  LargeRegularSecondary: \"LargeRegularSecondary\",\n  LargeRegularBrand: \"LargeRegularBrand\",\n  LargeBoldPrimary: \"LargeBoldPrimary\",\n  LargeBoldSecondary: \"LargeBoldSecondary\",\n  LargeBoldBrand: \"LargeBoldBrand\"\n});\n\n//# sourceURL=webpack:///./src/components/HiText/Type.js?");

/***/ }),

/***/ "./src/components/HiText/index.js":
/*!****************************************!*\
  !*** ./src/components/HiText/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HiText_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HiText.vue */ \"./src/components/HiText/HiText.vue\");\n\n/* istanbul ignore next */\n\n_HiText_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].install = function (Vue) {\n  Vue.component(_HiText_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].name, _HiText_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};\n\n_HiText_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Type = _HiText_vue__WEBPACK_IMPORTED_MODULE_0__[\"Type\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (_HiText_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/components/HiText/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: components, HiText, HiButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"components\", function() { return components; });\n/* harmony import */ var _components_HiText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/HiText */ \"./src/components/HiText/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"HiText\", function() { return _components_HiText__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _components_HiButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/HiButton */ \"./src/components/HiButton/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"HiButton\", function() { return _components_HiButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n// import Vue from '@hippy/vue'\n\n\nvar MAN_VERSION = '0.0.1';\n/* global MAN_VERSION */\n\nvar version =\n/* @echo MAN_VERSION */\nMAN_VERSION;\nvar components = {\n  HiText: _components_HiText__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  HiButton: _components_HiButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}; // Define plugin installation method\n\nvar install = function install(Vue) {} // if (!Vue || install.installed) {\n//   return\n// }\n// // Register global components\n// const componentsNames = Object.keys(components)\n// componentsNames.forEach(name => {\n//   const component = components[name]\n//   if (component.name) {\n//     Vue.component(component.name, component) // kebab-case\n//     // Vue.component(transformCamelCase(`-${component.name}`), component) // PascalCase\n//   }\n// })\n// install(Vue)\n;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  install: install,\n  version: version\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });