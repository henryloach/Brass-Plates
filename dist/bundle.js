/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/hyperscript-helpers/dist/index.js":
/*!********************************************************!*\
  !*** ./node_modules/hyperscript-helpers/dist/index.js ***!
  \********************************************************/
/***/ ((module, exports) => {



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

/***/ "./node_modules/snabbdom/build/h.js":
/*!******************************************!*\
  !*** ./node_modules/snabbdom/build/h.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNS: () => (/* binding */ addNS),
/* harmony export */   fragment: () => (/* binding */ fragment),
/* harmony export */   h: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _vnode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode.js */ "./node_modules/snabbdom/build/vnode.js");
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is.js */ "./node_modules/snabbdom/build/is.js");


function addNS(data, children, sel) {
    data.ns = "http://www.w3.org/2000/svg";
    if (sel !== "foreignObject" && children !== undefined) {
        for (let i = 0; i < children.length; ++i) {
            const child = children[i];
            if (typeof child === "string")
                continue;
            const childData = child.data;
            if (childData !== undefined) {
                addNS(childData, child.children, child.sel);
            }
        }
    }
}
function h(sel, b, c) {
    let data = {};
    let children;
    let text;
    let i;
    if (c !== undefined) {
        if (b !== null) {
            data = b;
        }
        if (_is_js__WEBPACK_IMPORTED_MODULE_1__.array(c)) {
            children = c;
        }
        else if (_is_js__WEBPACK_IMPORTED_MODULE_1__.primitive(c)) {
            text = c.toString();
        }
        else if (c && c.sel) {
            children = [c];
        }
    }
    else if (b !== undefined && b !== null) {
        if (_is_js__WEBPACK_IMPORTED_MODULE_1__.array(b)) {
            children = b;
        }
        else if (_is_js__WEBPACK_IMPORTED_MODULE_1__.primitive(b)) {
            text = b.toString();
        }
        else if (b && b.sel) {
            children = [b];
        }
        else {
            data = b;
        }
    }
    if (children !== undefined) {
        for (i = 0; i < children.length; ++i) {
            if (_is_js__WEBPACK_IMPORTED_MODULE_1__.primitive(children[i]))
                children[i] = (0,_vnode_js__WEBPACK_IMPORTED_MODULE_0__.vnode)(undefined, undefined, undefined, children[i], undefined);
        }
    }
    if (sel.startsWith("svg") &&
        (sel.length === 3 || sel[3] === "." || sel[3] === "#")) {
        addNS(data, children, sel);
    }
    return (0,_vnode_js__WEBPACK_IMPORTED_MODULE_0__.vnode)(sel, data, children, text, undefined);
}
/**
 * @experimental
 */
function fragment(children) {
    let c;
    let text;
    if (_is_js__WEBPACK_IMPORTED_MODULE_1__.array(children)) {
        c = children;
    }
    else if (_is_js__WEBPACK_IMPORTED_MODULE_1__.primitive(c)) {
        text = children;
    }
    else if (c && c.sel) {
        c = [children];
    }
    if (c !== undefined) {
        for (let i = 0; i < c.length; ++i) {
            if (_is_js__WEBPACK_IMPORTED_MODULE_1__.primitive(c[i]))
                c[i] = (0,_vnode_js__WEBPACK_IMPORTED_MODULE_0__.vnode)(undefined, undefined, undefined, c[i], undefined);
        }
    }
    return (0,_vnode_js__WEBPACK_IMPORTED_MODULE_0__.vnode)(undefined, {}, c, text, undefined);
}
//# sourceMappingURL=h.js.map

/***/ }),

/***/ "./node_modules/snabbdom/build/htmldomapi.js":
/*!***************************************************!*\
  !*** ./node_modules/snabbdom/build/htmldomapi.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   htmlDomApi: () => (/* binding */ htmlDomApi)
/* harmony export */ });
function createElement(tagName, options) {
    return document.createElement(tagName, options);
}
function createElementNS(namespaceURI, qualifiedName, options) {
    return document.createElementNS(namespaceURI, qualifiedName, options);
}
function createDocumentFragment() {
    return parseFragment(document.createDocumentFragment());
}
function createTextNode(text) {
    return document.createTextNode(text);
}
function createComment(text) {
    return document.createComment(text);
}
function insertBefore(parentNode, newNode, referenceNode) {
    if (isDocumentFragment(parentNode)) {
        let node = parentNode;
        while (node && isDocumentFragment(node)) {
            const fragment = parseFragment(node);
            node = fragment.parent;
        }
        parentNode = node !== null && node !== void 0 ? node : parentNode;
    }
    if (isDocumentFragment(newNode)) {
        newNode = parseFragment(newNode, parentNode);
    }
    if (referenceNode && isDocumentFragment(referenceNode)) {
        referenceNode = parseFragment(referenceNode).firstChildNode;
    }
    parentNode.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
    node.removeChild(child);
}
function appendChild(node, child) {
    if (isDocumentFragment(child)) {
        child = parseFragment(child, node);
    }
    node.appendChild(child);
}
function parentNode(node) {
    if (isDocumentFragment(node)) {
        while (node && isDocumentFragment(node)) {
            const fragment = parseFragment(node);
            node = fragment.parent;
        }
        return node !== null && node !== void 0 ? node : null;
    }
    return node.parentNode;
}
function nextSibling(node) {
    var _a;
    if (isDocumentFragment(node)) {
        const fragment = parseFragment(node);
        const parent = parentNode(fragment);
        if (parent && fragment.lastChildNode) {
            const children = Array.from(parent.childNodes);
            const index = children.indexOf(fragment.lastChildNode);
            return (_a = children[index + 1]) !== null && _a !== void 0 ? _a : null;
        }
        return null;
    }
    return node.nextSibling;
}
function tagName(elm) {
    return elm.tagName;
}
function setTextContent(node, text) {
    node.textContent = text;
}
function getTextContent(node) {
    return node.textContent;
}
function isElement(node) {
    return node.nodeType === 1;
}
function isText(node) {
    return node.nodeType === 3;
}
function isComment(node) {
    return node.nodeType === 8;
}
function isDocumentFragment(node) {
    return node.nodeType === 11;
}
function parseFragment(fragmentNode, parentNode) {
    var _a, _b, _c;
    const fragment = fragmentNode;
    (_a = fragment.parent) !== null && _a !== void 0 ? _a : (fragment.parent = parentNode !== null && parentNode !== void 0 ? parentNode : null);
    (_b = fragment.firstChildNode) !== null && _b !== void 0 ? _b : (fragment.firstChildNode = fragmentNode.firstChild);
    (_c = fragment.lastChildNode) !== null && _c !== void 0 ? _c : (fragment.lastChildNode = fragmentNode.lastChild);
    return fragment;
}
const htmlDomApi = {
    createElement,
    createElementNS,
    createTextNode,
    createDocumentFragment,
    createComment,
    insertBefore,
    removeChild,
    appendChild,
    parentNode,
    nextSibling,
    tagName,
    setTextContent,
    getTextContent,
    isElement,
    isText,
    isComment,
    isDocumentFragment
};
//# sourceMappingURL=htmldomapi.js.map

/***/ }),

/***/ "./node_modules/snabbdom/build/init.js":
/*!*********************************************!*\
  !*** ./node_modules/snabbdom/build/init.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _vnode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode.js */ "./node_modules/snabbdom/build/vnode.js");
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is.js */ "./node_modules/snabbdom/build/is.js");
/* harmony import */ var _htmldomapi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./htmldomapi.js */ "./node_modules/snabbdom/build/htmldomapi.js");



const emptyNode = (0,_vnode_js__WEBPACK_IMPORTED_MODULE_0__.vnode)("", {}, [], undefined, undefined);
function sameVnode(vnode1, vnode2) {
    var _a, _b;
    const isSameKey = vnode1.key === vnode2.key;
    const isSameIs = ((_a = vnode1.data) === null || _a === void 0 ? void 0 : _a.is) === ((_b = vnode2.data) === null || _b === void 0 ? void 0 : _b.is);
    const isSameSel = vnode1.sel === vnode2.sel;
    const isSameTextOrFragment = !vnode1.sel && vnode1.sel === vnode2.sel
        ? typeof vnode1.text === typeof vnode2.text
        : true;
    return isSameSel && isSameKey && isSameIs && isSameTextOrFragment;
}
/**
 * @todo Remove this function when the document fragment is considered stable.
 */
function documentFragmentIsNotSupported() {
    throw new Error("The document fragment is not supported on this platform.");
}
function isElement(api, vnode) {
    return api.isElement(vnode);
}
function isDocumentFragment(api, vnode) {
    return api.isDocumentFragment(vnode);
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
    var _a;
    const map = {};
    for (let i = beginIdx; i <= endIdx; ++i) {
        const key = (_a = children[i]) === null || _a === void 0 ? void 0 : _a.key;
        if (key !== undefined) {
            map[key] = i;
        }
    }
    return map;
}
const hooks = [
    "create",
    "update",
    "remove",
    "destroy",
    "pre",
    "post"
];
function init(modules, domApi, options) {
    const cbs = {
        create: [],
        update: [],
        remove: [],
        destroy: [],
        pre: [],
        post: []
    };
    const api = domApi !== undefined ? domApi : _htmldomapi_js__WEBPACK_IMPORTED_MODULE_2__.htmlDomApi;
    for (const hook of hooks) {
        for (const module of modules) {
            const currentHook = module[hook];
            if (currentHook !== undefined) {
                cbs[hook].push(currentHook);
            }
        }
    }
    function emptyNodeAt(elm) {
        const id = elm.id ? "#" + elm.id : "";
        // elm.className doesn't return a string when elm is an SVG element inside a shadowRoot.
        // https://stackoverflow.com/questions/29454340/detecting-classname-of-svganimatedstring
        const classes = elm.getAttribute("class");
        const c = classes ? "." + classes.split(" ").join(".") : "";
        return (0,_vnode_js__WEBPACK_IMPORTED_MODULE_0__.vnode)(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);
    }
    function emptyDocumentFragmentAt(frag) {
        return (0,_vnode_js__WEBPACK_IMPORTED_MODULE_0__.vnode)(undefined, {}, [], undefined, frag);
    }
    function createRmCb(childElm, listeners) {
        return function rmCb() {
            if (--listeners === 0) {
                const parent = api.parentNode(childElm);
                if (parent !== null) {
                    api.removeChild(parent, childElm);
                }
            }
        };
    }
    function createElm(vnode, insertedVnodeQueue) {
        var _a, _b, _c, _d, _e;
        let i;
        const data = vnode.data;
        const hook = data === null || data === void 0 ? void 0 : data.hook;
        (_a = hook === null || hook === void 0 ? void 0 : hook.init) === null || _a === void 0 ? void 0 : _a.call(hook, vnode);
        const children = vnode.children;
        const sel = vnode.sel;
        if (sel === "!") {
            (_b = vnode.text) !== null && _b !== void 0 ? _b : (vnode.text = "");
            vnode.elm = api.createComment(vnode.text);
        }
        else if (sel === "") {
            // textNode has no selector
            vnode.elm = api.createTextNode(vnode.text);
        }
        else if (sel !== undefined) {
            // Parse selector
            const hashIdx = sel.indexOf("#");
            const dotIdx = sel.indexOf(".", hashIdx);
            const hash = hashIdx > 0 ? hashIdx : sel.length;
            const dot = dotIdx > 0 ? dotIdx : sel.length;
            const tag = hashIdx !== -1 || dotIdx !== -1
                ? sel.slice(0, Math.min(hash, dot))
                : sel;
            const ns = data === null || data === void 0 ? void 0 : data.ns;
            const elm = ns === undefined
                ? api.createElement(tag, data)
                : api.createElementNS(ns, tag, data);
            vnode.elm = elm;
            if (hash < dot)
                elm.setAttribute("id", sel.slice(hash + 1, dot));
            if (dotIdx > 0)
                elm.setAttribute("class", sel.slice(dot + 1).replace(/\./g, " "));
            for (i = 0; i < cbs.create.length; ++i)
                cbs.create[i](emptyNode, vnode);
            if (_is_js__WEBPACK_IMPORTED_MODULE_1__.primitive(vnode.text) &&
                (!_is_js__WEBPACK_IMPORTED_MODULE_1__.array(children) || children.length === 0)) {
                // allow h1 and similar nodes to be created w/ text and empty child list
                api.appendChild(elm, api.createTextNode(vnode.text));
            }
            if (_is_js__WEBPACK_IMPORTED_MODULE_1__.array(children)) {
                for (i = 0; i < children.length; ++i) {
                    const ch = children[i];
                    if (ch != null) {
                        api.appendChild(elm, createElm(ch, insertedVnodeQueue));
                    }
                }
            }
            if (hook !== undefined) {
                (_c = hook.create) === null || _c === void 0 ? void 0 : _c.call(hook, emptyNode, vnode);
                if (hook.insert !== undefined) {
                    insertedVnodeQueue.push(vnode);
                }
            }
        }
        else if (((_d = options === null || options === void 0 ? void 0 : options.experimental) === null || _d === void 0 ? void 0 : _d.fragments) && vnode.children) {
            vnode.elm = ((_e = api.createDocumentFragment) !== null && _e !== void 0 ? _e : documentFragmentIsNotSupported)();
            for (i = 0; i < cbs.create.length; ++i)
                cbs.create[i](emptyNode, vnode);
            for (i = 0; i < vnode.children.length; ++i) {
                const ch = vnode.children[i];
                if (ch != null) {
                    api.appendChild(vnode.elm, createElm(ch, insertedVnodeQueue));
                }
            }
        }
        else {
            vnode.elm = api.createTextNode(vnode.text);
        }
        return vnode.elm;
    }
    function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
            const ch = vnodes[startIdx];
            if (ch != null) {
                api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
            }
        }
    }
    function invokeDestroyHook(vnode) {
        var _a, _b;
        const data = vnode.data;
        if (data !== undefined) {
            (_b = (_a = data === null || data === void 0 ? void 0 : data.hook) === null || _a === void 0 ? void 0 : _a.destroy) === null || _b === void 0 ? void 0 : _b.call(_a, vnode);
            for (let i = 0; i < cbs.destroy.length; ++i)
                cbs.destroy[i](vnode);
            if (vnode.children !== undefined) {
                for (let j = 0; j < vnode.children.length; ++j) {
                    const child = vnode.children[j];
                    if (child != null && typeof child !== "string") {
                        invokeDestroyHook(child);
                    }
                }
            }
        }
    }
    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
        var _a, _b;
        for (; startIdx <= endIdx; ++startIdx) {
            let listeners;
            const ch = vnodes[startIdx];
            if (ch != null) {
                if (ch.sel !== undefined) {
                    invokeDestroyHook(ch);
                    listeners = cbs.remove.length + 1;
                    const rm = createRmCb(ch.elm, listeners);
                    for (let i = 0; i < cbs.remove.length; ++i)
                        cbs.remove[i](ch, rm);
                    const removeHook = (_b = (_a = ch === null || ch === void 0 ? void 0 : ch.data) === null || _a === void 0 ? void 0 : _a.hook) === null || _b === void 0 ? void 0 : _b.remove;
                    if (removeHook !== undefined) {
                        removeHook(ch, rm);
                    }
                    else {
                        rm();
                    }
                }
                else if (ch.children) {
                    // Fragment node
                    invokeDestroyHook(ch);
                    removeVnodes(parentElm, ch.children, 0, ch.children.length - 1);
                }
                else {
                    // Text node
                    api.removeChild(parentElm, ch.elm);
                }
            }
        }
    }
    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
        let oldStartIdx = 0;
        let newStartIdx = 0;
        let oldEndIdx = oldCh.length - 1;
        let oldStartVnode = oldCh[0];
        let oldEndVnode = oldCh[oldEndIdx];
        let newEndIdx = newCh.length - 1;
        let newStartVnode = newCh[0];
        let newEndVnode = newCh[newEndIdx];
        let oldKeyToIdx;
        let idxInOld;
        let elmToMove;
        let before;
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (oldStartVnode == null) {
                oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
            }
            else if (oldEndVnode == null) {
                oldEndVnode = oldCh[--oldEndIdx];
            }
            else if (newStartVnode == null) {
                newStartVnode = newCh[++newStartIdx];
            }
            else if (newEndVnode == null) {
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldStartVnode, newEndVnode)) {
                // Vnode moved right
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldEndVnode, newStartVnode)) {
                // Vnode moved left
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                if (oldKeyToIdx === undefined) {
                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                }
                idxInOld = oldKeyToIdx[newStartVnode.key];
                if (idxInOld === undefined) {
                    // `newStartVnode` is new, create and insert it in beginning
                    api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                    newStartVnode = newCh[++newStartIdx];
                }
                else if (oldKeyToIdx[newEndVnode.key] === undefined) {
                    // `newEndVnode` is new, create and insert it in the end
                    api.insertBefore(parentElm, createElm(newEndVnode, insertedVnodeQueue), api.nextSibling(oldEndVnode.elm));
                    newEndVnode = newCh[--newEndIdx];
                }
                else {
                    // Neither of the new endpoints are new vnodes, so we make progress by
                    // moving `newStartVnode` into position
                    elmToMove = oldCh[idxInOld];
                    if (elmToMove.sel !== newStartVnode.sel) {
                        api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                    }
                    else {
                        patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
                        oldCh[idxInOld] = undefined;
                        api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
                    }
                    newStartVnode = newCh[++newStartIdx];
                }
            }
        }
        if (newStartIdx <= newEndIdx) {
            before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
            addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        }
        if (oldStartIdx <= oldEndIdx) {
            removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
        }
    }
    function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const hook = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.hook;
        (_b = hook === null || hook === void 0 ? void 0 : hook.prepatch) === null || _b === void 0 ? void 0 : _b.call(hook, oldVnode, vnode);
        const elm = (vnode.elm = oldVnode.elm);
        if (oldVnode === vnode)
            return;
        if (vnode.data !== undefined ||
            (vnode.text !== undefined && vnode.text !== oldVnode.text)) {
            (_c = vnode.data) !== null && _c !== void 0 ? _c : (vnode.data = {});
            (_d = oldVnode.data) !== null && _d !== void 0 ? _d : (oldVnode.data = {});
            for (let i = 0; i < cbs.update.length; ++i)
                cbs.update[i](oldVnode, vnode);
            (_g = (_f = (_e = vnode.data) === null || _e === void 0 ? void 0 : _e.hook) === null || _f === void 0 ? void 0 : _f.update) === null || _g === void 0 ? void 0 : _g.call(_f, oldVnode, vnode);
        }
        const oldCh = oldVnode.children;
        const ch = vnode.children;
        if (vnode.text === undefined) {
            if (oldCh !== undefined && ch !== undefined) {
                if (oldCh !== ch)
                    updateChildren(elm, oldCh, ch, insertedVnodeQueue);
            }
            else if (ch !== undefined) {
                if (oldVnode.text !== undefined)
                    api.setTextContent(elm, "");
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
            }
            else if (oldCh !== undefined) {
                removeVnodes(elm, oldCh, 0, oldCh.length - 1);
            }
            else if (oldVnode.text !== undefined) {
                api.setTextContent(elm, "");
            }
        }
        else if (oldVnode.text !== vnode.text) {
            if (oldCh !== undefined) {
                removeVnodes(elm, oldCh, 0, oldCh.length - 1);
            }
            api.setTextContent(elm, vnode.text);
        }
        (_h = hook === null || hook === void 0 ? void 0 : hook.postpatch) === null || _h === void 0 ? void 0 : _h.call(hook, oldVnode, vnode);
    }
    return function patch(oldVnode, vnode) {
        let i, elm, parent;
        const insertedVnodeQueue = [];
        for (i = 0; i < cbs.pre.length; ++i)
            cbs.pre[i]();
        if (isElement(api, oldVnode)) {
            oldVnode = emptyNodeAt(oldVnode);
        }
        else if (isDocumentFragment(api, oldVnode)) {
            oldVnode = emptyDocumentFragmentAt(oldVnode);
        }
        if (sameVnode(oldVnode, vnode)) {
            patchVnode(oldVnode, vnode, insertedVnodeQueue);
        }
        else {
            elm = oldVnode.elm;
            parent = api.parentNode(elm);
            createElm(vnode, insertedVnodeQueue);
            if (parent !== null) {
                api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
                removeVnodes(parent, [oldVnode], 0, 0);
            }
        }
        for (i = 0; i < insertedVnodeQueue.length; ++i) {
            insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
        }
        for (i = 0; i < cbs.post.length; ++i)
            cbs.post[i]();
        return vnode;
    };
}
//# sourceMappingURL=init.js.map

/***/ }),

/***/ "./node_modules/snabbdom/build/is.js":
/*!*******************************************!*\
  !*** ./node_modules/snabbdom/build/is.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   array: () => (/* binding */ array),
/* harmony export */   primitive: () => (/* binding */ primitive)
/* harmony export */ });
const array = Array.isArray;
function primitive(s) {
    return (typeof s === "string" ||
        typeof s === "number" ||
        s instanceof String ||
        s instanceof Number);
}
//# sourceMappingURL=is.js.map

/***/ }),

/***/ "./node_modules/snabbdom/build/modules/attributes.js":
/*!***********************************************************!*\
  !*** ./node_modules/snabbdom/build/modules/attributes.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attributesModule: () => (/* binding */ attributesModule)
/* harmony export */ });
const xlinkNS = "http://www.w3.org/1999/xlink";
const xmlnsNS = "http://www.w3.org/2000/xmlns/";
const xmlNS = "http://www.w3.org/XML/1998/namespace";
const colonChar = 58;
const xChar = 120;
const mChar = 109;
function updateAttrs(oldVnode, vnode) {
    let key;
    const elm = vnode.elm;
    let oldAttrs = oldVnode.data.attrs;
    let attrs = vnode.data.attrs;
    if (!oldAttrs && !attrs)
        return;
    if (oldAttrs === attrs)
        return;
    oldAttrs = oldAttrs || {};
    attrs = attrs || {};
    // update modified attributes, add new attributes
    for (key in attrs) {
        const cur = attrs[key];
        const old = oldAttrs[key];
        if (old !== cur) {
            if (cur === true) {
                elm.setAttribute(key, "");
            }
            else if (cur === false) {
                elm.removeAttribute(key);
            }
            else {
                if (key.charCodeAt(0) !== xChar) {
                    elm.setAttribute(key, cur);
                }
                else if (key.charCodeAt(3) === colonChar) {
                    // Assume xml namespace
                    elm.setAttributeNS(xmlNS, key, cur);
                }
                else if (key.charCodeAt(5) === colonChar) {
                    // Assume 'xmlns' or 'xlink' namespace
                    key.charCodeAt(1) === mChar
                        ? elm.setAttributeNS(xmlnsNS, key, cur)
                        : elm.setAttributeNS(xlinkNS, key, cur);
                }
                else {
                    elm.setAttribute(key, cur);
                }
            }
        }
    }
    // remove removed attributes
    // use `in` operator since the previous `for` iteration uses it (.i.e. add even attributes with undefined value)
    // the other option is to remove all attributes with value == undefined
    for (key in oldAttrs) {
        if (!(key in attrs)) {
            elm.removeAttribute(key);
        }
    }
}
const attributesModule = {
    create: updateAttrs,
    update: updateAttrs
};
//# sourceMappingURL=attributes.js.map

/***/ }),

/***/ "./node_modules/snabbdom/build/modules/class.js":
/*!******************************************************!*\
  !*** ./node_modules/snabbdom/build/modules/class.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   classModule: () => (/* binding */ classModule)
/* harmony export */ });
function updateClass(oldVnode, vnode) {
    let cur;
    let name;
    const elm = vnode.elm;
    let oldClass = oldVnode.data.class;
    let klass = vnode.data.class;
    if (!oldClass && !klass)
        return;
    if (oldClass === klass)
        return;
    oldClass = oldClass || {};
    klass = klass || {};
    for (name in oldClass) {
        if (oldClass[name] && !Object.prototype.hasOwnProperty.call(klass, name)) {
            // was `true` and now not provided
            elm.classList.remove(name);
        }
    }
    for (name in klass) {
        cur = klass[name];
        if (cur !== oldClass[name]) {
            elm.classList[cur ? "add" : "remove"](name);
        }
    }
}
const classModule = { create: updateClass, update: updateClass };
//# sourceMappingURL=class.js.map

/***/ }),

/***/ "./node_modules/snabbdom/build/modules/eventlisteners.js":
/*!***************************************************************!*\
  !*** ./node_modules/snabbdom/build/modules/eventlisteners.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eventListenersModule: () => (/* binding */ eventListenersModule)
/* harmony export */ });
function invokeHandler(handler, vnode, event) {
    if (typeof handler === "function") {
        // call function handler
        handler.call(vnode, event, vnode);
    }
    else if (typeof handler === "object") {
        // call multiple handlers
        for (let i = 0; i < handler.length; i++) {
            invokeHandler(handler[i], vnode, event);
        }
    }
}
function handleEvent(event, vnode) {
    const name = event.type;
    const on = vnode.data.on;
    // call event handler(s) if exists
    if (on && on[name]) {
        invokeHandler(on[name], vnode, event);
    }
}
function createListener() {
    return function handler(event) {
        handleEvent(event, handler.vnode);
    };
}
function updateEventListeners(oldVnode, vnode) {
    const oldOn = oldVnode.data.on;
    const oldListener = oldVnode.listener;
    const oldElm = oldVnode.elm;
    const on = vnode && vnode.data.on;
    const elm = (vnode && vnode.elm);
    let name;
    // optimization for reused immutable handlers
    if (oldOn === on) {
        return;
    }
    // remove existing listeners which no longer used
    if (oldOn && oldListener) {
        // if element changed or deleted we remove all existing listeners unconditionally
        if (!on) {
            for (name in oldOn) {
                // remove listener if element was changed or existing listeners removed
                oldElm.removeEventListener(name, oldListener, false);
            }
        }
        else {
            for (name in oldOn) {
                // remove listener if existing listener removed
                if (!on[name]) {
                    oldElm.removeEventListener(name, oldListener, false);
                }
            }
        }
    }
    // add new listeners which has not already attached
    if (on) {
        // reuse existing listener or create new
        const listener = (vnode.listener =
            oldVnode.listener || createListener());
        // update vnode for listener
        listener.vnode = vnode;
        // if element changed or added we add all needed listeners unconditionally
        if (!oldOn) {
            for (name in on) {
                // add listener if element was changed or new listeners added
                elm.addEventListener(name, listener, false);
            }
        }
        else {
            for (name in on) {
                // add listener if new listener added
                if (!oldOn[name]) {
                    elm.addEventListener(name, listener, false);
                }
            }
        }
    }
}
const eventListenersModule = {
    create: updateEventListeners,
    update: updateEventListeners,
    destroy: updateEventListeners
};
//# sourceMappingURL=eventlisteners.js.map

/***/ }),

/***/ "./node_modules/snabbdom/build/modules/style.js":
/*!******************************************************!*\
  !*** ./node_modules/snabbdom/build/modules/style.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styleModule: () => (/* binding */ styleModule)
/* harmony export */ });
// Binding `requestAnimationFrame` like this fixes a bug in IE/Edge. See #360 and #409.
const raf = typeof (window === null || window === void 0 ? void 0 : window.requestAnimationFrame) === "function"
    ? window.requestAnimationFrame.bind(window)
    : setTimeout;
const nextFrame = (fn) => {
    raf(() => {
        raf(fn);
    });
};
let reflowForced = false;
function setNextFrame(obj, prop, val) {
    nextFrame(() => {
        obj[prop] = val;
    });
}
function updateStyle(oldVnode, vnode) {
    let cur;
    let name;
    const elm = vnode.elm;
    let oldStyle = oldVnode.data.style;
    let style = vnode.data.style;
    if (!oldStyle && !style)
        return;
    if (oldStyle === style)
        return;
    oldStyle = oldStyle || {};
    style = style || {};
    const oldHasDel = "delayed" in oldStyle;
    for (name in oldStyle) {
        if (!(name in style)) {
            if (name[0] === "-" && name[1] === "-") {
                elm.style.removeProperty(name);
            }
            else {
                elm.style[name] = "";
            }
        }
    }
    for (name in style) {
        cur = style[name];
        if (name === "delayed" && style.delayed) {
            for (const name2 in style.delayed) {
                cur = style.delayed[name2];
                if (!oldHasDel || cur !== oldStyle.delayed[name2]) {
                    setNextFrame(elm.style, name2, cur);
                }
            }
        }
        else if (name !== "remove" && cur !== oldStyle[name]) {
            if (name[0] === "-" && name[1] === "-") {
                elm.style.setProperty(name, cur);
            }
            else {
                elm.style[name] = cur;
            }
        }
    }
}
function applyDestroyStyle(vnode) {
    let style;
    let name;
    const elm = vnode.elm;
    const s = vnode.data.style;
    if (!s || !(style = s.destroy))
        return;
    for (name in style) {
        elm.style[name] = style[name];
    }
}
function applyRemoveStyle(vnode, rm) {
    const s = vnode.data.style;
    if (!s || !s.remove) {
        rm();
        return;
    }
    if (!reflowForced) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        vnode.elm.offsetLeft;
        reflowForced = true;
    }
    let name;
    const elm = vnode.elm;
    let i = 0;
    const style = s.remove;
    let amount = 0;
    const applied = [];
    for (name in style) {
        applied.push(name);
        elm.style[name] = style[name];
    }
    const compStyle = getComputedStyle(elm);
    const props = compStyle["transition-property"].split(", ");
    for (; i < props.length; ++i) {
        if (applied.indexOf(props[i]) !== -1)
            amount++;
    }
    elm.addEventListener("transitionend", (ev) => {
        if (ev.target === elm)
            --amount;
        if (amount === 0)
            rm();
    });
}
function forceReflow() {
    reflowForced = false;
}
const styleModule = {
    pre: forceReflow,
    create: updateStyle,
    update: updateStyle,
    destroy: applyDestroyStyle,
    remove: applyRemoveStyle
};
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/snabbdom/build/vnode.js":
/*!**********************************************!*\
  !*** ./node_modules/snabbdom/build/vnode.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vnode: () => (/* binding */ vnode)
/* harmony export */ });
function vnode(sel, data, children, text, elm) {
    const key = data === undefined ? undefined : data.key;
    return { sel, data, children, text, elm, key };
}
//# sourceMappingURL=vnode.js.map

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! snabbdom */ "./node_modules/snabbdom/build/init.js");
/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! snabbdom */ "./node_modules/snabbdom/build/modules/attributes.js");
/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! snabbdom */ "./node_modules/snabbdom/build/modules/class.js");
/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! snabbdom */ "./node_modules/snabbdom/build/modules/eventlisteners.js");
/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! snabbdom */ "./node_modules/snabbdom/build/modules/style.js");

const patch = (0,snabbdom__WEBPACK_IMPORTED_MODULE_0__.init)([snabbdom__WEBPACK_IMPORTED_MODULE_3__.eventListenersModule, snabbdom__WEBPACK_IMPORTED_MODULE_2__.classModule, snabbdom__WEBPACK_IMPORTED_MODULE_1__.attributesModule, snabbdom__WEBPACK_IMPORTED_MODULE_4__.styleModule]);
const app = (initModel, view, update, rootNode) => {
    const dispatch = (message) => {
        model = update(model, message);
        const updatedVNode = view(model, dispatch);
        domNode = patch(domNode, updatedVNode);
        currentVNode = updatedVNode;
    };
    let model = initModel;
    let currentVNode = view(model, dispatch);
    let domNode = patch(rootNode, currentVNode);
};


/***/ }),

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bevelSize: () => (/* binding */ bevelSize),
/* harmony export */   bodyMargin: () => (/* binding */ bodyMargin),
/* harmony export */   fontMap: () => (/* binding */ fontMap),
/* harmony export */   jigSizeX: () => (/* binding */ jigSizeX),
/* harmony export */   jigSizeY: () => (/* binding */ jigSizeY),
/* harmony export */   maxWidth: () => (/* binding */ maxWidth),
/* harmony export */   numColumns: () => (/* binding */ numColumns),
/* harmony export */   numRows: () => (/* binding */ numRows),
/* harmony export */   plateSizeX: () => (/* binding */ plateSizeX),
/* harmony export */   plateSizeY: () => (/* binding */ plateSizeY),
/* harmony export */   unitCellX: () => (/* binding */ unitCellX),
/* harmony export */   unitCellY: () => (/* binding */ unitCellY),
/* harmony export */   wallThickness: () => (/* binding */ wallThickness)
/* harmony export */ });
const plateSizeX = 80.75;
const plateSizeY = 16.35;
const bevelSize = 1.5;
const wallThickness = 5.0;
const numRows = 8;
const numColumns = 2;
const unitCellX = plateSizeX + wallThickness;
const unitCellY = plateSizeY + wallThickness;
const jigSizeX = unitCellX * numColumns;
const jigSizeY = unitCellY * numRows;
const bodyMargin = 2;
const fontMap = {
    'Script': { 'font-family': 'Monotype Corsiva Regular', 'font-style': 'regular', 'defaultSize': 6 },
    'Classic Script': { 'font-family': 'Dancing Script', 'font-style': 'regular', 'defaultSize': 6 },
    'Italic': { 'font-family': 'Gentium Book Plus', 'font-style': 'italic', 'defaultSize': 5.5 },
    'Serif': { 'font-family': 'Merriweather', 'font-style': 'regular', 'defaultSize': 4.5 },
    'Sans Serif': { 'font-family': 'Roboto Medium', 'font-style': 'regular', 'defaultSize': 4.5 },
    'Handwritten': { 'font-family': 'Caveat', 'font-style': 'regular', 'defaultSize': 7 },
};
const maxWidth = plateSizeX - 14;


/***/ }),

/***/ "./src/model.ts":
/*!**********************!*\
  !*** ./src/model.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initModel: () => (/* binding */ initModel)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");

const initModel = {
    plateList: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEmptyPlateArray)(),
    selectedPlate: null
};


/***/ }),

/***/ "./src/update.ts":
/*!***********************!*\
  !*** ./src/update.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   update: () => (/* binding */ update)
/* harmony export */ });
const update = (model, message) => {
    const [messageType, ...rest] = message;
    switch (messageType) {
        case "select plate text": {
            const [index] = rest;
            return Object.assign(Object.assign({}, model), { selectedPlate: [index, 'text'] });
        }
        case 'select plate font': {
            const [index] = rest;
            return Object.assign(Object.assign({}, model), { selectedPlate: [index, 'font'] });
        }
        case "edit plate text": {
            const [targetIndex, text] = rest;
            const newPlateList = model.plateList.map((plate, index) => index === targetIndex ? Object.assign(Object.assign({}, plate), { text }) : plate);
            return Object.assign(Object.assign({}, model), { plateList: newPlateList });
        }
        case 'edit plate font': {
            const [targetIndex, font] = rest;
            const newPlateList = model.plateList.map((plate, index) => index === targetIndex ? Object.assign(Object.assign({}, plate), { font }) : plate);
            return Object.assign(Object.assign({}, model), { plateList: newPlateList });
        }
        case "deselect plate": {
            return Object.assign(Object.assign({}, model), { selectedPlate: null });
        }
    }
};


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEmptyPlateArray: () => (/* binding */ createEmptyPlateArray),
/* harmony export */   getFontSizeToFit: () => (/* binding */ getFontSizeToFit),
/* harmony export */   getPlatePosition: () => (/* binding */ getPlatePosition),
/* harmony export */   getRowAndColumn: () => (/* binding */ getRowAndColumn),
/* harmony export */   sizeMultiplier: () => (/* binding */ sizeMultiplier)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.ts");

const createEmptyPlateArray = () => {
    return Array.from({ length: 16 }, (value, index) => {
        return {
            text: "",
            font: "Script",
        };
    });
};
const getPlatePosition = (index, anchor) => {
    const [row, column] = getRowAndColumn(index);
    let x = column * _data__WEBPACK_IMPORTED_MODULE_0__.unitCellX + _data__WEBPACK_IMPORTED_MODULE_0__.wallThickness / 2;
    let y = row * _data__WEBPACK_IMPORTED_MODULE_0__.unitCellY + _data__WEBPACK_IMPORTED_MODULE_0__.wallThickness / 2;
    if (anchor === 'center')
        [x, y] = [x + _data__WEBPACK_IMPORTED_MODULE_0__.plateSizeX / 2, y + _data__WEBPACK_IMPORTED_MODULE_0__.plateSizeY / 2];
    return [x, y];
};
const getRowAndColumn = (index) => {
    return [Math.floor(index / _data__WEBPACK_IMPORTED_MODULE_0__.numColumns), index % _data__WEBPACK_IMPORTED_MODULE_0__.numColumns];
};
const getFontSizeToFit = (plate) => {
    const { text, font } = plate;
    const defaultFontSize = _data__WEBPACK_IMPORTED_MODULE_0__.fontMap[font].defaultSize;
    const maxWidthPx = _data__WEBPACK_IMPORTED_MODULE_0__.maxWidth * 3.78; // mm to px
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.style.position = "absolute";
    svg.style.visibility = "hidden";
    document.body.appendChild(svg);
    const tempText = document.createElementNS(svgNS, "text");
    tempText.setAttribute("font-family", _data__WEBPACK_IMPORTED_MODULE_0__.fontMap[font]["font-family"]);
    tempText.setAttribute("font-style", _data__WEBPACK_IMPORTED_MODULE_0__.fontMap[font]["font-style"]);
    tempText.setAttribute("font-size", `${defaultFontSize}mm`);
    tempText.textContent = text;
    svg.appendChild(tempText);
    const textWidth = tempText.getComputedTextLength();
    document.body.removeChild(svg);
    if (textWidth <= maxWidthPx)
        return defaultFontSize;
    return defaultFontSize * (maxWidthPx / textWidth);
};
const sizeMultiplier = (plate) => {
    const { text } = plate;
    let initialMultiplier = 1;
    if (uppercaseFraction(text) > 0.8)
        initialMultiplier *= 0.95;
    else if (uppercaseFraction(text) > 0.5)
        initialMultiplier *= 0.9;
    if (alphanumericLength(text) <= 2)
        initialMultiplier *= 1.2;
    if (alphanumericLength(text) <= 3)
        initialMultiplier *= 1.1;
    return initialMultiplier;
};
const uppercaseFraction = (input) => {
    let total = 0;
    let upper = 0;
    for (const ch of input) {
        if (/^[A-Za-z0-9]$/.test(ch)) {
            total++;
            // Digits count as uppercase
            if (/[A-Z0-9]/.test(ch)) {
                upper++;
            }
        }
    }
    return total === 0 ? 0 : upper / total;
};
const alphanumericLength = (input) => {
    let count = 0;
    for (const ch of input) {
        if (/^[A-Za-z0-9]$/.test(ch)) {
            count++;
        }
    }
    return count;
};


/***/ }),

/***/ "./src/view.ts":
/*!*********************!*\
  !*** ./src/view.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   view: () => (/* binding */ view)
/* harmony export */ });
/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! snabbdom */ "./node_modules/snabbdom/build/h.js");
/* harmony import */ var hyperscript_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hyperscript-helpers */ "./node_modules/hyperscript-helpers/dist/index.js");
/* harmony import */ var hyperscript_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hyperscript_helpers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/data.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");




const { div, button, svg, input, select, option, span } = hyperscript_helpers__WEBPACK_IMPORTED_MODULE_1___default()(snabbdom__WEBPACK_IMPORTED_MODULE_0__.h);
const unitCell = (index, dispatch) => {
    const [x, y] = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getPlatePosition)(index, 'topLeft');
    return [
        (0,snabbdom__WEBPACK_IMPORTED_MODULE_0__.h)('rect', {
            attrs: {
                x: `${x}mm`,
                y: `${y}mm`,
                width: `${_data__WEBPACK_IMPORTED_MODULE_2__.plateSizeX}mm`,
                height: `${_data__WEBPACK_IMPORTED_MODULE_2__.plateSizeY}mm`,
                stroke: 'gold',
                fill: 'transparent'
            },
            on: {
                click: () => dispatch(['select plate text', index])
            }
        }),
        (0,snabbdom__WEBPACK_IMPORTED_MODULE_0__.h)('rect', {
            attrs: {
                x: `${x + _data__WEBPACK_IMPORTED_MODULE_2__.bevelSize}mm`,
                y: `${y + _data__WEBPACK_IMPORTED_MODULE_2__.bevelSize}mm`,
                width: `${_data__WEBPACK_IMPORTED_MODULE_2__.plateSizeX - 2 * _data__WEBPACK_IMPORTED_MODULE_2__.bevelSize}mm`,
                height: `${_data__WEBPACK_IMPORTED_MODULE_2__.plateSizeY - 2 * _data__WEBPACK_IMPORTED_MODULE_2__.bevelSize}mm`,
                stroke: 'gold',
                fill: 'none'
            }
        })
    ];
};
const border = (0,snabbdom__WEBPACK_IMPORTED_MODULE_0__.h)('rect', {
    attrs: {
        x: `0mm`,
        y: `0mm`,
        width: `${_data__WEBPACK_IMPORTED_MODULE_2__.jigSizeX}mm`,
        height: `${_data__WEBPACK_IMPORTED_MODULE_2__.jigSizeY}mm`,
        stroke: 'gold',
        fill: 'none'
    }
});
const unitText = (index, plate) => {
    const [x, y] = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getPlatePosition)(index, 'center');
    const fontSize = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getFontSizeToFit)(plate) * (0,_utils__WEBPACK_IMPORTED_MODULE_3__.sizeMultiplier)(plate);
    const baseLineCorrection = fontSize * 0.35;
    return (0,snabbdom__WEBPACK_IMPORTED_MODULE_0__.h)('text', {
        attrs: {
            x: `${x}mm`,
            y: `${y + baseLineCorrection}mm`,
            'text-anchor': 'middle',
            'dominant-baseline': 'auto',
            'font-size': `${fontSize}mm`,
            'font-family': _data__WEBPACK_IMPORTED_MODULE_2__.fontMap[plate.font]['font-family'],
            'font-style': _data__WEBPACK_IMPORTED_MODULE_2__.fontMap[plate.font]['font-style']
        }
    }, plate.text);
};
const editFontInput = (model, dispatch) => {
    if (model.selectedPlate === null)
        return null;
    const [index, editOption] = model.selectedPlate;
    if (editOption === 'text')
        return null;
    const plate = model.plateList[index];
    let [x, y] = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getPlatePosition)(index, 'topLeft');
    [x, y] = [x + _data__WEBPACK_IMPORTED_MODULE_2__.bodyMargin, y + _data__WEBPACK_IMPORTED_MODULE_2__.bodyMargin];
    const fontInput = select({
        style: {
            position: 'absolute',
            left: `${x + _data__WEBPACK_IMPORTED_MODULE_2__.plateSizeX * 3 / 4}mm`,
            top: `${y}mm`,
            width: `${_data__WEBPACK_IMPORTED_MODULE_2__.plateSizeX * 1 / 4}mm`,
            height: `${_data__WEBPACK_IMPORTED_MODULE_2__.plateSizeY}mm`,
            'font-family': _data__WEBPACK_IMPORTED_MODULE_2__.fontMap[plate.font]['font-family'],
            'font-style': _data__WEBPACK_IMPORTED_MODULE_2__.fontMap[plate.font]['font-style']
        },
        hook: {
            insert: (vnode) => {
                const selectElement = vnode.elm;
                selectElement.focus();
            }
        },
        on: {
            change: (e) => dispatch(['edit plate font', index, e.target.value]),
            blur: () => dispatch(['deselect plate', index])
        }
    }, Object.keys(_data__WEBPACK_IMPORTED_MODULE_2__.fontMap).map(fontName => {
        const name = fontName;
        return option({
            attrs: {
                value: fontName,
                selected: fontName === model.plateList[index].font
            },
            style: {
                'font-family': _data__WEBPACK_IMPORTED_MODULE_2__.fontMap[name]['font-family'],
                'font-style': _data__WEBPACK_IMPORTED_MODULE_2__.fontMap[name]['font-style']
            }
        }, fontName);
    }));
    return fontInput;
};
const fontSelectArrows = (model, dispatch) => {
    const bodyMargin = 2;
    const arrow = (index) => {
        if (model.selectedPlate !== null && index === model.selectedPlate[0])
            return null;
        let [x, y] = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getPlatePosition)(index, 'topLeft');
        [x, y] = [x + bodyMargin + _data__WEBPACK_IMPORTED_MODULE_2__.plateSizeX * 7 / 8, y + bodyMargin + _data__WEBPACK_IMPORTED_MODULE_2__.plateSizeY / 4];
        return span({
            attrs: {
                value: model.plateList[index].font
            },
            style: {
                position: 'absolute',
                left: `${x}mm`,
                top: `${y}mm`,
                'font-size': '6mm',
                color: 'gold',
                opacity: 0.5
            },
            on: {
                pointerdown: (e) => {
                    e.preventDefault();
                    dispatch(['select plate font', index]);
                }
            }
        }, '▼');
    };
    return div(Array.from({ length: _data__WEBPACK_IMPORTED_MODULE_2__.numColumns * _data__WEBPACK_IMPORTED_MODULE_2__.numRows }, (_, index) => {
        return arrow(index);
    }));
};
const editTextInput = (model, dispatch) => {
    if (model.selectedPlate === null)
        return null;
    const [index, editOption] = model.selectedPlate;
    if (editOption === 'font')
        return null;
    const plate = model.plateList[index];
    let [x, y] = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getPlatePosition)(index, 'topLeft');
    [x, y] = [x + _data__WEBPACK_IMPORTED_MODULE_2__.bodyMargin, y + _data__WEBPACK_IMPORTED_MODULE_2__.bodyMargin];
    const fontSize = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getFontSizeToFit)(plate) * (0,_utils__WEBPACK_IMPORTED_MODULE_3__.sizeMultiplier)(plate);
    const textInput = input({
        attrs: {
            type: 'text',
            value: model.plateList[index].text,
        },
        style: {
            padding: 0,
            border: 0,
            position: 'absolute',
            left: `${x}mm`,
            top: `${y}mm`,
            width: `${_data__WEBPACK_IMPORTED_MODULE_2__.plateSizeX}mm`,
            height: `${_data__WEBPACK_IMPORTED_MODULE_2__.plateSizeY}mm`,
            'text-align': 'center',
            'font-size': `${fontSize}mm`,
            'font-family': _data__WEBPACK_IMPORTED_MODULE_2__.fontMap[plate.font]['font-family'],
            'font-style': _data__WEBPACK_IMPORTED_MODULE_2__.fontMap[plate.font]['font-style']
        },
        hook: {
            insert: (vnode) => {
                const inputElement = vnode.elm;
                inputElement.focus();
                inputElement.select();
            }
        },
        on: {
            input: (e) => dispatch(['edit plate text', index, e.target.value]),
            blur: () => dispatch(['deselect plate', index]),
            keydown: (e) => {
                if (e.key === 'Escape' || e.key === 'Enter')
                    dispatch(['deselect plate', index]);
            }
        },
    });
    return textInput;
};
const renderSvg = (model, dispatch) => {
    return svg({
        attrs: {
            width: `${_data__WEBPACK_IMPORTED_MODULE_2__.jigSizeX}mm`,
            height: `${_data__WEBPACK_IMPORTED_MODULE_2__.jigSizeY}mm`,
        }
    }, [
        border,
        ...model.plateList.map((plate, index) => {
            return unitText(index, plate);
        }),
        ...Array.from({ length: _data__WEBPACK_IMPORTED_MODULE_2__.numColumns * _data__WEBPACK_IMPORTED_MODULE_2__.numRows }, (_, index) => {
            return unitCell(index, dispatch);
        }).flat()
    ]);
};
const downloadButton = button({
    on: {
        click: () => downloadSvg()
    }
}, "Download SVG");
const downloadSvg = () => {
    const svgElement = document.querySelector("svg");
    if (!svgElement)
        return;
    // Serialize SVG
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svgElement);
    // Add XML header (optional but good for proper SVG files)
    const svgBlob = new Blob(['<?xml version="1.0" standalone="no"?>\n' + source], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    // Trigger download
    const link = document.createElement("a");
    link.href = url;
    link.download = "plates.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};
const view = (model, dispatch) => {
    return div([
        renderSvg(model, dispatch),
        fontSelectArrows(model, dispatch),
        editTextInput(model, dispatch),
        editFontInput(model, dispatch),
        downloadButton
    ]);
};


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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/model.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./src/view.ts");
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update */ "./src/update.ts");




const root = document.getElementById('app');
(0,_app__WEBPACK_IMPORTED_MODULE_0__.app)(_model__WEBPACK_IMPORTED_MODULE_1__.initModel, _view__WEBPACK_IMPORTED_MODULE_2__.view, _update__WEBPACK_IMPORTED_MODULE_3__.update, root);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5RkFBeUYsYUFBYTtBQUN0RztBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q21DO0FBQ0w7QUFDdkI7QUFDUDtBQUNBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseUNBQVE7QUFDcEI7QUFDQTtBQUNBLGlCQUFpQiw2Q0FBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseUNBQVE7QUFDcEI7QUFDQTtBQUNBLGlCQUFpQiw2Q0FBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekMsZ0JBQWdCLDZDQUFZO0FBQzVCLDhCQUE4QixnREFBSztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdEQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsUUFBUSx5Q0FBUTtBQUNoQjtBQUNBO0FBQ0EsYUFBYSw2Q0FBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYztBQUN0QyxnQkFBZ0IsNkNBQVk7QUFDNUIsdUJBQXVCLGdEQUFLO0FBQzVCO0FBQ0E7QUFDQSxXQUFXLGdEQUFLLGNBQWM7QUFDOUI7QUFDQSw2Qjs7Ozs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pIbUM7QUFDTDtBQUNlO0FBQzdDLGtCQUFrQixnREFBSyxPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHNEQUFVO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdEQUFLLDRDQUE0QztBQUNoRTtBQUNBO0FBQ0EsZUFBZSxnREFBSyxjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQSxnQkFBZ0IsNkNBQVk7QUFDNUIsa0JBQWtCLHlDQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix5Q0FBUTtBQUN4Qiw0QkFBNEIscUJBQXFCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQSx3QkFBd0IsMkJBQTJCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0JBQW9CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQSxnQ0FBZ0MsMkJBQTJCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQkFBb0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsdUJBQXVCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRTtBQUMvRSxxRkFBcUY7QUFDckYsNEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtCQUErQjtBQUNuRDtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDOzs7Ozs7Ozs7Ozs7Ozs7QUN2WE87QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Qjs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHNDOzs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHNCQUFzQjtBQUM3QixpQzs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDOzs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0JBQWtCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUMsS0FBWSxFQUFFLFFBQW9DLEVBQUUsRUFBRTtJQUN2RSxPQUFPLEdBQUcsQ0FBQztRQUNQLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO1FBQzFCLGdCQUFnQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7UUFDakMsYUFBYSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7UUFDOUIsYUFBYSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7UUFDOUIsY0FBYztLQUNqQixDQUFDO0FBQ04sQ0FBQzs7Ozs7OztVQzNSRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTjJCO0FBQ1E7QUFDTjtBQUNJO0FBRWpDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFnQjtBQUUxRCx5Q0FBRyxDQUFDLDZDQUFTLEVBQUUsdUNBQUksRUFBRSwyQ0FBTSxFQUFFLElBQUksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hc3RlcmluZy10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL2h5cGVyc2NyaXB0LWhlbHBlcnMvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC9oLmpzIiwid2VicGFjazovL21hc3RlcmluZy10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3NuYWJiZG9tL2J1aWxkL2h0bWxkb21hcGkuanMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvLi9ub2RlX21vZHVsZXMvc25hYmJkb20vYnVpbGQvaW5pdC5qcyIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC9pcy5qcyIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC9tb2R1bGVzL2F0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvLi9ub2RlX21vZHVsZXMvc25hYmJkb20vYnVpbGQvbW9kdWxlcy9jbGFzcy5qcyIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC9tb2R1bGVzL2V2ZW50bGlzdGVuZXJzLmpzIiwid2VicGFjazovL21hc3RlcmluZy10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3NuYWJiZG9tL2J1aWxkL21vZHVsZXMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvLi9ub2RlX21vZHVsZXMvc25hYmJkb20vYnVpbGQvdm5vZGUuanMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL21hc3RlcmluZy10eXBlc2NyaXB0Ly4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvLi9zcmMvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvLi9zcmMvdXBkYXRlLnRzIiwid2VicGFjazovL21hc3RlcmluZy10eXBlc2NyaXB0Ly4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL21hc3RlcmluZy10eXBlc2NyaXB0Ly4vc3JjL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hc3RlcmluZy10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGlzVmFsaWRTdHJpbmcgPSBmdW5jdGlvbiBpc1ZhbGlkU3RyaW5nKHBhcmFtKSB7XG4gIHJldHVybiB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnICYmIHBhcmFtLmxlbmd0aCA+IDA7XG59O1xuXG52YXIgc3RhcnRzV2l0aCA9IGZ1bmN0aW9uIHN0YXJ0c1dpdGgoc3RyaW5nLCBzdGFydCkge1xuICByZXR1cm4gc3RyaW5nWzBdID09PSBzdGFydDtcbn07XG5cbnZhciBpc1NlbGVjdG9yID0gZnVuY3Rpb24gaXNTZWxlY3RvcihwYXJhbSkge1xuICByZXR1cm4gaXNWYWxpZFN0cmluZyhwYXJhbSkgJiYgKHN0YXJ0c1dpdGgocGFyYW0sICcuJykgfHwgc3RhcnRzV2l0aChwYXJhbSwgJyMnKSk7XG59O1xuXG52YXIgbm9kZSA9IGZ1bmN0aW9uIG5vZGUoaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhZ05hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGZpcnN0KSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgcmVzdFtfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1NlbGVjdG9yKGZpcnN0KSkge1xuICAgICAgICByZXR1cm4gaC5hcHBseSh1bmRlZmluZWQsIFt0YWdOYW1lICsgZmlyc3RdLmNvbmNhdChyZXN0KSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGgodGFnTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaC5hcHBseSh1bmRlZmluZWQsIFt0YWdOYW1lLCBmaXJzdF0uY29uY2F0KHJlc3QpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufTtcblxudmFyIFRBR19OQU1FUyA9IFsnYScsICdhYmJyJywgJ2Fjcm9ueW0nLCAnYWRkcmVzcycsICdhcHBsZXQnLCAnYXJlYScsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2F1ZGlvJywgJ2InLCAnYmFzZScsICdiYXNlZm9udCcsICdiZGknLCAnYmRvJywgJ2Jnc291bmQnLCAnYmlnJywgJ2JsaW5rJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdicicsICdidXR0b24nLCAnY2FudmFzJywgJ2NhcHRpb24nLCAnY2VudGVyJywgJ2NpdGUnLCAnY29kZScsICdjb2wnLCAnY29sZ3JvdXAnLCAnY29tbWFuZCcsICdjb250ZW50JywgJ2RhdGEnLCAnZGF0YWxpc3QnLCAnZGQnLCAnZGVsJywgJ2RldGFpbHMnLCAnZGZuJywgJ2RpYWxvZycsICdkaXInLCAnZGl2JywgJ2RsJywgJ2R0JywgJ2VsZW1lbnQnLCAnZW0nLCAnZW1iZWQnLCAnZmllbGRzZXQnLCAnZmlnY2FwdGlvbicsICdmaWd1cmUnLCAnZm9udCcsICdmb290ZXInLCAnZm9ybScsICdmcmFtZScsICdmcmFtZXNldCcsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkJywgJ2hlYWRlcicsICdoZ3JvdXAnLCAnaHInLCAnaHRtbCcsICdpJywgJ2lmcmFtZScsICdpbWFnZScsICdpbWcnLCAnaW5wdXQnLCAnaW5zJywgJ2lzaW5kZXgnLCAna2JkJywgJ2tleWdlbicsICdsYWJlbCcsICdsZWdlbmQnLCAnbGknLCAnbGluaycsICdsaXN0aW5nJywgJ21haW4nLCAnbWFwJywgJ21hcmsnLCAnbWFycXVlZScsICdtYXRoJywgJ21lbnUnLCAnbWVudWl0ZW0nLCAnbWV0YScsICdtZXRlcicsICdtdWx0aWNvbCcsICduYXYnLCAnbmV4dGlkJywgJ25vYnInLCAnbm9lbWJlZCcsICdub2ZyYW1lcycsICdub3NjcmlwdCcsICdvYmplY3QnLCAnb2wnLCAnb3B0Z3JvdXAnLCAnb3B0aW9uJywgJ291dHB1dCcsICdwJywgJ3BhcmFtJywgJ3BpY3R1cmUnLCAncGxhaW50ZXh0JywgJ3ByZScsICdwcm9ncmVzcycsICdxJywgJ3JiJywgJ3JiYycsICdycCcsICdydCcsICdydGMnLCAncnVieScsICdzJywgJ3NhbXAnLCAnc2NyaXB0JywgJ3NlY3Rpb24nLCAnc2VsZWN0JywgJ3NoYWRvdycsICdzbG90JywgJ3NtYWxsJywgJ3NvdXJjZScsICdzcGFjZXInLCAnc3BhbicsICdzdHJpa2UnLCAnc3Ryb25nJywgJ3N0eWxlJywgJ3N1YicsICdzdW1tYXJ5JywgJ3N1cCcsICdzdmcnLCAndGFibGUnLCAndGJvZHknLCAndGQnLCAndGVtcGxhdGUnLCAndGV4dGFyZWEnLCAndGZvb3QnLCAndGgnLCAndGhlYWQnLCAndGltZScsICd0aXRsZScsICd0cicsICd0cmFjaycsICd0dCcsICd1JywgJ3VsJywgJ3ZhcicsICd2aWRlbycsICd3YnInLCAneG1wJ107XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChoKSB7XG4gIHZhciBjcmVhdGVUYWcgPSBub2RlKGgpO1xuICB2YXIgZXhwb3J0ZWQgPSB7IFRBR19OQU1FUzogVEFHX05BTUVTLCBpc1NlbGVjdG9yOiBpc1NlbGVjdG9yLCBjcmVhdGVUYWc6IGNyZWF0ZVRhZyB9O1xuICBUQUdfTkFNRVMuZm9yRWFjaChmdW5jdGlvbiAobikge1xuICAgIGV4cG9ydGVkW25dID0gY3JlYXRlVGFnKG4pO1xuICB9KTtcbiAgcmV0dXJuIGV4cG9ydGVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiaW1wb3J0IHsgdm5vZGUgfSBmcm9tIFwiLi92bm9kZS5qc1wiO1xuaW1wb3J0ICogYXMgaXMgZnJvbSBcIi4vaXMuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBhZGROUyhkYXRhLCBjaGlsZHJlbiwgc2VsKSB7XG4gICAgZGF0YS5ucyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiAgICBpZiAoc2VsICE9PSBcImZvcmVpZ25PYmplY3RcIiAmJiBjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgY2hpbGREYXRhID0gY2hpbGQuZGF0YTtcbiAgICAgICAgICAgIGlmIChjaGlsZERhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGFkZE5TKGNoaWxkRGF0YSwgY2hpbGQuY2hpbGRyZW4sIGNoaWxkLnNlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaChzZWwsIGIsIGMpIHtcbiAgICBsZXQgZGF0YSA9IHt9O1xuICAgIGxldCBjaGlsZHJlbjtcbiAgICBsZXQgdGV4dDtcbiAgICBsZXQgaTtcbiAgICBpZiAoYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChiICE9PSBudWxsKSB7XG4gICAgICAgICAgICBkYXRhID0gYjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXMuYXJyYXkoYykpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gYztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpcy5wcmltaXRpdmUoYykpIHtcbiAgICAgICAgICAgIHRleHQgPSBjLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyAmJiBjLnNlbCkge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBbY107XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoYiAhPT0gdW5kZWZpbmVkICYmIGIgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzLmFycmF5KGIpKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IGI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXMucHJpbWl0aXZlKGIpKSB7XG4gICAgICAgICAgICB0ZXh0ID0gYi50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGIgJiYgYi5zZWwpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gW2JdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGF0YSA9IGI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoaXMucHJpbWl0aXZlKGNoaWxkcmVuW2ldKSlcbiAgICAgICAgICAgICAgICBjaGlsZHJlbltpXSA9IHZub2RlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNoaWxkcmVuW2ldLCB1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzZWwuc3RhcnRzV2l0aChcInN2Z1wiKSAmJlxuICAgICAgICAoc2VsLmxlbmd0aCA9PT0gMyB8fCBzZWxbM10gPT09IFwiLlwiIHx8IHNlbFszXSA9PT0gXCIjXCIpKSB7XG4gICAgICAgIGFkZE5TKGRhdGEsIGNoaWxkcmVuLCBzZWwpO1xuICAgIH1cbiAgICByZXR1cm4gdm5vZGUoc2VsLCBkYXRhLCBjaGlsZHJlbiwgdGV4dCwgdW5kZWZpbmVkKTtcbn1cbi8qKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJhZ21lbnQoY2hpbGRyZW4pIHtcbiAgICBsZXQgYztcbiAgICBsZXQgdGV4dDtcbiAgICBpZiAoaXMuYXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIGMgPSBjaGlsZHJlbjtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXMucHJpbWl0aXZlKGMpKSB7XG4gICAgICAgIHRleHQgPSBjaGlsZHJlbjtcbiAgICB9XG4gICAgZWxzZSBpZiAoYyAmJiBjLnNlbCkge1xuICAgICAgICBjID0gW2NoaWxkcmVuXTtcbiAgICB9XG4gICAgaWYgKGMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChpcy5wcmltaXRpdmUoY1tpXSkpXG4gICAgICAgICAgICAgICAgY1tpXSA9IHZub2RlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNbaV0sIHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZub2RlKHVuZGVmaW5lZCwge30sIGMsIHRleHQsIHVuZGVmaW5lZCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oLmpzLm1hcCIsImZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSB7XG4gICAgcmV0dXJuIHBhcnNlRnJhZ21lbnQoZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVRleHROb2RlKHRleHQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVDb21tZW50KHRleHQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0ZXh0KTtcbn1cbmZ1bmN0aW9uIGluc2VydEJlZm9yZShwYXJlbnROb2RlLCBuZXdOb2RlLCByZWZlcmVuY2VOb2RlKSB7XG4gICAgaWYgKGlzRG9jdW1lbnRGcmFnbWVudChwYXJlbnROb2RlKSkge1xuICAgICAgICBsZXQgbm9kZSA9IHBhcmVudE5vZGU7XG4gICAgICAgIHdoaWxlIChub2RlICYmIGlzRG9jdW1lbnRGcmFnbWVudChub2RlKSkge1xuICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBwYXJzZUZyYWdtZW50KG5vZGUpO1xuICAgICAgICAgICAgbm9kZSA9IGZyYWdtZW50LnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnROb2RlID0gbm9kZSAhPT0gbnVsbCAmJiBub2RlICE9PSB2b2lkIDAgPyBub2RlIDogcGFyZW50Tm9kZTtcbiAgICB9XG4gICAgaWYgKGlzRG9jdW1lbnRGcmFnbWVudChuZXdOb2RlKSkge1xuICAgICAgICBuZXdOb2RlID0gcGFyc2VGcmFnbWVudChuZXdOb2RlLCBwYXJlbnROb2RlKTtcbiAgICB9XG4gICAgaWYgKHJlZmVyZW5jZU5vZGUgJiYgaXNEb2N1bWVudEZyYWdtZW50KHJlZmVyZW5jZU5vZGUpKSB7XG4gICAgICAgIHJlZmVyZW5jZU5vZGUgPSBwYXJzZUZyYWdtZW50KHJlZmVyZW5jZU5vZGUpLmZpcnN0Q2hpbGROb2RlO1xuICAgIH1cbiAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2VOb2RlKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkKG5vZGUsIGNoaWxkKSB7XG4gICAgbm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG59XG5mdW5jdGlvbiBhcHBlbmRDaGlsZChub2RlLCBjaGlsZCkge1xuICAgIGlmIChpc0RvY3VtZW50RnJhZ21lbnQoY2hpbGQpKSB7XG4gICAgICAgIGNoaWxkID0gcGFyc2VGcmFnbWVudChjaGlsZCwgbm9kZSk7XG4gICAgfVxuICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpO1xufVxuZnVuY3Rpb24gcGFyZW50Tm9kZShub2RlKSB7XG4gICAgaWYgKGlzRG9jdW1lbnRGcmFnbWVudChub2RlKSkge1xuICAgICAgICB3aGlsZSAobm9kZSAmJiBpc0RvY3VtZW50RnJhZ21lbnQobm9kZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gcGFyc2VGcmFnbWVudChub2RlKTtcbiAgICAgICAgICAgIG5vZGUgPSBmcmFnbWVudC5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGUgIT09IG51bGwgJiYgbm9kZSAhPT0gdm9pZCAwID8gbm9kZSA6IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBub2RlLnBhcmVudE5vZGU7XG59XG5mdW5jdGlvbiBuZXh0U2libGluZyhub2RlKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChpc0RvY3VtZW50RnJhZ21lbnQobm9kZSkpIHtcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBwYXJzZUZyYWdtZW50KG5vZGUpO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBwYXJlbnROb2RlKGZyYWdtZW50KTtcbiAgICAgICAgaWYgKHBhcmVudCAmJiBmcmFnbWVudC5sYXN0Q2hpbGROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkTm9kZXMpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjaGlsZHJlbi5pbmRleE9mKGZyYWdtZW50Lmxhc3RDaGlsZE5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIChfYSA9IGNoaWxkcmVuW2luZGV4ICsgMV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBub2RlLm5leHRTaWJsaW5nO1xufVxuZnVuY3Rpb24gdGFnTmFtZShlbG0pIHtcbiAgICByZXR1cm4gZWxtLnRhZ05hbWU7XG59XG5mdW5jdGlvbiBzZXRUZXh0Q29udGVudChub2RlLCB0ZXh0KSB7XG4gICAgbm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG59XG5mdW5jdGlvbiBnZXRUZXh0Q29udGVudChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUudGV4dENvbnRlbnQ7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQobm9kZSkge1xuICAgIHJldHVybiBub2RlLm5vZGVUeXBlID09PSAxO1xufVxuZnVuY3Rpb24gaXNUZXh0KG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gMztcbn1cbmZ1bmN0aW9uIGlzQ29tbWVudChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IDg7XG59XG5mdW5jdGlvbiBpc0RvY3VtZW50RnJhZ21lbnQobm9kZSkge1xuICAgIHJldHVybiBub2RlLm5vZGVUeXBlID09PSAxMTtcbn1cbmZ1bmN0aW9uIHBhcnNlRnJhZ21lbnQoZnJhZ21lbnROb2RlLCBwYXJlbnROb2RlKSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBmcmFnbWVudE5vZGU7XG4gICAgKF9hID0gZnJhZ21lbnQucGFyZW50KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoZnJhZ21lbnQucGFyZW50ID0gcGFyZW50Tm9kZSAhPT0gbnVsbCAmJiBwYXJlbnROb2RlICE9PSB2b2lkIDAgPyBwYXJlbnROb2RlIDogbnVsbCk7XG4gICAgKF9iID0gZnJhZ21lbnQuZmlyc3RDaGlsZE5vZGUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IChmcmFnbWVudC5maXJzdENoaWxkTm9kZSA9IGZyYWdtZW50Tm9kZS5maXJzdENoaWxkKTtcbiAgICAoX2MgPSBmcmFnbWVudC5sYXN0Q2hpbGROb2RlKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAoZnJhZ21lbnQubGFzdENoaWxkTm9kZSA9IGZyYWdtZW50Tm9kZS5sYXN0Q2hpbGQpO1xuICAgIHJldHVybiBmcmFnbWVudDtcbn1cbmV4cG9ydCBjb25zdCBodG1sRG9tQXBpID0ge1xuICAgIGNyZWF0ZUVsZW1lbnQsXG4gICAgY3JlYXRlRWxlbWVudE5TLFxuICAgIGNyZWF0ZVRleHROb2RlLFxuICAgIGNyZWF0ZURvY3VtZW50RnJhZ21lbnQsXG4gICAgY3JlYXRlQ29tbWVudCxcbiAgICBpbnNlcnRCZWZvcmUsXG4gICAgcmVtb3ZlQ2hpbGQsXG4gICAgYXBwZW5kQ2hpbGQsXG4gICAgcGFyZW50Tm9kZSxcbiAgICBuZXh0U2libGluZyxcbiAgICB0YWdOYW1lLFxuICAgIHNldFRleHRDb250ZW50LFxuICAgIGdldFRleHRDb250ZW50LFxuICAgIGlzRWxlbWVudCxcbiAgICBpc1RleHQsXG4gICAgaXNDb21tZW50LFxuICAgIGlzRG9jdW1lbnRGcmFnbWVudFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0bWxkb21hcGkuanMubWFwIiwiaW1wb3J0IHsgdm5vZGUgfSBmcm9tIFwiLi92bm9kZS5qc1wiO1xuaW1wb3J0ICogYXMgaXMgZnJvbSBcIi4vaXMuanNcIjtcbmltcG9ydCB7IGh0bWxEb21BcGkgfSBmcm9tIFwiLi9odG1sZG9tYXBpLmpzXCI7XG5jb25zdCBlbXB0eU5vZGUgPSB2bm9kZShcIlwiLCB7fSwgW10sIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbmZ1bmN0aW9uIHNhbWVWbm9kZSh2bm9kZTEsIHZub2RlMikge1xuICAgIHZhciBfYSwgX2I7XG4gICAgY29uc3QgaXNTYW1lS2V5ID0gdm5vZGUxLmtleSA9PT0gdm5vZGUyLmtleTtcbiAgICBjb25zdCBpc1NhbWVJcyA9ICgoX2EgPSB2bm9kZTEuZGF0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlzKSA9PT0gKChfYiA9IHZub2RlMi5kYXRhKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaXMpO1xuICAgIGNvbnN0IGlzU2FtZVNlbCA9IHZub2RlMS5zZWwgPT09IHZub2RlMi5zZWw7XG4gICAgY29uc3QgaXNTYW1lVGV4dE9yRnJhZ21lbnQgPSAhdm5vZGUxLnNlbCAmJiB2bm9kZTEuc2VsID09PSB2bm9kZTIuc2VsXG4gICAgICAgID8gdHlwZW9mIHZub2RlMS50ZXh0ID09PSB0eXBlb2Ygdm5vZGUyLnRleHRcbiAgICAgICAgOiB0cnVlO1xuICAgIHJldHVybiBpc1NhbWVTZWwgJiYgaXNTYW1lS2V5ICYmIGlzU2FtZUlzICYmIGlzU2FtZVRleHRPckZyYWdtZW50O1xufVxuLyoqXG4gKiBAdG9kbyBSZW1vdmUgdGhpcyBmdW5jdGlvbiB3aGVuIHRoZSBkb2N1bWVudCBmcmFnbWVudCBpcyBjb25zaWRlcmVkIHN0YWJsZS5cbiAqL1xuZnVuY3Rpb24gZG9jdW1lbnRGcmFnbWVudElzTm90U3VwcG9ydGVkKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBkb2N1bWVudCBmcmFnbWVudCBpcyBub3Qgc3VwcG9ydGVkIG9uIHRoaXMgcGxhdGZvcm0uXCIpO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KGFwaSwgdm5vZGUpIHtcbiAgICByZXR1cm4gYXBpLmlzRWxlbWVudCh2bm9kZSk7XG59XG5mdW5jdGlvbiBpc0RvY3VtZW50RnJhZ21lbnQoYXBpLCB2bm9kZSkge1xuICAgIHJldHVybiBhcGkuaXNEb2N1bWVudEZyYWdtZW50KHZub2RlKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUtleVRvT2xkSWR4KGNoaWxkcmVuLCBiZWdpbklkeCwgZW5kSWR4KSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IG1hcCA9IHt9O1xuICAgIGZvciAobGV0IGkgPSBiZWdpbklkeDsgaSA8PSBlbmRJZHg7ICsraSkge1xuICAgICAgICBjb25zdCBrZXkgPSAoX2EgPSBjaGlsZHJlbltpXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmtleTtcbiAgICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtYXBba2V5XSA9IGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hcDtcbn1cbmNvbnN0IGhvb2tzID0gW1xuICAgIFwiY3JlYXRlXCIsXG4gICAgXCJ1cGRhdGVcIixcbiAgICBcInJlbW92ZVwiLFxuICAgIFwiZGVzdHJveVwiLFxuICAgIFwicHJlXCIsXG4gICAgXCJwb3N0XCJcbl07XG5leHBvcnQgZnVuY3Rpb24gaW5pdChtb2R1bGVzLCBkb21BcGksIG9wdGlvbnMpIHtcbiAgICBjb25zdCBjYnMgPSB7XG4gICAgICAgIGNyZWF0ZTogW10sXG4gICAgICAgIHVwZGF0ZTogW10sXG4gICAgICAgIHJlbW92ZTogW10sXG4gICAgICAgIGRlc3Ryb3k6IFtdLFxuICAgICAgICBwcmU6IFtdLFxuICAgICAgICBwb3N0OiBbXVxuICAgIH07XG4gICAgY29uc3QgYXBpID0gZG9tQXBpICE9PSB1bmRlZmluZWQgPyBkb21BcGkgOiBodG1sRG9tQXBpO1xuICAgIGZvciAoY29uc3QgaG9vayBvZiBob29rcykge1xuICAgICAgICBmb3IgKGNvbnN0IG1vZHVsZSBvZiBtb2R1bGVzKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SG9vayA9IG1vZHVsZVtob29rXTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50SG9vayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2JzW2hvb2tdLnB1c2goY3VycmVudEhvb2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVtcHR5Tm9kZUF0KGVsbSkge1xuICAgICAgICBjb25zdCBpZCA9IGVsbS5pZCA/IFwiI1wiICsgZWxtLmlkIDogXCJcIjtcbiAgICAgICAgLy8gZWxtLmNsYXNzTmFtZSBkb2Vzbid0IHJldHVybiBhIHN0cmluZyB3aGVuIGVsbSBpcyBhbiBTVkcgZWxlbWVudCBpbnNpZGUgYSBzaGFkb3dSb290LlxuICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yOTQ1NDM0MC9kZXRlY3RpbmctY2xhc3NuYW1lLW9mLXN2Z2FuaW1hdGVkc3RyaW5nXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBlbG0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIik7XG4gICAgICAgIGNvbnN0IGMgPSBjbGFzc2VzID8gXCIuXCIgKyBjbGFzc2VzLnNwbGl0KFwiIFwiKS5qb2luKFwiLlwiKSA6IFwiXCI7XG4gICAgICAgIHJldHVybiB2bm9kZShhcGkudGFnTmFtZShlbG0pLnRvTG93ZXJDYXNlKCkgKyBpZCArIGMsIHt9LCBbXSwgdW5kZWZpbmVkLCBlbG0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlbXB0eURvY3VtZW50RnJhZ21lbnRBdChmcmFnKSB7XG4gICAgICAgIHJldHVybiB2bm9kZSh1bmRlZmluZWQsIHt9LCBbXSwgdW5kZWZpbmVkLCBmcmFnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlUm1DYihjaGlsZEVsbSwgbGlzdGVuZXJzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBybUNiKCkge1xuICAgICAgICAgICAgaWYgKC0tbGlzdGVuZXJzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gYXBpLnBhcmVudE5vZGUoY2hpbGRFbG0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBpLnJlbW92ZUNoaWxkKHBhcmVudCwgY2hpbGRFbG0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlRWxtKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgICAgICBjb25zdCBob29rID0gZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhLmhvb2s7XG4gICAgICAgIChfYSA9IGhvb2sgPT09IG51bGwgfHwgaG9vayA9PT0gdm9pZCAwID8gdm9pZCAwIDogaG9vay5pbml0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChob29rLCB2bm9kZSk7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IHNlbCA9IHZub2RlLnNlbDtcbiAgICAgICAgaWYgKHNlbCA9PT0gXCIhXCIpIHtcbiAgICAgICAgICAgIChfYiA9IHZub2RlLnRleHQpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICh2bm9kZS50ZXh0ID0gXCJcIik7XG4gICAgICAgICAgICB2bm9kZS5lbG0gPSBhcGkuY3JlYXRlQ29tbWVudCh2bm9kZS50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWwgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIC8vIHRleHROb2RlIGhhcyBubyBzZWxlY3RvclxuICAgICAgICAgICAgdm5vZGUuZWxtID0gYXBpLmNyZWF0ZVRleHROb2RlKHZub2RlLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBQYXJzZSBzZWxlY3RvclxuICAgICAgICAgICAgY29uc3QgaGFzaElkeCA9IHNlbC5pbmRleE9mKFwiI1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGRvdElkeCA9IHNlbC5pbmRleE9mKFwiLlwiLCBoYXNoSWR4KTtcbiAgICAgICAgICAgIGNvbnN0IGhhc2ggPSBoYXNoSWR4ID4gMCA/IGhhc2hJZHggOiBzZWwubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgZG90ID0gZG90SWR4ID4gMCA/IGRvdElkeCA6IHNlbC5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCB0YWcgPSBoYXNoSWR4ICE9PSAtMSB8fCBkb3RJZHggIT09IC0xXG4gICAgICAgICAgICAgICAgPyBzZWwuc2xpY2UoMCwgTWF0aC5taW4oaGFzaCwgZG90KSlcbiAgICAgICAgICAgICAgICA6IHNlbDtcbiAgICAgICAgICAgIGNvbnN0IG5zID0gZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhLm5zO1xuICAgICAgICAgICAgY29uc3QgZWxtID0gbnMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gYXBpLmNyZWF0ZUVsZW1lbnQodGFnLCBkYXRhKVxuICAgICAgICAgICAgICAgIDogYXBpLmNyZWF0ZUVsZW1lbnROUyhucywgdGFnLCBkYXRhKTtcbiAgICAgICAgICAgIHZub2RlLmVsbSA9IGVsbTtcbiAgICAgICAgICAgIGlmIChoYXNoIDwgZG90KVxuICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBzZWwuc2xpY2UoaGFzaCArIDEsIGRvdCkpO1xuICAgICAgICAgICAgaWYgKGRvdElkeCA+IDApXG4gICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHNlbC5zbGljZShkb3QgKyAxKS5yZXBsYWNlKC9cXC4vZywgXCIgXCIpKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMuY3JlYXRlLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgIGNicy5jcmVhdGVbaV0oZW1wdHlOb2RlLCB2bm9kZSk7XG4gICAgICAgICAgICBpZiAoaXMucHJpbWl0aXZlKHZub2RlLnRleHQpICYmXG4gICAgICAgICAgICAgICAgKCFpcy5hcnJheShjaGlsZHJlbikgfHwgY2hpbGRyZW4ubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IGgxIGFuZCBzaW1pbGFyIG5vZGVzIHRvIGJlIGNyZWF0ZWQgdy8gdGV4dCBhbmQgZW1wdHkgY2hpbGQgbGlzdFxuICAgICAgICAgICAgICAgIGFwaS5hcHBlbmRDaGlsZChlbG0sIGFwaS5jcmVhdGVUZXh0Tm9kZSh2bm9kZS50ZXh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXMuYXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcGkuYXBwZW5kQ2hpbGQoZWxtLCBjcmVhdGVFbG0oY2gsIGluc2VydGVkVm5vZGVRdWV1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhvb2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIChfYyA9IGhvb2suY3JlYXRlKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY2FsbChob29rLCBlbXB0eU5vZGUsIHZub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAoaG9vay5pbnNlcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRlZFZub2RlUXVldWUucHVzaCh2bm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCgoX2QgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZXhwZXJpbWVudGFsKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuZnJhZ21lbnRzKSAmJiB2bm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgdm5vZGUuZWxtID0gKChfZSA9IGFwaS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KSAhPT0gbnVsbCAmJiBfZSAhPT0gdm9pZCAwID8gX2UgOiBkb2N1bWVudEZyYWdtZW50SXNOb3RTdXBwb3J0ZWQpKCk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2JzLmNyZWF0ZS5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICBjYnMuY3JlYXRlW2ldKGVtcHR5Tm9kZSwgdm5vZGUpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSB2bm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBpZiAoY2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBhcGkuYXBwZW5kQ2hpbGQodm5vZGUuZWxtLCBjcmVhdGVFbG0oY2gsIGluc2VydGVkVm5vZGVRdWV1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZub2RlLmVsbSA9IGFwaS5jcmVhdGVUZXh0Tm9kZSh2bm9kZS50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdm5vZGUuZWxtO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRWbm9kZXMocGFyZW50RWxtLCBiZWZvcmUsIHZub2Rlcywgc3RhcnRJZHgsIGVuZElkeCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgICAgIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoID0gdm5vZGVzW3N0YXJ0SWR4XTtcbiAgICAgICAgICAgIGlmIChjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXBpLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIGNyZWF0ZUVsbShjaCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSwgYmVmb3JlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBpbnZva2VEZXN0cm95SG9vayh2bm9kZSkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCBkYXRhID0gdm5vZGUuZGF0YTtcbiAgICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgKF9iID0gKF9hID0gZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhLmhvb2spID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kZXN0cm95KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgdm5vZGUpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYnMuZGVzdHJveS5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICBjYnMuZGVzdHJveVtpXSh2bm9kZSk7XG4gICAgICAgICAgICBpZiAodm5vZGUuY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB2bm9kZS5jaGlsZHJlbltqXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkICE9IG51bGwgJiYgdHlwZW9mIGNoaWxkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZva2VEZXN0cm95SG9vayhjaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlVm5vZGVzKHBhcmVudEVsbSwgdm5vZGVzLCBzdGFydElkeCwgZW5kSWR4KSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcbiAgICAgICAgICAgIGxldCBsaXN0ZW5lcnM7XG4gICAgICAgICAgICBjb25zdCBjaCA9IHZub2Rlc1tzdGFydElkeF07XG4gICAgICAgICAgICBpZiAoY2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChjaC5zZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpbnZva2VEZXN0cm95SG9vayhjaCk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IGNicy5yZW1vdmUubGVuZ3RoICsgMTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm0gPSBjcmVhdGVSbUNiKGNoLmVsbSwgbGlzdGVuZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYnMucmVtb3ZlLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2JzLnJlbW92ZVtpXShjaCwgcm0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVIb29rID0gKF9iID0gKF9hID0gY2ggPT09IG51bGwgfHwgY2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNoLmRhdGEpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ob29rKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucmVtb3ZlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVtb3ZlSG9vayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVIb29rKGNoLCBybSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBybSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZyYWdtZW50IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgaW52b2tlRGVzdHJveUhvb2soY2gpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVWbm9kZXMocGFyZW50RWxtLCBjaC5jaGlsZHJlbiwgMCwgY2guY2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBUZXh0IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgYXBpLnJlbW92ZUNoaWxkKHBhcmVudEVsbSwgY2guZWxtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlQ2hpbGRyZW4ocGFyZW50RWxtLCBvbGRDaCwgbmV3Q2gsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgICAgICBsZXQgb2xkU3RhcnRJZHggPSAwO1xuICAgICAgICBsZXQgbmV3U3RhcnRJZHggPSAwO1xuICAgICAgICBsZXQgb2xkRW5kSWR4ID0gb2xkQ2gubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFswXTtcbiAgICAgICAgbGV0IG9sZEVuZFZub2RlID0gb2xkQ2hbb2xkRW5kSWR4XTtcbiAgICAgICAgbGV0IG5ld0VuZElkeCA9IG5ld0NoLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBuZXdTdGFydFZub2RlID0gbmV3Q2hbMF07XG4gICAgICAgIGxldCBuZXdFbmRWbm9kZSA9IG5ld0NoW25ld0VuZElkeF07XG4gICAgICAgIGxldCBvbGRLZXlUb0lkeDtcbiAgICAgICAgbGV0IGlkeEluT2xkO1xuICAgICAgICBsZXQgZWxtVG9Nb3ZlO1xuICAgICAgICBsZXQgYmVmb3JlO1xuICAgICAgICB3aGlsZSAob2xkU3RhcnRJZHggPD0gb2xkRW5kSWR4ICYmIG5ld1N0YXJ0SWR4IDw9IG5ld0VuZElkeCkge1xuICAgICAgICAgICAgaWYgKG9sZFN0YXJ0Vm5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTsgLy8gVm5vZGUgbWlnaHQgaGF2ZSBiZWVuIG1vdmVkIGxlZnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9sZEVuZFZub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5ld1N0YXJ0Vm5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5ld0VuZFZub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNhbWVWbm9kZShvbGRTdGFydFZub2RlLCBuZXdTdGFydFZub2RlKSkge1xuICAgICAgICAgICAgICAgIHBhdGNoVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRjaFZub2RlKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNhbWVWbm9kZShvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSkpIHtcbiAgICAgICAgICAgICAgICAvLyBWbm9kZSBtb3ZlZCByaWdodFxuICAgICAgICAgICAgICAgIHBhdGNoVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICAgICAgYXBpLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtLCBhcGkubmV4dFNpYmxpbmcob2xkRW5kVm5vZGUuZWxtKSk7XG4gICAgICAgICAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgICAgICAgICAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdTdGFydFZub2RlKSkge1xuICAgICAgICAgICAgICAgIC8vIFZub2RlIG1vdmVkIGxlZnRcbiAgICAgICAgICAgICAgICBwYXRjaFZub2RlKG9sZEVuZFZub2RlLCBuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgICAgICAgIGFwaS5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBvbGRFbmRWbm9kZS5lbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtKTtcbiAgICAgICAgICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAob2xkS2V5VG9JZHggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvbGRLZXlUb0lkeCA9IGNyZWF0ZUtleVRvT2xkSWR4KG9sZENoLCBvbGRTdGFydElkeCwgb2xkRW5kSWR4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWR4SW5PbGQgPSBvbGRLZXlUb0lkeFtuZXdTdGFydFZub2RlLmtleV07XG4gICAgICAgICAgICAgICAgaWYgKGlkeEluT2xkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYG5ld1N0YXJ0Vm5vZGVgIGlzIG5ldywgY3JlYXRlIGFuZCBpbnNlcnQgaXQgaW4gYmVnaW5uaW5nXG4gICAgICAgICAgICAgICAgICAgIGFwaS5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBjcmVhdGVFbG0obmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSwgb2xkU3RhcnRWbm9kZS5lbG0pO1xuICAgICAgICAgICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9sZEtleVRvSWR4W25ld0VuZFZub2RlLmtleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBgbmV3RW5kVm5vZGVgIGlzIG5ldywgY3JlYXRlIGFuZCBpbnNlcnQgaXQgaW4gdGhlIGVuZFxuICAgICAgICAgICAgICAgICAgICBhcGkuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgY3JlYXRlRWxtKG5ld0VuZFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpLCBhcGkubmV4dFNpYmxpbmcob2xkRW5kVm5vZGUuZWxtKSk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTmVpdGhlciBvZiB0aGUgbmV3IGVuZHBvaW50cyBhcmUgbmV3IHZub2Rlcywgc28gd2UgbWFrZSBwcm9ncmVzcyBieVxuICAgICAgICAgICAgICAgICAgICAvLyBtb3ZpbmcgYG5ld1N0YXJ0Vm5vZGVgIGludG8gcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgZWxtVG9Nb3ZlID0gb2xkQ2hbaWR4SW5PbGRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxtVG9Nb3ZlLnNlbCAhPT0gbmV3U3RhcnRWbm9kZS5zZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaS5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBjcmVhdGVFbG0obmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSwgb2xkU3RhcnRWbm9kZS5lbG0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2hWbm9kZShlbG1Ub01vdmUsIG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRDaFtpZHhJbk9sZF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcGkuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgZWxtVG9Nb3ZlLmVsbSwgb2xkU3RhcnRWbm9kZS5lbG0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1N0YXJ0SWR4IDw9IG5ld0VuZElkeCkge1xuICAgICAgICAgICAgYmVmb3JlID0gbmV3Q2hbbmV3RW5kSWR4ICsgMV0gPT0gbnVsbCA/IG51bGwgOiBuZXdDaFtuZXdFbmRJZHggKyAxXS5lbG07XG4gICAgICAgICAgICBhZGRWbm9kZXMocGFyZW50RWxtLCBiZWZvcmUsIG5ld0NoLCBuZXdTdGFydElkeCwgbmV3RW5kSWR4LCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvbGRTdGFydElkeCA8PSBvbGRFbmRJZHgpIHtcbiAgICAgICAgICAgIHJlbW92ZVZub2RlcyhwYXJlbnRFbG0sIG9sZENoLCBvbGRTdGFydElkeCwgb2xkRW5kSWR4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBwYXRjaFZub2RlKG9sZFZub2RlLCB2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZywgX2g7XG4gICAgICAgIGNvbnN0IGhvb2sgPSAoX2EgPSB2bm9kZS5kYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaG9vaztcbiAgICAgICAgKF9iID0gaG9vayA9PT0gbnVsbCB8fCBob29rID09PSB2b2lkIDAgPyB2b2lkIDAgOiBob29rLnByZXBhdGNoKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChob29rLCBvbGRWbm9kZSwgdm5vZGUpO1xuICAgICAgICBjb25zdCBlbG0gPSAodm5vZGUuZWxtID0gb2xkVm5vZGUuZWxtKTtcbiAgICAgICAgaWYgKG9sZFZub2RlID09PSB2bm9kZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHZub2RlLmRhdGEgIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgKHZub2RlLnRleHQgIT09IHVuZGVmaW5lZCAmJiB2bm9kZS50ZXh0ICE9PSBvbGRWbm9kZS50ZXh0KSkge1xuICAgICAgICAgICAgKF9jID0gdm5vZGUuZGF0YSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogKHZub2RlLmRhdGEgPSB7fSk7XG4gICAgICAgICAgICAoX2QgPSBvbGRWbm9kZS5kYXRhKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAob2xkVm5vZGUuZGF0YSA9IHt9KTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2JzLnVwZGF0ZS5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICBjYnMudXBkYXRlW2ldKG9sZFZub2RlLCB2bm9kZSk7XG4gICAgICAgICAgICAoX2cgPSAoX2YgPSAoX2UgPSB2bm9kZS5kYXRhKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UuaG9vaykgPT09IG51bGwgfHwgX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mLnVwZGF0ZSkgPT09IG51bGwgfHwgX2cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9nLmNhbGwoX2YsIG9sZFZub2RlLCB2bm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2xkQ2ggPSBvbGRWbm9kZS5jaGlsZHJlbjtcbiAgICAgICAgY29uc3QgY2ggPSB2bm9kZS5jaGlsZHJlbjtcbiAgICAgICAgaWYgKHZub2RlLnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKG9sZENoICE9PSB1bmRlZmluZWQgJiYgY2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChvbGRDaCAhPT0gY2gpXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNoaWxkcmVuKGVsbSwgb2xkQ2gsIGNoLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChvbGRWbm9kZS50ZXh0ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIGFwaS5zZXRUZXh0Q29udGVudChlbG0sIFwiXCIpO1xuICAgICAgICAgICAgICAgIGFkZFZub2RlcyhlbG0sIG51bGwsIGNoLCAwLCBjaC5sZW5ndGggLSAxLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob2xkQ2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZVZub2RlcyhlbG0sIG9sZENoLCAwLCBvbGRDaC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9sZFZub2RlLnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGFwaS5zZXRUZXh0Q29udGVudChlbG0sIFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9sZFZub2RlLnRleHQgIT09IHZub2RlLnRleHQpIHtcbiAgICAgICAgICAgIGlmIChvbGRDaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVm5vZGVzKGVsbSwgb2xkQ2gsIDAsIG9sZENoLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXBpLnNldFRleHRDb250ZW50KGVsbSwgdm5vZGUudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgKF9oID0gaG9vayA9PT0gbnVsbCB8fCBob29rID09PSB2b2lkIDAgPyB2b2lkIDAgOiBob29rLnBvc3RwYXRjaCkgPT09IG51bGwgfHwgX2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9oLmNhbGwoaG9vaywgb2xkVm5vZGUsIHZub2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHBhdGNoKG9sZFZub2RlLCB2bm9kZSkge1xuICAgICAgICBsZXQgaSwgZWxtLCBwYXJlbnQ7XG4gICAgICAgIGNvbnN0IGluc2VydGVkVm5vZGVRdWV1ZSA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2JzLnByZS5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgIGNicy5wcmVbaV0oKTtcbiAgICAgICAgaWYgKGlzRWxlbWVudChhcGksIG9sZFZub2RlKSkge1xuICAgICAgICAgICAgb2xkVm5vZGUgPSBlbXB0eU5vZGVBdChvbGRWbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNEb2N1bWVudEZyYWdtZW50KGFwaSwgb2xkVm5vZGUpKSB7XG4gICAgICAgICAgICBvbGRWbm9kZSA9IGVtcHR5RG9jdW1lbnRGcmFnbWVudEF0KG9sZFZub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2FtZVZub2RlKG9sZFZub2RlLCB2bm9kZSkpIHtcbiAgICAgICAgICAgIHBhdGNoVm5vZGUob2xkVm5vZGUsIHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxtID0gb2xkVm5vZGUuZWxtO1xuICAgICAgICAgICAgcGFyZW50ID0gYXBpLnBhcmVudE5vZGUoZWxtKTtcbiAgICAgICAgICAgIGNyZWF0ZUVsbSh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhcGkuaW5zZXJ0QmVmb3JlKHBhcmVudCwgdm5vZGUuZWxtLCBhcGkubmV4dFNpYmxpbmcoZWxtKSk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVm5vZGVzKHBhcmVudCwgW29sZFZub2RlXSwgMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGluc2VydGVkVm5vZGVRdWV1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlW2ldLmRhdGEuaG9vay5pbnNlcnQoaW5zZXJ0ZWRWbm9kZVF1ZXVlW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2JzLnBvc3QubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICBjYnMucG9zdFtpXSgpO1xuICAgICAgICByZXR1cm4gdm5vZGU7XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluaXQuanMubWFwIiwiZXhwb3J0IGNvbnN0IGFycmF5ID0gQXJyYXkuaXNBcnJheTtcbmV4cG9ydCBmdW5jdGlvbiBwcmltaXRpdmUocykge1xuICAgIHJldHVybiAodHlwZW9mIHMgPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgdHlwZW9mIHMgPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgcyBpbnN0YW5jZW9mIFN0cmluZyB8fFxuICAgICAgICBzIGluc3RhbmNlb2YgTnVtYmVyKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLmpzLm1hcCIsImNvbnN0IHhsaW5rTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcbmNvbnN0IHhtbG5zTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvXCI7XG5jb25zdCB4bWxOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCI7XG5jb25zdCBjb2xvbkNoYXIgPSA1ODtcbmNvbnN0IHhDaGFyID0gMTIwO1xuY29uc3QgbUNoYXIgPSAxMDk7XG5mdW5jdGlvbiB1cGRhdGVBdHRycyhvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICBsZXQga2V5O1xuICAgIGNvbnN0IGVsbSA9IHZub2RlLmVsbTtcbiAgICBsZXQgb2xkQXR0cnMgPSBvbGRWbm9kZS5kYXRhLmF0dHJzO1xuICAgIGxldCBhdHRycyA9IHZub2RlLmRhdGEuYXR0cnM7XG4gICAgaWYgKCFvbGRBdHRycyAmJiAhYXR0cnMpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAob2xkQXR0cnMgPT09IGF0dHJzKVxuICAgICAgICByZXR1cm47XG4gICAgb2xkQXR0cnMgPSBvbGRBdHRycyB8fCB7fTtcbiAgICBhdHRycyA9IGF0dHJzIHx8IHt9O1xuICAgIC8vIHVwZGF0ZSBtb2RpZmllZCBhdHRyaWJ1dGVzLCBhZGQgbmV3IGF0dHJpYnV0ZXNcbiAgICBmb3IgKGtleSBpbiBhdHRycykge1xuICAgICAgICBjb25zdCBjdXIgPSBhdHRyc1trZXldO1xuICAgICAgICBjb25zdCBvbGQgPSBvbGRBdHRyc1trZXldO1xuICAgICAgICBpZiAob2xkICE9PSBjdXIpIHtcbiAgICAgICAgICAgIGlmIChjdXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKGtleSwgXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjdXIgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5jaGFyQ29kZUF0KDApICE9PSB4Q2hhcikge1xuICAgICAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKGtleSwgY3VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoa2V5LmNoYXJDb2RlQXQoMykgPT09IGNvbG9uQ2hhcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBBc3N1bWUgeG1sIG5hbWVzcGFjZVxuICAgICAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlTlMoeG1sTlMsIGtleSwgY3VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoa2V5LmNoYXJDb2RlQXQoNSkgPT09IGNvbG9uQ2hhcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBBc3N1bWUgJ3htbG5zJyBvciAneGxpbmsnIG5hbWVzcGFjZVxuICAgICAgICAgICAgICAgICAgICBrZXkuY2hhckNvZGVBdCgxKSA9PT0gbUNoYXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZWxtLnNldEF0dHJpYnV0ZU5TKHhtbG5zTlMsIGtleSwgY3VyKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBlbG0uc2V0QXR0cmlidXRlTlMoeGxpbmtOUywga2V5LCBjdXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZShrZXksIGN1cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHJlbW92ZSByZW1vdmVkIGF0dHJpYnV0ZXNcbiAgICAvLyB1c2UgYGluYCBvcGVyYXRvciBzaW5jZSB0aGUgcHJldmlvdXMgYGZvcmAgaXRlcmF0aW9uIHVzZXMgaXQgKC5pLmUuIGFkZCBldmVuIGF0dHJpYnV0ZXMgd2l0aCB1bmRlZmluZWQgdmFsdWUpXG4gICAgLy8gdGhlIG90aGVyIG9wdGlvbiBpcyB0byByZW1vdmUgYWxsIGF0dHJpYnV0ZXMgd2l0aCB2YWx1ZSA9PSB1bmRlZmluZWRcbiAgICBmb3IgKGtleSBpbiBvbGRBdHRycykge1xuICAgICAgICBpZiAoIShrZXkgaW4gYXR0cnMpKSB7XG4gICAgICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY29uc3QgYXR0cmlidXRlc01vZHVsZSA9IHtcbiAgICBjcmVhdGU6IHVwZGF0ZUF0dHJzLFxuICAgIHVwZGF0ZTogdXBkYXRlQXR0cnNcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hdHRyaWJ1dGVzLmpzLm1hcCIsImZ1bmN0aW9uIHVwZGF0ZUNsYXNzKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIGxldCBjdXI7XG4gICAgbGV0IG5hbWU7XG4gICAgY29uc3QgZWxtID0gdm5vZGUuZWxtO1xuICAgIGxldCBvbGRDbGFzcyA9IG9sZFZub2RlLmRhdGEuY2xhc3M7XG4gICAgbGV0IGtsYXNzID0gdm5vZGUuZGF0YS5jbGFzcztcbiAgICBpZiAoIW9sZENsYXNzICYmICFrbGFzcylcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChvbGRDbGFzcyA9PT0ga2xhc3MpXG4gICAgICAgIHJldHVybjtcbiAgICBvbGRDbGFzcyA9IG9sZENsYXNzIHx8IHt9O1xuICAgIGtsYXNzID0ga2xhc3MgfHwge307XG4gICAgZm9yIChuYW1lIGluIG9sZENsYXNzKSB7XG4gICAgICAgIGlmIChvbGRDbGFzc1tuYW1lXSAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGtsYXNzLCBuYW1lKSkge1xuICAgICAgICAgICAgLy8gd2FzIGB0cnVlYCBhbmQgbm93IG5vdCBwcm92aWRlZFxuICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5yZW1vdmUobmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChuYW1lIGluIGtsYXNzKSB7XG4gICAgICAgIGN1ciA9IGtsYXNzW25hbWVdO1xuICAgICAgICBpZiAoY3VyICE9PSBvbGRDbGFzc1tuYW1lXSkge1xuICAgICAgICAgICAgZWxtLmNsYXNzTGlzdFtjdXIgPyBcImFkZFwiIDogXCJyZW1vdmVcIl0obmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY29uc3QgY2xhc3NNb2R1bGUgPSB7IGNyZWF0ZTogdXBkYXRlQ2xhc3MsIHVwZGF0ZTogdXBkYXRlQ2xhc3MgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsYXNzLmpzLm1hcCIsImZ1bmN0aW9uIGludm9rZUhhbmRsZXIoaGFuZGxlciwgdm5vZGUsIGV2ZW50KSB7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgLy8gY2FsbCBmdW5jdGlvbiBoYW5kbGVyXG4gICAgICAgIGhhbmRsZXIuY2FsbCh2bm9kZSwgZXZlbnQsIHZub2RlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgLy8gY2FsbCBtdWx0aXBsZSBoYW5kbGVyc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhhbmRsZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGludm9rZUhhbmRsZXIoaGFuZGxlcltpXSwgdm5vZGUsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGhhbmRsZUV2ZW50KGV2ZW50LCB2bm9kZSkge1xuICAgIGNvbnN0IG5hbWUgPSBldmVudC50eXBlO1xuICAgIGNvbnN0IG9uID0gdm5vZGUuZGF0YS5vbjtcbiAgICAvLyBjYWxsIGV2ZW50IGhhbmRsZXIocykgaWYgZXhpc3RzXG4gICAgaWYgKG9uICYmIG9uW25hbWVdKSB7XG4gICAgICAgIGludm9rZUhhbmRsZXIob25bbmFtZV0sIHZub2RlLCBldmVudCk7XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgaGFuZGxlRXZlbnQoZXZlbnQsIGhhbmRsZXIudm5vZGUpO1xuICAgIH07XG59XG5mdW5jdGlvbiB1cGRhdGVFdmVudExpc3RlbmVycyhvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICBjb25zdCBvbGRPbiA9IG9sZFZub2RlLmRhdGEub247XG4gICAgY29uc3Qgb2xkTGlzdGVuZXIgPSBvbGRWbm9kZS5saXN0ZW5lcjtcbiAgICBjb25zdCBvbGRFbG0gPSBvbGRWbm9kZS5lbG07XG4gICAgY29uc3Qgb24gPSB2bm9kZSAmJiB2bm9kZS5kYXRhLm9uO1xuICAgIGNvbnN0IGVsbSA9ICh2bm9kZSAmJiB2bm9kZS5lbG0pO1xuICAgIGxldCBuYW1lO1xuICAgIC8vIG9wdGltaXphdGlvbiBmb3IgcmV1c2VkIGltbXV0YWJsZSBoYW5kbGVyc1xuICAgIGlmIChvbGRPbiA9PT0gb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyByZW1vdmUgZXhpc3RpbmcgbGlzdGVuZXJzIHdoaWNoIG5vIGxvbmdlciB1c2VkXG4gICAgaWYgKG9sZE9uICYmIG9sZExpc3RlbmVyKSB7XG4gICAgICAgIC8vIGlmIGVsZW1lbnQgY2hhbmdlZCBvciBkZWxldGVkIHdlIHJlbW92ZSBhbGwgZXhpc3RpbmcgbGlzdGVuZXJzIHVuY29uZGl0aW9uYWxseVxuICAgICAgICBpZiAoIW9uKSB7XG4gICAgICAgICAgICBmb3IgKG5hbWUgaW4gb2xkT24pIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgbGlzdGVuZXIgaWYgZWxlbWVudCB3YXMgY2hhbmdlZCBvciBleGlzdGluZyBsaXN0ZW5lcnMgcmVtb3ZlZFxuICAgICAgICAgICAgICAgIG9sZEVsbS5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIG9sZExpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKG5hbWUgaW4gb2xkT24pIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgbGlzdGVuZXIgaWYgZXhpc3RpbmcgbGlzdGVuZXIgcmVtb3ZlZFxuICAgICAgICAgICAgICAgIGlmICghb25bbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgb2xkRWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgb2xkTGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gYWRkIG5ldyBsaXN0ZW5lcnMgd2hpY2ggaGFzIG5vdCBhbHJlYWR5IGF0dGFjaGVkXG4gICAgaWYgKG9uKSB7XG4gICAgICAgIC8vIHJldXNlIGV4aXN0aW5nIGxpc3RlbmVyIG9yIGNyZWF0ZSBuZXdcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSAodm5vZGUubGlzdGVuZXIgPVxuICAgICAgICAgICAgb2xkVm5vZGUubGlzdGVuZXIgfHwgY3JlYXRlTGlzdGVuZXIoKSk7XG4gICAgICAgIC8vIHVwZGF0ZSB2bm9kZSBmb3IgbGlzdGVuZXJcbiAgICAgICAgbGlzdGVuZXIudm5vZGUgPSB2bm9kZTtcbiAgICAgICAgLy8gaWYgZWxlbWVudCBjaGFuZ2VkIG9yIGFkZGVkIHdlIGFkZCBhbGwgbmVlZGVkIGxpc3RlbmVycyB1bmNvbmRpdGlvbmFsbHlcbiAgICAgICAgaWYgKCFvbGRPbikge1xuICAgICAgICAgICAgZm9yIChuYW1lIGluIG9uKSB7XG4gICAgICAgICAgICAgICAgLy8gYWRkIGxpc3RlbmVyIGlmIGVsZW1lbnQgd2FzIGNoYW5nZWQgb3IgbmV3IGxpc3RlbmVycyBhZGRlZFxuICAgICAgICAgICAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKG5hbWUgaW4gb24pIHtcbiAgICAgICAgICAgICAgICAvLyBhZGQgbGlzdGVuZXIgaWYgbmV3IGxpc3RlbmVyIGFkZGVkXG4gICAgICAgICAgICAgICAgaWYgKCFvbGRPbltuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBldmVudExpc3RlbmVyc01vZHVsZSA9IHtcbiAgICBjcmVhdGU6IHVwZGF0ZUV2ZW50TGlzdGVuZXJzLFxuICAgIHVwZGF0ZTogdXBkYXRlRXZlbnRMaXN0ZW5lcnMsXG4gICAgZGVzdHJveTogdXBkYXRlRXZlbnRMaXN0ZW5lcnNcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudGxpc3RlbmVycy5qcy5tYXAiLCIvLyBCaW5kaW5nIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGxpa2UgdGhpcyBmaXhlcyBhIGJ1ZyBpbiBJRS9FZGdlLiBTZWUgIzM2MCBhbmQgIzQwOS5cbmNvbnN0IHJhZiA9IHR5cGVvZiAod2luZG93ID09PSBudWxsIHx8IHdpbmRvdyA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkgPT09IFwiZnVuY3Rpb25cIlxuICAgID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdylcbiAgICA6IHNldFRpbWVvdXQ7XG5jb25zdCBuZXh0RnJhbWUgPSAoZm4pID0+IHtcbiAgICByYWYoKCkgPT4ge1xuICAgICAgICByYWYoZm4pO1xuICAgIH0pO1xufTtcbmxldCByZWZsb3dGb3JjZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIHNldE5leHRGcmFtZShvYmosIHByb3AsIHZhbCkge1xuICAgIG5leHRGcmFtZSgoKSA9PiB7XG4gICAgICAgIG9ialtwcm9wXSA9IHZhbDtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIGxldCBjdXI7XG4gICAgbGV0IG5hbWU7XG4gICAgY29uc3QgZWxtID0gdm5vZGUuZWxtO1xuICAgIGxldCBvbGRTdHlsZSA9IG9sZFZub2RlLmRhdGEuc3R5bGU7XG4gICAgbGV0IHN0eWxlID0gdm5vZGUuZGF0YS5zdHlsZTtcbiAgICBpZiAoIW9sZFN0eWxlICYmICFzdHlsZSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChvbGRTdHlsZSA9PT0gc3R5bGUpXG4gICAgICAgIHJldHVybjtcbiAgICBvbGRTdHlsZSA9IG9sZFN0eWxlIHx8IHt9O1xuICAgIHN0eWxlID0gc3R5bGUgfHwge307XG4gICAgY29uc3Qgb2xkSGFzRGVsID0gXCJkZWxheWVkXCIgaW4gb2xkU3R5bGU7XG4gICAgZm9yIChuYW1lIGluIG9sZFN0eWxlKSB7XG4gICAgICAgIGlmICghKG5hbWUgaW4gc3R5bGUpKSB7XG4gICAgICAgICAgICBpZiAobmFtZVswXSA9PT0gXCItXCIgJiYgbmFtZVsxXSA9PT0gXCItXCIpIHtcbiAgICAgICAgICAgICAgICBlbG0uc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbG0uc3R5bGVbbmFtZV0gPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobmFtZSBpbiBzdHlsZSkge1xuICAgICAgICBjdXIgPSBzdHlsZVtuYW1lXTtcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiZGVsYXllZFwiICYmIHN0eWxlLmRlbGF5ZWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZTIgaW4gc3R5bGUuZGVsYXllZCkge1xuICAgICAgICAgICAgICAgIGN1ciA9IHN0eWxlLmRlbGF5ZWRbbmFtZTJdO1xuICAgICAgICAgICAgICAgIGlmICghb2xkSGFzRGVsIHx8IGN1ciAhPT0gb2xkU3R5bGUuZGVsYXllZFtuYW1lMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TmV4dEZyYW1lKGVsbS5zdHlsZSwgbmFtZTIsIGN1cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5hbWUgIT09IFwicmVtb3ZlXCIgJiYgY3VyICE9PSBvbGRTdHlsZVtuYW1lXSkge1xuICAgICAgICAgICAgaWYgKG5hbWVbMF0gPT09IFwiLVwiICYmIG5hbWVbMV0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgZWxtLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIGN1cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbG0uc3R5bGVbbmFtZV0gPSBjdXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBhcHBseURlc3Ryb3lTdHlsZSh2bm9kZSkge1xuICAgIGxldCBzdHlsZTtcbiAgICBsZXQgbmFtZTtcbiAgICBjb25zdCBlbG0gPSB2bm9kZS5lbG07XG4gICAgY29uc3QgcyA9IHZub2RlLmRhdGEuc3R5bGU7XG4gICAgaWYgKCFzIHx8ICEoc3R5bGUgPSBzLmRlc3Ryb3kpKVxuICAgICAgICByZXR1cm47XG4gICAgZm9yIChuYW1lIGluIHN0eWxlKSB7XG4gICAgICAgIGVsbS5zdHlsZVtuYW1lXSA9IHN0eWxlW25hbWVdO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFwcGx5UmVtb3ZlU3R5bGUodm5vZGUsIHJtKSB7XG4gICAgY29uc3QgcyA9IHZub2RlLmRhdGEuc3R5bGU7XG4gICAgaWYgKCFzIHx8ICFzLnJlbW92ZSkge1xuICAgICAgICBybSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghcmVmbG93Rm9yY2VkKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAgIHZub2RlLmVsbS5vZmZzZXRMZWZ0O1xuICAgICAgICByZWZsb3dGb3JjZWQgPSB0cnVlO1xuICAgIH1cbiAgICBsZXQgbmFtZTtcbiAgICBjb25zdCBlbG0gPSB2bm9kZS5lbG07XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IHN0eWxlID0gcy5yZW1vdmU7XG4gICAgbGV0IGFtb3VudCA9IDA7XG4gICAgY29uc3QgYXBwbGllZCA9IFtdO1xuICAgIGZvciAobmFtZSBpbiBzdHlsZSkge1xuICAgICAgICBhcHBsaWVkLnB1c2gobmFtZSk7XG4gICAgICAgIGVsbS5zdHlsZVtuYW1lXSA9IHN0eWxlW25hbWVdO1xuICAgIH1cbiAgICBjb25zdCBjb21wU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsbSk7XG4gICAgY29uc3QgcHJvcHMgPSBjb21wU3R5bGVbXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCJdLnNwbGl0KFwiLCBcIik7XG4gICAgZm9yICg7IGkgPCBwcm9wcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAoYXBwbGllZC5pbmRleE9mKHByb3BzW2ldKSAhPT0gLTEpXG4gICAgICAgICAgICBhbW91bnQrKztcbiAgICB9XG4gICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIChldikgPT4ge1xuICAgICAgICBpZiAoZXYudGFyZ2V0ID09PSBlbG0pXG4gICAgICAgICAgICAtLWFtb3VudDtcbiAgICAgICAgaWYgKGFtb3VudCA9PT0gMClcbiAgICAgICAgICAgIHJtKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmb3JjZVJlZmxvdygpIHtcbiAgICByZWZsb3dGb3JjZWQgPSBmYWxzZTtcbn1cbmV4cG9ydCBjb25zdCBzdHlsZU1vZHVsZSA9IHtcbiAgICBwcmU6IGZvcmNlUmVmbG93LFxuICAgIGNyZWF0ZTogdXBkYXRlU3R5bGUsXG4gICAgdXBkYXRlOiB1cGRhdGVTdHlsZSxcbiAgICBkZXN0cm95OiBhcHBseURlc3Ryb3lTdHlsZSxcbiAgICByZW1vdmU6IGFwcGx5UmVtb3ZlU3R5bGVcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gdm5vZGUoc2VsLCBkYXRhLCBjaGlsZHJlbiwgdGV4dCwgZWxtKSB7XG4gICAgY29uc3Qga2V5ID0gZGF0YSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZGF0YS5rZXk7XG4gICAgcmV0dXJuIHsgc2VsLCBkYXRhLCBjaGlsZHJlbiwgdGV4dCwgZWxtLCBrZXkgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZub2RlLmpzLm1hcCIsImltcG9ydCB7IE1vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIlxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuL21lc3NhZ2VzXCJcbmltcG9ydCB7IFZOb2RlLCBhdHRyaWJ1dGVzTW9kdWxlLCBjbGFzc01vZHVsZSwgZXZlbnRMaXN0ZW5lcnNNb2R1bGUsIGluaXQsIHN0eWxlTW9kdWxlIH0gZnJvbSBcInNuYWJiZG9tXCJcblxuY29uc3QgcGF0Y2ggPSBpbml0KFtldmVudExpc3RlbmVyc01vZHVsZSwgY2xhc3NNb2R1bGUsIGF0dHJpYnV0ZXNNb2R1bGUsIHN0eWxlTW9kdWxlXSlcblxuZXhwb3J0IGNvbnN0IGFwcCA9IChcbiAgICBpbml0TW9kZWw6IE1vZGVsLFxuICAgIHZpZXc6IChtb2RlbDogTW9kZWwsIGRpc3BhdGNoOiAobWVzc2FnZTogTWVzc2FnZSkgPT4gdm9pZCkgPT4gVk5vZGUsXG4gICAgdXBkYXRlOiAobW9kZWw6IE1vZGVsLCBtZXNzYWdlOiBNZXNzYWdlKSA9PiBNb2RlbCxcbiAgICByb290Tm9kZTogSFRNTEVsZW1lbnRcbikgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkID0+IHtcbiAgICAgICAgbW9kZWwgPSB1cGRhdGUobW9kZWwsIG1lc3NhZ2UpXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRWTm9kZSA9IHZpZXcobW9kZWwsIGRpc3BhdGNoKVxuICAgICAgICBkb21Ob2RlID0gcGF0Y2goZG9tTm9kZSwgdXBkYXRlZFZOb2RlKVxuICAgICAgICBjdXJyZW50Vk5vZGUgPSB1cGRhdGVkVk5vZGVcbiAgICB9XG5cbiAgICBsZXQgbW9kZWwgPSBpbml0TW9kZWxcbiAgICBsZXQgY3VycmVudFZOb2RlID0gdmlldyhtb2RlbCwgZGlzcGF0Y2gpXG4gICAgbGV0IGRvbU5vZGUgPSBwYXRjaChyb290Tm9kZSwgY3VycmVudFZOb2RlKVxufSIsImltcG9ydCB7IEZvbnQsIEZvbnREZXRhaWxzIH0gZnJvbSBcIi4vbW9kZWxcIlxuXG5leHBvcnQgY29uc3QgcGxhdGVTaXplWCA9IDgwLjc1XG5leHBvcnQgY29uc3QgcGxhdGVTaXplWSA9IDE2LjM1XG5leHBvcnQgY29uc3QgYmV2ZWxTaXplID0gMS41XG5cbmV4cG9ydCBjb25zdCB3YWxsVGhpY2tuZXNzID0gNS4wXG5cbmV4cG9ydCBjb25zdCBudW1Sb3dzID0gOFxuZXhwb3J0IGNvbnN0IG51bUNvbHVtbnMgPSAyXG5cbmV4cG9ydCBjb25zdCB1bml0Q2VsbFggPSBwbGF0ZVNpemVYICsgd2FsbFRoaWNrbmVzc1xuZXhwb3J0IGNvbnN0IHVuaXRDZWxsWSA9IHBsYXRlU2l6ZVkgKyB3YWxsVGhpY2tuZXNzXG5cbmV4cG9ydCBjb25zdCBqaWdTaXplWCA9IHVuaXRDZWxsWCAqIG51bUNvbHVtbnNcbmV4cG9ydCBjb25zdCBqaWdTaXplWSA9IHVuaXRDZWxsWSAqIG51bVJvd3NcblxuZXhwb3J0IGNvbnN0IGJvZHlNYXJnaW4gPSAyXG5cbmV4cG9ydCBjb25zdCBmb250TWFwOiBSZWNvcmQ8Rm9udCwgRm9udERldGFpbHM+ID0ge1xuICAgICdTY3JpcHQnOiB7ICdmb250LWZhbWlseSc6ICdNb25vdHlwZSBDb3JzaXZhIFJlZ3VsYXInLCAnZm9udC1zdHlsZSc6ICdyZWd1bGFyJywgJ2RlZmF1bHRTaXplJzogNiB9LFxuICAgICdDbGFzc2ljIFNjcmlwdCc6IHsgJ2ZvbnQtZmFtaWx5JzogJ0RhbmNpbmcgU2NyaXB0JywgJ2ZvbnQtc3R5bGUnOiAncmVndWxhcicsICdkZWZhdWx0U2l6ZSc6IDYgfSxcbiAgICAnSXRhbGljJzogeyAnZm9udC1mYW1pbHknOiAnR2VudGl1bSBCb29rIFBsdXMnLCAnZm9udC1zdHlsZSc6ICdpdGFsaWMnLCAnZGVmYXVsdFNpemUnOiA1LjUgfSxcbiAgICAnU2VyaWYnOiB7ICdmb250LWZhbWlseSc6ICdNZXJyaXdlYXRoZXInLCAnZm9udC1zdHlsZSc6ICdyZWd1bGFyJywgJ2RlZmF1bHRTaXplJzogNC41IH0sXG4gICAgJ1NhbnMgU2VyaWYnOiB7ICdmb250LWZhbWlseSc6ICdSb2JvdG8gTWVkaXVtJywgJ2ZvbnQtc3R5bGUnOiAncmVndWxhcicsICdkZWZhdWx0U2l6ZSc6IDQuNSB9LFxuICAgICdIYW5kd3JpdHRlbic6IHsgJ2ZvbnQtZmFtaWx5JzogJ0NhdmVhdCcsICdmb250LXN0eWxlJzogJ3JlZ3VsYXInLCAnZGVmYXVsdFNpemUnOiA3IH0sXG59XG5cbmV4cG9ydCBjb25zdCBtYXhXaWR0aCA9IHBsYXRlU2l6ZVggLSAxNCIsImltcG9ydCB7IGNyZWF0ZUVtcHR5UGxhdGVBcnJheSB9IGZyb20gXCIuL3V0aWxzXCJcblxuZXhwb3J0IHR5cGUgTW9kZWwgPSB7XG4gICAgcGxhdGVMaXN0OiBQbGF0ZVtdLFxuICAgIHNlbGVjdGVkUGxhdGU6IFtudW1iZXIsIEVkaXRPcHRpb25dIHwgbnVsbFxufVxuXG5leHBvcnQgY29uc3QgaW5pdE1vZGVsOiBNb2RlbCA9IHtcbiAgICBwbGF0ZUxpc3Q6IGNyZWF0ZUVtcHR5UGxhdGVBcnJheSgpLFxuICAgIHNlbGVjdGVkUGxhdGU6IG51bGxcbn1cblxuZXhwb3J0IHR5cGUgUGxhdGUgPSB7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGZvbnQ6IEZvbnRcbn1cblxuZXhwb3J0IHR5cGUgRm9udCA9XG4gICAgfCBcIlNjcmlwdFwiXG4gICAgfCBcIkNsYXNzaWMgU2NyaXB0XCJcbiAgICB8IFwiSXRhbGljXCJcbiAgICB8IFwiU2VyaWZcIlxuICAgIHwgXCJTYW5zIFNlcmlmXCJcbiAgICB8IFwiSGFuZHdyaXR0ZW5cIlxuXG5leHBvcnQgdHlwZSBGb250RGV0YWlscyA9IHtcbiAgICAnZm9udC1mYW1pbHknOiBzdHJpbmc7XG4gICAgJ2ZvbnQtc3R5bGUnOiBzdHJpbmc7XG4gICAgJ2RlZmF1bHRTaXplJzogbnVtYmVyXG59XG5cbnR5cGUgRWRpdE9wdGlvbiA9ICdmb250JyB8ICd0ZXh0JyIsImltcG9ydCB7IEZvbnQsIE1vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIlxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuL21lc3NhZ2VzXCJcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZSA9IChtb2RlbDogTW9kZWwsIG1lc3NhZ2U6IE1lc3NhZ2UpOiBNb2RlbCA9PiB7XG4gICAgY29uc3QgW21lc3NhZ2VUeXBlLCAuLi5yZXN0XSA9IG1lc3NhZ2VcblxuICAgIHN3aXRjaCAobWVzc2FnZVR5cGUpIHtcbiAgICAgICAgY2FzZSBcInNlbGVjdCBwbGF0ZSB0ZXh0XCI6IHtcbiAgICAgICAgICAgIGNvbnN0IFtpbmRleF0gPSByZXN0IGFzIFtudW1iZXJdXG4gICAgICAgICAgICByZXR1cm4geyAuLi5tb2RlbCwgc2VsZWN0ZWRQbGF0ZTogW2luZGV4LCAndGV4dCddIH1cbiAgICAgICAgfVxuICAgICAgICBjYXNlICdzZWxlY3QgcGxhdGUgZm9udCc6IHtcbiAgICAgICAgICAgIGNvbnN0IFtpbmRleF0gPSByZXN0IGFzIFtudW1iZXJdXG4gICAgICAgICAgICByZXR1cm4geyAuLi5tb2RlbCwgc2VsZWN0ZWRQbGF0ZTogW2luZGV4LCAnZm9udCddIH1cbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiZWRpdCBwbGF0ZSB0ZXh0XCI6IHtcbiAgICAgICAgICAgIGNvbnN0IFt0YXJnZXRJbmRleCwgdGV4dF0gPSByZXN0IGFzIFtudW1iZXIsIHN0cmluZ11cbiAgICAgICAgICAgIGNvbnN0IG5ld1BsYXRlTGlzdCA9IG1vZGVsLnBsYXRlTGlzdC5tYXAoKHBsYXRlLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICBpbmRleCA9PT0gdGFyZ2V0SW5kZXggPyB7IC4uLnBsYXRlLCB0ZXh0IH0gOiBwbGF0ZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4ubW9kZWwsIHBsYXRlTGlzdDogbmV3UGxhdGVMaXN0IH1cbiAgICAgICAgfVxuICAgICAgICBjYXNlICdlZGl0IHBsYXRlIGZvbnQnOiB7XG4gICAgICAgICAgICBjb25zdCBbdGFyZ2V0SW5kZXgsIGZvbnRdID0gcmVzdCBhcyBbbnVtYmVyLCBGb250XVxuICAgICAgICAgICAgY29uc3QgbmV3UGxhdGVMaXN0ID0gbW9kZWwucGxhdGVMaXN0Lm1hcCgocGxhdGUsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgIGluZGV4ID09PSB0YXJnZXRJbmRleCA/IHsgLi4ucGxhdGUsIGZvbnQgfSA6IHBsYXRlXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4geyAuLi5tb2RlbCwgcGxhdGVMaXN0OiBuZXdQbGF0ZUxpc3QgfVxuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJkZXNlbGVjdCBwbGF0ZVwiOiB7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5tb2RlbCwgc2VsZWN0ZWRQbGF0ZTogbnVsbCB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgZm9udE1hcCwgbWF4V2lkdGgsIG51bUNvbHVtbnMsIHBsYXRlU2l6ZVgsIHBsYXRlU2l6ZVksIHVuaXRDZWxsWCwgdW5pdENlbGxZLCB3YWxsVGhpY2tuZXNzIH0gZnJvbSBcIi4vZGF0YVwiXG5pbXBvcnQgeyBQbGF0ZSB9IGZyb20gXCIuL21vZGVsXCJcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUVtcHR5UGxhdGVBcnJheSA9ICgpOiBQbGF0ZVtdID0+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTYgfSwgKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIGZvbnQ6IFwiU2NyaXB0XCIsXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UGxhdGVQb3NpdGlvbiA9IChpbmRleDogbnVtYmVyLCBhbmNob3I6ICd0b3BMZWZ0JyB8ICdjZW50ZXInKTogW3g6IG51bWJlciwgeTogbnVtYmVyXSA9PiB7XG4gICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGdldFJvd0FuZENvbHVtbihpbmRleClcblxuICAgIGxldCB4ID0gY29sdW1uICogdW5pdENlbGxYICsgd2FsbFRoaWNrbmVzcyAvIDJcbiAgICBsZXQgeSA9IHJvdyAqIHVuaXRDZWxsWSArIHdhbGxUaGlja25lc3MgLyAyXG5cbiAgICBpZiAoYW5jaG9yID09PSAnY2VudGVyJykgW3gsIHldID0gW3ggKyBwbGF0ZVNpemVYIC8gMiwgeSArIHBsYXRlU2l6ZVkgLyAyXVxuXG4gICAgcmV0dXJuIFt4LCB5XVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Um93QW5kQ29sdW1uID0gKGluZGV4OiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdID0+IHtcbiAgICByZXR1cm4gW01hdGguZmxvb3IoaW5kZXggLyBudW1Db2x1bW5zKSwgaW5kZXggJSBudW1Db2x1bW5zXVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Rm9udFNpemVUb0ZpdCA9IChwbGF0ZTogUGxhdGUpOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHsgdGV4dCwgZm9udCB9ID0gcGxhdGVcbiAgICBjb25zdCBkZWZhdWx0Rm9udFNpemUgPSBmb250TWFwW2ZvbnRdLmRlZmF1bHRTaXplXG4gICAgY29uc3QgbWF4V2lkdGhQeCA9IG1heFdpZHRoICogMy43OCAvLyBtbSB0byBweFxuICAgIGNvbnN0IHN2Z05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInN2Z1wiKVxuICAgIHN2Zy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxuICAgIHN2Zy5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3ZnKVxuXG4gICAgY29uc3QgdGVtcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwidGV4dFwiKVxuICAgIHRlbXBUZXh0LnNldEF0dHJpYnV0ZShcImZvbnQtZmFtaWx5XCIsIGZvbnRNYXBbZm9udF1bXCJmb250LWZhbWlseVwiXSlcbiAgICB0ZW1wVGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LXN0eWxlXCIsIGZvbnRNYXBbZm9udF1bXCJmb250LXN0eWxlXCJdKVxuXG4gICAgdGVtcFRleHQuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIGAke2RlZmF1bHRGb250U2l6ZX1tbWApXG4gICAgdGVtcFRleHQudGV4dENvbnRlbnQgPSB0ZXh0XG4gICAgc3ZnLmFwcGVuZENoaWxkKHRlbXBUZXh0KVxuXG4gICAgY29uc3QgdGV4dFdpZHRoID0gdGVtcFRleHQuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKClcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHN2ZylcblxuICAgIGlmICh0ZXh0V2lkdGggPD0gbWF4V2lkdGhQeCkgcmV0dXJuIGRlZmF1bHRGb250U2l6ZVxuICAgIHJldHVybiBkZWZhdWx0Rm9udFNpemUgKiAobWF4V2lkdGhQeCAvIHRleHRXaWR0aClcbn1cblxuZXhwb3J0IGNvbnN0IHNpemVNdWx0aXBsaWVyID0gKHBsYXRlOiBQbGF0ZSk6IG51bWJlciA9PiB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSBwbGF0ZVxuICAgIGxldCBpbml0aWFsTXVsdGlwbGllciA9IDFcblxuICAgIGlmICh1cHBlcmNhc2VGcmFjdGlvbih0ZXh0KSA+IDAuOCkgaW5pdGlhbE11bHRpcGxpZXIgKj0gMC45NVxuICAgIGVsc2UgaWYgKHVwcGVyY2FzZUZyYWN0aW9uKHRleHQpID4gMC41KSBpbml0aWFsTXVsdGlwbGllciAqPSAwLjlcblxuICAgIGlmIChhbHBoYW51bWVyaWNMZW5ndGgodGV4dCkgPD0gMikgaW5pdGlhbE11bHRpcGxpZXIgKj0gMS4yXG4gICAgaWYgKGFscGhhbnVtZXJpY0xlbmd0aCh0ZXh0KSA8PSAzKSBpbml0aWFsTXVsdGlwbGllciAqPSAxLjFcblxuICAgIHJldHVybiBpbml0aWFsTXVsdGlwbGllclxuXG59XG5cbmNvbnN0IHVwcGVyY2FzZUZyYWN0aW9uID0gKGlucHV0OiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuICAgIGxldCB0b3RhbCA9IDBcbiAgICBsZXQgdXBwZXIgPSAwXG5cbiAgICBmb3IgKGNvbnN0IGNoIG9mIGlucHV0KSB7XG4gICAgICAgIGlmICgvXltBLVphLXowLTldJC8udGVzdChjaCkpIHtcbiAgICAgICAgICAgIHRvdGFsKytcblxuICAgICAgICAgICAgLy8gRGlnaXRzIGNvdW50IGFzIHVwcGVyY2FzZVxuICAgICAgICAgICAgaWYgKC9bQS1aMC05XS8udGVzdChjaCkpIHtcbiAgICAgICAgICAgICAgICB1cHBlcisrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG90YWwgPT09IDAgPyAwIDogdXBwZXIgLyB0b3RhbFxufVxuXG5jb25zdCBhbHBoYW51bWVyaWNMZW5ndGggPSAoaW5wdXQ6IHN0cmluZyk6IG51bWJlciA9PiB7XG4gICAgbGV0IGNvdW50ID0gMFxuXG4gICAgZm9yIChjb25zdCBjaCBvZiBpbnB1dCkge1xuICAgICAgICBpZiAoL15bQS1aYS16MC05XSQvLnRlc3QoY2gpKSB7XG4gICAgICAgICAgICBjb3VudCsrXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY291bnRcbn0iLCJpbXBvcnQgeyBoLCBWTm9kZSB9IGZyb20gJ3NuYWJiZG9tJ1xuaW1wb3J0IGhoIGZyb20gJ2h5cGVyc2NyaXB0LWhlbHBlcnMnXG5pbXBvcnQgeyBGb250LCBNb2RlbCwgUGxhdGUgfSBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZXMnXG5pbXBvcnQgeyBmb250TWFwLCBwbGF0ZVNpemVYLCBwbGF0ZVNpemVZLCBiZXZlbFNpemUsIG51bUNvbHVtbnMsIGppZ1NpemVYLCBqaWdTaXplWSwgbnVtUm93cywgYm9keU1hcmdpbiB9IGZyb20gJy4vZGF0YSdcbmltcG9ydCB7IGdldEZvbnRTaXplVG9GaXQsIGdldFBsYXRlUG9zaXRpb24sIHNpemVNdWx0aXBsaWVyIH0gZnJvbSAnLi91dGlscydcblxuY29uc3QgeyBkaXYsIGJ1dHRvbiwgc3ZnLCBpbnB1dCwgc2VsZWN0LCBvcHRpb24sIHNwYW4gfSA9IGhoKGgpXG5cbmNvbnN0IHVuaXRDZWxsID0gKGluZGV4OiBudW1iZXIsIGRpc3BhdGNoOiAobWVzc2FnZTogTWVzc2FnZSkgPT4gdm9pZCkgPT4ge1xuICAgIGNvbnN0IFt4LCB5XSA9IGdldFBsYXRlUG9zaXRpb24oaW5kZXgsICd0b3BMZWZ0JylcblxuICAgIHJldHVybiBbXG4gICAgICAgIGgoJ3JlY3QnLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHg6IGAke3h9bW1gLFxuICAgICAgICAgICAgICAgIHk6IGAke3l9bW1gLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtwbGF0ZVNpemVYfW1tYCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke3BsYXRlU2l6ZVl9bW1gLFxuICAgICAgICAgICAgICAgIHN0cm9rZTogJ2dvbGQnLFxuICAgICAgICAgICAgICAgIGZpbGw6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiBkaXNwYXRjaChbJ3NlbGVjdCBwbGF0ZSB0ZXh0JywgaW5kZXhdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgaCgncmVjdCcsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgeDogYCR7eCArIGJldmVsU2l6ZX1tbWAsXG4gICAgICAgICAgICAgICAgeTogYCR7eSArIGJldmVsU2l6ZX1tbWAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGAke3BsYXRlU2l6ZVggLSAyICogYmV2ZWxTaXplfW1tYCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke3BsYXRlU2l6ZVkgLSAyICogYmV2ZWxTaXplfW1tYCxcbiAgICAgICAgICAgICAgICBzdHJva2U6ICdnb2xkJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnbm9uZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICBdXG59XG5cbmNvbnN0IGJvcmRlciA9IGgoJ3JlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgICAgeDogYDBtbWAsXG4gICAgICAgIHk6IGAwbW1gLFxuICAgICAgICB3aWR0aDogYCR7amlnU2l6ZVh9bW1gLFxuICAgICAgICBoZWlnaHQ6IGAke2ppZ1NpemVZfW1tYCxcbiAgICAgICAgc3Ryb2tlOiAnZ29sZCcsXG4gICAgICAgIGZpbGw6ICdub25lJ1xuICAgIH1cbn0pXG5cblxuXG5jb25zdCB1bml0VGV4dCA9IChpbmRleDogbnVtYmVyLCBwbGF0ZTogUGxhdGUpID0+IHtcbiAgICBjb25zdCBbeCwgeV0gPSBnZXRQbGF0ZVBvc2l0aW9uKGluZGV4LCAnY2VudGVyJylcbiAgICBjb25zdCBmb250U2l6ZSA9IGdldEZvbnRTaXplVG9GaXQocGxhdGUpICogc2l6ZU11bHRpcGxpZXIocGxhdGUpXG4gICAgY29uc3QgYmFzZUxpbmVDb3JyZWN0aW9uID0gZm9udFNpemUgKiAwLjM1XG5cblxuICAgIHJldHVybiBoKCd0ZXh0JyxcbiAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB4OiBgJHt4fW1tYCxcbiAgICAgICAgICAgICAgICB5OiBgJHt5ICsgYmFzZUxpbmVDb3JyZWN0aW9ufW1tYCxcbiAgICAgICAgICAgICAgICAndGV4dC1hbmNob3InOiAnbWlkZGxlJyxcbiAgICAgICAgICAgICAgICAnZG9taW5hbnQtYmFzZWxpbmUnOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6IGAke2ZvbnRTaXplfW1tYCxcbiAgICAgICAgICAgICAgICAnZm9udC1mYW1pbHknOiBmb250TWFwW3BsYXRlLmZvbnRdWydmb250LWZhbWlseSddLFxuICAgICAgICAgICAgICAgICdmb250LXN0eWxlJzogZm9udE1hcFtwbGF0ZS5mb250XVsnZm9udC1zdHlsZSddXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBsYXRlLnRleHRcbiAgICApXG59XG5cblxuY29uc3QgZWRpdEZvbnRJbnB1dCA9IChtb2RlbDogTW9kZWwsIGRpc3BhdGNoOiAobWVzc2FnZTogTWVzc2FnZSkgPT4gdm9pZCk6IFZOb2RlIHwgbnVsbCA9PiB7XG4gICAgaWYgKG1vZGVsLnNlbGVjdGVkUGxhdGUgPT09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgW2luZGV4LCBlZGl0T3B0aW9uXSA9IG1vZGVsLnNlbGVjdGVkUGxhdGVcbiAgICBpZiAoZWRpdE9wdGlvbiA9PT0gJ3RleHQnKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHBsYXRlID0gbW9kZWwucGxhdGVMaXN0W2luZGV4XVxuICAgIGxldCBbeCwgeV0gPSBnZXRQbGF0ZVBvc2l0aW9uKGluZGV4LCAndG9wTGVmdCcpO1xuICAgIFt4LCB5XSA9IFt4ICsgYm9keU1hcmdpbiwgeSArIGJvZHlNYXJnaW5dXG5cbiAgICBjb25zdCBmb250SW5wdXQgPSBzZWxlY3QoXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgbGVmdDogYCR7eCArIHBsYXRlU2l6ZVggKiAzIC8gNH1tbWAsXG4gICAgICAgICAgICAgICAgdG9wOiBgJHt5fW1tYCxcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7cGxhdGVTaXplWCAqIDEgLyA0fW1tYCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke3BsYXRlU2l6ZVl9bW1gLFxuICAgICAgICAgICAgICAgICdmb250LWZhbWlseSc6IGZvbnRNYXBbcGxhdGUuZm9udF1bJ2ZvbnQtZmFtaWx5J10sXG4gICAgICAgICAgICAgICAgJ2ZvbnQtc3R5bGUnOiBmb250TWFwW3BsYXRlLmZvbnRdWydmb250LXN0eWxlJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBob29rOiB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0OiAodm5vZGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RFbGVtZW50ID0gKHZub2RlLmVsbSBhcyBIVE1MSW5wdXRFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RFbGVtZW50LmZvY3VzKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjaGFuZ2U6IChlOiBhbnkpID0+IGRpc3BhdGNoKFsnZWRpdCBwbGF0ZSBmb250JywgaW5kZXgsIGUudGFyZ2V0LnZhbHVlXSksXG4gICAgICAgICAgICAgICAgYmx1cjogKCkgPT4gZGlzcGF0Y2goWydkZXNlbGVjdCBwbGF0ZScsIGluZGV4XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgT2JqZWN0LmtleXMoZm9udE1hcCkubWFwKGZvbnROYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBmb250TmFtZSBhcyBGb250XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmb250TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmb250TmFtZSA9PT0gbW9kZWwucGxhdGVMaXN0W2luZGV4XS5mb250XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnZm9udC1mYW1pbHknOiBmb250TWFwW25hbWVdWydmb250LWZhbWlseSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtc3R5bGUnOiBmb250TWFwW25hbWVdWydmb250LXN0eWxlJ11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZm9udE5hbWVcbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICApXG4gICAgcmV0dXJuIGZvbnRJbnB1dFxufVxuXG5jb25zdCBmb250U2VsZWN0QXJyb3dzID0gKG1vZGVsOiBNb2RlbCwgZGlzcGF0Y2g6IChtZXNzYWdlOiBNZXNzYWdlKSA9PiB2b2lkKTogVk5vZGUgPT4ge1xuICAgIGNvbnN0IGJvZHlNYXJnaW4gPSAyXG5cbiAgICBjb25zdCBhcnJvdyA9IChpbmRleDogbnVtYmVyKSA9PiB7XG5cbiAgICAgICAgaWYgKG1vZGVsLnNlbGVjdGVkUGxhdGUgIT09IG51bGwgJiYgaW5kZXggPT09IG1vZGVsLnNlbGVjdGVkUGxhdGVbMF0pIHJldHVybiBudWxsXG4gICAgICAgIGxldCBbeCwgeV0gPSBnZXRQbGF0ZVBvc2l0aW9uKGluZGV4LCAndG9wTGVmdCcpO1xuICAgICAgICBbeCwgeV0gPSBbeCArIGJvZHlNYXJnaW4gKyBwbGF0ZVNpemVYICogNyAvIDgsIHkgKyBib2R5TWFyZ2luICsgcGxhdGVTaXplWSAvIDRdXG5cbiAgICAgICAgcmV0dXJuIHNwYW4oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vZGVsLnBsYXRlTGlzdFtpbmRleF0uZm9udFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGAke3h9bW1gLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IGAke3l9bW1gLFxuICAgICAgICAgICAgICAgICAgICAnZm9udC1zaXplJzogJzZtbScsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ29sZCcsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlcmRvd246IChlOiBQb2ludGVyRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goWydzZWxlY3QgcGxhdGUgZm9udCcsIGluZGV4XSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAn4pa8J1xuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGRpdihcbiAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogbnVtQ29sdW1ucyAqIG51bVJvd3MgfSwgKF8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXJyb3coaW5kZXgpXG4gICAgICAgIH0pXG4gICAgKVxufVxuXG5jb25zdCBlZGl0VGV4dElucHV0ID0gKG1vZGVsOiBNb2RlbCwgZGlzcGF0Y2g6IChtZXNzYWdlOiBNZXNzYWdlKSA9PiB2b2lkKTogVk5vZGUgfCBudWxsID0+IHtcblxuICAgIGlmIChtb2RlbC5zZWxlY3RlZFBsYXRlID09PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IFtpbmRleCwgZWRpdE9wdGlvbl0gPSBtb2RlbC5zZWxlY3RlZFBsYXRlXG4gICAgaWYgKGVkaXRPcHRpb24gPT09ICdmb250JykgcmV0dXJuIG51bGxcbiAgICBjb25zdCBwbGF0ZSA9IG1vZGVsLnBsYXRlTGlzdFtpbmRleF1cblxuICAgIGxldCBbeCwgeV0gPSBnZXRQbGF0ZVBvc2l0aW9uKGluZGV4LCAndG9wTGVmdCcpO1xuICAgIFt4LCB5XSA9IFt4ICsgYm9keU1hcmdpbiwgeSArIGJvZHlNYXJnaW5dXG5cblxuICAgIGNvbnN0IGZvbnRTaXplID0gZ2V0Rm9udFNpemVUb0ZpdChwbGF0ZSkgKiBzaXplTXVsdGlwbGllcihwbGF0ZSlcblxuICAgIGNvbnN0IHRleHRJbnB1dCA9IGlucHV0KFxuICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbW9kZWwucGxhdGVMaXN0W2luZGV4XS50ZXh0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgbGVmdDogYCR7eH1tbWAsXG4gICAgICAgICAgICAgICAgdG9wOiBgJHt5fW1tYCxcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7cGxhdGVTaXplWH1tbWAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtwbGF0ZVNpemVZfW1tYCxcbiAgICAgICAgICAgICAgICAndGV4dC1hbGlnbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICdmb250LXNpemUnOiBgJHtmb250U2l6ZX1tbWAsXG4gICAgICAgICAgICAgICAgJ2ZvbnQtZmFtaWx5JzogZm9udE1hcFtwbGF0ZS5mb250XVsnZm9udC1mYW1pbHknXSxcbiAgICAgICAgICAgICAgICAnZm9udC1zdHlsZSc6IGZvbnRNYXBbcGxhdGUuZm9udF1bJ2ZvbnQtc3R5bGUnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhvb2s6IHtcbiAgICAgICAgICAgICAgICBpbnNlcnQ6ICh2bm9kZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9ICh2bm9kZS5lbG0gYXMgSFRNTElucHV0RWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LmZvY3VzKClcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnNlbGVjdCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IChlOiBhbnkpID0+IGRpc3BhdGNoKFsnZWRpdCBwbGF0ZSB0ZXh0JywgaW5kZXgsIGUudGFyZ2V0LnZhbHVlXSksXG4gICAgICAgICAgICAgICAgYmx1cjogKCkgPT4gZGlzcGF0Y2goWydkZXNlbGVjdCBwbGF0ZScsIGluZGV4XSksXG4gICAgICAgICAgICAgICAga2V5ZG93bjogKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJyB8fCBlLmtleSA9PT0gJ0VudGVyJykgZGlzcGF0Y2goWydkZXNlbGVjdCBwbGF0ZScsIGluZGV4XSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgKVxuXG5cbiAgICByZXR1cm4gdGV4dElucHV0XG59XG5cbmNvbnN0IHJlbmRlclN2ZyA9IChtb2RlbDogTW9kZWwsIGRpc3BhdGNoOiAobWVzc2FnZTogTWVzc2FnZSkgPT4gdm9pZCk6IFZOb2RlID0+IHtcbiAgICByZXR1cm4gc3ZnKFxuICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtqaWdTaXplWH1tbWAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtqaWdTaXplWX1tbWAsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICAgIGJvcmRlcixcbiAgICAgICAgICAgIC4uLm1vZGVsLnBsYXRlTGlzdC5tYXAoKHBsYXRlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bml0VGV4dChpbmRleCwgcGxhdGUpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIC4uLkFycmF5LmZyb20oeyBsZW5ndGg6IG51bUNvbHVtbnMgKiBudW1Sb3dzIH0sIChfLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bml0Q2VsbChpbmRleCwgZGlzcGF0Y2gpXG4gICAgICAgICAgICB9KS5mbGF0KClcbiAgICAgICAgXVxuICAgIClcbn1cblxuY29uc3QgZG93bmxvYWRCdXR0b24gPSBidXR0b24oXG4gICAge1xuICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6ICgpID0+IGRvd25sb2FkU3ZnKClcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJEb3dubG9hZCBTVkdcIlxuKVxuXG5jb25zdCBkb3dubG9hZFN2ZyA9ICgpID0+IHtcbiAgICBjb25zdCBzdmdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN2Z1wiKVxuICAgIGlmICghc3ZnRWxlbWVudCkgcmV0dXJuXG5cbiAgICAvLyBTZXJpYWxpemUgU1ZHXG4gICAgY29uc3Qgc2VyaWFsaXplciA9IG5ldyBYTUxTZXJpYWxpemVyKClcbiAgICBjb25zdCBzb3VyY2UgPSBzZXJpYWxpemVyLnNlcmlhbGl6ZVRvU3RyaW5nKHN2Z0VsZW1lbnQpXG5cbiAgICAvLyBBZGQgWE1MIGhlYWRlciAob3B0aW9uYWwgYnV0IGdvb2QgZm9yIHByb3BlciBTVkcgZmlsZXMpXG4gICAgY29uc3Qgc3ZnQmxvYiA9IG5ldyBCbG9iKFxuICAgICAgICBbJzw/eG1sIHZlcnNpb249XCIxLjBcIiBzdGFuZGFsb25lPVwibm9cIj8+XFxuJyArIHNvdXJjZV0sXG4gICAgICAgIHsgdHlwZTogXCJpbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLThcIiB9XG4gICAgKVxuXG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChzdmdCbG9iKVxuXG4gICAgLy8gVHJpZ2dlciBkb3dubG9hZFxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuICAgIGxpbmsuaHJlZiA9IHVybFxuICAgIGxpbmsuZG93bmxvYWQgPSBcInBsYXRlcy5zdmdcIlxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluaylcbiAgICBsaW5rLmNsaWNrKClcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspXG5cbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybClcbn1cblxuXG5leHBvcnQgY29uc3QgdmlldyA9IChtb2RlbDogTW9kZWwsIGRpc3BhdGNoOiAobWVzc2FnZTogTWVzc2FnZSkgPT4gdm9pZCkgPT4ge1xuICAgIHJldHVybiBkaXYoW1xuICAgICAgICByZW5kZXJTdmcobW9kZWwsIGRpc3BhdGNoKSxcbiAgICAgICAgZm9udFNlbGVjdEFycm93cyhtb2RlbCwgZGlzcGF0Y2gpLFxuICAgICAgICBlZGl0VGV4dElucHV0KG1vZGVsLCBkaXNwYXRjaCksXG4gICAgICAgIGVkaXRGb250SW5wdXQobW9kZWwsIGRpc3BhdGNoKSxcbiAgICAgICAgZG93bmxvYWRCdXR0b25cbiAgICBdKVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhcHAgfSBmcm9tIFwiLi9hcHBcIlxuaW1wb3J0IHsgaW5pdE1vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIlxuaW1wb3J0IHsgdmlldyB9IGZyb20gXCIuL3ZpZXdcIlxuaW1wb3J0IHsgdXBkYXRlIH0gZnJvbSBcIi4vdXBkYXRlXCJcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSBhcyBIVE1MRWxlbWVudFxuXG5hcHAoaW5pdE1vZGVsLCB2aWV3LCB1cGRhdGUsIHJvb3QpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9