!function(){var e,t={521:function(e,t,n){"use strict";n(1539),n(8674),n(5666),n(3371);var r=n(8901),o=n.n(r),i="https://lab.lectrum.io/js2/api/crm";function a(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function s(e){a(i,r,o,s,c,"next",e)}function c(e){a(i,r,o,s,c,"throw",e)}s(void 0)}))}}var c=Object.freeze({verifyToken:function(e){return s(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/auth"),{method:"GET",headers:{"x-token":e}});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))()},getUserName:function(e){return s(regeneratorRuntime.mark((function t(){var n,r,a,s,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/profile"),{method:"GET",headers:{"x-token":e}});case 2:if((n=t.sent).ok){t.next=12;break}return t.next=6,n.json();case 6:throw r=t.sent,a=r.message,o().error(a,"Ошибка!"),localStorage.removeItem("token"),location.href="/",new Error(a);case 12:return t.next=14,n.json();case 14:return s=t.sent,c=s.data,t.abrupt("return",c);case 17:case"end":return t.stop()}}),t)})))()}});function u(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}var l=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("token"))){e.next=14;break}return e.prev=2,e.next=5,c.verifyToken(t);case 5:"/"!==location.pathname&&"/sign-up.html"!==location.pathname||(location.href="/dashboard.html"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),localStorage.removeItem("token"),location.href="/";case 12:e.next=15;break;case 14:"/"!==location.pathname&&"/sign-up.html"!==location.pathname&&(location.href="/");case 15:case"end":return e.stop()}}),e,null,[[2,8]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){u(i,r,o,a,s,"next",e)}function s(e){u(i,r,o,a,s,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();function d(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}n(8309);var f=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("token"))){e.next=14;break}return e.prev=2,e.next=5,c.getUserName(t);case 5:n=e.sent,localStorage.setItem("profile",JSON.stringify(n)),document.querySelector(".profile__name").textContent=n.name,document.querySelector(".profile__email").textContent=n.email,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){d(i,r,o,a,s,"next",e)}function s(e){d(i,r,o,a,s,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();l(),document.querySelector(".logout__btn").onclick=function(){localStorage.removeItem("token"),location.href="/"},f()},1156:function(e,t,n){var r=n(5656),o=n(8006).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return a&&"[object Window]"==i.call(e)?function(e){try{return o(e)}catch(e){return a.slice()}}(e):o(r(e))}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},8901:function(e,t,n){var r,o;n.amdD,r=[n(9755)],void 0===(o=function(e){return function(){var t,n,r,o=0,i={clear:function(n,r){var o=l();t||a(o),s(n,o,r)||function(n){for(var r=t.children(),o=r.length-1;o>=0;o--)s(e(r[o]),n)}(o)},remove:function(n){var r=l();t||a(r),n&&0===e(":focus",n).length?d(n):t.children().length&&t.remove()},error:function(e,t,n){return u({type:"error",iconClass:l().iconClasses.error,message:e,optionsOverride:n,title:t})},getContainer:a,info:function(e,t,n){return u({type:"info",iconClass:l().iconClasses.info,message:e,optionsOverride:n,title:t})},options:{},subscribe:function(e){n=e},success:function(e,t,n){return u({type:"success",iconClass:l().iconClasses.success,message:e,optionsOverride:n,title:t})},version:"2.1.4",warning:function(e,t,n){return u({type:"warning",iconClass:l().iconClasses.warning,message:e,optionsOverride:n,title:t})}};return i;function a(n,r){return n||(n=l()),(t=e("#"+n.containerId)).length||r&&(t=function(n){return(t=e("<div/>").attr("id",n.containerId).addClass(n.positionClass)).appendTo(e(n.target)),t}(n)),t}function s(t,n,r){var o=!(!r||!r.force)&&r.force;return!(!t||!o&&0!==e(":focus",t).length||(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){d(t)}}),0))}function c(e){n&&n(e)}function u(n){var i=l(),s=n.iconClass||i.iconClass;if(void 0!==n.optionsOverride&&(i=e.extend(i,n.optionsOverride),s=n.optionsOverride.iconClass||s),!function(e,t){if(e.preventDuplicates){if(t.message===r)return!0;r=t.message}return!1}(i,n)){o++,t=a(i,!0);var u=null,f=e("<div/>"),p=e("<div/>"),m=e("<div/>"),v=e("<div/>"),h=e(i.closeHtml),g={intervalId:null,hideEta:null,maxHideTime:null},w={toastId:o,state:"visible",startTime:new Date,options:i,map:n};return n.iconClass&&f.addClass(i.toastClass).addClass(s),function(){if(n.title){var e=n.title;i.escapeHtml&&(e=b(n.title)),p.append(e).addClass(i.titleClass),f.append(p)}}(),function(){if(n.message){var e=n.message;i.escapeHtml&&(e=b(n.message)),m.append(e).addClass(i.messageClass),f.append(m)}}(),i.closeButton&&(h.addClass(i.closeClass).attr("role","button"),f.prepend(h)),i.progressBar&&(v.addClass(i.progressClass),f.prepend(v)),i.rtl&&f.addClass("rtl"),i.newestOnTop?t.prepend(f):t.append(f),function(){var e="";switch(n.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}f.attr("aria-live",e)}(),f.hide(),f[i.showMethod]({duration:i.showDuration,easing:i.showEasing,complete:i.onShown}),i.timeOut>0&&(u=setTimeout(C,i.timeOut),g.maxHideTime=parseFloat(i.timeOut),g.hideEta=(new Date).getTime()+g.maxHideTime,i.progressBar&&(g.intervalId=setInterval((function(){var e=(g.hideEta-(new Date).getTime())/g.maxHideTime*100;v.width(e+"%")}),10))),i.closeOnHover&&f.hover((function(){clearTimeout(u),g.hideEta=0,f.stop(!0,!0)[i.showMethod]({duration:i.showDuration,easing:i.showEasing})}),(function(){(i.timeOut>0||i.extendedTimeOut>0)&&(u=setTimeout(C,i.extendedTimeOut),g.maxHideTime=parseFloat(i.extendedTimeOut),g.hideEta=(new Date).getTime()+g.maxHideTime)})),!i.onclick&&i.tapToDismiss&&f.click(C),i.closeButton&&h&&h.click((function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&!0!==e.cancelBubble&&(e.cancelBubble=!0),i.onCloseClick&&i.onCloseClick(e),C(!0)})),i.onclick&&f.click((function(e){i.onclick(e),C()})),c(w),i.debug&&console&&console.log(w),f}function b(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function C(t){var n=t&&!1!==i.closeMethod?i.closeMethod:i.hideMethod,r=t&&!1!==i.closeDuration?i.closeDuration:i.hideDuration,o=t&&!1!==i.closeEasing?i.closeEasing:i.hideEasing;if(!e(":focus",f).length||t)return clearTimeout(g.intervalId),f[n]({duration:r,easing:o,complete:function(){d(f),clearTimeout(u),i.onHidden&&"hidden"!==w.state&&i.onHidden(),w.state="hidden",w.endTime=new Date,c(w)}})}}function l(){return e.extend({},{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1},i.options)}function d(e){t||(t=a()),e.is(":visible")||(e.remove(),e=null,0===t.children().length&&(t.remove(),r=void 0))}}()}.apply(t,r))||(e.exports=o)}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}r.m=t,r.amdD=function(){throw new Error("define cannot be used indirect")},e=[],r.O=function(t,n,o,i){if(!n){var a=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],i=e[l][2];for(var s=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={348:0,901:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,a=n[0],s=n[1],c=n[2],u=0;for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var l=c(r);for(t&&t(n);u<a.length;u++)i=a[u],r.o(e,i)&&e[i]&&e[i][0](),e[a[u]]=0;return r.O(l)},n=self.webpackChunkjs_personal_projects=self.webpackChunkjs_personal_projects||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[773,901],(function(){return r(521)}));o=r.O(o)}();