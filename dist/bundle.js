/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/browser-split/index.js":
/*!*********************************************!*\
  !*** ./node_modules/browser-split/index.js ***!
  \*********************************************/
/***/ ((module) => {

/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */

/**
 * Splits a string into an array of strings using a regex or string separator. Matches of the
 * separator are not included in the result array. However, if `separator` is a regex that contains
 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
 * cross-browser.
 * @param {String} str String to split.
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 * @example
 *
 * // Basic use
 * split('a b c d', ' ');
 * // -> ['a', 'b', 'c', 'd']
 *
 * // With limit
 * split('a b c d', ' ', 2);
 * // -> ['a', 'b']
 *
 * // Backreferences in result array
 * split('..word1 word2..', /([a-z]+)(\d+)/i);
 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
 */
module.exports = (function split(undef) {

  var nativeSplit = String.prototype.split,
    compliantExecNpcg = /()??/.exec("")[1] === undef,
    // NPCG: nonparticipating capturing group
    self;

  self = function(str, separator, limit) {
    // If `separator` is not a regex, use `nativeSplit`
    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
      return nativeSplit.call(str, separator, limit);
    }
    var output = [],
      flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
      (separator.sticky ? "y" : ""),
      // Firefox 3+
      lastLastIndex = 0,
      // Make `global` and avoid `lastIndex` issues by working with a copy
      separator = new RegExp(separator.source, flags + "g"),
      separator2, match, lastIndex, lastLength;
    str += ""; // Type-convert
    if (!compliantExecNpcg) {
      // Doesn't need flags gy, but they don't hurt
      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
    }
    /* Values for `limit`, per the spec:
     * If undefined: 4294967295 // Math.pow(2, 32) - 1
     * If 0, Infinity, or NaN: 0
     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
     * If other: Type-convert, then use the above rules
     */
    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
    limit >>> 0; // ToUint32(limit)
    while (match = separator.exec(str)) {
      // `separator.lastIndex` is not reliable cross-browser
      lastIndex = match.index + match[0].length;
      if (lastIndex > lastLastIndex) {
        output.push(str.slice(lastLastIndex, match.index));
        // Fix browsers whose `exec` methods don't consistently return `undefined` for
        // nonparticipating capturing groups
        if (!compliantExecNpcg && match.length > 1) {
          match[0].replace(separator2, function() {
            for (var i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undef) {
                match[i] = undef;
              }
            }
          });
        }
        if (match.length > 1 && match.index < str.length) {
          Array.prototype.push.apply(output, match.slice(1));
        }
        lastLength = match[0].length;
        lastLastIndex = lastIndex;
        if (output.length >= limit) {
          break;
        }
      }
      if (separator.lastIndex === match.index) {
        separator.lastIndex++; // Avoid an infinite loop
      }
    }
    if (lastLastIndex === str.length) {
      if (lastLength || !separator.test("")) {
        output.push("");
      }
    } else {
      output.push(str.slice(lastLastIndex));
    }
    return output.length > limit ? output.slice(0, limit) : output;
  };

  return self;
})();


/***/ }),

/***/ "./node_modules/class-list/index.js":
/*!******************************************!*\
  !*** ./node_modules/class-list/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// contains, add, remove, toggle
var indexof = __webpack_require__(/*! indexof */ "./node_modules/indexof/index.js")

module.exports = ClassList

function ClassList(elem) {
    var cl = elem.classList

    if (cl) {
        return cl
    }

    var classList = {
        add: add
        , remove: remove
        , contains: contains
        , toggle: toggle
        , toString: $toString
        , length: 0
        , item: item
    }

    return classList

    function add(token) {
        var list = getTokens()
        if (indexof(list, token) > -1) {
            return
        }
        list.push(token)
        setTokens(list)
    }

    function remove(token) {
        var list = getTokens()
            , index = indexof(list, token)

        if (index === -1) {
            return
        }

        list.splice(index, 1)
        setTokens(list)
    }

    function contains(token) {
        return indexof(getTokens(), token) > -1
    }

    function toggle(token) {
        if (contains(token)) {
            remove(token)
            return false
        } else {
            add(token)
            return true
        }
    }

    function $toString() {
        return elem.className
    }

    function item(index) {
        var tokens = getTokens()
        return tokens[index] || null
    }

    function getTokens() {
        var className = elem.className

        return filter(className.split(" "), isTruthy)
    }

    function setTokens(list) {
        var length = list.length

        elem.className = list.join(" ")
        classList.length = length

        for (var i = 0; i < list.length; i++) {
            classList[i] = list[i]
        }

        delete list[length]
    }
}

function filter (arr, fn) {
    var ret = []
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i])) ret.push(arr[i])
    }
    return ret
}

function isTruthy(value) {
    return !!value
}


/***/ }),

/***/ "./node_modules/hyperscript-helpers/dist/index.js":
/*!********************************************************!*\
  !*** ./node_modules/hyperscript-helpers/dist/index.js ***!
  \********************************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var isValidString = function isValidString(param) {
  return typeof param === 'string' && param.length > 0;
};

var startsWith = function startsWith(string, start) {
  return string[0] === start;
};

var isSelector = function isSelector(param) {
  return isValidString(param) && (startsWith(param, '.') || startsWith(param, '#'));
};

var node = function node(h) {
  return function (tagName) {
    return function (first) {
      for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      if (isSelector(first)) {
        return h.apply(undefined, [tagName + first].concat(rest));
      } else if (typeof first === 'undefined') {
        return h(tagName);
      } else {
        return h.apply(undefined, [tagName, first].concat(rest));
      }
    };
  };
};

var TAG_NAMES = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'content', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'image', 'img', 'input', 'ins', 'isindex', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'listing', 'main', 'map', 'mark', 'marquee', 'math', 'menu', 'menuitem', 'meta', 'meter', 'multicol', 'nav', 'nextid', 'nobr', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'plaintext', 'pre', 'progress', 'q', 'rb', 'rbc', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'script', 'section', 'select', 'shadow', 'slot', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr', 'xmp'];

exports["default"] = function (h) {
  var createTag = node(h);
  var exported = { TAG_NAMES: TAG_NAMES, isSelector: isSelector, createTag: createTag };
  TAG_NAMES.forEach(function (n) {
    exported[n] = createTag(n);
  });
  return exported;
};

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/hyperscript/index.js":
/*!*******************************************!*\
  !*** ./node_modules/hyperscript/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var split = __webpack_require__(/*! browser-split */ "./node_modules/browser-split/index.js")
var ClassList = __webpack_require__(/*! class-list */ "./node_modules/class-list/index.js")

var w = typeof window === 'undefined' ? __webpack_require__(/*! html-element */ "?769c") : window
var document = w.document
var Text = w.Text

function context () {

  var cleanupFuncs = []

  function h() {
    var args = [].slice.call(arguments), e = null
    function item (l) {
      var r
      function parseClass (string) {
        // Our minimal parser doesn’t understand escaping CSS special
        // characters like `#`. Don’t use them. More reading:
        // https://mathiasbynens.be/notes/css-escapes .

        var m = split(string, /([\.#]?[^\s#.]+)/)
        if(/^\.|#/.test(m[1]))
          e = document.createElement('div')
        forEach(m, function (v) {
          var s = v.substring(1,v.length)
          if(!v) return
          if(!e)
            e = document.createElement(v)
          else if (v[0] === '.')
            ClassList(e).add(s)
          else if (v[0] === '#')
            e.setAttribute('id', s)
        })
      }

      if(l == null)
        ;
      else if('string' === typeof l) {
        if(!e)
          parseClass(l)
        else
          e.appendChild(r = document.createTextNode(l))
      }
      else if('number' === typeof l
        || 'boolean' === typeof l
        || l instanceof Date
        || l instanceof RegExp ) {
          e.appendChild(r = document.createTextNode(l.toString()))
      }
      //there might be a better way to handle this...
      else if (isArray(l))
        forEach(l, item)
      else if(isNode(l))
        e.appendChild(r = l)
      else if(l instanceof Text)
        e.appendChild(r = l)
      else if ('object' === typeof l) {
        for (var k in l) {
          if('function' === typeof l[k]) {
            if(/^on\w+/.test(k)) {
              (function (k, l) { // capture k, l in the closure
                if (e.addEventListener){
                  e.addEventListener(k.substring(2), l[k], false)
                  cleanupFuncs.push(function(){
                    e.removeEventListener(k.substring(2), l[k], false)
                  })
                }else{
                  e.attachEvent(k, l[k])
                  cleanupFuncs.push(function(){
                    e.detachEvent(k, l[k])
                  })
                }
              })(k, l)
            } else {
              // observable
              e[k] = l[k]()
              cleanupFuncs.push(l[k](function (v) {
                e[k] = v
              }))
            }
          }
          else if(k === 'style') {
            if('string' === typeof l[k]) {
              e.style.cssText = l[k]
            }else{
              for (var s in l[k]) (function(s, v) {
                if('function' === typeof v) {
                  // observable
                  e.style.setProperty(s, v())
                  cleanupFuncs.push(v(function (val) {
                    e.style.setProperty(s, val)
                  }))
                } else
                  var match = l[k][s].match(/(.*)\W+!important\W*$/);
                  if (match) {
                    e.style.setProperty(s, match[1], 'important')
                  } else {
                    e.style.setProperty(s, l[k][s])
                  }
              })(s, l[k][s])
            }
          } else if(k === 'attrs') {
            for (var v in l[k]) {
              e.setAttribute(v, l[k][v])
            }
          }
          else if (k.substr(0, 5) === "data-") {
            e.setAttribute(k, l[k])
          } else {
            e[k] = l[k]
          }
        }
      } else if ('function' === typeof l) {
        //assume it's an observable!
        var v = l()
        e.appendChild(r = isNode(v) ? v : document.createTextNode(v))

        cleanupFuncs.push(l(function (v) {
          if(isNode(v) && r.parentElement)
            r.parentElement.replaceChild(v, r), r = v
          else
            r.textContent = v
        }))
      }

      return r
    }
    while(args.length)
      item(args.shift())

    return e
  }

  h.cleanup = function () {
    for (var i = 0; i < cleanupFuncs.length; i++){
      cleanupFuncs[i]()
    }
    cleanupFuncs.length = 0
  }

  return h
}

var h = module.exports = context()
h.context = context

function isNode (el) {
  return el && el.nodeName && el.nodeType
}

function forEach (arr, fn) {
  if (arr.forEach) return arr.forEach(fn)
  for (var i = 0; i < arr.length; i++) fn(arr[i], i)
}

function isArray (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]'
}




/***/ }),

/***/ "./node_modules/indexof/index.js":
/*!***************************************!*\
  !*** ./node_modules/indexof/index.js ***!
  \***************************************/
/***/ ((module) => {


var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
const app = (initModel, view, update, node) => {
    const dispatch = (message) => {
        model = update(model, message);
        const updatedView = view(model, dispatch);
        node.replaceChild(updatedView, currentView);
        currentView = updatedView;
        console.log(JSON.stringify(message));
        console.log(JSON.stringify(model));
    };
    let model = initModel;
    let currentView = view(model, dispatch);
    node.appendChild(currentView);
};


/***/ }),

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fontMap: () => (/* binding */ fontMap),
/* harmony export */   plateHeight: () => (/* binding */ plateHeight),
/* harmony export */   plateWidth: () => (/* binding */ plateWidth)
/* harmony export */ });
const plateWidth = 80;
const plateHeight = 14;
const fontMap = {
    "Script": "Cursiv",
    "Classic Script": "Dancing Script",
    "Itallic": "Gentium Book Plus Italic",
    "Serif": "Merriwether",
    "Sans Serif": "Roboto",
    "Handwritten": "Caveat"
};


/***/ }),

/***/ "./src/model.ts":
/*!**********************!*\
  !*** ./src/model.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initModel: () => (/* binding */ initModel)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");

const initModel = {
    plateList: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEmptyPlateArray)(),
    selectedPlateIndex: null
};


/***/ }),

/***/ "./src/update.ts":
/*!***********************!*\
  !*** ./src/update.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   update: () => (/* binding */ update)
/* harmony export */ });
const update = (model, message) => {
    const [messageType, ...rest] = message;
    switch (messageType) {
        case "select plate": {
            const [index] = rest;
            return Object.assign(Object.assign({}, model), { selectedPlateIndex: index });
        }
        case "deselect plate": {
            return Object.assign(Object.assign({}, model), { selectedPlateIndex: null });
        }
        case "edit plate text": {
            const [targetIndex, text] = rest;
            const newPlateList = model.plateList.map((plate, index) => index === targetIndex ? Object.assign(Object.assign({}, plate), { text }) : plate);
            return Object.assign(Object.assign({}, model), { plateList: newPlateList });
        }
    }
};


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEmptyPlateArray: () => (/* binding */ createEmptyPlateArray),
/* harmony export */   getPlatePosition: () => (/* binding */ getPlatePosition)
/* harmony export */ });
const createEmptyPlateArray = () => {
    return Array.from({ length: 16 }, (value, index) => {
        return {
            text: "test",
            font: "Script",
        };
    });
};
const getPlatePosition = (index, cols = 2, mm = 4) => {
    const row = Math.floor(index / cols);
    const col = index % cols;
    return {
        x: col * 80 * mm,
        y: row * 14 * mm,
    };
};


/***/ }),

/***/ "./src/view.ts":
/*!*********************!*\
  !*** ./src/view.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   view: () => (/* binding */ view)
/* harmony export */ });
/* harmony import */ var hyperscript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperscript */ "./node_modules/hyperscript/index.js");
/* harmony import */ var hyperscript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hyperscript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hyperscript_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hyperscript-helpers */ "./node_modules/hyperscript-helpers/dist/index.js");
/* harmony import */ var hyperscript_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hyperscript_helpers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/data.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");




const { div, button, svg, pre } = hyperscript_helpers__WEBPACK_IMPORTED_MODULE_1___default()((hyperscript__WEBPACK_IMPORTED_MODULE_0___default()));
const view = (model, dispatch) => {
    const plates = model.plateList.map((plate, i) => div({ style: "position:relative;" }, [
        plateView(plate, i, dispatch),
        renderEditingInput(model, plate, i, dispatch)
    ]));
    return div(plates);
};
const plateView = (plate, index, dispatch) => {
    //if (plate.selected) return null
    const { x, y } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getPlatePosition)(index);
    return svg({
        width: _data__WEBPACK_IMPORTED_MODULE_2__.plateWidth,
        height: _data__WEBPACK_IMPORTED_MODULE_2__.plateHeight,
        style: `
            position:absolute;
            left:${x}px;
            top:${y}px;
            cursor:pointer;
        `,
        onclick: () => dispatch(["select plate", index])
    }, [
        hyperscript__WEBPACK_IMPORTED_MODULE_0___default()("rect", {
            x: 0, y: 0,
            width: _data__WEBPACK_IMPORTED_MODULE_2__.plateWidth,
            height: _data__WEBPACK_IMPORTED_MODULE_2__.plateHeight,
            stroke: "#888", // not black, not engraved
            fill: "none",
            "stroke-width": 1
        }),
        hyperscript__WEBPACK_IMPORTED_MODULE_0___default()("text", {
            x: _data__WEBPACK_IMPORTED_MODULE_2__.plateWidth / 2,
            y: _data__WEBPACK_IMPORTED_MODULE_2__.plateHeight / 2,
            "dominant-baseline": "middle",
            "text-anchor": "middle",
            "font-family": _data__WEBPACK_IMPORTED_MODULE_2__.fontMap[plate.font],
            "font-size": "12px",
            fill: "black" // engraving color
        }, plate.text)
    ]);
};
const renderEditingInput = (model, plate, index, dispatch) => {
    if (model.selectedPlateIndex !== index)
        return null;
    const { x, y } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getPlatePosition)(index);
    return hyperscript__WEBPACK_IMPORTED_MODULE_0___default()("form", {
        style: `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            margin: 0;
        `,
        onsubmit: (e) => {
            e.preventDefault(); // Prevent page reload
            dispatch(["deselect plate", index]);
        }
    }, [
        hyperscript__WEBPACK_IMPORTED_MODULE_0___default()("input", {
            type: "text",
            value: plate.text,
            autofocus: true,
            style: `
                width: ${_data__WEBPACK_IMPORTED_MODULE_2__.plateWidth}px;
                height: ${_data__WEBPACK_IMPORTED_MODULE_2__.plateHeight}px;
                font-size: 16px;
            `,
            oninput: (e) => dispatch(["edit plate text", index, e.target.value]),
            onkeydown: (e) => {
                if (e.key === "Escape") {
                    dispatch(["deselect plate", index]);
                }
            }
        })
    ]);
};


/***/ }),

/***/ "?769c":
/*!******************************!*\
  !*** html-element (ignored) ***!
  \******************************/
/***/ (() => {

/* (ignored) */

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/model.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./src/view.ts");
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update */ "./src/update.ts");




const root = document.body;
(0,_app__WEBPACK_IMPORTED_MODULE_0__.app)(_model__WEBPACK_IMPORTED_MODULE_1__.initModel, _view__WEBPACK_IMPORTED_MODULE_2__.view, _update__WEBPACK_IMPORTED_MODULE_3__.update, root);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxlQUFlO0FBQzFCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ3pHRDtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxnREFBUzs7QUFFL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsR2E7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUZBQXlGLGFBQWE7QUFDdEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxvQzs7Ozs7Ozs7OztBQzlDQSxZQUFZLG1CQUFPLENBQUMsNERBQWU7QUFDbkMsZ0JBQWdCLG1CQUFPLENBQUMsc0RBQVk7O0FBRXBDLHdDQUF3QyxtQkFBTyxDQUFDLDJCQUFjO0FBQzlEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLGVBQWU7QUFDZixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNUpBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7OztBQ05PLE1BQU0sR0FBRyxHQUFHLENBQ2YsU0FBZ0IsRUFDaEIsSUFBeUUsRUFDekUsTUFBaUQsRUFDakQsSUFBaUIsRUFDbkIsRUFBRTtJQUNBLE1BQU0sUUFBUSxHQUFHLENBQUMsT0FBZ0IsRUFBUSxFQUFFO1FBQ3hDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztRQUM5QixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUM7UUFDM0MsV0FBVyxHQUFHLFdBQVc7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFBSSxLQUFLLEdBQUcsU0FBUztJQUNyQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztJQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztBQUNqQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQk0sTUFBTSxVQUFVLEdBQUcsRUFBRTtBQUNyQixNQUFNLFdBQVcsR0FBRyxFQUFFO0FBRXRCLE1BQU0sT0FBTyxHQUFHO0lBQ25CLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGdCQUFnQixFQUFFLGdCQUFnQjtJQUNsQyxTQUFTLEVBQUUsMEJBQTBCO0lBQ3JDLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFlBQVksRUFBRSxRQUFRO0lBQ3RCLGFBQWEsRUFBRSxRQUFRO0NBQzFCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y4QztBQU94QyxNQUFNLFNBQVMsR0FBVTtJQUM1QixTQUFTLEVBQUUsNkRBQXFCLEVBQUU7SUFDbEMsa0JBQWtCLEVBQUUsSUFBSTtDQUMzQjs7Ozs7Ozs7Ozs7Ozs7OztBQ1BNLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBWSxFQUFFLE9BQWdCLEVBQVMsRUFBRTtJQUM1RCxNQUFNLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsT0FBTztJQUV0QyxRQUFRLFdBQVcsRUFBRSxDQUFDO1FBQ2xCLEtBQUssY0FBYyxDQUFDLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBZ0I7WUFDaEMsdUNBQVksS0FBSyxLQUFFLGtCQUFrQixFQUFFLEtBQUssSUFBQztRQUNqRCxDQUFDO1FBQ0QsS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDcEIsdUNBQVksS0FBSyxLQUFFLGtCQUFrQixFQUFFLElBQUksSUFBQztRQUNoRCxDQUFDO1FBQ0QsS0FBSyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxJQUF3QjtZQUNwRCxNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUN0RCxLQUFLLEtBQUssV0FBVyxDQUFDLENBQUMsaUNBQU0sS0FBSyxLQUFFLElBQUksSUFBRyxDQUFDLENBQUMsS0FBSyxDQUNyRDtZQUNELHVDQUFZLEtBQUssS0FBRSxTQUFTLEVBQUUsWUFBWSxJQUFDO1FBQy9DLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQk0sTUFBTSxxQkFBcUIsR0FBRyxHQUFZLEVBQUU7SUFDL0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQy9DLE9BQU87WUFDSCxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxRQUFRO1NBQ2pCO0lBQ0wsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUVNLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxLQUFhLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUE0QixFQUFFO0lBQzFGLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7SUFFekIsT0FBTztRQUNILENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUU7UUFDaEIsQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRTtLQUNuQjtBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQjBCO0FBQ1M7QUFJcUI7QUFDZjtBQUUxQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsMERBQUUsQ0FBQyxvREFBQyxDQUFDO0FBRWhDLE1BQU0sSUFBSSxHQUFHLENBQUMsS0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQ2hELE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQzVDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxFQUFFO1FBQ2pDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQztRQUM3QixrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUM7S0FDaEQsQ0FBQyxDQUNMO0lBQ0QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDO0FBQ3RCLENBQUM7QUFFRCxNQUFNLFNBQVMsR0FBRyxDQUFDLEtBQVksRUFBRSxLQUFhLEVBQUUsUUFBb0MsRUFBRSxFQUFFO0lBQ3BGLGlDQUFpQztJQUNqQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLHdEQUFnQixDQUFDLEtBQUssQ0FBQztJQUV4QyxPQUFPLEdBQUcsQ0FBQztRQUNQLEtBQUssRUFBRSw2Q0FBVTtRQUNqQixNQUFNLEVBQUUsOENBQVc7UUFDbkIsS0FBSyxFQUFFOzttQkFFSSxDQUFDO2tCQUNGLENBQUM7O1NBRVY7UUFDRCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ25ELEVBQUU7UUFDQyxrREFBQyxDQUFDLE1BQU0sRUFBRTtZQUNOLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVixLQUFLLEVBQUUsNkNBQVU7WUFDakIsTUFBTSxFQUFFLDhDQUFXO1lBQ25CLE1BQU0sRUFBRSxNQUFNLEVBQU0sMEJBQTBCO1lBQzlDLElBQUksRUFBRSxNQUFNO1lBQ1osY0FBYyxFQUFFLENBQUM7U0FDcEIsQ0FBQztRQUNGLGtEQUFDLENBQUMsTUFBTSxFQUFFO1lBQ04sQ0FBQyxFQUFFLDZDQUFVLEdBQUcsQ0FBQztZQUNqQixDQUFDLEVBQUUsOENBQVcsR0FBRyxDQUFDO1lBQ2xCLG1CQUFtQixFQUFFLFFBQVE7WUFDN0IsYUFBYSxFQUFFLFFBQVE7WUFDdkIsYUFBYSxFQUFFLDBDQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNsQyxXQUFXLEVBQUUsTUFBTTtZQUNuQixJQUFJLEVBQUUsT0FBTyxDQUFNLGtCQUFrQjtTQUN4QyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUM7S0FDakIsQ0FBQztBQUNOLENBQUM7QUFFRCxNQUFNLGtCQUFrQixHQUFHLENBQ3ZCLEtBQVksRUFDWixLQUFZLEVBQ1osS0FBYSxFQUNiLFFBQW9DLEVBQ3RDLEVBQUU7SUFDQSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsS0FBSyxLQUFLO1FBQUUsT0FBTyxJQUFJO0lBRW5ELE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsd0RBQWdCLENBQUMsS0FBSyxDQUFDO0lBRXhDLE9BQU8sa0RBQUMsQ0FBQyxNQUFNLEVBQUU7UUFDYixLQUFLLEVBQUU7O29CQUVLLENBQUM7bUJBQ0YsQ0FBQzs7U0FFWDtRQUNELFFBQVEsRUFBRSxDQUFDLENBQVEsRUFBRSxFQUFFO1lBQ25CLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLHNCQUFzQjtZQUMxQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDO0tBQ0osRUFBRTtRQUNDLGtEQUFDLENBQUMsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDakIsU0FBUyxFQUFFLElBQUk7WUFDZixLQUFLLEVBQUU7eUJBQ00sNkNBQVU7MEJBQ1QsOENBQVc7O2FBRXhCO1lBQ0QsT0FBTyxFQUFFLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FDaEIsUUFBUSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEQsU0FBUyxFQUFFLENBQUMsQ0FBZ0IsRUFBRSxFQUFFO2dCQUM1QixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFLENBQUM7b0JBQ3JCLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLENBQUM7WUFDTCxDQUFDO1NBQ0osQ0FBQztLQUNMLENBQUM7QUFDTixDQUFDOzs7Ozs7Ozs7OztBQy9GRCxlOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ04yQjtBQUNRO0FBQ047QUFDSTtBQUVqQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSTtBQUUxQix5Q0FBRyxDQUFDLDZDQUFTLEVBQUUsdUNBQUksRUFBRSwyQ0FBTSxFQUFFLElBQUksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hc3RlcmluZy10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL2Jyb3dzZXItc3BsaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvLi9ub2RlX21vZHVsZXMvY2xhc3MtbGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy9oeXBlcnNjcmlwdC1oZWxwZXJzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvLi9ub2RlX21vZHVsZXMvaHlwZXJzY3JpcHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvLi9ub2RlX21vZHVsZXMvaW5kZXhvZi9pbmRleC5qcyIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvLi9zcmMvZGF0YS50cyIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC8uL3NyYy9tb2RlbC50cyIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC8uL3NyYy91cGRhdGUudHMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvLi9zcmMvdmlldy50cyIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC9pZ25vcmVkfC9ob21lL2NocmlzL0NvZGUvTGVhcm5pbmcvVWRlbXkvQnJhc3MtUGxhdGVzL25vZGVfbW9kdWxlcy9oeXBlcnNjcmlwdHxodG1sLWVsZW1lbnQiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hc3RlcmluZy10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIENyb3NzLUJyb3dzZXIgU3BsaXQgMS4xLjFcbiAqIENvcHlyaWdodCAyMDA3LTIwMTIgU3RldmVuIExldml0aGFuIDxzdGV2ZW5sZXZpdGhhbi5jb20+XG4gKiBBdmFpbGFibGUgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKiBFQ01BU2NyaXB0IGNvbXBsaWFudCwgdW5pZm9ybSBjcm9zcy1icm93c2VyIHNwbGl0IG1ldGhvZFxuICovXG5cbi8qKlxuICogU3BsaXRzIGEgc3RyaW5nIGludG8gYW4gYXJyYXkgb2Ygc3RyaW5ncyB1c2luZyBhIHJlZ2V4IG9yIHN0cmluZyBzZXBhcmF0b3IuIE1hdGNoZXMgb2YgdGhlXG4gKiBzZXBhcmF0b3IgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgcmVzdWx0IGFycmF5LiBIb3dldmVyLCBpZiBgc2VwYXJhdG9yYCBpcyBhIHJlZ2V4IHRoYXQgY29udGFpbnNcbiAqIGNhcHR1cmluZyBncm91cHMsIGJhY2tyZWZlcmVuY2VzIGFyZSBzcGxpY2VkIGludG8gdGhlIHJlc3VsdCBlYWNoIHRpbWUgYHNlcGFyYXRvcmAgaXMgbWF0Y2hlZC5cbiAqIEZpeGVzIGJyb3dzZXIgYnVncyBjb21wYXJlZCB0byB0aGUgbmF0aXZlIGBTdHJpbmcucHJvdG90eXBlLnNwbGl0YCBhbmQgY2FuIGJlIHVzZWQgcmVsaWFibHlcbiAqIGNyb3NzLWJyb3dzZXIuXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFN0cmluZyB0byBzcGxpdC5cbiAqIEBwYXJhbSB7UmVnRXhwfFN0cmluZ30gc2VwYXJhdG9yIFJlZ2V4IG9yIHN0cmluZyB0byB1c2UgZm9yIHNlcGFyYXRpbmcgdGhlIHN0cmluZy5cbiAqIEBwYXJhbSB7TnVtYmVyfSBbbGltaXRdIE1heGltdW0gbnVtYmVyIG9mIGl0ZW1zIHRvIGluY2x1ZGUgaW4gdGhlIHJlc3VsdCBhcnJheS5cbiAqIEByZXR1cm5zIHtBcnJheX0gQXJyYXkgb2Ygc3Vic3RyaW5ncy5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQmFzaWMgdXNlXG4gKiBzcGxpdCgnYSBiIGMgZCcsICcgJyk7XG4gKiAvLyAtPiBbJ2EnLCAnYicsICdjJywgJ2QnXVxuICpcbiAqIC8vIFdpdGggbGltaXRcbiAqIHNwbGl0KCdhIGIgYyBkJywgJyAnLCAyKTtcbiAqIC8vIC0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBCYWNrcmVmZXJlbmNlcyBpbiByZXN1bHQgYXJyYXlcbiAqIHNwbGl0KCcuLndvcmQxIHdvcmQyLi4nLCAvKFthLXpdKykoXFxkKykvaSk7XG4gKiAvLyAtPiBbJy4uJywgJ3dvcmQnLCAnMScsICcgJywgJ3dvcmQnLCAnMicsICcuLiddXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uIHNwbGl0KHVuZGVmKSB7XG5cbiAgdmFyIG5hdGl2ZVNwbGl0ID0gU3RyaW5nLnByb3RvdHlwZS5zcGxpdCxcbiAgICBjb21wbGlhbnRFeGVjTnBjZyA9IC8oKT8/Ly5leGVjKFwiXCIpWzFdID09PSB1bmRlZixcbiAgICAvLyBOUENHOiBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cFxuICAgIHNlbGY7XG5cbiAgc2VsZiA9IGZ1bmN0aW9uKHN0ciwgc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgYG5hdGl2ZVNwbGl0YFxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc2VwYXJhdG9yKSAhPT0gXCJbb2JqZWN0IFJlZ0V4cF1cIikge1xuICAgICAgcmV0dXJuIG5hdGl2ZVNwbGl0LmNhbGwoc3RyLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9XG4gICAgdmFyIG91dHB1dCA9IFtdLFxuICAgICAgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyBcImlcIiA6IFwiXCIpICsgKHNlcGFyYXRvci5tdWx0aWxpbmUgPyBcIm1cIiA6IFwiXCIpICsgKHNlcGFyYXRvci5leHRlbmRlZCA/IFwieFwiIDogXCJcIikgKyAvLyBQcm9wb3NlZCBmb3IgRVM2XG4gICAgICAoc2VwYXJhdG9yLnN0aWNreSA/IFwieVwiIDogXCJcIiksXG4gICAgICAvLyBGaXJlZm94IDMrXG4gICAgICBsYXN0TGFzdEluZGV4ID0gMCxcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICBzZXBhcmF0b3IgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgXCJnXCIpLFxuICAgICAgc2VwYXJhdG9yMiwgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aDtcbiAgICBzdHIgKz0gXCJcIjsgLy8gVHlwZS1jb252ZXJ0XG4gICAgaWYgKCFjb21wbGlhbnRFeGVjTnBjZykge1xuICAgICAgLy8gRG9lc24ndCBuZWVkIGZsYWdzIGd5LCBidXQgdGhleSBkb24ndCBodXJ0XG4gICAgICBzZXBhcmF0b3IyID0gbmV3IFJlZ0V4cChcIl5cIiArIHNlcGFyYXRvci5zb3VyY2UgKyBcIiQoPyFcXFxccylcIiwgZmxhZ3MpO1xuICAgIH1cbiAgICAvKiBWYWx1ZXMgZm9yIGBsaW1pdGAsIHBlciB0aGUgc3BlYzpcbiAgICAgKiBJZiB1bmRlZmluZWQ6IDQyOTQ5NjcyOTUgLy8gTWF0aC5wb3coMiwgMzIpIC0gMVxuICAgICAqIElmIDAsIEluZmluaXR5LCBvciBOYU46IDBcbiAgICAgKiBJZiBwb3NpdGl2ZSBudW1iZXI6IGxpbWl0ID0gTWF0aC5mbG9vcihsaW1pdCk7IGlmIChsaW1pdCA+IDQyOTQ5NjcyOTUpIGxpbWl0IC09IDQyOTQ5NjcyOTY7XG4gICAgICogSWYgbmVnYXRpdmUgbnVtYmVyOiA0Mjk0OTY3Mjk2IC0gTWF0aC5mbG9vcihNYXRoLmFicyhsaW1pdCkpXG4gICAgICogSWYgb3RoZXI6IFR5cGUtY29udmVydCwgdGhlbiB1c2UgdGhlIGFib3ZlIHJ1bGVzXG4gICAgICovXG4gICAgbGltaXQgPSBsaW1pdCA9PT0gdW5kZWYgPyAtMSA+Pj4gMCA6IC8vIE1hdGgucG93KDIsIDMyKSAtIDFcbiAgICBsaW1pdCA+Pj4gMDsgLy8gVG9VaW50MzIobGltaXQpXG4gICAgd2hpbGUgKG1hdGNoID0gc2VwYXJhdG9yLmV4ZWMoc3RyKSkge1xuICAgICAgLy8gYHNlcGFyYXRvci5sYXN0SW5kZXhgIGlzIG5vdCByZWxpYWJsZSBjcm9zcy1icm93c2VyXG4gICAgICBsYXN0SW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgIG91dHB1dC5wdXNoKHN0ci5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYCBmb3JcbiAgICAgICAgLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXBzXG4gICAgICAgIGlmICghY29tcGxpYW50RXhlY05wY2cgJiYgbWF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgICAgIG1hdGNoWzBdLnJlcGxhY2Uoc2VwYXJhdG9yMiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWYpIHtcbiAgICAgICAgICAgICAgICBtYXRjaFtpXSA9IHVuZGVmO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoLmxlbmd0aCA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgaWYgKG91dHB1dC5sZW5ndGggPj0gbGltaXQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlcGFyYXRvci5sYXN0SW5kZXggPT09IG1hdGNoLmluZGV4KSB7XG4gICAgICAgIHNlcGFyYXRvci5sYXN0SW5kZXgrKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyLmxlbmd0aCkge1xuICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvci50ZXN0KFwiXCIpKSB7XG4gICAgICAgIG91dHB1dC5wdXNoKFwiXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaChzdHIuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0Lmxlbmd0aCA+IGxpbWl0ID8gb3V0cHV0LnNsaWNlKDAsIGxpbWl0KSA6IG91dHB1dDtcbiAgfTtcblxuICByZXR1cm4gc2VsZjtcbn0pKCk7XG4iLCIvLyBjb250YWlucywgYWRkLCByZW1vdmUsIHRvZ2dsZVxudmFyIGluZGV4b2YgPSByZXF1aXJlKCdpbmRleG9mJylcblxubW9kdWxlLmV4cG9ydHMgPSBDbGFzc0xpc3RcblxuZnVuY3Rpb24gQ2xhc3NMaXN0KGVsZW0pIHtcbiAgICB2YXIgY2wgPSBlbGVtLmNsYXNzTGlzdFxuXG4gICAgaWYgKGNsKSB7XG4gICAgICAgIHJldHVybiBjbFxuICAgIH1cblxuICAgIHZhciBjbGFzc0xpc3QgPSB7XG4gICAgICAgIGFkZDogYWRkXG4gICAgICAgICwgcmVtb3ZlOiByZW1vdmVcbiAgICAgICAgLCBjb250YWluczogY29udGFpbnNcbiAgICAgICAgLCB0b2dnbGU6IHRvZ2dsZVxuICAgICAgICAsIHRvU3RyaW5nOiAkdG9TdHJpbmdcbiAgICAgICAgLCBsZW5ndGg6IDBcbiAgICAgICAgLCBpdGVtOiBpdGVtXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTGlzdFxuXG4gICAgZnVuY3Rpb24gYWRkKHRva2VuKSB7XG4gICAgICAgIHZhciBsaXN0ID0gZ2V0VG9rZW5zKClcbiAgICAgICAgaWYgKGluZGV4b2YobGlzdCwgdG9rZW4pID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxpc3QucHVzaCh0b2tlbilcbiAgICAgICAgc2V0VG9rZW5zKGxpc3QpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlKHRva2VuKSB7XG4gICAgICAgIHZhciBsaXN0ID0gZ2V0VG9rZW5zKClcbiAgICAgICAgICAgICwgaW5kZXggPSBpbmRleG9mKGxpc3QsIHRva2VuKVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIHNldFRva2VucyhsaXN0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnRhaW5zKHRva2VuKSB7XG4gICAgICAgIHJldHVybiBpbmRleG9mKGdldFRva2VucygpLCB0b2tlbikgPiAtMVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZSh0b2tlbikge1xuICAgICAgICBpZiAoY29udGFpbnModG9rZW4pKSB7XG4gICAgICAgICAgICByZW1vdmUodG9rZW4pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZCh0b2tlbilcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBlbGVtLmNsYXNzTmFtZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGl0ZW0oaW5kZXgpIHtcbiAgICAgICAgdmFyIHRva2VucyA9IGdldFRva2VucygpXG4gICAgICAgIHJldHVybiB0b2tlbnNbaW5kZXhdIHx8IG51bGxcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUb2tlbnMoKSB7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBlbGVtLmNsYXNzTmFtZVxuXG4gICAgICAgIHJldHVybiBmaWx0ZXIoY2xhc3NOYW1lLnNwbGl0KFwiIFwiKSwgaXNUcnV0aHkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VG9rZW5zKGxpc3QpIHtcbiAgICAgICAgdmFyIGxlbmd0aCA9IGxpc3QubGVuZ3RoXG5cbiAgICAgICAgZWxlbS5jbGFzc05hbWUgPSBsaXN0LmpvaW4oXCIgXCIpXG4gICAgICAgIGNsYXNzTGlzdC5sZW5ndGggPSBsZW5ndGhcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNsYXNzTGlzdFtpXSA9IGxpc3RbaV1cbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBsaXN0W2xlbmd0aF1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZpbHRlciAoYXJyLCBmbikge1xuICAgIHZhciByZXQgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmbihhcnJbaV0pKSByZXQucHVzaChhcnJbaV0pXG4gICAgfVxuICAgIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaXNUcnV0aHkodmFsdWUpIHtcbiAgICByZXR1cm4gISF2YWx1ZVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBpc1ZhbGlkU3RyaW5nID0gZnVuY3Rpb24gaXNWYWxpZFN0cmluZyhwYXJhbSkge1xuICByZXR1cm4gdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyAmJiBwYXJhbS5sZW5ndGggPiAwO1xufTtcblxudmFyIHN0YXJ0c1dpdGggPSBmdW5jdGlvbiBzdGFydHNXaXRoKHN0cmluZywgc3RhcnQpIHtcbiAgcmV0dXJuIHN0cmluZ1swXSA9PT0gc3RhcnQ7XG59O1xuXG52YXIgaXNTZWxlY3RvciA9IGZ1bmN0aW9uIGlzU2VsZWN0b3IocGFyYW0pIHtcbiAgcmV0dXJuIGlzVmFsaWRTdHJpbmcocGFyYW0pICYmIChzdGFydHNXaXRoKHBhcmFtLCAnLicpIHx8IHN0YXJ0c1dpdGgocGFyYW0sICcjJykpO1xufTtcblxudmFyIG5vZGUgPSBmdW5jdGlvbiBub2RlKGgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YWdOYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChmaXJzdCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIHJlc3RbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNTZWxlY3RvcihmaXJzdCkpIHtcbiAgICAgICAgcmV0dXJuIGguYXBwbHkodW5kZWZpbmVkLCBbdGFnTmFtZSArIGZpcnN0XS5jb25jYXQocmVzdCkpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBoKHRhZ05hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGguYXBwbHkodW5kZWZpbmVkLCBbdGFnTmFtZSwgZmlyc3RdLmNvbmNhdChyZXN0KSk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn07XG5cbnZhciBUQUdfTkFNRVMgPSBbJ2EnLCAnYWJicicsICdhY3JvbnltJywgJ2FkZHJlc3MnLCAnYXBwbGV0JywgJ2FyZWEnLCAnYXJ0aWNsZScsICdhc2lkZScsICdhdWRpbycsICdiJywgJ2Jhc2UnLCAnYmFzZWZvbnQnLCAnYmRpJywgJ2JkbycsICdiZ3NvdW5kJywgJ2JpZycsICdibGluaycsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnYnInLCAnYnV0dG9uJywgJ2NhbnZhcycsICdjYXB0aW9uJywgJ2NlbnRlcicsICdjaXRlJywgJ2NvZGUnLCAnY29sJywgJ2NvbGdyb3VwJywgJ2NvbW1hbmQnLCAnY29udGVudCcsICdkYXRhJywgJ2RhdGFsaXN0JywgJ2RkJywgJ2RlbCcsICdkZXRhaWxzJywgJ2RmbicsICdkaWFsb2cnLCAnZGlyJywgJ2RpdicsICdkbCcsICdkdCcsICdlbGVtZW50JywgJ2VtJywgJ2VtYmVkJywgJ2ZpZWxkc2V0JywgJ2ZpZ2NhcHRpb24nLCAnZmlndXJlJywgJ2ZvbnQnLCAnZm9vdGVyJywgJ2Zvcm0nLCAnZnJhbWUnLCAnZnJhbWVzZXQnLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZCcsICdoZWFkZXInLCAnaGdyb3VwJywgJ2hyJywgJ2h0bWwnLCAnaScsICdpZnJhbWUnLCAnaW1hZ2UnLCAnaW1nJywgJ2lucHV0JywgJ2lucycsICdpc2luZGV4JywgJ2tiZCcsICdrZXlnZW4nLCAnbGFiZWwnLCAnbGVnZW5kJywgJ2xpJywgJ2xpbmsnLCAnbGlzdGluZycsICdtYWluJywgJ21hcCcsICdtYXJrJywgJ21hcnF1ZWUnLCAnbWF0aCcsICdtZW51JywgJ21lbnVpdGVtJywgJ21ldGEnLCAnbWV0ZXInLCAnbXVsdGljb2wnLCAnbmF2JywgJ25leHRpZCcsICdub2JyJywgJ25vZW1iZWQnLCAnbm9mcmFtZXMnLCAnbm9zY3JpcHQnLCAnb2JqZWN0JywgJ29sJywgJ29wdGdyb3VwJywgJ29wdGlvbicsICdvdXRwdXQnLCAncCcsICdwYXJhbScsICdwaWN0dXJlJywgJ3BsYWludGV4dCcsICdwcmUnLCAncHJvZ3Jlc3MnLCAncScsICdyYicsICdyYmMnLCAncnAnLCAncnQnLCAncnRjJywgJ3J1YnknLCAncycsICdzYW1wJywgJ3NjcmlwdCcsICdzZWN0aW9uJywgJ3NlbGVjdCcsICdzaGFkb3cnLCAnc2xvdCcsICdzbWFsbCcsICdzb3VyY2UnLCAnc3BhY2VyJywgJ3NwYW4nLCAnc3RyaWtlJywgJ3N0cm9uZycsICdzdHlsZScsICdzdWInLCAnc3VtbWFyeScsICdzdXAnLCAnc3ZnJywgJ3RhYmxlJywgJ3Rib2R5JywgJ3RkJywgJ3RlbXBsYXRlJywgJ3RleHRhcmVhJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpbWUnLCAndGl0bGUnLCAndHInLCAndHJhY2snLCAndHQnLCAndScsICd1bCcsICd2YXInLCAndmlkZW8nLCAnd2JyJywgJ3htcCddO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaCkge1xuICB2YXIgY3JlYXRlVGFnID0gbm9kZShoKTtcbiAgdmFyIGV4cG9ydGVkID0geyBUQUdfTkFNRVM6IFRBR19OQU1FUywgaXNTZWxlY3RvcjogaXNTZWxlY3RvciwgY3JlYXRlVGFnOiBjcmVhdGVUYWcgfTtcbiAgVEFHX05BTUVTLmZvckVhY2goZnVuY3Rpb24gKG4pIHtcbiAgICBleHBvcnRlZFtuXSA9IGNyZWF0ZVRhZyhuKTtcbiAgfSk7XG4gIHJldHVybiBleHBvcnRlZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsInZhciBzcGxpdCA9IHJlcXVpcmUoJ2Jyb3dzZXItc3BsaXQnKVxudmFyIENsYXNzTGlzdCA9IHJlcXVpcmUoJ2NsYXNzLWxpc3QnKVxuXG52YXIgdyA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gcmVxdWlyZSgnaHRtbC1lbGVtZW50JykgOiB3aW5kb3dcbnZhciBkb2N1bWVudCA9IHcuZG9jdW1lbnRcbnZhciBUZXh0ID0gdy5UZXh0XG5cbmZ1bmN0aW9uIGNvbnRleHQgKCkge1xuXG4gIHZhciBjbGVhbnVwRnVuY3MgPSBbXVxuXG4gIGZ1bmN0aW9uIGgoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyksIGUgPSBudWxsXG4gICAgZnVuY3Rpb24gaXRlbSAobCkge1xuICAgICAgdmFyIHJcbiAgICAgIGZ1bmN0aW9uIHBhcnNlQ2xhc3MgKHN0cmluZykge1xuICAgICAgICAvLyBPdXIgbWluaW1hbCBwYXJzZXIgZG9lc27igJl0IHVuZGVyc3RhbmQgZXNjYXBpbmcgQ1NTIHNwZWNpYWxcbiAgICAgICAgLy8gY2hhcmFjdGVycyBsaWtlIGAjYC4gRG9u4oCZdCB1c2UgdGhlbS4gTW9yZSByZWFkaW5nOlxuICAgICAgICAvLyBodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvY3NzLWVzY2FwZXMgLlxuXG4gICAgICAgIHZhciBtID0gc3BsaXQoc3RyaW5nLCAvKFtcXC4jXT9bXlxccyMuXSspLylcbiAgICAgICAgaWYoL15cXC58Iy8udGVzdChtWzFdKSlcbiAgICAgICAgICBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZm9yRWFjaChtLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgIHZhciBzID0gdi5zdWJzdHJpbmcoMSx2Lmxlbmd0aClcbiAgICAgICAgICBpZighdikgcmV0dXJuXG4gICAgICAgICAgaWYoIWUpXG4gICAgICAgICAgICBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh2KVxuICAgICAgICAgIGVsc2UgaWYgKHZbMF0gPT09ICcuJylcbiAgICAgICAgICAgIENsYXNzTGlzdChlKS5hZGQocylcbiAgICAgICAgICBlbHNlIGlmICh2WzBdID09PSAnIycpXG4gICAgICAgICAgICBlLnNldEF0dHJpYnV0ZSgnaWQnLCBzKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZihsID09IG51bGwpXG4gICAgICAgIDtcbiAgICAgIGVsc2UgaWYoJ3N0cmluZycgPT09IHR5cGVvZiBsKSB7XG4gICAgICAgIGlmKCFlKVxuICAgICAgICAgIHBhcnNlQ2xhc3MobClcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGUuYXBwZW5kQ2hpbGQociA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGwpKVxuICAgICAgfVxuICAgICAgZWxzZSBpZignbnVtYmVyJyA9PT0gdHlwZW9mIGxcbiAgICAgICAgfHwgJ2Jvb2xlYW4nID09PSB0eXBlb2YgbFxuICAgICAgICB8fCBsIGluc3RhbmNlb2YgRGF0ZVxuICAgICAgICB8fCBsIGluc3RhbmNlb2YgUmVnRXhwICkge1xuICAgICAgICAgIGUuYXBwZW5kQ2hpbGQociA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGwudG9TdHJpbmcoKSkpXG4gICAgICB9XG4gICAgICAvL3RoZXJlIG1pZ2h0IGJlIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuICAgICAgZWxzZSBpZiAoaXNBcnJheShsKSlcbiAgICAgICAgZm9yRWFjaChsLCBpdGVtKVxuICAgICAgZWxzZSBpZihpc05vZGUobCkpXG4gICAgICAgIGUuYXBwZW5kQ2hpbGQociA9IGwpXG4gICAgICBlbHNlIGlmKGwgaW5zdGFuY2VvZiBUZXh0KVxuICAgICAgICBlLmFwcGVuZENoaWxkKHIgPSBsKVxuICAgICAgZWxzZSBpZiAoJ29iamVjdCcgPT09IHR5cGVvZiBsKSB7XG4gICAgICAgIGZvciAodmFyIGsgaW4gbCkge1xuICAgICAgICAgIGlmKCdmdW5jdGlvbicgPT09IHR5cGVvZiBsW2tdKSB7XG4gICAgICAgICAgICBpZigvXm9uXFx3Ky8udGVzdChrKSkge1xuICAgICAgICAgICAgICAoZnVuY3Rpb24gKGssIGwpIHsgLy8gY2FwdHVyZSBrLCBsIGluIHRoZSBjbG9zdXJlXG4gICAgICAgICAgICAgICAgaWYgKGUuYWRkRXZlbnRMaXN0ZW5lcil7XG4gICAgICAgICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoay5zdWJzdHJpbmcoMiksIGxba10sIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgY2xlYW51cEZ1bmNzLnB1c2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgZS5yZW1vdmVFdmVudExpc3RlbmVyKGsuc3Vic3RyaW5nKDIpLCBsW2tdLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICBlLmF0dGFjaEV2ZW50KGssIGxba10pXG4gICAgICAgICAgICAgICAgICBjbGVhbnVwRnVuY3MucHVzaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBlLmRldGFjaEV2ZW50KGssIGxba10pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkoaywgbClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIG9ic2VydmFibGVcbiAgICAgICAgICAgICAgZVtrXSA9IGxba10oKVxuICAgICAgICAgICAgICBjbGVhbnVwRnVuY3MucHVzaChsW2tdKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgZVtrXSA9IHZcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoayA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgaWYoJ3N0cmluZycgPT09IHR5cGVvZiBsW2tdKSB7XG4gICAgICAgICAgICAgIGUuc3R5bGUuY3NzVGV4dCA9IGxba11cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBmb3IgKHZhciBzIGluIGxba10pIChmdW5jdGlvbihzLCB2KSB7XG4gICAgICAgICAgICAgICAgaWYoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHYpIHtcbiAgICAgICAgICAgICAgICAgIC8vIG9ic2VydmFibGVcbiAgICAgICAgICAgICAgICAgIGUuc3R5bGUuc2V0UHJvcGVydHkocywgdigpKVxuICAgICAgICAgICAgICAgICAgY2xlYW51cEZ1bmNzLnB1c2godihmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuc3R5bGUuc2V0UHJvcGVydHkocywgdmFsKVxuICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBsW2tdW3NdLm1hdGNoKC8oLiopXFxXKyFpbXBvcnRhbnRcXFcqJC8pO1xuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuc3R5bGUuc2V0UHJvcGVydHkocywgbWF0Y2hbMV0sICdpbXBvcnRhbnQnKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdHlsZS5zZXRQcm9wZXJ0eShzLCBsW2tdW3NdKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KShzLCBsW2tdW3NdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZihrID09PSAnYXR0cnMnKSB7XG4gICAgICAgICAgICBmb3IgKHZhciB2IGluIGxba10pIHtcbiAgICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUodiwgbFtrXVt2XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoay5zdWJzdHIoMCwgNSkgPT09IFwiZGF0YS1cIikge1xuICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoaywgbFtrXSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZVtrXSA9IGxba11cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGwpIHtcbiAgICAgICAgLy9hc3N1bWUgaXQncyBhbiBvYnNlcnZhYmxlIVxuICAgICAgICB2YXIgdiA9IGwoKVxuICAgICAgICBlLmFwcGVuZENoaWxkKHIgPSBpc05vZGUodikgPyB2IDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodikpXG5cbiAgICAgICAgY2xlYW51cEZ1bmNzLnB1c2gobChmdW5jdGlvbiAodikge1xuICAgICAgICAgIGlmKGlzTm9kZSh2KSAmJiByLnBhcmVudEVsZW1lbnQpXG4gICAgICAgICAgICByLnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKHYsIHIpLCByID0gdlxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHIudGV4dENvbnRlbnQgPSB2XG4gICAgICAgIH0pKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gclxuICAgIH1cbiAgICB3aGlsZShhcmdzLmxlbmd0aClcbiAgICAgIGl0ZW0oYXJncy5zaGlmdCgpKVxuXG4gICAgcmV0dXJuIGVcbiAgfVxuXG4gIGguY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsZWFudXBGdW5jcy5sZW5ndGg7IGkrKyl7XG4gICAgICBjbGVhbnVwRnVuY3NbaV0oKVxuICAgIH1cbiAgICBjbGVhbnVwRnVuY3MubGVuZ3RoID0gMFxuICB9XG5cbiAgcmV0dXJuIGhcbn1cblxudmFyIGggPSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRleHQoKVxuaC5jb250ZXh0ID0gY29udGV4dFxuXG5mdW5jdGlvbiBpc05vZGUgKGVsKSB7XG4gIHJldHVybiBlbCAmJiBlbC5ub2RlTmFtZSAmJiBlbC5ub2RlVHlwZVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoIChhcnIsIGZuKSB7XG4gIGlmIChhcnIuZm9yRWFjaCkgcmV0dXJuIGFyci5mb3JFYWNoKGZuKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgZm4oYXJyW2ldLCBpKVxufVxuXG5mdW5jdGlvbiBpc0FycmF5IChhcnIpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSdcbn1cblxuXG4iLCJcbnZhciBpbmRleE9mID0gW10uaW5kZXhPZjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIG9iail7XG4gIGlmIChpbmRleE9mKSByZXR1cm4gYXJyLmluZGV4T2Yob2JqKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoYXJyW2ldID09PSBvYmopIHJldHVybiBpO1xuICB9XG4gIHJldHVybiAtMTtcbn07IiwiaW1wb3J0IHsgTW9kZWwgfSBmcm9tIFwiLi9tb2RlbFwiXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4vbWVzc2FnZXNcIlxuXG5leHBvcnQgY29uc3QgYXBwID0gKFxuICAgIGluaXRNb2RlbDogTW9kZWwsXG4gICAgdmlldzogKG1vZGVsOiBNb2RlbCwgZGlzcGF0Y2g6IChtZXNzYWdlOiBNZXNzYWdlKSA9PiB2b2lkKSA9PiBIVE1MRWxlbWVudCxcbiAgICB1cGRhdGU6IChtb2RlbDogTW9kZWwsIG1lc3NhZ2U6IE1lc3NhZ2UpID0+IE1vZGVsLFxuICAgIG5vZGU6IEhUTUxFbGVtZW50XG4pID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IChtZXNzYWdlOiBNZXNzYWdlKTogdm9pZCA9PiB7XG4gICAgICAgIG1vZGVsID0gdXBkYXRlKG1vZGVsLCBtZXNzYWdlKVxuICAgICAgICBjb25zdCB1cGRhdGVkVmlldyA9IHZpZXcobW9kZWwsIGRpc3BhdGNoKVxuICAgICAgICBub2RlLnJlcGxhY2VDaGlsZCh1cGRhdGVkVmlldywgY3VycmVudFZpZXcpXG4gICAgICAgIGN1cnJlbnRWaWV3ID0gdXBkYXRlZFZpZXdcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG1vZGVsKSlcbiAgICB9XG5cbiAgICBsZXQgbW9kZWwgPSBpbml0TW9kZWxcbiAgICBsZXQgY3VycmVudFZpZXcgPSB2aWV3KG1vZGVsLCBkaXNwYXRjaClcbiAgICBub2RlLmFwcGVuZENoaWxkKGN1cnJlbnRWaWV3KVxufSIsImV4cG9ydCBjb25zdCBwbGF0ZVdpZHRoID0gODBcbmV4cG9ydCBjb25zdCBwbGF0ZUhlaWdodCA9IDE0XG5cbmV4cG9ydCBjb25zdCBmb250TWFwID0ge1xuICAgIFwiU2NyaXB0XCI6IFwiQ3Vyc2l2XCIsXG4gICAgXCJDbGFzc2ljIFNjcmlwdFwiOiBcIkRhbmNpbmcgU2NyaXB0XCIsXG4gICAgXCJJdGFsbGljXCI6IFwiR2VudGl1bSBCb29rIFBsdXMgSXRhbGljXCIsXG4gICAgXCJTZXJpZlwiOiBcIk1lcnJpd2V0aGVyXCIsXG4gICAgXCJTYW5zIFNlcmlmXCI6IFwiUm9ib3RvXCIsXG4gICAgXCJIYW5kd3JpdHRlblwiOiBcIkNhdmVhdFwiXG59IiwiaW1wb3J0IHsgY3JlYXRlRW1wdHlQbGF0ZUFycmF5IH0gZnJvbSBcIi4vdXRpbHNcIlxuXG5leHBvcnQgdHlwZSBNb2RlbCA9IHtcbiAgICBwbGF0ZUxpc3Q6IFBsYXRlW10sXG4gICAgc2VsZWN0ZWRQbGF0ZUluZGV4OiBudW1iZXIgfCBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBpbml0TW9kZWw6IE1vZGVsID0ge1xuICAgIHBsYXRlTGlzdDogY3JlYXRlRW1wdHlQbGF0ZUFycmF5KCksXG4gICAgc2VsZWN0ZWRQbGF0ZUluZGV4OiBudWxsXG59XG5cbmV4cG9ydCB0eXBlIFBsYXRlID0ge1xuICAgIHRleHQ6IFN0cmluZztcbiAgICBmb250OiBGb250O1xufVxuXG50eXBlIEZvbnQgPVxuICAgIHwgXCJTY3JpcHRcIlxuICAgIHwgXCJDbGFzc2ljIFNjcmlwdFwiXG4gICAgfCBcIkl0YWxsaWNcIlxuICAgIHwgXCJTZXJpZlwiXG4gICAgfCBcIlNhbnMgU2VyaWZcIlxuICAgIHwgXCJIYW5kd3JpdHRlblwiXG4iLCJpbXBvcnQgeyBNb2RlbCB9IGZyb20gXCIuL21vZGVsXCJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi9tZXNzYWdlc1wiXG5cbmV4cG9ydCBjb25zdCB1cGRhdGUgPSAobW9kZWw6IE1vZGVsLCBtZXNzYWdlOiBNZXNzYWdlKTogTW9kZWwgPT4ge1xuICAgIGNvbnN0IFttZXNzYWdlVHlwZSwgLi4ucmVzdF0gPSBtZXNzYWdlXG5cbiAgICBzd2l0Y2ggKG1lc3NhZ2VUeXBlKSB7XG4gICAgICAgIGNhc2UgXCJzZWxlY3QgcGxhdGVcIjoge1xuICAgICAgICAgICAgY29uc3QgW2luZGV4XSA9IHJlc3QgYXMgW251bWJlcl1cbiAgICAgICAgICAgIHJldHVybiB7IC4uLm1vZGVsLCBzZWxlY3RlZFBsYXRlSW5kZXg6IGluZGV4fVxuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJkZXNlbGVjdCBwbGF0ZVwiOiB7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5tb2RlbCwgc2VsZWN0ZWRQbGF0ZUluZGV4OiBudWxsfVxuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJlZGl0IHBsYXRlIHRleHRcIjoge1xuICAgICAgICAgICAgY29uc3QgW3RhcmdldEluZGV4LCB0ZXh0XSA9IHJlc3QgYXMgW251bWJlciwgc3RyaW5nXVxuICAgICAgICAgICAgY29uc3QgbmV3UGxhdGVMaXN0ID0gbW9kZWwucGxhdGVMaXN0Lm1hcCgocGxhdGUsIGluZGV4KSA9PiBcbiAgICAgICAgICAgICAgICBpbmRleCA9PT0gdGFyZ2V0SW5kZXggPyB7IC4uLnBsYXRlLCB0ZXh0IH0gOiBwbGF0ZSBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiB7IC4uLm1vZGVsLCBwbGF0ZUxpc3Q6IG5ld1BsYXRlTGlzdH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBQbGF0ZSB9IGZyb20gXCIuL21vZGVsXCJcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUVtcHR5UGxhdGVBcnJheSA9ICgpOiBQbGF0ZVtdID0+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTYgfSwgKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGV4dDogXCJ0ZXN0XCIsXG4gICAgICAgICAgICBmb250OiBcIlNjcmlwdFwiLFxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldFBsYXRlUG9zaXRpb24gPSAoaW5kZXg6IG51bWJlciwgY29scyA9IDIsIG1tID0gNCk6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSA9PiB7XG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpbmRleCAvIGNvbHMpO1xuICAgIGNvbnN0IGNvbCA9IGluZGV4ICUgY29scztcblxuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGNvbCAqIDgwICogbW0sXG4gICAgICAgIHk6IHJvdyAqIDE0ICogbW0sXG4gICAgfVxufVxuIiwiaW1wb3J0IGggZnJvbSAnaHlwZXJzY3JpcHQnXG5pbXBvcnQgaGggZnJvbSAnaHlwZXJzY3JpcHQtaGVscGVycydcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi9tb2RlbCdcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2VzJ1xuaW1wb3J0IHsgUGxhdGUgfSBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IHsgcGxhdGVXaWR0aCwgcGxhdGVIZWlnaHQsIGZvbnRNYXAgfSBmcm9tICcuL2RhdGEnXG5pbXBvcnQgeyBnZXRQbGF0ZVBvc2l0aW9uIH0gZnJvbSAnLi91dGlscydcblxuY29uc3QgeyBkaXYsIGJ1dHRvbiwgc3ZnLCBwcmUgfSA9IGhoKGgpXG5cbmV4cG9ydCBjb25zdCB2aWV3ID0gKG1vZGVsOiBNb2RlbCwgZGlzcGF0Y2g6IGFueSkgPT4ge1xuICAgIGNvbnN0IHBsYXRlcyA9IG1vZGVsLnBsYXRlTGlzdC5tYXAoKHBsYXRlLCBpKSA9PlxuICAgICAgICBkaXYoeyBzdHlsZTogXCJwb3NpdGlvbjpyZWxhdGl2ZTtcIiB9LCBbXG4gICAgICAgICAgICBwbGF0ZVZpZXcocGxhdGUsIGksIGRpc3BhdGNoKSxcbiAgICAgICAgICAgIHJlbmRlckVkaXRpbmdJbnB1dChtb2RlbCwgcGxhdGUsIGksIGRpc3BhdGNoKVxuICAgICAgICBdKVxuICAgIClcbiAgICByZXR1cm4gZGl2KHBsYXRlcylcbn1cblxuY29uc3QgcGxhdGVWaWV3ID0gKHBsYXRlOiBQbGF0ZSwgaW5kZXg6IG51bWJlciwgZGlzcGF0Y2g6IChtZXNzYWdlOiBNZXNzYWdlKSA9PiB2b2lkKSA9PiB7XG4gICAgLy9pZiAocGxhdGUuc2VsZWN0ZWQpIHJldHVybiBudWxsXG4gICAgY29uc3QgeyB4LCB5IH0gPSBnZXRQbGF0ZVBvc2l0aW9uKGluZGV4KVxuXG4gICAgcmV0dXJuIHN2Zyh7XG4gICAgICAgIHdpZHRoOiBwbGF0ZVdpZHRoLCBcbiAgICAgICAgaGVpZ2h0OiBwbGF0ZUhlaWdodCxcbiAgICAgICAgc3R5bGU6IGBcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDoke3h9cHg7XG4gICAgICAgICAgICB0b3A6JHt5fXB4O1xuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgIGAsXG4gICAgICAgIG9uY2xpY2s6ICgpID0+IGRpc3BhdGNoKFtcInNlbGVjdCBwbGF0ZVwiLCBpbmRleF0pXG4gICAgfSwgW1xuICAgICAgICBoKFwicmVjdFwiLCB7XG4gICAgICAgICAgICB4OiAwLCB5OiAwLFxuICAgICAgICAgICAgd2lkdGg6IHBsYXRlV2lkdGgsIFxuICAgICAgICAgICAgaGVpZ2h0OiBwbGF0ZUhlaWdodCxcbiAgICAgICAgICAgIHN0cm9rZTogXCIjODg4XCIsICAgICAvLyBub3QgYmxhY2ssIG5vdCBlbmdyYXZlZFxuICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiAxXG4gICAgICAgIH0pLFxuICAgICAgICBoKFwidGV4dFwiLCB7XG4gICAgICAgICAgICB4OiBwbGF0ZVdpZHRoIC8gMixcbiAgICAgICAgICAgIHk6IHBsYXRlSGVpZ2h0IC8gMixcbiAgICAgICAgICAgIFwiZG9taW5hbnQtYmFzZWxpbmVcIjogXCJtaWRkbGVcIixcbiAgICAgICAgICAgIFwidGV4dC1hbmNob3JcIjogXCJtaWRkbGVcIixcbiAgICAgICAgICAgIFwiZm9udC1mYW1pbHlcIjogZm9udE1hcFtwbGF0ZS5mb250XSxcbiAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTJweFwiLFxuICAgICAgICAgICAgZmlsbDogXCJibGFja1wiICAgICAgLy8gZW5ncmF2aW5nIGNvbG9yXG4gICAgICAgIH0sIHBsYXRlLnRleHQpXG4gICAgXSlcbn1cblxuY29uc3QgcmVuZGVyRWRpdGluZ0lucHV0ID0gKFxuICAgIG1vZGVsOiBNb2RlbCxcbiAgICBwbGF0ZTogUGxhdGUsXG4gICAgaW5kZXg6IG51bWJlcixcbiAgICBkaXNwYXRjaDogKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHZvaWRcbikgPT4ge1xuICAgIGlmIChtb2RlbC5zZWxlY3RlZFBsYXRlSW5kZXggIT09IGluZGV4KSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgeyB4LCB5IH0gPSBnZXRQbGF0ZVBvc2l0aW9uKGluZGV4KVxuXG4gICAgcmV0dXJuIGgoXCJmb3JtXCIsIHtcbiAgICAgICAgc3R5bGU6IGBcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6ICR7eH1weDtcbiAgICAgICAgICAgIHRvcDogJHt5fXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBgLFxuICAgICAgICBvbnN1Ym1pdDogKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgcGFnZSByZWxvYWRcbiAgICAgICAgICAgIGRpc3BhdGNoKFtcImRlc2VsZWN0IHBsYXRlXCIsIGluZGV4XSlcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaChcImlucHV0XCIsIHtcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgdmFsdWU6IHBsYXRlLnRleHQsXG4gICAgICAgICAgICBhdXRvZm9jdXM6IHRydWUsXG4gICAgICAgICAgICBzdHlsZTogYFxuICAgICAgICAgICAgICAgIHdpZHRoOiAke3BsYXRlV2lkdGh9cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAke3BsYXRlSGVpZ2h0fXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGAsXG4gICAgICAgICAgICBvbmlucHV0OiAoZTogYW55KSA9PlxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFtcImVkaXQgcGxhdGUgdGV4dFwiLCBpbmRleCwgZS50YXJnZXQudmFsdWVdKSxcbiAgICAgICAgICAgIG9ua2V5ZG93bjogKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goW1wiZGVzZWxlY3QgcGxhdGVcIiwgaW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgXSlcbn0iLCIvKiAoaWdub3JlZCkgKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4vYXBwXCJcbmltcG9ydCB7IGluaXRNb2RlbCB9IGZyb20gXCIuL21vZGVsXCJcbmltcG9ydCB7IHZpZXcgfSBmcm9tIFwiLi92aWV3XCJcbmltcG9ydCB7IHVwZGF0ZSB9IGZyb20gXCIuL3VwZGF0ZVwiXG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5ib2R5XG5cbmFwcChpbml0TW9kZWwsIHZpZXcsIHVwZGF0ZSwgcm9vdCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=