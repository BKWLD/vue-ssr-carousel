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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("lodash/throttle");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_arrows_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_arrows_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_arrows_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_dots_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_dots_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_dots_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_track_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_track_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_track_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ssr-carousel.vue?vue&type=template&id=b31a94d8&lang=pug&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.$slots.default && _vm.$slots.default.length
    ? _c(
        "div",
        {
          key: _vm.$slots.default.length,
          staticClass: "ssr-carousel",
          attrs: { "data-ssrc-id": _vm.scopeId },
          on: {
            keyup: function ($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")
              ) {
                return null
              }
              return _vm.onTab.apply(null, arguments)
            },
          },
        },
        [
          _c("style", {
            tag: "component",
            domProps: { innerHTML: _vm._s(_vm.instanceStyles) },
          }),
          _c(
            "div",
            { staticClass: "ssr-carousel-slides" },
            [
              _c("div", {
                ref: "peekValues",
                staticClass: "ssr-peek-values",
                style: _vm.peekStyles,
              }),
              _c(
                "div",
                _vm._g(
                  {
                    ref: "mask",
                    staticClass: "ssr-carousel-mask",
                    class: { pressing: _vm.pressing, disabled: _vm.disabled },
                  },
                  _vm.maskListeners
                ),
                [
                  _c(
                    "ssr-carousel-track",
                    _vm._b(
                      {
                        ref: "track",
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function () {
                                return [_vm._t("default")]
                              },
                              proxy: true,
                            },
                            _vm.hasPeekClones
                              ? {
                                  key: "clones",
                                  fn: function () {
                                    return [_vm._t("default")]
                                  },
                                  proxy: true,
                                }
                              : null,
                          ],
                          null,
                          true
                        ),
                      },
                      "ssr-carousel-track",
                      {
                        dragging: _vm.dragging,
                        trackTranslateX: _vm.trackTranslateX,
                        slideOrder: _vm.slideOrder,
                        activeSlides: _vm.activeSlides,
                        leftPeekingSlideIndex: _vm.leftPeekingSlideIndex,
                        rightPeekingSlideIndex: _vm.rightPeekingSlideIndex,
                      },
                      false
                    )
                  ),
                ],
                1
              ),
              _vm.showArrows
                ? _c(
                    "ssr-carousel-arrows",
                    _vm._b(
                      {
                        on: { back: _vm.back, next: _vm.next },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "back",
                              fn: function (props) {
                                return [_vm._t("back-arrow", null, null, props)]
                              },
                            },
                            {
                              key: "next",
                              fn: function (props) {
                                return [_vm._t("next-arrow", null, null, props)]
                              },
                            },
                          ],
                          null,
                          true
                        ),
                      },
                      "ssr-carousel-arrows",
                      { index: _vm.index, pages: _vm.pages, loop: _vm.loop },
                      false
                    )
                  )
                : _vm._e(),
            ],
            1
          ),
          _vm.showDots
            ? _c(
                "ssr-carousel-dots",
                _vm._b(
                  {
                    on: { goto: _vm.gotoDot },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "dot",
                          fn: function (props) {
                            return [_vm._t("dot", null, null, props)]
                          },
                        },
                      ],
                      null,
                      true
                    ),
                  },
                  "ssr-carousel-dots",
                  { boundedIndex: _vm.boundedIndex, pages: _vm.pages },
                  false
                )
              )
            : _vm._e(),
          _c(
            "div",
            {
              staticClass: "ssr-carousel-visually-hidden",
              attrs: { "aria-live": "polite", "aria-atomic": "true" },
            },
            [_vm._v(_vm._s(_vm.currentSlideMessage))]
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/ssr-carousel.vue?vue&type=template&id=b31a94d8&lang=pug&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ssr-carousel-arrows.vue?vue&type=template&id=f7877eda&lang=pug&
var ssr_carousel_arrowsvue_type_template_id_f7877eda_lang_pug_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "ssr-carousel-arrows" }, [
    _c(
      "button",
      {
        staticClass: "ssr-carousel-back-button",
        attrs: { "aria-label": "Back", disabled: _vm.backDisabled },
        on: {
          click: function ($event) {
            return _vm.$emit("back")
          },
        },
      },
      [
        _vm._t(
          "back",
          function () {
            return [_c("span", { staticClass: "ssr-carousel-back-icon" })]
          },
          { disabled: _vm.backDisabled }
        ),
      ],
      2
    ),
    _c(
      "button",
      {
        staticClass: "ssr-carousel-next-button",
        attrs: { "aria-label": "Next", disabled: _vm.nextDisabled },
        on: {
          click: function ($event) {
            return _vm.$emit("next")
          },
        },
      },
      [
        _vm._t(
          "next",
          function () {
            return [_c("span", { staticClass: "ssr-carousel-next-icon" })]
          },
          { disabled: _vm.nextDisabled }
        ),
      ],
      2
    ),
  ])
}
var ssr_carousel_arrowsvue_type_template_id_f7877eda_lang_pug_staticRenderFns = []
ssr_carousel_arrowsvue_type_template_id_f7877eda_lang_pug_render._withStripped = true


// CONCATENATED MODULE: ./src/ssr-carousel-arrows.vue?vue&type=template&id=f7877eda&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/coffee-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ssr-carousel-arrows.vue?vue&type=script&lang=coffee&
/* harmony default export */ var ssr_carousel_arrowsvue_type_script_lang_coffee_ = ({
  props: {
    index: Number,
    pages: Number,
    loop: Boolean
  },
  computed: {
    // Determine if button should be disabled because we're at the limits
    backDisabled: function () {
      if (!this.shouldLoop) {
        return this.index === 0;
      }
    },
    nextDisabled: function () {
      if (!this.shouldLoop) {
        return this.index === this.pages - 1;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/ssr-carousel-arrows.vue?vue&type=script&lang=coffee&
 /* harmony default export */ var src_ssr_carousel_arrowsvue_type_script_lang_coffee_ = (ssr_carousel_arrowsvue_type_script_lang_coffee_); 
// EXTERNAL MODULE: ./src/ssr-carousel-arrows.vue?vue&type=style&index=0&lang=stylus&
var ssr_carousel_arrowsvue_type_style_index_0_lang_stylus_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/ssr-carousel-arrows.vue






/* normalize component */

var component = normalizeComponent(
  src_ssr_carousel_arrowsvue_type_script_lang_coffee_,
  ssr_carousel_arrowsvue_type_template_id_f7877eda_lang_pug_render,
  ssr_carousel_arrowsvue_type_template_id_f7877eda_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ssr-carousel-arrows.vue"
/* harmony default export */ var ssr_carousel_arrows = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ssr-carousel-dots.vue?vue&type=template&id=6b089f93&lang=pug&
var ssr_carousel_dotsvue_type_template_id_6b089f93_lang_pug_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ssr-carousel-dots" },
    _vm._l(_vm.pages, function (i) {
      return _c(
        "button",
        {
          key: i,
          staticClass: "ssr-carousel-dot-button",
          attrs: { "aria-label": "Page " + i, disabled: _vm.isDisabled(i) },
          on: {
            click: function ($event) {
              return _vm.$emit("goto", i - 1)
            },
          },
        },
        [
          _vm._t(
            "dot",
            function () {
              return [_c("span", { staticClass: "ssr-carousel-dot-icon" })]
            },
            { index: i, disabled: _vm.isDisabled(i) }
          ),
        ],
        2
      )
    }),
    0
  )
}
var ssr_carousel_dotsvue_type_template_id_6b089f93_lang_pug_staticRenderFns = []
ssr_carousel_dotsvue_type_template_id_6b089f93_lang_pug_render._withStripped = true


// CONCATENATED MODULE: ./src/ssr-carousel-dots.vue?vue&type=template&id=6b089f93&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/coffee-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ssr-carousel-dots.vue?vue&type=script&lang=coffee&
/* harmony default export */ var ssr_carousel_dotsvue_type_script_lang_coffee_ = ({
  props: {
    boundedIndex: Number,
    pages: Number
  },
  methods: {
    // Check if dot index shuold be disabled
    isDisabled: function (index) {
      return this.boundedIndex === index - 1;
    }
  }
});
// CONCATENATED MODULE: ./src/ssr-carousel-dots.vue?vue&type=script&lang=coffee&
 /* harmony default export */ var src_ssr_carousel_dotsvue_type_script_lang_coffee_ = (ssr_carousel_dotsvue_type_script_lang_coffee_); 
// EXTERNAL MODULE: ./src/ssr-carousel-dots.vue?vue&type=style&index=0&lang=stylus&
var ssr_carousel_dotsvue_type_style_index_0_lang_stylus_ = __webpack_require__(6);

// CONCATENATED MODULE: ./src/ssr-carousel-dots.vue






/* normalize component */

var ssr_carousel_dots_component = normalizeComponent(
  src_ssr_carousel_dotsvue_type_script_lang_coffee_,
  ssr_carousel_dotsvue_type_template_id_6b089f93_lang_pug_render,
  ssr_carousel_dotsvue_type_template_id_6b089f93_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var ssr_carousel_dots_api; }
ssr_carousel_dots_component.options.__file = "src/ssr-carousel-dots.vue"
/* harmony default export */ var ssr_carousel_dots = (ssr_carousel_dots_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/coffee-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ssr-carousel-track.vue?vue&type=script&lang=coffee&
var interactiveSelector,
    indexOf = [].indexOf;
interactiveSelector = 'a, button, input, textarea, select';
/* harmony default export */ var ssr_carousel_trackvue_type_script_lang_coffee_ = ({
  props: {
    dragging: Boolean,
    trackTranslateX: Number,
    slideOrder: Array,
    activeSlides: Array,
    leftPeekingSlideIndex: Number,
    rightPeekingSlideIndex: Number
  },
  // Set tabindex of inactive slides on mount
  mounted: function () {
    this.denyTabindex(this.inactiveSlides);
    return this.denyTabindex(this.clonedSlides);
  },
  computed: {
    // Get the count of non-cloned slides
    uniqueSlidesCount: function () {
      return this.slideOrder.length;
    },
    // Get the total slides count, including clones
    allSlidesCount: function () {
      return this.getSlideComponents().length;
    },
    // Check if there are cloned slides
    hasClonedSlides: function () {
      return this.allSlidesCount > this.uniqueSlidesCount;
    },
    // Make an array of inactive slide indices
    inactiveSlides: function () {
      var ref;
      return function () {
        var results = [];

        for (var j = 0, ref = this.uniqueSlidesCount; 0 <= ref ? j < ref : j > ref; 0 <= ref ? j++ : j--) {
          results.push(j);
        }

        return results;
      }.apply(this).filter(index => {
        return indexOf.call(this.activeSlides, index) < 0;
      });
    },
    // An array of the cloned slides indices
    clonedSlides: function () {
      var ref, ref1;
      return function () {
        var results = [];

        for (var j = ref = this.uniqueSlidesCount, ref1 = this.allSlidesCount; ref <= ref1 ? j < ref1 : j > ref1; ref <= ref1 ? j++ : j--) {
          results.push(j);
        }

        return results;
      }.apply(this);
    },
    // Styles that are used to position the track
    styles: function () {
      if (this.trackTranslateX) {
        return {
          transform: `translateX(${this.trackTranslateX}px)`
        };
      }
    }
  },
  // Update the tabindex of interactive elements when slides change
  watch: {
    activeSlides: function () {
      this.allowTabindex(this.activeSlides);
      return this.denyTabindex(this.inactiveSlides);
    }
  },
  methods: {
    // Make the slides to render into the track
    makeSlides: function () {
      return this.getSlideComponents().map((vnode, index) => {
        var cssClass, isPeekingClone, peekingIndex, slideCount;
        vnode = this.makeReactiveVnode(vnode); // This is a peeking clone if it's index is greater than the slide count

        slideCount = this.uniqueSlidesCount;
        isPeekingClone = index >= slideCount;
        peekingIndex = index - slideCount; // Add the slide class using staticClass since it isn't reactive to data

        cssClass = 'ssr-carousel-slide';

        if (vnode.data.staticClass) {
          vnode.data.staticClass += ` ${cssClass}`;
        } else {
          vnode.data.staticClass = cssClass;
        } // Order the slide, like for looping


        if (!isPeekingClone) {
          vnode.data.style.order = this.slideOrder[index] || 0;
        } else {
          // Or put at the beginning / end if peeking
          vnode.data.style.order = function () {
            switch (false) {
              case peekingIndex !== this.leftPeekingSlideIndex:
                return '-1';

              case peekingIndex !== this.rightPeekingSlideIndex:
                return this.slideOrder.length;
            }
          }.call(this);
        } // Hide cloned slides that aren't involved in peeking


        if (isPeekingClone && peekingIndex !== this.leftPeekingSlideIndex && peekingIndex !== this.rightPeekingSlideIndex) {
          vnode.data.style.display = 'none';
        } // Make peeking clones and slides not in viewport as aria-hidden


        if (isPeekingClone || indexOf.call(this.activeSlides, index) < 0) {
          vnode.data.attrs['aria-hidden'] = 'true';
        } // Return modified vnode


        return vnode;
      });
    },
    // Get the list of non-text slides, including peeking clones.  This doesn't
    // work as a computed function
    getSlideComponents: function () {
      return [...(this.$slots.default || []), ...(this.$slots.clones || [])].filter(function (vnode) {
        return !vnode.text;
      });
    },
    // Makes a clone of the vnode properties we'll be updating so the changes
    // get rendered. Based on:
    // https://github.com/vuejs/vue/issues/6052#issuecomment-313705168
    makeReactiveVnode: function (vnode) {
      var newVnode; // Make the new vnode and data

      newVnode = { ...vnode
      };
      newVnode.data = { ...vnode.data
      }; // Clone style property. String styles will be on staticStyle so we can
      // ignore them.

      newVnode.data.style = { ...vnode.data.style
      }; // Clone attrs property

      newVnode.data.attrs = { ...vnode.data.attrs
      }; // Return the clone

      return newVnode;
    },
    // Prevent tabbing to interactive elements in slides with the passed in
    // index values
    denyTabindex: function (indices) {
      return this.setTabindex(indices, -1);
    },
    // Allow tabindex on interactive elements in slides with the passed in
    // index values
    allowTabindex: function (indices) {
      return this.setTabindex(indices, 0);
    },
    // Set tabindex value on interactive elements in slides
    setTabindex: function (slideIndices, tabindexValue) {
      var el, j, len, ref, results;
      ref = this.getSlideElementsByIndices(slideIndices);
      results = [];

      for (j = 0, len = ref.length; j < len; j++) {
        el = ref[j]; // Set tabindex value on the slide, like in the case that the slide is
        // an <a>

        if (el.matches(interactiveSelector)) {
          el.tabIndex = tabindexValue;
        } // Set tabindex values on all interactive children


        results.push(el.querySelectorAll(interactiveSelector).forEach(function (el) {
          return el.tabIndex = tabindexValue;
        }));
      }

      return results;
    },
    // Get the slide elements that match the array of indices
    getSlideElementsByIndices: function (slideIndices) {
      return Array.from(this.$el.children).filter(function (el, i) {
        return indexOf.call(slideIndices, i) >= 0;
      });
    }
  },
  // Render the track and slotted slides
  render: function (create) {
    return create('div', {
      class: ['ssr-carousel-track', {
        dragging: this.dragging
      }],
      style: this.styles
    }, this.makeSlides());
  }
});
// CONCATENATED MODULE: ./src/ssr-carousel-track.vue?vue&type=script&lang=coffee&
 /* harmony default export */ var src_ssr_carousel_trackvue_type_script_lang_coffee_ = (ssr_carousel_trackvue_type_script_lang_coffee_); 
// EXTERNAL MODULE: ./src/ssr-carousel-track.vue?vue&type=style&index=0&lang=stylus&
var ssr_carousel_trackvue_type_style_index_0_lang_stylus_ = __webpack_require__(7);

// CONCATENATED MODULE: ./src/ssr-carousel-track.vue
var ssr_carousel_track_render, ssr_carousel_track_staticRenderFns





/* normalize component */

var ssr_carousel_track_component = normalizeComponent(
  src_ssr_carousel_trackvue_type_script_lang_coffee_,
  ssr_carousel_track_render,
  ssr_carousel_track_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var ssr_carousel_track_api; }
ssr_carousel_track_component.options.__file = "src/ssr-carousel-track.vue"
/* harmony default export */ var ssr_carousel_track = (ssr_carousel_track_component.exports);
// CONCATENATED MODULE: ./src/concerns/accessibility.coffee
/*
Code related to supporting keyboard interaction and screen readers
*/
/* harmony default export */ var accessibility_coffee = ({
  // Store whether the user appears to be using keyboard to navigate
  data: function () {
    return {
      usingKeyboard: false
    };
  },
  computed: {
    // Make the current slide message
    // https://www.w3.org/WAI/tutorials/carousels/functionality/#announce-the-current-item
    currentSlideMessage: function () {
      return `Item ${this.boundedIndex + 1} of ${this.pages}`;
    }
  },
  watch: {
    // When switching to keyboard navigation, I could never reproduce a scenario
    // where the focused elements wasn't the first slide, so I'm resetting the
    // active page to the first slide
    usingKeyboard: function () {
      if (this.usingKeyboard) {
        return this.goto(0);
      }
    }
  },
  methods: {
    // Once a user uses tab on the carousel, mark them as using their keyboard.
    // This is cleared by the onPointerDown method.
    onTab: function () {
      return this.usingKeyboard = true;
    }
  }
});
// CONCATENATED MODULE: ./src/concerns/autoplay.coffee
/*
Code related to auotplay features of the carousel
*/
/* harmony default export */ var autoplay_coffee = ({
  props: {
    // A delay provided in seconds for the autoplay. 0 is disabled
    autoplayDelay: {
      type: Number,
      default: 0
    },
    // Should we pause on hover
    pauseOnFocus: {
      type: Boolean,
      default: true
    }
  },
  // Start autolaying on mount
  mounted: function () {
    return this.autoplayStart();
  },
  beforeDestroy: function () {
    return this.autoplayStop();
  },
  computed: {
    // Conditions that result in pausing autoplay
    autoplayPaused: function () {
      switch (false) {
        // Always pause when using keyboard navigation
        case !this.usingKeyboard:
          return true;
        // Stop animation if window is hidden or if carousel is focused

        case !this.pauseOnFocus:
          return this.windowHidden || this.isFocused;
      }
    }
  },
  watch: {
    // Respond to conditions that may automatically pause autoplaying
    autoplayPaused: function (paused) {
      if (paused) {
        return this.autoplayStop();
      } else {
        return this.autoplayStart();
      }
    }
  },
  methods: {
    autoplayStart: function () {
      // Require a delay amount
      if (!this.autoplayDelay) {
        return;
      } // Don't loop if we only have one page


      if (!this.pages) {
        return;
      } // Start autoplaying


      return this.autoPlayInterval = setInterval(() => {
        if (!this.autoplayPaused) {
          return this.autoplayNext();
        }
      }, this.autoplayDelay * 1000);
    },
    autoplayStop: function () {
      return clearInterval(this.autoPlayInterval);
    },
    // Advance to the next slide
    autoplayNext: function () {
      if (this.shouldLoop || this.index < this.pages - 1) {
        return this.next();
      } else {
        return this.goto(0); // Reset because loop wasn't enabled
      }
    }
  }
});
// EXTERNAL MODULE: external "lodash/throttle"
var throttle_ = __webpack_require__(4);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle_);

// CONCATENATED MODULE: ./src/concerns/dimensions.coffee
/*
Code related to measuring the size of the carousel after mounting
*/

/* harmony default export */ var dimensions_coffee = ({
  data: function () {
    return {
      viewportWidth: null,
      // Width of the viewport, for media query calculation
      carouselWidth: null,
      // Width of a page of the carousel
      gutterWidth: 0 // Computed width of gutters, since they support css vars

    };
  },
  // Add resize listening
  mounted: function () {
    this.onResize();
    this.onResizeThrottled = throttle_default()(this.onResize, 200);
    return window.addEventListener('resize', this.onResizeThrottled);
  },
  // Cleanup listeners
  beforeDestroy: function () {
    return window.removeEventListener('resize', this.onResizeThrottled);
  },
  computed: {
    // The width of a page of slides, which may be less than the carouselWidth
    // if there is peeking. This includes the affect of gutters.
    pageWidth: function () {
      return this.carouselWidth - this.combinedPeek;
    },
    // Calculate the width of a slide based on client side measured pageWidth
    // rather than measuring it explicitly in the DOM. This value includes the
    // gutter.
    slideWidth: function () {
      return this.pageWidth / this.currentSlidesPerPage;
    },
    // Calculate the width of the whole track from the slideWidth.
    trackWidth: function () {
      return this.slideWidth * this.slidesCount;
    },
    // Figure out the width of the last page, which may not have enough slides
    // to fill it.
    lastPageWidth: function () {
      var slidesOnLastPage, slidesPerPage, width; // Determine how many slides are on the final page of pagination. If the
      // remainder was 0, that means the page is flush with slides, so swap
      // the 0 for the max amount.

      slidesPerPage = this.currentSlidesPerPage;
      slidesOnLastPage = this.slidesCount % slidesPerPage;

      if (slidesOnLastPage === 0) {
        slidesOnLastPage = slidesPerPage;
      } // Turn the slide count into a width value


      width = slidesOnLastPage * this.slideWidth;
      return width;
    },
    // The ending x value, only used when not looping. The peeking values in
    // here result in the final page using the left peeking value and the
    // actualy peeking appearing to apply to the left. The +1 is to fix subpixel
    // rounding issues.
    endX: function () {
      if (this.disabled) {
        return 0;
      } else {
        return this.pageWidth - this.trackWidth - this.peekLeftPx + this.peekRightPx + 1;
      }
    },
    // Check if the drag is currently out bounds
    isOutOfBounds: function () {
      return this.currentX > 0 || this.currentX < this.endX;
    }
  },
  methods: {
    // Measure the component width for various calculations. Using
    // getBoundingClientRect so we can get fractional values.  We also need
    // the width of the gutter since that's effectively part of the page.
    onResize: function () {
      var firstSlide, ref;

      if (((ref = this.$el) != null ? ref.nodeType : void 0) !== Node.ELEMENT_NODE) {
        return;
      }

      if (!(firstSlide = this.$refs.track.$el.firstElementChild)) {
        return;
      }

      this.gutterWidth = parseInt(getComputedStyle(firstSlide).marginRight);
      this.carouselWidth = this.$el.getBoundingClientRect().width + this.gutterWidth;
      this.viewportWidth = window.innerWidth;
      return this.capturePeekingMeasurements();
    },
    // Make the width style that gives a slide it's width given
    // slidesPerPage. Reduce this width by the gutter if present
    makeBreakpointSlideWidthStyle: function (breakpoint) {
      return `${this.scopeSelector} .ssr-carousel-slide {
	width: ${this.makeSlideWidthCalc(breakpoint)};
}`;
    },
    // Build the calc string which makes a percentage width for a slide and
    // reduces it by combined peeking and gutter influence. The computed
    // style this produces should have an equal value to the `slideWidth`
    // computed property which is client side JS dependent.
    makeSlideWidthCalc: function (breakpoint) {
      var gutter, isDisabled, peekLeft, peekRight, slidesPerPage;
      isDisabled = this.isDisabledAtBreakpoint(breakpoint);
      slidesPerPage = this.getResponsiveValue('slidesPerPage', breakpoint);
      gutter = this.getResponsiveValue('gutter', breakpoint); // A common use case when not looping is to have a larger peek on just the
      // right.  But when disabled, this looks strange.  So this balances out
      // the peeking in the disbaled state.

      peekLeft = this.getResponsiveValue('peekLeft', breakpoint);

      if (this.matchPeekWhenDisabled && isDisabled) {
        peekRight = peekLeft;
      } else {
        peekRight = this.getResponsiveValue('peekRight', breakpoint);
      } // Render the styles


      return `calc( ${100 / slidesPerPage}% - (${this.autoUnit(peekLeft)} + ${this.autoUnit(peekRight)}) / ${slidesPerPage} - (${this.autoUnit(gutter)} * ${slidesPerPage - 1}) / ${slidesPerPage} )`;
    }
  }
});
// CONCATENATED MODULE: ./src/concerns/dragging.coffee
/*
Code related to handling dragging of the track
*/
var notPassive, passive;
passive = {
  passive: true
};
notPassive = {
  passive: false
};
/* harmony default export */ var dragging_coffee = ({
  props: {
    // Boundary drag dampening modifier. Increase to allow greater travel outside
    // the boundaries.
    boundaryDampening: {
      type: Number,
      default: 0.6
    },
    // The percentage of a pageWidth that was dragged before we advance to
    // another page on slide
    dragAdvanceRatio: {
      type: Number,
      default: .33
    },
    // The ratio of X:Y mouse travel. Decrease this number to allow for greater
    // y dragging before the drag is cancelled.
    verticalDragTreshold: {
      type: Number,
      default: 1
    }
  },
  data: function () {
    return {
      pressing: false,
      // The user pressing pointer down
      dragging: false,
      // The user has translated while pointer was down
      isTouchDrag: false,
      // Is the browser firing touch events
      startPointer: null,
      // Where was the mouse when the drag started
      lastPointer: null,
      // Where was the mouse on the last move event
      dragVelocity: null,
      // The px/tick while dragging, negative is rightward
      dragDirectionRatio: null // The ratio of horizontal vs vertical dragging

    };
  },
  // Cleanup listeners
  beforeDestroy: function () {
    window.removeEventListener('mousemove', this.onPointerMove, passive);
    window.removeEventListener('mouseup', this.onPointerUp, passive);
    window.removeEventListener('touchmove', this.onPointerMove, passive);
    window.removeEventListener('touchend', this.onPointerUp, passive);
    return window.removeEventListener('touchmove', this.onWinMove, notPassive);
  },
  computed: {
    // The current slide or page index. It rounds differently depending on the
    // direction of the velocity.  So that it eases to a stop in the direction
    // the user was dragging.
    dragIndex: function () {
      switch (false) {
        // If there is very little velocity, go to the closet page
        case !(Math.abs(this.dragVelocity) <= 2):
          return Math.round(this.fractionalIndex);
        // User was moving forward

        case !(this.dragVelocity < 0):
          return Math.ceil(this.fractionalIndex);

        default:
          // User was moving backward
          return Math.floor(this.fractionalIndex);
      }
    },
    // Determine the current index given the currentX as a fraction. For
    // instance, when dragging forward, it will be like 0.1 and when you've
    // dragged almost a full page, forward it would be 0.9.  This got
    // complicated because the final page may not have a full compliment of
    // slides like if we have 2 per page and 3 slides.  When you have tweened
    // to the 2nd page, the fractionalIndex should be 2 even though you
    // haven't traveled the same width as it took to get from 1 to 2.
    fractionalIndex: function () {
      var distanceIntoPage, isLastPage, pageIndex, pageProgressPercent, pageWidth, remainingSlides, setIndex, slidesPerPage, widthDivisor, x;

      if (!this.trackWidth) {
        return 0;
      } // Work in positive numbers


      x = this.currentX * -1; // Figure out what set we're in, like if, through looping, we've gone
      // through all the pages multiple times.

      setIndex = Math.floor(x / this.trackWidth); // Figure out the index of last page of the set that has been fully
      // scrolled into. Not using modulo for this because I got rounding errors.

      widthDivisor = this.paginateBySlide ? this.slideWidth : this.pageWidth;
      pageIndex = Math.floor((x - setIndex * this.trackWidth) / widthDivisor); // Figure out the progress into the current page

      distanceIntoPage = x - setIndex * this.trackWidth - pageIndex * widthDivisor; // Determine if we're on the last page. If we're not looping, an extra
      // "page" of slides is treated as part of the last page because of how we
      // end with the slides flush with the right edge.

      slidesPerPage = this.currentSlidesPerPage;

      remainingSlides = function () {
        switch (false) {
          case !this.shouldLoop:
            return this.slidesCount - pageIndex * slidesPerPage;

          default:
            return this.slidesCount - (pageIndex + 1) * slidesPerPage;
        }
      }.call(this);

      isLastPage = remainingSlides <= slidesPerPage; // Make a percentage of travel into the page

      pageWidth = isLastPage ? this.lastPageWidth : widthDivisor;
      pageProgressPercent = distanceIntoPage / pageWidth; // Return the final value by adding all the passed index values

      return pageProgressPercent + setIndex * this.pages + pageIndex;
    },
    // Determine if the user is dragging vertically
    isVerticalDrag: function () {
      if (!this.dragDirectionRatio) {
        return;
      }

      return this.dragDirectionRatio < this.verticalDragTreshold;
    },
    // If we're horiztonally swiping on a touch device, prevent vertical scroll
    preventVerticalScroll: function () {
      return this.pressing && this.isTouchDrag && !this.isVerticalDrag;
    }
  },
  watch: {
    // Watch for mouse move changes when the user starts dragging
    pressing: function () {
      var moveEvent, upEvent; // Determine the type of event

      [moveEvent, upEvent] = this.isTouchDrag ? ['touchmove', 'touchend'] : ['mousemove', 'mouseup']; // Pointer is down, start watching for drags

      if (this.pressing) {
        window.addEventListener(moveEvent, this.onPointerMove, passive);
        window.addEventListener(upEvent, this.onPointerUp, passive);
        window.addEventListener('contextmenu', this.onPointerUp, passive);
        this.dragVelocity = 0; // Reset any previous velocity

        this.preventContentDrag();
        this.stopTweening();
      } else {
        // Tween so the track is in bounds if it was out
        // The pointer is up, so tween to final position
        if (this.isOutOfBounds && !this.shouldLoop) {
          if (this.currentX >= 0) {
            this.goto(0);
          } else {
            this.goto(this.pages - 1);
          } // If user was vertically dragging, reset the index

        } else if (this.isVerticalDrag) {
          this.goto(this.index);
        } else {
          // Handle normal swiping
          this.goto(this.dragIndex);
        } // Cleanup vars and listeners


        window.removeEventListener(moveEvent, this.onPointerMove, passive);
        window.removeEventListener(upEvent, this.onPointerUp, passive);
        window.removeEventListener('contextmenu', this.onPointerUp, passive);
        this.dragging = false;
        this.startPointer = this.lastPointer = this.dragDirectionRatio = null;
      } // Fire events


      if (this.pressing) {
        return this.$emit('press');
      } else {
        return this.$emit('release');
      }
    },
    // Fire events related to dragging
    dragging: function () {
      if (this.dragging) {
        return this.$emit('drag:start');
      } else {
        return this.$emit('drag:end');
      }
    },
    // If the user is dragging vertically, end the drag based on the assumption
    // that the user is attempting to scroll the page via touch rather than
    // pan the carousel.
    isVerticalDrag: function () {
      if (!(this.isVerticalDrag && this.isTouchDrag)) {
        return;
      }

      return this.pressing = false;
    },
    // Stop vertical scrolling by listening for touchmove events on the body
    // and cancel them. Need to explicitly set pasive because some mobile
    // browsers set to true by default.
    preventVerticalScroll: function (shouldPrevent) {
      if (shouldPrevent) {
        return window.addEventListener('touchmove', this.stopEvent, notPassive);
      } else {
        return window.removeEventListener('touchmove', this.stopEvent, notPassive);
      }
    }
  },
  methods: {
    // Cancel an Event
    stopEvent: function (e) {
      return e.preventDefault();
    },
    // Keep track of whether user is dragging
    onPointerDown: function (pointerEvent) {
      this.isTouchDrag = typeof TouchEvent !== "undefined" && TouchEvent !== null && pointerEvent instanceof TouchEvent;
      this.startPointer = this.lastPointer = this.getPointerCoords(pointerEvent);
      this.pressing = true;
      return this.usingKeyboard = false;
    },
    // Keep track of release of press
    onPointerUp: function () {
      return this.pressing = false;
    },
    // Keep x values up to date while dragging
    onPointerMove: function (pointerEvent) {
      var pointer;

      if (!this.dragging) {
        // Mark the carousel as dragging, which is used to disable clicks
        this.dragging = true;
      } // Calculated how much drag has happened since the list move


      pointer = this.getPointerCoords(pointerEvent);
      this.dragVelocity = pointer.x - this.lastPointer.x;
      this.targetX += this.dragVelocity;
      this.lastPointer = pointer; // Caculate the drag direction ratio

      this.dragDirectionRatio = Math.abs((pointer.x - this.startPointer.x) / (pointer.y - this.startPointer.y)); // Update the track position

      return this.currentX = this.applyBoundaryDampening(this.targetX);
    },
    // Helper to get the x position of either a touch or mouse event
    getPointerCoords: function (pointerEvent) {
      var ref, ref1, ref2, ref3;
      return {
        x: ((ref = pointerEvent.touches) != null ? (ref1 = ref[0]) != null ? ref1.pageX : void 0 : void 0) || pointerEvent.pageX,
        y: ((ref2 = pointerEvent.touches) != null ? (ref3 = ref2[0]) != null ? ref3.pageY : void 0 : void 0) || pointerEvent.pageY
      };
    },
    // Prevent dragging from exceeding the min/max edges
    applyBoundaryDampening: function (x) {
      switch (false) {
        case !this.shouldLoop:
          return x;
        // Don't apply dampening

        case !(x > 0):
          return Math.pow(x, this.boundaryDampening);

        case !(x < this.endX):
          return this.endX - Math.pow(this.endX - x, this.boundaryDampening);

        default:
          return this.applyXBoundaries(x);
      }
    },
    // Constraint the x value to the min and max values
    applyXBoundaries: function (x) {
      if (this.shouldLoop) {
        return x; // Don't apply boundaries
      } else {
        return Math.max(this.endX, Math.min(0, x));
      }
    },
    // Prevent the anchors and images from being draggable (like via their
    // ghost outlines). Using this approach because the draggable html attribute
    // didn't work in FF.  This only needs to be run once.
    preventContentDrag: function () {
      if (this.contentDragPrevented) {
        return;
      }

      this.$refs.track.$el.querySelectorAll('a, img').forEach(function (el) {
        return el.addEventListener('dragstart', function (e) {
          return e.preventDefault();
        });
      });
      return this.contentDragPrevented = true;
    }
  }
});
// CONCATENATED MODULE: ./src/concerns/feathering.coffee
/*
Code related to implementing feathering effect.
*/
/* harmony default export */ var feathering_coffee = ({
  props: {
    // Shorthand for enabling boolean and setting it's width
    feather: {
      type: Boolean | String | Number,
      default: false
    }
  },
  methods: {
    // Add feathering styles via breakpoint
    makeBreakpointFeatheringStyle: function (breakpoint) {
      var cssValue, feather; // Disable feathering if not enough slides

      if (this.isDisabledAtBreakpoint(breakpoint)) {
        return;
      } // Get feathering amount


      feather = this.getResponsiveValue('feather', breakpoint);

      if (feather === false || feather === null) {
        return;
      }

      if (!(feather && typeof feather !== 'boolean')) {
        feather = 20;
      }

      feather = this.autoUnit(feather); // Make the rule value

      cssValue = `linear-gradient(to right,
	transparent, black ${feather},
	black calc(100% - ${feather}),
	transparent)`; // Write the style, with browser prefixes

      return `${this.scopeSelector} .ssr-carousel-mask {
	-webkit-mask-image: ${cssValue};
	mask-image: ${cssValue};
}`;
    }
  }
});
// CONCATENATED MODULE: ./src/concerns/focus.coffee
/*
Code related to focus and hover state
*/
/* harmony default export */ var focus_coffee = ({
  // Some simple data about our component and window its mounted on
  data: function () {
    return {
      hovered: false,
      windowVisible: true
    };
  },
  computed: {
    isFocused: function () {
      return this.windowVisible && this.hovered;
    },
    windowHidden: function () {
      return !this.windowVisible;
    }
  },
  methods: {
    onEnter: function () {
      return this.hovered = true;
    },
    onLeave: function () {
      return this.hovered = false;
    },
    // Updates @windowVisible based on our document
    updateVisibility: function () {
      return this.windowVisible = !document.hidden;
    }
  },
  // Watch the visibility updates of our document
  mounted: function () {
    if (!this.watchesHover) {
      return;
    }

    return document.addEventListener('visibilitychange', this.updateVisibility);
  },
  beforeDestroy: function () {
    return document.removeEventListener('visibilitychange', this.updateVisibility);
  }
});
// CONCATENATED MODULE: ./src/concerns/gutters.coffee
/*
Code related to the gutters between slides
*/
/* harmony default export */ var gutters_coffee = ({
  props: {
    // The gutters between slides
    gutter: {
      type: Number | String,
      default: 20
    }
  },
  methods: {
    // Apply gutters between slides via margins
    makeBreakpointSlideGutterStyle: function (breakpoint) {
      var gutter, notLastSlide;
      gutter = this.getResponsiveValue('gutter', breakpoint); // If carousel would be disabled for not having enough slides, then remove
      // gutter from last slide.

      notLastSlide = this.isDisabledAtBreakpoint(breakpoint) ? ':not(:last-child)' : ''; // Render styles

      return `${this.scopeSelector} .ssr-carousel-slide${notLastSlide} {
	margin-right: ${this.autoUnit(gutter)};
}`;
    }
  }
});
// CONCATENATED MODULE: ./src/concerns/looping.coffee
/*
Code related to looping / infinite scroll
*/
/* harmony default export */ var looping_coffee = ({
  props: {
    // Add prop to enable looping
    loop: Boolean,
    // Place the first slide in the center of the layout
    center: Boolean
  },
  // Store the slide order indexes
  data: function () {
    return {
      slideOrder: []
    };
  },
  computed: {
    // Disable looping when the user is using keyboard navigation
    shouldLoop: function () {
      return this.loop && !this.usingKeyboard;
    },
    // This represents the current (as in while scrolling / animating) left most
    // slide index. This is used in looping calculation so that the reordering
    // of slides isn't affected by paginatePerSlide setting.
    currentSlideIndex: function () {
      return Math.floor(this.currentX / this.slideWidth * -1);
    },
    // When looping, slides get re-ordered. This value is added to the
    // track transform so that the slides don't feel like they were re-ordered.
    trackLoopOffset: function () {
      var offsetSlideCount;

      if (!this.shouldLoop) {
        return 0;
      }

      offsetSlideCount = this.currentSlideIndex;

      if (this.hasLeftPeekClone) {
        offsetSlideCount -= 1;
      }

      return offsetSlideCount * this.slideWidth;
    },
    // Get slideIndex of the right most and left most slides indexes
    leftMostSlideIndex: function () {
      return this.slideOrder.findIndex(index => {
        return index === 0;
      });
    },
    rightMostSlideIndex: function () {
      return this.slideOrder.findIndex(index => {
        return index === this.slideOrder.length - 1;
      });
    }
  },
  watch: {
    // This represents the current (as in while scrolling / animating) left most
    // slide index. This is used in looping calculation so that the reordering
    // of slides isn't affected by paginatePerSlide setting.
    currentSlideIndex: {
      immediate: true,
      handler: function () {
        return this.setSlideOrder();
      }
    },
    // Also update the slide order when the slides per page changes
    currentSlidesPerPage: function () {
      return this.setSlideOrder();
    }
  },
  methods: {
    // Calculating via watcher to prevent unnecesary recalculations (I noticed a
    // bunch of calls when this was done via a computed property)
    setSlideOrder: function () {
      var count, indices, split; // Make an array as long as the slides count with incrementing values

      indices = [...Array(this.slidesCount).keys()];
      count = indices.length; // Shift the order to applying centering effect

      if (this.center) {
        split = Math.floor(this.currentSlidesPerPage / 2);
        indices = [...indices.slice(split), ...indices.slice(0, split)];
      } // Re-order while looping


      if (this.shouldLoop) {
        split = (count - this.currentSlideIndex) % count;
        indices = [...indices.slice(split), ...indices.slice(0, split)];
      } // Set the new index order


      return this.slideOrder = indices;
    },
    // Reorder the initial slide state using CSS because the order is dependent
    // on the slides per page which isn't known via JS until hydrating
    makeBreakpointSlideOrderStyle: function (breakpoint) {
      var i, rules, slidesPerPage, split;

      if (!this.center) {
        return;
      }

      slidesPerPage = this.getResponsiveValue('slidesPerPage', breakpoint);
      split = Math.floor(slidesPerPage / 2);

      rules = function () {
        var j, ref, results;
        results = [];

        for (i = j = 0, ref = this.slidesCount; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
          results.push(`${this.scopeSelector} .ssr-carousel-slide:nth-child(${i + 1}) {
	order: ${(i + split) % this.slidesCount};
}`);
        }

        return results;
      }.call(this);

      return rules.join('');
    }
  }
});
// CONCATENATED MODULE: ./src/concerns/pagination.coffee
/*
Code related to dealing with advancing between pages
*/
/* harmony default export */ var pagination_coffee = ({
  props: {
    // If true, advance whole pages when navigating
    paginateBySlide: Boolean
  },
  data: function () {
    return {
      index: 0,
      // The current page; when looping may exceed slideCount
      currentX: 0,
      // The actual left offset of the slides container
      targetX: 0 // Where we may be tweening the slide to

    };
  },
  computed: {
    // The current number of pages
    pages: function () {
      switch (false) {
        // When looping and paginating per slide, make a dot per slide
        case !(this.paginateBySlide && this.shouldLoop):
          return this.slidesCount;
        // Else, restrict pages so you the last slide is flush with right edge

        case !this.paginateBySlide:
          return this.slidesCount - this.currentSlidesPerPage + 1;

        default:
          // When not paginating by slide, the amount of pages is related to the
          // current number of slides shown per page.
          return Math.ceil(this.slidesCount / this.currentSlidesPerPage);
      }
    },
    // Disable carousel-ness when there aren't enough slides
    disabled: function () {
      return this.slidesCount <= this.currentSlidesPerPage;
    },
    // Get just the slotted slides that are components, ignoring text nodes
    // which may exist as a result of whitespace
    slides: function () {
      return (this.$slots.default || []).filter(function (vnode) {
        return !vnode.text;
      });
    },
    // Get the total number of slides
    slidesCount: function () {
      return this.slides.length;
    },
    // Apply boundaries to the index, which will exceed them when looping
    boundedIndex: function () {
      return Math.abs(this.index) % this.pages;
    },
    // The current incomplete page offset
    currentIncompletePageOffset: function () {
      return this.makeIncompletePageOffset(this.index);
    },
    // Get an array of slide offsets of the slides that are 100% in the
    // viewport. Aka, the count will be equal the currentSlidesPerPage per page.
    activeSlides: function () {
      var ref, start; // Get the offset of the leftmost slide in the current viewport

      start = this.paginateBySlide ? this.boundedIndex : this.boundedIndex * this.currentSlidesPerPage; // Adjust the start if not looping and on the last page of slides and there
      // aren't enough slides to make a full page

      if (!this.shouldLoop) {
        start -= this.boundedIndex % this.currentSlidesPerPage;
      }

      return function () {
        var results = [];

        for (var i = start, ref = start + this.currentSlidesPerPage; start <= ref ? i < ref : i > ref; start <= ref ? i++ : i--) {
          results.push(i);
        }

        return results;
      }.apply(this).reduce((slides, offset) => {
        // When looping, use modulo to loop back around
        if (this.shouldLoop) {
          slides.push(offset % this.slidesCount); // Else, cap the offset to the last slide
        } else if (offset < this.slidesCount) {
          slides.push(offset);
        } // Return updated slides


        return slides;
      }, []);
    }
  },
  watch: {
    // Emit events on index change
    boundedIndex: function () {
      return this.$emit('change', {
        index: this.boundedIndex
      });
    }
  },
  methods: {
    // Advance methods
    next: function () {
      return this.goto(this.index + 1);
    },
    back: function () {
      return this.goto(this.index - 1);
    },
    // The dots are ignorant of looping, so convert their bounded index to the
    // true index so we don't animate through a ton of pages going to the
    // clicked dot.
    gotoDot: function (dotIndex) {
      return this.goto(dotIndex - this.boundedIndex + this.index);
    },
    // Go to a specific index
    goto: function (index) {
      this.index = this.applyIndexBoundaries(index);
      return this.tweenToIndex(this.index);
    },
    // Tween to a specific index
    tweenToIndex: function (index) {
      var x; // Figure out the new x position

      x = this.paginateBySlide ? index * this.slideWidth * -1 : index * this.pageWidth * -1; // Apply adjustments to x value and persist

      x += this.makeIncompletePageOffset(index);
      this.targetX = this.applyXBoundaries(x); // Start tweening

      return this.startTweening();
    },
    // Creates a px value to represent adjustments that should be made to
    // account for incommplete pages of slides when looping is enabled. Like
    // when there is 3 slotted slides and 2 slides per page and you have looped
    // over to the 2nd page index of 0. The track needs to be shifted to the
    // left by one slideWidth in this case.
    makeIncompletePageOffset: function (index) {
      var incompleteWidth;

      if (!(this.shouldLoop && !this.paginateBySlide)) {
        return 0;
      }

      incompleteWidth = this.pageWidth - this.lastPageWidth;
      return Math.floor(index / this.pages) * incompleteWidth;
    },
    // Apply boundaries to the index
    applyIndexBoundaries: function (index) {
      if (this.shouldLoop) {
        return index;
      } else {
        return Math.max(0, Math.min(this.pages - 1, index));
      }
    }
  }
});
// CONCATENATED MODULE: ./src/concerns/peeking.coffee
/*
Code related to allowing edge slides to peek in from the side, including empty
gutter space.
*/
/* harmony default export */ var peeking_coffee = ({
  props: {
    // Use gutter's as the peeking value
    peekGutter: Boolean,
    // Set both peeking values at once
    peek: {
      type: Number | String,
      default: function () {
        // Prevent subpixel rounding issues from causing a sliver of offscreen
        // slide from peaking in.
        if (!this.peekGutter) {
          return 0;
        } else {
          return `calc(${this.gutter} - 1px)`;
        }
      }
    },
    // Distinct left/right peeking values
    peekLeft: {
      type: Number | String,
      default: function () {
        return this.peek;
      }
    },
    peekRight: {
      type: Number | String,
      default: function () {
        return this.peek;
      }
    },
    // When true, the peekLeft is used for the peekRight if the carousel is
    // disabled.  This behavior is expecting that there may be a different
    // peekRight (to hint at additional slides) but when there aren't more slide
    // to peek in, the peek value should functional like padding.
    matchPeekWhenDisabled: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      // Store clones of the slides used for peeking
      clones: [],
      // Store computed peek values
      peekLeftPx: 0,
      peekRightPx: 0
    };
  },
  computed: {
    // Determine if clones should be created
    hasPeekClones: function () {
      return this.hasLeftPeekClone || this.hasRightPeekClone;
    },
    hasPeekPrerequisites: function () {
      return this.shouldLoop && this.slidesCount > 1;
    },
    hasLeftPeekClone: function () {
      return this.hasPeekPrerequisites && this.peekLeft;
    },
    hasRightPeekClone: function () {
      return this.hasPeekPrerequisites && this.peekRight;
    },
    // Figure out which slide indexes to show in the left and right peek slots
    leftPeekingSlideIndex: function () {
      if (this.hasLeftPeekClone) {
        return this.rightMostSlideIndex;
      }
    },
    rightPeekingSlideIndex: function () {
      if (this.hasRightPeekClone) {
        return this.leftMostSlideIndex;
      }
    },
    // Combine the peeking values, which is needed commonly
    combinedPeek: function () {
      return this.peekLeftPx + this.peekRightPx;
    },
    // Make the styles object for reading computed styles
    peekStyles: function () {
      var breakpoint;
      breakpoint = this.currentResponsiveBreakpoint;
      return {
        left: this.autoUnit(this.getResponsiveValue('peekLeft', breakpoint)),
        right: this.autoUnit(this.getResponsiveValue('peekRight', breakpoint))
      };
    }
  },
  methods: {
    // Capture measurements of peeking values
    capturePeekingMeasurements: function () {
      if (!this.$refs.peekValues) {
        return;
      }

      return this.$nextTick(function () {
        // Wait for getResponsiveValue on @peekStyles
        var styles;
        styles = getComputedStyle(this.$refs.peekValues);
        this.peekLeftPx = parseInt(styles.left);
        return this.peekRightPx = parseInt(styles.right);
      });
    },
    // Calculate the offset that gets added to the current position to account
    // for prepended slides from peeking. This replicates the JS required to
    // make `trackLoopOffset` using CSS only so there is now reflow when JS
    // hydrates.  This gets overridden by the track's inline translateX style.
    makeBreakpointTrackTransformStyle: function (breakpoint) {
      var gutter, peekLeft, rule;

      if (this.isDisabledAtBreakpoint(breakpoint)) {
        return;
      }

      peekLeft = this.getResponsiveValue('peekLeft', breakpoint); // If no peeking slide, just add the offset

      rule = !this.hasLeftPeekClone ? `transform: translateX(${// Otherwise, offset by one slide width (including it's gutter)
      this.autoUnit(peekLeft)});` : (gutter = this.getResponsiveValue('gutter', breakpoint), `transform: translateX(calc( ${this.autoUnit(peekLeft)} - (${this.makeSlideWidthCalc(breakpoint)} + ${this.autoUnit(gutter)}) ));`); // Wrap rule in selector

      return `${this.scopeSelector} .ssr-carousel-track { ${rule} }`;
    }
  }
});
// CONCATENATED MODULE: ./src/concerns/responsive.coffee
/*
Code related to changing the slides per page at different viewport widths
*/
/* harmony default export */ var responsive_coffee = ({
  props: {
    // How many slides are visible at once in the viewport if no responsive
    // rules apply
    slidesPerPage: {
      type: Number,
      default: 1
    },
    // Provide different slides per page at different viewport widths
    responsive: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  computed: {
    // Make the css scopeId from things that can influence the styles, like the
    // slides count and props.
    scopeId: function () {
      return this.hashString(this.slidesCount + '|' + JSON.stringify(this.$props));
    },
    // Massage media queries into the responsive prop
    responsiveRules: function () {
      return this.responsive.map(breakpoint => {
        return { ...breakpoint,
          mediaQuery: this.makeMediaQuery(breakpoint),
          active: this.isBreakpointActive(breakpoint)
        };
      });
    },
    // Get current responsive values
    currentSlidesPerPage: function () {
      return this.getResponsiveValue('slidesPerPage', this.currentResponsiveBreakpoint);
    },
    // Get the current responsive rule by looping backwards through the
    // responsiveRules to return the last matching rule.
    currentResponsiveBreakpoint: function () {
      var match;

      if (match = [...this.responsiveRules].reverse().find(function ({
        active
      }) {
        return active;
      })) {
        return match; // Return the matching rule
        // Defaults
      } else {
        return {
          slidesPerPage: this.slidesPerPage,
          gutter: this.gutter,
          peekLeft: this.peekLeft,
          peekRight: this.peekRight,
          feather: this.feather
        };
      }
    },
    // Make the scoping selecotr
    scopeSelector: function () {
      return `[data-ssrc-id='${this.scopeId}']`;
    },
    // Assemble all the dynamic instance styles
    instanceStyles: function () {
      return this.makeBreakpointStyles(this.$props) + this.responsiveRules.map(breakpoint => {
        return `@media ${breakpoint.mediaQuery} { ${this.makeBreakpointStyles(breakpoint)} }`;
      }).join(' ');
    }
  },
  watch: {
    // Fix alignment of slides while resizing
    pageWidth: function () {
      return this.tweenToIndex(this.index);
    },
    // If resizing the browser leads to disabling, reset the slide to the first
    // page.  Like if a user had switched to the 2nd page on mobile and then
    // resized to desktop
    disabled: function () {
      if (this.disabled) {
        return this.goto(0);
      }
    }
  },
  methods: {
    // Take an item form the responsive array and make a media query from it
    makeMediaQuery: function (breakpoint) {
      var rules;
      rules = [];

      if (breakpoint.maxWidth) {
        rules.push(`(max-width: ${breakpoint.maxWidth}px)`);
      }

      if (breakpoint.minWidth) {
        rules.push(`(min-width: ${breakpoint.minWidth}px)`);
      }

      return rules.join(' and ');
    },
    // Make the block of styles for a breakpoint
    makeBreakpointStyles: function (breakpoint) {
      return [this.makeBreakpointDisablingRules(breakpoint), this.makeBreakpointFeatheringStyle(breakpoint), this.makeBreakpointTrackTransformStyle(breakpoint), this.makeBreakpointSlideWidthStyle(breakpoint), this.makeBreakpointSlideGutterStyle(breakpoint), this.makeBreakpointSlideOrderStyle(breakpoint)].join(' ');
    },
    // Apply disabling styles via breakpoint when there are not enough slides
    // for the slidesPerPage
    makeBreakpointDisablingRules: function (breakpoint) {
      var slidesPerPage;
      slidesPerPage = this.getResponsiveValue('slidesPerPage', breakpoint); // Disabled, center slides and hide carousel UI

      if (this.slidesCount <= slidesPerPage) {
        return `${this.scopeSelector} .ssr-carousel-track { justify-content: center; }
${this.scopeSelector} .ssr-carousel-arrows,
${this.scopeSelector} .ssr-carousel-dots { display: none; }`;
      } else {
        // Enabled, restore default styles
        return `${this.scopeSelector} .ssr-carousel-track { justify-content: start; }
${this.scopeSelector} .ssr-carousel-arrows { display: block; }
${this.scopeSelector} .ssr-carousel-dots { display: flex; }`;
      }
    },
    // Check if carousel disabled at the breakpoint
    isDisabledAtBreakpoint: function (breakpoint) {
      var slidesPerPage;
      slidesPerPage = this.getResponsiveValue('slidesPerPage', breakpoint);
      return this.slidesCount <= slidesPerPage;
    },
    // Check if a breakpoint would apply currently. Not using window.matchQuery
    // so I can consume via a compued property
    isBreakpointActive: function (breakpoint) {
      var val;

      switch (false) {
        case !!this.viewportWidth:
          return false;

        case !((val = breakpoint.maxWidth) && this.viewportWidth > val):
          return false;

        case !((val = breakpoint.minWidth) && this.viewportWidth < val):
          return false;

        default:
          return true;
      }
    },
    // Find the first breakpoint with a property set
    getResponsiveValue: function (property, breakpoint) {
      var ruleMatch, val;

      if ((val = breakpoint[property]) != null) {
        // If this breakpoint has a value, use it
        return val;
      }

      if (!this.responsiveRules.length) {
        // If no responsive rules, use default
        return this[property];
      } // Check responsive rules to see if any of them contain a value for the
      // property


      ruleMatch = this.responsiveRules.find(function (rule) {
        // Rule must contain this property
        if (!rule[property]) {
          return;
        }

        if (breakpoint.maxWidth && rule.minWidth && rule.minWidth < breakpoint.maxWidth) {
          // Match if rule's min-width is less than the target max-width
          return true;
        }

        if (breakpoint.maxWidth && rule.maxWidth && rule.maxWidth < breakpoint.maxWidth) {
          // Match if rule's max-width is less than the target max-width
          return true;
        }

        if (breakpoint.minWidth && rule.minWidth && rule.minWidth > breakpoint.minWidth) {
          // Match if rule's min-width is greater than the target min-width
          return true;
        }

        if (breakpoint.minWidth && rule.maxWidth && rule.minWidth > breakpoint.minWidth) {
          // Match if rule's max-width is greater than the target min-width
          return true;
        }
      }); // Return matching property or fallback to the main component prop

      if (ruleMatch) {
        return ruleMatch[property];
      } else {
        return this[property];
      }
    },
    // Make a hash from a string, adapted from:
    // https://stackoverflow.com/a/33647870/59160
    hashString: function (str) {
      var hash, i, len;
      hash = 0;
      i = 0;
      len = str.length;

      while (i < len) {
        hash = (hash << 5) - hash + str.charCodeAt(i++) << 0;
      }

      return hash.toString(36);
    },
    // Add px unit to a value if numeric
    autoUnit: function (val) {
      if (!val) {
        return '0px';
      }

      if (String(val).match(/^[\d\-\.]+$/)) {
        return `${val}px`;
      } else {
        return val;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/concerns/tweening.coffee
/*
Code related to tweening the position of the track
*/
/* harmony default export */ var tweening_coffee = ({
  props: {
    // How quickly the carousel slides to a stop. Increase to tween to as stop
    // quicker.
    tweenDampening: {
      type: Number,
      default: 0.12
    }
  },
  data: function () {
    return {
      currentX: 0,
      // The actual left offset of the slides container
      targetX: 0,
      // Where we may be tweening the slide to
      tweening: false // If there is a current RAF based tween running

    };
  },
  // Stop any animations that are in flight
  beforeDestroy: function () {
    return window.cancelAnimationFrame(this.rafId);
  },
  watch: {
    // Start RAF based tweener
    tweening: function () {
      if (this.tweening) {
        this.$emit('tween:start', {
          index: this.index
        });
        return this.tweenToTarget();
      } else {
        window.cancelAnimationFrame(this.rafId);
        return this.$emit('tween:end', {
          index: this.index
        });
      }
    }
  },
  methods: {
    // Start tweening to target location if necessary and if not already
    // tweening
    startTweening: function () {
      if (this.tweening) {
        return;
      }

      if (this.currentX === this.targetX) {
        return;
      }

      return this.tweening = true;
    },
    // The watcher on this will kill active tweens
    stopTweening: function () {
      return this.tweening = false;
    },
    // Tween the currentX to the targetX
    tweenToTarget: function () {
      this.currentX = this.currentX + (this.targetX - this.currentX) * this.tweenDampening;

      if (Math.abs(this.targetX - this.currentX) < 1) {
        // Stops tweening
        this.currentX = this.targetX;
        return this.tweening = false;
      } else {
        return this.rafId = window.requestAnimationFrame(this.tweenToTarget);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/coffee-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ssr-carousel.vue?vue&type=script&lang=coffee&
// Child components















/* harmony default export */ var ssr_carouselvue_type_script_lang_coffee_ = ({
  // Component definition
  name: 'SsrCarousel',
  // Load concerns
  mixins: [accessibility_coffee, autoplay_coffee, dimensions_coffee, dragging_coffee, feathering_coffee, focus_coffee, gutters_coffee, looping_coffee, pagination_coffee, responsive_coffee, peeking_coffee, // After `responsive` so prop can access `gutter` prop
  tweening_coffee],
  components: {
    SsrCarouselArrows: ssr_carousel_arrows,
    SsrCarouselDots: ssr_carousel_dots,
    SsrCarouselTrack: ssr_carousel_track
  },
  props: {
    // UI enabling controls
    showArrows: Boolean,
    showDots: Boolean
  },
  computed: {
    // Combine the different factors that come together to determine the x
    // transfrom of the track.  We don't return a value until the carousel
    // width is measured since the calculation depends on that.
    trackTranslateX: function () {
      if (!(this.carouselWidth && !this.disabled)) {
        return;
      }

      return this.currentX + this.trackLoopOffset + this.peekLeftPx; // The value from tweening or dragging // Offset from re-ordering slides for looping // Offset slides for the left peek
    },
    // Determine whether to create hover event bindings
    watchesHover: function () {
      return this.autoplayDelay > 0;
    },
    // Create event bindings
    maskListeners: function () {
      if (this.disabled) {
        return {};
      }

      return {
        mousedown: this.onPointerDown,
        touchstart: this.onPointerDown,
        ...(!this.watchesHover ? {} : {
          mouseenter: this.onEnter,
          mouseleave: this.onLeave
        })
      };
    }
  }
});
// CONCATENATED MODULE: ./src/ssr-carousel.vue?vue&type=script&lang=coffee&
 /* harmony default export */ var src_ssr_carouselvue_type_script_lang_coffee_ = (ssr_carouselvue_type_script_lang_coffee_); 
// EXTERNAL MODULE: ./src/ssr-carousel.vue?vue&type=style&index=0&lang=stylus&
var ssr_carouselvue_type_style_index_0_lang_stylus_ = __webpack_require__(8);

// CONCATENATED MODULE: ./src/ssr-carousel.vue






/* normalize component */

var ssr_carousel_component = normalizeComponent(
  src_ssr_carouselvue_type_script_lang_coffee_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var ssr_carousel_api; }
ssr_carousel_component.options.__file = "src/ssr-carousel.vue"
/* harmony default export */ var ssr_carousel = __webpack_exports__["default"] = (ssr_carousel_component.exports);

/***/ })
/******/ ]);