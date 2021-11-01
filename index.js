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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("lodash/throttle");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_arrows_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_arrows_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_arrows_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_dots_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_dots_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_dots_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_slide_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_slide_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_slide_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_track_vue_vue_type_style_index_0_id_6cccbed2_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_track_vue_vue_type_style_index_0_id_6cccbed2_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_track_vue_vue_type_style_index_0_id_6cccbed2_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ssr_carousel_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ssr-carousel.vue?vue&type=template&id=b31a94d8&lang=pug&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ssr-carousel", attrs: { "data-ssrc-id": _vm.scopeId } },
    [
      _c("style", {
        tag: "component",
        domProps: { innerHTML: _vm._s(_vm.instanceStyles) },
      }),
      _c(
        "div",
        _vm._g(
          {
            staticClass: "ssr-carousel-mask",
            class: { pressing: _vm.pressing, disabled: _vm.disabled },
          },
          _vm.disabled
            ? {}
            : {
                mousedown: _vm.onPointerDown,
                touchstart: _vm.onPointerDown,
              }
        ),
        [
          _c(
            "ssr-carousel-track",
            _vm._b(
              { ref: "track" },
              "ssr-carousel-track",
              { dragging: _vm.dragging, currentX: _vm.currentX },
              false
            ),
            [_vm._t("default")],
            2
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
                          fn: function () {
                            return [_vm._t("back-arrow")]
                          },
                          proxy: true,
                        },
                        {
                          key: "next",
                          fn: function () {
                            return [_vm._t("next-arrow")]
                          },
                          proxy: true,
                        },
                      ],
                      null,
                      true
                    ),
                  },
                  "ssr-carousel-arrows",
                  { index: _vm.index, pages: _vm.pages },
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
                on: { goto: _vm.goto },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "dot",
                      fn: function () {
                        return [_vm._t("dot")]
                      },
                      proxy: true,
                    },
                  ],
                  null,
                  true
                ),
              },
              "ssr-carousel-dots",
              { index: _vm.index, pages: _vm.pages },
              false
            )
          )
        : _vm._e(),
    ],
    1
  )
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
        _vm.$slots.back
          ? _vm._t("back")
          : _c("span", { staticClass: "ssr-carousel-back-icon" }),
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
        _vm.$slots.next
          ? _vm._t("next")
          : _c("span", { staticClass: "ssr-carousel-next-icon" }),
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
    pages: Number
  },
  computed: {
    // Determine if button should be disabled because we're at the limits
    backDisabled: function () {
      return this.index === 0;
    },
    nextDisabled: function () {
      return this.index === this.pages - 1;
    }
  }
});
// CONCATENATED MODULE: ./src/ssr-carousel-arrows.vue?vue&type=script&lang=coffee&
 /* harmony default export */ var src_ssr_carousel_arrowsvue_type_script_lang_coffee_ = (ssr_carousel_arrowsvue_type_script_lang_coffee_); 
// EXTERNAL MODULE: ./src/ssr-carousel-arrows.vue?vue&type=style&index=0&lang=stylus&
var ssr_carousel_arrowsvue_type_style_index_0_lang_stylus_ = __webpack_require__(6);

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
          attrs: { "aria-label": "Page " + i, disabled: _vm.index == i - 1 },
          on: {
            click: function ($event) {
              return _vm.$emit("goto", i - 1)
            },
          },
        },
        [
          _vm.$slots.dot
            ? _vm._t("dot")
            : _c("span", { staticClass: "ssr-carousel-dot-icon" }),
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
    index: Number,
    pages: Number
  }
});
// CONCATENATED MODULE: ./src/ssr-carousel-dots.vue?vue&type=script&lang=coffee&
 /* harmony default export */ var src_ssr_carousel_dotsvue_type_script_lang_coffee_ = (ssr_carousel_dotsvue_type_script_lang_coffee_); 
// EXTERNAL MODULE: ./src/ssr-carousel-dots.vue?vue&type=style&index=0&lang=stylus&
var ssr_carousel_dotsvue_type_style_index_0_lang_stylus_ = __webpack_require__(7);

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/coffee-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ssr-carousel-slide.vue?vue&type=script&lang=coffee&
var addStaticClass;
/* harmony default export */ var ssr_carousel_slidevue_type_script_lang_coffee_ = ({
  name: 'SsrCarouselSlide',
  functional: true,
  render: function (create, {
    children
  }) {
    var slide; // Get at the slide vnode

    slide = children[0]; // If the slide is a component, the data may need to be set in asyncMeta.
    // Otherwise, it's set on the slide itself

    if (slide.asyncMeta) {
      addStaticClass(slide.asyncMeta, 'ssr-carousel-slide');
    } else {
      addStaticClass(slide, 'ssr-carousel-slide');
    } // Return the slotted slide


    return slide;
  }
}); // Add a static class to an object, mutating it

addStaticClass = function (obj, klass) {
  if (!obj.data) {
    obj.data = {};
  }

  if (!obj.data.staticClass) {
    obj.data.staticClass = '';
  }

  if (obj.data.staticClass.indexOf(klass) === -1) {
    obj.data.staticClass += ' ' + klass;
    return obj.data.staticClass = obj.data.staticClass.trim();
  }
};
// CONCATENATED MODULE: ./src/ssr-carousel-slide.vue?vue&type=script&lang=coffee&
 /* harmony default export */ var src_ssr_carousel_slidevue_type_script_lang_coffee_ = (ssr_carousel_slidevue_type_script_lang_coffee_); 
// EXTERNAL MODULE: ./src/ssr-carousel-slide.vue?vue&type=style&index=0&lang=stylus&
var ssr_carousel_slidevue_type_style_index_0_lang_stylus_ = __webpack_require__(8);

// CONCATENATED MODULE: ./src/ssr-carousel-slide.vue
var ssr_carousel_slide_render, ssr_carousel_slide_staticRenderFns





/* normalize component */

var ssr_carousel_slide_component = normalizeComponent(
  src_ssr_carousel_slidevue_type_script_lang_coffee_,
  ssr_carousel_slide_render,
  ssr_carousel_slide_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var ssr_carousel_slide_api; }
ssr_carousel_slide_component.options.__file = "src/ssr-carousel-slide.vue"
/* harmony default export */ var ssr_carousel_slide = (ssr_carousel_slide_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/coffee-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ssr-carousel-track.vue?vue&type=script&lang=coffee&

/* harmony default export */ var ssr_carousel_trackvue_type_script_lang_coffee_ = ({
  components: {
    SsrCarouselSlide: ssr_carousel_slide
  },
  props: {
    dragging: Boolean,
    currentX: Number
  },
  computed: {
    // Styles that are used to position the track
    styles: function () {
      return {
        transform: `translateX(${this.currentX}px)`
      };
    }
  },
  // Render the track and slotted slides
  render: function (create) {
    var children; // Wrap the slides in ssr-carousel-slide functional components

    children = this.$slots.default.map(function (child) {
      if (child.text) {
        return child; // Text nodes like newlines
      } else {
        return create(ssr_carousel_slide, {
          parent: this
        }, [child]);
      }
    }); // Create the track div

    return create('div', {
      class: ['ssr-carousel-track', {
        dragging: this.dragging
      }],
      style: this.styles
    }, children);
  }
});
// CONCATENATED MODULE: ./src/ssr-carousel-track.vue?vue&type=script&lang=coffee&
 /* harmony default export */ var src_ssr_carousel_trackvue_type_script_lang_coffee_ = (ssr_carousel_trackvue_type_script_lang_coffee_); 
// EXTERNAL MODULE: ./src/ssr-carousel-track.vue?vue&type=style&index=0&id=6cccbed2&lang=stylus&scoped=true&
var ssr_carousel_trackvue_type_style_index_0_id_6cccbed2_lang_stylus_scoped_true_ = __webpack_require__(9);

// CONCATENATED MODULE: ./src/ssr-carousel-track.vue
var ssr_carousel_track_render, ssr_carousel_track_staticRenderFns





/* normalize component */

var ssr_carousel_track_component = normalizeComponent(
  src_ssr_carousel_trackvue_type_script_lang_coffee_,
  ssr_carousel_track_render,
  ssr_carousel_track_staticRenderFns,
  false,
  null,
  "6cccbed2",
  null
  
)

/* hot reload */
if (false) { var ssr_carousel_track_api; }
ssr_carousel_track_component.options.__file = "src/ssr-carousel-track.vue"
/* harmony default export */ var ssr_carousel_track = (ssr_carousel_track_component.exports);
// CONCATENATED MODULE: ./src/concerns/dragging.coffee
/*
Code related to handling dragging of the track
*/
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
      lastPointerX: null,
      // Where was the mouse when the drag started
      dragVelocity: null // The px/tick while dragging, negative is rightward

    };
  },
  // Cleanup listeners
  beforeDestroy: function () {
    window.removeEventListener('mousemove', this.onPointerMove);
    window.removeEventListener('mouseup', this.onPointerUp);
    window.removeEventListener('touchmove', this.onPointerMove);
    return window.removeEventListener('touchend', this.onPointerUp);
  },
  computed: {
    // The current slide or page index. It rounds differently depedning on the
    // direction of the velocity.  So that it eases to a stop in the direction
    // the user was dragging
    dragIndex: function () {
      var fractionalIndex;
      fractionalIndex = Math.abs(this.paginateBySlide ? this.currentX / this.slideWidth : this.currentX / this.pageWidth);

      switch (false) {
        // If there is very little velocity, go to the closet page
        case !(Math.abs(this.dragVelocity) <= 2):
          return Math.round(fractionalIndex);
        // User was moving forward

        case !(this.dragVelocity < 0):
          return Math.ceil(fractionalIndex);

        default:
          // User was moving backward
          return Math.floor(fractionalIndex);
      }
    },
    // Calculate the width of a slide
    slideWidth: function () {
      return this.pageWidth / this.currentSlidesPerPage;
    },
    // Calculate the width of the track
    trackWidth: function () {
      return this.slideWidth * this.slidesCount;
    },
    // The ending x value
    endX: function () {
      if (this.disabled) {
        return 0;
      } else {
        return this.pageWidth - this.trackWidth;
      }
    },
    // Check if the drag is currently out bounds
    isOutOfBounds: function () {
      return this.currentX > 0 || this.currentX < this.endX;
    }
  },
  watch: {
    // Watch for mouse move changes when the user starts dragging
    pressing: function () {
      var moveEvent, upEvent; // Determine the type of event

      [moveEvent, upEvent] = this.isTouchDrag ? ['touchmove', 'touchend'] : ['mousemove', 'mouseup']; // Pointer is down, start watching for drags

      if (this.pressing) {
        window.addEventListener(moveEvent, this.onPointerMove);
        window.addEventListener(upEvent, this.onPointerUp);
        this.dragVelocity = 0; // Reset any previous velocity

        this.preventContentDrag();
        return this.stopTweening();
      } else {
        // The pointer is up, clear drag listeners and cleanup
        window.removeEventListener(moveEvent, this.onPointerMove);
        window.removeEventListener(upEvent, this.onPointerUp);
        this.dragging = false; // Tween so the track is in bounds if it was out

        if (this.isOutOfBounds) {
          this.targetX = this.applyXBoundaries(this.currentX);
          return this.startTweening();
        } else {
          // Handle normal swiping
          return this.goto(this.dragIndex);
        }
      }
    }
  },
  methods: {
    // Keep track of whether user is dragging
    onPointerDown: function (pointerEvent) {
      this.isTouchDrag = pointerEvent instanceof TouchEvent;
      this.lastPointerX = this.getPointerX(pointerEvent);
      this.pressing = true;
      return pointerEvent.preventDefault(); // If browser fires touch and mouse events
    },
    onPointerUp: function () {
      return this.pressing = false;
    },
    // Keep x values up to date while dragging
    onPointerMove: function (pointerEvent) {
      var pointerX;

      if (!this.dragging) {
        // Mark the carousel as dragging, which is used to disable clicks
        this.dragging = true;
      } // Calculated how much drag has happened since the list move


      pointerX = this.getPointerX(pointerEvent);
      this.dragVelocity = pointerX - this.lastPointerX;
      this.targetX += this.dragVelocity;
      this.lastPointerX = pointerX; // Update the track position

      return this.currentX = this.applyBoundaryDampening(this.targetX);
    },
    // Helper to get the x position of either a touch or mouse event
    getPointerX: function (pointerEvent) {
      var ref, ref1;
      return ((ref = pointerEvent.touches) != null ? (ref1 = ref[0]) != null ? ref1.pageX : void 0 : void 0) || pointerEvent.pageX;
    },
    // Prevent dragging from exceeding the min/max edges
    applyBoundaryDampening: function (x) {
      switch (false) {
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
      return Math.max(this.endX, Math.min(0, x));
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
      // The current page
      currentX: 0,
      // The actual left offset of the slides container
      targetX: 0 // Where we may be tweening the slide to

    };
  },
  computed: {
    // The current number of pages
    pages: function () {
      if (this.paginateBySlide) {
        return Math.max(1, this.slidesCount - this.currentSlidesPerPage);
      } else {
        return Math.ceil(this.slidesCount / this.currentSlidesPerPage);
      }
    },
    // Disable carousel-ness when there aren't enough slides
    disabled: function () {
      return this.slidesCount <= this.currentSlidesPerPage;
    },
    // Filter out slides that have a "text" property, these aren't actual
    // elements. They are whitespace, like newlines.
    slidesCount: function () {
      return (this.$slots.default || []).filter(function (vnode) {
        return !(vnode != null ? vnode.text : void 0);
      }).length;
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
    // Go to a specific index
    goto: function (index) {
      this.index = this.applyIndexBoundaries(index);
      return this.tweenToIndex(this.index);
    },
    // Tween to a specific index
    tweenToIndex: function (index) {
      var x;
      x = this.paginateBySlide ? index * this.slideWidth : index * this.pageWidth;
      this.targetX = this.applyXBoundaries(-1 * x);
      return this.startTweening();
    },
    // Apply boundaries to the index
    applyIndexBoundaries: function (index) {
      return Math.max(0, Math.min(this.pages - 1, index));
    }
  }
});
// EXTERNAL MODULE: external "lodash/throttle"
var throttle_ = __webpack_require__(5);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle_);

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
    // The gutters between slides
    gutter: {
      type: Number | String,
      default: 20
    },
    // Provide different slides per page at different viewport widths
    responsive: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  data: function () {
    return {
      viewportWidth: null,
      // Width of the viewport, for media query calculation
      pageWidth: null,
      // Width of a page of slides (and the carousel container)
      gutterWidth: 0,
      // Computed width of gutters, since they support css vars
      scopeId: null // CSS class uses to scope styles to the instance

    };
  },
  // Generate the scoping class during SSR
  fetch: function () {
    return this.scopeId = this.makeScopeId();
  },
  mounted: function () {
    if (!this.scopeId) {
      // If no scopeId found (like because not running in Nuxt environment),
      // generate the scopeId
      this.scopeId = this.makeScopeId();
    } // Add resize listening


    this.onResize();
    this.onResizeThrottled = throttle_default()(this.onResize, 200);
    return window.addEventListener('resize', this.onResizeThrottled);
  },
  // Cleanup listeners
  beforeDestroy: function () {
    return window.removeEventListener('resize', this.onResizeThrottled);
  },
  computed: {
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
      } else {
        return {
          slidesPerPage: this.slidesPerPage,
          gutter: this.gutter
        }; // Else return defaults
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
      this.pageWidth = this.$el.getBoundingClientRect().width + this.gutterWidth;
      return this.viewportWidth = window.innerWidth;
    },
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
      return `${this.makeBreakpointDisablingRules(breakpoint)}
${this.scopeSelector} .ssr-carousel-slide {
	${this.makeBreakpointWidthStyle(breakpoint)}
}
${this.scopeSelector} .ssr-carousel-slide:not(:last-child) {
	${this.makeBreakpointMarginStyle(breakpoint) || ''}
}`;
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
    // Make the flex-basis style that gives a slide it's width given
    // slidesPerPage. Reduce this width by the gutter if present
    makeBreakpointWidthStyle: function (breakpoint) {
      var gutter, slidesPerPage, widthPercentage; // Collect responsive values

      slidesPerPage = this.getResponsiveValue('slidesPerPage', breakpoint);
      gutter = this.getResponsiveValue('gutter', breakpoint); // If there is no gutter, then width is simply a percentage

      widthPercentage = 100 / slidesPerPage;

      if (!gutter) {
        return `flex-basis: ${widthPercentage}%;`;
      } else {
        // Otherwise use a calc to adjust to accomodate gutter
        return `flex-basis: calc( ${widthPercentage}% - ${this.autoUnit(gutter)} * ${slidesPerPage - 1} / ${slidesPerPage});`;
      }
    },
    // Apply gutters between slides via margins
    makeBreakpointMarginStyle: function (breakpoint) {
      var gutter;
      gutter = this.getResponsiveValue('gutter', breakpoint);
      return `margin-right: ${this.autoUnit(gutter)};`;
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
      var breakpointIndex, match, val;

      if (val = breakpoint[property]) {
        // If this breakpoint has a value, use it
        return val;
      }

      if (!this.responsiveRules.length) {
        // If no responsive rules, use default
        return this[property];
      } // Otherwise, look up this breakpoint in the list...


      breakpointIndex = this.responsiveRules.findIndex(function ({
        maxWidth
      }) {
        return maxWidth === breakpoint.maxWidth;
      });

      if (!(breakpointIndex >= 0)) {
        throw `Breakpoint missing: ${JSON.stringify(breakpoint)}`;
      } // ... if it _wasn't_ the first entry, check if any preceeding breakpoints
      // have this value set


      if (breakpointIndex > 0) {
        if (match = this.responsiveRules.slice(0, breakpointIndex).reverse().find(function (breakpoint) {
          return breakpoint[property];
        })) {
          return match[property];
        }
      } // ... else, return the defaults


      return this[property];
    },
    // Make a short random string
    // https://stackoverflow.com/a/8084248/59160
    makeScopeId: function () {
      return (Math.random() + 1).toString(36).substring(7);
    },
    // Add px unit to a value if numeric
    autoUnit: function (val) {
      if (String(val).match(/^\d+$/)) {
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
        return this.tweenToTarget();
      } else {
        return window.cancelAnimationFrame(this.rafId);
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
  // Load concerns
  // Component definition
  mixins: [dragging_coffee, pagination_coffee, responsive_coffee, tweening_coffee],
  components: {
    SsrCarouselArrows: ssr_carousel_arrows,
    SsrCarouselDots: ssr_carousel_dots,
    SsrCarouselTrack: ssr_carousel_track
  },
  props: {
    // UI enabling controls
    showArrows: Boolean,
    showDots: Boolean
  }
});
// CONCATENATED MODULE: ./src/ssr-carousel.vue?vue&type=script&lang=coffee&
 /* harmony default export */ var src_ssr_carouselvue_type_script_lang_coffee_ = (ssr_carouselvue_type_script_lang_coffee_); 
// EXTERNAL MODULE: ./src/ssr-carousel.vue?vue&type=style&index=0&lang=stylus&
var ssr_carouselvue_type_style_index_0_lang_stylus_ = __webpack_require__(10);

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