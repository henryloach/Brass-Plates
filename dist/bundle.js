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
        // console.log(JSON.stringify(message, null, 2))
        // console.log(JSON.stringify(model, null, 2))
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
/* harmony export */   fontMap: () => (/* binding */ fontMap),
/* harmony export */   jigSizeX: () => (/* binding */ jigSizeX),
/* harmony export */   jigSizeY: () => (/* binding */ jigSizeY),
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
const fontMap = {
    "Script": "Cursiv",
    "Classic Script": "Dancing Script",
    "Italic": "Gentium Book Plus Italic",
    "Serif": "Merriweather",
    "Sans Serif": "Roboto",
    "Handwritten": "Caveat"
};


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
/* harmony export */   getPlatePosition: () => (/* binding */ getPlatePosition)
/* harmony export */ });
const createEmptyPlateArray = () => {
    return Array.from({ length: 16 }, (value, index) => {
        return {
            text: "",
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   view: () => (/* binding */ view)
/* harmony export */ });
/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! snabbdom */ "./node_modules/snabbdom/build/h.js");
/* harmony import */ var hyperscript_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hyperscript-helpers */ "./node_modules/hyperscript-helpers/dist/index.js");
/* harmony import */ var hyperscript_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hyperscript_helpers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/data.ts");



const { div, button, svg, pre, form, input, select, option, span } = hyperscript_helpers__WEBPACK_IMPORTED_MODULE_1___default()(snabbdom__WEBPACK_IMPORTED_MODULE_0__.h);
const unitCell = (row, column, dispatch) => {
    const x = column * _data__WEBPACK_IMPORTED_MODULE_2__.unitCellX + _data__WEBPACK_IMPORTED_MODULE_2__.wallThickness / 2;
    const y = row * _data__WEBPACK_IMPORTED_MODULE_2__.unitCellY + _data__WEBPACK_IMPORTED_MODULE_2__.wallThickness / 2;
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
                click: () => dispatch(['select plate text', row * _data__WEBPACK_IMPORTED_MODULE_2__.numColumns + column])
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
const getFontSizeToFit = (text, defaultSize, maxWidth, fontFamily) => {
    maxWidth = maxWidth * 3.78; // mm to px
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.style.position = "absolute";
    svg.style.visibility = "hidden";
    document.body.appendChild(svg);
    const tempText = document.createElementNS(svgNS, "text");
    tempText.setAttribute("font-family", fontFamily);
    tempText.setAttribute("font-size", `${defaultSize}mm`);
    tempText.textContent = text;
    svg.appendChild(tempText);
    const textWidth = tempText.getComputedTextLength();
    document.body.removeChild(svg);
    if (textWidth <= maxWidth)
        return defaultSize;
    return defaultSize * (maxWidth / textWidth);
};
const unitText = (row, column, plate) => {
    const x = column * _data__WEBPACK_IMPORTED_MODULE_2__.unitCellX + _data__WEBPACK_IMPORTED_MODULE_2__.wallThickness / 2 + _data__WEBPACK_IMPORTED_MODULE_2__.plateSizeX / 2;
    const y = row * _data__WEBPACK_IMPORTED_MODULE_2__.unitCellY + _data__WEBPACK_IMPORTED_MODULE_2__.wallThickness / 2 + _data__WEBPACK_IMPORTED_MODULE_2__.plateSizeY / 2;
    const defaultFontSize = 6.5;
    const maxWidth = _data__WEBPACK_IMPORTED_MODULE_2__.plateSizeX - 16; // mm padding
    const fontSize = getFontSizeToFit(plate.text, defaultFontSize, maxWidth, _data__WEBPACK_IMPORTED_MODULE_2__.fontMap[plate.font]);
    return (0,snabbdom__WEBPACK_IMPORTED_MODULE_0__.h)('text', {
        attrs: {
            x: `${x}mm`,
            y: `${y}mm`,
            'text-anchor': 'middle',
            'dominant-baseline': 'central',
            'font-size': `${fontSize}mm`,
            'font-family': _data__WEBPACK_IMPORTED_MODULE_2__.fontMap[plate.font]
        }
    }, plate.text);
};
const editFontInput = (model, dispatch) => {
    if (model.selectedPlate === null)
        return null;
    const [index, editOption] = model.selectedPlate;
    if (editOption === 'text')
        return null;
    const bodyMargin = 2;
    const row = Math.floor(index / 2);
    const column = index % 2;
    const x = column * _data__WEBPACK_IMPORTED_MODULE_2__.unitCellX + _data__WEBPACK_IMPORTED_MODULE_2__.wallThickness / 2 + bodyMargin;
    const y = row * _data__WEBPACK_IMPORTED_MODULE_2__.unitCellY + _data__WEBPACK_IMPORTED_MODULE_2__.wallThickness / 2 + bodyMargin;
    const fontInput = select({
        attrs: {
            name: 'Font'
        },
        style: {
            position: 'absolute',
            left: `${x + _data__WEBPACK_IMPORTED_MODULE_2__.plateSizeX * 3 / 4}mm`,
            top: `${y}mm`,
            width: `${_data__WEBPACK_IMPORTED_MODULE_2__.plateSizeX * 1 / 4}mm`,
            height: `${_data__WEBPACK_IMPORTED_MODULE_2__.plateSizeY}mm`
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
        return option({
            attrs: {
                value: fontName
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
        const row = Math.floor(index / 2);
        const column = index % 2;
        const x = column * _data__WEBPACK_IMPORTED_MODULE_2__.unitCellX + _data__WEBPACK_IMPORTED_MODULE_2__.wallThickness / 2 + bodyMargin + _data__WEBPACK_IMPORTED_MODULE_2__.plateSizeX * 7 / 8;
        const y = row * _data__WEBPACK_IMPORTED_MODULE_2__.unitCellY + _data__WEBPACK_IMPORTED_MODULE_2__.wallThickness / 2 + bodyMargin + _data__WEBPACK_IMPORTED_MODULE_2__.plateSizeY / 4;
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
    const bodyMargin = 2;
    const row = Math.floor(index / 2);
    const column = index % 2;
    const x = column * _data__WEBPACK_IMPORTED_MODULE_2__.unitCellX + _data__WEBPACK_IMPORTED_MODULE_2__.wallThickness / 2 + bodyMargin;
    const y = row * _data__WEBPACK_IMPORTED_MODULE_2__.unitCellY + _data__WEBPACK_IMPORTED_MODULE_2__.wallThickness / 2 + bodyMargin;
    const defaultFontSize = 6.5;
    const maxWidth = _data__WEBPACK_IMPORTED_MODULE_2__.plateSizeX - 16; // mm padding
    const fontSize = getFontSizeToFit(plate.text, defaultFontSize, maxWidth, _data__WEBPACK_IMPORTED_MODULE_2__.fontMap[plate.font]);
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
            'font-family': _data__WEBPACK_IMPORTED_MODULE_2__.fontMap[plate.font]
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
            const row = Math.floor(index / 2);
            const column = index % 2;
            return unitText(row, column, plate);
        }),
        ...Array.from({ length: _data__WEBPACK_IMPORTED_MODULE_2__.numColumns * _data__WEBPACK_IMPORTED_MODULE_2__.numRows }, (_, index) => {
            return unitCell(Math.floor(index / 2), index % 2, dispatch);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQkFBb0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsdUJBQXVCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRTtBQUMvRSxxRkFBcUY7QUFDckYsNEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtCQUErQjtBQUNuRDtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDOzs7Ozs7Ozs7Ozs7Ozs7QUN2WE87QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Qjs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHNDOzs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHNCQUFzQjtBQUM3QixpQzs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDOzs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0JBQWtCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFFLDJDQUFNLEVBQUUsSUFBSSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvLi9ub2RlX21vZHVsZXMvaHlwZXJzY3JpcHQtaGVscGVycy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL21hc3RlcmluZy10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3NuYWJiZG9tL2J1aWxkL2guanMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvLi9ub2RlX21vZHVsZXMvc25hYmJkb20vYnVpbGQvaHRtbGRvbWFwaS5qcyIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC9pbml0LmpzIiwid2VicGFjazovL21hc3RlcmluZy10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3NuYWJiZG9tL2J1aWxkL2lzLmpzIiwid2VicGFjazovL21hc3RlcmluZy10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3NuYWJiZG9tL2J1aWxkL21vZHVsZXMvYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC9tb2R1bGVzL2NsYXNzLmpzIiwid2VicGFjazovL21hc3RlcmluZy10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3NuYWJiZG9tL2J1aWxkL21vZHVsZXMvZXZlbnRsaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvLi9ub2RlX21vZHVsZXMvc25hYmJkb20vYnVpbGQvbW9kdWxlcy9zdHlsZS5qcyIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC92bm9kZS5qcyIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvLi9zcmMvZGF0YS50cyIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC8uL3NyYy9tb2RlbC50cyIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC8uL3NyYy91cGRhdGUudHMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvLi9zcmMvdmlldy50cyIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFzdGVyaW5nLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYXN0ZXJpbmctdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21hc3RlcmluZy10eXBlc2NyaXB0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgaXNWYWxpZFN0cmluZyA9IGZ1bmN0aW9uIGlzVmFsaWRTdHJpbmcocGFyYW0pIHtcbiAgcmV0dXJuIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgJiYgcGFyYW0ubGVuZ3RoID4gMDtcbn07XG5cbnZhciBzdGFydHNXaXRoID0gZnVuY3Rpb24gc3RhcnRzV2l0aChzdHJpbmcsIHN0YXJ0KSB7XG4gIHJldHVybiBzdHJpbmdbMF0gPT09IHN0YXJ0O1xufTtcblxudmFyIGlzU2VsZWN0b3IgPSBmdW5jdGlvbiBpc1NlbGVjdG9yKHBhcmFtKSB7XG4gIHJldHVybiBpc1ZhbGlkU3RyaW5nKHBhcmFtKSAmJiAoc3RhcnRzV2l0aChwYXJhbSwgJy4nKSB8fCBzdGFydHNXaXRoKHBhcmFtLCAnIycpKTtcbn07XG5cbnZhciBub2RlID0gZnVuY3Rpb24gbm9kZShoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFnTmFtZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZmlyc3QpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICByZXN0W19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzU2VsZWN0b3IoZmlyc3QpKSB7XG4gICAgICAgIHJldHVybiBoLmFwcGx5KHVuZGVmaW5lZCwgW3RhZ05hbWUgKyBmaXJzdF0uY29uY2F0KHJlc3QpKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gaCh0YWdOYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBoLmFwcGx5KHVuZGVmaW5lZCwgW3RhZ05hbWUsIGZpcnN0XS5jb25jYXQocmVzdCkpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59O1xuXG52YXIgVEFHX05BTUVTID0gWydhJywgJ2FiYnInLCAnYWNyb255bScsICdhZGRyZXNzJywgJ2FwcGxldCcsICdhcmVhJywgJ2FydGljbGUnLCAnYXNpZGUnLCAnYXVkaW8nLCAnYicsICdiYXNlJywgJ2Jhc2Vmb250JywgJ2JkaScsICdiZG8nLCAnYmdzb3VuZCcsICdiaWcnLCAnYmxpbmsnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2JyJywgJ2J1dHRvbicsICdjYW52YXMnLCAnY2FwdGlvbicsICdjZW50ZXInLCAnY2l0ZScsICdjb2RlJywgJ2NvbCcsICdjb2xncm91cCcsICdjb21tYW5kJywgJ2NvbnRlbnQnLCAnZGF0YScsICdkYXRhbGlzdCcsICdkZCcsICdkZWwnLCAnZGV0YWlscycsICdkZm4nLCAnZGlhbG9nJywgJ2RpcicsICdkaXYnLCAnZGwnLCAnZHQnLCAnZWxlbWVudCcsICdlbScsICdlbWJlZCcsICdmaWVsZHNldCcsICdmaWdjYXB0aW9uJywgJ2ZpZ3VyZScsICdmb250JywgJ2Zvb3RlcicsICdmb3JtJywgJ2ZyYW1lJywgJ2ZyYW1lc2V0JywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWQnLCAnaGVhZGVyJywgJ2hncm91cCcsICdocicsICdodG1sJywgJ2knLCAnaWZyYW1lJywgJ2ltYWdlJywgJ2ltZycsICdpbnB1dCcsICdpbnMnLCAnaXNpbmRleCcsICdrYmQnLCAna2V5Z2VuJywgJ2xhYmVsJywgJ2xlZ2VuZCcsICdsaScsICdsaW5rJywgJ2xpc3RpbmcnLCAnbWFpbicsICdtYXAnLCAnbWFyaycsICdtYXJxdWVlJywgJ21hdGgnLCAnbWVudScsICdtZW51aXRlbScsICdtZXRhJywgJ21ldGVyJywgJ211bHRpY29sJywgJ25hdicsICduZXh0aWQnLCAnbm9icicsICdub2VtYmVkJywgJ25vZnJhbWVzJywgJ25vc2NyaXB0JywgJ29iamVjdCcsICdvbCcsICdvcHRncm91cCcsICdvcHRpb24nLCAnb3V0cHV0JywgJ3AnLCAncGFyYW0nLCAncGljdHVyZScsICdwbGFpbnRleHQnLCAncHJlJywgJ3Byb2dyZXNzJywgJ3EnLCAncmInLCAncmJjJywgJ3JwJywgJ3J0JywgJ3J0YycsICdydWJ5JywgJ3MnLCAnc2FtcCcsICdzY3JpcHQnLCAnc2VjdGlvbicsICdzZWxlY3QnLCAnc2hhZG93JywgJ3Nsb3QnLCAnc21hbGwnLCAnc291cmNlJywgJ3NwYWNlcicsICdzcGFuJywgJ3N0cmlrZScsICdzdHJvbmcnLCAnc3R5bGUnLCAnc3ViJywgJ3N1bW1hcnknLCAnc3VwJywgJ3N2ZycsICd0YWJsZScsICd0Ym9keScsICd0ZCcsICd0ZW1wbGF0ZScsICd0ZXh0YXJlYScsICd0Zm9vdCcsICd0aCcsICd0aGVhZCcsICd0aW1lJywgJ3RpdGxlJywgJ3RyJywgJ3RyYWNrJywgJ3R0JywgJ3UnLCAndWwnLCAndmFyJywgJ3ZpZGVvJywgJ3dicicsICd4bXAnXTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGgpIHtcbiAgdmFyIGNyZWF0ZVRhZyA9IG5vZGUoaCk7XG4gIHZhciBleHBvcnRlZCA9IHsgVEFHX05BTUVTOiBUQUdfTkFNRVMsIGlzU2VsZWN0b3I6IGlzU2VsZWN0b3IsIGNyZWF0ZVRhZzogY3JlYXRlVGFnIH07XG4gIFRBR19OQU1FUy5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XG4gICAgZXhwb3J0ZWRbbl0gPSBjcmVhdGVUYWcobik7XG4gIH0pO1xuICByZXR1cm4gZXhwb3J0ZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJpbXBvcnQgeyB2bm9kZSB9IGZyb20gXCIuL3Zub2RlLmpzXCI7XG5pbXBvcnQgKiBhcyBpcyBmcm9tIFwiLi9pcy5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5TKGRhdGEsIGNoaWxkcmVuLCBzZWwpIHtcbiAgICBkYXRhLm5zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICAgIGlmIChzZWwgIT09IFwiZm9yZWlnbk9iamVjdFwiICYmIGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBjaGlsZERhdGEgPSBjaGlsZC5kYXRhO1xuICAgICAgICAgICAgaWYgKGNoaWxkRGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYWRkTlMoY2hpbGREYXRhLCBjaGlsZC5jaGlsZHJlbiwgY2hpbGQuc2VsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBoKHNlbCwgYiwgYykge1xuICAgIGxldCBkYXRhID0ge307XG4gICAgbGV0IGNoaWxkcmVuO1xuICAgIGxldCB0ZXh0O1xuICAgIGxldCBpO1xuICAgIGlmIChjICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGRhdGEgPSBiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpcy5hcnJheShjKSkge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBjO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzLnByaW1pdGl2ZShjKSkge1xuICAgICAgICAgICAgdGV4dCA9IGMudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjICYmIGMuc2VsKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IFtjXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChiICE9PSB1bmRlZmluZWQgJiYgYiAhPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXMuYXJyYXkoYikpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gYjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpcy5wcmltaXRpdmUoYikpIHtcbiAgICAgICAgICAgIHRleHQgPSBiLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYiAmJiBiLnNlbCkge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBbYl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXRhID0gYjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChpcy5wcmltaXRpdmUoY2hpbGRyZW5baV0pKVxuICAgICAgICAgICAgICAgIGNoaWxkcmVuW2ldID0gdm5vZGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY2hpbGRyZW5baV0sIHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNlbC5zdGFydHNXaXRoKFwic3ZnXCIpICYmXG4gICAgICAgIChzZWwubGVuZ3RoID09PSAzIHx8IHNlbFszXSA9PT0gXCIuXCIgfHwgc2VsWzNdID09PSBcIiNcIikpIHtcbiAgICAgICAgYWRkTlMoZGF0YSwgY2hpbGRyZW4sIHNlbCk7XG4gICAgfVxuICAgIHJldHVybiB2bm9kZShzZWwsIGRhdGEsIGNoaWxkcmVuLCB0ZXh0LCB1bmRlZmluZWQpO1xufVxuLyoqXG4gKiBAZXhwZXJpbWVudGFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcmFnbWVudChjaGlsZHJlbikge1xuICAgIGxldCBjO1xuICAgIGxldCB0ZXh0O1xuICAgIGlmIChpcy5hcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgYyA9IGNoaWxkcmVuO1xuICAgIH1cbiAgICBlbHNlIGlmIChpcy5wcmltaXRpdmUoYykpIHtcbiAgICAgICAgdGV4dCA9IGNoaWxkcmVuO1xuICAgIH1cbiAgICBlbHNlIGlmIChjICYmIGMuc2VsKSB7XG4gICAgICAgIGMgPSBbY2hpbGRyZW5dO1xuICAgIH1cbiAgICBpZiAoYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKGlzLnByaW1pdGl2ZShjW2ldKSlcbiAgICAgICAgICAgICAgICBjW2ldID0gdm5vZGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY1tpXSwgdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdm5vZGUodW5kZWZpbmVkLCB7fSwgYywgdGV4dCwgdW5kZWZpbmVkKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWguanMubWFwIiwiZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIHF1YWxpZmllZE5hbWUsIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpIHtcbiAgICByZXR1cm4gcGFyc2VGcmFnbWVudChkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkpO1xufVxuZnVuY3Rpb24gY3JlYXRlVGV4dE5vZGUodGV4dCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1lbnQodGV4dCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRleHQpO1xufVxuZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKHBhcmVudE5vZGUsIG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpIHtcbiAgICBpZiAoaXNEb2N1bWVudEZyYWdtZW50KHBhcmVudE5vZGUpKSB7XG4gICAgICAgIGxldCBub2RlID0gcGFyZW50Tm9kZTtcbiAgICAgICAgd2hpbGUgKG5vZGUgJiYgaXNEb2N1bWVudEZyYWdtZW50KG5vZGUpKSB7XG4gICAgICAgICAgICBjb25zdCBmcmFnbWVudCA9IHBhcnNlRnJhZ21lbnQobm9kZSk7XG4gICAgICAgICAgICBub2RlID0gZnJhZ21lbnQucGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudE5vZGUgPSBub2RlICE9PSBudWxsICYmIG5vZGUgIT09IHZvaWQgMCA/IG5vZGUgOiBwYXJlbnROb2RlO1xuICAgIH1cbiAgICBpZiAoaXNEb2N1bWVudEZyYWdtZW50KG5ld05vZGUpKSB7XG4gICAgICAgIG5ld05vZGUgPSBwYXJzZUZyYWdtZW50KG5ld05vZGUsIHBhcmVudE5vZGUpO1xuICAgIH1cbiAgICBpZiAocmVmZXJlbmNlTm9kZSAmJiBpc0RvY3VtZW50RnJhZ21lbnQocmVmZXJlbmNlTm9kZSkpIHtcbiAgICAgICAgcmVmZXJlbmNlTm9kZSA9IHBhcnNlRnJhZ21lbnQocmVmZXJlbmNlTm9kZSkuZmlyc3RDaGlsZE5vZGU7XG4gICAgfVxuICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpO1xufVxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQobm9kZSwgY2hpbGQpIHtcbiAgICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbn1cbmZ1bmN0aW9uIGFwcGVuZENoaWxkKG5vZGUsIGNoaWxkKSB7XG4gICAgaWYgKGlzRG9jdW1lbnRGcmFnbWVudChjaGlsZCkpIHtcbiAgICAgICAgY2hpbGQgPSBwYXJzZUZyYWdtZW50KGNoaWxkLCBub2RlKTtcbiAgICB9XG4gICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZCk7XG59XG5mdW5jdGlvbiBwYXJlbnROb2RlKG5vZGUpIHtcbiAgICBpZiAoaXNEb2N1bWVudEZyYWdtZW50KG5vZGUpKSB7XG4gICAgICAgIHdoaWxlIChub2RlICYmIGlzRG9jdW1lbnRGcmFnbWVudChub2RlKSkge1xuICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBwYXJzZUZyYWdtZW50KG5vZGUpO1xuICAgICAgICAgICAgbm9kZSA9IGZyYWdtZW50LnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZSAhPT0gbnVsbCAmJiBub2RlICE9PSB2b2lkIDAgPyBub2RlIDogbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUucGFyZW50Tm9kZTtcbn1cbmZ1bmN0aW9uIG5leHRTaWJsaW5nKG5vZGUpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKGlzRG9jdW1lbnRGcmFnbWVudChub2RlKSkge1xuICAgICAgICBjb25zdCBmcmFnbWVudCA9IHBhcnNlRnJhZ21lbnQobm9kZSk7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHBhcmVudE5vZGUoZnJhZ21lbnQpO1xuICAgICAgICBpZiAocGFyZW50ICYmIGZyYWdtZW50Lmxhc3RDaGlsZE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGROb2Rlcyk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGNoaWxkcmVuLmluZGV4T2YoZnJhZ21lbnQubGFzdENoaWxkTm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gKF9hID0gY2hpbGRyZW5baW5kZXggKyAxXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUubmV4dFNpYmxpbmc7XG59XG5mdW5jdGlvbiB0YWdOYW1lKGVsbSkge1xuICAgIHJldHVybiBlbG0udGFnTmFtZTtcbn1cbmZ1bmN0aW9uIHNldFRleHRDb250ZW50KG5vZGUsIHRleHQpIHtcbiAgICBub2RlLnRleHRDb250ZW50ID0gdGV4dDtcbn1cbmZ1bmN0aW9uIGdldFRleHRDb250ZW50KG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS50ZXh0Q29udGVudDtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IDE7XG59XG5mdW5jdGlvbiBpc1RleHQobm9kZSkge1xuICAgIHJldHVybiBub2RlLm5vZGVUeXBlID09PSAzO1xufVxuZnVuY3Rpb24gaXNDb21tZW50KG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gODtcbn1cbmZ1bmN0aW9uIGlzRG9jdW1lbnRGcmFnbWVudChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IDExO1xufVxuZnVuY3Rpb24gcGFyc2VGcmFnbWVudChmcmFnbWVudE5vZGUsIHBhcmVudE5vZGUpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICBjb25zdCBmcmFnbWVudCA9IGZyYWdtZW50Tm9kZTtcbiAgICAoX2EgPSBmcmFnbWVudC5wYXJlbnQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IChmcmFnbWVudC5wYXJlbnQgPSBwYXJlbnROb2RlICE9PSBudWxsICYmIHBhcmVudE5vZGUgIT09IHZvaWQgMCA/IHBhcmVudE5vZGUgOiBudWxsKTtcbiAgICAoX2IgPSBmcmFnbWVudC5maXJzdENoaWxkTm9kZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogKGZyYWdtZW50LmZpcnN0Q2hpbGROb2RlID0gZnJhZ21lbnROb2RlLmZpcnN0Q2hpbGQpO1xuICAgIChfYyA9IGZyYWdtZW50Lmxhc3RDaGlsZE5vZGUpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IChmcmFnbWVudC5sYXN0Q2hpbGROb2RlID0gZnJhZ21lbnROb2RlLmxhc3RDaGlsZCk7XG4gICAgcmV0dXJuIGZyYWdtZW50O1xufVxuZXhwb3J0IGNvbnN0IGh0bWxEb21BcGkgPSB7XG4gICAgY3JlYXRlRWxlbWVudCxcbiAgICBjcmVhdGVFbGVtZW50TlMsXG4gICAgY3JlYXRlVGV4dE5vZGUsXG4gICAgY3JlYXRlRG9jdW1lbnRGcmFnbWVudCxcbiAgICBjcmVhdGVDb21tZW50LFxuICAgIGluc2VydEJlZm9yZSxcbiAgICByZW1vdmVDaGlsZCxcbiAgICBhcHBlbmRDaGlsZCxcbiAgICBwYXJlbnROb2RlLFxuICAgIG5leHRTaWJsaW5nLFxuICAgIHRhZ05hbWUsXG4gICAgc2V0VGV4dENvbnRlbnQsXG4gICAgZ2V0VGV4dENvbnRlbnQsXG4gICAgaXNFbGVtZW50LFxuICAgIGlzVGV4dCxcbiAgICBpc0NvbW1lbnQsXG4gICAgaXNEb2N1bWVudEZyYWdtZW50XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHRtbGRvbWFwaS5qcy5tYXAiLCJpbXBvcnQgeyB2bm9kZSB9IGZyb20gXCIuL3Zub2RlLmpzXCI7XG5pbXBvcnQgKiBhcyBpcyBmcm9tIFwiLi9pcy5qc1wiO1xuaW1wb3J0IHsgaHRtbERvbUFwaSB9IGZyb20gXCIuL2h0bWxkb21hcGkuanNcIjtcbmNvbnN0IGVtcHR5Tm9kZSA9IHZub2RlKFwiXCIsIHt9LCBbXSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuZnVuY3Rpb24gc2FtZVZub2RlKHZub2RlMSwgdm5vZGUyKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBjb25zdCBpc1NhbWVLZXkgPSB2bm9kZTEua2V5ID09PSB2bm9kZTIua2V5O1xuICAgIGNvbnN0IGlzU2FtZUlzID0gKChfYSA9IHZub2RlMS5kYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaXMpID09PSAoKF9iID0gdm5vZGUyLmRhdGEpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pcyk7XG4gICAgY29uc3QgaXNTYW1lU2VsID0gdm5vZGUxLnNlbCA9PT0gdm5vZGUyLnNlbDtcbiAgICBjb25zdCBpc1NhbWVUZXh0T3JGcmFnbWVudCA9ICF2bm9kZTEuc2VsICYmIHZub2RlMS5zZWwgPT09IHZub2RlMi5zZWxcbiAgICAgICAgPyB0eXBlb2Ygdm5vZGUxLnRleHQgPT09IHR5cGVvZiB2bm9kZTIudGV4dFxuICAgICAgICA6IHRydWU7XG4gICAgcmV0dXJuIGlzU2FtZVNlbCAmJiBpc1NhbWVLZXkgJiYgaXNTYW1lSXMgJiYgaXNTYW1lVGV4dE9yRnJhZ21lbnQ7XG59XG4vKipcbiAqIEB0b2RvIFJlbW92ZSB0aGlzIGZ1bmN0aW9uIHdoZW4gdGhlIGRvY3VtZW50IGZyYWdtZW50IGlzIGNvbnNpZGVyZWQgc3RhYmxlLlxuICovXG5mdW5jdGlvbiBkb2N1bWVudEZyYWdtZW50SXNOb3RTdXBwb3J0ZWQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGRvY3VtZW50IGZyYWdtZW50IGlzIG5vdCBzdXBwb3J0ZWQgb24gdGhpcyBwbGF0Zm9ybS5cIik7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQoYXBpLCB2bm9kZSkge1xuICAgIHJldHVybiBhcGkuaXNFbGVtZW50KHZub2RlKTtcbn1cbmZ1bmN0aW9uIGlzRG9jdW1lbnRGcmFnbWVudChhcGksIHZub2RlKSB7XG4gICAgcmV0dXJuIGFwaS5pc0RvY3VtZW50RnJhZ21lbnQodm5vZGUpO1xufVxuZnVuY3Rpb24gY3JlYXRlS2V5VG9PbGRJZHgoY2hpbGRyZW4sIGJlZ2luSWR4LCBlbmRJZHgpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgbWFwID0ge307XG4gICAgZm9yIChsZXQgaSA9IGJlZ2luSWR4OyBpIDw9IGVuZElkeDsgKytpKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IChfYSA9IGNoaWxkcmVuW2ldKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eua2V5O1xuICAgICAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1hcFtrZXldID0gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWFwO1xufVxuY29uc3QgaG9va3MgPSBbXG4gICAgXCJjcmVhdGVcIixcbiAgICBcInVwZGF0ZVwiLFxuICAgIFwicmVtb3ZlXCIsXG4gICAgXCJkZXN0cm95XCIsXG4gICAgXCJwcmVcIixcbiAgICBcInBvc3RcIlxuXTtcbmV4cG9ydCBmdW5jdGlvbiBpbml0KG1vZHVsZXMsIGRvbUFwaSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGNicyA9IHtcbiAgICAgICAgY3JlYXRlOiBbXSxcbiAgICAgICAgdXBkYXRlOiBbXSxcbiAgICAgICAgcmVtb3ZlOiBbXSxcbiAgICAgICAgZGVzdHJveTogW10sXG4gICAgICAgIHByZTogW10sXG4gICAgICAgIHBvc3Q6IFtdXG4gICAgfTtcbiAgICBjb25zdCBhcGkgPSBkb21BcGkgIT09IHVuZGVmaW5lZCA/IGRvbUFwaSA6IGh0bWxEb21BcGk7XG4gICAgZm9yIChjb25zdCBob29rIG9mIGhvb2tzKSB7XG4gICAgICAgIGZvciAoY29uc3QgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRIb29rID0gbW9kdWxlW2hvb2tdO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRIb29rICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjYnNbaG9va10ucHVzaChjdXJyZW50SG9vayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZW1wdHlOb2RlQXQoZWxtKSB7XG4gICAgICAgIGNvbnN0IGlkID0gZWxtLmlkID8gXCIjXCIgKyBlbG0uaWQgOiBcIlwiO1xuICAgICAgICAvLyBlbG0uY2xhc3NOYW1lIGRvZXNuJ3QgcmV0dXJuIGEgc3RyaW5nIHdoZW4gZWxtIGlzIGFuIFNWRyBlbGVtZW50IGluc2lkZSBhIHNoYWRvd1Jvb3QuXG4gICAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI5NDU0MzQwL2RldGVjdGluZy1jbGFzc25hbWUtb2Ytc3ZnYW5pbWF0ZWRzdHJpbmdcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGVsbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcbiAgICAgICAgY29uc3QgYyA9IGNsYXNzZXMgPyBcIi5cIiArIGNsYXNzZXMuc3BsaXQoXCIgXCIpLmpvaW4oXCIuXCIpIDogXCJcIjtcbiAgICAgICAgcmV0dXJuIHZub2RlKGFwaS50YWdOYW1lKGVsbSkudG9Mb3dlckNhc2UoKSArIGlkICsgYywge30sIFtdLCB1bmRlZmluZWQsIGVsbSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVtcHR5RG9jdW1lbnRGcmFnbWVudEF0KGZyYWcpIHtcbiAgICAgICAgcmV0dXJuIHZub2RlKHVuZGVmaW5lZCwge30sIFtdLCB1bmRlZmluZWQsIGZyYWcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVSbUNiKGNoaWxkRWxtLCBsaXN0ZW5lcnMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJtQ2IoKSB7XG4gICAgICAgICAgICBpZiAoLS1saXN0ZW5lcnMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBhcGkucGFyZW50Tm9kZShjaGlsZEVsbSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBhcGkucmVtb3ZlQ2hpbGQocGFyZW50LCBjaGlsZEVsbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVFbG0odm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgICAgIGNvbnN0IGhvb2sgPSBkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEuaG9vaztcbiAgICAgICAgKF9hID0gaG9vayA9PT0gbnVsbCB8fCBob29rID09PSB2b2lkIDAgPyB2b2lkIDAgOiBob29rLmluaXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGhvb2ssIHZub2RlKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlbjtcbiAgICAgICAgY29uc3Qgc2VsID0gdm5vZGUuc2VsO1xuICAgICAgICBpZiAoc2VsID09PSBcIiFcIikge1xuICAgICAgICAgICAgKF9iID0gdm5vZGUudGV4dCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogKHZub2RlLnRleHQgPSBcIlwiKTtcbiAgICAgICAgICAgIHZub2RlLmVsbSA9IGFwaS5jcmVhdGVDb21tZW50KHZub2RlLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbCA9PT0gXCJcIikge1xuICAgICAgICAgICAgLy8gdGV4dE5vZGUgaGFzIG5vIHNlbGVjdG9yXG4gICAgICAgICAgICB2bm9kZS5lbG0gPSBhcGkuY3JlYXRlVGV4dE5vZGUodm5vZGUudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFBhcnNlIHNlbGVjdG9yXG4gICAgICAgICAgICBjb25zdCBoYXNoSWR4ID0gc2VsLmluZGV4T2YoXCIjXCIpO1xuICAgICAgICAgICAgY29uc3QgZG90SWR4ID0gc2VsLmluZGV4T2YoXCIuXCIsIGhhc2hJZHgpO1xuICAgICAgICAgICAgY29uc3QgaGFzaCA9IGhhc2hJZHggPiAwID8gaGFzaElkeCA6IHNlbC5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBkb3QgPSBkb3RJZHggPiAwID8gZG90SWR4IDogc2VsLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IHRhZyA9IGhhc2hJZHggIT09IC0xIHx8IGRvdElkeCAhPT0gLTFcbiAgICAgICAgICAgICAgICA/IHNlbC5zbGljZSgwLCBNYXRoLm1pbihoYXNoLCBkb3QpKVxuICAgICAgICAgICAgICAgIDogc2VsO1xuICAgICAgICAgICAgY29uc3QgbnMgPSBkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEubnM7XG4gICAgICAgICAgICBjb25zdCBlbG0gPSBucyA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyBhcGkuY3JlYXRlRWxlbWVudCh0YWcsIGRhdGEpXG4gICAgICAgICAgICAgICAgOiBhcGkuY3JlYXRlRWxlbWVudE5TKG5zLCB0YWcsIGRhdGEpO1xuICAgICAgICAgICAgdm5vZGUuZWxtID0gZWxtO1xuICAgICAgICAgICAgaWYgKGhhc2ggPCBkb3QpXG4gICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZShcImlkXCIsIHNlbC5zbGljZShoYXNoICsgMSwgZG90KSk7XG4gICAgICAgICAgICBpZiAoZG90SWR4ID4gMClcbiAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgc2VsLnNsaWNlKGRvdCArIDEpLnJlcGxhY2UoL1xcLi9nLCBcIiBcIikpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNicy5jcmVhdGUubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgY2JzLmNyZWF0ZVtpXShlbXB0eU5vZGUsIHZub2RlKTtcbiAgICAgICAgICAgIGlmIChpcy5wcmltaXRpdmUodm5vZGUudGV4dCkgJiZcbiAgICAgICAgICAgICAgICAoIWlzLmFycmF5KGNoaWxkcmVuKSB8fCBjaGlsZHJlbi5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgaDEgYW5kIHNpbWlsYXIgbm9kZXMgdG8gYmUgY3JlYXRlZCB3LyB0ZXh0IGFuZCBlbXB0eSBjaGlsZCBsaXN0XG4gICAgICAgICAgICAgICAgYXBpLmFwcGVuZENoaWxkKGVsbSwgYXBpLmNyZWF0ZVRleHROb2RlKHZub2RlLnRleHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpcy5hcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2ggPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaS5hcHBlbmRDaGlsZChlbG0sIGNyZWF0ZUVsbShjaCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaG9vayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgKF9jID0gaG9vay5jcmVhdGUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jYWxsKGhvb2ssIGVtcHR5Tm9kZSwgdm5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChob29rLmluc2VydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydGVkVm5vZGVRdWV1ZS5wdXNoKHZub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKChfZCA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5leHBlcmltZW50YWwpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5mcmFnbWVudHMpICYmIHZub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICB2bm9kZS5lbG0gPSAoKF9lID0gYXBpLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQpICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6IGRvY3VtZW50RnJhZ21lbnRJc05vdFN1cHBvcnRlZCkoKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMuY3JlYXRlLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgIGNicy5jcmVhdGVbaV0oZW1wdHlOb2RlLCB2bm9kZSk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaCA9IHZub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGlmIChjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGFwaS5hcHBlbmRDaGlsZCh2bm9kZS5lbG0sIGNyZWF0ZUVsbShjaCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdm5vZGUuZWxtID0gYXBpLmNyZWF0ZVRleHROb2RlKHZub2RlLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2bm9kZS5lbG07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZFZub2RlcyhwYXJlbnRFbG0sIGJlZm9yZSwgdm5vZGVzLCBzdGFydElkeCwgZW5kSWR4LCBpbnNlcnRlZFZub2RlUXVldWUpIHtcbiAgICAgICAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgICAgICAgICAgY29uc3QgY2ggPSB2bm9kZXNbc3RhcnRJZHhdO1xuICAgICAgICAgICAgaWYgKGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhcGkuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgY3JlYXRlRWxtKGNoLCBpbnNlcnRlZFZub2RlUXVldWUpLCBiZWZvcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGludm9rZURlc3Ryb3lIb29rKHZub2RlKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAoX2IgPSAoX2EgPSBkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEuaG9vaykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRlc3Ryb3kpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB2bm9kZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNicy5kZXN0cm95Lmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgIGNicy5kZXN0cm95W2ldKHZub2RlKTtcbiAgICAgICAgICAgIGlmICh2bm9kZS5jaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB2bm9kZS5jaGlsZHJlbi5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IHZub2RlLmNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQgIT0gbnVsbCAmJiB0eXBlb2YgY2hpbGQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludm9rZURlc3Ryb3lIb29rKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVWbm9kZXMocGFyZW50RWxtLCB2bm9kZXMsIHN0YXJ0SWR4LCBlbmRJZHgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgICAgICAgICAgbGV0IGxpc3RlbmVycztcbiAgICAgICAgICAgIGNvbnN0IGNoID0gdm5vZGVzW3N0YXJ0SWR4XTtcbiAgICAgICAgICAgIGlmIChjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoLnNlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGludm9rZURlc3Ryb3lIb29rKGNoKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gY2JzLnJlbW92ZS5sZW5ndGggKyAxO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBybSA9IGNyZWF0ZVJtQ2IoY2guZWxtLCBsaXN0ZW5lcnMpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNicy5yZW1vdmUubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICAgICBjYnMucmVtb3ZlW2ldKGNoLCBybSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZUhvb2sgPSAoX2IgPSAoX2EgPSBjaCA9PT0gbnVsbCB8fCBjaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2guZGF0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhvb2spID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZW1vdmU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZW1vdmVIb29rICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUhvb2soY2gsIHJtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJtKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2guY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRnJhZ21lbnQgbm9kZVxuICAgICAgICAgICAgICAgICAgICBpbnZva2VEZXN0cm95SG9vayhjaCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVZub2RlcyhwYXJlbnRFbG0sIGNoLmNoaWxkcmVuLCAwLCBjaC5jaGlsZHJlbi5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRleHQgbm9kZVxuICAgICAgICAgICAgICAgICAgICBhcGkucmVtb3ZlQ2hpbGQocGFyZW50RWxtLCBjaC5lbG0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVDaGlsZHJlbihwYXJlbnRFbG0sIG9sZENoLCBuZXdDaCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgICAgIGxldCBvbGRTdGFydElkeCA9IDA7XG4gICAgICAgIGxldCBuZXdTdGFydElkeCA9IDA7XG4gICAgICAgIGxldCBvbGRFbmRJZHggPSBvbGRDaC5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgb2xkU3RhcnRWbm9kZSA9IG9sZENoWzBdO1xuICAgICAgICBsZXQgb2xkRW5kVm5vZGUgPSBvbGRDaFtvbGRFbmRJZHhdO1xuICAgICAgICBsZXQgbmV3RW5kSWR4ID0gbmV3Q2gubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFswXTtcbiAgICAgICAgbGV0IG5ld0VuZFZub2RlID0gbmV3Q2hbbmV3RW5kSWR4XTtcbiAgICAgICAgbGV0IG9sZEtleVRvSWR4O1xuICAgICAgICBsZXQgaWR4SW5PbGQ7XG4gICAgICAgIGxldCBlbG1Ub01vdmU7XG4gICAgICAgIGxldCBiZWZvcmU7XG4gICAgICAgIHdoaWxlIChvbGRTdGFydElkeCA8PSBvbGRFbmRJZHggJiYgbmV3U3RhcnRJZHggPD0gbmV3RW5kSWR4KSB7XG4gICAgICAgICAgICBpZiAob2xkU3RhcnRWbm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdOyAvLyBWbm9kZSBtaWdodCBoYXZlIGJlZW4gbW92ZWQgbGVmdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob2xkRW5kVm5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG9sZEVuZFZub2RlID0gb2xkQ2hbLS1vbGRFbmRJZHhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobmV3U3RhcnRWbm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobmV3RW5kVm5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc2FtZVZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld1N0YXJ0Vm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hWbm9kZShvbGRTdGFydFZub2RlLCBuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzYW1lVm5vZGUob2xkRW5kVm5vZGUsIG5ld0VuZFZub2RlKSkge1xuICAgICAgICAgICAgICAgIHBhdGNoVm5vZGUob2xkRW5kVm5vZGUsIG5ld0VuZFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgICAgICAgIG9sZEVuZFZub2RlID0gb2xkQ2hbLS1vbGRFbmRJZHhdO1xuICAgICAgICAgICAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc2FtZVZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld0VuZFZub2RlKSkge1xuICAgICAgICAgICAgICAgIC8vIFZub2RlIG1vdmVkIHJpZ2h0XG4gICAgICAgICAgICAgICAgcGF0Y2hWbm9kZShvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgICAgICAgICBhcGkuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgb2xkU3RhcnRWbm9kZS5lbG0sIGFwaS5uZXh0U2libGluZyhvbGRFbmRWbm9kZS5lbG0pKTtcbiAgICAgICAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgICAgICAgICAgbmV3RW5kVm5vZGUgPSBuZXdDaFstLW5ld0VuZElkeF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzYW1lVm5vZGUob2xkRW5kVm5vZGUsIG5ld1N0YXJ0Vm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgLy8gVm5vZGUgbW92ZWQgbGVmdFxuICAgICAgICAgICAgICAgIHBhdGNoVm5vZGUob2xkRW5kVm5vZGUsIG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICAgICAgYXBpLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIG9sZEVuZFZub2RlLmVsbSwgb2xkU3RhcnRWbm9kZS5lbG0pO1xuICAgICAgICAgICAgICAgIG9sZEVuZFZub2RlID0gb2xkQ2hbLS1vbGRFbmRJZHhdO1xuICAgICAgICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChvbGRLZXlUb0lkeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9sZEtleVRvSWR4ID0gY3JlYXRlS2V5VG9PbGRJZHgob2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZHhJbk9sZCA9IG9sZEtleVRvSWR4W25ld1N0YXJ0Vm5vZGUua2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoaWR4SW5PbGQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBgbmV3U3RhcnRWbm9kZWAgaXMgbmV3LCBjcmVhdGUgYW5kIGluc2VydCBpdCBpbiBiZWdpbm5pbmdcbiAgICAgICAgICAgICAgICAgICAgYXBpLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIGNyZWF0ZUVsbShuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpLCBvbGRTdGFydFZub2RlLmVsbSk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAob2xkS2V5VG9JZHhbbmV3RW5kVm5vZGUua2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGBuZXdFbmRWbm9kZWAgaXMgbmV3LCBjcmVhdGUgYW5kIGluc2VydCBpdCBpbiB0aGUgZW5kXG4gICAgICAgICAgICAgICAgICAgIGFwaS5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBjcmVhdGVFbG0obmV3RW5kVm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSksIGFwaS5uZXh0U2libGluZyhvbGRFbmRWbm9kZS5lbG0pKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3RW5kVm5vZGUgPSBuZXdDaFstLW5ld0VuZElkeF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBOZWl0aGVyIG9mIHRoZSBuZXcgZW5kcG9pbnRzIGFyZSBuZXcgdm5vZGVzLCBzbyB3ZSBtYWtlIHByb2dyZXNzIGJ5XG4gICAgICAgICAgICAgICAgICAgIC8vIG1vdmluZyBgbmV3U3RhcnRWbm9kZWAgaW50byBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICBlbG1Ub01vdmUgPSBvbGRDaFtpZHhJbk9sZF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbG1Ub01vdmUuc2VsICE9PSBuZXdTdGFydFZub2RlLnNlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBpLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIGNyZWF0ZUVsbShuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpLCBvbGRTdGFydFZub2RlLmVsbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRjaFZub2RlKGVsbVRvTW92ZSwgbmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZENoW2lkeEluT2xkXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaS5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBlbG1Ub01vdmUuZWxtLCBvbGRTdGFydFZub2RlLmVsbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3U3RhcnRJZHggPD0gbmV3RW5kSWR4KSB7XG4gICAgICAgICAgICBiZWZvcmUgPSBuZXdDaFtuZXdFbmRJZHggKyAxXSA9PSBudWxsID8gbnVsbCA6IG5ld0NoW25ld0VuZElkeCArIDFdLmVsbTtcbiAgICAgICAgICAgIGFkZFZub2RlcyhwYXJlbnRFbG0sIGJlZm9yZSwgbmV3Q2gsIG5ld1N0YXJ0SWR4LCBuZXdFbmRJZHgsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9sZFN0YXJ0SWR4IDw9IG9sZEVuZElkeCkge1xuICAgICAgICAgICAgcmVtb3ZlVm5vZGVzKHBhcmVudEVsbSwgb2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhdGNoVm5vZGUob2xkVm5vZGUsIHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaDtcbiAgICAgICAgY29uc3QgaG9vayA9IChfYSA9IHZub2RlLmRhdGEpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ob29rO1xuICAgICAgICAoX2IgPSBob29rID09PSBudWxsIHx8IGhvb2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhvb2sucHJlcGF0Y2gpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKGhvb2ssIG9sZFZub2RlLCB2bm9kZSk7XG4gICAgICAgIGNvbnN0IGVsbSA9ICh2bm9kZS5lbG0gPSBvbGRWbm9kZS5lbG0pO1xuICAgICAgICBpZiAob2xkVm5vZGUgPT09IHZub2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodm5vZGUuZGF0YSAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAodm5vZGUudGV4dCAhPT0gdW5kZWZpbmVkICYmIHZub2RlLnRleHQgIT09IG9sZFZub2RlLnRleHQpKSB7XG4gICAgICAgICAgICAoX2MgPSB2bm9kZS5kYXRhKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAodm5vZGUuZGF0YSA9IHt9KTtcbiAgICAgICAgICAgIChfZCA9IG9sZFZub2RlLmRhdGEpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IChvbGRWbm9kZS5kYXRhID0ge30pO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYnMudXBkYXRlLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgIGNicy51cGRhdGVbaV0ob2xkVm5vZGUsIHZub2RlKTtcbiAgICAgICAgICAgIChfZyA9IChfZiA9IChfZSA9IHZub2RlLmRhdGEpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5ob29rKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YudXBkYXRlKSA9PT0gbnVsbCB8fCBfZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2cuY2FsbChfZiwgb2xkVm5vZGUsIHZub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvbGRDaCA9IG9sZFZub2RlLmNoaWxkcmVuO1xuICAgICAgICBjb25zdCBjaCA9IHZub2RlLmNoaWxkcmVuO1xuICAgICAgICBpZiAodm5vZGUudGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAob2xkQ2ggIT09IHVuZGVmaW5lZCAmJiBjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9sZENoICE9PSBjaClcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ2hpbGRyZW4oZWxtLCBvbGRDaCwgY2gsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9sZFZub2RlLnRleHQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgYXBpLnNldFRleHRDb250ZW50KGVsbSwgXCJcIik7XG4gICAgICAgICAgICAgICAgYWRkVm5vZGVzKGVsbSwgbnVsbCwgY2gsIDAsIGNoLmxlbmd0aCAtIDEsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvbGRDaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVm5vZGVzKGVsbSwgb2xkQ2gsIDAsIG9sZENoLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob2xkVm5vZGUudGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYXBpLnNldFRleHRDb250ZW50KGVsbSwgXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob2xkVm5vZGUudGV4dCAhPT0gdm5vZGUudGV4dCkge1xuICAgICAgICAgICAgaWYgKG9sZENoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVWbm9kZXMoZWxtLCBvbGRDaCwgMCwgb2xkQ2gubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcGkuc2V0VGV4dENvbnRlbnQoZWxtLCB2bm9kZS50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICAoX2ggPSBob29rID09PSBudWxsIHx8IGhvb2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhvb2sucG9zdHBhdGNoKSA9PT0gbnVsbCB8fCBfaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2guY2FsbChob29rLCBvbGRWbm9kZSwgdm5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gcGF0Y2gob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgICAgIGxldCBpLCBlbG0sIHBhcmVudDtcbiAgICAgICAgY29uc3QgaW5zZXJ0ZWRWbm9kZVF1ZXVlID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMucHJlLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgY2JzLnByZVtpXSgpO1xuICAgICAgICBpZiAoaXNFbGVtZW50KGFwaSwgb2xkVm5vZGUpKSB7XG4gICAgICAgICAgICBvbGRWbm9kZSA9IGVtcHR5Tm9kZUF0KG9sZFZub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0RvY3VtZW50RnJhZ21lbnQoYXBpLCBvbGRWbm9kZSkpIHtcbiAgICAgICAgICAgIG9sZFZub2RlID0gZW1wdHlEb2N1bWVudEZyYWdtZW50QXQob2xkVm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzYW1lVm5vZGUob2xkVm5vZGUsIHZub2RlKSkge1xuICAgICAgICAgICAgcGF0Y2hWbm9kZShvbGRWbm9kZSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbG0gPSBvbGRWbm9kZS5lbG07XG4gICAgICAgICAgICBwYXJlbnQgPSBhcGkucGFyZW50Tm9kZShlbG0pO1xuICAgICAgICAgICAgY3JlYXRlRWxtKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgICAgaWYgKHBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGFwaS5pbnNlcnRCZWZvcmUocGFyZW50LCB2bm9kZS5lbG0sIGFwaS5uZXh0U2libGluZyhlbG0pKTtcbiAgICAgICAgICAgICAgICByZW1vdmVWbm9kZXMocGFyZW50LCBbb2xkVm5vZGVdLCAwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpbnNlcnRlZFZub2RlUXVldWVbaV0uZGF0YS5ob29rLmluc2VydChpbnNlcnRlZFZub2RlUXVldWVbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMucG9zdC5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgIGNicy5wb3N0W2ldKCk7XG4gICAgICAgIHJldHVybiB2bm9kZTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5pdC5qcy5tYXAiLCJleHBvcnQgY29uc3QgYXJyYXkgPSBBcnJheS5pc0FycmF5O1xuZXhwb3J0IGZ1bmN0aW9uIHByaW1pdGl2ZShzKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgcyA9PT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICB0eXBlb2YgcyA9PT0gXCJudW1iZXJcIiB8fFxuICAgICAgICBzIGluc3RhbmNlb2YgU3RyaW5nIHx8XG4gICAgICAgIHMgaW5zdGFuY2VvZiBOdW1iZXIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMuanMubWFwIiwiY29uc3QgeGxpbmtOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiO1xuY29uc3QgeG1sbnNOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIjtcbmNvbnN0IHhtbE5TID0gXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIjtcbmNvbnN0IGNvbG9uQ2hhciA9IDU4O1xuY29uc3QgeENoYXIgPSAxMjA7XG5jb25zdCBtQ2hhciA9IDEwOTtcbmZ1bmN0aW9uIHVwZGF0ZUF0dHJzKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIGxldCBrZXk7XG4gICAgY29uc3QgZWxtID0gdm5vZGUuZWxtO1xuICAgIGxldCBvbGRBdHRycyA9IG9sZFZub2RlLmRhdGEuYXR0cnM7XG4gICAgbGV0IGF0dHJzID0gdm5vZGUuZGF0YS5hdHRycztcbiAgICBpZiAoIW9sZEF0dHJzICYmICFhdHRycylcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChvbGRBdHRycyA9PT0gYXR0cnMpXG4gICAgICAgIHJldHVybjtcbiAgICBvbGRBdHRycyA9IG9sZEF0dHJzIHx8IHt9O1xuICAgIGF0dHJzID0gYXR0cnMgfHwge307XG4gICAgLy8gdXBkYXRlIG1vZGlmaWVkIGF0dHJpYnV0ZXMsIGFkZCBuZXcgYXR0cmlidXRlc1xuICAgIGZvciAoa2V5IGluIGF0dHJzKSB7XG4gICAgICAgIGNvbnN0IGN1ciA9IGF0dHJzW2tleV07XG4gICAgICAgIGNvbnN0IG9sZCA9IG9sZEF0dHJzW2tleV07XG4gICAgICAgIGlmIChvbGQgIT09IGN1cikge1xuICAgICAgICAgICAgaWYgKGN1ciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoa2V5LCBcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGN1ciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LmNoYXJDb2RlQXQoMCkgIT09IHhDaGFyKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoa2V5LCBjdXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChrZXkuY2hhckNvZGVBdCgzKSA9PT0gY29sb25DaGFyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFzc3VtZSB4bWwgbmFtZXNwYWNlXG4gICAgICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGVOUyh4bWxOUywga2V5LCBjdXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChrZXkuY2hhckNvZGVBdCg1KSA9PT0gY29sb25DaGFyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFzc3VtZSAneG1sbnMnIG9yICd4bGluaycgbmFtZXNwYWNlXG4gICAgICAgICAgICAgICAgICAgIGtleS5jaGFyQ29kZUF0KDEpID09PSBtQ2hhclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBlbG0uc2V0QXR0cmlidXRlTlMoeG1sbnNOUywga2V5LCBjdXIpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGVsbS5zZXRBdHRyaWJ1dGVOUyh4bGlua05TLCBrZXksIGN1cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKGtleSwgY3VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gcmVtb3ZlIHJlbW92ZWQgYXR0cmlidXRlc1xuICAgIC8vIHVzZSBgaW5gIG9wZXJhdG9yIHNpbmNlIHRoZSBwcmV2aW91cyBgZm9yYCBpdGVyYXRpb24gdXNlcyBpdCAoLmkuZS4gYWRkIGV2ZW4gYXR0cmlidXRlcyB3aXRoIHVuZGVmaW5lZCB2YWx1ZSlcbiAgICAvLyB0aGUgb3RoZXIgb3B0aW9uIGlzIHRvIHJlbW92ZSBhbGwgYXR0cmlidXRlcyB3aXRoIHZhbHVlID09IHVuZGVmaW5lZFxuICAgIGZvciAoa2V5IGluIG9sZEF0dHJzKSB7XG4gICAgICAgIGlmICghKGtleSBpbiBhdHRycykpIHtcbiAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzTW9kdWxlID0ge1xuICAgIGNyZWF0ZTogdXBkYXRlQXR0cnMsXG4gICAgdXBkYXRlOiB1cGRhdGVBdHRyc1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWF0dHJpYnV0ZXMuanMubWFwIiwiZnVuY3Rpb24gdXBkYXRlQ2xhc3Mob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgbGV0IGN1cjtcbiAgICBsZXQgbmFtZTtcbiAgICBjb25zdCBlbG0gPSB2bm9kZS5lbG07XG4gICAgbGV0IG9sZENsYXNzID0gb2xkVm5vZGUuZGF0YS5jbGFzcztcbiAgICBsZXQga2xhc3MgPSB2bm9kZS5kYXRhLmNsYXNzO1xuICAgIGlmICghb2xkQ2xhc3MgJiYgIWtsYXNzKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKG9sZENsYXNzID09PSBrbGFzcylcbiAgICAgICAgcmV0dXJuO1xuICAgIG9sZENsYXNzID0gb2xkQ2xhc3MgfHwge307XG4gICAga2xhc3MgPSBrbGFzcyB8fCB7fTtcbiAgICBmb3IgKG5hbWUgaW4gb2xkQ2xhc3MpIHtcbiAgICAgICAgaWYgKG9sZENsYXNzW25hbWVdICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoa2xhc3MsIG5hbWUpKSB7XG4gICAgICAgICAgICAvLyB3YXMgYHRydWVgIGFuZCBub3cgbm90IHByb3ZpZGVkXG4gICAgICAgICAgICBlbG0uY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKG5hbWUgaW4ga2xhc3MpIHtcbiAgICAgICAgY3VyID0ga2xhc3NbbmFtZV07XG4gICAgICAgIGlmIChjdXIgIT09IG9sZENsYXNzW25hbWVdKSB7XG4gICAgICAgICAgICBlbG0uY2xhc3NMaXN0W2N1ciA/IFwiYWRkXCIgOiBcInJlbW92ZVwiXShuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBjbGFzc01vZHVsZSA9IHsgY3JlYXRlOiB1cGRhdGVDbGFzcywgdXBkYXRlOiB1cGRhdGVDbGFzcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xhc3MuanMubWFwIiwiZnVuY3Rpb24gaW52b2tlSGFuZGxlcihoYW5kbGVyLCB2bm9kZSwgZXZlbnQpIHtcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAvLyBjYWxsIGZ1bmN0aW9uIGhhbmRsZXJcbiAgICAgICAgaGFuZGxlci5jYWxsKHZub2RlLCBldmVudCwgdm5vZGUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAvLyBjYWxsIG11bHRpcGxlIGhhbmRsZXJzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGFuZGxlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW52b2tlSGFuZGxlcihoYW5kbGVyW2ldLCB2bm9kZSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gaGFuZGxlRXZlbnQoZXZlbnQsIHZub2RlKSB7XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LnR5cGU7XG4gICAgY29uc3Qgb24gPSB2bm9kZS5kYXRhLm9uO1xuICAgIC8vIGNhbGwgZXZlbnQgaGFuZGxlcihzKSBpZiBleGlzdHNcbiAgICBpZiAob24gJiYgb25bbmFtZV0pIHtcbiAgICAgICAgaW52b2tlSGFuZGxlcihvbltuYW1lXSwgdm5vZGUsIGV2ZW50KTtcbiAgICB9XG59XG5mdW5jdGlvbiBjcmVhdGVMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgICAgICBoYW5kbGVFdmVudChldmVudCwgaGFuZGxlci52bm9kZSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUV2ZW50TGlzdGVuZXJzKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIGNvbnN0IG9sZE9uID0gb2xkVm5vZGUuZGF0YS5vbjtcbiAgICBjb25zdCBvbGRMaXN0ZW5lciA9IG9sZFZub2RlLmxpc3RlbmVyO1xuICAgIGNvbnN0IG9sZEVsbSA9IG9sZFZub2RlLmVsbTtcbiAgICBjb25zdCBvbiA9IHZub2RlICYmIHZub2RlLmRhdGEub247XG4gICAgY29uc3QgZWxtID0gKHZub2RlICYmIHZub2RlLmVsbSk7XG4gICAgbGV0IG5hbWU7XG4gICAgLy8gb3B0aW1pemF0aW9uIGZvciByZXVzZWQgaW1tdXRhYmxlIGhhbmRsZXJzXG4gICAgaWYgKG9sZE9uID09PSBvbikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHJlbW92ZSBleGlzdGluZyBsaXN0ZW5lcnMgd2hpY2ggbm8gbG9uZ2VyIHVzZWRcbiAgICBpZiAob2xkT24gJiYgb2xkTGlzdGVuZXIpIHtcbiAgICAgICAgLy8gaWYgZWxlbWVudCBjaGFuZ2VkIG9yIGRlbGV0ZWQgd2UgcmVtb3ZlIGFsbCBleGlzdGluZyBsaXN0ZW5lcnMgdW5jb25kaXRpb25hbGx5XG4gICAgICAgIGlmICghb24pIHtcbiAgICAgICAgICAgIGZvciAobmFtZSBpbiBvbGRPbikge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lciBpZiBlbGVtZW50IHdhcyBjaGFuZ2VkIG9yIGV4aXN0aW5nIGxpc3RlbmVycyByZW1vdmVkXG4gICAgICAgICAgICAgICAgb2xkRWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgb2xkTGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobmFtZSBpbiBvbGRPbikge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lciBpZiBleGlzdGluZyBsaXN0ZW5lciByZW1vdmVkXG4gICAgICAgICAgICAgICAgaWYgKCFvbltuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBvbGRFbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBvbGRMaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBhZGQgbmV3IGxpc3RlbmVycyB3aGljaCBoYXMgbm90IGFscmVhZHkgYXR0YWNoZWRcbiAgICBpZiAob24pIHtcbiAgICAgICAgLy8gcmV1c2UgZXhpc3RpbmcgbGlzdGVuZXIgb3IgY3JlYXRlIG5ld1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9ICh2bm9kZS5saXN0ZW5lciA9XG4gICAgICAgICAgICBvbGRWbm9kZS5saXN0ZW5lciB8fCBjcmVhdGVMaXN0ZW5lcigpKTtcbiAgICAgICAgLy8gdXBkYXRlIHZub2RlIGZvciBsaXN0ZW5lclxuICAgICAgICBsaXN0ZW5lci52bm9kZSA9IHZub2RlO1xuICAgICAgICAvLyBpZiBlbGVtZW50IGNoYW5nZWQgb3IgYWRkZWQgd2UgYWRkIGFsbCBuZWVkZWQgbGlzdGVuZXJzIHVuY29uZGl0aW9uYWxseVxuICAgICAgICBpZiAoIW9sZE9uKSB7XG4gICAgICAgICAgICBmb3IgKG5hbWUgaW4gb24pIHtcbiAgICAgICAgICAgICAgICAvLyBhZGQgbGlzdGVuZXIgaWYgZWxlbWVudCB3YXMgY2hhbmdlZCBvciBuZXcgbGlzdGVuZXJzIGFkZGVkXG4gICAgICAgICAgICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobmFtZSBpbiBvbikge1xuICAgICAgICAgICAgICAgIC8vIGFkZCBsaXN0ZW5lciBpZiBuZXcgbGlzdGVuZXIgYWRkZWRcbiAgICAgICAgICAgICAgICBpZiAoIW9sZE9uW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGV2ZW50TGlzdGVuZXJzTW9kdWxlID0ge1xuICAgIGNyZWF0ZTogdXBkYXRlRXZlbnRMaXN0ZW5lcnMsXG4gICAgdXBkYXRlOiB1cGRhdGVFdmVudExpc3RlbmVycyxcbiAgICBkZXN0cm95OiB1cGRhdGVFdmVudExpc3RlbmVyc1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50bGlzdGVuZXJzLmpzLm1hcCIsIi8vIEJpbmRpbmcgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgbGlrZSB0aGlzIGZpeGVzIGEgYnVnIGluIElFL0VkZ2UuIFNlZSAjMzYwIGFuZCAjNDA5LlxuY29uc3QgcmFmID0gdHlwZW9mICh3aW5kb3cgPT09IG51bGwgfHwgd2luZG93ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSA9PT0gXCJmdW5jdGlvblwiXG4gICAgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KVxuICAgIDogc2V0VGltZW91dDtcbmNvbnN0IG5leHRGcmFtZSA9IChmbikgPT4ge1xuICAgIHJhZigoKSA9PiB7XG4gICAgICAgIHJhZihmbik7XG4gICAgfSk7XG59O1xubGV0IHJlZmxvd0ZvcmNlZCA9IGZhbHNlO1xuZnVuY3Rpb24gc2V0TmV4dEZyYW1lKG9iaiwgcHJvcCwgdmFsKSB7XG4gICAgbmV4dEZyYW1lKCgpID0+IHtcbiAgICAgICAgb2JqW3Byb3BdID0gdmFsO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gdXBkYXRlU3R5bGUob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgbGV0IGN1cjtcbiAgICBsZXQgbmFtZTtcbiAgICBjb25zdCBlbG0gPSB2bm9kZS5lbG07XG4gICAgbGV0IG9sZFN0eWxlID0gb2xkVm5vZGUuZGF0YS5zdHlsZTtcbiAgICBsZXQgc3R5bGUgPSB2bm9kZS5kYXRhLnN0eWxlO1xuICAgIGlmICghb2xkU3R5bGUgJiYgIXN0eWxlKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKG9sZFN0eWxlID09PSBzdHlsZSlcbiAgICAgICAgcmV0dXJuO1xuICAgIG9sZFN0eWxlID0gb2xkU3R5bGUgfHwge307XG4gICAgc3R5bGUgPSBzdHlsZSB8fCB7fTtcbiAgICBjb25zdCBvbGRIYXNEZWwgPSBcImRlbGF5ZWRcIiBpbiBvbGRTdHlsZTtcbiAgICBmb3IgKG5hbWUgaW4gb2xkU3R5bGUpIHtcbiAgICAgICAgaWYgKCEobmFtZSBpbiBzdHlsZSkpIHtcbiAgICAgICAgICAgIGlmIChuYW1lWzBdID09PSBcIi1cIiAmJiBuYW1lWzFdID09PSBcIi1cIikge1xuICAgICAgICAgICAgICAgIGVsbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsbS5zdHlsZVtuYW1lXSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChuYW1lIGluIHN0eWxlKSB7XG4gICAgICAgIGN1ciA9IHN0eWxlW25hbWVdO1xuICAgICAgICBpZiAobmFtZSA9PT0gXCJkZWxheWVkXCIgJiYgc3R5bGUuZGVsYXllZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lMiBpbiBzdHlsZS5kZWxheWVkKSB7XG4gICAgICAgICAgICAgICAgY3VyID0gc3R5bGUuZGVsYXllZFtuYW1lMl07XG4gICAgICAgICAgICAgICAgaWYgKCFvbGRIYXNEZWwgfHwgY3VyICE9PSBvbGRTdHlsZS5kZWxheWVkW25hbWUyXSkge1xuICAgICAgICAgICAgICAgICAgICBzZXROZXh0RnJhbWUoZWxtLnN0eWxlLCBuYW1lMiwgY3VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmFtZSAhPT0gXCJyZW1vdmVcIiAmJiBjdXIgIT09IG9sZFN0eWxlW25hbWVdKSB7XG4gICAgICAgICAgICBpZiAobmFtZVswXSA9PT0gXCItXCIgJiYgbmFtZVsxXSA9PT0gXCItXCIpIHtcbiAgICAgICAgICAgICAgICBlbG0uc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgY3VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsbS5zdHlsZVtuYW1lXSA9IGN1cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGFwcGx5RGVzdHJveVN0eWxlKHZub2RlKSB7XG4gICAgbGV0IHN0eWxlO1xuICAgIGxldCBuYW1lO1xuICAgIGNvbnN0IGVsbSA9IHZub2RlLmVsbTtcbiAgICBjb25zdCBzID0gdm5vZGUuZGF0YS5zdHlsZTtcbiAgICBpZiAoIXMgfHwgIShzdHlsZSA9IHMuZGVzdHJveSkpXG4gICAgICAgIHJldHVybjtcbiAgICBmb3IgKG5hbWUgaW4gc3R5bGUpIHtcbiAgICAgICAgZWxtLnN0eWxlW25hbWVdID0gc3R5bGVbbmFtZV07XG4gICAgfVxufVxuZnVuY3Rpb24gYXBwbHlSZW1vdmVTdHlsZSh2bm9kZSwgcm0pIHtcbiAgICBjb25zdCBzID0gdm5vZGUuZGF0YS5zdHlsZTtcbiAgICBpZiAoIXMgfHwgIXMucmVtb3ZlKSB7XG4gICAgICAgIHJtKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFyZWZsb3dGb3JjZWQpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgdm5vZGUuZWxtLm9mZnNldExlZnQ7XG4gICAgICAgIHJlZmxvd0ZvcmNlZCA9IHRydWU7XG4gICAgfVxuICAgIGxldCBuYW1lO1xuICAgIGNvbnN0IGVsbSA9IHZub2RlLmVsbTtcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3Qgc3R5bGUgPSBzLnJlbW92ZTtcbiAgICBsZXQgYW1vdW50ID0gMDtcbiAgICBjb25zdCBhcHBsaWVkID0gW107XG4gICAgZm9yIChuYW1lIGluIHN0eWxlKSB7XG4gICAgICAgIGFwcGxpZWQucHVzaChuYW1lKTtcbiAgICAgICAgZWxtLnN0eWxlW25hbWVdID0gc3R5bGVbbmFtZV07XG4gICAgfVxuICAgIGNvbnN0IGNvbXBTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxtKTtcbiAgICBjb25zdCBwcm9wcyA9IGNvbXBTdHlsZVtcInRyYW5zaXRpb24tcHJvcGVydHlcIl0uc3BsaXQoXCIsIFwiKTtcbiAgICBmb3IgKDsgaSA8IHByb3BzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChhcHBsaWVkLmluZGV4T2YocHJvcHNbaV0pICE9PSAtMSlcbiAgICAgICAgICAgIGFtb3VudCsrO1xuICAgIH1cbiAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgKGV2KSA9PiB7XG4gICAgICAgIGlmIChldi50YXJnZXQgPT09IGVsbSlcbiAgICAgICAgICAgIC0tYW1vdW50O1xuICAgICAgICBpZiAoYW1vdW50ID09PSAwKVxuICAgICAgICAgICAgcm0oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZvcmNlUmVmbG93KCkge1xuICAgIHJlZmxvd0ZvcmNlZCA9IGZhbHNlO1xufVxuZXhwb3J0IGNvbnN0IHN0eWxlTW9kdWxlID0ge1xuICAgIHByZTogZm9yY2VSZWZsb3csXG4gICAgY3JlYXRlOiB1cGRhdGVTdHlsZSxcbiAgICB1cGRhdGU6IHVwZGF0ZVN0eWxlLFxuICAgIGRlc3Ryb3k6IGFwcGx5RGVzdHJveVN0eWxlLFxuICAgIHJlbW92ZTogYXBwbHlSZW1vdmVTdHlsZVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiB2bm9kZShzZWwsIGRhdGEsIGNoaWxkcmVuLCB0ZXh0LCBlbG0pIHtcbiAgICBjb25zdCBrZXkgPSBkYXRhID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBkYXRhLmtleTtcbiAgICByZXR1cm4geyBzZWwsIGRhdGEsIGNoaWxkcmVuLCB0ZXh0LCBlbG0sIGtleSB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dm5vZGUuanMubWFwIiwiaW1wb3J0IHsgTW9kZWwgfSBmcm9tIFwiLi9tb2RlbFwiXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4vbWVzc2FnZXNcIlxuaW1wb3J0IHsgVk5vZGUsIGF0dHJpYnV0ZXNNb2R1bGUsIGNsYXNzTW9kdWxlLCBldmVudExpc3RlbmVyc01vZHVsZSwgaW5pdCwgc3R5bGVNb2R1bGUgfSBmcm9tIFwic25hYmJkb21cIlxuXG5jb25zdCBwYXRjaCA9IGluaXQoW2V2ZW50TGlzdGVuZXJzTW9kdWxlLCBjbGFzc01vZHVsZSwgYXR0cmlidXRlc01vZHVsZSwgc3R5bGVNb2R1bGVdKVxuXG5leHBvcnQgY29uc3QgYXBwID0gKFxuICAgIGluaXRNb2RlbDogTW9kZWwsXG4gICAgdmlldzogKG1vZGVsOiBNb2RlbCwgZGlzcGF0Y2g6IChtZXNzYWdlOiBNZXNzYWdlKSA9PiB2b2lkKSA9PiBWTm9kZSxcbiAgICB1cGRhdGU6IChtb2RlbDogTW9kZWwsIG1lc3NhZ2U6IE1lc3NhZ2UpID0+IE1vZGVsLFxuICAgIHJvb3ROb2RlOiBIVE1MRWxlbWVudFxuKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSAobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQgPT4ge1xuICAgICAgICBtb2RlbCA9IHVwZGF0ZShtb2RlbCwgbWVzc2FnZSlcbiAgICAgICAgY29uc3QgdXBkYXRlZFZOb2RlID0gdmlldyhtb2RlbCwgZGlzcGF0Y2gpXG4gICAgICAgIGRvbU5vZGUgPSBwYXRjaChkb21Ob2RlLCB1cGRhdGVkVk5vZGUpXG4gICAgICAgIGN1cnJlbnRWTm9kZSA9IHVwZGF0ZWRWTm9kZVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShtZXNzYWdlLCBudWxsLCAyKSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobW9kZWwsIG51bGwsIDIpKVxuICAgIH1cblxuICAgIGxldCBtb2RlbCA9IGluaXRNb2RlbFxuICAgIGxldCBjdXJyZW50Vk5vZGUgPSB2aWV3KG1vZGVsLCBkaXNwYXRjaClcbiAgICBsZXQgZG9tTm9kZSA9IHBhdGNoKHJvb3ROb2RlLCBjdXJyZW50Vk5vZGUpXG59IiwiZXhwb3J0IGNvbnN0IHBsYXRlU2l6ZVggPSA4MC43NVxuZXhwb3J0IGNvbnN0IHBsYXRlU2l6ZVkgPSAxNi4zNVxuZXhwb3J0IGNvbnN0IGJldmVsU2l6ZSA9IDEuNVxuXG5leHBvcnQgY29uc3Qgd2FsbFRoaWNrbmVzcyA9IDUuMFxuXG5leHBvcnQgY29uc3QgbnVtUm93cyA9IDhcbmV4cG9ydCBjb25zdCBudW1Db2x1bW5zID0gMlxuXG5leHBvcnQgY29uc3QgdW5pdENlbGxYID0gcGxhdGVTaXplWCArIHdhbGxUaGlja25lc3NcbmV4cG9ydCBjb25zdCB1bml0Q2VsbFkgPSBwbGF0ZVNpemVZICsgd2FsbFRoaWNrbmVzc1xuXG5leHBvcnQgY29uc3QgamlnU2l6ZVggPSB1bml0Q2VsbFggKiBudW1Db2x1bW5zXG5leHBvcnQgY29uc3QgamlnU2l6ZVkgPSB1bml0Q2VsbFkgKiBudW1Sb3dzXG5cbmV4cG9ydCBjb25zdCBmb250TWFwID0ge1xuICAgIFwiU2NyaXB0XCI6IFwiQ3Vyc2l2XCIsXG4gICAgXCJDbGFzc2ljIFNjcmlwdFwiOiBcIkRhbmNpbmcgU2NyaXB0XCIsXG4gICAgXCJJdGFsaWNcIjogXCJHZW50aXVtIEJvb2sgUGx1cyBJdGFsaWNcIixcbiAgICBcIlNlcmlmXCI6IFwiTWVycml3ZWF0aGVyXCIsXG4gICAgXCJTYW5zIFNlcmlmXCI6IFwiUm9ib3RvXCIsXG4gICAgXCJIYW5kd3JpdHRlblwiOiBcIkNhdmVhdFwiXG59IiwiaW1wb3J0IHsgY3JlYXRlRW1wdHlQbGF0ZUFycmF5IH0gZnJvbSBcIi4vdXRpbHNcIlxuXG5leHBvcnQgdHlwZSBNb2RlbCA9IHtcbiAgICBwbGF0ZUxpc3Q6IFBsYXRlW10sXG4gICAgc2VsZWN0ZWRQbGF0ZTogWyBudW1iZXIsIEVkaXRPcHRpb24gXSB8IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRNb2RlbDogTW9kZWwgPSB7XG4gICAgcGxhdGVMaXN0OiBjcmVhdGVFbXB0eVBsYXRlQXJyYXkoKSxcbiAgICBzZWxlY3RlZFBsYXRlOiBudWxsXG59XG5cbmV4cG9ydCB0eXBlIFBsYXRlID0ge1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBmb250OiBGb250O1xufVxuXG5leHBvcnQgdHlwZSBGb250ID1cbiAgICB8IFwiU2NyaXB0XCJcbiAgICB8IFwiQ2xhc3NpYyBTY3JpcHRcIlxuICAgIHwgXCJJdGFsaWNcIlxuICAgIHwgXCJTZXJpZlwiXG4gICAgfCBcIlNhbnMgU2VyaWZcIlxuICAgIHwgXCJIYW5kd3JpdHRlblwiXG5cbnR5cGUgRWRpdE9wdGlvbiA9ICdmb250JyB8ICd0ZXh0JyIsImltcG9ydCB7IEZvbnQsIE1vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIlxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuL21lc3NhZ2VzXCJcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZSA9IChtb2RlbDogTW9kZWwsIG1lc3NhZ2U6IE1lc3NhZ2UpOiBNb2RlbCA9PiB7XG4gICAgY29uc3QgW21lc3NhZ2VUeXBlLCAuLi5yZXN0XSA9IG1lc3NhZ2VcblxuICAgIHN3aXRjaCAobWVzc2FnZVR5cGUpIHtcbiAgICAgICAgY2FzZSBcInNlbGVjdCBwbGF0ZSB0ZXh0XCI6IHtcbiAgICAgICAgICAgIGNvbnN0IFtpbmRleF0gPSByZXN0IGFzIFtudW1iZXJdXG4gICAgICAgICAgICByZXR1cm4geyAuLi5tb2RlbCwgc2VsZWN0ZWRQbGF0ZTogW2luZGV4LCAndGV4dCddIH1cbiAgICAgICAgfVxuICAgICAgICBjYXNlICdzZWxlY3QgcGxhdGUgZm9udCc6IHtcbiAgICAgICAgICAgIGNvbnN0IFtpbmRleF0gPSByZXN0IGFzIFtudW1iZXJdXG4gICAgICAgICAgICByZXR1cm4geyAuLi5tb2RlbCwgc2VsZWN0ZWRQbGF0ZTogW2luZGV4LCAnZm9udCddIH1cbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiZWRpdCBwbGF0ZSB0ZXh0XCI6IHtcbiAgICAgICAgICAgIGNvbnN0IFt0YXJnZXRJbmRleCwgdGV4dF0gPSByZXN0IGFzIFtudW1iZXIsIHN0cmluZ11cbiAgICAgICAgICAgIGNvbnN0IG5ld1BsYXRlTGlzdCA9IG1vZGVsLnBsYXRlTGlzdC5tYXAoKHBsYXRlLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICBpbmRleCA9PT0gdGFyZ2V0SW5kZXggPyB7IC4uLnBsYXRlLCB0ZXh0IH0gOiBwbGF0ZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4ubW9kZWwsIHBsYXRlTGlzdDogbmV3UGxhdGVMaXN0IH1cbiAgICAgICAgfVxuICAgICAgICBjYXNlICdlZGl0IHBsYXRlIGZvbnQnOiB7XG4gICAgICAgICAgICBjb25zdCBbdGFyZ2V0SW5kZXgsIGZvbnRdID0gcmVzdCBhcyBbbnVtYmVyLCBGb250XVxuICAgICAgICAgICAgY29uc3QgbmV3UGxhdGVMaXN0ID0gbW9kZWwucGxhdGVMaXN0Lm1hcCgocGxhdGUsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgIGluZGV4ID09PSB0YXJnZXRJbmRleCA/IHsgLi4ucGxhdGUsIGZvbnQgfSA6IHBsYXRlXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4geyAuLi5tb2RlbCwgcGxhdGVMaXN0OiBuZXdQbGF0ZUxpc3QgfVxuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJkZXNlbGVjdCBwbGF0ZVwiOiB7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5tb2RlbCwgc2VsZWN0ZWRQbGF0ZTogbnVsbCB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgUGxhdGUgfSBmcm9tIFwiLi9tb2RlbFwiXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVFbXB0eVBsYXRlQXJyYXkgPSAoKTogUGxhdGVbXSA9PiB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IDE2IH0sICh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICBmb250OiBcIlNjcmlwdFwiLFxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldFBsYXRlUG9zaXRpb24gPSAoaW5kZXg6IG51bWJlciwgY29scyA9IDIsIG1tID0gNCk6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSA9PiB7XG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpbmRleCAvIGNvbHMpO1xuICAgIGNvbnN0IGNvbCA9IGluZGV4ICUgY29scztcblxuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGNvbCAqIDgwICogbW0sXG4gICAgICAgIHk6IHJvdyAqIDE0ICogbW0sXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaCwgVk5vZGUgfSBmcm9tICdzbmFiYmRvbSdcbmltcG9ydCBoaCBmcm9tICdoeXBlcnNjcmlwdC1oZWxwZXJzJ1xuaW1wb3J0IHsgRm9udCwgTW9kZWwsIFBsYXRlIH0gZnJvbSAnLi9tb2RlbCdcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2VzJ1xuaW1wb3J0IHsgZm9udE1hcCwgcGxhdGVTaXplWCwgcGxhdGVTaXplWSwgdW5pdENlbGxYLCB1bml0Q2VsbFksIHdhbGxUaGlja25lc3MsIGJldmVsU2l6ZSwgbnVtQ29sdW1ucywgamlnU2l6ZVgsIGppZ1NpemVZLCBudW1Sb3dzIH0gZnJvbSAnLi9kYXRhJ1xuaW1wb3J0IHsgZ2V0UGxhdGVQb3NpdGlvbiB9IGZyb20gJy4vdXRpbHMnXG5cbmNvbnN0IHsgZGl2LCBidXR0b24sIHN2ZywgcHJlLCBmb3JtLCBpbnB1dCwgc2VsZWN0LCBvcHRpb24sIHNwYW4gfSA9IGhoKGgpXG5cbmNvbnN0IHVuaXRDZWxsID0gKHJvdzogbnVtYmVyLCBjb2x1bW46IG51bWJlciwgZGlzcGF0Y2g6IChtZXNzYWdlOiBNZXNzYWdlKSA9PiB2b2lkKSA9PiB7XG4gICAgY29uc3QgeCA9IGNvbHVtbiAqIHVuaXRDZWxsWCArIHdhbGxUaGlja25lc3MgLyAyXG4gICAgY29uc3QgeSA9IHJvdyAqIHVuaXRDZWxsWSArIHdhbGxUaGlja25lc3MgLyAyXG4gICAgcmV0dXJuIFtcbiAgICAgICAgaCgncmVjdCcsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgeDogYCR7eH1tbWAsXG4gICAgICAgICAgICAgICAgeTogYCR7eX1tbWAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGAke3BsYXRlU2l6ZVh9bW1gLFxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7cGxhdGVTaXplWX1tbWAsXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiAnZ29sZCcsXG4gICAgICAgICAgICAgICAgZmlsbDogJ3RyYW5zcGFyZW50J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IGRpc3BhdGNoKFsnc2VsZWN0IHBsYXRlIHRleHQnLCByb3cgKiBudW1Db2x1bW5zICsgY29sdW1uXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGgoJ3JlY3QnLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHg6IGAke3ggKyBiZXZlbFNpemV9bW1gLFxuICAgICAgICAgICAgICAgIHk6IGAke3kgKyBiZXZlbFNpemV9bW1gLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtwbGF0ZVNpemVYIC0gMiAqIGJldmVsU2l6ZX1tbWAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtwbGF0ZVNpemVZIC0gMiAqIGJldmVsU2l6ZX1tbWAsXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiAnZ29sZCcsXG4gICAgICAgICAgICAgICAgZmlsbDogJ25vbmUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgXVxufVxuXG5jb25zdCBib3JkZXIgPSBoKCdyZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICAgIHg6IGAwbW1gLFxuICAgICAgICB5OiBgMG1tYCxcbiAgICAgICAgd2lkdGg6IGAke2ppZ1NpemVYfW1tYCxcbiAgICAgICAgaGVpZ2h0OiBgJHtqaWdTaXplWX1tbWAsXG4gICAgICAgIHN0cm9rZTogJ2dvbGQnLFxuICAgICAgICBmaWxsOiAnbm9uZSdcbiAgICB9XG59KVxuXG5jb25zdCBnZXRGb250U2l6ZVRvRml0ID0gKHRleHQ6IHN0cmluZywgZGVmYXVsdFNpemU6IG51bWJlciwgbWF4V2lkdGg6IG51bWJlciwgZm9udEZhbWlseTogc3RyaW5nKTogbnVtYmVyID0+IHtcbiAgICBtYXhXaWR0aCA9IG1heFdpZHRoICogMy43OCAvLyBtbSB0byBweFxuICAgIGNvbnN0IHN2Z05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInN2Z1wiKVxuICAgIHN2Zy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxuICAgIHN2Zy5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3ZnKVxuXG4gICAgY29uc3QgdGVtcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwidGV4dFwiKVxuICAgIHRlbXBUZXh0LnNldEF0dHJpYnV0ZShcImZvbnQtZmFtaWx5XCIsIGZvbnRGYW1pbHkpXG4gICAgdGVtcFRleHQuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIGAke2RlZmF1bHRTaXplfW1tYClcbiAgICB0ZW1wVGV4dC50ZXh0Q29udGVudCA9IHRleHRcbiAgICBzdmcuYXBwZW5kQ2hpbGQodGVtcFRleHQpXG5cbiAgICBjb25zdCB0ZXh0V2lkdGggPSB0ZW1wVGV4dC5nZXRDb21wdXRlZFRleHRMZW5ndGgoKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc3ZnKVxuXG4gICAgaWYgKHRleHRXaWR0aCA8PSBtYXhXaWR0aCkgcmV0dXJuIGRlZmF1bHRTaXplXG4gICAgcmV0dXJuIGRlZmF1bHRTaXplICogKG1heFdpZHRoIC8gdGV4dFdpZHRoKVxufVxuXG5jb25zdCB1bml0VGV4dCA9IChyb3c6IG51bWJlciwgY29sdW1uOiBudW1iZXIsIHBsYXRlOiBQbGF0ZSkgPT4ge1xuICAgIGNvbnN0IHggPSBjb2x1bW4gKiB1bml0Q2VsbFggKyB3YWxsVGhpY2tuZXNzIC8gMiArIHBsYXRlU2l6ZVggLyAyXG4gICAgY29uc3QgeSA9IHJvdyAqIHVuaXRDZWxsWSArIHdhbGxUaGlja25lc3MgLyAyICsgcGxhdGVTaXplWSAvIDJcblxuICAgIGNvbnN0IGRlZmF1bHRGb250U2l6ZSA9IDYuNVxuICAgIGNvbnN0IG1heFdpZHRoID0gcGxhdGVTaXplWCAtIDE2IC8vIG1tIHBhZGRpbmdcbiAgICBjb25zdCBmb250U2l6ZSA9IGdldEZvbnRTaXplVG9GaXQocGxhdGUudGV4dCwgZGVmYXVsdEZvbnRTaXplLCBtYXhXaWR0aCwgZm9udE1hcFtwbGF0ZS5mb250XSlcblxuICAgIHJldHVybiBoKCd0ZXh0JyxcbiAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB4OiBgJHt4fW1tYCxcbiAgICAgICAgICAgICAgICB5OiBgJHt5fW1tYCxcbiAgICAgICAgICAgICAgICAndGV4dC1hbmNob3InOiAnbWlkZGxlJyxcbiAgICAgICAgICAgICAgICAnZG9taW5hbnQtYmFzZWxpbmUnOiAnY2VudHJhbCcsXG4gICAgICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6IGAke2ZvbnRTaXplfW1tYCxcbiAgICAgICAgICAgICAgICAnZm9udC1mYW1pbHknOiBmb250TWFwW3BsYXRlLmZvbnRdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBsYXRlLnRleHRcbiAgICApXG59XG5cblxuY29uc3QgZWRpdEZvbnRJbnB1dCA9IChtb2RlbDogTW9kZWwsIGRpc3BhdGNoOiAobWVzc2FnZTogTWVzc2FnZSkgPT4gdm9pZCk6IFZOb2RlIHwgbnVsbCA9PiB7XG4gICAgaWYgKG1vZGVsLnNlbGVjdGVkUGxhdGUgPT09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgW2luZGV4LCBlZGl0T3B0aW9uXSA9IG1vZGVsLnNlbGVjdGVkUGxhdGVcbiAgICBpZiAoZWRpdE9wdGlvbiA9PT0gJ3RleHQnKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgYm9keU1hcmdpbiA9IDJcbiAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gMilcbiAgICBjb25zdCBjb2x1bW4gPSBpbmRleCAlIDJcbiAgICBjb25zdCB4ID0gY29sdW1uICogdW5pdENlbGxYICsgd2FsbFRoaWNrbmVzcyAvIDIgKyBib2R5TWFyZ2luXG4gICAgY29uc3QgeSA9IHJvdyAqIHVuaXRDZWxsWSArIHdhbGxUaGlja25lc3MgLyAyICsgYm9keU1hcmdpblxuXG4gICAgY29uc3QgZm9udElucHV0ID0gc2VsZWN0KFxuICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdGb250J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgbGVmdDogYCR7eCArIHBsYXRlU2l6ZVggKiAzIC8gNH1tbWAsXG4gICAgICAgICAgICAgICAgdG9wOiBgJHt5fW1tYCxcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7cGxhdGVTaXplWCAqIDEgLyA0fW1tYCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke3BsYXRlU2l6ZVl9bW1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaG9vazoge1xuICAgICAgICAgICAgICAgIGluc2VydDogKHZub2RlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0RWxlbWVudCA9ICh2bm9kZS5lbG0gYXMgSFRNTElucHV0RWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0RWxlbWVudC5mb2N1cygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2hhbmdlOiAoZTogYW55KSA9PiBkaXNwYXRjaChbJ2VkaXQgcGxhdGUgZm9udCcsIGluZGV4LCBlLnRhcmdldC52YWx1ZV0pLFxuICAgICAgICAgICAgICAgIGJsdXI6ICgpID0+IGRpc3BhdGNoKFsnZGVzZWxlY3QgcGxhdGUnLCBpbmRleF0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIE9iamVjdC5rZXlzKGZvbnRNYXApLm1hcChmb250TmFtZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmb250TmFtZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmb250TmFtZVxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuICAgIClcbiAgICByZXR1cm4gZm9udElucHV0XG59XG5cbmNvbnN0IGZvbnRTZWxlY3RBcnJvd3MgPSAobW9kZWw6IE1vZGVsLCBkaXNwYXRjaDogKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHZvaWQpOiBWTm9kZSA9PiB7XG4gICAgY29uc3QgYm9keU1hcmdpbiA9IDJcblxuICAgIGNvbnN0IGFycm93ID0gKGluZGV4OiBudW1iZXIpID0+IHtcblxuICAgICAgICBpZiAobW9kZWwuc2VsZWN0ZWRQbGF0ZSAhPT0gbnVsbCAmJiBpbmRleCA9PT0gbW9kZWwuc2VsZWN0ZWRQbGF0ZVswXSkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpbmRleCAvIDIpXG4gICAgICAgIGNvbnN0IGNvbHVtbiA9IGluZGV4ICUgMlxuICAgICAgICBjb25zdCB4ID0gY29sdW1uICogdW5pdENlbGxYICsgd2FsbFRoaWNrbmVzcyAvIDIgKyBib2R5TWFyZ2luICsgcGxhdGVTaXplWCAqIDcgLyA4XG4gICAgICAgIGNvbnN0IHkgPSByb3cgKiB1bml0Q2VsbFkgKyB3YWxsVGhpY2tuZXNzIC8gMiArIGJvZHlNYXJnaW4gKyBwbGF0ZVNpemVZIC8gNFxuICAgICAgICByZXR1cm4gc3BhbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kZWwucGxhdGVMaXN0W2luZGV4XS5mb250XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogYCR7eH1tbWAsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogYCR7eX1tbWAsXG4gICAgICAgICAgICAgICAgICAgICdmb250LXNpemUnOiAnNm1tJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdnb2xkJyxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBwb2ludGVyZG93bjogKGU6IFBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChbJ3NlbGVjdCBwbGF0ZSBmb250JywgaW5kZXhdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICfilrwnXG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gZGl2KFxuICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBudW1Db2x1bW5zICogbnVtUm93cyB9LCAoXywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhcnJvdyhpbmRleClcbiAgICAgICAgfSlcbiAgICApXG59XG5cbmNvbnN0IGVkaXRUZXh0SW5wdXQgPSAobW9kZWw6IE1vZGVsLCBkaXNwYXRjaDogKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHZvaWQpOiBWTm9kZSB8IG51bGwgPT4ge1xuXG4gICAgaWYgKG1vZGVsLnNlbGVjdGVkUGxhdGUgPT09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgW2luZGV4LCBlZGl0T3B0aW9uXSA9IG1vZGVsLnNlbGVjdGVkUGxhdGVcbiAgICBpZiAoZWRpdE9wdGlvbiA9PT0gJ2ZvbnQnKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHBsYXRlID0gbW9kZWwucGxhdGVMaXN0W2luZGV4XVxuXG4gICAgY29uc3QgYm9keU1hcmdpbiA9IDJcbiAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gMilcbiAgICBjb25zdCBjb2x1bW4gPSBpbmRleCAlIDJcbiAgICBjb25zdCB4ID0gY29sdW1uICogdW5pdENlbGxYICsgd2FsbFRoaWNrbmVzcyAvIDIgKyBib2R5TWFyZ2luXG4gICAgY29uc3QgeSA9IHJvdyAqIHVuaXRDZWxsWSArIHdhbGxUaGlja25lc3MgLyAyICsgYm9keU1hcmdpblxuXG4gICAgY29uc3QgZGVmYXVsdEZvbnRTaXplID0gNi41XG4gICAgY29uc3QgbWF4V2lkdGggPSBwbGF0ZVNpemVYIC0gMTYgLy8gbW0gcGFkZGluZ1xuICAgIGNvbnN0IGZvbnRTaXplID0gZ2V0Rm9udFNpemVUb0ZpdChwbGF0ZS50ZXh0LCBkZWZhdWx0Rm9udFNpemUsIG1heFdpZHRoLCBmb250TWFwW3BsYXRlLmZvbnRdKVxuXG4gICAgY29uc3QgdGV4dElucHV0ID0gaW5wdXQoXG4gICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBtb2RlbC5wbGF0ZUxpc3RbaW5kZXhdLnRleHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiBgJHt4fW1tYCxcbiAgICAgICAgICAgICAgICB0b3A6IGAke3l9bW1gLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtwbGF0ZVNpemVYfW1tYCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke3BsYXRlU2l6ZVl9bW1gLFxuICAgICAgICAgICAgICAgICd0ZXh0LWFsaWduJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6IGAke2ZvbnRTaXplfW1tYCxcbiAgICAgICAgICAgICAgICAnZm9udC1mYW1pbHknOiBmb250TWFwW3BsYXRlLmZvbnRdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaG9vazoge1xuICAgICAgICAgICAgICAgIGluc2VydDogKHZub2RlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gKHZub2RlLmVsbSBhcyBIVE1MSW5wdXRFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQuZm9jdXMoKVxuICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQuc2VsZWN0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogKGU6IGFueSkgPT4gZGlzcGF0Y2goWydlZGl0IHBsYXRlIHRleHQnLCBpbmRleCwgZS50YXJnZXQudmFsdWVdKSxcbiAgICAgICAgICAgICAgICBibHVyOiAoKSA9PiBkaXNwYXRjaChbJ2Rlc2VsZWN0IHBsYXRlJywgaW5kZXhdKSxcbiAgICAgICAgICAgICAgICBrZXlkb3duOiAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnIHx8IGUua2V5ID09PSAnRW50ZXInKSBkaXNwYXRjaChbJ2Rlc2VsZWN0IHBsYXRlJywgaW5kZXhdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICApXG5cblxuICAgIHJldHVybiB0ZXh0SW5wdXRcbn1cblxuY29uc3QgcmVuZGVyU3ZnID0gKG1vZGVsOiBNb2RlbCwgZGlzcGF0Y2g6IChtZXNzYWdlOiBNZXNzYWdlKSA9PiB2b2lkKTogVk5vZGUgPT4ge1xuICAgIHJldHVybiBzdmcoXG4gICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGAke2ppZ1NpemVYfW1tYCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2ppZ1NpemVZfW1tYCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgICAgYm9yZGVyLFxuICAgICAgICAgICAgLi4ubW9kZWwucGxhdGVMaXN0Lm1hcCgocGxhdGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpbmRleCAvIDIpXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uID0gaW5kZXggJSAyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuaXRUZXh0KHJvdywgY29sdW1uLCBwbGF0ZSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgLi4uQXJyYXkuZnJvbSh7IGxlbmd0aDogbnVtQ29sdW1ucyAqIG51bVJvd3MgfSwgKF8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuaXRDZWxsKE1hdGguZmxvb3IoaW5kZXggLyAyKSwgaW5kZXggJSAyLCBkaXNwYXRjaClcbiAgICAgICAgICAgIH0pLmZsYXQoKVxuICAgICAgICBdXG4gICAgKVxufVxuXG5jb25zdCBkb3dubG9hZEJ1dHRvbiA9IGJ1dHRvbihcbiAgICB7XG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogKCkgPT4gZG93bmxvYWRTdmcoKVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkRvd25sb2FkIFNWR1wiXG4pXG5cbmNvbnN0IGRvd25sb2FkU3ZnID0gKCkgPT4ge1xuICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpXG4gICAgaWYgKCFzdmdFbGVtZW50KSByZXR1cm5cblxuICAgIC8vIFNlcmlhbGl6ZSBTVkdcbiAgICBjb25zdCBzZXJpYWxpemVyID0gbmV3IFhNTFNlcmlhbGl6ZXIoKVxuICAgIGNvbnN0IHNvdXJjZSA9IHNlcmlhbGl6ZXIuc2VyaWFsaXplVG9TdHJpbmcoc3ZnRWxlbWVudClcblxuICAgIC8vIEFkZCBYTUwgaGVhZGVyIChvcHRpb25hbCBidXQgZ29vZCBmb3IgcHJvcGVyIFNWRyBmaWxlcylcbiAgICBjb25zdCBzdmdCbG9iID0gbmV3IEJsb2IoXG4gICAgICAgIFsnPD94bWwgdmVyc2lvbj1cIjEuMFwiIHN0YW5kYWxvbmU9XCJub1wiPz5cXG4nICsgc291cmNlXSxcbiAgICAgICAgeyB0eXBlOiBcImltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOFwiIH1cbiAgICApXG5cbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHN2Z0Jsb2IpXG5cbiAgICAvLyBUcmlnZ2VyIGRvd25sb2FkXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXG4gICAgbGluay5ocmVmID0gdXJsXG4gICAgbGluay5kb3dubG9hZCA9IFwicGxhdGVzLnN2Z1wiXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKVxuICAgIGxpbmsuY2xpY2soKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluaylcblxuICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKVxufVxuXG5cbmV4cG9ydCBjb25zdCB2aWV3ID0gKG1vZGVsOiBNb2RlbCwgZGlzcGF0Y2g6IChtZXNzYWdlOiBNZXNzYWdlKSA9PiB2b2lkKSA9PiB7XG4gICAgcmV0dXJuIGRpdihbXG4gICAgICAgIHJlbmRlclN2Zyhtb2RlbCwgZGlzcGF0Y2gpLFxuICAgICAgICBmb250U2VsZWN0QXJyb3dzKG1vZGVsLCBkaXNwYXRjaCksXG4gICAgICAgIGVkaXRUZXh0SW5wdXQobW9kZWwsIGRpc3BhdGNoKSxcbiAgICAgICAgZWRpdEZvbnRJbnB1dChtb2RlbCwgZGlzcGF0Y2gpLFxuICAgICAgICBkb3dubG9hZEJ1dHRvblxuICAgIF0pXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFwcCB9IGZyb20gXCIuL2FwcFwiXG5pbXBvcnQgeyBpbml0TW9kZWwgfSBmcm9tIFwiLi9tb2RlbFwiXG5pbXBvcnQgeyB2aWV3IH0gZnJvbSBcIi4vdmlld1wiXG5pbXBvcnQgeyB1cGRhdGUgfSBmcm9tIFwiLi91cGRhdGVcIlxuXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpIGFzIEhUTUxFbGVtZW50XG5cbmFwcChpbml0TW9kZWwsIHZpZXcsIHVwZGF0ZSwgcm9vdCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=