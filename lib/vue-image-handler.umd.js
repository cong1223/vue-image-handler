(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-image-handler"] = factory();
	else
		root["vue-image-handler"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1d86":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4f23":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f0f5c24_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6ba4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f0f5c24_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f0f5c24_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6ba4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "a744":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_cropper_vue_vue_type_style_index_0_id_2cd22fa3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1d86");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_cropper_vue_vue_type_style_index_0_id_2cd22fa3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_cropper_vue_vue_type_style_index_0_id_2cd22fa3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d48b807-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vue-image-handler/src/index.vue?vue&type=template&id=2f0f5c24&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"crop-wrapper mr16 fl",style:({ width: _vm.canvasWidth, height: _vm.canvasHeight })},[_c('ImageCropper',{ref:"cropper",attrs:{"img":_vm.option.img,"outputSize":_vm.option.size,"outputType":_vm.option.outputType,"auto-crop":"","canMove":_vm.option.canMove,"mode":"contain","autoCropWidth":_vm.canvasWidth,"autoCropHeight":_vm.canvasHeight},on:{"realTime":_vm.realTime}})],1),_c('canvas',{staticStyle:{"display":"none"},attrs:{"id":"target_canvas"}}),_c('div',{staticClass:"recover_img_cover fl",style:({ width: _vm.canvasWidth, height: _vm.canvasHeight })},[_c('div',{style:({ backgroundImage: ("url('" + _vm.recoverImgUrl + "')") }),attrs:{"id":"recover_img"}})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-image-handler/src/index.vue?vue&type=template&id=2f0f5c24&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d48b807-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vue-image-handler/src/image-cropper.vue?vue&type=template&id=2cd22fa3&scoped=true&
var image_croppervue_type_template_id_2cd22fa3_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"cropper",staticClass:"vue-cropper",on:{"mouseover":_vm.scaleImg,"mouseout":_vm.cancelScale}},[(_vm.imgs)?_c('div',{staticClass:"cropper-box"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.loading),expression:"!loading"}],staticClass:"cropper-box-canvas",style:({
					'width': _vm.trueWidth + 'px',
					'height': _vm.trueHeight + 'px',
					'transform': 'scale(' + _vm.scale + ',' + _vm.scale + ') ' + 'translate3d('+ _vm.x / _vm.scale + 'px,' + _vm.y / _vm.scale + 'px,' + '0)'
					+ 'rotateZ('+ _vm.rotate * 90 +'deg)'
					})},[_c('img',{ref:"cropperImg",attrs:{"src":_vm.imgs,"alt":"cropper-img"}})])]):_vm._e(),_c('div',{staticClass:"cropper-drag-box",class:{'cropper-move': _vm.move && !_vm.crop, 'cropper-crop': _vm.crop, 'cropper-modal': _vm.cropping},on:{"mousedown":_vm.startMove,"touchstart":_vm.startMove}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.cropping),expression:"cropping"}],staticClass:"cropper-crop-box",style:({
					'width': _vm.cropW + 'px',
					'height': _vm.cropH + 'px',
					'transform': 'translate3d('+ _vm.cropOffsertX + 'px,' + _vm.cropOffsertY + 'px,' + '0)'
				})},[_c('span',{staticClass:"cropper-view-box"},[_c('img',{style:({
						'width': _vm.trueWidth + 'px',
						'height': _vm.trueHeight + 'px',
						'transform': 'scale(' + _vm.scale + ',' + _vm.scale + ') ' + 'translate3d('+ (_vm.x - _vm.cropOffsertX) / _vm.scale  + 'px,' + (_vm.y - _vm.cropOffsertY) / _vm.scale + 'px,' + '0)'
						+ 'rotateZ('+ _vm.rotate * 90 +'deg)'
						}),attrs:{"src":_vm.imgs,"alt":"cropper-img"}})]),_c('span',{staticClass:"cropper-face cropper-move",on:{"mousedown":_vm.cropMove,"touchstart":_vm.cropMove}}),(_vm.info)?_c('span',{staticClass:"crop-info",style:({'top': _vm.cropInfo.top})},[_vm._v(_vm._s(_vm.cropInfo.width)+" × "+_vm._s(_vm.cropInfo.height))]):_vm._e(),(!_vm.fixedBox)?_c('span',[_c('span',{staticClass:"crop-line line-w",on:{"mousedown":function($event){return _vm.changeCropSize($event, false, true, 0, 1)},"touchstart":function($event){return _vm.changeCropSize($event, false, true, 0, 1)}}}),_c('span',{staticClass:"crop-line line-a",on:{"mousedown":function($event){return _vm.changeCropSize($event, true, false, 1, 0)},"touchstart":function($event){return _vm.changeCropSize($event, true, false, 1, 0)}}}),_c('span',{staticClass:"crop-line line-s",on:{"mousedown":function($event){return _vm.changeCropSize($event, false, true, 0, 2)},"touchstart":function($event){return _vm.changeCropSize($event, false, true, 0, 2)}}}),_c('span',{staticClass:"crop-line line-d",on:{"mousedown":function($event){return _vm.changeCropSize($event, true, false, 2, 0)},"touchstart":function($event){return _vm.changeCropSize($event, true, false, 2, 0)}}}),_c('span',{staticClass:"crop-point point1",on:{"mousedown":function($event){return _vm.changeCropSize($event, true, true, 1, 1)},"touchstart":function($event){return _vm.changeCropSize($event, true, true, 1, 1)}}}),_c('span',{staticClass:"crop-point point2",on:{"mousedown":function($event){return _vm.changeCropSize($event, false, true, 0, 1)},"touchstart":function($event){return _vm.changeCropSize($event, false, true, 0, 1)}}}),_c('span',{staticClass:"crop-point point3",on:{"mousedown":function($event){return _vm.changeCropSize($event, true, true, 2, 1)},"touchstart":function($event){return _vm.changeCropSize($event, true, true, 2, 1)}}}),_c('span',{staticClass:"crop-point point4",on:{"mousedown":function($event){return _vm.changeCropSize($event, true, false, 1, 0)},"touchstart":function($event){return _vm.changeCropSize($event, true, false, 1, 0)}}}),_c('span',{staticClass:"crop-point point5",on:{"mousedown":function($event){return _vm.changeCropSize($event, true, false, 2, 0)},"touchstart":function($event){return _vm.changeCropSize($event, true, false, 2, 0)}}}),_c('span',{staticClass:"crop-point point6",on:{"mousedown":function($event){return _vm.changeCropSize($event, true, true, 1, 2)},"touchstart":function($event){return _vm.changeCropSize($event, true, true, 1, 2)}}}),_c('span',{staticClass:"crop-point point7",on:{"mousedown":function($event){return _vm.changeCropSize($event, false, true, 0, 2)},"touchstart":function($event){return _vm.changeCropSize($event, false, true, 0, 2)}}}),_c('span',{staticClass:"crop-point point8",on:{"mousedown":function($event){return _vm.changeCropSize($event, true, true, 2, 2)},"touchstart":function($event){return _vm.changeCropSize($event, true, true, 2, 2)}}})]):_vm._e()])])}
var image_croppervue_type_template_id_2cd22fa3_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-image-handler/src/image-cropper.vue?vue&type=template&id=2cd22fa3&scoped=true&

// CONCATENATED MODULE: ./packages/vue-image-handler/src/exif-js-min.js
const Exif = {};

Exif.getData = (img) => new Promise((reslove, reject) => {
  let obj = {};
  getImageData(img).then(data => {
    obj.arrayBuffer = data;
    obj.orientation = getOrientation(data);
    reslove(obj)
  }).catch(error => {
    reject(error)
  })
})

// 这里的获取exif要将图片转ArrayBuffer对象，这里假设获取了图片的baes64
// 步骤一
// base64转ArrayBuffer对象
function getImageData(img) {
  let data = null;
  return new Promise((reslove, reject) => {
    if (img.src) {
      if (/^data:/i.test(img.src)) { // Data URI
        data = base64ToArrayBuffer(img.src);
        reslove(data)
      } else if (/^blob:/i.test(img.src)) { // Object URL
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
          data = e.target.result;
          reslove(data)
        };
        objectURLToBlob(img.src, function (blob) {
          fileReader.readAsArrayBuffer(blob);
        });
      } else {
        var http = new XMLHttpRequest();
        http.onload = function () {
          if (this.status == 200 || this.status === 0) {
            data = http.response
            reslove(data)
          } else {
            throw "Could not load image";
          }
          http = null;
        };
        http.open("GET", img.src, true);
        http.responseType = "arraybuffer";
        http.send(null);
      }
    } else {
      reject('img error')
    }
  })
}

function objectURLToBlob(url, callback) {
  var http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.responseType = "blob";
  http.onload = function () {
    if (this.status == 200 || this.status === 0) {
      callback(this.response);
    }
  };
  http.send();
}



function base64ToArrayBuffer(base64) {
  base64 = base64.replace(/^data:([^;]+);base64,/gmi, '');
  var binary = atob(base64);
  var len = binary.length;
  var buffer = new ArrayBuffer(len);
  var view = new Uint8Array(buffer);
  for (var i = 0; i < len; i++) {
    view[i] = binary.charCodeAt(i);
  }
  return buffer;
}
// 步骤二，Unicode码转字符串
// ArrayBuffer对象 Unicode码转字符串
function getStringFromCharCode(dataView, start, length) {
  var str = '';
  var i;
  for (i = start, length += start; i < length; i++) {
    str += String.fromCharCode(dataView.getUint8(i));
  }
  return str;
}

// 步骤三，获取jpg图片的exif的角度（在ios体现最明显）
function getOrientation(arrayBuffer) {
  var dataView = new DataView(arrayBuffer);
  var length = dataView.byteLength;
  var orientation;
  var exifIDCode;
  var tiffOffset;
  var firstIFDOffset;
  var littleEndian;
  var endianness;
  var app1Start;
  var ifdStart;
  var offset;
  var i;
  // Only handle JPEG image (start by 0xFFD8)
  if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
    offset = 2;
    while (offset < length) {
      if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
        app1Start = offset;
        break;
      }
      offset++;
    }
  }
  if (app1Start) {
    exifIDCode = app1Start + 4;
    tiffOffset = app1Start + 10;
    if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
      endianness = dataView.getUint16(tiffOffset);
      littleEndian = endianness === 0x4949;

      if (littleEndian || endianness === 0x4D4D /* bigEndian */) {
        if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
          firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

          if (firstIFDOffset >= 0x00000008) {
            ifdStart = tiffOffset + firstIFDOffset;
          }
        }
      }
    }
  }
  if (ifdStart) {
    length = dataView.getUint16(ifdStart, littleEndian);

    for (i = 0; i < length; i++) {
      offset = ifdStart + i * 12 + 2;
      if (dataView.getUint16(offset, littleEndian) === 0x0112 /* Orientation */) {

        // 8 is the offset of the current tag's value
        offset += 8;

        // Get the original orientation value
        orientation = dataView.getUint16(offset, littleEndian);

        // Override the orientation with its default value for Safari (#120)
        // if (IS_SAFARI_OR_UIWEBVIEW) {
        //   dataView.setUint16(offset, 1, littleEndian);
        // }
        break;
      }
    }
  }
  return orientation;
}



/* harmony default export */ var exif_js_min = (Exif);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vue-image-handler/src/image-cropper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var image_croppervue_type_script_lang_js_ = ({
  name: 'ImageCropper',
  data: function() {
    return {
      // 容器高宽
      w: 0,
      h: 0,
      // 图片缩放比例
      scale: 1,
      // 图片偏移x轴
      x: 0,
      // 图片偏移y轴
      y: 0,
      // 图片加载
      loading: true,
      // 图片真实宽度
      trueWidth: 0,
      // 图片真实高度
      trueHeight: 0,
      move: true,
      // 移动的x
      moveX: 0,
      // 移动的y
      moveY: 0,
      // 开启截图
      crop: false,
      // 正在截图
      cropping: false,
      // 裁剪框大小
      cropW: 0,
      cropH: 0,
      cropOldW: 0,
      cropOldH: 0,
      // 判断是否能够改变
      canChangeX: false,
      canChangeY: false,
      // 改变的基准点
      changeCropTypeX: 1,
      changeCropTypeY: 1,
      // 裁剪框的坐标轴
      cropX: 0,
      cropY: 0,
      cropChangeX: 0,
      cropChangeY: 0,
      cropOffsertX: 0,
      cropOffsertY: 0,
      // 支持的滚动事件
      support: "",
      // 移动端手指缩放
      touches: [],
      touchNow: false,
      // 图片旋转
      rotate: 0,
      isIos: false,
      orientation: 0,
      imgs: "",
      // 图片缩放系数
      coe: 0.2,
      // 是否正在多次缩放
      scaling: false,
      scalingSet: "",
      coeStatus: "",
      // 控制emit触发频率
      isCanShow: true
    };
  },
  props: {
    img: {
      type: [String, Blob, null, File],
      default: ""
    },
    // 输出图片压缩比
    outputSize: {
      type: Number,
      default: 1
    },
    outputType: {
      type: String,
      default: "jpeg"
    },
    info: {
      type: Boolean,
      default: true
    },
    // 是否开启滚轮放大缩小
    canScale: {
      type: Boolean,
      default: true
    },
    // 是否自成截图框
    autoCrop: {
      type: Boolean,
      default: false
    },
    autoCropWidth: {
      type: [Number, String],
      default: 0
    },
    autoCropHeight: {
      type: [Number, String],
      default: 0
    },
    // 是否开启固定宽高比
    fixed: {
      type: Boolean,
      default: false
    },
    // 宽高比 w/h
    fixedNumber: {
      type: Array,
      default: () => {
        return [1, 1];
      }
    },
    // 固定大小 禁止改变截图框大小
    fixedBox: {
      type: Boolean,
      default: false
    },
    // 输出截图是否缩放
    full: {
      type: Boolean,
      default: false
    },
    // 是否可以拖动图片
    canMove: {
      type: Boolean,
      default: true
    },
    // 是否可以拖动截图框
    canMoveBox: {
      type: Boolean,
      default: true
    },
    // 上传图片按照原始比例显示
    original: {
      type: Boolean,
      default: false
    },
    // 截图框能否超过图片
    centerBox: {
      type: Boolean,
      default: false
    },
    // 是否根据dpr输出高清图片
    high: {
      type: Boolean,
      default: true
    },
    // 截图框展示宽高类型
    infoTrue: {
      type: Boolean,
      default: false
    },
    // 可以压缩图片宽高  默认不超过200
    maxImgSize: {
      type: [Number, String],
      default: 2000
    },
    // 倍数  可渲染当前截图框的n倍 0 - 1000;
    enlarge: {
      type: [Number, String],
      default: 1
    },
    // 自动预览的固定宽度
    preW: {
      type: [Number, String],
      default: 0
    },
    /*
     图片布局方式 mode 实现和css背景一样的效果
     contain  居中布局 默认不会缩放 保证图片在容器里面 mode: 'contain'
     cover    拉伸布局 填充整个容器  mode: 'cover'
     如果仅有一个数值被给定，这个数值将作为宽度值大小，高度值将被设定为auto。 mode: '50px'
     如果有两个数值被给定，第一个将作为宽度值大小，第二个作为高度值大小。 mode: '50px 60px'
     */
    mode: {
      type: String,
      default: "contain"
    },
    //限制最小区域,可传1以上的数字和字符串，限制长宽都是这么大
    // 也可以传数组[90,90]
    limitMinSize: {
      type: [Number, Array, String],
      default: () => {
        return 10;
      }
    },
  },
  computed: {
    cropInfo() {
      let obj = {};
      obj.top = this.cropOffsertY > 21 ? "-21px" : "0px";
      obj.width = this.cropW > 0 ? this.cropW : 0;
      obj.height = this.cropH > 0 ? this.cropH : 0;
      if (this.infoTrue) {
        let dpr = 1;
        if (this.high && !this.full) {
          dpr = window.devicePixelRatio;
        }
        if ((this.enlarge !== 1) & !this.full) {
          dpr = Math.abs(Number(this.enlarge));
        }
        obj.width = obj.width * dpr;
        obj.height = obj.height * dpr;
        if (this.full) {
          obj.width = obj.width / this.scale;
          obj.height = obj.height / this.scale;
        }
      }
      obj.width = obj.width.toFixed(0);
      obj.height = obj.height.toFixed(0);
      return obj;
    },
    isIE() {
      // var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
      const isIE = !!window.ActiveXObject || 'ActiveXObject' in window; //判断是否IE浏览器
      return isIE;
    },
    passive () {
      return this.isIE ? null : {
        passive: false
      }
    }
  },
  watch: {
    // 如果图片改变， 重新布局
    img() {
      // 当传入图片时, 读取图片信息同时展示
      this.checkedImg();
    },
    imgs(val) {
      if (val === "") {
        return;
      }
      this.reload();
    },
    cropW() {
      this.showPreview();
    },
    cropH() {
      this.showPreview();
    },
    cropOffsertX() {
      this.showPreview();
    },
    cropOffsertY() {
      this.showPreview();
    },
    scale() {
      this.showPreview();
    },
    x() {
      this.showPreview();
    },
    y() {
      this.showPreview();
    },
    autoCrop(val) {
      if (val) {
        this.goAutoCrop();
      }
    },
    // 修改了自动截图框
    autoCropWidth() {
      if (this.autoCrop) {
        this.goAutoCrop();
      }
    },
    autoCropHeight() {
      if (this.autoCrop) {
        this.goAutoCrop();
      }
    },
    mode() {
      this.checkedImg();
    },
    rotate() {
      this.showPreview();
      if (this.autoCrop) {
        this.goAutoCrop(this.cropW, this.cropH);
      } else {
        if (this.cropW > 0 || this.cropH > 0) {
          this.goAutoCrop(this.cropW, this.cropH);
        }
      }
    }
  },
  methods: {
    getVersion (name) {
      var arr = navigator.userAgent.split(' ');
      var chromeVersion = '';
      let result = 0;
      const reg = new RegExp(name, 'i')
      for(var i=0;i < arr.length;i++){
        if(reg.test(arr[i]))
          chromeVersion = arr[i]
      }
      if(chromeVersion){
        result = chromeVersion.split('/')[1].split('.');
      } else {
        result = ['0', '0', '0'];
      }
      return result
    },
    checkOrientationImage(img, orientation, width, height) {
      // 如果是 chrome内核版本在81 safari 在 605 以上不处理图片旋转
      // alert(navigator.userAgent)
      if (this.getVersion('chrome')[0] >= 81) {
        orientation = -1
      } else {
        if (this.getVersion('safari')[0] >= 605 ) {
          const safariVersion = this.getVersion('version')
          if (safariVersion[0] > 13 && safariVersion[1] > 1) {
            orientation = -1
          }
        } else {
          //  判断 ios 版本进行处理
          // 针对 ios 版本大于 13.4的系统不做图片旋转
          const isIos  = navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/)
          if (isIos) {
            let version = isIos[1]
            version = version.split('_')
            if (version[0] > 13 ||  (version[0] >= 13 && version[1] >= 4)) {
              orientation = -1
            }
          }
        }
      }

      // alert(`当前处理的orientation${orientation}`)
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      ctx.save();

      switch (orientation) {
        case 2:
          canvas.width = width;
          canvas.height = height;
          // horizontal flip
          ctx.translate(width, 0);
          ctx.scale(-1, 1);
          break;
        case 3:
          canvas.width = width;
          canvas.height = height;
          //180 graus
          ctx.translate(width / 2, height / 2);
          ctx.rotate((180 * Math.PI) / 180);
          ctx.translate(-width / 2, -height / 2);
          break;
        case 4:
          canvas.width = width;
          canvas.height = height;
          // vertical flip
          ctx.translate(0, height);
          ctx.scale(1, -1);
          break;
        case 5:
          // vertical flip + 90 rotate right
          canvas.height = width;
          canvas.width = height;
          ctx.rotate(0.5 * Math.PI);
          ctx.scale(1, -1);
          break;
        case 6:
          canvas.width = height;
          canvas.height = width;
          //90 graus
          ctx.translate(height / 2, width / 2);
          ctx.rotate((90 * Math.PI) / 180);
          ctx.translate(-width / 2, -height / 2);
          break;
        case 7:
          // horizontal flip + 90 rotate right
          canvas.height = width;
          canvas.width = height;
          ctx.rotate(0.5 * Math.PI);
          ctx.translate(width, -height);
          ctx.scale(-1, 1);
          break;
        case 8:
          canvas.height = width;
          canvas.width = height;
          //-90 graus
          ctx.translate(height / 2, width / 2);
          ctx.rotate((-90 * Math.PI) / 180);
          ctx.translate(-width / 2, -height / 2);
          break;
        default:
          canvas.width = width;
          canvas.height = height;
      }
      ctx.drawImage(img, 0, 0, width, height);
      ctx.restore();
      canvas.toBlob(
        blob => {
          let data = URL.createObjectURL(blob);
          URL.revokeObjectURL(this.imgs)
          this.imgs = data;
        },
        "image/" + this.outputType,
        1
      );
    },
    // checkout img
    checkedImg() {
      if (this.img === null || this.img === '') {
        this.imgs = ''
        this.clearCrop()
        return
      }
      this.loading = true;
      this.scale = 1;
      this.rotate = 0;
      this.clearCrop();
      let img = new Image();
      img.onload = () => {
        if (this.img === "") {
          this.$emit("imgLoad", "error");
          this.$emit("img-load", "error");
          return false;
        }
        let width = img.width;
        let height = img.height;
        exif_js_min.getData(img).then(data => {
          this.orientation = data.orientation || 1;
          let max = Number(this.maxImgSize);
          if (!this.orientation && (width < max) & (height < max)) {
            this.imgs = this.img;
            return;
          }
          if (width > max) {
            height = (height / width) * max;
            width = max;
          }
          if (height > max) {
            width = (width / height) * max;
            height = max;
          }
          this.checkOrientationImage(img, this.orientation, width, height);
        });
      };
      img.onerror = () => {
        this.$emit("imgLoad", "error");
        this.$emit("img-load", "error");
      };
      // 判断如果不是base64图片 再添加crossOrigin属性，否则会导致iOS低版本(10.2)无法显示图片
      if (this.img.substr(0, 4) !== "data") {
        img.crossOrigin = "";
      }
      if (this.isIE) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
          var url = URL.createObjectURL(this.response);
          img.src = url;
        };
        xhr.open("GET", this.img, true);
        xhr.responseType = "blob";
        xhr.send();
      } else {
        img.src = this.img;
      }
    },
    // 当按下鼠标键
    startMove(e) {
      e.preventDefault();
      // 如果move 为true 表示当前可以拖动
      if (this.move && !this.crop) {
        if (!this.canMove) {
          return false;
        }
        // 开始移动
        this.moveX = ('clientX' in e ? e.clientX : e.touches[0].clientX) - this.x;
        this.moveY = ('clientY' in e ? e.clientY : e.touches[0].clientY) - this.y;
        if (e.touches) {
          window.addEventListener("touchmove", this.moveImg);
          window.addEventListener("touchend", this.leaveImg);
          if (e.touches.length == 2) {
            // 记录手指刚刚放上去
            this.touches = e.touches;
            window.addEventListener("touchmove", this.touchScale);
            window.addEventListener("touchend", this.cancelTouchScale);
          }
        } else {
          window.addEventListener("mousemove", this.moveImg);
          window.addEventListener("mouseup", this.leaveImg);
        }
        // 触发图片移动事件
        this.$emit("imgMoving", {
          moving: true,
          axis: this.getImgAxis()
        });
        this.$emit("img-moving", {
          moving: true,
          axis: this.getImgAxis()
        });
      } else {
        // 截图ing
        this.cropping = true;
        // 绑定截图事件
        window.addEventListener("mousemove", this.createCrop);
        window.addEventListener("mouseup", this.endCrop);
        window.addEventListener("touchmove", this.createCrop);
        window.addEventListener("touchend", this.endCrop);
        this.cropOffsertX = e.offsetX
          ? e.offsetX
          : e.touches[0].pageX - this.$refs.cropper.offsetLeft;
        this.cropOffsertY = e.offsetY
          ? e.offsetY
          : e.touches[0].pageY - this.$refs.cropper.offsetTop;
        this.cropX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
        this.cropY = 'clientY' in e ? e.clientY : e.touches[0].clientY;
        this.cropChangeX = this.cropOffsertX;
        this.cropChangeY = this.cropOffsertY;
        this.cropW = 0;
        this.cropH = 0;
      }
    },
    // 移动端缩放
    touchScale(e) {
      e.preventDefault();
      let scale = this.scale;
      // 记录变化量
      // 第一根手指
      var oldTouch1 = {
        x: this.touches[0].clientX,
        y: this.touches[0].clientY
      };
      var newTouch1 = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
      // 第二根手指
      var oldTouch2 = {
        x: this.touches[1].clientX,
        y: this.touches[1].clientY
      };
      var newTouch2 = {
        x: e.touches[1].clientX,
        y: e.touches[1].clientY
      };
      var oldL = Math.sqrt(
        Math.pow(oldTouch1.x - oldTouch2.x, 2) +
        Math.pow(oldTouch1.y - oldTouch2.y, 2)
      );
      var newL = Math.sqrt(
        Math.pow(newTouch1.x - newTouch2.x, 2) +
        Math.pow(newTouch1.y - newTouch2.y, 2)
      );
      var cha = newL - oldL;
      // 根据图片本身大小 决定每次改变大小的系数, 图片越大系数越小
      // 1px - 0.2
      var coe = 1;
      coe =
        coe / this.trueWidth > coe / this.trueHeight
          ? coe / this.trueHeight
          : coe / this.trueWidth;
      coe = coe > 0.1 ? 0.1 : coe;
      var num = coe * cha;
      if (!this.touchNow) {
        this.touchNow = true;
        if (cha > 0) {
          scale += Math.abs(num);
        } else if (cha < 0) {
          scale > Math.abs(num) ? (scale -= Math.abs(num)) : scale;
        }
        this.touches = e.touches;
        setTimeout(() => {
          this.touchNow = false;
        }, 8);
        if (!this.checkoutImgAxis(this.x, this.y, scale)) {
          return false;
        }
        this.scale = scale;
      }
    },
    cancelTouchScale() {
      window.removeEventListener("touchmove", this.touchScale);
    },
    // 移动图片
    moveImg(e) {
      e.preventDefault();
      if (e.touches && e.touches.length === 2) {
        this.touches = e.touches;
        window.addEventListener("touchmove", this.touchScale);
        window.addEventListener("touchend", this.cancelTouchScale);
        window.removeEventListener("touchmove", this.moveImg);
        return false;
      }
      let nowX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
      let nowY = 'clientY' in e ? e.clientY : e.touches[0].clientY;
      let changeX, changeY;
      changeX = nowX - this.moveX;
      changeY = nowY - this.moveY;
      this.$nextTick(() => {
        if (this.centerBox) {
          let axis = this.getImgAxis(changeX, changeY, this.scale);
          let cropAxis = this.getCropAxis();
          let imgW = this.trueHeight * this.scale;
          let imgH = this.trueWidth * this.scale;
          let maxLeft, maxTop, maxRight, maxBottom;
          switch (this.rotate) {
            case 1:
            case -1:
            case 3:
            case -3:
              maxLeft =
                this.cropOffsertX -
                (this.trueWidth * (1 - this.scale)) / 2 +
                (imgW - imgH) / 2;
              maxTop =
                this.cropOffsertY -
                (this.trueHeight * (1 - this.scale)) / 2 +
                (imgH - imgW) / 2;
              maxRight = maxLeft - imgW + this.cropW;
              maxBottom = maxTop - imgH + this.cropH;
              break;
            default:
              maxLeft =
                this.cropOffsertX - (this.trueWidth * (1 - this.scale)) / 2;
              maxTop =
                this.cropOffsertY - (this.trueHeight * (1 - this.scale)) / 2;
              maxRight = maxLeft - imgH + this.cropW;
              maxBottom = maxTop - imgW + this.cropH;
              break;
          }
          // 图片左边 图片不能超过截图框
          if (axis.x1 >= cropAxis.x1) {
            changeX = maxLeft;
          }
          // 图片上边 图片不能超过截图框
          if (axis.y1 >= cropAxis.y1) {
            changeY = maxTop;
          }
          // 图片右边
          if (axis.x2 <= cropAxis.x2) {
            changeX = maxRight;
          }
          // 图片下边
          if (axis.y2 <= cropAxis.y2) {
            changeY = maxBottom;
          }
        }
        this.x = changeX;
        this.y = changeY;
        // 触发图片移动事件
        this.$emit("imgMoving", {
          moving: true,
          axis: this.getImgAxis()
        });
        this.$emit("img-moving", {
          moving: true,
          axis: this.getImgAxis()
        });
      });
    },
    // 移动图片结束
    leaveImg() {
      window.removeEventListener("mousemove", this.moveImg);
      window.removeEventListener("touchmove", this.moveImg);
      window.removeEventListener("mouseup", this.leaveImg);
      window.removeEventListener("touchend", this.leaveImg);
      // 触发图片移动事件
      this.$emit("imgMoving", {
        moving: false,
        axis: this.getImgAxis()
      });
      this.$emit("img-moving", {
        moving: false,
        axis: this.getImgAxis()
      });
    },
    // 缩放图片
    scaleImg() {
      if (this.canScale) {
        window.addEventListener(this.support, this.changeSize, this.passive);
      }
    },
    // 移出框
    cancelScale() {
      if (this.canScale) {
        window.removeEventListener(this.support, this.changeSize);
      }
    },
    // 改变大小函数
    changeSize(e) {
      e.preventDefault();
      let scale = this.scale;
      var change = e.deltaY || e.wheelDelta;
      // 根据图片本身大小 决定每次改变大小的系数, 图片越大系数越小
      var isFirefox = navigator.userAgent.indexOf("Firefox");
      change = isFirefox > 0 ? change * 30 : change;
      // 修复ie的滚动缩放
      if (this.isIE) {
        change = -change;
      }
      // 1px - 0.2
      var coe = this.coe;
      coe =
        coe / this.trueWidth > coe / this.trueHeight
          ? coe / this.trueHeight
          : coe / this.trueWidth;
      var num = coe * change;
      num < 0
        ? (scale += Math.abs(num))
        : scale > Math.abs(num)
        ? (scale -= Math.abs(num))
        : scale;
      // 延迟0.1s 每次放大大或者缩小的范围
      let status = num < 0 ? "add" : "reduce";
      if (status !== this.coeStatus) {
        this.coeStatus = status;
        this.coe = 0.2;
      }
      if (!this.scaling) {
        this.scalingSet = setTimeout(() => {
          this.scaling = false;
          this.coe = this.coe += 0.01;
        }, 50);
      }
      this.scaling = true;
      if (!this.checkoutImgAxis(this.x, this.y, scale)) {
        return false;
      }
      this.scale = scale;
    },
    // 修改图片大小函数
    changeScale(num) {
      let scale = this.scale;
      num = num || 1;
      var coe = 20;
      coe =
        coe / this.trueWidth > coe / this.trueHeight
          ? coe / this.trueHeight
          : coe / this.trueWidth;
      num = num * coe;
      num > 0
        ? (scale += Math.abs(num))
        : scale > Math.abs(num)
        ? (scale -= Math.abs(num))
        : scale;
      if (!this.checkoutImgAxis(this.x, this.y, scale)) {
        return false;
      }
      this.scale = scale;
    },
    // 创建截图框
    createCrop(e) {
      e.preventDefault();
      // 移动生成大小
      var nowX = 'clientX' in e ? e.clientX : e.touches ? e.touches[0].clientX : 0;
      var nowY = 'clientY' in e ? e.clientY : e.touches ? e.touches[0].clientY : 0;
      this.$nextTick(() => {
        var fw = nowX - this.cropX;
        var fh = nowY - this.cropY;
        if (fw > 0) {
          this.cropW =
            fw + this.cropChangeX > this.w ? this.w - this.cropChangeX : fw;
          this.cropOffsertX = this.cropChangeX;
        } else {
          this.cropW =
            this.w - this.cropChangeX + Math.abs(fw) > this.w
              ? this.cropChangeX
              : Math.abs(fw);
          this.cropOffsertX =
            this.cropChangeX + fw > 0 ? this.cropChangeX + fw : 0;
        }
        if (!this.fixed) {
          if (fh > 0) {
            this.cropH =
              fh + this.cropChangeY > this.h ? this.h - this.cropChangeY : fh;
            this.cropOffsertY = this.cropChangeY;
          } else {
            this.cropH =
              this.h - this.cropChangeY + Math.abs(fh) > this.h
                ? this.cropChangeY
                : Math.abs(fh);
            this.cropOffsertY =
              this.cropChangeY + fh > 0 ? this.cropChangeY + fh : 0;
          }
        } else {
          var fixedHeight =
            (this.cropW / this.fixedNumber[0]) * this.fixedNumber[1];
          if (fixedHeight + this.cropOffsertY > this.h) {
            this.cropH = this.h - this.cropOffsertY;
            this.cropW =
              (this.cropH / this.fixedNumber[1]) * this.fixedNumber[0];
            if (fw > 0) {
              this.cropOffsertX = this.cropChangeX;
            } else {
              this.cropOffsertX = this.cropChangeX - this.cropW;
            }
          } else {
            this.cropH = fixedHeight;
          }
          // eslint-disable-next-line no-self-assign
          this.cropOffsertY = this.cropOffsertY;
        }
      });
    },
    // 改变截图框大小
    changeCropSize(e, w, h, typeW, typeH) {
      e.preventDefault();
      window.addEventListener("mousemove", this.changeCropNow);
      window.addEventListener("mouseup", this.changeCropEnd);
      window.addEventListener("touchmove", this.changeCropNow);
      window.addEventListener("touchend", this.changeCropEnd);
      this.canChangeX = w;
      this.canChangeY = h;
      this.changeCropTypeX = typeW;
      this.changeCropTypeY = typeH;
      this.cropX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
      this.cropY = 'clientY' in e ? e.clientY : e.touches[0].clientY;
      this.cropOldW = this.cropW;
      this.cropOldH = this.cropH;
      this.cropChangeX = this.cropOffsertX;
      this.cropChangeY = this.cropOffsertY;
      if (this.fixed) {
        if (this.canChangeX && this.canChangeY) {
          this.canChangeY = 0;
        }
      }
      this.$emit('change-crop-size', {
        width: this.cropW,
        height: this.cropH
      })
    },
    // 正在改变
    changeCropNow(e) {
      e.preventDefault();
      var nowX = 'clientX' in e ? e.clientX : e.touches ? e.touches[0].clientX : 0;
      var nowY = 'clientY' in e ? e.clientY : e.touches ? e.touches[0].clientY : 0;
      // 容器的宽高
      let wrapperW = this.w;
      let wrapperH = this.h;
      // 不能超过的坐标轴
      let minX = 0;
      let minY = 0;
      if (this.centerBox) {
        let axis = this.getImgAxis();
        let imgW = axis.x2;
        let imgH = axis.y2;
        minX = axis.x1 > 0 ? axis.x1 : 0;
        minY = axis.y1 > 0 ? axis.y1 : 0;
        if (wrapperW > imgW) {
          wrapperW = imgW;
        }
        if (wrapperH > imgH) {
          wrapperH = imgH;
        }
      }
      this.$nextTick(() => {
        var fw = nowX - this.cropX;
        var fh = nowY - this.cropY;
        if (this.canChangeX) {
          if (this.changeCropTypeX === 1) {
            if (this.cropOldW - fw > 0) {
              this.cropW =
                wrapperW - this.cropChangeX - fw <= wrapperW - minX
                  ? this.cropOldW - fw
                  : this.cropOldW + this.cropChangeX - minX;
              this.cropOffsertX =
                wrapperW - this.cropChangeX - fw <= wrapperW - minX
                  ? this.cropChangeX + fw
                  : minX;
            } else {
              this.cropW =
                Math.abs(fw) + this.cropChangeX <= wrapperW
                  ? Math.abs(fw) - this.cropOldW
                  : wrapperW - this.cropOldW - this.cropChangeX;
              this.cropOffsertX = this.cropChangeX + this.cropOldW;
            }
          } else if (this.changeCropTypeX === 2) {
            if (this.cropOldW + fw > 0) {
              this.cropW =
                this.cropOldW + fw + this.cropOffsertX <= wrapperW
                  ? this.cropOldW + fw
                  : wrapperW - this.cropOffsertX;
              this.cropOffsertX = this.cropChangeX;
            } else {
              // 右侧坐标抽 超过左侧
              this.cropW =
                wrapperW - this.cropChangeX + Math.abs(fw + this.cropOldW) <=
                wrapperW - minX
                  ? Math.abs(fw + this.cropOldW)
                  : this.cropChangeX - minX;
              this.cropOffsertX =
                wrapperW - this.cropChangeX + Math.abs(fw + this.cropOldW) <=
                wrapperW - minX
                  ? this.cropChangeX - Math.abs(fw + this.cropOldW)
                  : minX;
            }
          }
        }
        if (this.canChangeY) {
          if (this.changeCropTypeY === 1) {
            if (this.cropOldH - fh > 0) {
              this.cropH =
                wrapperH - this.cropChangeY - fh <= wrapperH - minY
                  ? this.cropOldH - fh
                  : this.cropOldH + this.cropChangeY - minY;
              this.cropOffsertY =
                wrapperH - this.cropChangeY - fh <= wrapperH - minY
                  ? this.cropChangeY + fh
                  : minY;
            } else {
              this.cropH =
                Math.abs(fh) + this.cropChangeY <= wrapperH
                  ? Math.abs(fh) - this.cropOldH
                  : wrapperH - this.cropOldH - this.cropChangeY;
              this.cropOffsertY = this.cropChangeY + this.cropOldH;
            }
          } else if (this.changeCropTypeY === 2) {
            if (this.cropOldH + fh > 0) {
              this.cropH =
                this.cropOldH + fh + this.cropOffsertY <= wrapperH
                  ? this.cropOldH + fh
                  : wrapperH - this.cropOffsertY;
              this.cropOffsertY = this.cropChangeY;
            } else {
              this.cropH =
                wrapperH - this.cropChangeY + Math.abs(fh + this.cropOldH) <=
                wrapperH - minY
                  ? Math.abs(fh + this.cropOldH)
                  : this.cropChangeY - minY;
              this.cropOffsertY =
                wrapperH - this.cropChangeY + Math.abs(fh + this.cropOldH) <=
                wrapperH - minY
                  ? this.cropChangeY - Math.abs(fh + this.cropOldH)
                  : minY;
            }
          }
        }
        if (this.canChangeX && this.fixed) {
          var fixedHeight =
            (this.cropW / this.fixedNumber[0]) * this.fixedNumber[1];
          if (fixedHeight + this.cropOffsertY > wrapperH) {
            this.cropH = wrapperH - this.cropOffsertY;
            this.cropW =
              (this.cropH / this.fixedNumber[1]) * this.fixedNumber[0];
          } else {
            this.cropH = fixedHeight;
          }
        }
        if (this.canChangeY && this.fixed) {
          var fixedWidth =
            (this.cropH / this.fixedNumber[1]) * this.fixedNumber[0];
          if (fixedWidth + this.cropOffsertX > wrapperW) {
            this.cropW = wrapperW - this.cropOffsertX;
            this.cropH =
              (this.cropW / this.fixedNumber[0]) * this.fixedNumber[1];
          } else {
            this.cropW = fixedWidth;
          }
        }
      });
    },
    checkCropLimitSize () {
      let { cropW, cropH, limitMinSize } = this;
      let limitMinNum = new Array;
      if (!Array.isArray[limitMinSize]) {
        limitMinNum = [limitMinSize, limitMinSize]
      } else {
        limitMinNum = limitMinSize
      }

      //限制最小宽度和高度
      cropW = parseFloat(limitMinNum[0])
      cropH = parseFloat(limitMinNum[1])
      return [cropW, cropH]
    },
    // 结束改变
    changeCropEnd() {
      window.removeEventListener("mousemove", this.changeCropNow);
      window.removeEventListener("mouseup", this.changeCropEnd);
      window.removeEventListener("touchmove", this.changeCropNow);
      window.removeEventListener("touchend", this.changeCropEnd);
    },
    // 创建完成
    endCrop() {
      if (this.cropW === 0 && this.cropH === 0) {
        this.cropping = false;
      }
      window.removeEventListener("mousemove", this.createCrop);
      window.removeEventListener("mouseup", this.endCrop);
      window.removeEventListener("touchmove", this.createCrop);
      window.removeEventListener("touchend", this.endCrop);
    },
    // 开始截图
    startCrop() {
      this.crop = true;
    },
    // 停止截图
    stopCrop() {
      this.crop = false;
    },
    // 清除截图
    clearCrop() {
      this.cropping = false;
      this.cropW = 0;
      this.cropH = 0;
    },
    // 截图移动
    cropMove(e) {
      e.preventDefault();
      if (!this.canMoveBox) {
        this.crop = false;
        this.startMove(e);
        return false;
      }
      if (e.touches && e.touches.length === 2) {
        this.crop = false;
        this.startMove(e);
        this.leaveCrop();
        return false;
      }
      window.addEventListener("mousemove", this.moveCrop);
      window.addEventListener("mouseup", this.leaveCrop);
      window.addEventListener("touchmove", this.moveCrop);
      window.addEventListener("touchend", this.leaveCrop);
      let x = 'clientX' in e ? e.clientX : e.touches[0].clientX;
      let y = 'clientY' in e ? e.clientY : e.touches[0].clientY;
      let newX, newY;
      newX = x - this.cropOffsertX;
      newY = y - this.cropOffsertY;
      this.cropX = newX;
      this.cropY = newY;
      // 触发截图框移动事件
      this.$emit("cropMoving", {
        moving: true,
        axis: this.getCropAxis()
      });
      this.$emit("crop-moving", {
        moving: true,
        axis: this.getCropAxis()
      });
    },
    moveCrop(e, isMove) {
      let nowX = 0;
      let nowY = 0;
      if (e) {
        e.preventDefault();
        nowX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
        nowY = 'clientY' in e ? e.clientY : e.touches[0].clientY;
      }
      this.$nextTick(() => {
        let cx, cy;
        let fw = nowX - this.cropX;
        let fh = nowY - this.cropY;
        if (isMove) {
          fw = this.cropOffsertX;
          fh = this.cropOffsertY;
        }
        // 不能超过外层容器
        if (fw <= 0) {
          cx = 0;
        } else if (fw + this.cropW > this.w) {
          cx = this.w - this.cropW;
        } else {
          cx = fw;
        }
        if (fh <= 0) {
          cy = 0;
        } else if (fh + this.cropH > this.h) {
          cy = this.h - this.cropH;
        } else {
          cy = fh;
        }
        // 不能超过图片
        if (this.centerBox) {
          let axis = this.getImgAxis();
          // 横坐标判断
          if (cx <= axis.x1) {
            cx = axis.x1;
          }
          if (cx + this.cropW > axis.x2) {
            cx = axis.x2 - this.cropW;
          }
          // 纵坐标纵轴
          if (cy <= axis.y1) {
            cy = axis.y1;
          }
          if (cy + this.cropH > axis.y2) {
            cy = axis.y2 - this.cropH;
          }
        }
        this.cropOffsertX = cx;
        this.cropOffsertY = cy;
        // 触发截图框移动事件
        this.$emit("cropMoving", {
          moving: true,
          axis: this.getCropAxis()
        });
        this.$emit("crop-moving", {
          moving: true,
          axis: this.getCropAxis()
        });
      });
    },
    // 算出不同场景下面 图片相对于外层容器的坐标轴
    getImgAxis(x, y, scale) {
      x = x || this.x;
      y = y || this.y;
      scale = scale || this.scale;
      // 如果设置了截图框在图片内， 那么限制截图框不能超过图片的坐标
      // 图片的坐标
      let obj = {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
      };
      let imgW = this.trueWidth * scale;
      let imgH = this.trueHeight * scale;
      switch (this.rotate) {
        case 0:
          obj.x1 = x + (this.trueWidth * (1 - scale)) / 2;
          obj.x2 = obj.x1 + this.trueWidth * scale;
          obj.y1 = y + (this.trueHeight * (1 - scale)) / 2;
          obj.y2 = obj.y1 + this.trueHeight * scale;
          break;
        case 1:
        case -1:
        case 3:
        case -3:
          obj.x1 = x + (this.trueWidth * (1 - scale)) / 2 + (imgW - imgH) / 2;
          obj.x2 = obj.x1 + this.trueHeight * scale;
          obj.y1 = y + (this.trueHeight * (1 - scale)) / 2 + (imgH - imgW) / 2;
          obj.y2 = obj.y1 + this.trueWidth * scale;
          break;
        default:
          obj.x1 = x + (this.trueWidth * (1 - scale)) / 2;
          obj.x2 = obj.x1 + this.trueWidth * scale;
          obj.y1 = y + (this.trueHeight * (1 - scale)) / 2;
          obj.y2 = obj.y1 + this.trueHeight * scale;
          break;
      }
      return obj;
    },
    // 获取截图框的坐标轴
    getCropAxis() {
      let obj = {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
      };
      obj.x1 = this.cropOffsertX;
      obj.x2 = obj.x1 + this.cropW;
      obj.y1 = this.cropOffsertY;
      obj.y2 = obj.y1 + this.cropH;
      return obj;
    },
    leaveCrop() {
      window.removeEventListener("mousemove", this.moveCrop);
      window.removeEventListener("mouseup", this.leaveCrop);
      window.removeEventListener("touchmove", this.moveCrop);
      window.removeEventListener("touchend", this.leaveCrop);
      // 触发截图框移动事件
      this.$emit("cropMoving", {
        moving: false,
        axis: this.getCropAxis()
      });
      this.$emit("crop-moving", {
        moving: false,
        axis: this.getCropAxis()
      });
    },
    getCropChecked(cb) {
      let canvas = document.createElement("canvas");
      let img = new Image();
      let rotate = this.rotate;
      let trueWidth = this.trueWidth;
      let trueHeight = this.trueHeight;
      let cropOffsertX = this.cropOffsertX;
      let cropOffsertY = this.cropOffsertY;
      img.onload = () => {
        if (this.cropW !== 0) {
          let ctx = canvas.getContext("2d");
          let dpr = 1;
          if (this.high & !this.full) {
            dpr = window.devicePixelRatio;
          }
          if ((this.enlarge !== 1) & !this.full) {
            dpr = Math.abs(Number(this.enlarge));
          }
          let width = this.cropW * dpr;
          let height = this.cropH * dpr;
          let imgW = trueWidth * this.scale * dpr;
          let imgH = trueHeight * this.scale * dpr;
          // 图片x轴偏移
          let dx =
            (this.x - cropOffsertX + (this.trueWidth * (1 - this.scale)) / 2) *
            dpr;
          // 图片y轴偏移
          let dy =
            (this.y - cropOffsertY + (this.trueHeight * (1 - this.scale)) / 2) *
            dpr;
          //保存状态
          setCanvasSize(width, height);
          ctx.save();
          switch (rotate) {
            case 0:
              if (!this.full) {
                ctx.drawImage(img, dx, dy, imgW, imgH);
              } else {
                // 输出原图比例截图
                setCanvasSize(width / this.scale, height / this.scale);
                ctx.drawImage(
                  img,
                  dx / this.scale,
                  dy / this.scale,
                  imgW / this.scale,
                  imgH / this.scale
                );
              }
              break;
            case 1:
            case -3:
              if (!this.full) {
                // 换算图片旋转后的坐标弥补
                dx = dx + (imgW - imgH) / 2;
                dy = dy + (imgH - imgW) / 2;
                ctx.rotate((rotate * 90 * Math.PI) / 180);
                ctx.drawImage(img, dy, -dx - imgH, imgW, imgH);
              } else {
                setCanvasSize(width / this.scale, height / this.scale);
                // 换算图片旋转后的坐标弥补
                dx =
                  dx / this.scale + (imgW / this.scale - imgH / this.scale) / 2;
                dy =
                  dy / this.scale + (imgH / this.scale - imgW / this.scale) / 2;
                ctx.rotate((rotate * 90 * Math.PI) / 180);
                ctx.drawImage(
                  img,
                  dy,
                  -dx - imgH / this.scale,
                  imgW / this.scale,
                  imgH / this.scale
                );
              }
              break;
            case 2:
            case -2:
              if (!this.full) {
                ctx.rotate((rotate * 90 * Math.PI) / 180);
                ctx.drawImage(img, -dx - imgW, -dy - imgH, imgW, imgH);
              } else {
                setCanvasSize(width / this.scale, height / this.scale);
                ctx.rotate((rotate * 90 * Math.PI) / 180);
                dx = dx / this.scale;
                dy = dy / this.scale;
                ctx.drawImage(
                  img,
                  -dx - imgW / this.scale,
                  -dy - imgH / this.scale,
                  imgW / this.scale,
                  imgH / this.scale
                );
              }
              break;
            case 3:
            case -1:
              if (!this.full) {
                // 换算图片旋转后的坐标弥补
                dx = dx + (imgW - imgH) / 2;
                dy = dy + (imgH - imgW) / 2;
                ctx.rotate((rotate * 90 * Math.PI) / 180);
                ctx.drawImage(img, -dy - imgW, dx, imgW, imgH);
              } else {
                setCanvasSize(width / this.scale, height / this.scale);
                // 换算图片旋转后的坐标弥补
                dx =
                  dx / this.scale + (imgW / this.scale - imgH / this.scale) / 2;
                dy =
                  dy / this.scale + (imgH / this.scale - imgW / this.scale) / 2;
                ctx.rotate((rotate * 90 * Math.PI) / 180);
                ctx.drawImage(
                  img,
                  -dy - imgW / this.scale,
                  dx,
                  imgW / this.scale,
                  imgH / this.scale
                );
              }
              break;
            default:
              if (!this.full) {
                ctx.drawImage(img, dx, dy, imgW, imgH);
              } else {
                // 输出原图比例截图
                setCanvasSize(width / this.scale, height / this.scale);
                ctx.drawImage(
                  img,
                  dx / this.scale,
                  dy / this.scale,
                  imgW / this.scale,
                  imgH / this.scale
                );
              }
          }
          ctx.restore();
        } else {
          let width = trueWidth * this.scale;
          let height = trueHeight * this.scale;
          let ctx = canvas.getContext("2d");
          ctx.save();
          switch (rotate) {
            case 0:
              setCanvasSize(width, height);
              ctx.drawImage(img, 0, 0, width, height);
              break;
            case 1:
            case -3:
              // 旋转90度 或者-270度 宽度和高度对调
              setCanvasSize(height, width);
              ctx.rotate((rotate * 90 * Math.PI) / 180);
              ctx.drawImage(img, 0, -height, width, height);
              break;
            case 2:
            case -2:
              setCanvasSize(width, height);
              ctx.rotate((rotate * 90 * Math.PI) / 180);
              ctx.drawImage(img, -width, -height, width, height);
              break;
            case 3:
            case -1:
              setCanvasSize(height, width);
              ctx.rotate((rotate * 90 * Math.PI) / 180);
              ctx.drawImage(img, -width, 0, width, height);
              break;
            default:
              setCanvasSize(width, height);
              ctx.drawImage(img, 0, 0, width, height);
          }
          ctx.restore();
        }
        cb(canvas);
      };
      // 判断图片是否是base64
      var s = this.img.substr(0, 4);
      if (s !== "data") {
        img.crossOrigin = "Anonymous";
      }
      img.src = this.imgs;
      function setCanvasSize(width, height) {
        canvas.width = Math.round(width);
        canvas.height = Math.round(height);
      }
    },
    // 获取转换成base64 的图片信息
    getCropData(cb) {
      this.getCropChecked(data => {
        cb(data.toDataURL("image/" + this.outputType, this.outputSize));
      });
    },
    //canvas获取为blob对象
    getCropBlob(cb) {
      this.getCropChecked(data => {
        data.toBlob(
          blob => cb(blob),
          "image/" + this.outputType,
          this.outputSize
        );
      });
    },
    // 自动预览函数
    showPreview() {
      // 优化不要多次触发
      if (this.isCanShow) {
        this.isCanShow = false;
        setTimeout(() => {
          this.isCanShow = true;
        }, 16);
      } else {
        return false;
      }
      let w = this.cropW;
      let h = this.cropH;
      let scale = this.scale;
      var obj = {};
      obj.div = {
        width: `${w}px`,
        height: `${h}px`
      };
      let transformX = (this.x - this.cropOffsertX) / scale;
      let transformY = (this.y - this.cropOffsertY) / scale;
      let transformZ = 0;
      obj.w = w;
      obj.h = h;
      obj.url = this.imgs;
      obj.img = {
        width: `${this.trueWidth}px`,
        height: `${this.trueHeight}px`,
        transform: `scale(${scale})translate3d(${transformX}px, ${transformY}px, ${transformZ}px)rotateZ(${this
          .rotate * 90}deg)`
      };
      obj.html = `
      <div class="show-preview" style="width: ${obj.w}px; height: ${
        obj.h
      }px,; overflow: hidden">
        <div style="width: ${w}px; height: ${h}px">
          <img src=${obj.url} style="width: ${this.trueWidth}px; height: ${
        this.trueHeight
      }px; transform:
          scale(${scale})translate3d(${transformX}px, ${transformY}px, ${transformZ}px)rotateZ(${this
        .rotate * 90}deg)">
        </div>
      </div>`;
      this.$emit("realTime", obj);
      this.$emit("real-time", obj);
    },
    // reload 图片布局函数
    reload() {
      let img = new Image();
      img.onload = () => {
        // 读取图片的信息原始信息， 解析是否需要旋转
        // 读取图片的旋转信息
        // 得到外层容器的宽度高度
        this.w = parseFloat(window.getComputedStyle(this.$refs.cropper).width);
        this.h = parseFloat(window.getComputedStyle(this.$refs.cropper).height);
        // 存入图片真实高度
        this.trueWidth = img.width;
        this.trueHeight = img.height;
        // 判断是否需要压缩大图
        if (!this.original) {
          // 判断布局方式 mode
          this.scale = this.checkedMode();
        } else {
          this.scale = 1;
        }
        this.$nextTick(() => {
          this.x =
            -(this.trueWidth - this.trueWidth * this.scale) / 2 +
            (this.w - this.trueWidth * this.scale) / 2;
          this.y =
            -(this.trueHeight - this.trueHeight * this.scale) / 2 +
            (this.h - this.trueHeight * this.scale) / 2;
          this.loading = false;
          // // 获取是否开启了自动截图
          if (this.autoCrop) {
            this.goAutoCrop();
          }
          // 图片加载成功的回调
          this.$emit("img-load", "success");
          this.$emit("imgLoad", "success");
          setTimeout(() => {
            this.showPreview();
          }, 20);
        });
      };
      img.onerror = () => {
        this.$emit("imgLoad", "error");
        this.$emit("img-load", "error");
      };
      img.src = this.imgs;
    },
    // 背景布局的函数
    checkedMode() {
      let scale = 1;
      // 通过字符串分割
      let imgW = this.trueWidth;
      let imgH = this.trueHeight;
      const arr = this.mode.split(" ");
      switch (arr[0]) {
        case "contain":
          if (this.trueWidth > this.w) {
            // 如果图片宽度大于容器宽度
            scale = this.w / this.trueWidth;
          }
          if (this.trueHeight * scale > this.h) {
            scale = this.h / this.trueHeight;
          }
          break;
        case "cover":
          // 扩展布局 默认填充满整个容器
          // 图片宽度大于容器
          imgW = this.w;
          scale = imgW / this.trueWidth;
          imgH = imgH * scale;
          // 如果扩展之后高度小于容器的外层高度 继续扩展高度
          if (imgH < this.h) {
            imgH = this.h;
            scale = imgH / this.trueHeight;
          }
          break;
        default:
          try {
            let str = arr[0];
            if (str.search("px") !== -1) {
              str = str.replace("px", "");
              imgW = parseFloat(str);
              const scaleX = imgW / this.trueWidth;
              let scaleY = 1;
              let strH = arr[1];
              if (strH.search("px") !== -1) {
                strH = strH.replace("px", "");
                imgH = parseFloat(strH);
                scaleY = imgH / this.trueHeight;
              }
              scale = Math.min(scaleX,scaleY)
            }
            if (str.search("%") !== -1) {
              str = str.replace("%", "");
              imgW = (parseFloat(str) / 100) * this.w;
              scale = imgW / this.trueWidth;
            }
            if (arr.length === 2 && str === "auto") {
              let str2 = arr[1];
              if (str2.search("px") !== -1) {
                str2 = str2.replace("px", "");
                imgH = parseFloat(str2);
                scale = imgH / this.trueHeight;
              }
              if (str2.search("%") !== -1) {
                str2 = str2.replace("%", "");
                imgH = (parseFloat(str2) / 100) * this.h;
                scale = imgH / this.trueHeight;
              }
            }
          } catch (error) {
            scale = 1;
          }
      }
      return scale;
    },
    // 自动截图函数
    goAutoCrop(cw, ch) {
      if (this.imgs === '' || this.imgs === null) return
      this.clearCrop();
      this.cropping = true;
      let maxWidth = this.w;
      let maxHeight = this.h;
      if (this.centerBox) {
        const switchWH = Math.abs(this.rotate) % 2 > 0
        let imgW = (switchWH ? this.trueHeight : this.trueWidth) * this.scale;
        let imgH = (switchWH ? this.trueWidth : this.trueHeight) * this.scale;
        maxWidth = imgW < maxWidth ? imgW : maxWidth;
        maxHeight = imgH < maxHeight ? imgH : maxHeight;
      }
      // 截图框默认大小
      // 如果为0 那么计算容器大小 默认为80%
      var w = cw ? cw : parseFloat(this.autoCropWidth);
      var h = ch ? ch : parseFloat(this.autoCropHeight);
      if (w === 0 || h === 0) {
        w = maxWidth * 0.8;
        h = maxHeight * 0.8;
      }
      w = w > maxWidth ? maxWidth : w;
      h = h > maxHeight ? maxHeight : h;
      if (this.fixed) {
        h = (w / this.fixedNumber[0]) * this.fixedNumber[1];
      }
      // 如果比例之后 高度大于h
      if (h > this.h) {
        h = this.h;
        w = (h / this.fixedNumber[1]) * this.fixedNumber[0];
      }
      this.changeCrop(w, h);
    },
    // 手动改变截图框大小函数
    changeCrop(w, h) {
      if (this.centerBox) {
        // 修复初始化时候在centerBox=true情况下
        let axis = this.getImgAxis();
        if (w > axis.x2 - axis.x1) {
          // 宽度超标
          w = axis.x2 - axis.x1;
          h = (w / this.fixedNumber[0]) * this.fixedNumber[1];
        }
        if (h > axis.y2 - axis.y1) {
          // 高度超标
          h = axis.y2 - axis.y1;
          w = (h / this.fixedNumber[1]) * this.fixedNumber[0];
        }
      }
      // 判断是否大于容器
      this.cropW = w;
      this.cropH = h;
      this.checkCropLimitSize()
      this.$nextTick(() => {
        // 居中走一走
        this.cropOffsertX = (this.w - this.cropW) / 2;
        this.cropOffsertY = (this.h - this.cropH) / 2;
        if (this.centerBox) {
          this.moveCrop(null, true);
        }
      });
    },
    // 重置函数， 恢复组件置初始状态
    refresh() {
      // let img = this.img;
      this.imgs = "";
      this.scale = 1;
      this.crop = false;
      this.rotate = 0;
      this.w = 0;
      this.h = 0;
      this.trueWidth = 0;
      this.trueHeight = 0;
      this.clearCrop();
      this.$nextTick(() => {
        this.checkedImg();
      });
    },
    // 向左边旋转
    rotateLeft() {
      this.rotate = this.rotate <= -3 ? 0 : this.rotate - 1;
    },
    // 向右边旋转
    rotateRight() {
      this.rotate = this.rotate >= 3 ? 0 : this.rotate + 1;
    },
    // 清除旋转
    rotateClear() {
      this.rotate = 0;
    },
    // 图片坐标点校验
    checkoutImgAxis(x, y, scale) {
      x = x || this.x;
      y = y || this.y;
      scale = scale || this.scale;
      let canGo = true;
      // 开始校验 如果说缩放之后的坐标在截图框外 则阻止缩放
      if (this.centerBox) {
        let axis = this.getImgAxis(x, y, scale);
        let cropAxis = this.getCropAxis();
        // 左边的横坐标 图片不能超过截图框
        if (axis.x1 >= cropAxis.x1) {
          canGo = false;
        }
        // 右边横坐标
        if (axis.x2 <= cropAxis.x2) {
          canGo = false;
        }
        // 纵坐标上面
        if (axis.y1 >= cropAxis.y1) {
          canGo = false;
        }
        // 纵坐标下面
        if (axis.y2 <= cropAxis.y2) {
          canGo = false;
        }
      }
      return canGo;
    }
  },
  mounted() {
    this.support =
      "onwheel" in document.createElement("div")
        ? "wheel"
        : document.onmousewheel !== undefined
        ? "mousewheel"
        : "DOMMouseScroll";
    let that = this;
    var u = navigator.userAgent;
    this.isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    // 兼容blob
    if (!HTMLCanvasElement.prototype.toBlob) {
      Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
        value: function(callback, type, quality) {
          var binStr = atob(this.toDataURL(type, quality).split(",")[1]),
            len = binStr.length,
            arr = new Uint8Array(len);
          for (var i = 0; i < len; i++) {
            arr[i] = binStr.charCodeAt(i);
          }
          callback(new Blob([arr], { type: that.type || "image/png" }));
        }
      });
    }
    this.showPreview();
    this.checkedImg();
  },
  destroyed() {
    window.removeEventListener("mousemove", this.moveCrop);
    window.removeEventListener("mouseup", this.leaveCrop);
    window.removeEventListener("touchmove", this.moveCrop);
    window.removeEventListener("touchend", this.leaveCrop);
    this.cancelScale()
  }
});

// CONCATENATED MODULE: ./packages/vue-image-handler/src/image-cropper.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_image_croppervue_type_script_lang_js_ = (image_croppervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-image-handler/src/image-cropper.vue?vue&type=style&index=0&id=2cd22fa3&scoped=true&lang=css&
var image_croppervue_type_style_index_0_id_2cd22fa3_scoped_true_lang_css_ = __webpack_require__("a744");

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

// CONCATENATED MODULE: ./packages/vue-image-handler/src/image-cropper.vue






/* normalize component */

var component = normalizeComponent(
  src_image_croppervue_type_script_lang_js_,
  image_croppervue_type_template_id_2cd22fa3_scoped_true_render,
  image_croppervue_type_template_id_2cd22fa3_scoped_true_staticRenderFns,
  false,
  null,
  "2cd22fa3",
  null
  
)

/* harmony default export */ var image_cropper = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vue-image-handler/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


// import vRadio from './v-radio.vue';
/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'VueImageHandler',
  components: {
    ImageCropper: image_cropper,
    // vRadio,
  },
  props: {
    imgFile: {
      required: true,
    },
    canvasWidth: {
      type: String,
      default: '380px',
    },
    canvasHeight: {
      type: String,
      default: '252px',
    },
    colorDiff: {
      type: Number,
      default: 20,
    },
    wipeColor: String,
  },
  data() {
    return {
      model: false,
      modelSrc: '',
      crap: false,
      option: {
        img: '',
        size: 1,
        full: false,
        outputType: 'png',
        canMove: true,
        fixedBox: false,
        original: false,
        canMoveBox: true,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 160,
        autoCropHeight: 150,
        centerBox: false,
        high: true,
        max: 99999,
      },
      img: null,
      canvasInfo: {
        width: 380,
        height: 252,
      },
      imgDataArr: [],
      resultImgDataArr: [],
      drawImgWidth: '',
      drawImgHeight: '',
      drawImgDx: '',
      drawImgDy: '',
      COLORS: {
        WHITE: {
          aValue: 255,
          bValue: 255,
          gValue: 255,
          rValue: 255,
        },
        BLACK: {
          aValue: 255,
          bValue: 0,
          gValue: 0,
          rValue: 0,
        },
      },
      clickColorInfo: {},
      recoverImgUrl: '',
    };
  },
  computed: {},
  watch: {
    imgFile: {
      handler() {
        if (this.imgFile) {
          this.init();
        }
      },
      immediate: true,
    },
    colorDiff() {
      if (this.wipeColor) {
        this.resultImgDataArr = [];
        this.transparentModeCanvas();
      }
    },
    wipeColor() {
      if (!this.wipeColor) {
        this.recoverCanvas();
        return;
      } else {
        const colorFieldName = this.wipeColor === 'white' ? 'WHITE' : 'BLACK';
        this.resultImgDataArr = [];
        this.clickColorInfo = this.COLORS[colorFieldName];
      }
      this.transparentModeCanvas();
    }
  },
  created() {
    this.canvasInfo.width = this.canvasWidth;
    this.canvasInfo.height = this.canvasHeight;
  },
  mounted() {
    this.img = new Image();
    this.initCanvasInfo();
  },
  methods: {
    // changeWipeColor(e) {
    //   if (!e) {
    //     this.recoverCanvas();
    //     return;
    //   } else {
    //     const colorFieldName = e === 'white' ? 'WHITE' : 'BLACK';
    //     this.resultImgDataArr = [];
    //     this.clickColorInfo = this.COLORS[colorFieldName];
    //   }
    //   this.transparentModeCanvas();
    // },
    handleSkip(callback) {
      callback(this.imgFile);
    },
    init() {
      this.option.img = this.imgFile;
      // this.wipeColor = '';
      // this.colorDiff = 20;
      this.clickColorInfo = {};
      this.resultImgDataArr = [];
      this.$nextTick(() => {
        this.$refs.cropper.reload();
      });
    },
    recoverCanvas() {
      if (this.imgDataArr.length === 0) {
        return;
      }
      const ctx = document.getElementById('target_canvas').getContext('2d');
      ctx.putImageData(
        new ImageData(this.imgDataArr, this.drawImgWidth, this.drawImgHeight),
        this.drawImgDx,
        this.drawImgDy
      );
      this.setCanvasImgToDownloadLink();
    },
    // handleChangeColorDiff() {
    //     if (this.wipeColor) {
    //         this.resultImgDataArr = [];
    //         this.transparentModeCanvas();
    //     }
    // },
    handleCrop() {
      this.$refs.cropper.getCropBlob(data => {
        this.setImgIntoCanvas(data);
      });
    },
    handleClose() {
      this.$emit('update:visible', false);
      this.option.img = '';
    },
    // 实时预览函数
    realTime() {
      this.$refs.cropper.getCropBlob(data => {
        this.setImgIntoCanvas(data);
      });
    },
    // 初始化canvas信息
    initCanvasInfo() {
      const $targetCanvas = document.getElementById('target_canvas');
      if ($targetCanvas) {
        this.canvasInfo.width = this.canvasWidth.replace('px', '');
        this.canvasInfo.height = this.canvasHeight.replace('px', '');
      }
    },
    // 加载图片资源到canvas中
    setImgIntoCanvas(imgFile) {
      const reader = new FileReader();
      reader.readAsDataURL(imgFile);
      reader.onloadend = e => {
        const dataURL = e.target.result;
        this.img.src = dataURL;
        this.img.onload = () => {
          const ctx = document.getElementById('target_canvas').getContext('2d');
          //将canvas大小设置为和图片一样大
          let imgRatio = this.img.width / this.img.height,
            canvasRatio = this.canvasInfo.width / this.canvasInfo.height,
            dw,
            dh,
            dx,
            dy;
          if (imgRatio < canvasRatio) {
            dw = imgRatio * this.canvasInfo.height;
            dx = (this.canvasInfo.width - dw) / 2;
            dh = this.canvasInfo.height;
            dy = 0;
          } else if (imgRatio === canvasRatio) {
            dw = this.canvasInfo.width;
            dh = this.canvasInfo.height;
            dx = 0;
            dy = 0;
          } else {
            dw = this.canvasInfo.width;
            dh = dw / imgRatio;
            dx = 0;
            dy = (this.canvasInfo.height - dh) / 2;
          }
          this.drawImgWidth = dw;
          this.drawImgHeight = dh;
          this.drawImgDx = dx;
          this.drawImgDy = dy;
          this.setCanvasSize(this.canvasInfo.width, this.canvasInfo.height);
          ctx.drawImage(this.img, dx, dy, dw, dh);
          this.imgDataArr = ctx.getImageData(dx, dy, dw, dh).data;
          this.resultImgDataArr = this.imgDataArr.slice(0);
          this.transparentModeCanvas();
        };
      };
    },
    // 设置容差范围内的像素值为透明
    transparentModeCanvas() {
      if (this.imgDataArr.length === 0) {
        return;
      }
      if (this.resultImgDataArr.length === 0) {
        this.resultImgDataArr = this.imgDataArr.slice(0);
      }
      const ctx = document.getElementById('target_canvas').getContext('2d');
      for (
        let pos = this.canvasInfo.width * this.canvasInfo.height * 4 - 4;
        pos >= 0;
        pos = pos - 4
      ) {
        if (
          this.getColorDiff(this.resultImgDataArr, pos, this.clickColorInfo) <
          this.colorDiff
        ) {
          this.resultImgDataArr[pos] = 0;
          this.resultImgDataArr[pos + 1] = 0;
          this.resultImgDataArr[pos + 2] = 0;
          this.resultImgDataArr[pos + 3] = 0;
        }
      }
      ctx.putImageData(
        new ImageData(
          this.resultImgDataArr,
          this.drawImgWidth,
          this.drawImgHeight
        ),
        this.drawImgDx,
        this.drawImgDy
      );
      this.setCanvasImgToDownloadLink();
    },
    // 设置canvas宽高
    setCanvasSize(width, height) {
      this.canvasInfo.width = width;
      this.canvasInfo.height = height;
      const targetCanvasEl = document.getElementById('target_canvas');
      targetCanvasEl.width = width;
      targetCanvasEl.height = height;
    },
    //获取图像数据指定位置颜色与指定颜色的色差
    getColorDiff(imgDataArr, pos, colorInfo) {
      const value =
        Math.pow(imgDataArr[pos] - colorInfo.rValue, 2) +
        Math.pow(imgDataArr[pos + 1] - colorInfo.gValue, 2) +
        Math.pow(imgDataArr[pos + 2] - colorInfo.bValue, 2);
      return Math.pow(value, 0.5);
    },
    /**
     * 获取图像数据中指定偏移处的颜色信息
     */
    getColorInfo(imgDataArr, offsetX, offsetY) {
      const pos = this.canvasInfo.width * 4 * offsetY + offsetX * 4;
      return {
        rValue: imgDataArr[pos],
        gValue: imgDataArr[pos + 1],
        bValue: imgDataArr[pos + 2],
        aValue: imgDataArr[pos + 3],
      };
    },
    /**
     * 设置canvas图像到下载链接上
     */
    setCanvasImgToDownloadLink() {
      const imgData = document.getElementById('target_canvas').toDataURL();
      this.recoverImgUrl = imgData;
    },
    /**
     * 确认返回最终处理完的图片
     */
    getImageUrl(callback) {
      callback(this.recoverImgUrl);
      // this.$emit('getImageUrl', this.recoverImgUrl);
    },
  },
});

// CONCATENATED MODULE: ./packages/vue-image-handler/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_image_handler_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-image-handler/src/index.vue?vue&type=style&index=0&id=2f0f5c24&lang=css&scoped=true&
var srcvue_type_style_index_0_id_2f0f5c24_lang_css_scoped_true_ = __webpack_require__("4f23");

// CONCATENATED MODULE: ./packages/vue-image-handler/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  vue_image_handler_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2f0f5c24",
  null
  
)

/* harmony default export */ var vue_image_handler_src = (src_component.exports);
// CONCATENATED MODULE: ./packages/index.js
// 导入图片处理组件

 
// 存储组件列表
const components = [vue_image_handler_src];
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  });
};
// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  VueImageHandler: vue_image_handler_src
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=vue-image-handler.umd.js.map