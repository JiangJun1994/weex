// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _App = __webpack_require__(1);

	var _App2 = _interopRequireDefault(_App);

	var _router = __webpack_require__(15);

	var _router2 = _interopRequireDefault(_router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import foo from './src/foo.vue'
	// import home from './src/assets/views/home.vue'
	// home.el = '#root'
	// export default new Vue(home)
	// foo.el = '#root'
	// export default new Vue(foo)
	new Vue(Vue.util.extend({ el: '#root', router: _router2.default }, _App2.default));

	_router2.default.push('/');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(2)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(8),
	  /* template */
	  __webpack_require__(14),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jiangjun/weex-project/src/App.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7b073b22", Component.options)
	  } else {
	    hotAPI.reload("data-v-7b073b22", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("2fcf0420", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../node_modules/_css-loader@0.26.4@css-loader/index.js!../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-7b073b22!../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
	     var newContent = require("!!../node_modules/_css-loader@0.26.4@css-loader/index.js!../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-7b073b22!../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\nbody{\n    margin: 0;\n    padding: 0;\n    background-color: #f4f4f4;\n    color:#333;\n}\n.app-wrapper{\n    background-color: #f4f4f4;\n}\n.r-box{\n    position: absolute;\n    top:0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n", ""]);

	// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/

	var hasDocument = typeof document !== 'undefined'

	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}

	var listToStyles = __webpack_require__(6)

	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}

	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/

	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}

	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction

	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)

	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}

	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}

	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}

	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

	  if (styleElement) {
	    if (isProduction) {
	      // has SSR styles and in production mode.
	      // simply do nothing.
	      return noop
	    } else {
	      // has SSR styles but in dev mode.
	      // for some reason Chrome can't handle source map in server-rendered
	      // style tags - source maps in <style> only works if the style tag is
	      // created and inserted dynamically. So we remove the server rendered
	      // styles and inject new ones.
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  update(obj)

	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}

	var replaceText = (function () {
	  var textStore = []

	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()

	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}

	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap

	  if (media) {
	    styleElement.setAttribute('media', media)
	  }

	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _FiveTopics = __webpack_require__(9);

	var _FiveTopics2 = _interopRequireDefault(_FiveTopics);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    components: {
	        'five-topics': _FiveTopics2.default
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(10)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(12),
	  /* template */
	  __webpack_require__(13),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jiangjun/weex-project/src/assets/components/FiveTopics.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] FiveTopics.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3865505c", Component.options)
	  } else {
	    hotAPI.reload("data-v-3865505c", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("2473c499", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-3865505c!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./FiveTopics.vue", function() {
	     var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-3865505c!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./FiveTopics.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.iconfont {\n    font-family:iconfont;\n}\n.wrapper {\n    position:fixed;\n    bottom:0;\n    left:0;\n    right:0;\n    height:90px;\n    flex-wrap:nowrap;\n    flex-direction:row;\n    justify-content: space-around;\n    border-top-width:1px;\n    border-top-color: #d9d9d9;\n    background-color: #fafafa;\n}\n.bar-item {\n    flex:1;\n}\n.bar-ic{\n    padding-top: 14px;\n    font-size: 38px;\n    text-align:center;\n}\n.bar-txt{\n    font-size: 22px;\n    padding-top: 2px;\n    text-align:center;\n}\n.bar-active {\n    color:#b4282d;\n}\n", ""]);

	// exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    data: function data() {
	        return {
	            choosedIndex: 'home'
	        };
	    },

	    methods: {
	        jump: function jump(url) {
	            this.choosedIndex = url.slice(1);
	            this.$router.push(url);
	        },

	        isActive: function isActive(_c) {
	            return this.choosedIndex === _c ? 'bar-active' : '';
	        }
	    }
	};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wrapper"
	  }, [_c('div', {
	    staticClass: "bar-item",
	    on: {
	      "click": function($event) {
	        _vm.jump('/home')
	      }
	    }
	  }, [_c('text', {
	    staticClass: "bar-ic iconfont",
	    class: [this.isActive('home')]
	  }, [_vm._v("")]), _vm._v(" "), _c('text', {
	    staticClass: "bar-txt",
	    class: [this.isActive('home')]
	  }, [_vm._v("首页")])]), _vm._v(" "), _c('div', {
	    staticClass: "bar-item",
	    on: {
	      "click": function($event) {
	        _vm.jump('/topic')
	      }
	    }
	  }, [_c('text', {
	    staticClass: "bar-ic iconfont",
	    class: [this.isActive('topic')]
	  }, [_vm._v("")]), _vm._v(" "), _c('text', {
	    staticClass: "bar-txt",
	    class: [this.isActive('topic')]
	  }, [_vm._v("专题")])]), _vm._v(" "), _c('div', {
	    staticClass: "bar-item",
	    on: {
	      "click": function($event) {
	        _vm.jump('/class')
	      }
	    }
	  }, [_c('text', {
	    staticClass: "bar-ic iconfont",
	    class: [this.isActive('class')]
	  }, [_vm._v("")]), _vm._v(" "), _c('text', {
	    staticClass: "bar-txt",
	    class: [this.isActive('class')]
	  }, [_vm._v("分类")])]), _vm._v(" "), _c('div', {
	    staticClass: "bar-item",
	    on: {
	      "click": function($event) {
	        _vm.jump('/shop')
	      }
	    }
	  }, [_c('text', {
	    staticClass: "bar-ic iconfont",
	    class: [this.isActive('shop')]
	  }, [_vm._v("")]), _vm._v(" "), _c('text', {
	    staticClass: "bar-txt",
	    class: [this.isActive('shop')]
	  }, [_vm._v("购物车")])]), _vm._v(" "), _c('div', {
	    staticClass: "bar-item",
	    on: {
	      "click": function($event) {
	        _vm.jump('/my')
	      }
	    }
	  }, [_c('text', {
	    staticClass: "bar-ic iconfont",
	    class: [this.isActive('my')]
	  }, [_vm._v("")]), _vm._v(" "), _c('text', {
	    staticClass: "bar-txt",
	    class: [this.isActive('my')]
	  }, [_vm._v("个人")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3865505c", module.exports)
	  }
	}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "app-wrapper"
	  }, [_c('router-view', {
	    staticClass: "r-box"
	  }), _vm._v(" "), _c('five-topics')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7b073b22", module.exports)
	  }
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vueRouter = __webpack_require__(16);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _home = __webpack_require__(18);

	var _home2 = _interopRequireDefault(_home);

	var _topic = __webpack_require__(33);

	var _topic2 = _interopRequireDefault(_topic);

	var _class = __webpack_require__(43);

	var _class2 = _interopRequireDefault(_class);

	var _shop = __webpack_require__(53);

	var _shop2 = _interopRequireDefault(_shop);

	var _my = __webpack_require__(58);

	var _my2 = _interopRequireDefault(_my);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Vue.use(_vueRouter2.default);

	exports.default = new _vueRouter2.default({
	    routes: [{ path: '/', redirect: '/home' }, { path: '/home', component: _home2.default }, { path: '/topic', component: _topic2.default }, { path: '/class', component: _class2.default }, { path: '/shop', component: _shop2.default }, { path: '/my', component: _my2.default }]
	});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	  * vue-router v2.8.1
	  * (c) 2017 Evan You
	  * @license MIT
	  */
	'use strict';

	/*  */

	function assert (condition, message) {
	  if (!condition) {
	    throw new Error(("[vue-router] " + message))
	  }
	}

	function warn (condition, message) {
	  if (process.env.NODE_ENV !== 'production' && !condition) {
	    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
	  }
	}

	function isError (err) {
	  return Object.prototype.toString.call(err).indexOf('Error') > -1
	}

	var View = {
	  name: 'router-view',
	  functional: true,
	  props: {
	    name: {
	      type: String,
	      default: 'default'
	    }
	  },
	  render: function render (_, ref) {
	    var props = ref.props;
	    var children = ref.children;
	    var parent = ref.parent;
	    var data = ref.data;

	    data.routerView = true;

	    // directly use parent context's createElement() function
	    // so that components rendered by router-view can resolve named slots
	    var h = parent.$createElement;
	    var name = props.name;
	    var route = parent.$route;
	    var cache = parent._routerViewCache || (parent._routerViewCache = {});

	    // determine current view depth, also check to see if the tree
	    // has been toggled inactive but kept-alive.
	    var depth = 0;
	    var inactive = false;
	    while (parent && parent._routerRoot !== parent) {
	      if (parent.$vnode && parent.$vnode.data.routerView) {
	        depth++;
	      }
	      if (parent._inactive) {
	        inactive = true;
	      }
	      parent = parent.$parent;
	    }
	    data.routerViewDepth = depth;

	    // render previous view if the tree is inactive and kept-alive
	    if (inactive) {
	      return h(cache[name], data, children)
	    }

	    var matched = route.matched[depth];
	    // render empty node if no matched route
	    if (!matched) {
	      cache[name] = null;
	      return h()
	    }

	    var component = cache[name] = matched.components[name];

	    // attach instance registration hook
	    // this will be called in the instance's injected lifecycle hooks
	    data.registerRouteInstance = function (vm, val) {
	      // val could be undefined for unregistration
	      var current = matched.instances[name];
	      if (
	        (val && current !== vm) ||
	        (!val && current === vm)
	      ) {
	        matched.instances[name] = val;
	      }
	    }

	    // also register instance in prepatch hook
	    // in case the same component instance is reused across different routes
	    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
	      matched.instances[name] = vnode.componentInstance;
	    };

	    // resolve props
	    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
	    if (propsToPass) {
	      // clone to prevent mutation
	      propsToPass = data.props = extend({}, propsToPass);
	      // pass non-declared props as attrs
	      var attrs = data.attrs = data.attrs || {};
	      for (var key in propsToPass) {
	        if (!component.props || !(key in component.props)) {
	          attrs[key] = propsToPass[key];
	          delete propsToPass[key];
	        }
	      }
	    }

	    return h(component, data, children)
	  }
	};

	function resolveProps (route, config) {
	  switch (typeof config) {
	    case 'undefined':
	      return
	    case 'object':
	      return config
	    case 'function':
	      return config(route)
	    case 'boolean':
	      return config ? route.params : undefined
	    default:
	      if (process.env.NODE_ENV !== 'production') {
	        warn(
	          false,
	          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
	          "expecting an object, function or boolean."
	        );
	      }
	  }
	}

	function extend (to, from) {
	  for (var key in from) {
	    to[key] = from[key];
	  }
	  return to
	}

	/*  */

	var encodeReserveRE = /[!'()*]/g;
	var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
	var commaRE = /%2C/g;

	// fixed encodeURIComponent which is more conformant to RFC3986:
	// - escapes [!'()*]
	// - preserve commas
	var encode = function (str) { return encodeURIComponent(str)
	  .replace(encodeReserveRE, encodeReserveReplacer)
	  .replace(commaRE, ','); };

	var decode = decodeURIComponent;

	function resolveQuery (
	  query,
	  extraQuery,
	  _parseQuery
	) {
	  if ( extraQuery === void 0 ) extraQuery = {};

	  var parse = _parseQuery || parseQuery;
	  var parsedQuery;
	  try {
	    parsedQuery = parse(query || '');
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && warn(false, e.message);
	    parsedQuery = {};
	  }
	  for (var key in extraQuery) {
	    parsedQuery[key] = extraQuery[key];
	  }
	  return parsedQuery
	}

	function parseQuery (query) {
	  var res = {};

	  query = query.trim().replace(/^(\?|#|&)/, '');

	  if (!query) {
	    return res
	  }

	  query.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=');
	    var key = decode(parts.shift());
	    var val = parts.length > 0
	      ? decode(parts.join('='))
	      : null;

	    if (res[key] === undefined) {
	      res[key] = val;
	    } else if (Array.isArray(res[key])) {
	      res[key].push(val);
	    } else {
	      res[key] = [res[key], val];
	    }
	  });

	  return res
	}

	function stringifyQuery (obj) {
	  var res = obj ? Object.keys(obj).map(function (key) {
	    var val = obj[key];

	    if (val === undefined) {
	      return ''
	    }

	    if (val === null) {
	      return encode(key)
	    }

	    if (Array.isArray(val)) {
	      var result = [];
	      val.forEach(function (val2) {
	        if (val2 === undefined) {
	          return
	        }
	        if (val2 === null) {
	          result.push(encode(key));
	        } else {
	          result.push(encode(key) + '=' + encode(val2));
	        }
	      });
	      return result.join('&')
	    }

	    return encode(key) + '=' + encode(val)
	  }).filter(function (x) { return x.length > 0; }).join('&') : null;
	  return res ? ("?" + res) : ''
	}

	/*  */


	var trailingSlashRE = /\/?$/;

	function createRoute (
	  record,
	  location,
	  redirectedFrom,
	  router
	) {
	  var stringifyQuery$$1 = router && router.options.stringifyQuery;

	  var query = location.query || {};
	  try {
	    query = clone(query);
	  } catch (e) {}

	  var route = {
	    name: location.name || (record && record.name),
	    meta: (record && record.meta) || {},
	    path: location.path || '/',
	    hash: location.hash || '',
	    query: query,
	    params: location.params || {},
	    fullPath: getFullPath(location, stringifyQuery$$1),
	    matched: record ? formatMatch(record) : []
	  };
	  if (redirectedFrom) {
	    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
	  }
	  return Object.freeze(route)
	}

	function clone (value) {
	  if (Array.isArray(value)) {
	    return value.map(clone)
	  } else if (value && typeof value === 'object') {
	    var res = {};
	    for (var key in value) {
	      res[key] = clone(value[key]);
	    }
	    return res
	  } else {
	    return value
	  }
	}

	// the starting route that represents the initial state
	var START = createRoute(null, {
	  path: '/'
	});

	function formatMatch (record) {
	  var res = [];
	  while (record) {
	    res.unshift(record);
	    record = record.parent;
	  }
	  return res
	}

	function getFullPath (
	  ref,
	  _stringifyQuery
	) {
	  var path = ref.path;
	  var query = ref.query; if ( query === void 0 ) query = {};
	  var hash = ref.hash; if ( hash === void 0 ) hash = '';

	  var stringify = _stringifyQuery || stringifyQuery;
	  return (path || '/') + stringify(query) + hash
	}

	function isSameRoute (a, b) {
	  if (b === START) {
	    return a === b
	  } else if (!b) {
	    return false
	  } else if (a.path && b.path) {
	    return (
	      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query)
	    )
	  } else if (a.name && b.name) {
	    return (
	      a.name === b.name &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query) &&
	      isObjectEqual(a.params, b.params)
	    )
	  } else {
	    return false
	  }
	}

	function isObjectEqual (a, b) {
	  if ( a === void 0 ) a = {};
	  if ( b === void 0 ) b = {};

	  // handle null value #1566
	  if (!a || !b) { return a === b }
	  var aKeys = Object.keys(a);
	  var bKeys = Object.keys(b);
	  if (aKeys.length !== bKeys.length) {
	    return false
	  }
	  return aKeys.every(function (key) {
	    var aVal = a[key];
	    var bVal = b[key];
	    // check nested equality
	    if (typeof aVal === 'object' && typeof bVal === 'object') {
	      return isObjectEqual(aVal, bVal)
	    }
	    return String(aVal) === String(bVal)
	  })
	}

	function isIncludedRoute (current, target) {
	  return (
	    current.path.replace(trailingSlashRE, '/').indexOf(
	      target.path.replace(trailingSlashRE, '/')
	    ) === 0 &&
	    (!target.hash || current.hash === target.hash) &&
	    queryIncludes(current.query, target.query)
	  )
	}

	function queryIncludes (current, target) {
	  for (var key in target) {
	    if (!(key in current)) {
	      return false
	    }
	  }
	  return true
	}

	/*  */

	// work around weird flow bug
	var toTypes = [String, Object];
	var eventTypes = [String, Array];

	var Link = {
	  name: 'router-link',
	  props: {
	    to: {
	      type: toTypes,
	      required: true
	    },
	    tag: {
	      type: String,
	      default: 'a'
	    },
	    exact: Boolean,
	    append: Boolean,
	    replace: Boolean,
	    activeClass: String,
	    exactActiveClass: String,
	    event: {
	      type: eventTypes,
	      default: 'click'
	    }
	  },
	  render: function render (h) {
	    var this$1 = this;

	    var router = this.$router;
	    var current = this.$route;
	    var ref = router.resolve(this.to, current, this.append);
	    var location = ref.location;
	    var route = ref.route;
	    var href = ref.href;

	    var classes = {};
	    var globalActiveClass = router.options.linkActiveClass;
	    var globalExactActiveClass = router.options.linkExactActiveClass;
	    // Support global empty active class
	    var activeClassFallback = globalActiveClass == null
	            ? 'router-link-active'
	            : globalActiveClass;
	    var exactActiveClassFallback = globalExactActiveClass == null
	            ? 'router-link-exact-active'
	            : globalExactActiveClass;
	    var activeClass = this.activeClass == null
	            ? activeClassFallback
	            : this.activeClass;
	    var exactActiveClass = this.exactActiveClass == null
	            ? exactActiveClassFallback
	            : this.exactActiveClass;
	    var compareTarget = location.path
	      ? createRoute(null, location, null, router)
	      : route;

	    classes[exactActiveClass] = isSameRoute(current, compareTarget);
	    classes[activeClass] = this.exact
	      ? classes[exactActiveClass]
	      : isIncludedRoute(current, compareTarget);

	    var handler = function (e) {
	      if (guardEvent(e)) {
	        if (this$1.replace) {
	          router.replace(location);
	        } else {
	          router.push(location);
	        }
	      }
	    };

	    var on = { click: guardEvent };
	    if (Array.isArray(this.event)) {
	      this.event.forEach(function (e) { on[e] = handler; });
	    } else {
	      on[this.event] = handler;
	    }

	    var data = {
	      class: classes
	    };

	    if (this.tag === 'a') {
	      data.on = on;
	      data.attrs = { href: href };
	    } else {
	      // find the first <a> child and apply listener and href
	      var a = findAnchor(this.$slots.default);
	      if (a) {
	        // in case the <a> is a static node
	        a.isStatic = false;
	        var extend = _Vue.util.extend;
	        var aData = a.data = extend({}, a.data);
	        aData.on = on;
	        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
	        aAttrs.href = href;
	      } else {
	        // doesn't have <a> child, apply listener to self
	        data.on = on;
	      }
	    }

	    return h(this.tag, data, this.$slots.default)
	  }
	};

	function guardEvent (e) {
	  // don't redirect with control keys
	  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
	  // don't redirect when preventDefault called
	  if (e.defaultPrevented) { return }
	  // don't redirect on right click
	  if (e.button !== undefined && e.button !== 0) { return }
	  // don't redirect if `target="_blank"`
	  if (e.currentTarget && e.currentTarget.getAttribute) {
	    var target = e.currentTarget.getAttribute('target');
	    if (/\b_blank\b/i.test(target)) { return }
	  }
	  // this may be a Weex event which doesn't have this method
	  if (e.preventDefault) {
	    e.preventDefault();
	  }
	  return true
	}

	function findAnchor (children) {
	  if (children) {
	    var child;
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      if (child.tag === 'a') {
	        return child
	      }
	      if (child.children && (child = findAnchor(child.children))) {
	        return child
	      }
	    }
	  }
	}

	var _Vue;

	function install (Vue) {
	  if (install.installed && _Vue === Vue) { return }
	  install.installed = true;

	  _Vue = Vue;

	  var isDef = function (v) { return v !== undefined; };

	  var registerInstance = function (vm, callVal) {
	    var i = vm.$options._parentVnode;
	    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
	      i(vm, callVal);
	    }
	  };

	  Vue.mixin({
	    beforeCreate: function beforeCreate () {
	      if (isDef(this.$options.router)) {
	        this._routerRoot = this;
	        this._router = this.$options.router;
	        this._router.init(this);
	        Vue.util.defineReactive(this, '_route', this._router.history.current);
	      } else {
	        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
	      }
	      registerInstance(this, this);
	    },
	    destroyed: function destroyed () {
	      registerInstance(this);
	    }
	  });

	  Object.defineProperty(Vue.prototype, '$router', {
	    get: function get () { return this._routerRoot._router }
	  });

	  Object.defineProperty(Vue.prototype, '$route', {
	    get: function get () { return this._routerRoot._route }
	  });

	  Vue.component('router-view', View);
	  Vue.component('router-link', Link);

	  var strats = Vue.config.optionMergeStrategies;
	  // use the same hook merging strategy for route hooks
	  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
	}

	/*  */

	var inBrowser = typeof window !== 'undefined';

	/*  */

	function resolvePath (
	  relative,
	  base,
	  append
	) {
	  var firstChar = relative.charAt(0);
	  if (firstChar === '/') {
	    return relative
	  }

	  if (firstChar === '?' || firstChar === '#') {
	    return base + relative
	  }

	  var stack = base.split('/');

	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop();
	  }

	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/');
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i];
	    if (segment === '..') {
	      stack.pop();
	    } else if (segment !== '.') {
	      stack.push(segment);
	    }
	  }

	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('');
	  }

	  return stack.join('/')
	}

	function parsePath (path) {
	  var hash = '';
	  var query = '';

	  var hashIndex = path.indexOf('#');
	  if (hashIndex >= 0) {
	    hash = path.slice(hashIndex);
	    path = path.slice(0, hashIndex);
	  }

	  var queryIndex = path.indexOf('?');
	  if (queryIndex >= 0) {
	    query = path.slice(queryIndex + 1);
	    path = path.slice(0, queryIndex);
	  }

	  return {
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	function cleanPath (path) {
	  return path.replace(/\/\//g, '/')
	}

	var isarray = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	/**
	 * Expose `pathToRegexp`.
	 */
	var pathToRegexp_1 = pathToRegexp;
	var parse_1 = parse;
	var compile_1 = compile;
	var tokensToFunction_1 = tokensToFunction;
	var tokensToRegExp_1 = tokensToRegExp;

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g');

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var defaultDelimiter = options && options.delimiter || '/';
	  var res;

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      continue
	    }

	    var next = str[index];
	    var prefix = res[2];
	    var name = res[3];
	    var capture = res[4];
	    var group = res[5];
	    var modifier = res[6];
	    var asterisk = res[7];

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	    }

	    var partial = prefix != null && next != null && next !== prefix;
	    var repeat = modifier === '+' || modifier === '*';
	    var optional = modifier === '?' || modifier === '*';
	    var delimiter = res[2] || defaultDelimiter;
	    var pattern = capture || group;

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    });
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index);
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path);
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
	    }
	  }

	  return function (obj, opts) {
	    var path = '';
	    var data = obj || {};
	    var options = opts || {};
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];

	      if (typeof token === 'string') {
	        path += token;

	        continue
	      }

	      var value = data[token.name];
	      var segment;

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix;
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j]);

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment;
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys;
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      });
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = [];

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = '';

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];

	    if (typeof token === 'string') {
	      route += escapeString(token);
	    } else {
	      var prefix = escapeString(token.prefix);
	      var capture = '(?:' + token.pattern + ')';

	      keys.push(token);

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*';
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?';
	        } else {
	          capture = prefix + '(' + capture + ')?';
	        }
	      } else {
	        capture = prefix + '(' + capture + ')';
	      }

	      route += capture;
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/');
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	  }

	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}

	pathToRegexp_1.parse = parse_1;
	pathToRegexp_1.compile = compile_1;
	pathToRegexp_1.tokensToFunction = tokensToFunction_1;
	pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

	/*  */

	// $flow-disable-line
	var regexpCompileCache = Object.create(null);

	function fillParams (
	  path,
	  params,
	  routeMsg
	) {
	  try {
	    var filler =
	      regexpCompileCache[path] ||
	      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
	    return filler(params || {}, { pretty: true })
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
	    }
	    return ''
	  }
	}

	/*  */

	function createRouteMap (
	  routes,
	  oldPathList,
	  oldPathMap,
	  oldNameMap
	) {
	  // the path list is used to control path matching priority
	  var pathList = oldPathList || [];
	  // $flow-disable-line
	  var pathMap = oldPathMap || Object.create(null);
	  // $flow-disable-line
	  var nameMap = oldNameMap || Object.create(null);

	  routes.forEach(function (route) {
	    addRouteRecord(pathList, pathMap, nameMap, route);
	  });

	  // ensure wildcard routes are always at the end
	  for (var i = 0, l = pathList.length; i < l; i++) {
	    if (pathList[i] === '*') {
	      pathList.push(pathList.splice(i, 1)[0]);
	      l--;
	      i--;
	    }
	  }

	  return {
	    pathList: pathList,
	    pathMap: pathMap,
	    nameMap: nameMap
	  }
	}

	function addRouteRecord (
	  pathList,
	  pathMap,
	  nameMap,
	  route,
	  parent,
	  matchAs
	) {
	  var path = route.path;
	  var name = route.name;
	  if (process.env.NODE_ENV !== 'production') {
	    assert(path != null, "\"path\" is required in a route configuration.");
	    assert(
	      typeof route.component !== 'string',
	      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
	      "string id. Use an actual component instead."
	    );
	  }

	  var pathToRegexpOptions = route.pathToRegexpOptions || {};
	  var normalizedPath = normalizePath(
	    path,
	    parent,
	    pathToRegexpOptions.strict
	  );

	  if (typeof route.caseSensitive === 'boolean') {
	    pathToRegexpOptions.sensitive = route.caseSensitive;
	  }

	  var record = {
	    path: normalizedPath,
	    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
	    components: route.components || { default: route.component },
	    instances: {},
	    name: name,
	    parent: parent,
	    matchAs: matchAs,
	    redirect: route.redirect,
	    beforeEnter: route.beforeEnter,
	    meta: route.meta || {},
	    props: route.props == null
	      ? {}
	      : route.components
	        ? route.props
	        : { default: route.props }
	  };

	  if (route.children) {
	    // Warn if route is named, does not redirect and has a default child route.
	    // If users navigate to this route by name, the default child will
	    // not be rendered (GH Issue #629)
	    if (process.env.NODE_ENV !== 'production') {
	      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
	        warn(
	          false,
	          "Named Route '" + (route.name) + "' has a default child route. " +
	          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
	          "the default child route will not be rendered. Remove the name from " +
	          "this route and use the name of the default child route for named " +
	          "links instead."
	        );
	      }
	    }
	    route.children.forEach(function (child) {
	      var childMatchAs = matchAs
	        ? cleanPath((matchAs + "/" + (child.path)))
	        : undefined;
	      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
	    });
	  }

	  if (route.alias !== undefined) {
	    var aliases = Array.isArray(route.alias)
	      ? route.alias
	      : [route.alias];

	    aliases.forEach(function (alias) {
	      var aliasRoute = {
	        path: alias,
	        children: route.children
	      };
	      addRouteRecord(
	        pathList,
	        pathMap,
	        nameMap,
	        aliasRoute,
	        parent,
	        record.path || '/' // matchAs
	      );
	    });
	  }

	  if (!pathMap[record.path]) {
	    pathList.push(record.path);
	    pathMap[record.path] = record;
	  }

	  if (name) {
	    if (!nameMap[name]) {
	      nameMap[name] = record;
	    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
	      warn(
	        false,
	        "Duplicate named routes definition: " +
	        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
	      );
	    }
	  }
	}

	function compileRouteRegex (path, pathToRegexpOptions) {
	  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
	  if (process.env.NODE_ENV !== 'production') {
	    var keys = Object.create(null);
	    regex.keys.forEach(function (key) {
	      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
	      keys[key.name] = true;
	    });
	  }
	  return regex
	}

	function normalizePath (path, parent, strict) {
	  if (!strict) { path = path.replace(/\/$/, ''); }
	  if (path[0] === '/') { return path }
	  if (parent == null) { return path }
	  return cleanPath(((parent.path) + "/" + path))
	}

	/*  */


	function normalizeLocation (
	  raw,
	  current,
	  append,
	  router
	) {
	  var next = typeof raw === 'string' ? { path: raw } : raw;
	  // named target
	  if (next.name || next._normalized) {
	    return next
	  }

	  // relative params
	  if (!next.path && next.params && current) {
	    next = assign({}, next);
	    next._normalized = true;
	    var params = assign(assign({}, current.params), next.params);
	    if (current.name) {
	      next.name = current.name;
	      next.params = params;
	    } else if (current.matched.length) {
	      var rawPath = current.matched[current.matched.length - 1].path;
	      next.path = fillParams(rawPath, params, ("path " + (current.path)));
	    } else if (process.env.NODE_ENV !== 'production') {
	      warn(false, "relative params navigation requires a current route.");
	    }
	    return next
	  }

	  var parsedPath = parsePath(next.path || '');
	  var basePath = (current && current.path) || '/';
	  var path = parsedPath.path
	    ? resolvePath(parsedPath.path, basePath, append || next.append)
	    : basePath;

	  var query = resolveQuery(
	    parsedPath.query,
	    next.query,
	    router && router.options.parseQuery
	  );

	  var hash = next.hash || parsedPath.hash;
	  if (hash && hash.charAt(0) !== '#') {
	    hash = "#" + hash;
	  }

	  return {
	    _normalized: true,
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	function assign (a, b) {
	  for (var key in b) {
	    a[key] = b[key];
	  }
	  return a
	}

	/*  */


	function createMatcher (
	  routes,
	  router
	) {
	  var ref = createRouteMap(routes);
	  var pathList = ref.pathList;
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;

	  function addRoutes (routes) {
	    createRouteMap(routes, pathList, pathMap, nameMap);
	  }

	  function match (
	    raw,
	    currentRoute,
	    redirectedFrom
	  ) {
	    var location = normalizeLocation(raw, currentRoute, false, router);
	    var name = location.name;

	    if (name) {
	      var record = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        warn(record, ("Route with name '" + name + "' does not exist"));
	      }
	      if (!record) { return _createRoute(null, location) }
	      var paramNames = record.regex.keys
	        .filter(function (key) { return !key.optional; })
	        .map(function (key) { return key.name; });

	      if (typeof location.params !== 'object') {
	        location.params = {};
	      }

	      if (currentRoute && typeof currentRoute.params === 'object') {
	        for (var key in currentRoute.params) {
	          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
	            location.params[key] = currentRoute.params[key];
	          }
	        }
	      }

	      if (record) {
	        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
	        return _createRoute(record, location, redirectedFrom)
	      }
	    } else if (location.path) {
	      location.params = {};
	      for (var i = 0; i < pathList.length; i++) {
	        var path = pathList[i];
	        var record$1 = pathMap[path];
	        if (matchRoute(record$1.regex, location.path, location.params)) {
	          return _createRoute(record$1, location, redirectedFrom)
	        }
	      }
	    }
	    // no match
	    return _createRoute(null, location)
	  }

	  function redirect (
	    record,
	    location
	  ) {
	    var originalRedirect = record.redirect;
	    var redirect = typeof originalRedirect === 'function'
	        ? originalRedirect(createRoute(record, location, null, router))
	        : originalRedirect;

	    if (typeof redirect === 'string') {
	      redirect = { path: redirect };
	    }

	    if (!redirect || typeof redirect !== 'object') {
	      if (process.env.NODE_ENV !== 'production') {
	        warn(
	          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
	        );
	      }
	      return _createRoute(null, location)
	    }

	    var re = redirect;
	    var name = re.name;
	    var path = re.path;
	    var query = location.query;
	    var hash = location.hash;
	    var params = location.params;
	    query = re.hasOwnProperty('query') ? re.query : query;
	    hash = re.hasOwnProperty('hash') ? re.hash : hash;
	    params = re.hasOwnProperty('params') ? re.params : params;

	    if (name) {
	      // resolved named direct
	      var targetRecord = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
	      }
	      return match({
	        _normalized: true,
	        name: name,
	        query: query,
	        hash: hash,
	        params: params
	      }, undefined, location)
	    } else if (path) {
	      // 1. resolve relative redirect
	      var rawPath = resolveRecordPath(path, record);
	      // 2. resolve params
	      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
	      // 3. rematch with existing query and hash
	      return match({
	        _normalized: true,
	        path: resolvedPath,
	        query: query,
	        hash: hash
	      }, undefined, location)
	    } else {
	      if (process.env.NODE_ENV !== 'production') {
	        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
	      }
	      return _createRoute(null, location)
	    }
	  }

	  function alias (
	    record,
	    location,
	    matchAs
	  ) {
	    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
	    var aliasedMatch = match({
	      _normalized: true,
	      path: aliasedPath
	    });
	    if (aliasedMatch) {
	      var matched = aliasedMatch.matched;
	      var aliasedRecord = matched[matched.length - 1];
	      location.params = aliasedMatch.params;
	      return _createRoute(aliasedRecord, location)
	    }
	    return _createRoute(null, location)
	  }

	  function _createRoute (
	    record,
	    location,
	    redirectedFrom
	  ) {
	    if (record && record.redirect) {
	      return redirect(record, redirectedFrom || location)
	    }
	    if (record && record.matchAs) {
	      return alias(record, location, record.matchAs)
	    }
	    return createRoute(record, location, redirectedFrom, router)
	  }

	  return {
	    match: match,
	    addRoutes: addRoutes
	  }
	}

	function matchRoute (
	  regex,
	  path,
	  params
	) {
	  var m = path.match(regex);

	  if (!m) {
	    return false
	  } else if (!params) {
	    return true
	  }

	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = regex.keys[i - 1];
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
	    if (key) {
	      params[key.name] = val;
	    }
	  }

	  return true
	}

	function resolveRecordPath (path, record) {
	  return resolvePath(path, record.parent ? record.parent.path : '/', true)
	}

	/*  */


	var positionStore = Object.create(null);

	function setupScroll () {
	  // Fix for #1585 for Firefox
	  window.history.replaceState({ key: getStateKey() }, '');
	  window.addEventListener('popstate', function (e) {
	    saveScrollPosition();
	    if (e.state && e.state.key) {
	      setStateKey(e.state.key);
	    }
	  });
	}

	function handleScroll (
	  router,
	  to,
	  from,
	  isPop
	) {
	  if (!router.app) {
	    return
	  }

	  var behavior = router.options.scrollBehavior;
	  if (!behavior) {
	    return
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    assert(typeof behavior === 'function', "scrollBehavior must be a function");
	  }

	  // wait until re-render finishes before scrolling
	  router.app.$nextTick(function () {
	    var position = getScrollPosition();
	    var shouldScroll = behavior(to, from, isPop ? position : null);

	    if (!shouldScroll) {
	      return
	    }

	    if (typeof shouldScroll.then === 'function') {
	      shouldScroll.then(function (shouldScroll) {
	        scrollToPosition((shouldScroll), position);
	      }).catch(function (err) {
	        if (process.env.NODE_ENV !== 'production') {
	          assert(false, err.toString());
	        }
	      });
	    } else {
	      scrollToPosition(shouldScroll, position);
	    }
	  });
	}

	function saveScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    positionStore[key] = {
	      x: window.pageXOffset,
	      y: window.pageYOffset
	    };
	  }
	}

	function getScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    return positionStore[key]
	  }
	}

	function getElementPosition (el, offset) {
	  var docEl = document.documentElement;
	  var docRect = docEl.getBoundingClientRect();
	  var elRect = el.getBoundingClientRect();
	  return {
	    x: elRect.left - docRect.left - offset.x,
	    y: elRect.top - docRect.top - offset.y
	  }
	}

	function isValidPosition (obj) {
	  return isNumber(obj.x) || isNumber(obj.y)
	}

	function normalizePosition (obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	    y: isNumber(obj.y) ? obj.y : window.pageYOffset
	  }
	}

	function normalizeOffset (obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : 0,
	    y: isNumber(obj.y) ? obj.y : 0
	  }
	}

	function isNumber (v) {
	  return typeof v === 'number'
	}

	function scrollToPosition (shouldScroll, position) {
	  var isObject = typeof shouldScroll === 'object';
	  if (isObject && typeof shouldScroll.selector === 'string') {
	    var el = document.querySelector(shouldScroll.selector);
	    if (el) {
	      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
	      offset = normalizeOffset(offset);
	      position = getElementPosition(el, offset);
	    } else if (isValidPosition(shouldScroll)) {
	      position = normalizePosition(shouldScroll);
	    }
	  } else if (isObject && isValidPosition(shouldScroll)) {
	    position = normalizePosition(shouldScroll);
	  }

	  if (position) {
	    window.scrollTo(position.x, position.y);
	  }
	}

	/*  */

	var supportsPushState = inBrowser && (function () {
	  var ua = window.navigator.userAgent;

	  if (
	    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
	    ua.indexOf('Mobile Safari') !== -1 &&
	    ua.indexOf('Chrome') === -1 &&
	    ua.indexOf('Windows Phone') === -1
	  ) {
	    return false
	  }

	  return window.history && 'pushState' in window.history
	})();

	// use User Timing api (if present) for more accurate key precision
	var Time = inBrowser && window.performance && window.performance.now
	  ? window.performance
	  : Date;

	var _key = genKey();

	function genKey () {
	  return Time.now().toFixed(3)
	}

	function getStateKey () {
	  return _key
	}

	function setStateKey (key) {
	  _key = key;
	}

	function pushState (url, replace) {
	  saveScrollPosition();
	  // try...catch the pushState call to get around Safari
	  // DOM Exception 18 where it limits to 100 pushState calls
	  var history = window.history;
	  try {
	    if (replace) {
	      history.replaceState({ key: _key }, '', url);
	    } else {
	      _key = genKey();
	      history.pushState({ key: _key }, '', url);
	    }
	  } catch (e) {
	    window.location[replace ? 'replace' : 'assign'](url);
	  }
	}

	function replaceState (url) {
	  pushState(url, true);
	}

	/*  */

	function runQueue (queue, fn, cb) {
	  var step = function (index) {
	    if (index >= queue.length) {
	      cb();
	    } else {
	      if (queue[index]) {
	        fn(queue[index], function () {
	          step(index + 1);
	        });
	      } else {
	        step(index + 1);
	      }
	    }
	  };
	  step(0);
	}

	/*  */

	function resolveAsyncComponents (matched) {
	  return function (to, from, next) {
	    var hasAsync = false;
	    var pending = 0;
	    var error = null;

	    flatMapComponents(matched, function (def, _, match, key) {
	      // if it's a function and doesn't have cid attached,
	      // assume it's an async component resolve function.
	      // we are not using Vue's default async resolving mechanism because
	      // we want to halt the navigation until the incoming component has been
	      // resolved.
	      if (typeof def === 'function' && def.cid === undefined) {
	        hasAsync = true;
	        pending++;

	        var resolve = once(function (resolvedDef) {
	          if (isESModule(resolvedDef)) {
	            resolvedDef = resolvedDef.default;
	          }
	          // save resolved on async factory in case it's used elsewhere
	          def.resolved = typeof resolvedDef === 'function'
	            ? resolvedDef
	            : _Vue.extend(resolvedDef);
	          match.components[key] = resolvedDef;
	          pending--;
	          if (pending <= 0) {
	            next();
	          }
	        });

	        var reject = once(function (reason) {
	          var msg = "Failed to resolve async component " + key + ": " + reason;
	          process.env.NODE_ENV !== 'production' && warn(false, msg);
	          if (!error) {
	            error = isError(reason)
	              ? reason
	              : new Error(msg);
	            next(error);
	          }
	        });

	        var res;
	        try {
	          res = def(resolve, reject);
	        } catch (e) {
	          reject(e);
	        }
	        if (res) {
	          if (typeof res.then === 'function') {
	            res.then(resolve, reject);
	          } else {
	            // new syntax in Vue 2.3
	            var comp = res.component;
	            if (comp && typeof comp.then === 'function') {
	              comp.then(resolve, reject);
	            }
	          }
	        }
	      }
	    });

	    if (!hasAsync) { next(); }
	  }
	}

	function flatMapComponents (
	  matched,
	  fn
	) {
	  return flatten(matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) { return fn(
	      m.components[key],
	      m.instances[key],
	      m, key
	    ); })
	  }))
	}

	function flatten (arr) {
	  return Array.prototype.concat.apply([], arr)
	}

	var hasSymbol =
	  typeof Symbol === 'function' &&
	  typeof Symbol.toStringTag === 'symbol';

	function isESModule (obj) {
	  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
	}

	// in Webpack 2, require.ensure now also returns a Promise
	// so the resolve/reject functions may get called an extra time
	// if the user uses an arrow function shorthand that happens to
	// return that Promise.
	function once (fn) {
	  var called = false;
	  return function () {
	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];

	    if (called) { return }
	    called = true;
	    return fn.apply(this, args)
	  }
	}

	/*  */

	var History = function History (router, base) {
	  this.router = router;
	  this.base = normalizeBase(base);
	  // start with a route object that stands for "nowhere"
	  this.current = START;
	  this.pending = null;
	  this.ready = false;
	  this.readyCbs = [];
	  this.readyErrorCbs = [];
	  this.errorCbs = [];
	};

	History.prototype.listen = function listen (cb) {
	  this.cb = cb;
	};

	History.prototype.onReady = function onReady (cb, errorCb) {
	  if (this.ready) {
	    cb();
	  } else {
	    this.readyCbs.push(cb);
	    if (errorCb) {
	      this.readyErrorCbs.push(errorCb);
	    }
	  }
	};

	History.prototype.onError = function onError (errorCb) {
	  this.errorCbs.push(errorCb);
	};

	History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
	    var this$1 = this;

	  var route = this.router.match(location, this.current);
	  this.confirmTransition(route, function () {
	    this$1.updateRoute(route);
	    onComplete && onComplete(route);
	    this$1.ensureURL();

	    // fire ready cbs once
	    if (!this$1.ready) {
	      this$1.ready = true;
	      this$1.readyCbs.forEach(function (cb) { cb(route); });
	    }
	  }, function (err) {
	    if (onAbort) {
	      onAbort(err);
	    }
	    if (err && !this$1.ready) {
	      this$1.ready = true;
	      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
	    }
	  });
	};

	History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
	    var this$1 = this;

	  var current = this.current;
	  var abort = function (err) {
	    if (isError(err)) {
	      if (this$1.errorCbs.length) {
	        this$1.errorCbs.forEach(function (cb) { cb(err); });
	      } else {
	        warn(false, 'uncaught error during route navigation:');
	        console.error(err);
	      }
	    }
	    onAbort && onAbort(err);
	  };
	  if (
	    isSameRoute(route, current) &&
	    // in the case the route map has been dynamically appended to
	    route.matched.length === current.matched.length
	  ) {
	    this.ensureURL();
	    return abort()
	  }

	  var ref = resolveQueue(this.current.matched, route.matched);
	    var updated = ref.updated;
	    var deactivated = ref.deactivated;
	    var activated = ref.activated;

	  var queue = [].concat(
	    // in-component leave guards
	    extractLeaveGuards(deactivated),
	    // global before hooks
	    this.router.beforeHooks,
	    // in-component update hooks
	    extractUpdateHooks(updated),
	    // in-config enter guards
	    activated.map(function (m) { return m.beforeEnter; }),
	    // async components
	    resolveAsyncComponents(activated)
	  );

	  this.pending = route;
	  var iterator = function (hook, next) {
	    if (this$1.pending !== route) {
	      return abort()
	    }
	    try {
	      hook(route, current, function (to) {
	        if (to === false || isError(to)) {
	          // next(false) -> abort navigation, ensure current URL
	          this$1.ensureURL(true);
	          abort(to);
	        } else if (
	          typeof to === 'string' ||
	          (typeof to === 'object' && (
	            typeof to.path === 'string' ||
	            typeof to.name === 'string'
	          ))
	        ) {
	          // next('/') or next({ path: '/' }) -> redirect
	          abort();
	          if (typeof to === 'object' && to.replace) {
	            this$1.replace(to);
	          } else {
	            this$1.push(to);
	          }
	        } else {
	          // confirm transition and pass on the value
	          next(to);
	        }
	      });
	    } catch (e) {
	      abort(e);
	    }
	  };

	  runQueue(queue, iterator, function () {
	    var postEnterCbs = [];
	    var isValid = function () { return this$1.current === route; };
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
	    var queue = enterGuards.concat(this$1.router.resolveHooks);
	    runQueue(queue, iterator, function () {
	      if (this$1.pending !== route) {
	        return abort()
	      }
	      this$1.pending = null;
	      onComplete(route);
	      if (this$1.router.app) {
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) { cb(); });
	        });
	      }
	    });
	  });
	};

	History.prototype.updateRoute = function updateRoute (route) {
	  var prev = this.current;
	  this.current = route;
	  this.cb && this.cb(route);
	  this.router.afterHooks.forEach(function (hook) {
	    hook && hook(route, prev);
	  });
	};

	function normalizeBase (base) {
	  if (!base) {
	    if (inBrowser) {
	      // respect <base> tag
	      var baseEl = document.querySelector('base');
	      base = (baseEl && baseEl.getAttribute('href')) || '/';
	      // strip full URL origin
	      base = base.replace(/^https?:\/\/[^\/]+/, '');
	    } else {
	      base = '/';
	    }
	  }
	  // make sure there's the starting slash
	  if (base.charAt(0) !== '/') {
	    base = '/' + base;
	  }
	  // remove trailing slash
	  return base.replace(/\/$/, '')
	}

	function resolveQueue (
	  current,
	  next
	) {
	  var i;
	  var max = Math.max(current.length, next.length);
	  for (i = 0; i < max; i++) {
	    if (current[i] !== next[i]) {
	      break
	    }
	  }
	  return {
	    updated: next.slice(0, i),
	    activated: next.slice(i),
	    deactivated: current.slice(i)
	  }
	}

	function extractGuards (
	  records,
	  name,
	  bind,
	  reverse
	) {
	  var guards = flatMapComponents(records, function (def, instance, match, key) {
	    var guard = extractGuard(def, name);
	    if (guard) {
	      return Array.isArray(guard)
	        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
	        : bind(guard, instance, match, key)
	    }
	  });
	  return flatten(reverse ? guards.reverse() : guards)
	}

	function extractGuard (
	  def,
	  key
	) {
	  if (typeof def !== 'function') {
	    // extend now so that global mixins are applied.
	    def = _Vue.extend(def);
	  }
	  return def.options[key]
	}

	function extractLeaveGuards (deactivated) {
	  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
	}

	function extractUpdateHooks (updated) {
	  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
	}

	function bindGuard (guard, instance) {
	  if (instance) {
	    return function boundRouteGuard () {
	      return guard.apply(instance, arguments)
	    }
	  }
	}

	function extractEnterGuards (
	  activated,
	  cbs,
	  isValid
	) {
	  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
	    return bindEnterGuard(guard, match, key, cbs, isValid)
	  })
	}

	function bindEnterGuard (
	  guard,
	  match,
	  key,
	  cbs,
	  isValid
	) {
	  return function routeEnterGuard (to, from, next) {
	    return guard(to, from, function (cb) {
	      next(cb);
	      if (typeof cb === 'function') {
	        cbs.push(function () {
	          // #750
	          // if a router-view is wrapped with an out-in transition,
	          // the instance may not have been registered at this time.
	          // we will need to poll for registration until current route
	          // is no longer valid.
	          poll(cb, match.instances, key, isValid);
	        });
	      }
	    })
	  }
	}

	function poll (
	  cb, // somehow flow cannot infer this is a function
	  instances,
	  key,
	  isValid
	) {
	  if (instances[key]) {
	    cb(instances[key]);
	  } else if (isValid()) {
	    setTimeout(function () {
	      poll(cb, instances, key, isValid);
	    }, 16);
	  }
	}

	/*  */


	var HTML5History = (function (History$$1) {
	  function HTML5History (router, base) {
	    var this$1 = this;

	    History$$1.call(this, router, base);

	    var expectScroll = router.options.scrollBehavior;

	    if (expectScroll) {
	      setupScroll();
	    }

	    var initLocation = getLocation(this.base);
	    window.addEventListener('popstate', function (e) {
	      var current = this$1.current;

	      // Avoiding first `popstate` event dispatched in some browsers but first
	      // history route not updated since async guard at the same time.
	      var location = getLocation(this$1.base);
	      if (this$1.current === START && location === initLocation) {
	        return
	      }

	      this$1.transitionTo(location, function (route) {
	        if (expectScroll) {
	          handleScroll(router, route, current, true);
	        }
	      });
	    });
	  }

	  if ( History$$1 ) HTML5History.__proto__ = History$$1;
	  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
	  HTML5History.prototype.constructor = HTML5History;

	  HTML5History.prototype.go = function go (n) {
	    window.history.go(n);
	  };

	  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	    var ref = this;
	    var fromRoute = ref.current;
	    this.transitionTo(location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, fromRoute, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    var ref = this;
	    var fromRoute = ref.current;
	    this.transitionTo(location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, fromRoute, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.ensureURL = function ensureURL (push) {
	    if (getLocation(this.base) !== this.current.fullPath) {
	      var current = cleanPath(this.base + this.current.fullPath);
	      push ? pushState(current) : replaceState(current);
	    }
	  };

	  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getLocation(this.base)
	  };

	  return HTML5History;
	}(History));

	function getLocation (base) {
	  var path = window.location.pathname;
	  if (base && path.indexOf(base) === 0) {
	    path = path.slice(base.length);
	  }
	  return (path || '/') + window.location.search + window.location.hash
	}

	/*  */


	var HashHistory = (function (History$$1) {
	  function HashHistory (router, base, fallback) {
	    History$$1.call(this, router, base);
	    // check history fallback deeplinking
	    if (fallback && checkFallback(this.base)) {
	      return
	    }
	    ensureSlash();
	  }

	  if ( History$$1 ) HashHistory.__proto__ = History$$1;
	  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
	  HashHistory.prototype.constructor = HashHistory;

	  // this is delayed until the app mounts
	  // to avoid the hashchange listener being fired too early
	  HashHistory.prototype.setupListeners = function setupListeners () {
	    var this$1 = this;

	    var router = this.router;
	    var expectScroll = router.options.scrollBehavior;
	    var supportsScroll = supportsPushState && expectScroll;

	    if (supportsScroll) {
	      setupScroll();
	    }

	    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
	      var current = this$1.current;
	      if (!ensureSlash()) {
	        return
	      }
	      this$1.transitionTo(getHash(), function (route) {
	        if (supportsScroll) {
	          handleScroll(this$1.router, route, current, true);
	        }
	        if (!supportsPushState) {
	          replaceHash(route.fullPath);
	        }
	      });
	    });
	  };

	  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	    var ref = this;
	    var fromRoute = ref.current;
	    this.transitionTo(location, function (route) {
	      pushHash(route.fullPath);
	      handleScroll(this$1.router, route, fromRoute, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    var ref = this;
	    var fromRoute = ref.current;
	    this.transitionTo(location, function (route) {
	      replaceHash(route.fullPath);
	      handleScroll(this$1.router, route, fromRoute, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HashHistory.prototype.go = function go (n) {
	    window.history.go(n);
	  };

	  HashHistory.prototype.ensureURL = function ensureURL (push) {
	    var current = this.current.fullPath;
	    if (getHash() !== current) {
	      push ? pushHash(current) : replaceHash(current);
	    }
	  };

	  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getHash()
	  };

	  return HashHistory;
	}(History));

	function checkFallback (base) {
	  var location = getLocation(base);
	  if (!/^\/#/.test(location)) {
	    window.location.replace(
	      cleanPath(base + '/#' + location)
	    );
	    return true
	  }
	}

	function ensureSlash () {
	  var path = getHash();
	  if (path.charAt(0) === '/') {
	    return true
	  }
	  replaceHash('/' + path);
	  return false
	}

	function getHash () {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var index = href.indexOf('#');
	  return index === -1 ? '' : href.slice(index + 1)
	}

	function getUrl (path) {
	  var href = window.location.href;
	  var i = href.indexOf('#');
	  var base = i >= 0 ? href.slice(0, i) : href;
	  return (base + "#" + path)
	}

	function pushHash (path) {
	  if (supportsPushState) {
	    pushState(getUrl(path));
	  } else {
	    window.location.hash = path;
	  }
	}

	function replaceHash (path) {
	  if (supportsPushState) {
	    replaceState(getUrl(path));
	  } else {
	    window.location.replace(getUrl(path));
	  }
	}

	/*  */


	var AbstractHistory = (function (History$$1) {
	  function AbstractHistory (router, base) {
	    History$$1.call(this, router, base);
	    this.stack = [];
	    this.index = -1;
	  }

	  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
	  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
	  AbstractHistory.prototype.constructor = AbstractHistory;

	  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
	      this$1.index++;
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  AbstractHistory.prototype.go = function go (n) {
	    var this$1 = this;

	    var targetIndex = this.index + n;
	    if (targetIndex < 0 || targetIndex >= this.stack.length) {
	      return
	    }
	    var route = this.stack[targetIndex];
	    this.confirmTransition(route, function () {
	      this$1.index = targetIndex;
	      this$1.updateRoute(route);
	    });
	  };

	  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    var current = this.stack[this.stack.length - 1];
	    return current ? current.fullPath : '/'
	  };

	  AbstractHistory.prototype.ensureURL = function ensureURL () {
	    // noop
	  };

	  return AbstractHistory;
	}(History));

	/*  */

	var VueRouter = function VueRouter (options) {
	  if ( options === void 0 ) options = {};

	  this.app = null;
	  this.apps = [];
	  this.options = options;
	  this.beforeHooks = [];
	  this.resolveHooks = [];
	  this.afterHooks = [];
	  this.matcher = createMatcher(options.routes || [], this);

	  var mode = options.mode || 'hash';
	  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
	  if (this.fallback) {
	    mode = 'hash';
	  }
	  if (!inBrowser) {
	    mode = 'abstract';
	  }
	  this.mode = mode;

	  switch (mode) {
	    case 'history':
	      this.history = new HTML5History(this, options.base);
	      break
	    case 'hash':
	      this.history = new HashHistory(this, options.base, this.fallback);
	      break
	    case 'abstract':
	      this.history = new AbstractHistory(this, options.base);
	      break
	    default:
	      if (process.env.NODE_ENV !== 'production') {
	        assert(false, ("invalid mode: " + mode));
	      }
	  }
	};

	var prototypeAccessors = { currentRoute: { configurable: true } };

	VueRouter.prototype.match = function match (
	  raw,
	  current,
	  redirectedFrom
	) {
	  return this.matcher.match(raw, current, redirectedFrom)
	};

	prototypeAccessors.currentRoute.get = function () {
	  return this.history && this.history.current
	};

	VueRouter.prototype.init = function init (app /* Vue component instance */) {
	    var this$1 = this;

	  process.env.NODE_ENV !== 'production' && assert(
	    install.installed,
	    "not installed. Make sure to call `Vue.use(VueRouter)` " +
	    "before creating root instance."
	  );

	  this.apps.push(app);

	  // main app already initialized.
	  if (this.app) {
	    return
	  }

	  this.app = app;

	  var history = this.history;

	  if (history instanceof HTML5History) {
	    history.transitionTo(history.getCurrentLocation());
	  } else if (history instanceof HashHistory) {
	    var setupHashListener = function () {
	      history.setupListeners();
	    };
	    history.transitionTo(
	      history.getCurrentLocation(),
	      setupHashListener,
	      setupHashListener
	    );
	  }

	  history.listen(function (route) {
	    this$1.apps.forEach(function (app) {
	      app._route = route;
	    });
	  });
	};

	VueRouter.prototype.beforeEach = function beforeEach (fn) {
	  return registerHook(this.beforeHooks, fn)
	};

	VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
	  return registerHook(this.resolveHooks, fn)
	};

	VueRouter.prototype.afterEach = function afterEach (fn) {
	  return registerHook(this.afterHooks, fn)
	};

	VueRouter.prototype.onReady = function onReady (cb, errorCb) {
	  this.history.onReady(cb, errorCb);
	};

	VueRouter.prototype.onError = function onError (errorCb) {
	  this.history.onError(errorCb);
	};

	VueRouter.prototype.push = function push (location, onComplete, onAbort) {
	  this.history.push(location, onComplete, onAbort);
	};

	VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
	  this.history.replace(location, onComplete, onAbort);
	};

	VueRouter.prototype.go = function go (n) {
	  this.history.go(n);
	};

	VueRouter.prototype.back = function back () {
	  this.go(-1);
	};

	VueRouter.prototype.forward = function forward () {
	  this.go(1);
	};

	VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
	  var route = to
	    ? to.matched
	      ? to
	      : this.resolve(to).route
	    : this.currentRoute;
	  if (!route) {
	    return []
	  }
	  return [].concat.apply([], route.matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return m.components[key]
	    })
	  }))
	};

	VueRouter.prototype.resolve = function resolve (
	  to,
	  current,
	  append
	) {
	  var location = normalizeLocation(
	    to,
	    current || this.history.current,
	    append,
	    this
	  );
	  var route = this.match(location, current);
	  var fullPath = route.redirectedFrom || route.fullPath;
	  var base = this.history.base;
	  var href = createHref(base, fullPath, this.mode);
	  return {
	    location: location,
	    route: route,
	    href: href,
	    // for backwards compat
	    normalizedTo: location,
	    resolved: route
	  }
	};

	VueRouter.prototype.addRoutes = function addRoutes (routes) {
	  this.matcher.addRoutes(routes);
	  if (this.history.current !== START) {
	    this.history.transitionTo(this.history.getCurrentLocation());
	  }
	};

	Object.defineProperties( VueRouter.prototype, prototypeAccessors );

	function registerHook (list, fn) {
	  list.push(fn);
	  return function () {
	    var i = list.indexOf(fn);
	    if (i > -1) { list.splice(i, 1); }
	  }
	}

	function createHref (base, fullPath, mode) {
	  var path = mode === 'hash' ? '#' + fullPath : fullPath;
	  return base ? cleanPath(base + '/' + path) : path
	}

	VueRouter.install = install;
	VueRouter.version = '2.8.1';

	if (inBrowser && window.Vue) {
	  window.Vue.use(VueRouter);
	}

	module.exports = VueRouter;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(19)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(21),
	  /* template */
	  __webpack_require__(32),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jiangjun/weex-project/src/assets/views/home.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-40e365cd", Component.options)
	  } else {
	    hotAPI.reload("data-v-40e365cd", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("0c24a2ed", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-40e365cd!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./home.vue", function() {
	     var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-40e365cd!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./home.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.iconfont {\n    font-family:iconfont;\n}\n.main-list{\n    position: fixed;\n    top: 168px;\n    bottom: 90px;\n    left: 0;\n    right: 0;\n}\n.slogan{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    background-color: #fff;\n}\n.i-slg{\n    height: 66px;\n    font-size: 26px;\n    padding-top: 16px;\n    flex: 1;\n    text-align: center;\n    color: #b4282d;\n}\n.cell-button{\n    padding-bottom: 18px;\n}\n", ""]);

	// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Header = __webpack_require__(22);

	var _Header2 = _interopRequireDefault(_Header);

	var _Topics = __webpack_require__(27);

	var _Topics2 = _interopRequireDefault(_Topics);

	var _FiveTopics = __webpack_require__(9);

	var _FiveTopics2 = _interopRequireDefault(_FiveTopics);

	var _XSlider = __webpack_require__(63);

	var _XSlider2 = _interopRequireDefault(_XSlider);

	var _Block = __webpack_require__(68);

	var _Block2 = _interopRequireDefault(_Block);

	var _Block3 = __webpack_require__(73);

	var _Block4 = _interopRequireDefault(_Block3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    data: function data() {
	        return {
	            YXBanners: [{ src: 'http://yanxuan.nosdn.127.net/02689684fe48491fcc6fd10e8f77248c.jpg?quality=95&thumbnail=1920x420&imageView' }, { src: 'http://yanxuan.nosdn.127.net/f6b72d4923c015989e6c01742c66c95d.jpg?quality=95&thumbnail=1920x420&imageView' }, { src: 'http://yanxuan.nosdn.127.net/738c787af517dde1dbaa8f603350ee25.jpg?quality=95&thumbnail=1920x420&imageView' }, { src: 'http://yanxuan.nosdn.127.net/3b188c8485ab9d88c081a510e623a709.jpg?quality=95&thumbnail=1920x420&imageView' }, { src: 'http://yanxuan.nosdn.127.net/2a779db6077f09f284bc6aa9950be246.jpg?quality=95&thumbnail=1920x420&imageView' }, { src: 'http://yanxuan.nosdn.127.net/be8e4b6aa3d1de50ad1331244ca20fdf.jpg?quality=95&thumbnail=1920x420&imageView' }],
	            goodsList: [{ img: 'http://yanxuan.nosdn.127.net/0899ef5459016242075e5d1adc66a9d3.png?imageView&quality=95&thumbnail=245x245', info: '时尚牛仔裤', tlt: '牛仔裤', price: '209' }, { img: 'http://yanxuan.nosdn.127.net/56672af18d27710fd68e4a5036dd610b.png?imageView&quality=95&thumbnail=245x245', info: '花呢外套', tlt: '外套', price: '439' }, { img: 'http://yanxuan.nosdn.127.net/fa3cc8aa52d0a89cf83a52c3fcc42059.png?imageView&quality=95&thumbnail=245x245', info: '长袖家居服', tlt: '家居服', price: '230' }, { img: 'http://yanxuan.nosdn.127.net/a0e4a45e2c91d9798ff2caba9c15883c.png?imageView&quality=95&thumbnail=245x245', info: '针织连衣裙', tlt: '连衣裙', price: '349' }],
	            makers: {
	                title: '品牌制造商直供',
	                items: [{ bg: "http://yanxuan.nosdn.127.net/658740b859cdcf0ee793f235076ec250.png?imageView&quality=95&thumbnail=245x245", name: "家用电器制造", price: "300", state: "" }, { bg: "http://yanxuan.nosdn.127.net/c26b2409998dc605f7fe63232619b5d1.png?imageView&quality=95&thumbnail=245x245", name: "衬衣制造", price: "100", state: "" }, { bg: "http://yanxuan.nosdn.127.net/115d36a542c34520f17f58aa168e6b73.png?imageView&quality=95&thumbnail=245x245", name: "家居制造", price: "200", state: "" }, { bg: "http://yanxuan.nosdn.127.net/ee60377a8d743036f82ae0de1c42cab0.png?imageView&quality=95&thumbnail=245x245", name: "餐厨制造", price: "60", state: "" }]
	            }
	        };
	    },

	    components: {
	        'home-header': _Header2.default,
	        'topics': _Topics2.default,
	        'five-topics': _FiveTopics2.default,
	        'x-slider': _XSlider2.default,
	        'block1': _Block2.default,
	        'block3': _Block4.default
	    }
	};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(23)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(25),
	  /* template */
	  __webpack_require__(26),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jiangjun/weex-project/src/assets/components/Header.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Header.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-f3a12b2e", Component.options)
	  } else {
	    hotAPI.reload("data-v-f3a12b2e", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("4b8e9e35", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-f3a12b2e!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Header.vue", function() {
	     var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-f3a12b2e!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Header.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.iconfont {\n  font-family:iconfont;\n}\n.wrapper {\n  position:fixed;\n  top:0;\n  left:0;\n  right:0;\n  height:114px;\n  padding-top:44px;\n  display:flex;\n  flex-wrap:nowrap;\n  flex-direction:row;\n  justify-content:space-around;\n  baackground-color:#fafafa;\n  opacity:0.99;\n}\n.scan, .notice {\n  height:80px;\n  width:96px;\n}\n.ic, .txt, .search {\n  text-align:center;\n  color:#666;\n  font-weight:300;\n}\n.ic{\n    font-size: 32px;\n}\n.txt{\n    font-size: 18px;\n}\n.search {\n  height:60px;\n  background-color: #ededed;\n  font-size:26px;\n  padding-top:13px;\n  border-radius:8px;\n  flex:1;\n}\n", ""]);

	// exports


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	"use strict";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wrapper"
	  }, [_c('div', {
	    staticClass: "scan"
	  }, [_c('text', {
	    staticClass: "ic iconfont"
	  }, [_vm._v("")]), _vm._v(" "), _c('text', {
	    staticClass: "txt"
	  }, [_vm._v("扫一扫")])]), _vm._v(" "), _c('text', {
	    staticClass: "search iconfont"
	  }, [_vm._v(" 搜索商品，共8888款好物")]), _vm._v(" "), _c('div', {
	    staticClass: "notice"
	  }, [_c('text', {
	    staticClass: "ic iconfont"
	  }, [_vm._v("")]), _vm._v(" "), _c('text', {
	    staticClass: "txt"
	  }, [_vm._v("消息")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f3a12b2e", module.exports)
	  }
	}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(28)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(30),
	  /* template */
	  __webpack_require__(31),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jiangjun/weex-project/src/assets/components/Topics.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Topics.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-40bb8500", Component.options)
	  } else {
	    hotAPI.reload("data-v-40bb8500", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("c53fa1d2", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-40bb8500!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Topics.vue", function() {
	     var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-40bb8500!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Topics.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.iconfont {\n    font-family:iconfont;\n}\n.wrapper {\n    position:fixed;\n    top:114px;\n    left:0;\n    right:0;\n    z-index: 10;\n    background-color: #fafafa;\n    border-bottom-width: 1px;\n    border-bottom-color: #d9d9d9;\n}\n.scroller {\n    height: 54px;\n    flex-direction: row;\n}\n.i-c {\n    padding-top:10px;\n    padding-left:45px;\n    padding-right:45px;\n    padding-bottom:6px;\n    font-size:26px;\n    color:#333;\n}\n.more {\n    position:absolute;\n    top:0;\n    right:0;\n    height:52px;\n    width:100px;\n    background-color: #fafafa;\n    text-align:center;\n    padding-top:10px;\n    opacity:0.9;\n}\n", ""]);

	// exports


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	"use strict";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wrapper"
	  }, [_c('scroller', {
	    staticClass: "scroller",
	    attrs: {
	      "scroll-direction": "horizontal"
	    }
	  }, [_c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("推荐")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("限时购")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("新品")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("居家")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("餐厨")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("配件")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("服装")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("电器")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("洗护")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("杂货")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("饮食")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("婴童")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("志趣")])]), _vm._v(" "), _c('text', {
	    staticClass: "more iconfont"
	  }, [_vm._v("")])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-40bb8500", module.exports)
	  }
	}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wrapper"
	  }, [_c('home-header'), _vm._v(" "), _c('topics'), _vm._v(" "), _c('scroller', {
	    staticClass: "main-list"
	  }, [_c('div', {
	    staticClass: "cell-button"
	  }, [_c('x-slider', {
	    staticClass: "xslider",
	    attrs: {
	      "imageList": _vm.YXBanners
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "slogan"
	  }, [_c('text', {
	    staticClass: "i-slg iconfont"
	  }, [_vm._v(" 网易自营品牌")]), _vm._v(" "), _c('text', {
	    staticClass: "i-slg iconfont"
	  }, [_vm._v(" 30天无忧退货")]), _vm._v(" "), _c('text', {
	    staticClass: "i-slg iconfont"
	  }, [_vm._v(" 48小时快速退款")])])], 1), _vm._v(" "), _c('div', {
	    staticClass: "cell-button"
	  }, [_c('block1', {
	    attrs: {
	      "title": _vm.makers.title,
	      "items": _vm.makers.items
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "cell-button"
	  }, [_c('block-3', {
	    attrs: {
	      "goods": _vm.goodsList
	    }
	  })], 1)])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-40e365cd", module.exports)
	  }
	}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(34)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(36),
	  /* template */
	  __webpack_require__(42),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jiangjun/weex-project/src/assets/views/topic.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] topic.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-770ec531", Component.options)
	  } else {
	    hotAPI.reload("data-v-770ec531", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("7c57639e", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-770ec531!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./topic.vue", function() {
	     var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-770ec531!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./topic.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.iconfont {\n    font-family:iconfont;\n}\n.wrapper{\n    background-color: #f4f4f4;\n}\n", ""]);

	// exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Header = __webpack_require__(37);

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    components: {
	        'header2': _Header2.default
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(38)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(40),
	  /* template */
	  __webpack_require__(41),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jiangjun/weex-project/src/assets/components/Header2.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Header2.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3fd58c19", Component.options)
	  } else {
	    hotAPI.reload("data-v-3fd58c19", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(39);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("4e8da056", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-3fd58c19!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Header2.vue", function() {
	     var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-3fd58c19!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Header2.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.wrapper {\n    position:fixed;\n    top:0;\n    left:0;\n    right:0;\n    height:114px;\n    padding-top:44px;\n    background-color: #fafafa;\n    opacity: .99;\n    display:flex;\n    flex-direction:row;\n    flex-wrap:nowrap;\n    justify-content:space-around;\n    border-bottom-color: #d9d9d9;\n    border-bottom-width: 1px;\n}\n.left,.right {\n    height:80px;\n    width:120px;\n    padding-top:10px;\n}\n.tlt {\n   flex:1;\n   font-size: 36px;\n   padding-top: 10px;\n   color:#333;\n   text-align: center;\n}\n.leftTxt,.rightTxt{\n    font-size: 30px;\n    text-align: center;\n}\n", ""]);

	// exports


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	   props: ['title', 'leftBtn', 'rightBtn']
	};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wrapper"
	  }, [_c('div', {
	    staticClass: "left"
	  }, [(_vm.leftBtn) ? _c('text', {
	    staticClass: "lefttxt"
	  }, [_vm._v(_vm._s(_vm.leftBtn.name))]) : _vm._e()]), _vm._v(" "), _c('text', {
	    staticClass: "tlt"
	  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
	    staticClass: "right"
	  }, [(_vm.rightBtn) ? _c('text', {
	    staticClass: "righttxt"
	  }, [_vm._v(_vm._s(_vm.rightBtn.name))]) : _vm._e()])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3fd58c19", module.exports)
	  }
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wrapper"
	  }, [_c('header2', {
	    attrs: {
	      "title": "专题"
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-770ec531", module.exports)
	  }
	}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(44)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(46),
	  /* template */
	  __webpack_require__(52),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jiangjun/weex-project/src/assets/views/class.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] class.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5f5454fa", Component.options)
	  } else {
	    hotAPI.reload("data-v-5f5454fa", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(45);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("ddb58820", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-5f5454fa!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./class.vue", function() {
	     var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-5f5454fa!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./class.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.wrapper{\n    background-color: #f4f4f4;\n    display: flex;\n    flex-wrap: nowrap;\n    flex-direction: row;\n}\n.class-list{\n    /*width: 162px;\n    margin-top: 113px;\n    margin-bottom: 90px;\n    padding-top: 20px;\n    position: fixed;\n    top: 114px;\n    left: 0;\n    bottom: 90px;\n    border-right-width: 1px;\n    border-right-color: #d9d9d9;\n    background-color: #fff;*/\n            width: 162px;\n    margin-top: 113px;\n    margin-bottom: 90px;\n    padding-top: 20px;\n    border-right-width: 1px;\n    border-right-color: #d9d9d9;\n    background-color: #fff;\n}\n.scroller1 {\n    flex-direction: column;\n    show-scrollbar:false;\n}\n.i-c {\n    font-size:28px;\n    margin-left:10px;\n    margin-right:10px;\n    margin-top:22px;\n    margin-bottom:26px;\n    color:#333;\n    text-align:center;\n}\n.sub-tlt{\n    text-align: center;\n    font-size: 24px;\n    color:#333;\n    margin-top: 10px;\n    margin-bottom: 30px;\n}\n.main-list {\n    flex:1;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    margin-top: 113px;\n    margin-bottom: 90px;\n    background-color: #fff;\n}\n.ad-img{\n    width: 532px;\n    height: 194px;\n    border-radius: 6px;\n    margin: 28px;\n}\n.sub-box{\n    padding-left: 26px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n.sub-i{\n    width: 178px;\n    height: 200px;\n}\n.i-img{\n    width: 150px;\n    margin-left: 14px;\n    margin-right: 14px;\n    height: 150px;\n}\n.i-name{\n    font-size: 22px;\n    text-align: center;\n}\n", ""]);

	// exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Header = __webpack_require__(47);

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            detailclass: [{ img: "http://yanxuan.nosdn.127.net/c08a774e16304cb201ca1c266ab6690e.png?imageView&quality=95&thumbnail=245x245", name: "家居" }, { img: "http://yanxuan.nosdn.127.net/4743af3ced158a99e5fa4829375bd26c.png?imageView&quality=95&thumbnail=245x245", name: "行李箱" }, { img: "http://yanxuan.nosdn.127.net/ce5d4fe3db1d413f83baacd699ea7f8e.png?imageView&quality=95&thumbnail=245x245", name: "男士服装" }, { img: "http://yanxuan.nosdn.127.net/ac33ac633a9b3bae6043ca4a58b35242.png?imageView&quality=95&thumbnail=245x245", name: "女士服装" }, { img: "http://yanxuan.nosdn.127.net/8ccd56f0302911af6f9d8e1bf15e5854.png?imageView&quality=95&thumbnail=245x245", name: "电器" }, { img: "http://yanxuan.nosdn.127.net/55aa159ba55b5f79f7d46d635b3d2449.jpeg?imageView&quality=95&thumbnail=245x245", name: "数码" }, { img: "http://yanxuan.nosdn.127.net/0f3952c028ab30f80f76ce9d59c6f41e.png?imageView&quality=95&thumbnail=245x245", name: "美妆" }, { img: "http://yanxuan.nosdn.127.net/f03b73d71a4a84c32db13eddece05cc3.png?imageView&quality=95&thumbnail=245x245", name: "户外" }, { img: "http://yanxuan.nosdn.127.net/205c1df9a7e4954de90ae4608d97e14b.png?imageView&quality=95&thumbnail=245x245", name: "旅行" }, { img: "http://yanxuan.nosdn.127.net/3e03578041d2c5378335914e6a28c4dc.png?imageView&quality=95&thumbnail=245x245", name: "配饰" }, { img: "http://yanxuan.nosdn.127.net/a0696264c99739c7ef14d909206f5b88.png?imageView&quality=95&thumbnail=245x245", name: "鞋子" }, { img: "http://yanxuan.nosdn.127.net/115d36a542c34520f17f58aa168e6b73.png?imageView&quality=95&thumbnail=245x245", name: "家具" }]
	        };
	    },

	    components: {
	        'header3': _Header2.default
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(48)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(50),
	  /* template */
	  __webpack_require__(51),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jiangjun/weex-project/src/assets/components/Header3.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Header3.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3fe3a39a", Component.options)
	  } else {
	    hotAPI.reload("data-v-3fe3a39a", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(49);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("04636a9e", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-3fe3a39a!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Header3.vue", function() {
	     var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-3fe3a39a!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Header3.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.iconfont {\n    font-family:iconfont;\n}\n.wrapper {\n    position:fixed;\n    position:0;\n    left:0;\n    right:0;\n    height:114px;\n    padding-top:44px;\n    background-color: #fafafa;\n    opacity: .99;\n    display:flex;\n    flex-direction:row;\n    flex-wrap:nowrap;\n    justify-content:space-around;\n    border-bottom-color: #d9d9d9;\n    border-bottom-width: 1px;\n}\n.search {\n    flex: 1;\n    height: 60px;\n    font-size: 26px;\n    padding-top: 13px;\n    background-color: #ededed;\n    border-radius: 8px;\n    margin-right: 26px;\n    margin-left: 26px;\n    text-align: center;\n    color:#666;\n}\n", ""]);

	// exports


/***/ }),
/* 50 */
/***/ (function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	"use strict";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wrapper"
	  }, [_c('text', {
	    staticClass: "search iconfont"
	  }, [_vm._v(" 搜索商品，共8888款好物")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3fe3a39a", module.exports)
	  }
	}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wrapper"
	  }, [_c('header3'), _vm._v(" "), _c('div', {
	    staticClass: "class-list"
	  }, [_c('scroller', {
	    staticClass: "scroller1",
	    attrs: {
	      "scroll-direction": "vertical"
	    }
	  }, [_c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("推荐区")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("家装区")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("新品")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("居家")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("餐厨")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("配件")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("服装")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("电器")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("洗护")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("杂货")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("饮食")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("婴童")]), _vm._v(" "), _c('text', {
	    staticClass: "i-c"
	  }, [_vm._v("志趣")])])], 1), _vm._v(" "), _c('scroller', {
	    staticClass: "main-list"
	  }, [_c('img', {
	    staticClass: "ad-img",
	    attrs: {
	      "src": "http://yanxuan.nosdn.127.net/3ebd7addcc0d101d116052a57cec2f16.png"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "sub-tlt"
	  }, [_vm._v("--- 推荐区分类 ---")]), _vm._v(" "), _c('div', {
	    staticClass: "sub-box"
	  }, _vm._l((_vm.detailclass), function(i) {
	    return _c('div', {
	      staticClass: "sub-i"
	    }, [_c('img', {
	      staticClass: "i-img",
	      attrs: {
	        "src": i.img
	      }
	    }), _vm._v(" "), _c('text', {
	      staticClass: "i-name"
	    }, [_vm._v(_vm._s(i.name))])])
	  }))])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5f5454fa", module.exports)
	  }
	}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(54)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(56),
	  /* template */
	  __webpack_require__(57),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jiangjun/weex-project/src/assets/views/shop.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] shop.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-49496864", Component.options)
	  } else {
	    hotAPI.reload("data-v-49496864", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(55);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("54e764b6", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-49496864!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./shop.vue", function() {
	     var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-49496864!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./shop.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.iconfont {\n    font-family:iconfont;\n}\n.slogan{\n    top:110px;\n    width:750px;\n    diaplay:flex;\n    flex-direction:row;\n    flex-wrap:nowrap;\n}\n.i-slg{\n    height: 66px;\n    font-size: 26px;\n    padding-top: 16px;\n    flex: 1;\n    text-align: center;\n    color: #b4282d;\n}\n.main-list{\n    margin-top: 170px;\n    margin-bottom: 90px;\n}\n.cart-empty{\n    height: 350px;\n}\n.img-empty{\n    position: absolute;\n    width: 750px;\n    height: 230px;\n    top:20px;\n    left: 0;\n}\n.txt-empty{\n    position: absolute;\n    text-align: center;\n    font-size: 30px;\n    width: 750px;\n    top:250px;\n    color:#999;\n}\n", ""]);

	// exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Header = __webpack_require__(37);

	var _Header2 = _interopRequireDefault(_Header);

	var _Block = __webpack_require__(73);

	var _Block2 = _interopRequireDefault(_Block);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    components: {
	        'header2': _Header2.default,
	        'block-3': _Block2.default
	    },
	    data: function data() {
	        return {
	            rightBtn: {
	                name: '编辑'
	            },
	            goods: [{ img: 'http://yanxuan.nosdn.127.net/0899ef5459016242075e5d1adc66a9d3.png?imageView&quality=95&thumbnail=245x245', info: '时尚牛仔裤', tlt: '牛仔裤', price: '209' }, { img: 'http://yanxuan.nosdn.127.net/56672af18d27710fd68e4a5036dd610b.png?imageView&quality=95&thumbnail=245x245', info: '花呢外套', tlt: '外套', price: '439' }, { img: 'http://yanxuan.nosdn.127.net/fa3cc8aa52d0a89cf83a52c3fcc42059.png?imageView&quality=95&thumbnail=245x245', info: '长袖家居服', tlt: '家居服', price: '230' }, { img: 'http://yanxuan.nosdn.127.net/a0e4a45e2c91d9798ff2caba9c15883c.png?imageView&quality=95&thumbnail=245x245', info: '针织连衣裙', tlt: '连衣裙', price: '349' }]
	        };
	    }
	};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wrapper"
	  }, [_c('header2', {
	    attrs: {
	      "title": "购物车",
	      "rightBtn": _vm.rightBtn
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "slogan"
	  }, [_c('text', {
	    staticClass: "i-slg iconfont"
	  }, [_vm._v(" 30天无忧退换货")]), _vm._v(" "), _c('text', {
	    staticClass: "i-slg iconfont"
	  }, [_vm._v(" 48小时快速退款")]), _vm._v(" "), _c('text', {
	    staticClass: "i-slg iconfont"
	  }, [_vm._v(" 满88元免邮费")])]), _vm._v(" "), _c('scroller', {
	    staticClass: "main-list"
	  }, [_c('div', {
	    staticClass: "shop-cart"
	  }, [_c('div', {
	    staticClass: "cart-empty"
	  }, [_c('image', {
	    staticClass: "img-empty",
	    attrs: {
	      "resize": "contain",
	      "src": "http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "txt-empty"
	  }, [_vm._v("去添加点什么吧")])])]), _vm._v(" "), _c('block-3', {
	    attrs: {
	      "goods": _vm.goods
	    }
	  })], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-49496864", module.exports)
	  }
	}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(59)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(61),
	  /* template */
	  __webpack_require__(62),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jiangjun/weex-project/src/assets/views/my.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] my.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-8f5a64cc", Component.options)
	  } else {
	    hotAPI.reload("data-v-8f5a64cc", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(60);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("3224ba0e", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-8f5a64cc!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./my.vue", function() {
	     var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-8f5a64cc!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./my.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.header {\n    height: 380px;\n}\n.iconfont {\n    font-family: iconfont;\n}\n.scroller{\n    margin-bottom: 90px;\n}\n.s-box{\n    padding-left: 26px;\n    background-color: #fff;\n}\n.box-tlt{\n    height: 94px;\n}\n.i-box-in{\n    position: absolute;\n    top:34px;\n    right: 30px;\n    color:#333;\n}\n.box-txt{\n    font-size:26px;\n    padding-top:34px;\n    color:#333;\n}\n.box-line{\n    height: 132px;\n    display: flex;\n    padding-right: 30px;\n    flex-wrap: nowrap;\n    flex-direction: row;\n    justify-content: space-between;\n}\n.i-box-l{\n    width: 130px;\n    height: 132px;\n}\n.i-box-icon{\n    font-size: 50px;\n    text-align: center;\n    padding-top: 15px;\n    height:79px;\n    padding-bottom: 10px;\n    color:#666;\n}\n.i-box-tlt{\n    font-size: 26px;\n    text-align: center;\n    color:#666;\n}\n.line-serve{\n    padding-top: 20px;\n    height: 150px;\n}\n.border-bottom{\n    border-bottom-width: 1px;\n    border-bottom-color: rgba(0,0,0,.15) ;\n}\n", ""]);

	// exports


/***/ }),
/* 61 */
/***/ (function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	"use strict";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wrapper"
	  }, [_c('scroller', {
	    staticClass: "scroller"
	  }, [_c('div', {
	    staticClass: "header"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "fbs"
	  }, [_c('div', {
	    staticClass: "s-box cell-button"
	  }, [_c('div', {
	    staticClass: "box-tlt border-bottom"
	  }, [_c('text', {
	    staticClass: "box-txt"
	  }, [_vm._v("我的订单")]), _c('text', {
	    staticClass: "i-box-in iconfont"
	  }, [_vm._v("")])]), _vm._v(" "), _c('div', {
	    staticClass: "box-line"
	  }, [_c('div', {
	    staticClass: "i-box-l"
	  }, [_c('text', {
	    staticClass: "i-box-icon iconfont"
	  }, [_vm._v("")]), _vm._v(" "), _c('text', {
	    staticClass: "i-box-tlt"
	  }, [_vm._v("待付款")])]), _vm._v(" "), _c('div', {
	    staticClass: "i-box-l"
	  }, [_c('text', {
	    staticClass: "i-box-icon iconfont"
	  }, [_vm._v("")]), _vm._v(" "), _c('text', {
	    staticClass: "i-box-tlt"
	  }, [_vm._v("待发货")])]), _vm._v(" "), _c('div', {
	    staticClass: "i-box-l"
	  }, [_c('text', {
	    staticClass: "i-box-icon iconfont"
	  }, [_vm._v("")]), _vm._v(" "), _c('text', {
	    staticClass: "i-box-tlt"
	  }, [_vm._v("已发货")])]), _vm._v(" "), _c('div', {
	    staticClass: "i-box-l"
	  }, [_c('text', {
	    staticClass: "i-box-icon iconfont"
	  }, [_vm._v("")]), _vm._v(" "), _c('text', {
	    staticClass: "i-box-tlt"
	  }, [_vm._v("待评价")])]), _vm._v(" "), _c('div', {
	    staticClass: "i-box-l"
	  }, [_c('text', {
	    staticClass: "i-box-icon iconfont"
	  }, [_vm._v("")]), _vm._v(" "), _c('text', {
	    staticClass: "i-box-tlt"
	  }, [_vm._v("退换/售后")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "s-box cell-button"
	  }, [_c('div', {
	    staticClass: "box-tlt border-bottom"
	  }, [_c('text', {
	    staticClass: "box-txt"
	  }, [_vm._v("我的服务")])]), _vm._v(" "), _c('div', {
	    staticClass: "box-line line-serve border-bottom"
	  }, [_c('div', {
	    staticClass: "i-box-l"
	  }, [_c('text', {
	    staticClass: "i-box-icon iconfont i-c-orange"
	  }, [_vm._v("")]), _c('text', {
	    staticClass: "i-box-tlt"
	  }, [_vm._v("拼团订单")])]), _vm._v(" "), _c('div', {
	    staticClass: "i-box-l"
	  }, [_c('text', {
	    staticClass: "i-box-icon iconfont i-c-yellow"
	  }, [_vm._v("")]), _c('text', {
	    staticClass: "i-box-tlt"
	  }, [_vm._v("邀请好友")])]), _vm._v(" "), _c('div', {
	    staticClass: "i-box-l"
	  }, [_c('text', {
	    staticClass: "i-box-icon iconfont i-c-orange"
	  }, [_vm._v("")]), _c('text', {
	    staticClass: "i-box-tlt"
	  }, [_vm._v("优惠券")])]), _vm._v(" "), _c('div', {
	    staticClass: "i-box-l"
	  }, [_c('text', {
	    staticClass: "i-box-icon iconfont i-c-yellow"
	  }, [_vm._v("")]), _c('text', {
	    staticClass: "i-box-tlt"
	  }, [_vm._v("优先购")])])]), _vm._v(" "), _c('div', {
	    staticClass: "box-line line-serve border-bottom"
	  }, [_c('div', {
	    staticClass: "i-box-l"
	  }, [_c('text', {
	    staticClass: "i-box-icon iconfont i-c-orange"
	  }, [_vm._v("")]), _c('text', {
	    staticClass: "i-box-tlt"
	  }, [_vm._v("礼品卡")])]), _vm._v(" "), _c('div', {
	    staticClass: "i-box-l"
	  }, [_c('text', {
	    staticClass: "i-box-icon iconfont i-c-yellow"
	  }, [_vm._v("")]), _c('text', {
	    staticClass: "i-box-tlt"
	  }, [_vm._v("会员")])]), _vm._v(" "), _c('div', {
	    staticClass: "i-box-l"
	  }, [_c('text', {
	    staticClass: "i-box-icon iconfont i-c-orange"
	  }, [_vm._v("")]), _c('text', {
	    staticClass: "i-box-tlt"
	  }, [_vm._v("足迹")])]), _vm._v(" "), _c('div', {
	    staticClass: "i-box-l"
	  }, [_c('text', {
	    staticClass: "i-box-icon iconfont i-c-yellow"
	  }, [_vm._v("")]), _c('text', {
	    staticClass: "i-box-tlt"
	  }, [_vm._v("收藏")])])]), _vm._v(" "), _c('div', {
	    staticClass: "box-line line-serve"
	  }, [_c('div', {
	    staticClass: "i-box-l"
	  }, [_c('text', {
	    staticClass: "i-box-icon iconfont i-c-blue"
	  }, [_vm._v("")]), _c('text', {
	    staticClass: "i-box-tlt"
	  }, [_vm._v("地址")])]), _vm._v(" "), _c('div', {
	    staticClass: "i-box-l"
	  }, [_c('text', {
	    staticClass: "i-box-icon iconfont i-c-blue"
	  }, [_vm._v("")]), _c('text', {
	    staticClass: "i-box-tlt"
	  }, [_vm._v("客服")])]), _vm._v(" "), _c('div', {
	    staticClass: "i-box-l"
	  }, [_c('text', {
	    staticClass: "i-box-icon iconfont i-c-blue"
	  }, [_vm._v("")]), _c('text', {
	    staticClass: "i-box-tlt"
	  }, [_vm._v("帮助")])]), _vm._v(" "), _c('div', {
	    staticClass: "i-box-l"
	  }, [_c('text', {
	    staticClass: "i-box-icon iconfont i-c-blue"
	  }, [_vm._v("")]), _c('text', {
	    staticClass: "i-box-tlt"
	  }, [_vm._v("设置")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "s-box cell-button"
	  })])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-8f5a64cc", module.exports)
	  }
	}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(64)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(66),
	  /* template */
	  __webpack_require__(67),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jiangjun/weex-project/src/assets/components/XSlider.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] XSlider.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7fbe0e4d", Component.options)
	  } else {
	    hotAPI.reload("data-v-7fbe0e4d", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(65);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("57132522", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-7fbe0e4d!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./XSlider.vue", function() {
	     var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-7fbe0e4d!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./XSlider.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.slider{\n    width:750px;\n    height:430px;\n}\n.image {\n    width:750px;\n    height:430px;\n}\n.frame{\n    width: 750px;\n    height: 430px;\n    position: relative;\n}\n.indicator{\n    width: 750px;\n    height: 40px;\n    item-color: white;\n    item-selected-color: #b4282d;\n    item-size: 12px;\n    position: absolute;\n    bottom: 10px;\n    right: 0px;\n}\n", ""]);

	// exports


/***/ }),
/* 66 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: ["imageList"],
	    data: function data() {
	        return {};
	    },

	    methods: {}
	};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('slider', {
	    staticClass: "slider"
	  }, [_vm._l((_vm.imageList), function(img) {
	    return _c('div', {
	      staticClass: "frame"
	    }, [_c('img', {
	      staticClass: "image",
	      attrs: {
	        "src": img.src
	      }
	    })])
	  }), _vm._v(" "), _c('indicator', {
	    staticClass: "indicator"
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7fbe0e4d", module.exports)
	  }
	}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(78)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(71),
	  /* template */
	  __webpack_require__(72),
	  /* scopeId */
	  "data-v-5a6921a0",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jiangjun/weex-project/src/assets/components/Block1.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Block1.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5a6921a0", Component.options)
	  } else {
	    hotAPI.reload("data-v-5a6921a0", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(80);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var navigator = weex.requireModule('navigator');
	exports.default = {
	    props: ["title", "items"],
	    data: function data() {
	        return {};
	    },

	    methods: {}
	};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wrapper"
	  }, [_c('text', {
	    staticClass: "tlt iconfont"
	  }, [_vm._v(_vm._s(_vm.title) + " ")]), _vm._v(" "), _c('div', {
	    staticClass: "box"
	  }, _vm._l((_vm.items), function(i) {
	    return _c('div', {
	      staticClass: "box-item"
	    }, [_c('image', {
	      staticClass: "i-image",
	      attrs: {
	        "resize": "cover",
	        "src": i.bg
	      }
	    }), _vm._v(" "), _c('text', {
	      staticClass: "i-name"
	    }, [_vm._v(_vm._s(i.name))]), _vm._v(" "), _c('div', {
	      staticClass: "i-price"
	    }, [_c('text', {
	      staticClass: "i-price-n"
	    }, [_vm._v(_vm._s(i.price))]), _c('text', {
	      staticClass: "i-price-t"
	    }, [_vm._v("元起")])]), _vm._v(" "), (i.state) ? _c('text', {
	      staticClass: "i-state"
	    }, [_vm._v(_vm._s(i.state))]) : _vm._e()])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5a6921a0", module.exports)
	  }
	}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(74)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(76),
	  /* template */
	  __webpack_require__(77),
	  /* scopeId */
	  "data-v-5a8550a2",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jiangjun/weex-project/src/assets/components/Block3.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Block3.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5a8550a2", Component.options)
	  } else {
	    hotAPI.reload("data-v-5a8550a2", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(75);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("2c83eb66", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-5a8550a2&scoped=true!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Block3.vue", function() {
	     var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-5a8550a2&scoped=true!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Block3.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.iconfont[data-v-5a8550a2] {\n    font-family:iconfont;\n}\n.wrapper[data-v-5a8550a2]{\n    background-color: #fff;\n    padding-bottom: 10px;\n    padding-top: 26px;\n    width: 750px;\n}\n.tlt[data-v-5a8550a2]{\n    text-align: center;\n    color:#333;\n    width: 750px;\n    padding: 10px;\n    font-size: 30px;\n}\n.gb-box[data-v-5a8550a2]{\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n.i-gd[data-v-5a8550a2]{\n    width: 350px;\n    height: 510px;\n    margin-bottom: 20px;\n}\n.gd-img[data-v-5a8550a2]{\n    width: 350px;\n    height: 350px;\n    background-color: #f4f4f4;\n}\n.gd-tlt[data-v-5a8550a2]{\n    font-size: 28px;\n    color:#333;\n    width: 350px;\n    margin-top: 15px;\n    overflow: hidden;\n    lines:1;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n.gd-info[data-v-5a8550a2]{\n    display: block;\n    font-size: 28px;\n    width: 350px;\n    height: 65px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    color:#9F8A60;\n    background-color: #F1ECE2;\n    overflow: hidden;\n    lines:1;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n.gd-price[data-v-5a8550a2]{\n    font-size: 28px;\n    width: 350px;\n    margin-top: 10px;\n    color:#b4282d;\n    overflow: hidden;\n    lines:1;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n", ""]);

	// exports


/***/ }),
/* 76 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//


	exports.default = {
	    props: ["goods"],
	    data: function data() {
	        return {};
	    }
	};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wrapper"
	  }, [_c('text', {
	    staticClass: "tlt"
	  }, [_vm._v("猜你喜欢")]), _vm._v(" "), _c('div', {
	    staticClass: "gb-box"
	  }, _vm._l((_vm.goods), function(i) {
	    return _c('div', {
	      staticClass: "i-gd"
	    }, [_c('image', {
	      staticClass: "gd-img",
	      attrs: {
	        "resize": "cover",
	        "src": i.img
	      }
	    }), _vm._v(" "), _c('text', {
	      staticClass: "gd-info"
	    }, [_vm._v(_vm._s(i.info))]), _vm._v(" "), _c('text', {
	      staticClass: "gd-tlt"
	    }, [_vm._v(_vm._s(i.tlt))]), _vm._v(" "), _c('text', {
	      staticClass: "gd-price"
	    }, [_vm._v("¥" + _vm._s(i.price))])])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5a8550a2", module.exports)
	  }
	}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(79);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("605cb8e0", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-5a6921a0&scoped=true!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Block1.vue", function() {
	     var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-5a6921a0&scoped=true!../../../node_modules/_vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Block1.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.iconfont[data-v-5a6921a0] {\n    font-family:iconfont;\n}\n.wrapper[data-v-5a6921a0]{\n    background-color: #fff;\n    padding-bottom: 6px;\n}\n.tlt[data-v-5a6921a0]{\n    text-align: center;\n    font-size: 30px;\n    margin-top: 30px;\n    margin-bottom: 26px;\n    color:#333;\n}\n.box[data-v-5a6921a0]{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    width: 750px;\n}\n.box-item[data-v-5a6921a0]{\n    width: 350px;\n    height: 226px;\n    margin: 5px;\n    padding: 20px;\n    background-color: #efefef;\n}\n.i-name[data-v-5a6921a0]{\n    position: relative;\n    color:#333;\n    font-size: 28px;\n    width: 300px;\n}\n.i-price[data-v-5a6921a0]{\n    position: relative;\n    margin-top: 10px;\n    display: flex;\n    flex-direction: row;\n}\n.i-price-n[data-v-5a6921a0]{\n    color:#333;\n    font-size: 36px;\n}\n.i-price-t[data-v-5a6921a0]{\n    color:#333;\n    font-size: 24px;\n    margin-top: 12px;\n}\n.i-state[data-v-5a6921a0]{\n    position: relative;\n    font-size: 20px;\n    color:#b8a989;\n    width: 70px;\n    margin-top: 10px;\n    padding: 5px;\n    line-height: 20px;\n    text-align: center;\n    border-width: 1px;\n    border-color: #b8a989;\n    border-radius: 4px;\n}\n.i-image[data-v-5a6921a0]{\n    position: absolute;\n    top:0;\n    left: 0;\n    width: 350px;\n    height: 226px;\n}\n", ""]);

	// exports


/***/ }),
/* 80 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by zwwill on 2017/8/27.
	 */

	var utilFunc = {
	    initIconFont: function initIconFont() {
	        var domModule = weex.requireModule('dom');
	        domModule.addRule('fontFace', {
	            'fontFamily': "iconfont",
	            'src': "url('http://at.alicdn.com/t/font_404010_f29c7wlkludz33di.ttf')"
	        });
	    },
	    setBundleUrl: function setBundleUrl(url, jsFile) {
	        var bundleUrl = url;
	        var host = '';
	        var path = '';
	        var nativeBase = void 0;
	        var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
	        var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	        if (isAndroidAssets) {
	            nativeBase = 'file://assets/dist';
	        } else if (isiOSAssets) {
	            // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
	            // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
	            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	        } else {
	            var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	            var matchFirstPath = /\/\/[^\/]+\/([^\s]+)\//.exec(bundleUrl);
	            if (matches && matches.length >= 2) {
	                host = matches[1];
	            }
	            if (matchFirstPath && matchFirstPath.length >= 2) {
	                path = matchFirstPath[1];
	            }
	            nativeBase = 'http://' + host + '/';
	        }
	        var h5Base = './index.html?page=';
	        // in Native
	        var base = nativeBase;
	        if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
	            // check if in weexpack project
	            if (path === 'web' || path === 'dist') {
	                base = h5Base + '/dist/';
	            } else {
	                base = h5Base + '';
	            }
	        } else {
	            base = nativeBase + (!!path ? path + '/' : '');
	        }

	        var newUrl = base + jsFile;
	        return newUrl;
	    },
	    getUrlSearch: function getUrlSearch(url, name) {
	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	        var r = url.slice(url.indexOf('?') + 1).match(reg);
	        if (r != null) {
	            try {
	                return decodeURIComponent(r[2]);
	            } catch (_e) {
	                return null;
	            }
	        }
	        return null;
	    }
	};

	exports.default = utilFunc;

/***/ })
/******/ ]);