/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#snake_list, #eliminated_list {
    padding: 8px;
    width: 10vw;
    overflow-y: auto;
    height: 585px;
    border-bottom: 1px solid lightgray;
}

#snake_list_header, #elim_header {
    padding: 0px 0px 0px 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.snake_card {
    padding: 0px 0px 0px 4px;
    border: 1px solid white;
    background-color: whitesmoke;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.snake_card p, #snake_list_header p, #elim_header p{
    margin: 0px;
}

.snake_card div{
    width: 25%;
}

.snake_card.selected {
    border: 2px solid black;
}

`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,wBAAwB;IACxB,uBAAuB;IACvB,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":["#snake_list, #eliminated_list {\r\n    padding: 8px;\r\n    width: 10vw;\r\n    overflow-y: auto;\r\n    height: 585px;\r\n    border-bottom: 1px solid lightgray;\r\n}\r\n\r\n#snake_list_header, #elim_header {\r\n    padding: 0px 0px 0px 4px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n.snake_card {\r\n    padding: 0px 0px 0px 4px;\r\n    border: 1px solid white;\r\n    background-color: whitesmoke;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n.snake_card p, #snake_list_header p, #elim_header p{\r\n    margin: 0px;\r\n}\r\n\r\n.snake_card div{\r\n    width: 25%;\r\n}\r\n\r\n.snake_card.selected {\r\n    border: 2px solid black;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



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

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



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

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



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

/***/ },

/***/ "./src/compute.ts"
/*!************************!*\
  !*** ./src/compute.ts ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeDirection: () => (/* binding */ computeDirection)
/* harmony export */ });
/* harmony import */ var _move_wgsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./move.wgsl */ "./src/move.wgsl");

class computeDirection {
    constructor(device, nodebuffer, mouseBuffer, snakeMetaBuffer, nodeCount) {
        this.computePipeline = null;
        this.bindGroup = null;
        this.nodeCount = 0;
        this.device = device;
        this.nodebuffer = nodebuffer;
        this.mouseBuffer = mouseBuffer;
        this.snakeMetaBuffer = snakeMetaBuffer;
        this.nodeCount = nodeCount;
        // Create compute pipeline
        this.computePipeline = this.device.createComputePipeline({
            layout: "auto",
            compute: {
                module: device.createShaderModule({
                    code: _move_wgsl__WEBPACK_IMPORTED_MODULE_0__
                }),
                entryPoint: "main",
            },
        });
        // Create bind group
        this.bindGroup = this.device.createBindGroup({
            layout: this.computePipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: {
                        buffer: this.nodebuffer,
                    }
                },
                {
                    binding: 1,
                    resource: {
                        buffer: this.mouseBuffer
                    }
                },
                {
                    binding: 2,
                    resource: {
                        buffer: this.snakeMetaBuffer
                    }
                }
            ]
        });
    }
    chase(commandEncoder) {
        const pass = commandEncoder.beginComputePass();
        pass.setBindGroup(0, this.bindGroup);
        pass.setPipeline(this.computePipeline);
        pass.dispatchWorkgroups(Math.ceil(this.nodeCount / 64), 1, 1);
        pass.end();
    }
}


/***/ },

/***/ "./src/move.wgsl"
/*!***********************!*\
  !*** ./src/move.wgsl ***!
  \***********************/
(module) {

module.exports = "struct Node {\r\n    pos : vec2f,\r\n    hit : vec2f,\r\n    color : vec4f,\r\n};\r\n\r\nstruct Mouse {\r\n    pos : vec2f,\r\n};\r\n\r\nstruct SnakeMetaData {\r\n    length: u32,\r\n    numSnakes: u32,\r\n    mode: u32,\r\n};\r\n\r\n@group(0) @binding(0) var<storage, read_write> nodes : array<Node>;\r\n@group(0) @binding(1) var<uniform> mouse : Mouse;\r\n@group(0) @binding(2) var<uniform> snakeMeta : SnakeMetaData;\r\n\r\nfn run_chase(global_id: vec3<u32>) {    \r\n    var head = global_id.x - (global_id.x % snakeMeta.length);\r\n    var tail = head + snakeMeta.length + 1;\r\n    let mousePos = mouse.pos;\r\n\r\n    // safe bounds check\r\n    if (global_id.x >= arrayLength(&nodes)) {\r\n        return;\r\n    }\r\n\r\n\r\n    let nodePos = nodes[global_id.x].pos;\r\n\r\n    var dir: vec2f = vec2f(0.0, 0.0);\r\n    if ((global_id.x % snakeMeta.length == 0)){\r\n        dir = mousePos - nodePos;\r\n    } else {\r\n        dir = nodes[global_id.x-1].pos - nodePos;\r\n    }\r\n\r\n    let dist = length(dir);\r\n    \r\n    if (dist > 0.04) {\r\n        let step = normalize(dir) * 0.003;\r\n        nodes[global_id.x].pos += step;\r\n    } else {\r\n        return;\r\n    }\r\n\r\n\r\n    for (var j: u32 = 0u; j < arrayLength(&nodes); j++) {\r\n        if (j <= tail && j >= head) {\r\n            continue;\r\n        }\r\n\r\n        let offset = nodePos - nodes[j].pos;\r\n        let dist = length(offset);\r\n\r\n        var minDist = 0.1;\r\n\r\n        if (dist > 0.000001 && dist < minDist) {\r\n            let dir = normalize(offset);\r\n\r\n            // stronger push when closer\r\n            let strength = (minDist - dist) / minDist;\r\n\r\n            nodes[global_id.x].pos += dir * strength * 0.01;\r\n        }\r\n    }\r\n}\r\n\r\nfn run_pit(global_id: vec3<u32>) {    \r\n    var head = global_id.x - (global_id.x % snakeMeta.length);\r\n    var tail = head + snakeMeta.length;\r\n\r\n    if (global_id.x >= arrayLength(&nodes)) {\r\n        return;\r\n    }\r\n\r\n    let nodePos = nodes[global_id.x].pos;\r\n\r\n    var poi: vec2f = vec2f(0.0, 0.0);\r\n    var poi_idx = 0u;\r\n    \r\n    if (global_id.x % snakeMeta.length == 0){ \r\n        var closest = 1e9;\r\n\r\n        for (var j: u32 = 0u; j < arrayLength(&nodes); j++) {\r\n            if (j <= tail && j >= head) {\r\n                continue;\r\n            }\r\n\r\n            if (nodes[j].hit.x == 1.0){\r\n                continue;\r\n            }\r\n\r\n            let offset = nodes[j].pos - nodePos;\r\n            let dist = length(offset);\r\n\r\n            if (dist < closest){\r\n                closest = dist;\r\n                poi = offset;\r\n                poi_idx = j;\r\n            }\r\n        }\r\n\r\n        if (closest == 1e9){\r\n            poi = vec2f(0.0, 0.0);\r\n        }\r\n    } else {\r\n        poi = nodes[global_id.x-1].pos - nodePos;\r\n\r\n        if (nodes[global_id.x-1].hit.x == 1.0){\r\n            nodes[global_id.x].hit.x = 1.0;\r\n        }\r\n    }\r\n\r\n    let dist = length(poi);\r\n\r\n    if (nodes[global_id.x].hit.x == 1.0){\r\n        nodes[global_id.x].pos = vec2f(-2.0, 1.0);\r\n        nodes[global_id.x].hit.x = 1.0;\r\n    }\r\n    \r\n\r\n    if (dist > 0.03 && global_id.x % snakeMeta.length != 0){\r\n        let step = normalize(poi) * 0.003;\r\n        nodes[global_id.x].pos += step;\r\n    } else if (dist > 0.005 && global_id.x % snakeMeta.length == 0){\r\n        let step = normalize(poi) * 0.003;\r\n        nodes[global_id.x].pos += step;\r\n    } else if (global_id.x % snakeMeta.length == 0){\r\n        nodes[poi_idx].hit.x = 1.0;\r\n    }\r\n}\r\n\r\n@compute @workgroup_size(64, 1, 1)\r\nfn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\r\n    if (snakeMeta.mode == 0){\r\n        run_chase(global_id);\r\n    } else {\r\n        run_pit(global_id);\r\n    }\r\n}\r\n\r\n// Working\r\n// @compute @workgroup_size(64, 1, 1)\r\n// fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\r\n//     let tail = global_id.x * snakeMeta.length;\r\n//     let head = tail + snakeMeta.length;\r\n//     let mousePos = mouse.pos;\r\n    \r\n//     for (var i = tail; i < head; i++){\r\n\r\n//         // safe bounds check\r\n//         if (i >= arrayLength(&nodes)) {\r\n//             return;\r\n//         }\r\n\r\n//         let nodePos = nodes[i].pos;\r\n\r\n//         var dir: vec2f = vec2f(0.0, 0.0);\r\n//         if (i == head - 1){\r\n//             dir = mousePos - nodePos;\r\n//         } else {\r\n//             dir = nodes[i+1].pos - nodePos;\r\n//         }\r\n\r\n//         let dist = length(dir);\r\n        \r\n//         for (var j: u32 = 0u; j < arrayLength(&nodes); j++) {\r\n//             if (j == i) {\r\n//                 continue;\r\n//             }\r\n\r\n//             let offset = nodePos - nodes[j].pos;\r\n//             let dist = length(offset);\r\n\r\n//             var minDist = 0.1;\r\n\r\n//             if (tail <= j && j < head) {\r\n//                 minDist = 0.08;\r\n//             }\r\n\r\n//             if (dist > 0.000001 && dist < minDist) {\r\n//                 let dir = normalize(offset);\r\n\r\n//                 // stronger push when closer\r\n//                 let strength = (minDist - dist) / minDist;\r\n\r\n//                 nodes[i].pos += dir * strength * 0.01;\r\n//             }\r\n//         }\r\n\r\n//         if (dist > 0.0001) {\r\n//             let step = normalize(dir) * 0.005;\r\n//             nodes[i].pos += step;\r\n//         }\r\n//     }\r\n// }\r\n\r\n// Big Bang\r\n// @compute @workgroup_size(64, 1, 1)\r\n// fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\r\n//     let tail = global_id.x * 10;\r\n//     let head = tail + 10;\r\n\r\n//     let mousePos = mouse.pos;\r\n    \r\n//     for (var i = tail; i < head; i++){\r\n\r\n//         // safe bounds check\r\n//         if (i >= arrayLength(&nodes)) {\r\n//             return;\r\n//         }\r\n\r\n//         let nodePos = nodes[i].pos;\r\n\r\n//         var dir: vec2f = vec2f(0.0, 0.0);\r\n//         if (i == head - 1){\r\n//             dir = mousePos - nodePos;\r\n//         } else {\r\n//             dir = nodes[i+1].pos - nodePos;\r\n//         }\r\n\r\n//         // normalize (avoid divide by zero)\r\n//         let dist = length(dir);\r\n//         if (dist > 0.0001) {\r\n//             let step = normalize(dir) * 0.005;\r\n//             nodes[i].pos += step;\r\n//         }\r\n//     }\r\n\r\n//     for (var i = tail-tail; i < tail; i++){\r\n//         // safe bounds check\r\n//         if (i >= arrayLength(&nodes)) {\r\n//             return;\r\n//         }\r\n\r\n//         let nodePos = nodes[i].pos;\r\n\r\n//         var dir: vec2f = vec2f(0.0, 0.0);\r\n//         if (i == head - 1){\r\n//             dir = mousePos - nodePos;\r\n//         } else {\r\n//             dir = nodePos - nodes[i+1].pos;\r\n//         }\r\n\r\n//         // normalize (avoid divide by zero)\r\n//         let dist = length(dir);\r\n\r\n//         if (dist > 0.5){\r\n//             return;\r\n//         }\r\n\r\n//         if (dist > 0.00001) {\r\n//             let step = normalize(dir) * 0.01;\r\n//             nodes[i].pos += step;\r\n//         } \r\n//     }\r\n// }\r\n\r\n\r\n//Virus Snake\r\n// @compute @workgroup_size(64, 1, 1)\r\n// fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\r\n//     let tail = global_id.x * 10;\r\n//     let head = tail + 10;\r\n\r\n//     let mousePos = mouse.pos;\r\n    \r\n//     for (var i = tail; i < head; i++){\r\n\r\n//         // safe bounds check\r\n//         if (i >= arrayLength(&nodes)) {\r\n//             return;\r\n//         }\r\n\r\n//         let nodePos = nodes[i].pos;\r\n\r\n//         var dir: vec2f = vec2f(0.0, 0.0);\r\n//         if (i == head - 1){\r\n//             dir = mousePos - nodePos;\r\n//         } else {\r\n//             dir = nodes[i+1].pos - nodePos;\r\n//         }\r\n\r\n//         // normalize (avoid divide by zero)\r\n//         let dist = length(dir);\r\n//         if (dist > 0.0001) {\r\n//             let step = normalize(dir) * 0.005;\r\n//             nodes[i].pos += step;\r\n//         }\r\n//     }\r\n\r\n//     for (var i = tail-tail; i < tail; i++){\r\n//         // safe bounds check\r\n//         if (i >= arrayLength(&nodes)) {\r\n//             return;\r\n//         }\r\n\r\n//         let nodePos = nodes[i].pos;\r\n\r\n//         var dir: vec2f = vec2f(0.0, 0.0);\r\n//         if (i == head - 1){\r\n//             dir = mousePos - nodePos;\r\n//         } else {\r\n//             dir = nodes[i+1].pos - nodePos;\r\n//         }\r\n\r\n//         // normalize (avoid divide by zero)\r\n//         let dist = length(dir);\r\n//         if (dist > 0.0001) { //increase to increase scatter effect\r\n//             let step = normalize(dir) * 0.01;\r\n//             nodes[i].pos += step;\r\n//         } \r\n//     }\r\n// }\r\n\r\n\r\n//tentacle\r\n// @compute @workgroup_size(64, 1, 1)\r\n// fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\r\n//     let tail = global_id.x;\r\n//     let head = (global_id.x * 10) + 10;\r\n\r\n//     // safe bounds check\r\n//     if (head >= arrayLength(&nodes)) {\r\n//         return;\r\n//     }\r\n\r\n//     let mousePos = mouse.pos;\r\n    \r\n//     for (var i = tail; i < head; i++){\r\n//         let nodePos = nodes[i].pos;\r\n\r\n//         // direction toward mouse\r\n        \r\n//         let dir = mousePos - nodePos;\r\n\r\n//         // normalize (avoid divide by zero)\r\n//         let dist = length(dir);\r\n//         if (dist > 0.0001) {\r\n//             let step = normalize(dir) * 0.001;\r\n//             nodes[i].pos += step;\r\n//         }\r\n//     }\r\n// }\r\n\r\n    // var yForce = 0.0;\r\n    // var xForce = 0.0;\r\n    // if (global_id.x % 2 == 0){\r\n    //     yForce = 0.05;\r\n    // } else {\r\n    //     yForce = -0.05;\r\n    // }\r\n\r\n\r\n    // nodes[global_id.x].pos.y += yForce;\r\n    // nodes[global_id.x].pos.x += xForce;\r\n\r\n    // if (nodes[global_id.x].pos.y >= 1){\r\n    //     nodes[global_id.x].pos.y = -1;\r\n    // } else if (nodes[global_id.x].pos.y <= -1){\r\n    //     nodes[global_id.x].pos.y = 1;\r\n    // }\r\n    \r\n\r\n";

/***/ },

/***/ "./src/node.wgsl"
/*!***********************!*\
  !*** ./src/node.wgsl ***!
  \***********************/
(module) {

module.exports = "struct Node {\n    pos: vec2f,\n    hit: vec2f,\n    color: vec4f,\n};\n\n@group(0) @binding(0) var<storage, read> nodes: array<Node>;\n\nstruct VertexOutput {\n    @builtin(position) position: vec4f,\n    @location(0) color: vec4f,\n    @location(1) @interpolate(flat) center: vec2f,\n    @location(2) world_position: vec2f\n};\n\n@vertex\nfn vertexMain(@builtin(vertex_index) vertexIndex: u32, \n                @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n    \n    var output: VertexOutput;\n    const radius: f32 = 0.008;\n\n    var positions: array<vec2f, 6> = array<vec2f, 6>(\n        vec2f(-radius, -radius), \n        vec2f(-radius, radius), \n        vec2f(radius, radius),\n        vec2f(radius, radius), \n        vec2f(radius, -radius), \n        vec2f(-radius, -radius)\n    );\n\n    let worldPos = positions[vertexIndex] + nodes[instanceIndex].pos;\n    output.position = vec4f(worldPos, 0.0, 1.0);\n    output.color = nodes[instanceIndex].color;\n    output.center = nodes[instanceIndex].pos;\n    output.world_position = worldPos;\n    return output;\n}\n\n@fragment\nfn fragmentMain(input: VertexOutput) -> @location(0) vec4f {\n    if (distance(input.world_position, input.center) > 0.008) {\n        discard;\n    }\n    \n    return input.color;\n}";

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/triangle.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_wgsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.wgsl */ "./src/node.wgsl");
/* harmony import */ var _compute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compute */ "./src/compute.ts");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Request an adapter and device
        const adapter = yield navigator.gpu.requestAdapter();
        const device = yield adapter.requestDevice();
        // Configure rendering context
        const canvas = document.getElementById("webgpu-canvas");
        const context = canvas.getContext('webgpu');
        const format = navigator.gpu.getPreferredCanvasFormat();
        const snakeSlider = document.getElementById("amount");
        const lengthSlider = document.getElementById("length");
        const startSim = document.getElementById("start_sim");
        const pitActivate = document.getElementById("pit");
        const followActivate = document.getElementById("follow");
        let simId = 0;
        context.configure({
            device,
            format,
        });
        // Create bind group layout (now with camera uniform buffer)
        const bindGroupLayout = device.createBindGroupLayout({
            entries: [
                {
                    binding: 0,
                    visibility: GPUShaderStage.VERTEX | GPUShaderStage.COMPUTE,
                    buffer: { type: "read-only-storage" },
                },
            ]
        });
        class Node {
            constructor(x, y, color) {
                this.x = x;
                this.y = y;
                this.color = color;
            }
        }
        class Snake {
            constructor(x, y, length, color) {
                this.nodes = [];
                let offset = 0;
                for (let i = 0; i < length; i++) {
                    this.nodes.push(new Node(x, y + offset, color));
                    offset += 0.03;
                }
            }
        }
        let bindGroup;
        let snakes = [];
        let snakeLength = 4;
        let numSnakes = 3;
        let mode = 0;
        let nodeData;
        let nodeBuffer;
        let readBuffer;
        let brain;
        let frameCount = 0;
        let start = false;
        const idxToCard = new Map();
        const mouseData = new Float32Array(4);
        const mouseBuffer = device.createBuffer({
            size: mouseData.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });
        const snakeMeta = new Uint32Array(4);
        const snakeMetaBuffer = device.createBuffer({
            size: snakeMeta.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        snakeMeta[0] = snakeLength;
        snakeMeta[1] = numSnakes;
        snakeMeta[2] = mode;
        device.queue.writeBuffer(snakeMetaBuffer, 0, snakeMeta);
        canvas.addEventListener("mousemove", (event) => {
            const rect = canvas.getBoundingClientRect();
            mouseData[0] = ((event.clientX - rect.left) / canvas.width) * 2 - 1;
            mouseData[1] = (((event.clientY - rect.top) / canvas.height) * 2 - 1) * -1;
            device.queue.writeBuffer(mouseBuffer, 0, mouseData);
        });
        snakeSlider.addEventListener("input", (event) => {
            start = false;
            const target = event.target;
            const value = parseInt(target.value);
            document.getElementById("amount_value").textContent = target.value;
            numSnakes = value;
            snakeMeta[1] = numSnakes;
            snakes = [];
            device.queue.writeBuffer(snakeMetaBuffer, 0, snakeMeta);
            generateRandomGraph();
        });
        lengthSlider.addEventListener("input", (event) => {
            start = false;
            const target = event.target;
            const value = parseInt(target.value);
            snakeLength = value;
            snakeMeta[0] = value;
            console.log("new snake length", snakeLength);
            snakes = [];
            device.queue.writeBuffer(snakeMetaBuffer, 0, snakeMeta);
            generateRandomGraph();
        });
        startSim.addEventListener("click", (event) => {
            let prev = start;
            start = true;
        });
        pitActivate.addEventListener("click", (event) => {
            mode = 1;
            snakeMeta[2] = mode;
            device.queue.writeBuffer(snakeMetaBuffer, 0, snakeMeta);
        });
        followActivate.addEventListener("click", (event) => {
            mode = 0;
            snakeMeta[2] = mode;
            device.queue.writeBuffer(snakeMetaBuffer, 0, snakeMeta);
        });
        function hsvToRgb(h, s, v) {
            let c = v * s;
            let x = c * (1 - Math.abs(((h * 6) % 2) - 1));
            let m = v - c;
            let [r, g, b] = h < 1 / 6 ? [c, x, 0] :
                h < 2 / 6 ? [x, c, 0] :
                    h < 3 / 6 ? [0, c, x] :
                        h < 4 / 6 ? [0, x, c] :
                            h < 5 / 6 ? [x, 0, c] :
                                [c, 0, x];
            return [r + m, g + m, b + m];
        }
        document.getElementById("snake_list");
        function createSnakeCard(color, idx) {
            const container = document.getElementById("snake_list");
            const r = Math.floor(color[0] * 255);
            const g = Math.floor(color[1] * 255);
            const b = Math.floor(color[2] * 255);
            const cssColor = `rgba(${r}, ${g}, ${b}`;
            const id = `${r}${g}${b}`;
            const card = document.createElement("div");
            card.className = "snake_card";
            card.addEventListener("click", () => {
                idxToCard.forEach((c) => {
                    c.classList.remove("selected");
                });
                card.classList.add("selected");
                console.log("Selected snake index:", idx);
            });
            const idText = document.createElement("p");
            idText.textContent = id; // ID = color string
            const colorDiv = document.createElement("div");
            colorDiv.style.backgroundColor = cssColor;
            // Assemble
            card.appendChild(idText);
            card.appendChild(colorDiv);
            container.appendChild(card);
            idxToCard.set(idx, card);
        }
        function addElim(card) {
            const elimList = document.getElementById("eliminated_list");
            const elimHeader = document.getElementById("elim_header");
            elimList.prepend(card);
            elimHeader.remove();
            elimList.prepend(elimHeader);
            reviveTopSnake();
        }
        function clearSnakeList() {
            const container = document.getElementById("snake_list");
            const header = document.getElementById("snake_list_header");
            const elimList = document.getElementById("eliminated_list");
            const elimHeader = document.getElementById("elim_header");
            container.innerHTML = ""; // clear all
            elimList.innerHTML = "";
            container.appendChild(header); // put header back
            elimList.appendChild(elimHeader);
            idxToCard.clear();
        }
        function reviveTopSnake() {
            return __awaiter(this, void 0, void 0, function* () {
                const elimList = document.getElementById("eliminated_list");
                const snakeList = document.getElementById("snake_list");
                const header = document.getElementById("snake_list_header");
                // Only revive if the snake list is empty (just the header remains)
                // and there is someone in the elimination list to bring back
                if ((snakeList === null || snakeList === void 0 ? void 0 : snakeList.children.length) === 1 && (elimList === null || elimList === void 0 ? void 0 : elimList.children.length) > 1) {
                    // The first child is usually the header, so we take the second child
                    const topCard = elimList.children[1];
                    // Find the index of the snake associated with this card
                    let snakeIdx = -1;
                    for (let [idx, card] of idxToCard.entries()) {
                        if (card === topCard) {
                            snakeIdx = idx;
                            break;
                        }
                    }
                    if (snakeIdx !== -1) {
                        // 1. Move the card back to the main list
                        topCard.remove();
                        header === null || header === void 0 ? void 0 : header.after(topCard);
                        // 2. Prepare the reset data for the GPU
                        // We only need to update the segments for THIS specific snake
                        const stride = 8; // 8 floats per node
                        const snakeStartIdx = snakeIdx * snakeLength * stride;
                        const updateData = new Float32Array(snakeLength * stride);
                        for (let j = 0; j < snakeLength; j++) {
                            const offset = j * stride;
                            updateData[offset] = 0.0 + (j * 0.04); // X center
                            updateData[offset + 1] = 0.0 + (j * 0.04); // Y center
                            updateData[offset + 2] = 0.0; // Unmark "hit" (data[i+2] = 0.0)
                            updateData[offset + 3] = 0.0; // padding
                            // Keep the original colors from our local nodeData
                            updateData[offset + 4] = nodeData[snakeStartIdx + offset + 4];
                            updateData[offset + 5] = nodeData[snakeStartIdx + offset + 5];
                            updateData[offset + 6] = nodeData[snakeStartIdx + offset + 6];
                            updateData[offset + 7] = nodeData[snakeStartIdx + offset + 7];
                        }
                        // 3. Write directly to the GPU storage buffer
                        device.queue.writeBuffer(nodeBuffer, snakeStartIdx * 4, // offset in bytes
                        updateData);
                    }
                }
            });
        }
        // Function to generate a random graph
        function generateRandomGraph() {
            start = false;
            simId++;
            if (nodeBuffer)
                nodeBuffer.destroy();
            if (readBuffer) {
                try {
                    readBuffer.unmap();
                }
                catch (e) { }
                readBuffer.destroy();
            }
            clearSnakeList();
            // Define 10 high-contrast colors (RGBA)
            const palette = [
                [1.0, 0.0, 0.0, 1.0], // Red
                [1.0, 1.0, 0.0, 1.0], // Yellow
                [0.0, 0.0, 1.0, 1.0], // Blue
            ];
            for (let i = 0; i < numSnakes; i++) {
                const hue = i / numSnakes;
                const [r, g, b] = hsvToRgb(hue, 1.0, 1.0);
                createSnakeCard([r, g, b], i);
                snakes.push(new Snake(Math.random() * 2.0 - 1.0, Math.random() * 2.0 - 1.0, snakeLength, [r, g, b, 1.0]));
            }
            // Create node buffer
            nodeData = new Float32Array(numSnakes * snakeLength * 8);
            snakes.forEach((snake, i) => {
                snake.nodes.forEach((node, j) => {
                    const offset = (i * snakeLength + j) * 8;
                    nodeData[offset] = node.x;
                    nodeData[offset + 1] = node.y;
                    nodeData[offset + 2] = 0.0;
                    nodeData[offset + 3] = 0.0;
                    nodeData[offset + 4] = node.color[0];
                    nodeData[offset + 5] = node.color[1];
                    nodeData[offset + 6] = node.color[2];
                    nodeData[offset + 7] = node.color[3];
                });
            });
            // Create GPU buffers
            nodeBuffer = device.createBuffer({
                size: nodeData.byteLength,
                usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
                mappedAtCreation: true,
            });
            //const readBuffer = device.createBuffer({
            readBuffer = device.createBuffer({
                size: nodeData.byteLength,
                usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
            });
            new Float32Array(nodeBuffer.getMappedRange()).set(nodeData);
            nodeBuffer.unmap();
            // Create bind group
            bindGroup = device.createBindGroup({
                layout: bindGroupLayout,
                entries: [
                    {
                        binding: 0,
                        resource: { buffer: nodeBuffer }
                    },
                ]
            });
            brain = new _compute__WEBPACK_IMPORTED_MODULE_1__.computeDirection(device, nodeBuffer, mouseBuffer, snakeMetaBuffer, (numSnakes * snakeLength));
        }
        let reading = false;
        function readSnakeResults() {
            return __awaiter(this, void 0, void 0, function* () {
                var _a;
                if (reading || !readBuffer)
                    return;
                reading = true;
                const currentSimId = simId;
                try {
                    yield device.queue.onSubmittedWorkDone();
                    if (currentSimId !== simId)
                        return;
                    yield readBuffer.mapAsync(GPUMapMode.READ);
                    if (currentSimId !== simId) {
                        readBuffer.unmap();
                        return;
                    }
                    const mapped = new Float32Array(readBuffer.getMappedRange());
                    const data = new Float32Array(mapped.length);
                    data.set(mapped);
                    readBuffer.unmap();
                    for (let i = 0; i < data.length; i += (8 * snakeLength)) {
                        if (data[i + 2] === 1.0) {
                            const snakeIndex = Math.floor(i / (snakeLength * 8));
                            const card = idxToCard.get(snakeIndex);
                            if (card && ((_a = card.parentElement) === null || _a === void 0 ? void 0 : _a.id) !== "eliminated_list") {
                                card.remove();
                                addElim(card);
                            }
                        }
                    }
                }
                catch (e) {
                    console.warn("Read aborted");
                }
                finally {
                    reading = false;
                }
            });
        }
        generateRandomGraph();
        // Create shader module
        const nodeModule = device.createShaderModule({
            code: _node_wgsl__WEBPACK_IMPORTED_MODULE_0__
        });
        // Create pipeline
        const nodePipeline = device.createRenderPipeline({
            layout: device.createPipelineLayout({
                bindGroupLayouts: [bindGroupLayout]
            }),
            vertex: {
                module: nodeModule,
                entryPoint: "vertexMain"
            },
            fragment: {
                module: nodeModule,
                entryPoint: "fragmentMain",
                targets: [{ format }]
            }
        });
        function render() {
            const targetTexture = context.getCurrentTexture();
            const commandEncoder = device.createCommandEncoder();
            if (start) {
                brain.chase(commandEncoder);
                if (readBuffer.mapState === "unmapped") {
                    commandEncoder.copyBufferToBuffer(nodeBuffer, 0, readBuffer, 0, nodeData.byteLength);
                }
            }
            const pass = commandEncoder.beginRenderPass({
                colorAttachments: [{
                        view: targetTexture.createView(),
                        loadOp: "clear",
                        storeOp: "store",
                        clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 0.0 }
                    }]
            });
            pass.setPipeline(nodePipeline);
            pass.setBindGroup(0, bindGroup);
            pass.draw(6, numSnakes * snakeLength);
            pass.end();
            device.queue.submit([commandEncoder.finish()]);
            if (frameCount % 8 === 0 && start) {
                readSnakeResults();
            }
            frameCount = (frameCount + 1) % 1000;
            requestAnimationFrame(render);
        }
        render();
    });
}
window.addEventListener("load", main);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1lBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVkLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUNULENBQUMsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsQ0FBQyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyQixDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3JCLENBQUMsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDckIsQ0FBQyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNiLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUV0QixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBRUQsUUFB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WUFDdEMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRVgsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRS9DLElBQUksVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQ2hDLGdCQUFnQixFQUFFLENBQUM7WUFDdkIsQ0FBQztZQUVELFVBQVUsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDckMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUVELE1BQU0sRUFBRSxDQUFDO0lBQ2IsQ0FBQztDQUFBO0FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmdwdS13ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWJncHUtd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJncHUtd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LXdlYnBhY2stc3RhcnRlci8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2ViZ3B1LXdlYnBhY2stc3RhcnRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJncHUtd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJncHUtd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYmdwdS13ZWJwYWNrLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LXdlYnBhY2stc3RhcnRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYmdwdS13ZWJwYWNrLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJncHUtd2VicGFjay1zdGFydGVyLy4vc3JjL2NvbXB1dGUudHMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LXdlYnBhY2stc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJncHUtd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYmdwdS13ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYmdwdS13ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJncHUtd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViZ3B1LXdlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2ViZ3B1LXdlYnBhY2stc3RhcnRlci8uL3NyYy90cmlhbmdsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI3NuYWtlX2xpc3QsICNlbGltaW5hdGVkX2xpc3Qge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA1ODVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbn1cclxuXHJcbiNzbmFrZV9saXN0X2hlYWRlciwgI2VsaW1faGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc25ha2VfY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnNuYWtlX2NhcmQgcCwgI3NuYWtlX2xpc3RfaGVhZGVyIHAsICNlbGltX2hlYWRlciBwe1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5zbmFrZV9jYXJkIGRpdntcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi5zbmFrZV9jYXJkLnNlbGVjdGVkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNzbmFrZV9saXN0LCAjZWxpbWluYXRlZF9saXN0IHtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICB3aWR0aDogMTB2dztcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiA1ODVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuXFxyXFxuI3NuYWtlX2xpc3RfaGVhZGVyLCAjZWxpbV9oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCA0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNuYWtlX2NhcmQge1xcclxcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCA0cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5zbmFrZV9jYXJkIHAsICNzbmFrZV9saXN0X2hlYWRlciBwLCAjZWxpbV9oZWFkZXIgcHtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zbmFrZV9jYXJkIGRpdntcXHJcXG4gICAgd2lkdGg6IDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnNuYWtlX2NhcmQuc2VsZWN0ZWQge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBtb3ZlIGZyb20gXCIuL21vdmUud2dzbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIGNvbXB1dGVEaXJlY3Rpb24ge1xyXG4gICAgcHJpdmF0ZSBjb21wdXRlUGlwZWxpbmU6IEdQVUNvbXB1dGVQaXBlbGluZSB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBiaW5kR3JvdXA6IEdQVUJpbmRHcm91cCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBub2RlQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGRldmljZTogR1BVRGV2aWNlO1xyXG4gICAgcHJpdmF0ZSBub2RlYnVmZmVyOiBHUFVCdWZmZXI7XHJcbiAgICBwcml2YXRlIG1vdXNlQnVmZmVyOiBHUFVCdWZmZXI7XHJcbiAgICBwcml2YXRlIHNuYWtlTWV0YUJ1ZmZlcjogR1BVQnVmZmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRldmljZTogR1BVRGV2aWNlLCBub2RlYnVmZmVyOiBHUFVCdWZmZXIsIG1vdXNlQnVmZmVyOiBHUFVCdWZmZXIsIHNuYWtlTWV0YUJ1ZmZlcjogR1BVQnVmZmVyLCBub2RlQ291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gZGV2aWNlO1xyXG4gICAgICAgIHRoaXMubm9kZWJ1ZmZlciA9IG5vZGVidWZmZXI7XHJcbiAgICAgICAgdGhpcy5tb3VzZUJ1ZmZlciA9IG1vdXNlQnVmZmVyO1xyXG4gICAgICAgIHRoaXMuc25ha2VNZXRhQnVmZmVyID0gc25ha2VNZXRhQnVmZmVyO1xyXG4gICAgICAgIHRoaXMubm9kZUNvdW50ID0gbm9kZUNvdW50O1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgY29tcHV0ZSBwaXBlbGluZVxyXG4gICAgICAgIHRoaXMuY29tcHV0ZVBpcGVsaW5lID0gdGhpcy5kZXZpY2UuY3JlYXRlQ29tcHV0ZVBpcGVsaW5lKHtcclxuICAgICAgICAgICAgbGF5b3V0OiBcImF1dG9cIixcclxuICAgICAgICAgICAgY29tcHV0ZToge1xyXG4gICAgICAgICAgICAgICAgbW9kdWxlOiBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHtcclxuICAgICAgICAgICAgICAgICAgICBjb2RlOiBtb3ZlXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGVudHJ5UG9pbnQ6IFwibWFpblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENyZWF0ZSBiaW5kIGdyb3VwXHJcbiAgICAgICAgdGhpcy5iaW5kR3JvdXAgPSB0aGlzLmRldmljZS5jcmVhdGVCaW5kR3JvdXAoe1xyXG4gICAgICAgICAgICBsYXlvdXQ6IHRoaXMuY29tcHV0ZVBpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSxcclxuICAgICAgICAgICAgZW50cmllczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiB0aGlzLm5vZGVidWZmZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiB0aGlzLm1vdXNlQnVmZmVyIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZzogMixcclxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogdGhpcy5zbmFrZU1ldGFCdWZmZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYXNlKGNvbW1hbmRFbmNvZGVyOiBHUFVDb21tYW5kRW5jb2Rlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHBhc3MgPSBjb21tYW5kRW5jb2Rlci5iZWdpbkNvbXB1dGVQYXNzKCk7XHJcblxyXG4gICAgICAgIHBhc3Muc2V0QmluZEdyb3VwKDAsIHRoaXMuYmluZEdyb3VwKTtcclxuICAgICAgICBwYXNzLnNldFBpcGVsaW5lKHRoaXMuY29tcHV0ZVBpcGVsaW5lKTtcclxuXHJcbiAgICAgICAgcGFzcy5kaXNwYXRjaFdvcmtncm91cHMoXHJcbiAgICAgICAgICAgIE1hdGguY2VpbCh0aGlzLm5vZGVDb3VudCAvIDY0KSxcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgMVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHBhc3MuZW5kKCk7XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBub2RlQ29kZSBmcm9tIFwiLi9ub2RlLndnc2xcIjtcbmltcG9ydCB7IGNvbXB1dGVEaXJlY3Rpb24gfSBmcm9tIFwiLi9jb21wdXRlXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIlxuXG5cbmFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG4gICAgLy8gUmVxdWVzdCBhbiBhZGFwdGVyIGFuZCBkZXZpY2VcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuXG4gICAgLy8gQ29uZmlndXJlIHJlbmRlcmluZyBjb250ZXh0XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWJncHUtY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ3B1JykgYXMgdW5rbm93biBhcyBHUFVDYW52YXNDb250ZXh0O1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29uc3Qgc25ha2VTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFtb3VudFwiKTtcbiAgICBjb25zdCBsZW5ndGhTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlbmd0aFwiKTtcbiAgICBjb25zdCBzdGFydFNpbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRfc2ltXCIpO1xuICAgIGNvbnN0IHBpdEFjdGl2YXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaXRcIilcbiAgICBjb25zdCBmb2xsb3dBY3RpdmF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9sbG93XCIpO1xuICAgIGxldCBzaW1JZCA9IDA7XG5cbiAgICBjb250ZXh0LmNvbmZpZ3VyZSh7XG4gICAgICAgIGRldmljZSxcbiAgICAgICAgZm9ybWF0LFxuICAgIH0pO1xuXG4gICAgXG4gICAgLy8gQ3JlYXRlIGJpbmQgZ3JvdXAgbGF5b3V0IChub3cgd2l0aCBjYW1lcmEgdW5pZm9ybSBidWZmZXIpXG4gICAgY29uc3QgYmluZEdyb3VwTGF5b3V0ID0gZGV2aWNlLmNyZWF0ZUJpbmRHcm91cExheW91dCh7XG4gICAgZW50cmllczogW1xuICAgICAgICB7XG4gICAgICAgIGJpbmRpbmc6IDAsXG4gICAgICAgIHZpc2liaWxpdHk6IEdQVVNoYWRlclN0YWdlLlZFUlRFWCB8IEdQVVNoYWRlclN0YWdlLkNPTVBVVEUsXG4gICAgICAgIGJ1ZmZlcjogeyB0eXBlOiBcInJlYWQtb25seS1zdG9yYWdlXCIgfSxcbiAgICAgICAgfSxcbiAgICBdXG4gICAgfSk7XG5cbiAgICBjbGFzcyBOb2RlIHtcbiAgICAgICAgeDogbnVtYmVyO1xuICAgICAgICB5OiBudW1iZXI7XG4gICAgICAgIGFjdGl2ZTogbnVtYmVyO1xuICAgICAgICBjb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG4gICAgICAgIFxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSl7XG4gICAgICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIFNuYWtlIHtcbiAgICAgICAgbm9kZXM6IE5vZGVbXTtcblxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyLCBjb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0pe1xuICAgICAgICAgICAgdGhpcy5ub2RlcyA9IFtdXG5cbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSAwXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnB1c2gobmV3IE5vZGUoeCwgeSArIG9mZnNldCwgY29sb3IpKTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gMC4wM1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGJpbmRHcm91cCA6IEdQVUJpbmRHcm91cDtcbiAgICBsZXQgc25ha2VzOiBTbmFrZVtdID0gW107XG4gICAgbGV0IHNuYWtlTGVuZ3RoID0gNDtcbiAgICBsZXQgbnVtU25ha2VzID0gMztcbiAgICBsZXQgbW9kZSA9IDA7XG4gICAgbGV0IG5vZGVEYXRhOiBGbG9hdDMyQXJyYXk7XG4gICAgbGV0IG5vZGVCdWZmZXI6R1BVQnVmZmVyO1xuICAgIGxldCByZWFkQnVmZmVyOkdQVUJ1ZmZlcjtcbiAgICBsZXQgYnJhaW4gOiBjb21wdXRlRGlyZWN0aW9uO1xuICAgIGxldCBmcmFtZUNvdW50ID0gMDtcbiAgICBsZXQgc3RhcnQ9IGZhbHNlO1xuICAgIGNvbnN0IGlkeFRvQ2FyZCA9IG5ldyBNYXA8bnVtYmVyLCBIVE1MRWxlbWVudD4oKTtcblxuICAgIGNvbnN0IG1vdXNlRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoNCk7IFxuICAgIGNvbnN0IG1vdXNlQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICAgIHNpemU6IG1vdXNlRGF0YS5ieXRlTGVuZ3RoLFxuICAgICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNULFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc25ha2VNZXRhID0gbmV3IFVpbnQzMkFycmF5KDQpO1xuICAgIGNvbnN0IHNuYWtlTWV0YUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgICBzaXplOiBzbmFrZU1ldGEuYnl0ZUxlbmd0aCxcbiAgICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVFxuICAgIH0pXG5cbiAgICBzbmFrZU1ldGFbMF0gPSBzbmFrZUxlbmd0aDtcbiAgICBzbmFrZU1ldGFbMV0gPSBudW1TbmFrZXM7XG4gICAgc25ha2VNZXRhWzJdID0gbW9kZTtcbiAgICBkZXZpY2UucXVldWUud3JpdGVCdWZmZXIoc25ha2VNZXRhQnVmZmVyLCAwLCBzbmFrZU1ldGEpO1xuXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIG1vdXNlRGF0YVswXSA9ICgoZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCkgLyBjYW52YXMud2lkdGgpICogMiAtIDE7XG4gICAgICAgIG1vdXNlRGF0YVsxXSA9ICgoKGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcCkgLyBjYW52YXMuaGVpZ2h0KSAqIDIgLSAxKSAqIC0xO1xuICAgICAgICBkZXZpY2UucXVldWUud3JpdGVCdWZmZXIobW91c2VCdWZmZXIsIDAsIG1vdXNlRGF0YSk7XG4gICAgfSk7XG5cbiAgICBzbmFrZVNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIHN0YXJ0ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KHRhcmdldC52YWx1ZSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW1vdW50X3ZhbHVlXCIpLnRleHRDb250ZW50ID0gdGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIG51bVNuYWtlcyA9IHZhbHVlO1xuICAgICAgICBzbmFrZU1ldGFbMV0gPSBudW1TbmFrZXM7XG5cbiAgICAgICAgc25ha2VzID0gW107XG4gICAgICAgIGRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcihzbmFrZU1ldGFCdWZmZXIsIDAsIHNuYWtlTWV0YSk7XG4gICAgICAgIGdlbmVyYXRlUmFuZG9tR3JhcGgoKTtcbiAgICB9KTtcblxuICAgIGxlbmd0aFNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIHN0YXJ0ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KHRhcmdldC52YWx1ZSk7XG5cbiAgICAgICAgc25ha2VMZW5ndGggPSB2YWx1ZTtcbiAgICAgICAgc25ha2VNZXRhWzBdID0gdmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV3IHNuYWtlIGxlbmd0aFwiLCBzbmFrZUxlbmd0aCk7XG5cbiAgICAgICAgc25ha2VzID0gW107XG4gICAgICAgIGRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcihzbmFrZU1ldGFCdWZmZXIsIDAsIHNuYWtlTWV0YSk7XG4gICAgICAgIGdlbmVyYXRlUmFuZG9tR3JhcGgoKTtcbiAgICB9KTtcblxuICAgIHN0YXJ0U2ltLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpPT57XG4gICAgICAgIGxldCBwcmV2ID0gc3RhcnQ7XG4gICAgICAgIHN0YXJ0ID0gdHJ1ZTtcbiAgICB9KVxuXG4gICAgcGl0QWN0aXZhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCk9PntcbiAgICAgICAgbW9kZSA9IDE7XG4gICAgICAgIHNuYWtlTWV0YVsyXSA9IG1vZGU7XG4gICAgICAgIGRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcihzbmFrZU1ldGFCdWZmZXIsIDAsIHNuYWtlTWV0YSk7XG4gICAgfSlcblxuICAgIGZvbGxvd0FjdGl2YXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpPT57XG4gICAgICAgIG1vZGUgPSAwO1xuICAgICAgICBzbmFrZU1ldGFbMl0gPSBtb2RlO1xuICAgICAgICBkZXZpY2UucXVldWUud3JpdGVCdWZmZXIoc25ha2VNZXRhQnVmZmVyLCAwLCBzbmFrZU1ldGEpO1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBoc3ZUb1JnYihoOiBudW1iZXIsIHM6IG51bWJlciwgdjogbnVtYmVyKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgbGV0IGMgPSB2ICogcztcbiAgICAgICAgbGV0IHggPSBjICogKDEgLSBNYXRoLmFicygoKGggKiA2KSAlIDIpIC0gMSkpO1xuICAgICAgICBsZXQgbSA9IHYgLSBjO1xuXG4gICAgICAgIGxldCBbciwgZywgYl0gPVxuICAgICAgICAgICAgaCA8IDEvNiA/IFtjLCB4LCAwXSA6XG4gICAgICAgICAgICBoIDwgMi82ID8gW3gsIGMsIDBdIDpcbiAgICAgICAgICAgIGggPCAzLzYgPyBbMCwgYywgeF0gOlxuICAgICAgICAgICAgaCA8IDQvNiA/IFswLCB4LCBjXSA6XG4gICAgICAgICAgICBoIDwgNS82ID8gW3gsIDAsIGNdIDpcbiAgICAgICAgICAgICAgICAgICAgW2MsIDAsIHhdO1xuXG4gICAgICAgIHJldHVybiBbciArIG0sIGcgKyBtLCBiICsgbV07XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbmFrZV9saXN0XCIpO1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVNuYWtlQ2FyZChjb2xvcjpbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0sIGlkeDpudW1iZXIpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbmFrZV9saXN0XCIpO1xuXG4gICAgICAgIGNvbnN0IHIgPSBNYXRoLmZsb29yKGNvbG9yWzBdICogMjU1KTtcbiAgICAgICAgY29uc3QgZyA9IE1hdGguZmxvb3IoY29sb3JbMV0gKiAyNTUpO1xuICAgICAgICBjb25zdCBiID0gTWF0aC5mbG9vcihjb2xvclsyXSAqIDI1NSk7XG5cbiAgICAgICAgY29uc3QgY3NzQ29sb3IgPSBgcmdiYSgke3J9LCAke2d9LCAke2J9YDtcbiAgICAgICAgY29uc3QgaWQgPSBgJHtyfSR7Z30ke2J9YDtcblxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2FyZC5jbGFzc05hbWUgPSBcInNuYWtlX2NhcmRcIjtcblxuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZHhUb0NhcmQuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICAgICAgICAgIGMuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIHNuYWtlIGluZGV4OlwiLCBpZHgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBpZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgaWRUZXh0LnRleHRDb250ZW50ID0gaWQ7IC8vIElEID0gY29sb3Igc3RyaW5nXG5cbiAgICAgICAgY29uc3QgY29sb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb2xvckRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjc3NDb2xvcjtcblxuICAgICAgICAvLyBBc3NlbWJsZVxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGlkVGV4dCk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY29sb3JEaXYpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgICAgIGlkeFRvQ2FyZC5zZXQoaWR4LCBjYXJkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRFbGltKGNhcmQ6SFRNTEVsZW1lbnQpe1xuICAgICAgICBjb25zdCBlbGltTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxpbWluYXRlZF9saXN0XCIpXG4gICAgICAgIGNvbnN0IGVsaW1IZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsaW1faGVhZGVyXCIpO1xuICAgICAgICBlbGltTGlzdCEucHJlcGVuZChjYXJkKTsgXG4gICAgICAgIGVsaW1IZWFkZXIucmVtb3ZlKCk7XG4gICAgICAgIGVsaW1MaXN0IS5wcmVwZW5kKGVsaW1IZWFkZXIpO1xuICAgICAgICByZXZpdmVUb3BTbmFrZSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJTbmFrZUxpc3QoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic25ha2VfbGlzdFwiKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbmFrZV9saXN0X2hlYWRlclwiKTtcbiAgICAgICAgY29uc3QgZWxpbUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsaW1pbmF0ZWRfbGlzdFwiKTtcbiAgICAgICAgY29uc3QgZWxpbUhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxpbV9oZWFkZXJcIik7XG5cbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7ICAgICAgICAgIC8vIGNsZWFyIGFsbFxuICAgICAgICBlbGltTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTsgICAgIC8vIHB1dCBoZWFkZXIgYmFja1xuICAgICAgICBlbGltTGlzdC5hcHBlbmRDaGlsZChlbGltSGVhZGVyKTtcbiAgICAgICAgaWR4VG9DYXJkLmNsZWFyKCk7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGZ1bmN0aW9uIHJldml2ZVRvcFNuYWtlKCkge1xuICAgICAgICBjb25zdCBlbGltTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxpbWluYXRlZF9saXN0XCIpO1xuICAgICAgICBjb25zdCBzbmFrZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNuYWtlX2xpc3RcIik7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic25ha2VfbGlzdF9oZWFkZXJcIik7XG5cbiAgICAgICAgLy8gT25seSByZXZpdmUgaWYgdGhlIHNuYWtlIGxpc3QgaXMgZW1wdHkgKGp1c3QgdGhlIGhlYWRlciByZW1haW5zKVxuICAgICAgICAvLyBhbmQgdGhlcmUgaXMgc29tZW9uZSBpbiB0aGUgZWxpbWluYXRpb24gbGlzdCB0byBicmluZyBiYWNrXG4gICAgICAgIGlmIChzbmFrZUxpc3Q/LmNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBlbGltTGlzdD8uY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgLy8gVGhlIGZpcnN0IGNoaWxkIGlzIHVzdWFsbHkgdGhlIGhlYWRlciwgc28gd2UgdGFrZSB0aGUgc2Vjb25kIGNoaWxkXG4gICAgICAgICAgICBjb25zdCB0b3BDYXJkID0gZWxpbUxpc3QuY2hpbGRyZW5bMV0gYXMgSFRNTEVsZW1lbnQ7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBpbmRleCBvZiB0aGUgc25ha2UgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY2FyZFxuICAgICAgICAgICAgbGV0IHNuYWtlSWR4ID0gLTE7XG4gICAgICAgICAgICBmb3IgKGxldCBbaWR4LCBjYXJkXSBvZiBpZHhUb0NhcmQuZW50cmllcygpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhcmQgPT09IHRvcENhcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgc25ha2VJZHggPSBpZHg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNuYWtlSWR4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIDEuIE1vdmUgdGhlIGNhcmQgYmFjayB0byB0aGUgbWFpbiBsaXN0XG4gICAgICAgICAgICAgICAgdG9wQ2FyZC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBoZWFkZXI/LmFmdGVyKHRvcENhcmQpO1xuXG4gICAgICAgICAgICAgICAgLy8gMi4gUHJlcGFyZSB0aGUgcmVzZXQgZGF0YSBmb3IgdGhlIEdQVVxuICAgICAgICAgICAgICAgIC8vIFdlIG9ubHkgbmVlZCB0byB1cGRhdGUgdGhlIHNlZ21lbnRzIGZvciBUSElTIHNwZWNpZmljIHNuYWtlXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyaWRlID0gODsgLy8gOCBmbG9hdHMgcGVyIG5vZGVcbiAgICAgICAgICAgICAgICBjb25zdCBzbmFrZVN0YXJ0SWR4ID0gc25ha2VJZHggKiBzbmFrZUxlbmd0aCAqIHN0cmlkZTtcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVEYXRhID0gbmV3IEZsb2F0MzJBcnJheShzbmFrZUxlbmd0aCAqIHN0cmlkZSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNuYWtlTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gaiAqIHN0cmlkZTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGF0YVtvZmZzZXRdID0gMC4wICsgKGogKiAwLjA0KTsgICAgIC8vIFggY2VudGVyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURhdGFbb2Zmc2V0ICsgMV0gPSAwLjAgKyAoaiAqIDAuMDQpOyAvLyBZIGNlbnRlclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEYXRhW29mZnNldCArIDJdID0gMC4wOyAvLyBVbm1hcmsgXCJoaXRcIiAoZGF0YVtpKzJdID0gMC4wKVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEYXRhW29mZnNldCArIDNdID0gMC4wOyAvLyBwYWRkaW5nXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBLZWVwIHRoZSBvcmlnaW5hbCBjb2xvcnMgZnJvbSBvdXIgbG9jYWwgbm9kZURhdGFcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGF0YVtvZmZzZXQgKyA0XSA9IG5vZGVEYXRhW3NuYWtlU3RhcnRJZHggKyBvZmZzZXQgKyA0XTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGF0YVtvZmZzZXQgKyA1XSA9IG5vZGVEYXRhW3NuYWtlU3RhcnRJZHggKyBvZmZzZXQgKyA1XTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGF0YVtvZmZzZXQgKyA2XSA9IG5vZGVEYXRhW3NuYWtlU3RhcnRJZHggKyBvZmZzZXQgKyA2XTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGF0YVtvZmZzZXQgKyA3XSA9IG5vZGVEYXRhW3NuYWtlU3RhcnRJZHggKyBvZmZzZXQgKyA3XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyAzLiBXcml0ZSBkaXJlY3RseSB0byB0aGUgR1BVIHN0b3JhZ2UgYnVmZmVyXG4gICAgICAgICAgICAgICAgZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKFxuICAgICAgICAgICAgICAgICAgICBub2RlQnVmZmVyLCBcbiAgICAgICAgICAgICAgICAgICAgc25ha2VTdGFydElkeCAqIDQsIC8vIG9mZnNldCBpbiBieXRlc1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEYXRhXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIHRvIGdlbmVyYXRlIGEgcmFuZG9tIGdyYXBoXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21HcmFwaCgpIHtcbiAgICAgICAgc3RhcnQgPSBmYWxzZTtcbiAgICAgICAgc2ltSWQrKztcbiAgICAgICAgXG4gICAgICAgIGlmIChub2RlQnVmZmVyKSBub2RlQnVmZmVyLmRlc3Ryb3koKTtcbiAgICAgICAgaWYgKHJlYWRCdWZmZXIpIHtcbiAgICAgICAgICAgIHRyeSB7IHJlYWRCdWZmZXIudW5tYXAoKTsgfSBjYXRjaChlKSB7fVxuICAgICAgICAgICAgcmVhZEJ1ZmZlci5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJTbmFrZUxpc3QoKVxuICAgICAgICBcbiAgICAgICAgLy8gRGVmaW5lIDEwIGhpZ2gtY29udHJhc3QgY29sb3JzIChSR0JBKVxuICAgICAgICBjb25zdCBwYWxldHRlOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXVtdID0gW1xuICAgICAgICAgICAgWzEuMCwgMC4wLCAwLjAsIDEuMF0sIC8vIFJlZFxuICAgICAgICAgICAgWzEuMCwgMS4wLCAwLjAsIDEuMF0sIC8vIFllbGxvd1xuICAgICAgICAgICAgWzAuMCwgMC4wLCAxLjAsIDEuMF0sIC8vIEJsdWVcbiAgICAgICAgXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVNuYWtlczsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBodWUgPSBpIC8gbnVtU25ha2VzOyBcbiAgICAgICAgICAgIGNvbnN0IFtyLCBnLCBiXSA9IGhzdlRvUmdiKGh1ZSwgMS4wLCAxLjApO1xuICAgICAgICAgICAgY3JlYXRlU25ha2VDYXJkKFtyLGcsYl0sIGkpO1xuXG4gICAgICAgICAgICBzbmFrZXMucHVzaChuZXcgU25ha2UoXG4gICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDIuMCAtIDEuMCxcbiAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMi4wIC0gMS4wLCBcbiAgICAgICAgICAgICAgICBzbmFrZUxlbmd0aCxcbiAgICAgICAgICAgICAgICBbciwgZywgYiwgMS4wXVxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIENyZWF0ZSBub2RlIGJ1ZmZlclxuICAgICAgICBub2RlRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkobnVtU25ha2VzICogc25ha2VMZW5ndGggKiA4KTtcbiAgICAgICAgc25ha2VzLmZvckVhY2goKHNuYWtlLCBpKSA9PiB7XG4gICAgICAgICAgICBzbmFrZS5ub2Rlcy5mb3JFYWNoKChub2RlLCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKGkgKiBzbmFrZUxlbmd0aCArIGopICogOFxuICAgICAgICAgICAgICAgIG5vZGVEYXRhW29mZnNldF0gPSBub2RlLng7XG4gICAgICAgICAgICAgICAgbm9kZURhdGFbb2Zmc2V0ICsgMV0gPSBub2RlLnk7XG4gICAgICAgICAgICAgICAgbm9kZURhdGFbb2Zmc2V0ICsgMl0gPSAwLjA7XG4gICAgICAgICAgICAgICAgbm9kZURhdGFbb2Zmc2V0ICsgM10gPSAwLjA7IFxuICAgICAgICAgICAgICAgIG5vZGVEYXRhW29mZnNldCArIDRdID0gbm9kZS5jb2xvclswXTtcbiAgICAgICAgICAgICAgICBub2RlRGF0YVtvZmZzZXQgKyA1XSA9IG5vZGUuY29sb3JbMV07XG4gICAgICAgICAgICAgICAgbm9kZURhdGFbb2Zmc2V0ICsgNl0gPSBub2RlLmNvbG9yWzJdO1xuICAgICAgICAgICAgICAgIG5vZGVEYXRhW29mZnNldCArIDddID0gbm9kZS5jb2xvclszXTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvLyBDcmVhdGUgR1BVIGJ1ZmZlcnNcbiAgICAgICAgbm9kZUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgICAgICAgc2l6ZTogbm9kZURhdGEuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5TVE9SQUdFIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfCBHUFVCdWZmZXJVc2FnZS5DT1BZX1NSQyxcbiAgICAgICAgICAgIG1hcHBlZEF0Q3JlYXRpb246IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vY29uc3QgcmVhZEJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgICByZWFkQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICAgICAgICBzaXplOiBub2RlRGF0YS5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIHwgR1BVQnVmZmVyVXNhZ2UuTUFQX1JFQUQsXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgbmV3IEZsb2F0MzJBcnJheShub2RlQnVmZmVyLmdldE1hcHBlZFJhbmdlKCkpLnNldChub2RlRGF0YSk7XG4gICAgICAgIG5vZGVCdWZmZXIudW5tYXAoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIENyZWF0ZSBiaW5kIGdyb3VwXG4gICAgICAgIGJpbmRHcm91cCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXAoe1xuICAgICAgICAgICAgbGF5b3V0OiBiaW5kR3JvdXBMYXlvdXQsXG4gICAgICAgICAgICBlbnRyaWVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJpbmRpbmc6IDAsXG4gICAgICAgICAgICAgICAgcmVzb3VyY2U6IHsgYnVmZmVyOiBub2RlQnVmZmVyIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9KTsgXG5cbiAgICAgICAgYnJhaW4gPSBuZXcgY29tcHV0ZURpcmVjdGlvbihkZXZpY2UsIG5vZGVCdWZmZXIsIG1vdXNlQnVmZmVyLCBzbmFrZU1ldGFCdWZmZXIsIChudW1TbmFrZXMgKiBzbmFrZUxlbmd0aCkpO1xuICAgIH1cblxuICAgIGxldCByZWFkaW5nID0gZmFsc2U7XG5cbiAgICBhc3luYyBmdW5jdGlvbiByZWFkU25ha2VSZXN1bHRzKCkge1xuICAgICAgICBpZiAocmVhZGluZyB8fCAhcmVhZEJ1ZmZlcikgcmV0dXJuO1xuICAgICAgICByZWFkaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgY3VycmVudFNpbUlkID0gc2ltSWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGRldmljZS5xdWV1ZS5vblN1Ym1pdHRlZFdvcmtEb25lKCk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFNpbUlkICE9PSBzaW1JZCkgcmV0dXJuO1xuXG4gICAgICAgICAgICBhd2FpdCByZWFkQnVmZmVyLm1hcEFzeW5jKEdQVU1hcE1vZGUuUkVBRCk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFNpbUlkICE9PSBzaW1JZCkge1xuICAgICAgICAgICAgICAgIHJlYWRCdWZmZXIudW5tYXAoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG1hcHBlZCA9IG5ldyBGbG9hdDMyQXJyYXkocmVhZEJ1ZmZlci5nZXRNYXBwZWRSYW5nZSgpKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KG1hcHBlZC5sZW5ndGgpO1xuICAgICAgICAgICAgZGF0YS5zZXQobWFwcGVkKTtcbiAgICAgICAgICAgIHJlYWRCdWZmZXIudW5tYXAoKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAoOCAqIHNuYWtlTGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhW2kgKyAyXSA9PT0gMS4wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNuYWtlSW5kZXggPSBNYXRoLmZsb29yKGkgLyAoc25ha2VMZW5ndGggKiA4KSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBpZHhUb0NhcmQuZ2V0KHNuYWtlSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZCAmJiBjYXJkLnBhcmVudEVsZW1lbnQ/LmlkICE9PSBcImVsaW1pbmF0ZWRfbGlzdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkRWxpbShjYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUmVhZCBhYm9ydGVkXCIpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgcmVhZGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVSYW5kb21HcmFwaCgpO1xuXG4gICAgLy8gQ3JlYXRlIHNoYWRlciBtb2R1bGVcbiAgICBjb25zdCBub2RlTW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7XG4gICAgICAgIGNvZGU6IG5vZGVDb2RlXG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgcGlwZWxpbmVcbiAgICBjb25zdCBub2RlUGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgICBsYXlvdXQ6IGRldmljZS5jcmVhdGVQaXBlbGluZUxheW91dCh7XG4gICAgICAgIGJpbmRHcm91cExheW91dHM6IFtiaW5kR3JvdXBMYXlvdXRdXG4gICAgICAgIH0pLFxuICAgICAgICB2ZXJ0ZXg6IHtcbiAgICAgICAgbW9kdWxlOiBub2RlTW9kdWxlLFxuICAgICAgICBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIlxuICAgICAgICB9LFxuICAgICAgICBmcmFnbWVudDoge1xuICAgICAgICBtb2R1bGU6IG5vZGVNb2R1bGUsXG4gICAgICAgIGVudHJ5UG9pbnQ6IFwiZnJhZ21lbnRNYWluXCIsXG4gICAgICAgIHRhcmdldHM6IFt7IGZvcm1hdCB9XVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0VGV4dHVyZSA9IGNvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKTtcbiAgICAgICAgY29uc3QgY29tbWFuZEVuY29kZXIgPSBkZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcblxuICAgICAgICBpZiAoc3RhcnQpe1xuICAgICAgICAgICAgYnJhaW4uY2hhc2UoY29tbWFuZEVuY29kZXIpO1xuXG4gICAgICAgICAgICBpZiAocmVhZEJ1ZmZlci5tYXBTdGF0ZSA9PT0gXCJ1bm1hcHBlZFwiKSB7XG4gICAgICAgICAgICAgICAgY29tbWFuZEVuY29kZXIuY29weUJ1ZmZlclRvQnVmZmVyKFxuICAgICAgICAgICAgICAgICAgICBub2RlQnVmZmVyLCAwLCBcbiAgICAgICAgICAgICAgICAgICAgcmVhZEJ1ZmZlciwgMCwgXG4gICAgICAgICAgICAgICAgICAgIG5vZGVEYXRhLmJ5dGVMZW5ndGhcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFzcyA9IGNvbW1hbmRFbmNvZGVyLmJlZ2luUmVuZGVyUGFzcyh7XG4gICAgICAgICAgICBjb2xvckF0dGFjaG1lbnRzOiBbe1xuICAgICAgICAgICAgICAgIHZpZXc6IHRhcmdldFRleHR1cmUuY3JlYXRlVmlldygpLFxuICAgICAgICAgICAgICAgIGxvYWRPcDogXCJjbGVhclwiLFxuICAgICAgICAgICAgICAgIHN0b3JlT3A6IFwic3RvcmVcIixcbiAgICAgICAgICAgICAgICBjbGVhclZhbHVlOiB7IHI6IDAuMCwgZzogMC4wLCBiOiAwLjAsIGE6IDAuMCB9IFxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGFzcy5zZXRQaXBlbGluZShub2RlUGlwZWxpbmUpO1xuICAgICAgICBwYXNzLnNldEJpbmRHcm91cCgwLCBiaW5kR3JvdXApO1xuICAgICAgICBwYXNzLmRyYXcoNiwgbnVtU25ha2VzICogc25ha2VMZW5ndGgpO1xuICAgICAgICBwYXNzLmVuZCgpO1xuXG4gICAgICAgIGRldmljZS5xdWV1ZS5zdWJtaXQoW2NvbW1hbmRFbmNvZGVyLmZpbmlzaCgpXSk7XG5cbiAgICAgICAgaWYgKGZyYW1lQ291bnQgJSA4ID09PSAwICYmIHN0YXJ0KSB7XG4gICAgICAgICAgICByZWFkU25ha2VSZXN1bHRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZyYW1lQ291bnQgPSAoZnJhbWVDb3VudCArIDEpICUgMTAwMDtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBtYWluKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=