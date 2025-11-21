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
    };
    let model = initModel;
    let currentView = view(model, dispatch);
    node.appendChild(currentView);
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
    plateList: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEmptyPlateArray)()
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
    return model;
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
/* harmony export */   createEmptyPlateArray: () => (/* binding */ createEmptyPlateArray)
/* harmony export */ });
const createEmptyPlateArray = () => {
    return Array.from({ length: 16 }, (value, index) => {
        return {
            text: "",
            font: "Script"
        };
    });
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


const { div, button, svg, pre } = hyperscript_helpers__WEBPACK_IMPORTED_MODULE_1___default()((hyperscript__WEBPACK_IMPORTED_MODULE_0___default()));
const view = (model, dispatch) => {
    return pre(JSON.stringify(model, null, 2));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxlQUFlO0FBQzFCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ3pHRDtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxnREFBUzs7QUFFL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsR2E7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUZBQXlGLGFBQWE7QUFDdEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxvQzs7Ozs7Ozs7OztBQzlDQSxZQUFZLG1CQUFPLENBQUMsNERBQWU7QUFDbkMsZ0JBQWdCLG1CQUFPLENBQUMsc0RBQVk7O0FBRXBDLHdDQUF3QyxtQkFBTyxDQUFDLDJCQUFjO0FBQzlEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLGVBQWU7QUFDZixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNUpBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7OztBQ05PLE1BQU0sR0FBRyxHQUFHLENBQ2YsU0FBZ0IsRUFDaEIsSUFBeUUsRUFDekUsTUFBaUQsRUFDakQsSUFBaUIsRUFDbkIsRUFBRTtJQUNBLE1BQU0sUUFBUSxHQUFHLENBQUMsT0FBZ0IsRUFBUSxFQUFFO1FBQ3hDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztRQUM5QixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUM7UUFDM0MsV0FBVyxHQUFHLFdBQVc7SUFDN0IsQ0FBQztJQUVELElBQUksS0FBSyxHQUFHLFNBQVM7SUFDckIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7SUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7QUFDakMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQjhDO0FBTXhDLE1BQU0sU0FBUyxHQUFVO0lBQzVCLFNBQVMsRUFBRSw2REFBcUIsRUFBRTtDQUNyQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xNLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBWSxFQUFFLE9BQWdCLEVBQVMsRUFBRTtJQUM1RCxPQUFPLEtBQUs7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hNLE1BQU0scUJBQXFCLEdBQUcsR0FBWSxFQUFFO0lBQy9DLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUMvQyxPQUFPO1lBQ0gsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsUUFBUTtTQUNqQjtJQUNMLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDBCO0FBQ1M7QUFJcEMsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLDBEQUFFLENBQUMsb0RBQUMsQ0FBQztBQUVoQyxNQUFNLElBQUksR0FBRyxDQUFDLEtBQVksRUFBRSxRQUFvQyxFQUFlLEVBQUU7SUFDcEYsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlDLENBQUM7Ozs7Ozs7Ozs7O0FDVEQsZTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMkI7QUFDUTtBQUNOO0FBQ0k7QUFFakMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUk7QUFFMUIseUNBQUcsQ0FBQyw2Q0FBUyxFQUFFLHVDQUFJLEVBQUUsMkNBQU0sRUFBRSxJQUFJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy9icm93c2VyLXNwbGl0L2luZGV4LmpzIiwid2VicGFjazovL21hc3RlcmluZy10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL2NsYXNzLWxpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvLi9ub2RlX21vZHVsZXMvaHlwZXJzY3JpcHQtaGVscGVycy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL21hc3RlcmluZy10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL2h5cGVyc2NyaXB0L2luZGV4LmpzIiwid2VicGFjazovL21hc3RlcmluZy10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL2luZGV4b2YvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL21hc3RlcmluZy10eXBlc2NyaXB0Ly4vc3JjL21vZGVsLnRzIiwid2VicGFjazovL21hc3RlcmluZy10eXBlc2NyaXB0Ly4vc3JjL3VwZGF0ZS50cyIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC8uL3NyYy92aWV3LnRzIiwid2VicGFjazovL21hc3RlcmluZy10eXBlc2NyaXB0L2lnbm9yZWR8L2hvbWUvY2hyaXMvQ29kZS9MZWFybmluZy9VZGVteS9CcmFzcy1QbGF0ZXMvbm9kZV9tb2R1bGVzL2h5cGVyc2NyaXB0fGh0bWwtZWxlbWVudCIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21hc3RlcmluZy10eXBlc2NyaXB0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQ3Jvc3MtQnJvd3NlciBTcGxpdCAxLjEuMVxuICogQ29weXJpZ2h0IDIwMDctMjAxMiBTdGV2ZW4gTGV2aXRoYW4gPHN0ZXZlbmxldml0aGFuLmNvbT5cbiAqIEF2YWlsYWJsZSB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqIEVDTUFTY3JpcHQgY29tcGxpYW50LCB1bmlmb3JtIGNyb3NzLWJyb3dzZXIgc3BsaXQgbWV0aG9kXG4gKi9cblxuLyoqXG4gKiBTcGxpdHMgYSBzdHJpbmcgaW50byBhbiBhcnJheSBvZiBzdHJpbmdzIHVzaW5nIGEgcmVnZXggb3Igc3RyaW5nIHNlcGFyYXRvci4gTWF0Y2hlcyBvZiB0aGVcbiAqIHNlcGFyYXRvciBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSByZXN1bHQgYXJyYXkuIEhvd2V2ZXIsIGlmIGBzZXBhcmF0b3JgIGlzIGEgcmVnZXggdGhhdCBjb250YWluc1xuICogY2FwdHVyaW5nIGdyb3VwcywgYmFja3JlZmVyZW5jZXMgYXJlIHNwbGljZWQgaW50byB0aGUgcmVzdWx0IGVhY2ggdGltZSBgc2VwYXJhdG9yYCBpcyBtYXRjaGVkLlxuICogRml4ZXMgYnJvd3NlciBidWdzIGNvbXBhcmVkIHRvIHRoZSBuYXRpdmUgYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIGFuZCBjYW4gYmUgdXNlZCByZWxpYWJseVxuICogY3Jvc3MtYnJvd3Nlci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgU3RyaW5nIHRvIHNwbGl0LlxuICogQHBhcmFtIHtSZWdFeHB8U3RyaW5nfSBzZXBhcmF0b3IgUmVnZXggb3Igc3RyaW5nIHRvIHVzZSBmb3Igc2VwYXJhdGluZyB0aGUgc3RyaW5nLlxuICogQHBhcmFtIHtOdW1iZXJ9IFtsaW1pdF0gTWF4aW11bSBudW1iZXIgb2YgaXRlbXMgdG8gaW5jbHVkZSBpbiB0aGUgcmVzdWx0IGFycmF5LlxuICogQHJldHVybnMge0FycmF5fSBBcnJheSBvZiBzdWJzdHJpbmdzLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBCYXNpYyB1c2VcbiAqIHNwbGl0KCdhIGIgYyBkJywgJyAnKTtcbiAqIC8vIC0+IFsnYScsICdiJywgJ2MnLCAnZCddXG4gKlxuICogLy8gV2l0aCBsaW1pdFxuICogc3BsaXQoJ2EgYiBjIGQnLCAnICcsIDIpO1xuICogLy8gLT4gWydhJywgJ2InXVxuICpcbiAqIC8vIEJhY2tyZWZlcmVuY2VzIGluIHJlc3VsdCBhcnJheVxuICogc3BsaXQoJy4ud29yZDEgd29yZDIuLicsIC8oW2Etel0rKShcXGQrKS9pKTtcbiAqIC8vIC0+IFsnLi4nLCAnd29yZCcsICcxJywgJyAnLCAnd29yZCcsICcyJywgJy4uJ11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gc3BsaXQodW5kZWYpIHtcblxuICB2YXIgbmF0aXZlU3BsaXQgPSBTdHJpbmcucHJvdG90eXBlLnNwbGl0LFxuICAgIGNvbXBsaWFudEV4ZWNOcGNnID0gLygpPz8vLmV4ZWMoXCJcIilbMV0gPT09IHVuZGVmLFxuICAgIC8vIE5QQ0c6IG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwXG4gICAgc2VsZjtcblxuICBzZWxmID0gZnVuY3Rpb24oc3RyLCBzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBgbmF0aXZlU3BsaXRgXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzZXBhcmF0b3IpICE9PSBcIltvYmplY3QgUmVnRXhwXVwiKSB7XG4gICAgICByZXR1cm4gbmF0aXZlU3BsaXQuY2FsbChzdHIsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH1cbiAgICB2YXIgb3V0cHV0ID0gW10sXG4gICAgICBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/IFwiaVwiIDogXCJcIikgKyAoc2VwYXJhdG9yLm11bHRpbGluZSA/IFwibVwiIDogXCJcIikgKyAoc2VwYXJhdG9yLmV4dGVuZGVkID8gXCJ4XCIgOiBcIlwiKSArIC8vIFByb3Bvc2VkIGZvciBFUzZcbiAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gXCJ5XCIgOiBcIlwiKSxcbiAgICAgIC8vIEZpcmVmb3ggMytcbiAgICAgIGxhc3RMYXN0SW5kZXggPSAwLFxuICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcbiAgICAgIHNlcGFyYXRvciA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyBcImdcIiksXG4gICAgICBzZXBhcmF0b3IyLCBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoO1xuICAgIHN0ciArPSBcIlwiOyAvLyBUeXBlLWNvbnZlcnRcbiAgICBpZiAoIWNvbXBsaWFudEV4ZWNOcGNnKSB7XG4gICAgICAvLyBEb2Vzbid0IG5lZWQgZmxhZ3MgZ3ksIGJ1dCB0aGV5IGRvbid0IGh1cnRcbiAgICAgIHNlcGFyYXRvcjIgPSBuZXcgUmVnRXhwKFwiXlwiICsgc2VwYXJhdG9yLnNvdXJjZSArIFwiJCg/IVxcXFxzKVwiLCBmbGFncyk7XG4gICAgfVxuICAgIC8qIFZhbHVlcyBmb3IgYGxpbWl0YCwgcGVyIHRoZSBzcGVjOlxuICAgICAqIElmIHVuZGVmaW5lZDogNDI5NDk2NzI5NSAvLyBNYXRoLnBvdygyLCAzMikgLSAxXG4gICAgICogSWYgMCwgSW5maW5pdHksIG9yIE5hTjogMFxuICAgICAqIElmIHBvc2l0aXZlIG51bWJlcjogbGltaXQgPSBNYXRoLmZsb29yKGxpbWl0KTsgaWYgKGxpbWl0ID4gNDI5NDk2NzI5NSkgbGltaXQgLT0gNDI5NDk2NzI5NjtcbiAgICAgKiBJZiBuZWdhdGl2ZSBudW1iZXI6IDQyOTQ5NjcyOTYgLSBNYXRoLmZsb29yKE1hdGguYWJzKGxpbWl0KSlcbiAgICAgKiBJZiBvdGhlcjogVHlwZS1jb252ZXJ0LCB0aGVuIHVzZSB0aGUgYWJvdmUgcnVsZXNcbiAgICAgKi9cbiAgICBsaW1pdCA9IGxpbWl0ID09PSB1bmRlZiA/IC0xID4+PiAwIDogLy8gTWF0aC5wb3coMiwgMzIpIC0gMVxuICAgIGxpbWl0ID4+PiAwOyAvLyBUb1VpbnQzMihsaW1pdClcbiAgICB3aGlsZSAobWF0Y2ggPSBzZXBhcmF0b3IuZXhlYyhzdHIpKSB7XG4gICAgICAvLyBgc2VwYXJhdG9yLmxhc3RJbmRleGAgaXMgbm90IHJlbGlhYmxlIGNyb3NzLWJyb3dzZXJcbiAgICAgIGxhc3RJbmRleCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgaWYgKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpIHtcbiAgICAgICAgb3V0cHV0LnB1c2goc3RyLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgIGZvclxuICAgICAgICAvLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cHNcbiAgICAgICAgaWYgKCFjb21wbGlhbnRFeGVjTnBjZyAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgbWF0Y2hbMF0ucmVwbGFjZShzZXBhcmF0b3IyLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZikge1xuICAgICAgICAgICAgICAgIG1hdGNoW2ldID0gdW5kZWY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2gubGVuZ3RoID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgICBsYXN0TGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICBpZiAob3V0cHV0Lmxlbmd0aCA+PSBsaW1pdCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc2VwYXJhdG9yLmxhc3RJbmRleCA9PT0gbWF0Y2guaW5kZXgpIHtcbiAgICAgICAgc2VwYXJhdG9yLmxhc3RJbmRleCsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsYXN0TGFzdEluZGV4ID09PSBzdHIubGVuZ3RoKSB7XG4gICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yLnRlc3QoXCJcIikpIHtcbiAgICAgICAgb3V0cHV0LnB1c2goXCJcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5wdXNoKHN0ci5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQubGVuZ3RoID4gbGltaXQgPyBvdXRwdXQuc2xpY2UoMCwgbGltaXQpIDogb3V0cHV0O1xuICB9O1xuXG4gIHJldHVybiBzZWxmO1xufSkoKTtcbiIsIi8vIGNvbnRhaW5zLCBhZGQsIHJlbW92ZSwgdG9nZ2xlXG52YXIgaW5kZXhvZiA9IHJlcXVpcmUoJ2luZGV4b2YnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENsYXNzTGlzdFxuXG5mdW5jdGlvbiBDbGFzc0xpc3QoZWxlbSkge1xuICAgIHZhciBjbCA9IGVsZW0uY2xhc3NMaXN0XG5cbiAgICBpZiAoY2wpIHtcbiAgICAgICAgcmV0dXJuIGNsXG4gICAgfVxuXG4gICAgdmFyIGNsYXNzTGlzdCA9IHtcbiAgICAgICAgYWRkOiBhZGRcbiAgICAgICAgLCByZW1vdmU6IHJlbW92ZVxuICAgICAgICAsIGNvbnRhaW5zOiBjb250YWluc1xuICAgICAgICAsIHRvZ2dsZTogdG9nZ2xlXG4gICAgICAgICwgdG9TdHJpbmc6ICR0b1N0cmluZ1xuICAgICAgICAsIGxlbmd0aDogMFxuICAgICAgICAsIGl0ZW06IGl0ZW1cbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NMaXN0XG5cbiAgICBmdW5jdGlvbiBhZGQodG9rZW4pIHtcbiAgICAgICAgdmFyIGxpc3QgPSBnZXRUb2tlbnMoKVxuICAgICAgICBpZiAoaW5kZXhvZihsaXN0LCB0b2tlbikgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbGlzdC5wdXNoKHRva2VuKVxuICAgICAgICBzZXRUb2tlbnMobGlzdClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmUodG9rZW4pIHtcbiAgICAgICAgdmFyIGxpc3QgPSBnZXRUb2tlbnMoKVxuICAgICAgICAgICAgLCBpbmRleCA9IGluZGV4b2YobGlzdCwgdG9rZW4pXG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgc2V0VG9rZW5zKGxpc3QpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udGFpbnModG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIGluZGV4b2YoZ2V0VG9rZW5zKCksIHRva2VuKSA+IC0xXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlKHRva2VuKSB7XG4gICAgICAgIGlmIChjb250YWlucyh0b2tlbikpIHtcbiAgICAgICAgICAgIHJlbW92ZSh0b2tlbilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkKHRva2VuKVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uICR0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGVsZW0uY2xhc3NOYW1lXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXRlbShpbmRleCkge1xuICAgICAgICB2YXIgdG9rZW5zID0gZ2V0VG9rZW5zKClcbiAgICAgICAgcmV0dXJuIHRva2Vuc1tpbmRleF0gfHwgbnVsbFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRva2VucygpIHtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGVsZW0uY2xhc3NOYW1lXG5cbiAgICAgICAgcmV0dXJuIGZpbHRlcihjbGFzc05hbWUuc3BsaXQoXCIgXCIpLCBpc1RydXRoeSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRUb2tlbnMobGlzdCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gbGlzdC5sZW5ndGhcblxuICAgICAgICBlbGVtLmNsYXNzTmFtZSA9IGxpc3Quam9pbihcIiBcIilcbiAgICAgICAgY2xhc3NMaXN0Lmxlbmd0aCA9IGxlbmd0aFxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2xhc3NMaXN0W2ldID0gbGlzdFtpXVxuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIGxpc3RbbGVuZ3RoXVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyIChhcnIsIGZuKSB7XG4gICAgdmFyIHJldCA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGZuKGFycltpXSkpIHJldC5wdXNoKGFycltpXSlcbiAgICB9XG4gICAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBpc1RydXRoeSh2YWx1ZSkge1xuICAgIHJldHVybiAhIXZhbHVlXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGlzVmFsaWRTdHJpbmcgPSBmdW5jdGlvbiBpc1ZhbGlkU3RyaW5nKHBhcmFtKSB7XG4gIHJldHVybiB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnICYmIHBhcmFtLmxlbmd0aCA+IDA7XG59O1xuXG52YXIgc3RhcnRzV2l0aCA9IGZ1bmN0aW9uIHN0YXJ0c1dpdGgoc3RyaW5nLCBzdGFydCkge1xuICByZXR1cm4gc3RyaW5nWzBdID09PSBzdGFydDtcbn07XG5cbnZhciBpc1NlbGVjdG9yID0gZnVuY3Rpb24gaXNTZWxlY3RvcihwYXJhbSkge1xuICByZXR1cm4gaXNWYWxpZFN0cmluZyhwYXJhbSkgJiYgKHN0YXJ0c1dpdGgocGFyYW0sICcuJykgfHwgc3RhcnRzV2l0aChwYXJhbSwgJyMnKSk7XG59O1xuXG52YXIgbm9kZSA9IGZ1bmN0aW9uIG5vZGUoaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhZ05hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGZpcnN0KSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgcmVzdFtfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1NlbGVjdG9yKGZpcnN0KSkge1xuICAgICAgICByZXR1cm4gaC5hcHBseSh1bmRlZmluZWQsIFt0YWdOYW1lICsgZmlyc3RdLmNvbmNhdChyZXN0KSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGgodGFnTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaC5hcHBseSh1bmRlZmluZWQsIFt0YWdOYW1lLCBmaXJzdF0uY29uY2F0KHJlc3QpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufTtcblxudmFyIFRBR19OQU1FUyA9IFsnYScsICdhYmJyJywgJ2Fjcm9ueW0nLCAnYWRkcmVzcycsICdhcHBsZXQnLCAnYXJlYScsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2F1ZGlvJywgJ2InLCAnYmFzZScsICdiYXNlZm9udCcsICdiZGknLCAnYmRvJywgJ2Jnc291bmQnLCAnYmlnJywgJ2JsaW5rJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdicicsICdidXR0b24nLCAnY2FudmFzJywgJ2NhcHRpb24nLCAnY2VudGVyJywgJ2NpdGUnLCAnY29kZScsICdjb2wnLCAnY29sZ3JvdXAnLCAnY29tbWFuZCcsICdjb250ZW50JywgJ2RhdGEnLCAnZGF0YWxpc3QnLCAnZGQnLCAnZGVsJywgJ2RldGFpbHMnLCAnZGZuJywgJ2RpYWxvZycsICdkaXInLCAnZGl2JywgJ2RsJywgJ2R0JywgJ2VsZW1lbnQnLCAnZW0nLCAnZW1iZWQnLCAnZmllbGRzZXQnLCAnZmlnY2FwdGlvbicsICdmaWd1cmUnLCAnZm9udCcsICdmb290ZXInLCAnZm9ybScsICdmcmFtZScsICdmcmFtZXNldCcsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkJywgJ2hlYWRlcicsICdoZ3JvdXAnLCAnaHInLCAnaHRtbCcsICdpJywgJ2lmcmFtZScsICdpbWFnZScsICdpbWcnLCAnaW5wdXQnLCAnaW5zJywgJ2lzaW5kZXgnLCAna2JkJywgJ2tleWdlbicsICdsYWJlbCcsICdsZWdlbmQnLCAnbGknLCAnbGluaycsICdsaXN0aW5nJywgJ21haW4nLCAnbWFwJywgJ21hcmsnLCAnbWFycXVlZScsICdtYXRoJywgJ21lbnUnLCAnbWVudWl0ZW0nLCAnbWV0YScsICdtZXRlcicsICdtdWx0aWNvbCcsICduYXYnLCAnbmV4dGlkJywgJ25vYnInLCAnbm9lbWJlZCcsICdub2ZyYW1lcycsICdub3NjcmlwdCcsICdvYmplY3QnLCAnb2wnLCAnb3B0Z3JvdXAnLCAnb3B0aW9uJywgJ291dHB1dCcsICdwJywgJ3BhcmFtJywgJ3BpY3R1cmUnLCAncGxhaW50ZXh0JywgJ3ByZScsICdwcm9ncmVzcycsICdxJywgJ3JiJywgJ3JiYycsICdycCcsICdydCcsICdydGMnLCAncnVieScsICdzJywgJ3NhbXAnLCAnc2NyaXB0JywgJ3NlY3Rpb24nLCAnc2VsZWN0JywgJ3NoYWRvdycsICdzbG90JywgJ3NtYWxsJywgJ3NvdXJjZScsICdzcGFjZXInLCAnc3BhbicsICdzdHJpa2UnLCAnc3Ryb25nJywgJ3N0eWxlJywgJ3N1YicsICdzdW1tYXJ5JywgJ3N1cCcsICdzdmcnLCAndGFibGUnLCAndGJvZHknLCAndGQnLCAndGVtcGxhdGUnLCAndGV4dGFyZWEnLCAndGZvb3QnLCAndGgnLCAndGhlYWQnLCAndGltZScsICd0aXRsZScsICd0cicsICd0cmFjaycsICd0dCcsICd1JywgJ3VsJywgJ3ZhcicsICd2aWRlbycsICd3YnInLCAneG1wJ107XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChoKSB7XG4gIHZhciBjcmVhdGVUYWcgPSBub2RlKGgpO1xuICB2YXIgZXhwb3J0ZWQgPSB7IFRBR19OQU1FUzogVEFHX05BTUVTLCBpc1NlbGVjdG9yOiBpc1NlbGVjdG9yLCBjcmVhdGVUYWc6IGNyZWF0ZVRhZyB9O1xuICBUQUdfTkFNRVMuZm9yRWFjaChmdW5jdGlvbiAobikge1xuICAgIGV4cG9ydGVkW25dID0gY3JlYXRlVGFnKG4pO1xuICB9KTtcbiAgcmV0dXJuIGV4cG9ydGVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwidmFyIHNwbGl0ID0gcmVxdWlyZSgnYnJvd3Nlci1zcGxpdCcpXG52YXIgQ2xhc3NMaXN0ID0gcmVxdWlyZSgnY2xhc3MtbGlzdCcpXG5cbnZhciB3ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyByZXF1aXJlKCdodG1sLWVsZW1lbnQnKSA6IHdpbmRvd1xudmFyIGRvY3VtZW50ID0gdy5kb2N1bWVudFxudmFyIFRleHQgPSB3LlRleHRcblxuZnVuY3Rpb24gY29udGV4dCAoKSB7XG5cbiAgdmFyIGNsZWFudXBGdW5jcyA9IFtdXG5cbiAgZnVuY3Rpb24gaCgpIHtcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSwgZSA9IG51bGxcbiAgICBmdW5jdGlvbiBpdGVtIChsKSB7XG4gICAgICB2YXIgclxuICAgICAgZnVuY3Rpb24gcGFyc2VDbGFzcyAoc3RyaW5nKSB7XG4gICAgICAgIC8vIE91ciBtaW5pbWFsIHBhcnNlciBkb2VzbuKAmXQgdW5kZXJzdGFuZCBlc2NhcGluZyBDU1Mgc3BlY2lhbFxuICAgICAgICAvLyBjaGFyYWN0ZXJzIGxpa2UgYCNgLiBEb27igJl0IHVzZSB0aGVtLiBNb3JlIHJlYWRpbmc6XG4gICAgICAgIC8vIGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9jc3MtZXNjYXBlcyAuXG5cbiAgICAgICAgdmFyIG0gPSBzcGxpdChzdHJpbmcsIC8oW1xcLiNdP1teXFxzIy5dKykvKVxuICAgICAgICBpZigvXlxcLnwjLy50ZXN0KG1bMV0pKVxuICAgICAgICAgIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBmb3JFYWNoKG0sIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgdmFyIHMgPSB2LnN1YnN0cmluZygxLHYubGVuZ3RoKVxuICAgICAgICAgIGlmKCF2KSByZXR1cm5cbiAgICAgICAgICBpZighZSlcbiAgICAgICAgICAgIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHYpXG4gICAgICAgICAgZWxzZSBpZiAodlswXSA9PT0gJy4nKVxuICAgICAgICAgICAgQ2xhc3NMaXN0KGUpLmFkZChzKVxuICAgICAgICAgIGVsc2UgaWYgKHZbMF0gPT09ICcjJylcbiAgICAgICAgICAgIGUuc2V0QXR0cmlidXRlKCdpZCcsIHMpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmKGwgPT0gbnVsbClcbiAgICAgICAgO1xuICAgICAgZWxzZSBpZignc3RyaW5nJyA9PT0gdHlwZW9mIGwpIHtcbiAgICAgICAgaWYoIWUpXG4gICAgICAgICAgcGFyc2VDbGFzcyhsKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgZS5hcHBlbmRDaGlsZChyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobCkpXG4gICAgICB9XG4gICAgICBlbHNlIGlmKCdudW1iZXInID09PSB0eXBlb2YgbFxuICAgICAgICB8fCAnYm9vbGVhbicgPT09IHR5cGVvZiBsXG4gICAgICAgIHx8IGwgaW5zdGFuY2VvZiBEYXRlXG4gICAgICAgIHx8IGwgaW5zdGFuY2VvZiBSZWdFeHAgKSB7XG4gICAgICAgICAgZS5hcHBlbmRDaGlsZChyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobC50b1N0cmluZygpKSlcbiAgICAgIH1cbiAgICAgIC8vdGhlcmUgbWlnaHQgYmUgYSBiZXR0ZXIgd2F5IHRvIGhhbmRsZSB0aGlzLi4uXG4gICAgICBlbHNlIGlmIChpc0FycmF5KGwpKVxuICAgICAgICBmb3JFYWNoKGwsIGl0ZW0pXG4gICAgICBlbHNlIGlmKGlzTm9kZShsKSlcbiAgICAgICAgZS5hcHBlbmRDaGlsZChyID0gbClcbiAgICAgIGVsc2UgaWYobCBpbnN0YW5jZW9mIFRleHQpXG4gICAgICAgIGUuYXBwZW5kQ2hpbGQociA9IGwpXG4gICAgICBlbHNlIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIGwpIHtcbiAgICAgICAgZm9yICh2YXIgayBpbiBsKSB7XG4gICAgICAgICAgaWYoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGxba10pIHtcbiAgICAgICAgICAgIGlmKC9eb25cXHcrLy50ZXN0KGspKSB7XG4gICAgICAgICAgICAgIChmdW5jdGlvbiAoaywgbCkgeyAvLyBjYXB0dXJlIGssIGwgaW4gdGhlIGNsb3N1cmVcbiAgICAgICAgICAgICAgICBpZiAoZS5hZGRFdmVudExpc3RlbmVyKXtcbiAgICAgICAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihrLnN1YnN0cmluZygyKSwgbFtrXSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgICBjbGVhbnVwRnVuY3MucHVzaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoay5zdWJzdHJpbmcoMiksIGxba10sIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgIGUuYXR0YWNoRXZlbnQoaywgbFtrXSlcbiAgICAgICAgICAgICAgICAgIGNsZWFudXBGdW5jcy5wdXNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGUuZGV0YWNoRXZlbnQoaywgbFtrXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KShrLCBsKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gb2JzZXJ2YWJsZVxuICAgICAgICAgICAgICBlW2tdID0gbFtrXSgpXG4gICAgICAgICAgICAgIGNsZWFudXBGdW5jcy5wdXNoKGxba10oZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICBlW2tdID0gdlxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZihrID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICBpZignc3RyaW5nJyA9PT0gdHlwZW9mIGxba10pIHtcbiAgICAgICAgICAgICAgZS5zdHlsZS5jc3NUZXh0ID0gbFtrXVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIGZvciAodmFyIHMgaW4gbFtrXSkgKGZ1bmN0aW9uKHMsIHYpIHtcbiAgICAgICAgICAgICAgICBpZignZnVuY3Rpb24nID09PSB0eXBlb2Ygdikge1xuICAgICAgICAgICAgICAgICAgLy8gb2JzZXJ2YWJsZVxuICAgICAgICAgICAgICAgICAgZS5zdHlsZS5zZXRQcm9wZXJ0eShzLCB2KCkpXG4gICAgICAgICAgICAgICAgICBjbGVhbnVwRnVuY3MucHVzaCh2KGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdHlsZS5zZXRQcm9wZXJ0eShzLCB2YWwpXG4gICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IGxba11bc10ubWF0Y2goLyguKilcXFcrIWltcG9ydGFudFxcVyokLyk7XG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdHlsZS5zZXRQcm9wZXJ0eShzLCBtYXRjaFsxXSwgJ2ltcG9ydGFudCcpXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlLnN0eWxlLnNldFByb3BlcnR5KHMsIGxba11bc10pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pKHMsIGxba11bc10pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmKGsgPT09ICdhdHRycycpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHYgaW4gbFtrXSkge1xuICAgICAgICAgICAgICBlLnNldEF0dHJpYnV0ZSh2LCBsW2tdW3ZdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChrLnN1YnN0cigwLCA1KSA9PT0gXCJkYXRhLVwiKSB7XG4gICAgICAgICAgICBlLnNldEF0dHJpYnV0ZShrLCBsW2tdKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlW2tdID0gbFtrXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgbCkge1xuICAgICAgICAvL2Fzc3VtZSBpdCdzIGFuIG9ic2VydmFibGUhXG4gICAgICAgIHZhciB2ID0gbCgpXG4gICAgICAgIGUuYXBwZW5kQ2hpbGQociA9IGlzTm9kZSh2KSA/IHYgOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2KSlcblxuICAgICAgICBjbGVhbnVwRnVuY3MucHVzaChsKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgaWYoaXNOb2RlKHYpICYmIHIucGFyZW50RWxlbWVudClcbiAgICAgICAgICAgIHIucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQodiwgciksIHIgPSB2XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgci50ZXh0Q29udGVudCA9IHZcbiAgICAgICAgfSkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiByXG4gICAgfVxuICAgIHdoaWxlKGFyZ3MubGVuZ3RoKVxuICAgICAgaXRlbShhcmdzLnNoaWZ0KCkpXG5cbiAgICByZXR1cm4gZVxuICB9XG5cbiAgaC5jbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xlYW51cEZ1bmNzLmxlbmd0aDsgaSsrKXtcbiAgICAgIGNsZWFudXBGdW5jc1tpXSgpXG4gICAgfVxuICAgIGNsZWFudXBGdW5jcy5sZW5ndGggPSAwXG4gIH1cblxuICByZXR1cm4gaFxufVxuXG52YXIgaCA9IG1vZHVsZS5leHBvcnRzID0gY29udGV4dCgpXG5oLmNvbnRleHQgPSBjb250ZXh0XG5cbmZ1bmN0aW9uIGlzTm9kZSAoZWwpIHtcbiAgcmV0dXJuIGVsICYmIGVsLm5vZGVOYW1lICYmIGVsLm5vZGVUeXBlXG59XG5cbmZ1bmN0aW9uIGZvckVhY2ggKGFyciwgZm4pIHtcbiAgaWYgKGFyci5mb3JFYWNoKSByZXR1cm4gYXJyLmZvckVhY2goZm4pXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBmbihhcnJbaV0sIGkpXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkgKGFycikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJ1xufVxuXG5cbiIsIlxudmFyIGluZGV4T2YgPSBbXS5pbmRleE9mO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFyciwgb2JqKXtcbiAgaWYgKGluZGV4T2YpIHJldHVybiBhcnIuaW5kZXhPZihvYmopO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xuICAgIGlmIChhcnJbaV0gPT09IG9iaikgcmV0dXJuIGk7XG4gIH1cbiAgcmV0dXJuIC0xO1xufTsiLCJpbXBvcnQgeyBNb2RlbCB9IGZyb20gXCIuL21vZGVsXCJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi9tZXNzYWdlc1wiXG5cbmV4cG9ydCBjb25zdCBhcHAgPSAoXG4gICAgaW5pdE1vZGVsOiBNb2RlbCxcbiAgICB2aWV3OiAobW9kZWw6IE1vZGVsLCBkaXNwYXRjaDogKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHZvaWQpID0+IEhUTUxFbGVtZW50LFxuICAgIHVwZGF0ZTogKG1vZGVsOiBNb2RlbCwgbWVzc2FnZTogTWVzc2FnZSkgPT4gTW9kZWwsXG4gICAgbm9kZTogSFRNTEVsZW1lbnRcbikgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkID0+IHtcbiAgICAgICAgbW9kZWwgPSB1cGRhdGUobW9kZWwsIG1lc3NhZ2UpXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRWaWV3ID0gdmlldyhtb2RlbCwgZGlzcGF0Y2gpXG4gICAgICAgIG5vZGUucmVwbGFjZUNoaWxkKHVwZGF0ZWRWaWV3LCBjdXJyZW50VmlldylcbiAgICAgICAgY3VycmVudFZpZXcgPSB1cGRhdGVkVmlld1xuICAgIH1cblxuICAgIGxldCBtb2RlbCA9IGluaXRNb2RlbFxuICAgIGxldCBjdXJyZW50VmlldyA9IHZpZXcobW9kZWwsIGRpc3BhdGNoKVxuICAgIG5vZGUuYXBwZW5kQ2hpbGQoY3VycmVudFZpZXcpXG59IiwiaW1wb3J0IHsgY3JlYXRlRW1wdHlQbGF0ZUFycmF5IH0gZnJvbSBcIi4vdXRpbHNcIlxuXG5leHBvcnQgdHlwZSBNb2RlbCA9IHtcbiAgICBwbGF0ZUxpc3Q6IFBsYXRlW11cbn1cblxuZXhwb3J0IGNvbnN0IGluaXRNb2RlbDogTW9kZWwgPSB7XG4gICAgcGxhdGVMaXN0OiBjcmVhdGVFbXB0eVBsYXRlQXJyYXkoKVxufVxuXG5leHBvcnQgdHlwZSBQbGF0ZSA9IHtcbiAgICB0ZXh0OiBTdHJpbmc7XG4gICAgZm9udDogRm9udFxufVxuXG50eXBlIEZvbnQgPVxuICAgIHwgXCJTY3JpcHRcIlxuICAgIHwgXCJDbGFzc2ljIFNjcmlwdFwiXG4gICAgfCBcIkl0YWxsaWNcIlxuICAgIHwgXCJTZXJpZlwiXG4gICAgfCBcIlNhbnMgU2VyaWZcIlxuICAgIHwgXCJIYW5kd3JpdHRlblwiXG4iLCJpbXBvcnQgeyBNb2RlbCB9IGZyb20gXCIuL21vZGVsXCJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi9tZXNzYWdlc1wiXG5cbmV4cG9ydCBjb25zdCB1cGRhdGUgPSAobW9kZWw6IE1vZGVsLCBtZXNzYWdlOiBNZXNzYWdlKTogTW9kZWwgPT4ge1xuICAgIHJldHVybiBtb2RlbFxufSIsImltcG9ydCB7IFBsYXRlIH0gZnJvbSBcIi4vbW9kZWxcIlxuXG5leHBvcnQgY29uc3QgY3JlYXRlRW1wdHlQbGF0ZUFycmF5ID0gKCk6IFBsYXRlW10gPT4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxNiB9LCAodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgZm9udDogXCJTY3JpcHRcIlxuICAgICAgICB9XG4gICAgfSlcbn0iLCJpbXBvcnQgaCBmcm9tICdoeXBlcnNjcmlwdCdcbmltcG9ydCBoaCBmcm9tICdoeXBlcnNjcmlwdC1oZWxwZXJzJ1xuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZXMnXG5cbmNvbnN0IHsgZGl2LCBidXR0b24sIHN2ZywgcHJlIH0gPSBoaChoKVxuXG5leHBvcnQgY29uc3QgdmlldyA9IChtb2RlbDogTW9kZWwsIGRpc3BhdGNoOiAobWVzc2FnZTogTWVzc2FnZSkgPT4gdm9pZCk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICByZXR1cm4gcHJlKEpTT04uc3RyaW5naWZ5KG1vZGVsLCBudWxsLCAyKSlcbn0iLCIvKiAoaWdub3JlZCkgKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4vYXBwXCJcbmltcG9ydCB7IGluaXRNb2RlbCB9IGZyb20gXCIuL21vZGVsXCJcbmltcG9ydCB7IHZpZXcgfSBmcm9tIFwiLi92aWV3XCJcbmltcG9ydCB7IHVwZGF0ZSB9IGZyb20gXCIuL3VwZGF0ZVwiXG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5ib2R5XG5cbmFwcChpbml0TW9kZWwsIHZpZXcsIHVwZGF0ZSwgcm9vdCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=