/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/cross-fetch/dist/browser-ponyfill.js":
/*!***********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/browser-ponyfill.js ***!
  \***********************************************************/
/***/ (function(module, exports) {

eval("var global = typeof self !== 'undefined' ? self : this;\nvar __self__ = (function () {\nfunction F() {\nthis.fetch = false;\nthis.DOMException = global.DOMException\n}\nF.prototype = global;\nreturn new F();\n})();\n(function(self) {\n\nvar irrelevant = (function (exports) {\n\n  var support = {\n    searchParams: 'URLSearchParams' in self,\n    iterable: 'Symbol' in self && 'iterator' in Symbol,\n    blob:\n      'FileReader' in self &&\n      'Blob' in self &&\n      (function() {\n        try {\n          new Blob();\n          return true\n        } catch (e) {\n          return false\n        }\n      })(),\n    formData: 'FormData' in self,\n    arrayBuffer: 'ArrayBuffer' in self\n  };\n\n  function isDataView(obj) {\n    return obj && DataView.prototype.isPrototypeOf(obj)\n  }\n\n  if (support.arrayBuffer) {\n    var viewClasses = [\n      '[object Int8Array]',\n      '[object Uint8Array]',\n      '[object Uint8ClampedArray]',\n      '[object Int16Array]',\n      '[object Uint16Array]',\n      '[object Int32Array]',\n      '[object Uint32Array]',\n      '[object Float32Array]',\n      '[object Float64Array]'\n    ];\n\n    var isArrayBufferView =\n      ArrayBuffer.isView ||\n      function(obj) {\n        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1\n      };\n  }\n\n  function normalizeName(name) {\n    if (typeof name !== 'string') {\n      name = String(name);\n    }\n    if (/[^a-z0-9\\-#$%&'*+.^_`|~]/i.test(name)) {\n      throw new TypeError('Invalid character in header field name')\n    }\n    return name.toLowerCase()\n  }\n\n  function normalizeValue(value) {\n    if (typeof value !== 'string') {\n      value = String(value);\n    }\n    return value\n  }\n\n  // Build a destructive iterator for the value list\n  function iteratorFor(items) {\n    var iterator = {\n      next: function() {\n        var value = items.shift();\n        return {done: value === undefined, value: value}\n      }\n    };\n\n    if (support.iterable) {\n      iterator[Symbol.iterator] = function() {\n        return iterator\n      };\n    }\n\n    return iterator\n  }\n\n  function Headers(headers) {\n    this.map = {};\n\n    if (headers instanceof Headers) {\n      headers.forEach(function(value, name) {\n        this.append(name, value);\n      }, this);\n    } else if (Array.isArray(headers)) {\n      headers.forEach(function(header) {\n        this.append(header[0], header[1]);\n      }, this);\n    } else if (headers) {\n      Object.getOwnPropertyNames(headers).forEach(function(name) {\n        this.append(name, headers[name]);\n      }, this);\n    }\n  }\n\n  Headers.prototype.append = function(name, value) {\n    name = normalizeName(name);\n    value = normalizeValue(value);\n    var oldValue = this.map[name];\n    this.map[name] = oldValue ? oldValue + ', ' + value : value;\n  };\n\n  Headers.prototype['delete'] = function(name) {\n    delete this.map[normalizeName(name)];\n  };\n\n  Headers.prototype.get = function(name) {\n    name = normalizeName(name);\n    return this.has(name) ? this.map[name] : null\n  };\n\n  Headers.prototype.has = function(name) {\n    return this.map.hasOwnProperty(normalizeName(name))\n  };\n\n  Headers.prototype.set = function(name, value) {\n    this.map[normalizeName(name)] = normalizeValue(value);\n  };\n\n  Headers.prototype.forEach = function(callback, thisArg) {\n    for (var name in this.map) {\n      if (this.map.hasOwnProperty(name)) {\n        callback.call(thisArg, this.map[name], name, this);\n      }\n    }\n  };\n\n  Headers.prototype.keys = function() {\n    var items = [];\n    this.forEach(function(value, name) {\n      items.push(name);\n    });\n    return iteratorFor(items)\n  };\n\n  Headers.prototype.values = function() {\n    var items = [];\n    this.forEach(function(value) {\n      items.push(value);\n    });\n    return iteratorFor(items)\n  };\n\n  Headers.prototype.entries = function() {\n    var items = [];\n    this.forEach(function(value, name) {\n      items.push([name, value]);\n    });\n    return iteratorFor(items)\n  };\n\n  if (support.iterable) {\n    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;\n  }\n\n  function consumed(body) {\n    if (body.bodyUsed) {\n      return Promise.reject(new TypeError('Already read'))\n    }\n    body.bodyUsed = true;\n  }\n\n  function fileReaderReady(reader) {\n    return new Promise(function(resolve, reject) {\n      reader.onload = function() {\n        resolve(reader.result);\n      };\n      reader.onerror = function() {\n        reject(reader.error);\n      };\n    })\n  }\n\n  function readBlobAsArrayBuffer(blob) {\n    var reader = new FileReader();\n    var promise = fileReaderReady(reader);\n    reader.readAsArrayBuffer(blob);\n    return promise\n  }\n\n  function readBlobAsText(blob) {\n    var reader = new FileReader();\n    var promise = fileReaderReady(reader);\n    reader.readAsText(blob);\n    return promise\n  }\n\n  function readArrayBufferAsText(buf) {\n    var view = new Uint8Array(buf);\n    var chars = new Array(view.length);\n\n    for (var i = 0; i < view.length; i++) {\n      chars[i] = String.fromCharCode(view[i]);\n    }\n    return chars.join('')\n  }\n\n  function bufferClone(buf) {\n    if (buf.slice) {\n      return buf.slice(0)\n    } else {\n      var view = new Uint8Array(buf.byteLength);\n      view.set(new Uint8Array(buf));\n      return view.buffer\n    }\n  }\n\n  function Body() {\n    this.bodyUsed = false;\n\n    this._initBody = function(body) {\n      this._bodyInit = body;\n      if (!body) {\n        this._bodyText = '';\n      } else if (typeof body === 'string') {\n        this._bodyText = body;\n      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {\n        this._bodyBlob = body;\n      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {\n        this._bodyFormData = body;\n      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {\n        this._bodyText = body.toString();\n      } else if (support.arrayBuffer && support.blob && isDataView(body)) {\n        this._bodyArrayBuffer = bufferClone(body.buffer);\n        // IE 10-11 can't handle a DataView body.\n        this._bodyInit = new Blob([this._bodyArrayBuffer]);\n      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {\n        this._bodyArrayBuffer = bufferClone(body);\n      } else {\n        this._bodyText = body = Object.prototype.toString.call(body);\n      }\n\n      if (!this.headers.get('content-type')) {\n        if (typeof body === 'string') {\n          this.headers.set('content-type', 'text/plain;charset=UTF-8');\n        } else if (this._bodyBlob && this._bodyBlob.type) {\n          this.headers.set('content-type', this._bodyBlob.type);\n        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {\n          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');\n        }\n      }\n    };\n\n    if (support.blob) {\n      this.blob = function() {\n        var rejected = consumed(this);\n        if (rejected) {\n          return rejected\n        }\n\n        if (this._bodyBlob) {\n          return Promise.resolve(this._bodyBlob)\n        } else if (this._bodyArrayBuffer) {\n          return Promise.resolve(new Blob([this._bodyArrayBuffer]))\n        } else if (this._bodyFormData) {\n          throw new Error('could not read FormData body as blob')\n        } else {\n          return Promise.resolve(new Blob([this._bodyText]))\n        }\n      };\n\n      this.arrayBuffer = function() {\n        if (this._bodyArrayBuffer) {\n          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)\n        } else {\n          return this.blob().then(readBlobAsArrayBuffer)\n        }\n      };\n    }\n\n    this.text = function() {\n      var rejected = consumed(this);\n      if (rejected) {\n        return rejected\n      }\n\n      if (this._bodyBlob) {\n        return readBlobAsText(this._bodyBlob)\n      } else if (this._bodyArrayBuffer) {\n        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))\n      } else if (this._bodyFormData) {\n        throw new Error('could not read FormData body as text')\n      } else {\n        return Promise.resolve(this._bodyText)\n      }\n    };\n\n    if (support.formData) {\n      this.formData = function() {\n        return this.text().then(decode)\n      };\n    }\n\n    this.json = function() {\n      return this.text().then(JSON.parse)\n    };\n\n    return this\n  }\n\n  // HTTP methods whose capitalization should be normalized\n  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];\n\n  function normalizeMethod(method) {\n    var upcased = method.toUpperCase();\n    return methods.indexOf(upcased) > -1 ? upcased : method\n  }\n\n  function Request(input, options) {\n    options = options || {};\n    var body = options.body;\n\n    if (input instanceof Request) {\n      if (input.bodyUsed) {\n        throw new TypeError('Already read')\n      }\n      this.url = input.url;\n      this.credentials = input.credentials;\n      if (!options.headers) {\n        this.headers = new Headers(input.headers);\n      }\n      this.method = input.method;\n      this.mode = input.mode;\n      this.signal = input.signal;\n      if (!body && input._bodyInit != null) {\n        body = input._bodyInit;\n        input.bodyUsed = true;\n      }\n    } else {\n      this.url = String(input);\n    }\n\n    this.credentials = options.credentials || this.credentials || 'same-origin';\n    if (options.headers || !this.headers) {\n      this.headers = new Headers(options.headers);\n    }\n    this.method = normalizeMethod(options.method || this.method || 'GET');\n    this.mode = options.mode || this.mode || null;\n    this.signal = options.signal || this.signal;\n    this.referrer = null;\n\n    if ((this.method === 'GET' || this.method === 'HEAD') && body) {\n      throw new TypeError('Body not allowed for GET or HEAD requests')\n    }\n    this._initBody(body);\n  }\n\n  Request.prototype.clone = function() {\n    return new Request(this, {body: this._bodyInit})\n  };\n\n  function decode(body) {\n    var form = new FormData();\n    body\n      .trim()\n      .split('&')\n      .forEach(function(bytes) {\n        if (bytes) {\n          var split = bytes.split('=');\n          var name = split.shift().replace(/\\+/g, ' ');\n          var value = split.join('=').replace(/\\+/g, ' ');\n          form.append(decodeURIComponent(name), decodeURIComponent(value));\n        }\n      });\n    return form\n  }\n\n  function parseHeaders(rawHeaders) {\n    var headers = new Headers();\n    // Replace instances of \\r\\n and \\n followed by at least one space or horizontal tab with a space\n    // https://tools.ietf.org/html/rfc7230#section-3.2\n    var preProcessedHeaders = rawHeaders.replace(/\\r?\\n[\\t ]+/g, ' ');\n    preProcessedHeaders.split(/\\r?\\n/).forEach(function(line) {\n      var parts = line.split(':');\n      var key = parts.shift().trim();\n      if (key) {\n        var value = parts.join(':').trim();\n        headers.append(key, value);\n      }\n    });\n    return headers\n  }\n\n  Body.call(Request.prototype);\n\n  function Response(bodyInit, options) {\n    if (!options) {\n      options = {};\n    }\n\n    this.type = 'default';\n    this.status = options.status === undefined ? 200 : options.status;\n    this.ok = this.status >= 200 && this.status < 300;\n    this.statusText = 'statusText' in options ? options.statusText : 'OK';\n    this.headers = new Headers(options.headers);\n    this.url = options.url || '';\n    this._initBody(bodyInit);\n  }\n\n  Body.call(Response.prototype);\n\n  Response.prototype.clone = function() {\n    return new Response(this._bodyInit, {\n      status: this.status,\n      statusText: this.statusText,\n      headers: new Headers(this.headers),\n      url: this.url\n    })\n  };\n\n  Response.error = function() {\n    var response = new Response(null, {status: 0, statusText: ''});\n    response.type = 'error';\n    return response\n  };\n\n  var redirectStatuses = [301, 302, 303, 307, 308];\n\n  Response.redirect = function(url, status) {\n    if (redirectStatuses.indexOf(status) === -1) {\n      throw new RangeError('Invalid status code')\n    }\n\n    return new Response(null, {status: status, headers: {location: url}})\n  };\n\n  exports.DOMException = self.DOMException;\n  try {\n    new exports.DOMException();\n  } catch (err) {\n    exports.DOMException = function(message, name) {\n      this.message = message;\n      this.name = name;\n      var error = Error(message);\n      this.stack = error.stack;\n    };\n    exports.DOMException.prototype = Object.create(Error.prototype);\n    exports.DOMException.prototype.constructor = exports.DOMException;\n  }\n\n  function fetch(input, init) {\n    return new Promise(function(resolve, reject) {\n      var request = new Request(input, init);\n\n      if (request.signal && request.signal.aborted) {\n        return reject(new exports.DOMException('Aborted', 'AbortError'))\n      }\n\n      var xhr = new XMLHttpRequest();\n\n      function abortXhr() {\n        xhr.abort();\n      }\n\n      xhr.onload = function() {\n        var options = {\n          status: xhr.status,\n          statusText: xhr.statusText,\n          headers: parseHeaders(xhr.getAllResponseHeaders() || '')\n        };\n        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');\n        var body = 'response' in xhr ? xhr.response : xhr.responseText;\n        resolve(new Response(body, options));\n      };\n\n      xhr.onerror = function() {\n        reject(new TypeError('Network request failed'));\n      };\n\n      xhr.ontimeout = function() {\n        reject(new TypeError('Network request failed'));\n      };\n\n      xhr.onabort = function() {\n        reject(new exports.DOMException('Aborted', 'AbortError'));\n      };\n\n      xhr.open(request.method, request.url, true);\n\n      if (request.credentials === 'include') {\n        xhr.withCredentials = true;\n      } else if (request.credentials === 'omit') {\n        xhr.withCredentials = false;\n      }\n\n      if ('responseType' in xhr && support.blob) {\n        xhr.responseType = 'blob';\n      }\n\n      request.headers.forEach(function(value, name) {\n        xhr.setRequestHeader(name, value);\n      });\n\n      if (request.signal) {\n        request.signal.addEventListener('abort', abortXhr);\n\n        xhr.onreadystatechange = function() {\n          // DONE (success or failure)\n          if (xhr.readyState === 4) {\n            request.signal.removeEventListener('abort', abortXhr);\n          }\n        };\n      }\n\n      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);\n    })\n  }\n\n  fetch.polyfill = true;\n\n  if (!self.fetch) {\n    self.fetch = fetch;\n    self.Headers = Headers;\n    self.Request = Request;\n    self.Response = Response;\n  }\n\n  exports.Headers = Headers;\n  exports.Request = Request;\n  exports.Response = Response;\n  exports.fetch = fetch;\n\n  Object.defineProperty(exports, '__esModule', { value: true });\n\n  return exports;\n\n})({});\n})(__self__);\n__self__.fetch.ponyfill = true;\n// Remove \"polyfill\" property added by whatwg-fetch\ndelete __self__.fetch.polyfill;\n// Choose between native implementation (global) or custom implementation (__self__)\n// var ctx = global.fetch ? global : __self__;\nvar ctx = __self__; // this line disable service worker support temporarily\nexports = ctx.fetch // To enable: import fetch from 'cross-fetch'\nexports[\"default\"] = ctx.fetch // For TypeScript consumers without esModuleInterop.\nexports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'\nexports.Headers = ctx.Headers\nexports.Request = ctx.Request\nexports.Response = ctx.Response\nmodule.exports = exports\n\n\n//# sourceURL=webpack:///./node_modules/cross-fetch/dist/browser-ponyfill.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit;\\n  scrollbar-width: thin;\\n}\\n\\n:root {\\n  --font-sans: \\\"Lato\\\", sans-serif;\\n  --btn-color: #cc2008;\\n  --text-color: #23180d;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n  box-sizing: border-box;\\n  scroll-behavior: smooth;\\n}\\n\\nbody {\\n  font-size: 20px;\\n  background-color: #fff;\\n  font-family: var(--font-sans);\\n}\\n\\n.overflow-hidden {\\n  overflow: hidden;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\na {\\n  all: unset;\\n}\\n\\n/* Start Header and Footer section */\\nheader,\\nfooter {\\n  width: 80vw;\\n  height: 8vh;\\n  border: 1px solid #333;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin: 2rem auto;\\n  padding: 0 2rem;\\n  font-size: 3rem;\\n  z-index: 1;\\n}\\n\\n.nav-list {\\n  display: flex;\\n  list-style: none;\\n  gap: 4rem;\\n  cursor: pointer;\\n}\\n\\n.list-item:not(:last-child) {\\n  border-right: 3px solid #000;\\n  padding-right: 4rem;\\n}\\n\\n.list-item:hover {\\n  text-shadow: 0.5rem 1rem 2rem #000;\\n}\\n\\n.logo {\\n  display: block;\\n  width: 22rem;\\n  cursor: pointer;\\n}\\n\\nfooter {\\n  position: relative;\\n  bottom: 0;\\n  letter-spacing: 0.5rem;\\n}\\n\\n@media screen and (max-width: 800px) {\\n  header,\\n  footer {\\n    width: 95vw;\\n    font-size: 2rem;\\n  }\\n\\n  .nav-list {\\n    gap: 2rem;\\n  }\\n\\n  .list-item:not(:last-child) {\\n    padding-right: 2rem;\\n  }\\n}\\n\\n/* End Header and Footer section */\\n\\n/* Start main section */\\n\\nmain {\\n  margin: 0 auto;\\n  padding: 4rem 0;\\n  max-width: 150rem;\\n}\\n\\nmain h2 {\\n  text-align: center;\\n  margin: 2rem;\\n}\\n\\n.card-container {\\n  display: flex;\\n  justify-content: space-evenly;\\n  align-items: center;\\n  flex-wrap: wrap;\\n  gap: 2rem;\\n}\\n\\n.card {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 1.5rem;\\n  border: 2px solid #222;\\n  border-radius: 12px;\\n  padding: 1.5rem;\\n}\\n\\n.card__img {\\n  display: block;\\n  max-width: 30rem;\\n  border-radius: 7px;\\n  cursor: pointer;\\n  transition: 0.4s;\\n}\\n\\n.card__img:hover {\\n  transform: scale(1.1);\\n}\\n\\n.like-icon {\\n  width: 2.5rem;\\n  vertical-align: middle;\\n  margin: 0 1.5rem 0.4rem;\\n  cursor: pointer;\\n  transition: 0.3s;\\n}\\n\\n.like-icon:hover {\\n  transform: scale(1.5);\\n}\\n\\n.btn {\\n  width: 100%;\\n  padding: 1rem;\\n  cursor: pointer;\\n  border: none;\\n  outline: none;\\n  border-radius: 7px;\\n  background-color: var(--btn-color);\\n  color: #fff;\\n  font-size: 2rem;\\n  transition: 0.4s;\\n}\\n\\n.btn:hover,\\n.btn:active {\\n  background-color: var(--text-color);\\n  color: #fff;\\n}\\n\\n/* End main section */\\n\\n/* Start modal section */\\n\\n.modal-container {\\n  position: fixed;\\n  width: 100%;\\n  height: 100vh;\\n  inset: 0 0 0 0;\\n  display: none;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  background-color: rgba(0, 0, 0, 0.9);\\n  backdrop-filter: blur(0.5rem);\\n  z-index: 5;\\n}\\n\\n.show-modal {\\n  display: flex;\\n}\\n\\n.modal-card {\\n  background-color: khaki;\\n  width: 40%;\\n  max-height: 90%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: flex-start;\\n  gap: 4rem;\\n  overflow: auto;\\n  padding-bottom: 4rem;\\n  border-radius: 10px;\\n}\\n\\n.close-modal-btn {\\n  position: absolute;\\n  top: 8px;\\n  right: 38px;\\n  align-self: flex-end;\\n  border-style: none;\\n  border-radius: 50%;\\n  background-color: #fff;\\n  font-size: 3rem;\\n  cursor: pointer;\\n  outline: none;\\n  width: 4rem;\\n  height: 4rem;\\n  margin: 2rem 2rem 0 0;\\n  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);\\n  z-index: 10;\\n}\\n\\n.close-modal-btn:hover {\\n  color: #fff;\\n  background-color: var(--btn-color);\\n}\\n\\n.close-modal-btn:active {\\n  color: #fff;\\n  background-color: var(--text-color);\\n}\\n\\n.modal-card figure {\\n  width: 100%;\\n  height: 100%;\\n  z-index: 1;\\n}\\n\\n.modal-card img {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.modal-card .modal-header {\\n  position: relative;\\n  width: 100%;\\n}\\n\\n.modal-card .recipe-title {\\n  width: 100%;\\n  position: absolute;\\n  bottom: 0;\\n  color: #fff;\\n  background-color: var(--btn-color);\\n  font-weight: 400;\\n  font-size: 3rem;\\n  padding: 2rem;\\n  text-align: center;\\n  border-top-left-radius: 30px;\\n  border-top-right-radius: 30px;\\n  box-shadow: 2px -6px 8px 1px rgba(0, 0, 0, 0.4);\\n  z-index: 1;\\n}\\n\\n.modal-card iframe {\\n  height: 40rem;\\n  width: 100%;\\n  border-radius: 20px;\\n}\\n\\n.modal-card .info-container {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  background-color: #fff;\\n  padding: 2rem;\\n}\\n\\n.modal-card h3 {\\n  width: 100%;\\n  color: #fff;\\n  color: var(--btn-color);\\n  font-size: 2rem;\\n  font-weight: 700;\\n  text-align: center;\\n  padding: 1rem;\\n  margin-bottom: 1rem;\\n}\\n\\n.modal-card p {\\n  width: 90%;\\n  text-align: center;\\n  margin-bottom: 2rem;\\n  font-size: 1.6rem;\\n}\\n\\n.modal-card p span {\\n  display: inline-block;\\n  font-weight: 300;\\n  color: #000;\\n  background-color: rgba(243, 165, 2, 0.2);\\n  padding: 1rem 2rem;\\n  margin-bottom: 1rem;\\n  border-radius: 20px;\\n  font-size: 1.6rem;\\n}\\n\\n.modal-card p.description {\\n  text-align: justify;\\n}\\n\\n/* End modal section */\\n\\n/* Start scrollbar section */\\n\\n/* Works on Chrome, Edge, and Safari */\\n*::-webkit-scrollbar {\\n  width: 12px;\\n}\\n\\n*::-webkit-scrollbar-track {\\n  background: rgba(243, 165, 2, 1);\\n}\\n\\n.modal-card::-webkit-scrollbar-track {\\n  background: rgba(243, 165, 2, 1);\\n  border-radius: 20px;\\n}\\n\\n*::-webkit-scrollbar-thumb {\\n  background-color: rgba(204, 32, 8, 0.4);\\n  border-radius: 20px;\\n}\\n\\n/* End scrollbar section */\\n\\n/* Start comment section */\\n\\n.comments ul {\\n  margin-bottom: 2rem;\\n  width: 100%;\\n  font-size: 1.8rem;\\n}\\n\\n.comments ul li {\\n  background-color: #eee;\\n  padding: 1.6rem 2.8rem;\\n  width: 100%;\\n  border-radius: 10px;\\n  margin-bottom: 0.6rem;\\n}\\n\\n.comments ul li:nth-child(odd) {\\n  background-color: #ddd;\\n}\\n\\n.comments ul li span:first-child {\\n  margin-right: 1rem;\\n}\\n\\n.comments ul li span:last-child {\\n  font-weight: 300;\\n}\\n\\n.comments form {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n  margin-bottom: 2rem;\\n}\\n\\n.comments h2 {\\n  margin-bottom: 2rem;\\n}\\n\\n.comments .msgErrorContainer {\\n  color: red;\\n  margin-bottom: 2rem;\\n}\\n\\n.comments form input,\\n.comments form textarea {\\n  font-family: var(--font-sans);\\n  border: 1px solid;\\n  border-radius: 10px;\\n  padding: 1rem;\\n  resize: none;;\\n}\\n\\n/* End comment section */\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _modules_renderMeals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderMeals.js */ \"./src/modules/renderMeals.js\");\n\n\n\n\n(0,_modules_renderMeals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/getMeals.js":
/*!*********************************!*\
  !*** ./src/modules/getMeals.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMeals\": () => (/* binding */ getMeals),\n/* harmony export */   \"mealsLength\": () => (/* binding */ mealsLength)\n/* harmony export */ });\n/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cross-fetch */ \"./node_modules/cross-fetch/dist/browser-ponyfill.js\");\n/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst getMeals = async () => {\n  const resolve = await cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\n    'https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian',\n  );\n\n  const data = await resolve.json();\n  const { meals } = data;\n  return meals;\n};\n\nconst mealsLength = async () => {\n  const mealsArr = await getMeals();\n  return mealsArr.length;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/modules/getMeals.js?");

/***/ }),

/***/ "./src/modules/handleComments.js":
/*!***************************************!*\
  !*** ./src/modules/handleComments.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayComments\": () => (/* binding */ displayComments),\n/* harmony export */   \"addComment\": () => (/* binding */ addComment)\n/* harmony export */ });\nconst baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';\nconst appID = 'cEtwlqneMRRYCtlfnIeQ';\n\nconst postComment = async (username, comment, idMeal) => {\n  const resolve = await fetch(`${baseURL}/${appID}/comments`, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: idMeal,\n      username,\n      comment,\n    }),\n    headers: { 'Content-type': 'application/JSON' },\n  });\n\n  const result = await resolve.text();\n  return result;\n};\n\nconst getComment = async (idMeal) => {\n  const resolve = await fetch(`${baseURL}/${appID}/comments?item_id=${idMeal}`);\n  const result = await resolve.json();\n\n  return result;\n};\n\nconst commentTemplate = (date, name, comment) => `\n  <li>\n  <span>${date}</span>\n  <span>${name}: </span>\n  <span>${comment}</span>\n  </li>\n`;\n\nconst displayComments = async (idMeal) => {\n  const ul = document.querySelector('ul');\n  const commentArr = await getComment(idMeal);\n  ul.innerHTML = '';\n  let html = '';\n\n  commentArr.forEach((element) => {\n    const commentItem = commentTemplate(\n      element.creation_date,\n      element.username,\n      element.comment,\n    );\n    html += commentItem;\n  });\n  ul.insertAdjacentHTML('beforeend', html);\n};\n\nconst addComment = async (event, form, idMeal) => {\n  event.preventDefault();\n  const name = form.querySelector('input');\n  const comment = form.querySelector('textarea');\n\n  await postComment(name.value, comment.value, idMeal);\n  await displayComments(idMeal);\n  form.reset();\n};\n\n\n\n\n//# sourceURL=webpack:///./src/modules/handleComments.js?");

/***/ }),

/***/ "./src/modules/handleLike.js":
/*!***********************************!*\
  !*** ./src/modules/handleLike.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLike\": () => (/* binding */ getLike),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\nconst baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst appID = 'cEtwlqneMRRYCtlfnIeQ';\n\nconst postLike = async (id) => {\n  const resolve = await fetch(`${baseURL}${appID}/likes/`, {\n    method: 'POST',\n    body: JSON.stringify({ item_id: id }),\n    headers: { 'Content-type': 'application/JSON' },\n  });\n\n  const result = await resolve.text();\n\n  return result;\n};\n\nconst getLike = async () => {\n  const resolve = await fetch(`${baseURL}${appID}/likes/`);\n  const result = await resolve.json();\n\n  return result;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/modules/handleLike.js?");

/***/ }),

/***/ "./src/modules/handleModal.js":
/*!************************************!*\
  !*** ./src/modules/handleModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _handleComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleComments.js */ \"./src/modules/handleComments.js\");\n// modal section\n\n\n\nconst commentsLength = 0;\n\nconst modalTemplate = (meal, idVideo) => `\n        <button class=\"close-modal-btn\">x</button>\n          <div class=\"modal-header\">\n            <figure>\n              <img src=\"${meal.strMealThumb}\" alt=\"Recipe image\"/>\n            </figure>\n            <h2 class=\"recipe-title\">${meal.strMeal}</h2>\n          </div>\n          <div class=\"info-container\">\n            <h3>Video Tutorial:</h2>\n            <iframe\n            src=\"https://www.youtube.com/embed/${idVideo}\"\n            frameborder=\"0\"\n            allowfullscreen>\n            </iframe>\n          </div>\n          <div class=\"info-container\">\n            <h3>Ingredients:</h2>\n            <p class=\"Ingredients\">\n            <span>${meal.strIngredient1}: ${meal.strMeasure1}</span>\n            <span>${meal.strIngredient2}: ${meal.strMeasure2}</span>\n            <span>${meal.strIngredient3}: ${meal.strMeasure3}</span>\n            <span>${meal.strIngredient4}: ${meal.strMeasure4}</span>\n            <span>${meal.strIngredient5}: ${meal.strMeasure5}</span>\n            </p>\n          </div>\n          <div class=\"info-container\">\n            <h3>Instructions:</h2>\n            <p class=\"description\">${meal.strInstructions}</p>\n          </div>\n          <div class=\"info-container comments\">\n            <h3>Comments (${commentsLength})</h2>\n            <ul class=\"comment-container\"></ul>\n            <h3>Add a comment</h2>\n            <div class=\"msgErrorContainer\"></div>\n            <form action=\"index_submit\" method=\"POST\" accept-charset=\"utf-8\">\n              <input type=\"text\" placeholder=\"Name\" name=\"Your name\" maxlength=\"20\" required/>\n              <textarea\n                name=\"text-area\"\n                maxlength=\"220\"\n                placeholder=\"Your Insights\" cols=\"50\" rows=\"10\" required></textarea>\n              <button type=\"submit\" class=\"btn add-comment-btn\">Comment</button>\n            </form>\n          </div>\n  `;\n\nconst modalSection = document.querySelector('.modal-container');\nconst $body = document.querySelector('body');\n\nfunction openModal() {\n  modalSection.classList.add('show-modal');\n  $body.classList.add('overflow-hidden');\n}\n\nfunction closeModal() {\n  modalSection.classList.remove('show-modal');\n  $body.classList.remove('overflow-hidden');\n  modalSection.innerHTML = '';\n}\n\nconst createModal = (mealData) => {\n  const idVideo = mealData[0].strYoutube.slice(32);\n  const modalArticle = document.createElement('div');\n  modalArticle.className = 'modal-card';\n  modalArticle.innerHTML = modalTemplate(mealData[0], idVideo);\n  modalSection.appendChild(modalArticle);\n  const closeModalBtn = document.querySelector('.close-modal-btn');\n  closeModalBtn.addEventListener('click', closeModal);\n};\n\nconst handleModal = (meals) => {\n  const openModalBtn = document.querySelectorAll('.btn-details');\n\n  openModalBtn.forEach((btn, index) => {\n    btn.addEventListener('click', async () => {\n      openModal();\n      const urlBase = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';\n      const url = `${urlBase}${meals[index].idMeal}`;\n      const mealData = await fetch(url)\n        .then((response) => response.json())\n        .then((data) => data.meals);\n      createModal(mealData);\n      const form = document.querySelector('form');\n      form.addEventListener('submit', (event) => {\n        (0,_handleComments_js__WEBPACK_IMPORTED_MODULE_0__.addComment)(event, form, meals[index].idMeal);\n      });\n\n      (0,_handleComments_js__WEBPACK_IMPORTED_MODULE_0__.displayComments)(meals[index].idMeal);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleModal);\n\n\n//# sourceURL=webpack:///./src/modules/handleModal.js?");

/***/ }),

/***/ "./src/modules/renderMeals.js":
/*!************************************!*\
  !*** ./src/modules/renderMeals.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getMeals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMeals.js */ \"./src/modules/getMeals.js\");\n/* harmony import */ var _handleLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleLike.js */ \"./src/modules/handleLike.js\");\n/* harmony import */ var _img_heart_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/heart.svg */ \"./src/img/heart.svg\");\n/* harmony import */ var _handleModal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleModal.js */ \"./src/modules/handleModal.js\");\n\n\n\n\n\nconst renderMeals = async () => {\n  const meals = await (0,_getMeals_js__WEBPACK_IMPORTED_MODULE_0__.getMeals)(); // get Meals from API\n  const mealsCount = await (0,_getMeals_js__WEBPACK_IMPORTED_MODULE_0__.mealsLength)(); // get the number of meals\n  const likesNum = await (0,_handleLike_js__WEBPACK_IMPORTED_MODULE_1__.getLike)(); // get Likes from API\n\n  const numberOfMeals = document.querySelector('.meals-number');\n  const container = document.querySelector('.card-container');\n\n  let item = '';\n\n  meals.forEach((meal, ind) => {\n    item += `\n      <li class=\"card\" id=\"${meal.idMeal}\">\n        <img class=\"card__img\" src=\"${meal.strMealThumb}\" alt=\"food-img\">\n        <h3> ${meal.strMeal} </h3>\n        <h4>Likes (<span>${likesNum[ind].likes}</span>)\n        <img class=\"like-icon\" src=\"${_img_heart_svg__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"like-icon\"></h4>\n        <button type=\"button\" class=\"btn btn-details\">Details</button>\n      </li>\n    `;\n  });\n\n  numberOfMeals.insertAdjacentText('afterbegin', `(${mealsCount})`);\n  container.insertAdjacentHTML('beforeend', item);\n\n  (0,_handleModal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(meals);\n\n  const likes = document.querySelectorAll('.like-icon');\n  const span = document.querySelectorAll('h4>span');\n\n  likes.forEach((like, ind) => {\n    like.addEventListener('click', (e) => {\n      const { id } = e.target.parentNode.parentNode;\n      const oldLikes = Number(span[ind].textContent);\n      span[ind].textContent = oldLikes + 1;\n      (0,_handleLike_js__WEBPACK_IMPORTED_MODULE_1__.postLike)(id); // send data(likes) to API\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMeals);\n\n\n//# sourceURL=webpack:///./src/modules/renderMeals.js?");

/***/ }),

/***/ "./src/img/heart.svg":
/*!***************************!*\
  !*** ./src/img/heart.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"954506b3c1927bfa54dd.svg\";\n\n//# sourceURL=webpack:///./src/img/heart.svg?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;