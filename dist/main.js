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
___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {
  box-sizing: border-box;
}

#snake_list, #eliminated_list {
    padding: 8px;
    min-width: 120px;
    overflow-y: auto;
    height: 602px;
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

#controls {
    padding-left: 35%;
    padding-right: 35%;;
}

`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,wBAAwB;IACxB,uBAAuB;IACvB,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB","sourcesContent":["*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n#snake_list, #eliminated_list {\r\n    padding: 8px;\r\n    min-width: 120px;\r\n    overflow-y: auto;\r\n    height: 602px;\r\n    border-bottom: 1px solid lightgray;\r\n}\r\n\r\n#snake_list_header, #elim_header {\r\n    padding: 0px 0px 0px 4px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n.snake_card {\r\n    padding: 0px 0px 0px 4px;\r\n    border: 1px solid white;\r\n    background-color: whitesmoke;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n.snake_card p, #snake_list_header p, #elim_header p{\r\n    margin: 0px;\r\n}\r\n\r\n.snake_card div{\r\n    width: 25%;\r\n}\r\n\r\n.snake_card.selected {\r\n    border: 2px solid black;\r\n}\r\n\r\n#controls {\r\n    padding-left: 35%;\r\n    padding-right: 35%;;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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

module.exports = "struct Node {\r\n    pos : vec2f,\r\n    hit : vec2f,\r\n    color : vec4f,\r\n};\r\n\r\nstruct Mouse {\r\n    pos : vec2f,\r\n};\r\n\r\nstruct SnakeMetaData {\r\n    length: u32,\r\n    numSnakes: u32,\r\n    mode: u32,\r\n};\r\n\r\n@group(0) @binding(0) var<storage, read_write> nodes : array<Node>;\r\n@group(0) @binding(1) var<uniform> mouse : Mouse;\r\n@group(0) @binding(2) var<uniform> snakeMeta : SnakeMetaData;\r\n\r\nfn run_chase(global_id: vec3<u32>) {    \r\n    var head = global_id.x - (global_id.x % snakeMeta.length);\r\n    var tail = head + snakeMeta.length + 1;\r\n    let mousePos = mouse.pos;\r\n\r\n    // safe bounds check\r\n    if (global_id.x >= arrayLength(&nodes)) {\r\n        return;\r\n    }\r\n\r\n\r\n    let nodePos = nodes[global_id.x].pos;\r\n\r\n    var dir: vec2f = vec2f(0.0, 0.0);\r\n    if ((global_id.x % snakeMeta.length == 0)){\r\n        dir = mousePos - nodePos;\r\n    } else {\r\n        dir = nodes[global_id.x-1].pos - nodePos;\r\n    }\r\n\r\n    let dist = length(dir);\r\n    \r\n    if (dist > 0.04) {\r\n        let step = normalize(dir) * 0.005;\r\n        nodes[global_id.x].pos += step;\r\n    } else {\r\n        return;\r\n    }\r\n\r\n\r\n    for (var j: u32 = 0u; j < arrayLength(&nodes); j++) {\r\n        if (j <= tail && j >= head) {\r\n            continue;\r\n        }\r\n\r\n        let offset = nodePos - nodes[j].pos;\r\n        let dist = length(offset);\r\n\r\n        var minDist = 0.1;\r\n\r\n        if (dist > 0.000001 && dist < minDist) {\r\n            let dir = normalize(offset);\r\n\r\n            // stronger push when closer\r\n            let strength = (minDist - dist) / minDist;\r\n\r\n            nodes[global_id.x].pos += dir * strength * 0.01;\r\n        }\r\n    }\r\n}\r\n\r\nfn run_pit(global_id: vec3<u32>) {    \r\n    var head = global_id.x - (global_id.x % snakeMeta.length);\r\n    var tail = head + snakeMeta.length;\r\n\r\n    if (global_id.x >= arrayLength(&nodes)) {\r\n        return;\r\n    }\r\n\r\n    let nodePos = nodes[global_id.x].pos;\r\n\r\n    var poi: vec2f = vec2f(0.0, 0.0);\r\n    var poi_idx = 0u;\r\n    \r\n    if (global_id.x % snakeMeta.length == 0){ \r\n        var closest = 1e9;\r\n\r\n        for (var j: u32 = 0u; j < arrayLength(&nodes); j++) {\r\n            if (j <= tail && j >= head) {\r\n                continue;\r\n            }\r\n\r\n            if (nodes[j].hit.x == 1.0){\r\n                continue;\r\n            }\r\n\r\n            let offset = nodes[j].pos - nodePos;\r\n            let dist = length(offset);\r\n\r\n            if (dist < closest){\r\n                closest = dist;\r\n                poi = offset;\r\n                poi_idx = j;\r\n            }\r\n        }\r\n\r\n        if (closest == 1e9){\r\n            poi = vec2f(0.0, 0.0);\r\n        }\r\n    } else {\r\n        poi = nodes[global_id.x-1].pos - nodePos;\r\n\r\n        if (nodes[global_id.x-1].hit.x == 1.0){\r\n            nodes[global_id.x].hit.x = 1.0;\r\n        }\r\n    }\r\n\r\n    let dist = length(poi);\r\n\r\n    if (nodes[global_id.x].hit.x == 1.0){\r\n        nodes[global_id.x].pos = vec2f(-2.0, 1.0);\r\n        nodes[global_id.x].hit.x = 1.0;\r\n    }\r\n    \r\n\r\n    if (dist > 0.03 && global_id.x % snakeMeta.length != 0){\r\n        let step = normalize(poi) * 0.003;\r\n        nodes[global_id.x].pos += step;\r\n    } else if (dist > 0.005 && global_id.x % snakeMeta.length == 0){\r\n        let step = normalize(poi) * 0.003;\r\n        nodes[global_id.x].pos += step;\r\n    } else if (global_id.x % snakeMeta.length == 0){\r\n        nodes[poi_idx].hit.x = 1.0;\r\n    }\r\n}\r\n\r\n@compute @workgroup_size(64, 1, 1)\r\nfn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\r\n    if (snakeMeta.mode == 0){\r\n        run_chase(global_id);\r\n    } else {\r\n        run_pit(global_id);\r\n    }\r\n}\r\n\r\n// Working\r\n// @compute @workgroup_size(64, 1, 1)\r\n// fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\r\n//     let tail = global_id.x * snakeMeta.length;\r\n//     let head = tail + snakeMeta.length;\r\n//     let mousePos = mouse.pos;\r\n    \r\n//     for (var i = tail; i < head; i++){\r\n\r\n//         // safe bounds check\r\n//         if (i >= arrayLength(&nodes)) {\r\n//             return;\r\n//         }\r\n\r\n//         let nodePos = nodes[i].pos;\r\n\r\n//         var dir: vec2f = vec2f(0.0, 0.0);\r\n//         if (i == head - 1){\r\n//             dir = mousePos - nodePos;\r\n//         } else {\r\n//             dir = nodes[i+1].pos - nodePos;\r\n//         }\r\n\r\n//         let dist = length(dir);\r\n        \r\n//         for (var j: u32 = 0u; j < arrayLength(&nodes); j++) {\r\n//             if (j == i) {\r\n//                 continue;\r\n//             }\r\n\r\n//             let offset = nodePos - nodes[j].pos;\r\n//             let dist = length(offset);\r\n\r\n//             var minDist = 0.1;\r\n\r\n//             if (tail <= j && j < head) {\r\n//                 minDist = 0.08;\r\n//             }\r\n\r\n//             if (dist > 0.000001 && dist < minDist) {\r\n//                 let dir = normalize(offset);\r\n\r\n//                 // stronger push when closer\r\n//                 let strength = (minDist - dist) / minDist;\r\n\r\n//                 nodes[i].pos += dir * strength * 0.01;\r\n//             }\r\n//         }\r\n\r\n//         if (dist > 0.0001) {\r\n//             let step = normalize(dir) * 0.005;\r\n//             nodes[i].pos += step;\r\n//         }\r\n//     }\r\n// }\r\n\r\n// Big Bang\r\n// @compute @workgroup_size(64, 1, 1)\r\n// fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\r\n//     let tail = global_id.x * 10;\r\n//     let head = tail + 10;\r\n\r\n//     let mousePos = mouse.pos;\r\n    \r\n//     for (var i = tail; i < head; i++){\r\n\r\n//         // safe bounds check\r\n//         if (i >= arrayLength(&nodes)) {\r\n//             return;\r\n//         }\r\n\r\n//         let nodePos = nodes[i].pos;\r\n\r\n//         var dir: vec2f = vec2f(0.0, 0.0);\r\n//         if (i == head - 1){\r\n//             dir = mousePos - nodePos;\r\n//         } else {\r\n//             dir = nodes[i+1].pos - nodePos;\r\n//         }\r\n\r\n//         // normalize (avoid divide by zero)\r\n//         let dist = length(dir);\r\n//         if (dist > 0.0001) {\r\n//             let step = normalize(dir) * 0.005;\r\n//             nodes[i].pos += step;\r\n//         }\r\n//     }\r\n\r\n//     for (var i = tail-tail; i < tail; i++){\r\n//         // safe bounds check\r\n//         if (i >= arrayLength(&nodes)) {\r\n//             return;\r\n//         }\r\n\r\n//         let nodePos = nodes[i].pos;\r\n\r\n//         var dir: vec2f = vec2f(0.0, 0.0);\r\n//         if (i == head - 1){\r\n//             dir = mousePos - nodePos;\r\n//         } else {\r\n//             dir = nodePos - nodes[i+1].pos;\r\n//         }\r\n\r\n//         // normalize (avoid divide by zero)\r\n//         let dist = length(dir);\r\n\r\n//         if (dist > 0.5){\r\n//             return;\r\n//         }\r\n\r\n//         if (dist > 0.00001) {\r\n//             let step = normalize(dir) * 0.01;\r\n//             nodes[i].pos += step;\r\n//         } \r\n//     }\r\n// }\r\n\r\n\r\n//Virus Snake\r\n// @compute @workgroup_size(64, 1, 1)\r\n// fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\r\n//     let tail = global_id.x * 10;\r\n//     let head = tail + 10;\r\n\r\n//     let mousePos = mouse.pos;\r\n    \r\n//     for (var i = tail; i < head; i++){\r\n\r\n//         // safe bounds check\r\n//         if (i >= arrayLength(&nodes)) {\r\n//             return;\r\n//         }\r\n\r\n//         let nodePos = nodes[i].pos;\r\n\r\n//         var dir: vec2f = vec2f(0.0, 0.0);\r\n//         if (i == head - 1){\r\n//             dir = mousePos - nodePos;\r\n//         } else {\r\n//             dir = nodes[i+1].pos - nodePos;\r\n//         }\r\n\r\n//         // normalize (avoid divide by zero)\r\n//         let dist = length(dir);\r\n//         if (dist > 0.0001) {\r\n//             let step = normalize(dir) * 0.005;\r\n//             nodes[i].pos += step;\r\n//         }\r\n//     }\r\n\r\n//     for (var i = tail-tail; i < tail; i++){\r\n//         // safe bounds check\r\n//         if (i >= arrayLength(&nodes)) {\r\n//             return;\r\n//         }\r\n\r\n//         let nodePos = nodes[i].pos;\r\n\r\n//         var dir: vec2f = vec2f(0.0, 0.0);\r\n//         if (i == head - 1){\r\n//             dir = mousePos - nodePos;\r\n//         } else {\r\n//             dir = nodes[i+1].pos - nodePos;\r\n//         }\r\n\r\n//         // normalize (avoid divide by zero)\r\n//         let dist = length(dir);\r\n//         if (dist > 0.0001) { //increase to increase scatter effect\r\n//             let step = normalize(dir) * 0.01;\r\n//             nodes[i].pos += step;\r\n//         } \r\n//     }\r\n// }\r\n\r\n\r\n//tentacle\r\n// @compute @workgroup_size(64, 1, 1)\r\n// fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\r\n//     let tail = global_id.x;\r\n//     let head = (global_id.x * 10) + 10;\r\n\r\n//     // safe bounds check\r\n//     if (head >= arrayLength(&nodes)) {\r\n//         return;\r\n//     }\r\n\r\n//     let mousePos = mouse.pos;\r\n    \r\n//     for (var i = tail; i < head; i++){\r\n//         let nodePos = nodes[i].pos;\r\n\r\n//         // direction toward mouse\r\n        \r\n//         let dir = mousePos - nodePos;\r\n\r\n//         // normalize (avoid divide by zero)\r\n//         let dist = length(dir);\r\n//         if (dist > 0.0001) {\r\n//             let step = normalize(dir) * 0.001;\r\n//             nodes[i].pos += step;\r\n//         }\r\n//     }\r\n// }\r\n\r\n    // var yForce = 0.0;\r\n    // var xForce = 0.0;\r\n    // if (global_id.x % 2 == 0){\r\n    //     yForce = 0.05;\r\n    // } else {\r\n    //     yForce = -0.05;\r\n    // }\r\n\r\n\r\n    // nodes[global_id.x].pos.y += yForce;\r\n    // nodes[global_id.x].pos.x += xForce;\r\n\r\n    // if (nodes[global_id.x].pos.y >= 1){\r\n    //     nodes[global_id.x].pos.y = -1;\r\n    // } else if (nodes[global_id.x].pos.y <= -1){\r\n    //     nodes[global_id.x].pos.y = 1;\r\n    // }\r\n    \r\n\r\n";

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
/*!**********************!*\
  !*** ./src/snake.ts ***!
  \**********************/
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
            generateRandomSnakes();
        });
        lengthSlider.addEventListener("input", (event) => {
            start = false;
            const target = event.target;
            const value = parseInt(target.value);
            document.getElementById("length_value").textContent = target.value;
            snakeLength = value;
            snakeMeta[0] = value;
            snakes = [];
            device.queue.writeBuffer(snakeMetaBuffer, 0, snakeMeta);
            generateRandomSnakes();
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
        function generateRandomSnakes() {
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
        generateRandomSnakes();
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
                        clearValue: { r: 1.0, g: 1.0, b: 1.0, a: 1.0 } // Set to white
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGtEQUFrRCw2QkFBNkIsS0FBSyx1Q0FBdUMscUJBQXFCLHlCQUF5Qix5QkFBeUIsc0JBQXNCLDJDQUEyQyxLQUFLLDBDQUEwQyxpQ0FBaUMsc0JBQXNCLDRCQUE0Qix1Q0FBdUMsS0FBSyxxQkFBcUIsaUNBQWlDLGdDQUFnQyxxQ0FBcUMsc0JBQXNCLDRCQUE0Qix1Q0FBdUMsS0FBSyw0REFBNEQsb0JBQW9CLEtBQUssd0JBQXdCLG1CQUFtQixLQUFLLDhCQUE4QixnQ0FBZ0MsS0FBSyxtQkFBbUIsMEJBQTBCLDRCQUE0QixLQUFLLDJCQUEyQjtBQUM5MUM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNwRDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksdUZBQU8sVUFBVSx1RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUN4QmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0M7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRDs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DOzs7Ozs7Ozs7Ozs7Ozs7QUNiK0I7QUFFeEIsTUFBTSxnQkFBZ0I7SUFTekIsWUFBWSxNQUFpQixFQUFFLFVBQXFCLEVBQUUsV0FBc0IsRUFBRSxlQUEwQixFQUFFLFNBQWlCO1FBUm5ILG9CQUFlLEdBQThCLElBQUksQ0FBQztRQUNsRCxjQUFTLEdBQXdCLElBQUksQ0FBQztRQUN0QyxjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBTzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBRTNCLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUM7WUFDckQsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUU7Z0JBQ0wsTUFBTSxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztvQkFDOUIsSUFBSSxFQUFFLHVDQUFJO2lCQUNiLENBQUM7Z0JBQ0YsVUFBVSxFQUFFLE1BQU07YUFDckI7U0FDSixDQUFDLENBQUM7UUFFSCxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQztZQUN6QyxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDbEQsT0FBTyxFQUFFO2dCQUNMO29CQUNJLE9BQU8sRUFBRSxDQUFDO29CQUNWLFFBQVEsRUFBRTt3QkFDTixNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVU7cUJBQzFCO2lCQUNKO2dCQUNEO29CQUNJLE9BQU8sRUFBRSxDQUFDO29CQUNWLFFBQVEsRUFBRTt3QkFDUCxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVc7cUJBQzFCO2lCQUNKO2dCQUNEO29CQUNJLE9BQU8sRUFBRSxDQUFDO29CQUNWLFFBQVEsRUFBRTt3QkFDUCxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWU7cUJBQzlCO2lCQUNKO2FBQ0o7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sS0FBSyxDQUFDLGNBQWlDO1FBQzFDLE1BQU0sSUFBSSxHQUFHLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRS9DLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUV2QyxJQUFJLENBQUMsa0JBQWtCLENBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFDOUIsQ0FBQyxFQUNELENBQUMsQ0FDSixDQUFDO1FBRUYsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyRUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW1DO0FBQ1U7QUFDeEI7QUFHckIsU0FBZSxJQUFJOztRQUNmLGdDQUFnQztRQUNoQyxNQUFNLE9BQU8sR0FBRyxNQUFNLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckQsTUFBTSxNQUFNLEdBQUcsTUFBTSxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFN0MsOEJBQThCO1FBQzlCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFzQixDQUFDO1FBQzdFLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFnQyxDQUFDO1FBQzNFLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUN4RCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0RCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUNsRCxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVkLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDZCxNQUFNO1lBQ04sTUFBTTtTQUNULENBQUMsQ0FBQztRQUdILDREQUE0RDtRQUM1RCxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUM7WUFDckQsT0FBTyxFQUFFO2dCQUNMO29CQUNBLE9BQU8sRUFBRSxDQUFDO29CQUNWLFVBQVUsRUFBRSxjQUFjLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxPQUFPO29CQUMxRCxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7aUJBQ3BDO2FBQ0o7U0FDQSxDQUFDLENBQUM7UUFFSCxNQUFNLElBQUk7WUFNTixZQUFtQixDQUFTLEVBQUUsQ0FBUyxFQUFFLEtBQXVDO2dCQUM1RSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUN2QixDQUFDO1NBQ0o7UUFFRCxNQUFNLEtBQUs7WUFHUCxZQUFtQixDQUFTLEVBQUUsQ0FBUyxFQUFFLE1BQWMsRUFBRSxLQUF1QztnQkFDNUYsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFO2dCQUVmLElBQUksTUFBTSxHQUFHLENBQUM7Z0JBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO29CQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNoRCxNQUFNLElBQUksSUFBSTtnQkFDbEIsQ0FBQztZQUNMLENBQUM7U0FDSjtRQUVELElBQUksU0FBd0IsQ0FBQztRQUM3QixJQUFJLE1BQU0sR0FBWSxFQUFFLENBQUM7UUFDekIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLFFBQXNCLENBQUM7UUFDM0IsSUFBSSxVQUFvQixDQUFDO1FBQ3pCLElBQUksVUFBb0IsQ0FBQztRQUN6QixJQUFJLEtBQXdCLENBQUM7UUFDN0IsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksS0FBSyxHQUFFLEtBQUssQ0FBQztRQUNqQixNQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBdUIsQ0FBQztRQUVqRCxNQUFNLFNBQVMsR0FBRyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ3BDLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVTtZQUMxQixLQUFLLEVBQUUsY0FBYyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsUUFBUTtTQUMxRCxDQUFDLENBQUM7UUFFSCxNQUFNLFNBQVMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ3hDLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVTtZQUMxQixLQUFLLEVBQUUsY0FBYyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsUUFBUTtTQUMxRCxDQUFDO1FBRUYsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztRQUMzQixTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUV4RCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDM0MsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDNUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMzRSxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO1FBRUgsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzVDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDZCxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBMEIsQ0FBQztZQUNoRCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFFbkUsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNsQixTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBRXpCLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDWixNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3hELG9CQUFvQixFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDN0MsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNkLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUEwQixDQUFDO1lBQ2hELE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUVuRSxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFFckIsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNaLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDeEQsb0JBQW9CLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUMsRUFBRTtZQUN4QyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7WUFDakIsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixDQUFDLENBQUM7UUFFRixXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFDLEVBQUU7WUFDM0MsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNULFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUM7UUFFRixjQUFjLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFDLEVBQUU7WUFDOUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNULFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUM7UUFFRixTQUFTLFFBQVEsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7WUFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWQsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQ1QsQ0FBQyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLENBQUMsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDckIsQ0FBQyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNyQixDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NB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QUMsWUFBWSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRVgsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRS9DLElBQUksVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQ2hDLGdCQUFnQixFQUFFLENBQUM7WUFDdkIsQ0FBQztZQUVELFVBQVUsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDckMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUVELE1BQU0sRUFBRSxDQUFDO0lBQ2IsQ0FBQztDQUFBO0FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmdwdS13ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWJncHUtd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJncHUtd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LXdlYnBhY2stc3RhcnRlci8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2ViZ3B1LXdlYnBhY2stc3RhcnRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJncHUtd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJncHUtd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYmdwdS13ZWJwYWNrLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LXdlYnBhY2stc3RhcnRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYmdwdS13ZWJwYWNrLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJncHUtd2VicGFjay1zdGFydGVyLy4vc3JjL2NvbXB1dGUudHMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LXdlYnBhY2stc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJncHUtd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYmdwdS13ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYmdwdS13ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJncHUtd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViZ3B1LXdlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2ViZ3B1LXdlYnBhY2stc3RhcnRlci8uL3NyYy9zbmFrZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuI3NuYWtlX2xpc3QsICNlbGltaW5hdGVkX2xpc3Qge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDYwMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxufVxyXG5cclxuI3NuYWtlX2xpc3RfaGVhZGVyLCAjZWxpbV9oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5zbmFrZV9jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc25ha2VfY2FyZCBwLCAjc25ha2VfbGlzdF9oZWFkZXIgcCwgI2VsaW1faGVhZGVyIHB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnNuYWtlX2NhcmQgZGl2e1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLnNuYWtlX2NhcmQuc2VsZWN0ZWQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNjb250cm9scyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM1JTs7XHJcbn1cclxuXHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuI3NuYWtlX2xpc3QsICNlbGltaW5hdGVkX2xpc3Qge1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIG1pbi13aWR0aDogMTIwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIGhlaWdodDogNjAycHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbiNzbmFrZV9saXN0X2hlYWRlciwgI2VsaW1faGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggNHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5zbmFrZV9jYXJkIHtcXHJcXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggNHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc25ha2VfY2FyZCBwLCAjc25ha2VfbGlzdF9oZWFkZXIgcCwgI2VsaW1faGVhZGVyIHB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc25ha2VfY2FyZCBkaXZ7XFxyXFxuICAgIHdpZHRoOiAyNSU7XFxyXFxufVxcclxcblxcclxcbi5zbmFrZV9jYXJkLnNlbGVjdGVkIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNjb250cm9scyB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMzUlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNSU7O1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IG1vdmUgZnJvbSBcIi4vbW92ZS53Z3NsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgY29tcHV0ZURpcmVjdGlvbiB7XHJcbiAgICBwcml2YXRlIGNvbXB1dGVQaXBlbGluZTogR1BVQ29tcHV0ZVBpcGVsaW5lIHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGJpbmRHcm91cDogR1BVQmluZEdyb3VwIHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIG5vZGVDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZGV2aWNlOiBHUFVEZXZpY2U7XHJcbiAgICBwcml2YXRlIG5vZGVidWZmZXI6IEdQVUJ1ZmZlcjtcclxuICAgIHByaXZhdGUgbW91c2VCdWZmZXI6IEdQVUJ1ZmZlcjtcclxuICAgIHByaXZhdGUgc25ha2VNZXRhQnVmZmVyOiBHUFVCdWZmZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGV2aWNlOiBHUFVEZXZpY2UsIG5vZGVidWZmZXI6IEdQVUJ1ZmZlciwgbW91c2VCdWZmZXI6IEdQVUJ1ZmZlciwgc25ha2VNZXRhQnVmZmVyOiBHUFVCdWZmZXIsIG5vZGVDb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSBkZXZpY2U7XHJcbiAgICAgICAgdGhpcy5ub2RlYnVmZmVyID0gbm9kZWJ1ZmZlcjtcclxuICAgICAgICB0aGlzLm1vdXNlQnVmZmVyID0gbW91c2VCdWZmZXI7XHJcbiAgICAgICAgdGhpcy5zbmFrZU1ldGFCdWZmZXIgPSBzbmFrZU1ldGFCdWZmZXI7XHJcbiAgICAgICAgdGhpcy5ub2RlQ291bnQgPSBub2RlQ291bnQ7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBjb21wdXRlIHBpcGVsaW5lXHJcbiAgICAgICAgdGhpcy5jb21wdXRlUGlwZWxpbmUgPSB0aGlzLmRldmljZS5jcmVhdGVDb21wdXRlUGlwZWxpbmUoe1xyXG4gICAgICAgICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICBjb21wdXRlOiB7XHJcbiAgICAgICAgICAgICAgICBtb2R1bGU6IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IG1vdmVcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZW50cnlQb2ludDogXCJtYWluXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ3JlYXRlIGJpbmQgZ3JvdXBcclxuICAgICAgICB0aGlzLmJpbmRHcm91cCA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7XHJcbiAgICAgICAgICAgIGxheW91dDogdGhpcy5jb21wdXRlUGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLFxyXG4gICAgICAgICAgICBlbnRyaWVzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZzogMCxcclxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IHRoaXMubm9kZWJ1ZmZlcixcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IHRoaXMubW91c2VCdWZmZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiB0aGlzLnNuYWtlTWV0YUJ1ZmZlciBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhc2UoY29tbWFuZEVuY29kZXI6IEdQVUNvbW1hbmRFbmNvZGVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcGFzcyA9IGNvbW1hbmRFbmNvZGVyLmJlZ2luQ29tcHV0ZVBhc3MoKTtcclxuXHJcbiAgICAgICAgcGFzcy5zZXRCaW5kR3JvdXAoMCwgdGhpcy5iaW5kR3JvdXApO1xyXG4gICAgICAgIHBhc3Muc2V0UGlwZWxpbmUodGhpcy5jb21wdXRlUGlwZWxpbmUpO1xyXG5cclxuICAgICAgICBwYXNzLmRpc3BhdGNoV29ya2dyb3VwcyhcclxuICAgICAgICAgICAgTWF0aC5jZWlsKHRoaXMubm9kZUNvdW50IC8gNjQpLFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAxXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcGFzcy5lbmQoKTtcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IG5vZGVDb2RlIGZyb20gXCIuL25vZGUud2dzbFwiO1xuaW1wb3J0IHsgY29tcHV0ZURpcmVjdGlvbiB9IGZyb20gXCIuL2NvbXB1dGVcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiXG5cblxuYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcbiAgICAvLyBSZXF1ZXN0IGFuIGFkYXB0ZXIgYW5kIGRldmljZVxuICAgIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gICAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG5cbiAgICAvLyBDb25maWd1cmUgcmVuZGVyaW5nIGNvbnRleHRcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYmdwdS1jYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJncHUnKSBhcyB1bmtub3duIGFzIEdQVUNhbnZhc0NvbnRleHQ7XG4gICAgY29uc3QgZm9ybWF0ID0gbmF2aWdhdG9yLmdwdS5nZXRQcmVmZXJyZWRDYW52YXNGb3JtYXQoKTtcbiAgICBjb25zdCBzbmFrZVNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW1vdW50XCIpO1xuICAgIGNvbnN0IGxlbmd0aFNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVuZ3RoXCIpO1xuICAgIGNvbnN0IHN0YXJ0U2ltID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydF9zaW1cIik7XG4gICAgY29uc3QgcGl0QWN0aXZhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBpdFwiKVxuICAgIGNvbnN0IGZvbGxvd0FjdGl2YXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb2xsb3dcIik7XG4gICAgbGV0IHNpbUlkID0gMDtcblxuICAgIGNvbnRleHQuY29uZmlndXJlKHtcbiAgICAgICAgZGV2aWNlLFxuICAgICAgICBmb3JtYXQsXG4gICAgfSk7XG5cbiAgICBcbiAgICAvLyBDcmVhdGUgYmluZCBncm91cCBsYXlvdXQgKG5vdyB3aXRoIGNhbWVyYSB1bmlmb3JtIGJ1ZmZlcilcbiAgICBjb25zdCBiaW5kR3JvdXBMYXlvdXQgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwTGF5b3V0KHtcbiAgICBlbnRyaWVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgYmluZGluZzogMCxcbiAgICAgICAgdmlzaWJpbGl0eTogR1BVU2hhZGVyU3RhZ2UuVkVSVEVYIHwgR1BVU2hhZGVyU3RhZ2UuQ09NUFVURSxcbiAgICAgICAgYnVmZmVyOiB7IHR5cGU6IFwicmVhZC1vbmx5LXN0b3JhZ2VcIiB9LFxuICAgICAgICB9LFxuICAgIF1cbiAgICB9KTtcblxuICAgIGNsYXNzIE5vZGUge1xuICAgICAgICB4OiBudW1iZXI7XG4gICAgICAgIHk6IG51bWJlcjtcbiAgICAgICAgYWN0aXZlOiBudW1iZXI7XG4gICAgICAgIGNvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbiAgICAgICAgXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdKXtcbiAgICAgICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgU25ha2Uge1xuICAgICAgICBub2RlczogTm9kZVtdO1xuXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIsIGNvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSl7XG4gICAgICAgICAgICB0aGlzLm5vZGVzID0gW11cblxuICAgICAgICAgICAgbGV0IG9mZnNldCA9IDBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMucHVzaChuZXcgTm9kZSh4LCB5ICsgb2Zmc2V0LCBjb2xvcikpO1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSAwLjAzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYmluZEdyb3VwIDogR1BVQmluZEdyb3VwO1xuICAgIGxldCBzbmFrZXM6IFNuYWtlW10gPSBbXTtcbiAgICBsZXQgc25ha2VMZW5ndGggPSA0O1xuICAgIGxldCBudW1TbmFrZXMgPSAzO1xuICAgIGxldCBtb2RlID0gMDtcbiAgICBsZXQgbm9kZURhdGE6IEZsb2F0MzJBcnJheTtcbiAgICBsZXQgbm9kZUJ1ZmZlcjpHUFVCdWZmZXI7XG4gICAgbGV0IHJlYWRCdWZmZXI6R1BVQnVmZmVyO1xuICAgIGxldCBicmFpbiA6IGNvbXB1dGVEaXJlY3Rpb247XG4gICAgbGV0IGZyYW1lQ291bnQgPSAwO1xuICAgIGxldCBzdGFydD0gZmFsc2U7XG4gICAgY29uc3QgaWR4VG9DYXJkID0gbmV3IE1hcDxudW1iZXIsIEhUTUxFbGVtZW50PigpO1xuXG4gICAgY29uc3QgbW91c2VEYXRhID0gbmV3IEZsb2F0MzJBcnJheSg0KTsgXG4gICAgY29uc3QgbW91c2VCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgICAgc2l6ZTogbW91c2VEYXRhLmJ5dGVMZW5ndGgsXG4gICAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5VTklGT1JNIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QsXG4gICAgfSk7XG5cbiAgICBjb25zdCBzbmFrZU1ldGEgPSBuZXcgVWludDMyQXJyYXkoNCk7XG4gICAgY29uc3Qgc25ha2VNZXRhQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICAgIHNpemU6IHNuYWtlTWV0YS5ieXRlTGVuZ3RoLFxuICAgICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUXG4gICAgfSlcblxuICAgIHNuYWtlTWV0YVswXSA9IHNuYWtlTGVuZ3RoO1xuICAgIHNuYWtlTWV0YVsxXSA9IG51bVNuYWtlcztcbiAgICBzbmFrZU1ldGFbMl0gPSBtb2RlO1xuICAgIGRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcihzbmFrZU1ldGFCdWZmZXIsIDAsIHNuYWtlTWV0YSk7XG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbW91c2VEYXRhWzBdID0gKChldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIGNhbnZhcy53aWR0aCkgKiAyIC0gMTtcbiAgICAgICAgbW91c2VEYXRhWzFdID0gKCgoZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wKSAvIGNhbnZhcy5oZWlnaHQpICogMiAtIDEpICogLTE7XG4gICAgICAgIGRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcihtb3VzZUJ1ZmZlciwgMCwgbW91c2VEYXRhKTtcbiAgICB9KTtcblxuICAgIHNuYWtlU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgc3RhcnQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbW91bnRfdmFsdWVcIikudGV4dENvbnRlbnQgPSB0YXJnZXQudmFsdWU7XG5cbiAgICAgICAgbnVtU25ha2VzID0gdmFsdWU7XG4gICAgICAgIHNuYWtlTWV0YVsxXSA9IG51bVNuYWtlcztcblxuICAgICAgICBzbmFrZXMgPSBbXTtcbiAgICAgICAgZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHNuYWtlTWV0YUJ1ZmZlciwgMCwgc25ha2VNZXRhKTtcbiAgICAgICAgZ2VuZXJhdGVSYW5kb21TbmFrZXMoKTtcbiAgICB9KTtcblxuICAgIGxlbmd0aFNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIHN0YXJ0ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KHRhcmdldC52YWx1ZSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVuZ3RoX3ZhbHVlXCIpLnRleHRDb250ZW50ID0gdGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIHNuYWtlTGVuZ3RoID0gdmFsdWU7XG4gICAgICAgIHNuYWtlTWV0YVswXSA9IHZhbHVlO1xuXG4gICAgICAgIHNuYWtlcyA9IFtdO1xuICAgICAgICBkZXZpY2UucXVldWUud3JpdGVCdWZmZXIoc25ha2VNZXRhQnVmZmVyLCAwLCBzbmFrZU1ldGEpO1xuICAgICAgICBnZW5lcmF0ZVJhbmRvbVNuYWtlcygpO1xuICAgIH0pO1xuXG4gICAgc3RhcnRTaW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCk9PntcbiAgICAgICAgbGV0IHByZXYgPSBzdGFydDtcbiAgICAgICAgc3RhcnQgPSB0cnVlO1xuICAgIH0pXG5cbiAgICBwaXRBY3RpdmF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KT0+e1xuICAgICAgICBtb2RlID0gMTtcbiAgICAgICAgc25ha2VNZXRhWzJdID0gbW9kZTtcbiAgICAgICAgZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHNuYWtlTWV0YUJ1ZmZlciwgMCwgc25ha2VNZXRhKTtcbiAgICB9KVxuXG4gICAgZm9sbG93QWN0aXZhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCk9PntcbiAgICAgICAgbW9kZSA9IDA7XG4gICAgICAgIHNuYWtlTWV0YVsyXSA9IG1vZGU7XG4gICAgICAgIGRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcihzbmFrZU1ldGFCdWZmZXIsIDAsIHNuYWtlTWV0YSk7XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGhzdlRvUmdiKGg6IG51bWJlciwgczogbnVtYmVyLCB2OiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICAgICAgICBsZXQgYyA9IHYgKiBzO1xuICAgICAgICBsZXQgeCA9IGMgKiAoMSAtIE1hdGguYWJzKCgoaCAqIDYpICUgMikgLSAxKSk7XG4gICAgICAgIGxldCBtID0gdiAtIGM7XG5cbiAgICAgICAgbGV0IFtyLCBnLCBiXSA9XG4gICAgICAgICAgICBoIDwgMS82ID8gW2MsIHgsIDBdIDpcbiAgICAgICAgICAgIGggPCAyLzYgPyBbeCwgYywgMF0gOlxuICAgICAgICAgICAgaCA8IDMvNiA/IFswLCBjLCB4XSA6XG4gICAgICAgICAgICBoIDwgNC82ID8gWzAsIHgsIGNdIDpcbiAgICAgICAgICAgIGggPCA1LzYgPyBbeCwgMCwgY10gOlxuICAgICAgICAgICAgICAgICAgICBbYywgMCwgeF07XG5cbiAgICAgICAgcmV0dXJuIFtyICsgbSwgZyArIG0sIGIgKyBtXTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNuYWtlX2xpc3RcIik7XG4gICAgZnVuY3Rpb24gY3JlYXRlU25ha2VDYXJkKGNvbG9yOltudW1iZXIsIG51bWJlciwgbnVtYmVyXSwgaWR4Om51bWJlcikge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNuYWtlX2xpc3RcIik7XG5cbiAgICAgICAgY29uc3QgciA9IE1hdGguZmxvb3IoY29sb3JbMF0gKiAyNTUpO1xuICAgICAgICBjb25zdCBnID0gTWF0aC5mbG9vcihjb2xvclsxXSAqIDI1NSk7XG4gICAgICAgIGNvbnN0IGIgPSBNYXRoLmZsb29yKGNvbG9yWzJdICogMjU1KTtcblxuICAgICAgICBjb25zdCBjc3NDb2xvciA9IGByZ2JhKCR7cn0sICR7Z30sICR7Yn1gO1xuICAgICAgICBjb25zdCBpZCA9IGAke3J9JHtnfSR7Yn1gO1xuXG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjYXJkLmNsYXNzTmFtZSA9IFwic25ha2VfY2FyZFwiO1xuXG4gICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlkeFRvQ2FyZC5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgICAgICAgICAgYy5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGlkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBpZFRleHQudGV4dENvbnRlbnQgPSBpZDsgLy8gSUQgPSBjb2xvciBzdHJpbmdcblxuICAgICAgICBjb25zdCBjb2xvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbG9yRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNzc0NvbG9yO1xuXG4gICAgICAgIC8vIEFzc2VtYmxlXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaWRUZXh0KTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjb2xvckRpdik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICAgICAgaWR4VG9DYXJkLnNldChpZHgsIGNhcmQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEVsaW0oY2FyZDpIVE1MRWxlbWVudCl7XG4gICAgICAgIGNvbnN0IGVsaW1MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbGltaW5hdGVkX2xpc3RcIilcbiAgICAgICAgY29uc3QgZWxpbUhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxpbV9oZWFkZXJcIik7XG4gICAgICAgIGVsaW1MaXN0IS5wcmVwZW5kKGNhcmQpOyBcbiAgICAgICAgZWxpbUhlYWRlci5yZW1vdmUoKTtcbiAgICAgICAgZWxpbUxpc3QhLnByZXBlbmQoZWxpbUhlYWRlcik7XG4gICAgICAgIHJldml2ZVRvcFNuYWtlKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhclNuYWtlTGlzdCgpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbmFrZV9saXN0XCIpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNuYWtlX2xpc3RfaGVhZGVyXCIpO1xuICAgICAgICBjb25zdCBlbGltTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxpbWluYXRlZF9saXN0XCIpO1xuICAgICAgICBjb25zdCBlbGltSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbGltX2hlYWRlclwiKTtcblxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjsgICAgICAgICAgLy8gY2xlYXIgYWxsXG4gICAgICAgIGVsaW1MaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpOyAgICAgLy8gcHV0IGhlYWRlciBiYWNrXG4gICAgICAgIGVsaW1MaXN0LmFwcGVuZENoaWxkKGVsaW1IZWFkZXIpO1xuICAgICAgICBpZHhUb0NhcmQuY2xlYXIoKTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgZnVuY3Rpb24gcmV2aXZlVG9wU25ha2UoKSB7XG4gICAgICAgIGNvbnN0IGVsaW1MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbGltaW5hdGVkX2xpc3RcIik7XG4gICAgICAgIGNvbnN0IHNuYWtlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic25ha2VfbGlzdFwiKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbmFrZV9saXN0X2hlYWRlclwiKTtcblxuICAgICAgICAvLyBPbmx5IHJldml2ZSBpZiB0aGUgc25ha2UgbGlzdCBpcyBlbXB0eSAoanVzdCB0aGUgaGVhZGVyIHJlbWFpbnMpXG4gICAgICAgIC8vIGFuZCB0aGVyZSBpcyBzb21lb25lIGluIHRoZSBlbGltaW5hdGlvbiBsaXN0IHRvIGJyaW5nIGJhY2tcbiAgICAgICAgaWYgKHNuYWtlTGlzdD8uY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIGVsaW1MaXN0Py5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAvLyBUaGUgZmlyc3QgY2hpbGQgaXMgdXN1YWxseSB0aGUgaGVhZGVyLCBzbyB3ZSB0YWtlIHRoZSBzZWNvbmQgY2hpbGRcbiAgICAgICAgICAgIGNvbnN0IHRvcENhcmQgPSBlbGltTGlzdC5jaGlsZHJlblsxXSBhcyBIVE1MRWxlbWVudDsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBzbmFrZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBjYXJkXG4gICAgICAgICAgICBsZXQgc25ha2VJZHggPSAtMTtcbiAgICAgICAgICAgIGZvciAobGV0IFtpZHgsIGNhcmRdIG9mIGlkeFRvQ2FyZC5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FyZCA9PT0gdG9wQ2FyZCkge1xuICAgICAgICAgICAgICAgICAgICBzbmFrZUlkeCA9IGlkeDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc25ha2VJZHggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gMS4gTW92ZSB0aGUgY2FyZCBiYWNrIHRvIHRoZSBtYWluIGxpc3RcbiAgICAgICAgICAgICAgICB0b3BDYXJkLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGhlYWRlcj8uYWZ0ZXIodG9wQ2FyZCk7XG5cbiAgICAgICAgICAgICAgICAvLyAyLiBQcmVwYXJlIHRoZSByZXNldCBkYXRhIGZvciB0aGUgR1BVXG4gICAgICAgICAgICAgICAgLy8gV2Ugb25seSBuZWVkIHRvIHVwZGF0ZSB0aGUgc2VnbWVudHMgZm9yIFRISVMgc3BlY2lmaWMgc25ha2VcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJpZGUgPSA4OyAvLyA4IGZsb2F0cyBwZXIgbm9kZVxuICAgICAgICAgICAgICAgIGNvbnN0IHNuYWtlU3RhcnRJZHggPSBzbmFrZUlkeCAqIHNuYWtlTGVuZ3RoICogc3RyaWRlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZURhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHNuYWtlTGVuZ3RoICogc3RyaWRlKTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc25ha2VMZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBqICogc3RyaWRlO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEYXRhW29mZnNldF0gPSAwLjAgKyAoaiAqIDAuMDQpOyAgICAgLy8gWCBjZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGF0YVtvZmZzZXQgKyAxXSA9IDAuMCArIChqICogMC4wNCk7IC8vIFkgY2VudGVyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURhdGFbb2Zmc2V0ICsgMl0gPSAwLjA7IC8vIFVubWFyayBcImhpdFwiIChkYXRhW2krMl0gPSAwLjApXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURhdGFbb2Zmc2V0ICsgM10gPSAwLjA7IC8vIHBhZGRpbmdcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIEtlZXAgdGhlIG9yaWdpbmFsIGNvbG9ycyBmcm9tIG91ciBsb2NhbCBub2RlRGF0YVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEYXRhW29mZnNldCArIDRdID0gbm9kZURhdGFbc25ha2VTdGFydElkeCArIG9mZnNldCArIDRdO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEYXRhW29mZnNldCArIDVdID0gbm9kZURhdGFbc25ha2VTdGFydElkeCArIG9mZnNldCArIDVdO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEYXRhW29mZnNldCArIDZdID0gbm9kZURhdGFbc25ha2VTdGFydElkeCArIG9mZnNldCArIDZdO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEYXRhW29mZnNldCArIDddID0gbm9kZURhdGFbc25ha2VTdGFydElkeCArIG9mZnNldCArIDddO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIDMuIFdyaXRlIGRpcmVjdGx5IHRvIHRoZSBHUFUgc3RvcmFnZSBidWZmZXJcbiAgICAgICAgICAgICAgICBkZXZpY2UucXVldWUud3JpdGVCdWZmZXIoXG4gICAgICAgICAgICAgICAgICAgIG5vZGVCdWZmZXIsIFxuICAgICAgICAgICAgICAgICAgICBzbmFrZVN0YXJ0SWR4ICogNCwgLy8gb2Zmc2V0IGluIGJ5dGVzXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURhdGFcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gdG8gZ2VuZXJhdGUgYSByYW5kb20gZ3JhcGhcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVNuYWtlcygpIHtcbiAgICAgICAgc3RhcnQgPSBmYWxzZTtcbiAgICAgICAgc2ltSWQrKztcbiAgICAgICAgXG4gICAgICAgIGlmIChub2RlQnVmZmVyKSBub2RlQnVmZmVyLmRlc3Ryb3koKTtcbiAgICAgICAgaWYgKHJlYWRCdWZmZXIpIHtcbiAgICAgICAgICAgIHRyeSB7IHJlYWRCdWZmZXIudW5tYXAoKTsgfSBjYXRjaChlKSB7fVxuICAgICAgICAgICAgcmVhZEJ1ZmZlci5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJTbmFrZUxpc3QoKVxuICAgICAgICBcbiAgICAgICAgLy8gRGVmaW5lIDEwIGhpZ2gtY29udHJhc3QgY29sb3JzIChSR0JBKVxuICAgICAgICBjb25zdCBwYWxldHRlOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXVtdID0gW1xuICAgICAgICAgICAgWzEuMCwgMC4wLCAwLjAsIDEuMF0sIC8vIFJlZFxuICAgICAgICAgICAgWzEuMCwgMS4wLCAwLjAsIDEuMF0sIC8vIFllbGxvd1xuICAgICAgICAgICAgWzAuMCwgMC4wLCAxLjAsIDEuMF0sIC8vIEJsdWVcbiAgICAgICAgXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVNuYWtlczsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBodWUgPSBpIC8gbnVtU25ha2VzOyBcbiAgICAgICAgICAgIGNvbnN0IFtyLCBnLCBiXSA9IGhzdlRvUmdiKGh1ZSwgMS4wLCAxLjApO1xuICAgICAgICAgICAgY3JlYXRlU25ha2VDYXJkKFtyLGcsYl0sIGkpO1xuXG4gICAgICAgICAgICBzbmFrZXMucHVzaChuZXcgU25ha2UoXG4gICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDIuMCAtIDEuMCxcbiAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMi4wIC0gMS4wLCBcbiAgICAgICAgICAgICAgICBzbmFrZUxlbmd0aCxcbiAgICAgICAgICAgICAgICBbciwgZywgYiwgMS4wXVxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIENyZWF0ZSBub2RlIGJ1ZmZlclxuICAgICAgICBub2RlRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkobnVtU25ha2VzICogc25ha2VMZW5ndGggKiA4KTtcbiAgICAgICAgc25ha2VzLmZvckVhY2goKHNuYWtlLCBpKSA9PiB7XG4gICAgICAgICAgICBzbmFrZS5ub2Rlcy5mb3JFYWNoKChub2RlLCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKGkgKiBzbmFrZUxlbmd0aCArIGopICogOFxuICAgICAgICAgICAgICAgIG5vZGVEYXRhW29mZnNldF0gPSBub2RlLng7XG4gICAgICAgICAgICAgICAgbm9kZURhdGFbb2Zmc2V0ICsgMV0gPSBub2RlLnk7XG4gICAgICAgICAgICAgICAgbm9kZURhdGFbb2Zmc2V0ICsgMl0gPSAwLjA7XG4gICAgICAgICAgICAgICAgbm9kZURhdGFbb2Zmc2V0ICsgM10gPSAwLjA7IFxuICAgICAgICAgICAgICAgIG5vZGVEYXRhW29mZnNldCArIDRdID0gbm9kZS5jb2xvclswXTtcbiAgICAgICAgICAgICAgICBub2RlRGF0YVtvZmZzZXQgKyA1XSA9IG5vZGUuY29sb3JbMV07XG4gICAgICAgICAgICAgICAgbm9kZURhdGFbb2Zmc2V0ICsgNl0gPSBub2RlLmNvbG9yWzJdO1xuICAgICAgICAgICAgICAgIG5vZGVEYXRhW29mZnNldCArIDddID0gbm9kZS5jb2xvclszXTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvLyBDcmVhdGUgR1BVIGJ1ZmZlcnNcbiAgICAgICAgbm9kZUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgICAgICAgc2l6ZTogbm9kZURhdGEuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5TVE9SQUdFIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfCBHUFVCdWZmZXJVc2FnZS5DT1BZX1NSQyxcbiAgICAgICAgICAgIG1hcHBlZEF0Q3JlYXRpb246IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vY29uc3QgcmVhZEJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgICByZWFkQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICAgICAgICBzaXplOiBub2RlRGF0YS5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIHwgR1BVQnVmZmVyVXNhZ2UuTUFQX1JFQUQsXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgbmV3IEZsb2F0MzJBcnJheShub2RlQnVmZmVyLmdldE1hcHBlZFJhbmdlKCkpLnNldChub2RlRGF0YSk7XG4gICAgICAgIG5vZGVCdWZmZXIudW5tYXAoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIENyZWF0ZSBiaW5kIGdyb3VwXG4gICAgICAgIGJpbmRHcm91cCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXAoe1xuICAgICAgICAgICAgbGF5b3V0OiBiaW5kR3JvdXBMYXlvdXQsXG4gICAgICAgICAgICBlbnRyaWVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJpbmRpbmc6IDAsXG4gICAgICAgICAgICAgICAgcmVzb3VyY2U6IHsgYnVmZmVyOiBub2RlQnVmZmVyIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9KTsgXG5cbiAgICAgICAgYnJhaW4gPSBuZXcgY29tcHV0ZURpcmVjdGlvbihkZXZpY2UsIG5vZGVCdWZmZXIsIG1vdXNlQnVmZmVyLCBzbmFrZU1ldGFCdWZmZXIsIChudW1TbmFrZXMgKiBzbmFrZUxlbmd0aCkpO1xuICAgIH1cblxuICAgIGxldCByZWFkaW5nID0gZmFsc2U7XG5cbiAgICBhc3luYyBmdW5jdGlvbiByZWFkU25ha2VSZXN1bHRzKCkge1xuICAgICAgICBpZiAocmVhZGluZyB8fCAhcmVhZEJ1ZmZlcikgcmV0dXJuO1xuICAgICAgICByZWFkaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgY3VycmVudFNpbUlkID0gc2ltSWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGRldmljZS5xdWV1ZS5vblN1Ym1pdHRlZFdvcmtEb25lKCk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFNpbUlkICE9PSBzaW1JZCkgcmV0dXJuO1xuXG4gICAgICAgICAgICBhd2FpdCByZWFkQnVmZmVyLm1hcEFzeW5jKEdQVU1hcE1vZGUuUkVBRCk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFNpbUlkICE9PSBzaW1JZCkge1xuICAgICAgICAgICAgICAgIHJlYWRCdWZmZXIudW5tYXAoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG1hcHBlZCA9IG5ldyBGbG9hdDMyQXJyYXkocmVhZEJ1ZmZlci5nZXRNYXBwZWRSYW5nZSgpKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KG1hcHBlZC5sZW5ndGgpO1xuICAgICAgICAgICAgZGF0YS5zZXQobWFwcGVkKTtcbiAgICAgICAgICAgIHJlYWRCdWZmZXIudW5tYXAoKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAoOCAqIHNuYWtlTGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhW2kgKyAyXSA9PT0gMS4wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNuYWtlSW5kZXggPSBNYXRoLmZsb29yKGkgLyAoc25ha2VMZW5ndGggKiA4KSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBpZHhUb0NhcmQuZ2V0KHNuYWtlSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZCAmJiBjYXJkLnBhcmVudEVsZW1lbnQ/LmlkICE9PSBcImVsaW1pbmF0ZWRfbGlzdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkRWxpbShjYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUmVhZCBhYm9ydGVkXCIpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgcmVhZGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVSYW5kb21TbmFrZXMoKTtcblxuICAgIC8vIENyZWF0ZSBzaGFkZXIgbW9kdWxlXG4gICAgY29uc3Qgbm9kZU1vZHVsZSA9IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoe1xuICAgICAgICBjb2RlOiBub2RlQ29kZVxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIHBpcGVsaW5lXG4gICAgY29uc3Qgbm9kZVBpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcbiAgICAgICAgbGF5b3V0OiBkZXZpY2UuY3JlYXRlUGlwZWxpbmVMYXlvdXQoe1xuICAgICAgICBiaW5kR3JvdXBMYXlvdXRzOiBbYmluZEdyb3VwTGF5b3V0XVxuICAgICAgICB9KSxcbiAgICAgICAgdmVydGV4OiB7XG4gICAgICAgIG1vZHVsZTogbm9kZU1vZHVsZSxcbiAgICAgICAgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCJcbiAgICAgICAgfSxcbiAgICAgICAgZnJhZ21lbnQ6IHtcbiAgICAgICAgbW9kdWxlOiBub2RlTW9kdWxlLFxuICAgICAgICBlbnRyeVBvaW50OiBcImZyYWdtZW50TWFpblwiLFxuICAgICAgICB0YXJnZXRzOiBbeyBmb3JtYXQgfV1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFRleHR1cmUgPSBjb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCk7XG4gICAgICAgIGNvbnN0IGNvbW1hbmRFbmNvZGVyID0gZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG5cbiAgICAgICAgaWYgKHN0YXJ0KXtcbiAgICAgICAgICAgIGJyYWluLmNoYXNlKGNvbW1hbmRFbmNvZGVyKTtcblxuICAgICAgICAgICAgaWYgKHJlYWRCdWZmZXIubWFwU3RhdGUgPT09IFwidW5tYXBwZWRcIikge1xuICAgICAgICAgICAgICAgIGNvbW1hbmRFbmNvZGVyLmNvcHlCdWZmZXJUb0J1ZmZlcihcbiAgICAgICAgICAgICAgICAgICAgbm9kZUJ1ZmZlciwgMCwgXG4gICAgICAgICAgICAgICAgICAgIHJlYWRCdWZmZXIsIDAsIFxuICAgICAgICAgICAgICAgICAgICBub2RlRGF0YS5ieXRlTGVuZ3RoXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhc3MgPSBjb21tYW5kRW5jb2Rlci5iZWdpblJlbmRlclBhc3Moe1xuICAgICAgICAgICAgY29sb3JBdHRhY2htZW50czogW3tcbiAgICAgICAgICAgICAgICB2aWV3OiB0YXJnZXRUZXh0dXJlLmNyZWF0ZVZpZXcoKSxcbiAgICAgICAgICAgICAgICBsb2FkT3A6IFwiY2xlYXJcIixcbiAgICAgICAgICAgICAgICBzdG9yZU9wOiBcInN0b3JlXCIsXG4gICAgICAgICAgICAgICAgY2xlYXJWYWx1ZTogeyByOiAxLjAsIGc6IDEuMCwgYjogMS4wLCBhOiAxLjAgfSAvLyBTZXQgdG8gd2hpdGVcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBhc3Muc2V0UGlwZWxpbmUobm9kZVBpcGVsaW5lKTtcbiAgICAgICAgcGFzcy5zZXRCaW5kR3JvdXAoMCwgYmluZEdyb3VwKTtcbiAgICAgICAgcGFzcy5kcmF3KDYsIG51bVNuYWtlcyAqIHNuYWtlTGVuZ3RoKTtcbiAgICAgICAgcGFzcy5lbmQoKTtcblxuICAgICAgICBkZXZpY2UucXVldWUuc3VibWl0KFtjb21tYW5kRW5jb2Rlci5maW5pc2goKV0pO1xuXG4gICAgICAgIGlmIChmcmFtZUNvdW50ICUgOCA9PT0gMCAmJiBzdGFydCkge1xuICAgICAgICAgICAgcmVhZFNuYWtlUmVzdWx0cygpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmcmFtZUNvdW50ID0gKGZyYW1lQ291bnQgKyAxKSAlIDEwMDA7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgbWFpbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9