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
    min-width: 120px;
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

`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,wBAAwB;IACxB,uBAAuB;IACvB,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":["#snake_list, #eliminated_list {\r\n    padding: 8px;\r\n    min-width: 120px;\r\n    overflow-y: auto;\r\n    height: 585px;\r\n    border-bottom: 1px solid lightgray;\r\n}\r\n\r\n#snake_list_header, #elim_header {\r\n    padding: 0px 0px 0px 4px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n.snake_card {\r\n    padding: 0px 0px 0px 4px;\r\n    border: 1px solid white;\r\n    background-color: whitesmoke;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n.snake_card p, #snake_list_header p, #elim_header p{\r\n    margin: 0px;\r\n}\r\n\r\n.snake_card div{\r\n    width: 25%;\r\n}\r\n\r\n.snake_card.selected {\r\n    border: 2px solid black;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
            console.log("new snake length", snakeLength);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxTQUFTLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRVgsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRS9DLElBQUksVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQ2hDLGdCQUFnQixFQUFFLENBQUM7WUFDdkIsQ0FBQztZQUVELFVBQVUsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDckMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUVELE1BQU0sRUFBRSxDQUFDO0lBQ2IsQ0FBQztDQUFBO0FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmdwdS13ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWJncHUtd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJncHUtd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LXdlYnBhY2stc3RhcnRlci8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2ViZ3B1LXdlYnBhY2stc3RhcnRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJncHUtd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJncHUtd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYmdwdS13ZWJwYWNrLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LXdlYnBhY2stc3RhcnRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYmdwdS13ZWJwYWNrLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJncHUtd2VicGFjay1zdGFydGVyLy4vc3JjL2NvbXB1dGUudHMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LXdlYnBhY2stc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJncHUtd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYmdwdS13ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYmdwdS13ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJncHUtd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViZ3B1LXdlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2ViZ3B1LXdlYnBhY2stc3RhcnRlci8uL3NyYy9zbmFrZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI3NuYWtlX2xpc3QsICNlbGltaW5hdGVkX2xpc3Qge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDU4NXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxufVxyXG5cclxuI3NuYWtlX2xpc3RfaGVhZGVyLCAjZWxpbV9oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5zbmFrZV9jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc25ha2VfY2FyZCBwLCAjc25ha2VfbGlzdF9oZWFkZXIgcCwgI2VsaW1faGVhZGVyIHB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnNuYWtlX2NhcmQgZGl2e1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLnNuYWtlX2NhcmQuc2VsZWN0ZWQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI3NuYWtlX2xpc3QsICNlbGltaW5hdGVkX2xpc3Qge1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIG1pbi13aWR0aDogMTIwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIGhlaWdodDogNTg1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbiNzbmFrZV9saXN0X2hlYWRlciwgI2VsaW1faGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggNHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5zbmFrZV9jYXJkIHtcXHJcXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggNHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc25ha2VfY2FyZCBwLCAjc25ha2VfbGlzdF9oZWFkZXIgcCwgI2VsaW1faGVhZGVyIHB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc25ha2VfY2FyZCBkaXZ7XFxyXFxuICAgIHdpZHRoOiAyNSU7XFxyXFxufVxcclxcblxcclxcbi5zbmFrZV9jYXJkLnNlbGVjdGVkIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbW92ZSBmcm9tIFwiLi9tb3ZlLndnc2xcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBjb21wdXRlRGlyZWN0aW9uIHtcclxuICAgIHByaXZhdGUgY29tcHV0ZVBpcGVsaW5lOiBHUFVDb21wdXRlUGlwZWxpbmUgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgYmluZEdyb3VwOiBHUFVCaW5kR3JvdXAgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgbm9kZUNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBkZXZpY2U6IEdQVURldmljZTtcclxuICAgIHByaXZhdGUgbm9kZWJ1ZmZlcjogR1BVQnVmZmVyO1xyXG4gICAgcHJpdmF0ZSBtb3VzZUJ1ZmZlcjogR1BVQnVmZmVyO1xyXG4gICAgcHJpdmF0ZSBzbmFrZU1ldGFCdWZmZXI6IEdQVUJ1ZmZlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkZXZpY2U6IEdQVURldmljZSwgbm9kZWJ1ZmZlcjogR1BVQnVmZmVyLCBtb3VzZUJ1ZmZlcjogR1BVQnVmZmVyLCBzbmFrZU1ldGFCdWZmZXI6IEdQVUJ1ZmZlciwgbm9kZUNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmRldmljZSA9IGRldmljZTtcclxuICAgICAgICB0aGlzLm5vZGVidWZmZXIgPSBub2RlYnVmZmVyO1xyXG4gICAgICAgIHRoaXMubW91c2VCdWZmZXIgPSBtb3VzZUJ1ZmZlcjtcclxuICAgICAgICB0aGlzLnNuYWtlTWV0YUJ1ZmZlciA9IHNuYWtlTWV0YUJ1ZmZlcjtcclxuICAgICAgICB0aGlzLm5vZGVDb3VudCA9IG5vZGVDb3VudDtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGNvbXB1dGUgcGlwZWxpbmVcclxuICAgICAgICB0aGlzLmNvbXB1dGVQaXBlbGluZSA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbXB1dGVQaXBlbGluZSh7XHJcbiAgICAgICAgICAgIGxheW91dDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIGNvbXB1dGU6IHtcclxuICAgICAgICAgICAgICAgIG1vZHVsZTogZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29kZTogbW92ZVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBlbnRyeVBvaW50OiBcIm1haW5cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDcmVhdGUgYmluZCBncm91cFxyXG4gICAgICAgIHRoaXMuYmluZEdyb3VwID0gdGhpcy5kZXZpY2UuY3JlYXRlQmluZEdyb3VwKHtcclxuICAgICAgICAgICAgbGF5b3V0OiB0aGlzLmNvbXB1dGVQaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksXHJcbiAgICAgICAgICAgIGVudHJpZXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogdGhpcy5ub2RlYnVmZmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZzogMSxcclxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogdGhpcy5tb3VzZUJ1ZmZlciBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IHRoaXMuc25ha2VNZXRhQnVmZmVyIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFzZShjb21tYW5kRW5jb2RlcjogR1BVQ29tbWFuZEVuY29kZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBwYXNzID0gY29tbWFuZEVuY29kZXIuYmVnaW5Db21wdXRlUGFzcygpO1xyXG5cclxuICAgICAgICBwYXNzLnNldEJpbmRHcm91cCgwLCB0aGlzLmJpbmRHcm91cCk7XHJcbiAgICAgICAgcGFzcy5zZXRQaXBlbGluZSh0aGlzLmNvbXB1dGVQaXBlbGluZSk7XHJcblxyXG4gICAgICAgIHBhc3MuZGlzcGF0Y2hXb3JrZ3JvdXBzKFxyXG4gICAgICAgICAgICBNYXRoLmNlaWwodGhpcy5ub2RlQ291bnQgLyA2NCksXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBwYXNzLmVuZCgpO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbm9kZUNvZGUgZnJvbSBcIi4vbm9kZS53Z3NsXCI7XG5pbXBvcnQgeyBjb21wdXRlRGlyZWN0aW9uIH0gZnJvbSBcIi4vY29tcHV0ZVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCJcblxuXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xuICAgIC8vIFJlcXVlc3QgYW4gYWRhcHRlciBhbmQgZGV2aWNlXG4gICAgY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcblxuICAgIC8vIENvbmZpZ3VyZSByZW5kZXJpbmcgY29udGV4dFxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2ViZ3B1LWNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdwdScpIGFzIHVua25vd24gYXMgR1BVQ2FudmFzQ29udGV4dDtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnN0IHNuYWtlU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbW91bnRcIik7XG4gICAgY29uc3QgbGVuZ3RoU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZW5ndGhcIik7XG4gICAgY29uc3Qgc3RhcnRTaW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0X3NpbVwiKTtcbiAgICBjb25zdCBwaXRBY3RpdmF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGl0XCIpXG4gICAgY29uc3QgZm9sbG93QWN0aXZhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvbGxvd1wiKTtcbiAgICBsZXQgc2ltSWQgPSAwO1xuXG4gICAgY29udGV4dC5jb25maWd1cmUoe1xuICAgICAgICBkZXZpY2UsXG4gICAgICAgIGZvcm1hdCxcbiAgICB9KTtcblxuICAgIFxuICAgIC8vIENyZWF0ZSBiaW5kIGdyb3VwIGxheW91dCAobm93IHdpdGggY2FtZXJhIHVuaWZvcm0gYnVmZmVyKVxuICAgIGNvbnN0IGJpbmRHcm91cExheW91dCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXBMYXlvdXQoe1xuICAgIGVudHJpZXM6IFtcbiAgICAgICAge1xuICAgICAgICBiaW5kaW5nOiAwLFxuICAgICAgICB2aXNpYmlsaXR5OiBHUFVTaGFkZXJTdGFnZS5WRVJURVggfCBHUFVTaGFkZXJTdGFnZS5DT01QVVRFLFxuICAgICAgICBidWZmZXI6IHsgdHlwZTogXCJyZWFkLW9ubHktc3RvcmFnZVwiIH0sXG4gICAgICAgIH0sXG4gICAgXVxuICAgIH0pO1xuXG4gICAgY2xhc3MgTm9kZSB7XG4gICAgICAgIHg6IG51bWJlcjtcbiAgICAgICAgeTogbnVtYmVyO1xuICAgICAgICBhY3RpdmU6IG51bWJlcjtcbiAgICAgICAgY29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuICAgICAgICBcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0pe1xuICAgICAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGFzcyBTbmFrZSB7XG4gICAgICAgIG5vZGVzOiBOb2RlW107XG5cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBsZW5ndGg6IG51bWJlciwgY29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdKXtcbiAgICAgICAgICAgIHRoaXMubm9kZXMgPSBbXVxuXG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gMFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy5wdXNoKG5ldyBOb2RlKHgsIHkgKyBvZmZzZXQsIGNvbG9yKSk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDAuMDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBiaW5kR3JvdXAgOiBHUFVCaW5kR3JvdXA7XG4gICAgbGV0IHNuYWtlczogU25ha2VbXSA9IFtdO1xuICAgIGxldCBzbmFrZUxlbmd0aCA9IDQ7XG4gICAgbGV0IG51bVNuYWtlcyA9IDM7XG4gICAgbGV0IG1vZGUgPSAwO1xuICAgIGxldCBub2RlRGF0YTogRmxvYXQzMkFycmF5O1xuICAgIGxldCBub2RlQnVmZmVyOkdQVUJ1ZmZlcjtcbiAgICBsZXQgcmVhZEJ1ZmZlcjpHUFVCdWZmZXI7XG4gICAgbGV0IGJyYWluIDogY29tcHV0ZURpcmVjdGlvbjtcbiAgICBsZXQgZnJhbWVDb3VudCA9IDA7XG4gICAgbGV0IHN0YXJ0PSBmYWxzZTtcbiAgICBjb25zdCBpZHhUb0NhcmQgPSBuZXcgTWFwPG51bWJlciwgSFRNTEVsZW1lbnQ+KCk7XG5cbiAgICBjb25zdCBtb3VzZURhdGEgPSBuZXcgRmxvYXQzMkFycmF5KDQpOyBcbiAgICBjb25zdCBtb3VzZUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgICBzaXplOiBtb3VzZURhdGEuYnl0ZUxlbmd0aCxcbiAgICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHNuYWtlTWV0YSA9IG5ldyBVaW50MzJBcnJheSg0KTtcbiAgICBjb25zdCBzbmFrZU1ldGFCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgICAgc2l6ZTogc25ha2VNZXRhLmJ5dGVMZW5ndGgsXG4gICAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5VTklGT1JNIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1RcbiAgICB9KVxuXG4gICAgc25ha2VNZXRhWzBdID0gc25ha2VMZW5ndGg7XG4gICAgc25ha2VNZXRhWzFdID0gbnVtU25ha2VzO1xuICAgIHNuYWtlTWV0YVsyXSA9IG1vZGU7XG4gICAgZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHNuYWtlTWV0YUJ1ZmZlciwgMCwgc25ha2VNZXRhKTtcblxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBtb3VzZURhdGFbMF0gPSAoKGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQpIC8gY2FudmFzLndpZHRoKSAqIDIgLSAxO1xuICAgICAgICBtb3VzZURhdGFbMV0gPSAoKChldmVudC5jbGllbnRZIC0gcmVjdC50b3ApIC8gY2FudmFzLmhlaWdodCkgKiAyIC0gMSkgKiAtMTtcbiAgICAgICAgZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKG1vdXNlQnVmZmVyLCAwLCBtb3VzZURhdGEpO1xuICAgIH0pO1xuXG4gICAgc25ha2VTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICAgICAgICBzdGFydCA9IGZhbHNlO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwYXJzZUludCh0YXJnZXQudmFsdWUpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFtb3VudF92YWx1ZVwiKS50ZXh0Q29udGVudCA9IHRhcmdldC52YWx1ZTtcblxuICAgICAgICBudW1TbmFrZXMgPSB2YWx1ZTtcbiAgICAgICAgc25ha2VNZXRhWzFdID0gbnVtU25ha2VzO1xuXG4gICAgICAgIHNuYWtlcyA9IFtdO1xuICAgICAgICBkZXZpY2UucXVldWUud3JpdGVCdWZmZXIoc25ha2VNZXRhQnVmZmVyLCAwLCBzbmFrZU1ldGEpO1xuICAgICAgICBnZW5lcmF0ZVJhbmRvbVNuYWtlcygpO1xuICAgIH0pO1xuXG4gICAgbGVuZ3RoU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgc3RhcnQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZW5ndGhfdmFsdWVcIikudGV4dENvbnRlbnQgPSB0YXJnZXQudmFsdWU7XG5cbiAgICAgICAgc25ha2VMZW5ndGggPSB2YWx1ZTtcbiAgICAgICAgc25ha2VNZXRhWzBdID0gdmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV3IHNuYWtlIGxlbmd0aFwiLCBzbmFrZUxlbmd0aCk7XG5cbiAgICAgICAgc25ha2VzID0gW107XG4gICAgICAgIGRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcihzbmFrZU1ldGFCdWZmZXIsIDAsIHNuYWtlTWV0YSk7XG4gICAgICAgIGdlbmVyYXRlUmFuZG9tU25ha2VzKCk7XG4gICAgfSk7XG5cbiAgICBzdGFydFNpbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KT0+e1xuICAgICAgICBsZXQgcHJldiA9IHN0YXJ0O1xuICAgICAgICBzdGFydCA9IHRydWU7XG4gICAgfSlcblxuICAgIHBpdEFjdGl2YXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpPT57XG4gICAgICAgIG1vZGUgPSAxO1xuICAgICAgICBzbmFrZU1ldGFbMl0gPSBtb2RlO1xuICAgICAgICBkZXZpY2UucXVldWUud3JpdGVCdWZmZXIoc25ha2VNZXRhQnVmZmVyLCAwLCBzbmFrZU1ldGEpO1xuICAgIH0pXG5cbiAgICBmb2xsb3dBY3RpdmF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KT0+e1xuICAgICAgICBtb2RlID0gMDtcbiAgICAgICAgc25ha2VNZXRhWzJdID0gbW9kZTtcbiAgICAgICAgZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHNuYWtlTWV0YUJ1ZmZlciwgMCwgc25ha2VNZXRhKTtcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gaHN2VG9SZ2IoaDogbnVtYmVyLCBzOiBudW1iZXIsIHY6IG51bWJlcik6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gICAgICAgIGxldCBjID0gdiAqIHM7XG4gICAgICAgIGxldCB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKChoICogNikgJSAyKSAtIDEpKTtcbiAgICAgICAgbGV0IG0gPSB2IC0gYztcblxuICAgICAgICBsZXQgW3IsIGcsIGJdID1cbiAgICAgICAgICAgIGggPCAxLzYgPyBbYywgeCwgMF0gOlxuICAgICAgICAgICAgaCA8IDIvNiA/IFt4LCBjLCAwXSA6XG4gICAgICAgICAgICBoIDwgMy82ID8gWzAsIGMsIHhdIDpcbiAgICAgICAgICAgIGggPCA0LzYgPyBbMCwgeCwgY10gOlxuICAgICAgICAgICAgaCA8IDUvNiA/IFt4LCAwLCBjXSA6XG4gICAgICAgICAgICAgICAgICAgIFtjLCAwLCB4XTtcblxuICAgICAgICByZXR1cm4gW3IgKyBtLCBnICsgbSwgYiArIG1dO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic25ha2VfbGlzdFwiKTtcbiAgICBmdW5jdGlvbiBjcmVhdGVTbmFrZUNhcmQoY29sb3I6W251bWJlciwgbnVtYmVyLCBudW1iZXJdLCBpZHg6bnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic25ha2VfbGlzdFwiKTtcblxuICAgICAgICBjb25zdCByID0gTWF0aC5mbG9vcihjb2xvclswXSAqIDI1NSk7XG4gICAgICAgIGNvbnN0IGcgPSBNYXRoLmZsb29yKGNvbG9yWzFdICogMjU1KTtcbiAgICAgICAgY29uc3QgYiA9IE1hdGguZmxvb3IoY29sb3JbMl0gKiAyNTUpO1xuXG4gICAgICAgIGNvbnN0IGNzc0NvbG9yID0gYHJnYmEoJHtyfSwgJHtnfSwgJHtifWA7XG4gICAgICAgIGNvbnN0IGlkID0gYCR7cn0ke2d9JHtifWA7XG5cbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhcmQuY2xhc3NOYW1lID0gXCJzbmFrZV9jYXJkXCI7XG5cbiAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWR4VG9DYXJkLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgICAgICBjLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RlZCBzbmFrZSBpbmRleDpcIiwgaWR4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaWRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGlkVGV4dC50ZXh0Q29udGVudCA9IGlkOyAvLyBJRCA9IGNvbG9yIHN0cmluZ1xuXG4gICAgICAgIGNvbnN0IGNvbG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29sb3JEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY3NzQ29sb3I7XG5cbiAgICAgICAgLy8gQXNzZW1ibGVcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpZFRleHQpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNvbG9yRGl2KTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgICAgICBpZHhUb0NhcmQuc2V0KGlkeCwgY2FyZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkRWxpbShjYXJkOkhUTUxFbGVtZW50KXtcbiAgICAgICAgY29uc3QgZWxpbUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsaW1pbmF0ZWRfbGlzdFwiKVxuICAgICAgICBjb25zdCBlbGltSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbGltX2hlYWRlclwiKTtcbiAgICAgICAgZWxpbUxpc3QhLnByZXBlbmQoY2FyZCk7IFxuICAgICAgICBlbGltSGVhZGVyLnJlbW92ZSgpO1xuICAgICAgICBlbGltTGlzdCEucHJlcGVuZChlbGltSGVhZGVyKTtcbiAgICAgICAgcmV2aXZlVG9wU25ha2UoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyU25ha2VMaXN0KCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNuYWtlX2xpc3RcIik7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic25ha2VfbGlzdF9oZWFkZXJcIik7XG4gICAgICAgIGNvbnN0IGVsaW1MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbGltaW5hdGVkX2xpc3RcIik7XG4gICAgICAgIGNvbnN0IGVsaW1IZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsaW1faGVhZGVyXCIpO1xuXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiOyAgICAgICAgICAvLyBjbGVhciBhbGxcbiAgICAgICAgZWxpbUxpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7ICAgICAvLyBwdXQgaGVhZGVyIGJhY2tcbiAgICAgICAgZWxpbUxpc3QuYXBwZW5kQ2hpbGQoZWxpbUhlYWRlcik7XG4gICAgICAgIGlkeFRvQ2FyZC5jbGVhcigpO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBmdW5jdGlvbiByZXZpdmVUb3BTbmFrZSgpIHtcbiAgICAgICAgY29uc3QgZWxpbUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsaW1pbmF0ZWRfbGlzdFwiKTtcbiAgICAgICAgY29uc3Qgc25ha2VMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbmFrZV9saXN0XCIpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNuYWtlX2xpc3RfaGVhZGVyXCIpO1xuXG4gICAgICAgIC8vIE9ubHkgcmV2aXZlIGlmIHRoZSBzbmFrZSBsaXN0IGlzIGVtcHR5IChqdXN0IHRoZSBoZWFkZXIgcmVtYWlucylcbiAgICAgICAgLy8gYW5kIHRoZXJlIGlzIHNvbWVvbmUgaW4gdGhlIGVsaW1pbmF0aW9uIGxpc3QgdG8gYnJpbmcgYmFja1xuICAgICAgICBpZiAoc25ha2VMaXN0Py5jaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgZWxpbUxpc3Q/LmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIC8vIFRoZSBmaXJzdCBjaGlsZCBpcyB1c3VhbGx5IHRoZSBoZWFkZXIsIHNvIHdlIHRha2UgdGhlIHNlY29uZCBjaGlsZFxuICAgICAgICAgICAgY29uc3QgdG9wQ2FyZCA9IGVsaW1MaXN0LmNoaWxkcmVuWzFdIGFzIEhUTUxFbGVtZW50OyBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIHNuYWtlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNhcmRcbiAgICAgICAgICAgIGxldCBzbmFrZUlkeCA9IC0xO1xuICAgICAgICAgICAgZm9yIChsZXQgW2lkeCwgY2FyZF0gb2YgaWR4VG9DYXJkLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgIGlmIChjYXJkID09PSB0b3BDYXJkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNuYWtlSWR4ID0gaWR4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzbmFrZUlkeCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyAxLiBNb3ZlIHRoZSBjYXJkIGJhY2sgdG8gdGhlIG1haW4gbGlzdFxuICAgICAgICAgICAgICAgIHRvcENhcmQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgaGVhZGVyPy5hZnRlcih0b3BDYXJkKTtcblxuICAgICAgICAgICAgICAgIC8vIDIuIFByZXBhcmUgdGhlIHJlc2V0IGRhdGEgZm9yIHRoZSBHUFVcbiAgICAgICAgICAgICAgICAvLyBXZSBvbmx5IG5lZWQgdG8gdXBkYXRlIHRoZSBzZWdtZW50cyBmb3IgVEhJUyBzcGVjaWZpYyBzbmFrZVxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmlkZSA9IDg7IC8vIDggZmxvYXRzIHBlciBub2RlXG4gICAgICAgICAgICAgICAgY29uc3Qgc25ha2VTdGFydElkeCA9IHNuYWtlSWR4ICogc25ha2VMZW5ndGggKiBzdHJpZGU7XG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoc25ha2VMZW5ndGggKiBzdHJpZGUpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzbmFrZUxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IGogKiBzdHJpZGU7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURhdGFbb2Zmc2V0XSA9IDAuMCArIChqICogMC4wNCk7ICAgICAvLyBYIGNlbnRlclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEYXRhW29mZnNldCArIDFdID0gMC4wICsgKGogKiAwLjA0KTsgLy8gWSBjZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGF0YVtvZmZzZXQgKyAyXSA9IDAuMDsgLy8gVW5tYXJrIFwiaGl0XCIgKGRhdGFbaSsyXSA9IDAuMClcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGF0YVtvZmZzZXQgKyAzXSA9IDAuMDsgLy8gcGFkZGluZ1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gS2VlcCB0aGUgb3JpZ2luYWwgY29sb3JzIGZyb20gb3VyIGxvY2FsIG5vZGVEYXRhXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURhdGFbb2Zmc2V0ICsgNF0gPSBub2RlRGF0YVtzbmFrZVN0YXJ0SWR4ICsgb2Zmc2V0ICsgNF07XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURhdGFbb2Zmc2V0ICsgNV0gPSBub2RlRGF0YVtzbmFrZVN0YXJ0SWR4ICsgb2Zmc2V0ICsgNV07XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURhdGFbb2Zmc2V0ICsgNl0gPSBub2RlRGF0YVtzbmFrZVN0YXJ0SWR4ICsgb2Zmc2V0ICsgNl07XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURhdGFbb2Zmc2V0ICsgN10gPSBub2RlRGF0YVtzbmFrZVN0YXJ0SWR4ICsgb2Zmc2V0ICsgN107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gMy4gV3JpdGUgZGlyZWN0bHkgdG8gdGhlIEdQVSBzdG9yYWdlIGJ1ZmZlclxuICAgICAgICAgICAgICAgIGRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcihcbiAgICAgICAgICAgICAgICAgICAgbm9kZUJ1ZmZlciwgXG4gICAgICAgICAgICAgICAgICAgIHNuYWtlU3RhcnRJZHggKiA0LCAvLyBvZmZzZXQgaW4gYnl0ZXNcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGF0YVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiB0byBnZW5lcmF0ZSBhIHJhbmRvbSBncmFwaFxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tU25ha2VzKCkge1xuICAgICAgICBzdGFydCA9IGZhbHNlO1xuICAgICAgICBzaW1JZCsrO1xuICAgICAgICBcbiAgICAgICAgaWYgKG5vZGVCdWZmZXIpIG5vZGVCdWZmZXIuZGVzdHJveSgpO1xuICAgICAgICBpZiAocmVhZEJ1ZmZlcikge1xuICAgICAgICAgICAgdHJ5IHsgcmVhZEJ1ZmZlci51bm1hcCgpOyB9IGNhdGNoKGUpIHt9XG4gICAgICAgICAgICByZWFkQnVmZmVyLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclNuYWtlTGlzdCgpXG4gICAgICAgIFxuICAgICAgICAvLyBEZWZpbmUgMTAgaGlnaC1jb250cmFzdCBjb2xvcnMgKFJHQkEpXG4gICAgICAgIGNvbnN0IHBhbGV0dGU6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdW10gPSBbXG4gICAgICAgICAgICBbMS4wLCAwLjAsIDAuMCwgMS4wXSwgLy8gUmVkXG4gICAgICAgICAgICBbMS4wLCAxLjAsIDAuMCwgMS4wXSwgLy8gWWVsbG93XG4gICAgICAgICAgICBbMC4wLCAwLjAsIDEuMCwgMS4wXSwgLy8gQmx1ZVxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU25ha2VzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGh1ZSA9IGkgLyBudW1TbmFrZXM7IFxuICAgICAgICAgICAgY29uc3QgW3IsIGcsIGJdID0gaHN2VG9SZ2IoaHVlLCAxLjAsIDEuMCk7XG4gICAgICAgICAgICBjcmVhdGVTbmFrZUNhcmQoW3IsZyxiXSwgaSk7XG5cbiAgICAgICAgICAgIHNuYWtlcy5wdXNoKG5ldyBTbmFrZShcbiAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMi4wIC0gMS4wLFxuICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyLjAgLSAxLjAsIFxuICAgICAgICAgICAgICAgIHNuYWtlTGVuZ3RoLFxuICAgICAgICAgICAgICAgIFtyLCBnLCBiLCAxLjBdXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQ3JlYXRlIG5vZGUgYnVmZmVyXG4gICAgICAgIG5vZGVEYXRhID0gbmV3IEZsb2F0MzJBcnJheShudW1TbmFrZXMgKiBzbmFrZUxlbmd0aCAqIDgpO1xuICAgICAgICBzbmFrZXMuZm9yRWFjaCgoc25ha2UsIGkpID0+IHtcbiAgICAgICAgICAgIHNuYWtlLm5vZGVzLmZvckVhY2goKG5vZGUsIGopID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAoaSAqIHNuYWtlTGVuZ3RoICsgaikgKiA4XG4gICAgICAgICAgICAgICAgbm9kZURhdGFbb2Zmc2V0XSA9IG5vZGUueDtcbiAgICAgICAgICAgICAgICBub2RlRGF0YVtvZmZzZXQgKyAxXSA9IG5vZGUueTtcbiAgICAgICAgICAgICAgICBub2RlRGF0YVtvZmZzZXQgKyAyXSA9IDAuMDtcbiAgICAgICAgICAgICAgICBub2RlRGF0YVtvZmZzZXQgKyAzXSA9IDAuMDsgXG4gICAgICAgICAgICAgICAgbm9kZURhdGFbb2Zmc2V0ICsgNF0gPSBub2RlLmNvbG9yWzBdO1xuICAgICAgICAgICAgICAgIG5vZGVEYXRhW29mZnNldCArIDVdID0gbm9kZS5jb2xvclsxXTtcbiAgICAgICAgICAgICAgICBub2RlRGF0YVtvZmZzZXQgKyA2XSA9IG5vZGUuY29sb3JbMl07XG4gICAgICAgICAgICAgICAgbm9kZURhdGFbb2Zmc2V0ICsgN10gPSBub2RlLmNvbG9yWzNdO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIENyZWF0ZSBHUFUgYnVmZmVyc1xuICAgICAgICBub2RlQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICAgICAgICBzaXplOiBub2RlRGF0YS5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlNUT1JBR0UgfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfU1JDLFxuICAgICAgICAgICAgbWFwcGVkQXRDcmVhdGlvbjogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9jb25zdCByZWFkQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICAgIHJlYWRCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgICAgICAgIHNpemU6IG5vZGVEYXRhLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfCBHUFVCdWZmZXJVc2FnZS5NQVBfUkVBRCxcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBuZXcgRmxvYXQzMkFycmF5KG5vZGVCdWZmZXIuZ2V0TWFwcGVkUmFuZ2UoKSkuc2V0KG5vZGVEYXRhKTtcbiAgICAgICAgbm9kZUJ1ZmZlci51bm1hcCgpO1xuICAgICAgICBcbiAgICAgICAgLy8gQ3JlYXRlIGJpbmQgZ3JvdXBcbiAgICAgICAgYmluZEdyb3VwID0gZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7XG4gICAgICAgICAgICBsYXlvdXQ6IGJpbmRHcm91cExheW91dCxcbiAgICAgICAgICAgIGVudHJpZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmluZGluZzogMCxcbiAgICAgICAgICAgICAgICByZXNvdXJjZTogeyBidWZmZXI6IG5vZGVCdWZmZXIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pOyBcblxuICAgICAgICBicmFpbiA9IG5ldyBjb21wdXRlRGlyZWN0aW9uKGRldmljZSwgbm9kZUJ1ZmZlciwgbW91c2VCdWZmZXIsIHNuYWtlTWV0YUJ1ZmZlciwgKG51bVNuYWtlcyAqIHNuYWtlTGVuZ3RoKSk7XG4gICAgfVxuXG4gICAgbGV0IHJlYWRpbmcgPSBmYWxzZTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlYWRTbmFrZVJlc3VsdHMoKSB7XG4gICAgICAgIGlmIChyZWFkaW5nIHx8ICFyZWFkQnVmZmVyKSByZXR1cm47XG4gICAgICAgIHJlYWRpbmcgPSB0cnVlO1xuICAgICAgICBjb25zdCBjdXJyZW50U2ltSWQgPSBzaW1JZDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgZGV2aWNlLnF1ZXVlLm9uU3VibWl0dGVkV29ya0RvbmUoKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2ltSWQgIT09IHNpbUlkKSByZXR1cm47XG5cbiAgICAgICAgICAgIGF3YWl0IHJlYWRCdWZmZXIubWFwQXN5bmMoR1BVTWFwTW9kZS5SRUFEKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2ltSWQgIT09IHNpbUlkKSB7XG4gICAgICAgICAgICAgICAgcmVhZEJ1ZmZlci51bm1hcCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbWFwcGVkID0gbmV3IEZsb2F0MzJBcnJheShyZWFkQnVmZmVyLmdldE1hcHBlZFJhbmdlKCkpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkobWFwcGVkLmxlbmd0aCk7XG4gICAgICAgICAgICBkYXRhLnNldChtYXBwZWQpO1xuICAgICAgICAgICAgcmVhZEJ1ZmZlci51bm1hcCgpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9ICg4ICogc25ha2VMZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFbaSArIDJdID09PSAxLjApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc25ha2VJbmRleCA9IE1hdGguZmxvb3IoaSAvIChzbmFrZUxlbmd0aCAqIDgpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9IGlkeFRvQ2FyZC5nZXQoc25ha2VJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkICYmIGNhcmQucGFyZW50RWxlbWVudD8uaWQgIT09IFwiZWxpbWluYXRlZF9saXN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRFbGltKGNhcmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJSZWFkIGFib3J0ZWRcIik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICByZWFkaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZVJhbmRvbVNuYWtlcygpO1xuXG4gICAgLy8gQ3JlYXRlIHNoYWRlciBtb2R1bGVcbiAgICBjb25zdCBub2RlTW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7XG4gICAgICAgIGNvZGU6IG5vZGVDb2RlXG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgcGlwZWxpbmVcbiAgICBjb25zdCBub2RlUGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgICBsYXlvdXQ6IGRldmljZS5jcmVhdGVQaXBlbGluZUxheW91dCh7XG4gICAgICAgIGJpbmRHcm91cExheW91dHM6IFtiaW5kR3JvdXBMYXlvdXRdXG4gICAgICAgIH0pLFxuICAgICAgICB2ZXJ0ZXg6IHtcbiAgICAgICAgbW9kdWxlOiBub2RlTW9kdWxlLFxuICAgICAgICBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIlxuICAgICAgICB9LFxuICAgICAgICBmcmFnbWVudDoge1xuICAgICAgICBtb2R1bGU6IG5vZGVNb2R1bGUsXG4gICAgICAgIGVudHJ5UG9pbnQ6IFwiZnJhZ21lbnRNYWluXCIsXG4gICAgICAgIHRhcmdldHM6IFt7IGZvcm1hdCB9XVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0VGV4dHVyZSA9IGNvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKTtcbiAgICAgICAgY29uc3QgY29tbWFuZEVuY29kZXIgPSBkZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcblxuICAgICAgICBpZiAoc3RhcnQpe1xuICAgICAgICAgICAgYnJhaW4uY2hhc2UoY29tbWFuZEVuY29kZXIpO1xuXG4gICAgICAgICAgICBpZiAocmVhZEJ1ZmZlci5tYXBTdGF0ZSA9PT0gXCJ1bm1hcHBlZFwiKSB7XG4gICAgICAgICAgICAgICAgY29tbWFuZEVuY29kZXIuY29weUJ1ZmZlclRvQnVmZmVyKFxuICAgICAgICAgICAgICAgICAgICBub2RlQnVmZmVyLCAwLCBcbiAgICAgICAgICAgICAgICAgICAgcmVhZEJ1ZmZlciwgMCwgXG4gICAgICAgICAgICAgICAgICAgIG5vZGVEYXRhLmJ5dGVMZW5ndGhcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFzcyA9IGNvbW1hbmRFbmNvZGVyLmJlZ2luUmVuZGVyUGFzcyh7XG4gICAgICAgICAgICBjb2xvckF0dGFjaG1lbnRzOiBbe1xuICAgICAgICAgICAgICAgIHZpZXc6IHRhcmdldFRleHR1cmUuY3JlYXRlVmlldygpLFxuICAgICAgICAgICAgICAgIGxvYWRPcDogXCJjbGVhclwiLFxuICAgICAgICAgICAgICAgIHN0b3JlT3A6IFwic3RvcmVcIixcbiAgICAgICAgICAgICAgICBjbGVhclZhbHVlOiB7IHI6IDEuMCwgZzogMS4wLCBiOiAxLjAsIGE6IDEuMCB9IC8vIFNldCB0byB3aGl0ZVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGFzcy5zZXRQaXBlbGluZShub2RlUGlwZWxpbmUpO1xuICAgICAgICBwYXNzLnNldEJpbmRHcm91cCgwLCBiaW5kR3JvdXApO1xuICAgICAgICBwYXNzLmRyYXcoNiwgbnVtU25ha2VzICogc25ha2VMZW5ndGgpO1xuICAgICAgICBwYXNzLmVuZCgpO1xuXG4gICAgICAgIGRldmljZS5xdWV1ZS5zdWJtaXQoW2NvbW1hbmRFbmNvZGVyLmZpbmlzaCgpXSk7XG5cbiAgICAgICAgaWYgKGZyYW1lQ291bnQgJSA4ID09PSAwICYmIHN0YXJ0KSB7XG4gICAgICAgICAgICByZWFkU25ha2VSZXN1bHRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZyYW1lQ291bnQgPSAoZnJhbWVDb3VudCArIDEpICUgMTAwMDtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBtYWluKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=