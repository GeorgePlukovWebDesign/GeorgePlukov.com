webpackJsonp([0],[,,,,,,,,,,,,,,,,function(e,t,n){function r(e){n(54)}var i=n(5)(n(46),n(60),r,null,null);e.exports=i.exports},,function(e,t,n){"use strict";function r(e){return"[object Array]"===b.call(e)}function i(e){return"[object ArrayBuffer]"===b.call(e)}function o(e){return"undefined"!=typeof FormData&&e instanceof FormData}function s(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function c(e){return"number"==typeof e}function u(e){return void 0===e}function l(e){return null!==e&&"object"==typeof e}function A(e){return"[object Date]"===b.call(e)}function f(e){return"[object File]"===b.call(e)}function p(e){return"[object Blob]"===b.call(e)}function d(e){return"[object Function]"===b.call(e)}function h(e){return l(e)&&d(e.pipe)}function m(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function v(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function g(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function C(e,t){if(null!==e&&void 0!==e)if("object"==typeof e||r(e)||(e=[e]),r(e))for(var n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function B(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=B(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)C(arguments[n],e);return t}function x(e,t,n){return C(t,function(t,r){e[r]=n&&"function"==typeof t?y(t,n):t}),e}var y=n(24),w=n(43),b=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:i,isBuffer:w,isFormData:o,isArrayBufferView:s,isString:a,isNumber:c,isObject:l,isUndefined:u,isDate:A,isFile:f,isBlob:p,isFunction:d,isStream:h,isURLSearchParams:m,isStandardBrowserEnv:g,forEach:C,merge:B,extend:x,trim:v}},function(e,t,n){"use strict";(function(t){function r(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i=n(18),o=n(40),s={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(20):void 0!==t&&(e=n(20)),e}(),transformRequest:[function(e,t){return o(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(e){a.headers[e]={}}),i.forEach(["post","put","patch"],function(e){a.headers[e]=i.merge(s)}),e.exports=a}).call(t,n(44))},function(e,t,n){"use strict";var r=n(18),i=n(32),o=n(35),s=n(41),a=n(39),c=n(23),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(34);e.exports=function(e){return new Promise(function(t,l){var A=e.data,f=e.headers;r.isFormData(A)&&delete f["Content-Type"];var p=new XMLHttpRequest,d="onreadystatechange",h=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||a(e.url)||(p=new window.XDomainRequest,d="onload",h=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var m=e.auth.username||"",v=e.auth.password||"";f.Authorization="Basic "+u(m+":"+v)}if(p.open(e.method.toUpperCase(),o(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[d]=function(){if(p&&(4===p.readyState||h)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?p.response:p.responseText,o={data:r,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:e,request:p};i(t,l,o),p=null}},p.onerror=function(){l(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){l(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var g=n(37),C=(e.withCredentials||a(e.url))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;C&&(f[e.xsrfHeaderName]=C)}if("setRequestHeader"in p&&r.forEach(f,function(e,t){void 0===A&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),l(e),p=null)}),void 0===A&&(A=null),p.send(A)})}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";var r=n(31);e.exports=function(e,t,n,i,o){var s=new Error(e);return r(s,t,n,i,o)}},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){e.exports=n(26)},function(e,t,n){"use strict";function r(e){var t=new s(e),n=o(s.prototype.request,t);return i.extend(n,s.prototype,t),i.extend(n,t),n}var i=n(18),o=n(24),s=n(28),a=n(19),c=r(a);c.Axios=s,c.create=function(e){return r(i.merge(a,e))},c.Cancel=n(21),c.CancelToken=n(27),c.isCancel=n(22),c.all=function(e){return Promise.all(e)},c.spread=n(42),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new i(e),t(n.reason))})}var i=n(21);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var i=n(19),o=n(18),s=n(29),a=n(30),c=n(38),u=n(36);r.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),e=o.merge(i,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase(),e.baseURL&&!c(e.url)&&(e.url=u(e.baseURL,e.url));var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t,n){"use strict";function r(){this.handlers=[]}var i=n(18);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){i.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var i=n(18),o=n(33),s=n(22),a=n(19);e.exports=function(e){return r(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=i.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),i.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return r(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(r(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e}},function(e,t,n){"use strict";var r=n(23);e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";var r=n(18);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function i(e){for(var t,n,i=String(e),s="",a=0,c=o;i.charAt(0|a)||(c="=",a%1);s+=c.charAt(63&t>>8-a%1*8)){if((n=i.charCodeAt(a+=.75))>255)throw new r;t=t<<8|n}return s}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=i},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var i=n(18);e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(i.isURLSearchParams(t))o=t.toString();else{var s=[];i.forEach(t,function(e,t){null!==e&&void 0!==e&&(i.isArray(e)&&(t+="[]"),i.isArray(e)||(e=[e]),i.forEach(e,function(e){i.isDate(e)?e=e.toISOString():i.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))}))}),o=s.join("&")}return o&&(e+=(-1===e.indexOf("?")?"?":"&")+o),e}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(18);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,i,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";var r=n(18);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(i.setAttribute("href",t),t=i.href),i.setAttribute("href",t),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:"/"===i.pathname.charAt(0)?i.pathname:"/"+i.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a");return t=e(window.location.href),function(n){var i=r.isString(n)?e(n):n;return i.protocol===t.protocol&&i.host===t.host}}():function(){return function(){return!0}}()},function(e,t,n){"use strict";var r=n(18);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(18);e.exports=function(e){var t,n,i,o={};return e?(r.forEach(e.split("\n"),function(e){i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t&&(o[t]=o[t]?o[t]+", "+n:n)}),o):o}},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function o(e){if(A===clearTimeout)return clearTimeout(e);if((A===r||!A)&&clearTimeout)return A=clearTimeout,clearTimeout(e);try{return A(e)}catch(t){try{return A.call(null,e)}catch(t){return A.call(this,e)}}}function s(){h&&p&&(h=!1,p.length?d=p.concat(d):m=-1,d.length&&a())}function a(){if(!h){var e=i(s);h=!0;for(var t=d.length;t;){for(p=d,d=[];++m<t;)p&&p[m].run();m=-1,t=d.length}p=null,h=!1,o(e)}}function c(e,t){this.fun=e,this.array=t}function u(){}var l,A,f=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{A="function"==typeof clearTimeout?clearTimeout:r}catch(e){A=r}}();var p,d=[],h=!1,m=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new c(e,t)),1!==d.length||h||i(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.prependListener=u,f.prependOnceListener=u,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(25),i=n.n(r);t.default={name:"app",data:function(){return{current_active:-1,continue:!1,positions:{},gallery:{},projects:{}}},created:function(){var e=this;i.a.get("https://georgeplukov.firebaseio.com/positions.json").then(function(t){e.positions=t.data}).catch(function(t){e.errors.push(t)}),i.a.get("https://georgeplukov.firebaseio.com/gallery.json").then(function(t){e.gallery=t.data}).catch(function(t){e.errors.push(t)}),i.a.get("https://georgeplukov.firebaseio.com/projects.json").then(function(t){e.projects=t.data}).catch(function(t){e.errors.push(t)})},methods:{mouseOver:function(e){this.current_active=e},mouseLeaveButton:function(e){setTimeout(function(){this.current_active=-1},50)},mouseLeave:function(e){this.current_active=-1}}}},,,,function(e,t,n){t=e.exports=n(13)(!0),t.push([e.i,".block{margin-top:28vh;margin-left:17%}.name{font-size:5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.menu{margin-left:10px}a{text-decoration:none;color:#333;padding-left:4px;padding-right:4px;font-size:1.2em}.lato-hairline{font-weight:100}.lato-hairline,.lato-norm{font-family:Lato,sans-serif}.lato-norm{font-weight:300}.raleway{font-family:Raleway,sans-serif;font-weight:400}iew{height:30vh}line{//:grey;stroke:grey;stroke-width:1}.lighter{stroke-width:.5}.slide-fade-enter-active{transition:all .4s}.slide-fade-leave-active{transition:all .2s}.slide-fade-enter{-webkit-transform:translateY(40%);transform:translateY(40%);opacity:0}.slide-fade-leave-to{opacity:0}.item-box{display:inline-block;//:10vh;height:auto;width:25%;//:150px;margin-left:10px;margin-right:5px;border:1px solid #d1d5da;border-radius:10px}.preview-image{border:1px solid #d1d5da;min-width:26%;border-radius:10px;min-height:200px;min-width:200px}.preview-image,.proj-card{display:inline-block;height:auto;max-width:26%;margin-left:10px;margin-right:5px}.proj-card{border:1px solid #d1d5da;min-height:120px;min-width:120px;border:1px solid #d3d3d3;border-radius:10px;padding:15px}.proj-title{display:inline-block;width:80%;color:#0366d6;font-family:Arial}.proj-img{display:inline-block;width:50%;height:auto}.languages{float:right;vertical-align:middle;display:inline-block;color:#333;font-family:Arial}.proj-desc{margin-top:8px;margin-bottom:16px;display:inline-block;font-family:sans-serif;line-height:1.5;font-size:12px;color:#586069}.github-icon{width:30px;height:30px;cursor:pointer}.proj-links{color:#586069}.underline:hover{text-decoration:underline;color:#0366d6}.font-bold{font-weight:600}","",{version:3,sources:["/Users/GeorgePlukov/Documents/Development/GeorgePlukov.com/src/components/Index.vue"],names:[],mappings:"AACA,OACE,gBAAiB,AACjB,eAAiB,CAClB,AACD,MACE,cAAe,AACf,yBAA0B,AACvB,sBAAuB,AACtB,qBAAsB,AAClB,gBAAkB,CAC3B,AACD,MACE,gBAAkB,CACnB,AACD,EACE,qBAAsB,AACtB,WAAY,AACZ,iBAAkB,AAClB,kBAAmB,AACnB,eAAiB,CAClB,AACD,eAEE,eAAiB,CAClB,AACD,0BAHE,2BAAgC,CAMjC,AAHD,WAEE,eAAiB,CAClB,AACD,SACE,+BAAmC,AACnC,eAAiB,CAClB,AACD,IACE,WAAa,CACd,AACD,KACE,QAAc,AACd,YAAa,AACb,cAAgB,CACjB,AACD,SACE,eAAkB,CACnB,AACD,yBACE,kBAAqB,CACtB,AACD,yBACE,kBAAqB,CACtB,AACD,kBACE,kCAAmC,AAC3B,0BAA2B,AACnC,SAAW,CACZ,AACD,qBACE,SAAW,CACZ,AACD,UACE,qBAAsB,AAAC,QAAoB,AAC3C,YAAa,AACb,UAAW,AAAC,SAAqB,AACjC,iBAAkB,AAClB,iBAAkB,AAClB,yBAA0B,AAC1B,kBAAoB,CACrB,AACD,eACE,yBAA0B,AAI1B,cAAe,AAEf,mBAAoB,AAGpB,iBAAkB,AAClB,eAAgB,CACjB,AAYD,0BAtBE,qBAAsB,AACtB,YAAa,AACb,cAAe,AAIf,iBAAkB,AAClB,gBAAkB,CA4BnB,AAbD,WACE,yBAA0B,AAK1B,iBAAkB,AAClB,gBAAiB,AACjB,yBAA4B,AAC5B,mBAAoB,AAGpB,YAAc,CACf,AACD,YACE,qBAAsB,AACtB,UAAU,AACV,cAAe,AACf,iBAAmB,CACpB,AACD,UACE,qBAAsB,AAEtB,UAAU,AACV,WAAY,CACb,AACD,WACE,YAAY,AACZ,sBAAuB,AACvB,qBAAsB,AAEtB,WAAW,AACX,iBAAmB,CACpB,AACD,WACE,eAAgB,AAChB,mBAAoB,AACpB,qBAAsB,AACtB,uBAAwB,AACxB,gBAAiB,AACjB,eAAgB,AAChB,aAAe,CAChB,AACD,aACE,WAAW,AACX,YAAa,AACb,cAAgB,CACjB,AACD,YACE,aAAe,CAChB,AACD,iBACE,0BAA2B,AAC3B,aAAe,CAChB,AACD,WACE,eAAiB,CAClB",file:"Index.vue",sourcesContent:["\n.block {\n  margin-top: 28vh;\n  margin-left: 17%;\n}\n.name {\n  font-size: 5em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.menu {\n  margin-left: 10px;\n}\na {\n  text-decoration: none;\n  color: #333;\n  padding-left: 4px;\n  padding-right: 4px;\n  font-size: 1.2em;\n}\n.lato-hairline {\n  font-family: 'Lato', sans-serif;\n  font-weight: 100;\n}\n.lato-norm {\n  font-family: 'Lato', sans-serif;\n  font-weight: 300;\n}\n.raleway {\n  font-family: 'Raleway', sans-serif;\n  font-weight: 400;\n}\niew {\n  height: 30vh;\n}\nline {\n  // color:grey;\n  stroke: grey;\n  stroke-width: 1;\n}\n.lighter {\n  stroke-width: 0.5;\n}\n.slide-fade-enter-active {\n  transition: all 0.4s;\n}\n.slide-fade-leave-active {\n  transition: all 0.2s;\n}\n.slide-fade-enter {\n  -webkit-transform: translateY(40%);\n          transform: translateY(40%);\n  opacity: 0;\n}\n.slide-fade-leave-to {\n  opacity: 0;\n}\n.item-box {\n  display: inline-block; // max-height: 10vh;\n  height: auto;\n  width: 25%; // max-height: 150px;\n  margin-left: 10px;\n  margin-right: 5px;\n  border: 1px solid #d1d5da;\n  border-radius: 10px;\n}\n.preview-image{\n  border: 1px solid #d1d5da;\n  display: inline-block;\n  height: auto;\n  max-width: 26%;\n  min-width: 26%;\n\n  border-radius: 10px;\n  margin-left: 10px;\n  margin-right: 5px;\n  min-height: 200px;\n  min-width:200px;\n}\n\n\n/*\n\n\n\n\n  icon  color: #586069;\n  titile   color: #0366d6;\n*/\n/*#REPLACE WITH FLEXBOX*/\n.proj-card{\n  border: 1px solid #d1d5da;\n  display: inline-block;\n  height: auto;\n  max-width: 26%;\n\n  min-height: 120px;\n  min-width: 120px;\n  border: 1px solid lightgrey;\n  border-radius: 10px;\n  margin-left: 10px;\n  margin-right: 5px;\n  padding: 15px;\n}\n.proj-title {\n  display: inline-block;\n  width:80%;\n  color: #0366d6;\n  font-family: Arial;\n}\n.proj-img{\n  display: inline-block;\n\n  width:50%;\n  height:auto;\n}\n.languages{\n  float:right;\n  vertical-align: middle;\n  display: inline-block;\n  /*font-size:*/\n  color:#333;\n  font-family: Arial;\n}\n.proj-desc {\n  margin-top: 8px;\n  margin-bottom: 16px;\n  display: inline-block;\n  font-family: sans-serif;\n  line-height: 1.5;\n  font-size: 12px;\n  color: #586069;\n}\n.github-icon{\n  width:30px;\n  height: 30px;\n  cursor: pointer;\n}\n.proj-links {\n  color: #586069;\n}\n.underline:hover {\n  text-decoration: underline;\n  color: #0366d6;\n}\n.font-bold {\n  font-weight: 600;\n}\n.gallery {\n}\n"],sourceRoot:""}])},,,,function(e,t,n){var r=n(50);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(14)("7747a64a",r,!0)},,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEzMjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQTQxNEFCQzk5QTExMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTMwOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTMxOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+R7ClIwAADR5JREFUeNrsnQuw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"},,,function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"block"},[e._m(0),e._v(" "),r("div",{staticClass:"menu raleway"},[r("router-link",{attrs:{to:"/gallery"},on:{mouseleave:function(t){e.mouseLeave(0)}},nativeOn:{mouseover:function(t){e.mouseOver(0)}}},[e._v("Gallery")]),e._v(" "),r("router-link",{attrs:{to:"/positions"},on:{mouseleave:function(t){e.mouseLeave(1)}},nativeOn:{mouseover:function(t){e.mouseOver(1)}}},[e._v("Positions")]),e._v(" "),r("router-link",{attrs:{to:"/projects"},on:{mouseleave:function(t){e.mouseLeave(2)}},nativeOn:{mouseover:function(t){e.mouseOver(2)}}},[e._v("Projects")])],1),e._v(" "),r("transition",{attrs:{name:"slide-fade"}},[-1!=e.current_active?r("div",{staticClass:"preview"},[r("div",{staticClass:"lineblock"},[r("svg",{directives:[{name:"show",rawName:"v-show",value:0==e.current_active,expression:"current_active == 0"}],staticClass:"line",attrs:{id:"line-gallery",height:"10",width:"100%"}},[r("line",{attrs:{x1:"0px",y1:"10px",x2:"2em",y2:"10px"}}),e._v(" "),r("line",{staticClass:"lighter",attrs:{x1:"2em",y1:"10px",x2:"2.5em",y2:"0px"}}),e._v(" "),r("line",{staticClass:"lighter",attrs:{x1:"2.5em",y1:"0px",x2:"3em",y2:"10px"}}),e._v(" "),r("line",{attrs:{x1:"3em",y1:"10px",x2:"83%",y2:"10px"}})]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:0==e.current_active,expression:"current_active == 0"}],on:{mouseleave:function(t){e.mouseLeave(0)}}},[e._l(this.gallery,function(t){return[t.feature?r("img",{staticClass:"preview-image",attrs:{src:t.url,alt:t.title}}):e._e()]})],2),e._v(" "),r("svg",{directives:[{name:"show",rawName:"v-show",value:1==e.current_active,expression:"current_active == 1"}],staticClass:"line",attrs:{id:"line-blog",height:"10",width:"100%"}},[r("line",{attrs:{x1:"0px",y1:"10px",x2:"7em",y2:"10px"}}),e._v(" "),r("line",{staticClass:"lighter",attrs:{x1:"7em",y1:"10px",x2:"7.5em",y2:"0px"}}),e._v(" "),r("line",{staticClass:"lighter",attrs:{x1:"7.5em",y1:"0px",x2:"8em",y2:"10px"}}),e._v(" "),r("line",{attrs:{x1:"8em",y1:"10px",x2:"83%",y2:"10px"}})]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:1==e.current_active,expression:"current_active == 1"}],on:{mouseleave:function(t){e.mouseLeave(1)}}},[e._l(this.positions,function(e){})],2),e._v(" "),r("svg",{directives:[{name:"show",rawName:"v-show",value:2==e.current_active,expression:"current_active == 2"}],staticClass:"line",attrs:{id:"line-blog",height:"10",width:"100%"}},[r("line",{attrs:{x1:"0px",y1:"10px",x2:"13em",y2:"10px"}}),e._v(" "),r("line",{staticClass:"lighter",attrs:{x1:"13em",y1:"10px",x2:"13.5em",y2:"0px"}}),e._v(" "),r("line",{staticClass:"lighter",attrs:{x1:"13.5em",y1:"0px",x2:"14em",y2:"10px"}}),e._v(" "),r("line",{attrs:{x1:"14em",y1:"10px",x2:"83%",y2:"10px"}})]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:2==e.current_active,expression:"current_active == 2"}],on:{mouseleave:function(t){e.mouseLeave(2)}}},[e._l(e.projects,function(t){return[t.feature?r("div",{staticClass:"proj-card"},[r("div",{staticClass:"proj-title"},[e._v("\n                  "+e._s(t.title)+"\n                ")]),e._v(" "),r("div",{staticClass:"proj-desc"},[e._v("\n                  "+e._s(t.description)+"\n                ")]),e._v(" "),r("a",{attrs:{href:t.github_url}},[r("img",{staticClass:"github-icon",attrs:{src:n(57),alt:"github icon"}})]),e._v(" "),r("div",{staticClass:"languages"},[e._v("\n                  "+e._s(t.languages)+"\n                ")])]):e._e()]})],2)])]):e._e()])],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"name"},[n("span",{staticClass:"lato-hairline"},[e._v("George ")]),n("span",{staticClass:"lato-norm"},[e._v("Plukov")])])}]}}]);
//# sourceMappingURL=0.20ed33b5cd366ac27174.js.map