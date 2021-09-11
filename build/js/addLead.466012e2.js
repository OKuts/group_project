!function(){"use strict";var e,t={9905:function(e,t,n){n(1539),n(8674),n(5666),n(3371),n(2222);var r=n(8901),a=n.n(r),o="https://lab.lectrum.io/js2/api/crm";function c(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){c(o,r,a,i,u,"next",e)}function u(e){c(o,r,a,i,u,"throw",e)}i(void 0)}))}}var u,s,l,f,d,v=Object.freeze({addLead:(d=i(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/leads"),{method:"POST",headers:{"Content-Type":"application/json","x-token":t},body:n});case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,c=a.data,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)}))),function(e,t){return d.apply(this,arguments)}),loadPriorities:(f=i(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/settings/tags"),{headers:{"x-token":t}});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)}))),function(e){return f.apply(this,arguments)}),loadClients:(l=i(regeneratorRuntime.mark((function e(t,n,r){var a,c,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/clients?limit=").concat(n,"&page=").concat(r),{headers:{"x-token":t}});case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,i=c.data,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)}))),function(e,t,n){return l.apply(this,arguments)}),loadUsers:(s=i(regeneratorRuntime.mark((function e(t,n,r){var a,c,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/users?limit=").concat(n,"&page=").concat(r),{headers:{"x-token":t}});case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,i=c.data,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)}))),function(e,t,n){return s.apply(this,arguments)}),loadLeads:(u=i(regeneratorRuntime.mark((function e(t,n,r){var a,c,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/leads?limit=").concat(n,"&page=").concat(r),{headers:{"x-token":t}});case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,i=c.data,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)}))),function(e,t,n){return u.apply(this,arguments)})}),p=(n(4747),n(8309),n(7327),n(3210),function(e,t,n){var r=t.querySelector("ul");e.forEach((function(e){r.insertAdjacentHTML("beforeend",'\n        <li data-hash="'.concat(e.hash,'">').concat(e.name,"</li>\n    "))})),n.onclick=function(){t.classList.toggle("open")},r.onclick=function(r){var a=r.target.dataset.hash,o=r.target.textContent,c=e.filter((function(e){return e.hash===a}))[0];n.value=o.trim(),n.dataset.hash=a,t.classList.remove("open"),U.value=c.company,z.value=c.phone,Z.value=c.email,G.value=c.comment}});function h(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}var m=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.loadClients(t,5,1);case 3:n=e.sent,r=n.docs,p(r,I,N),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){h(o,r,a,c,i,"next",e)}function i(e){h(o,r,a,c,i,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}();function g(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}var x=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.loadUsers(t,5,1);case 3:n=e.sent,r=n.docs,a=A.querySelector("ul"),r.forEach((function(e){a.insertAdjacentHTML("beforeend",'\n        <li data-hash="'.concat(e.hash,'">\n            <img src="img/icon/ava-empty.svg" alt="" class="executor__img}">\n            ').concat(e.name,"\n        </li>\n    "))})),B(A,a,D),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){g(o,r,a,c,i,"next",e)}function i(e){g(o,r,a,c,i,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}();function y(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){y(o,r,a,c,i,"next",e)}function i(e){y(o,r,a,c,i,"throw",e)}c(void 0)}))}}n(7042);var k=Object.freeze({verifyToken:function(e){return w(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"/auth"),{method:"GET",headers:{"x-token":e}});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))()},getUserName:function(e){return w(regeneratorRuntime.mark((function t(){var n,r,c,i,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"/profile"),{method:"GET",headers:{"x-token":e}});case 2:if((n=t.sent).ok){t.next=12;break}return t.next=6,n.json();case 6:throw r=t.sent,c=r.message,a().error(c,"Ошибка!"),localStorage.removeItem("token"),location.href="/",new Error(c);case 12:return t.next=14,n.json();case 14:return i=t.sent,u=i.data,t.abrupt("return",u);case 17:case"end":return t.stop()}}),t)})))()}});function b(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}var S=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("token"))){e.next=14;break}return e.prev=2,e.next=5,k.getUserName(t);case 5:n=e.sent,localStorage.setItem("profile",JSON.stringify(n)),document.querySelector(".profile__name").textContent=n.name,document.querySelector(".profile__email").textContent=n.email,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){b(o,r,a,c,i,"next",e)}function i(e){b(o,r,a,c,i,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}();function R(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}var C=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("token"))){e.next=14;break}return e.prev=2,e.next=5,k.verifyToken(t);case 5:"/"!==location.pathname&&"/sign-up.html"!==location.pathname||(location.href="/dashboard.html"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),localStorage.removeItem("token"),location.href="/";case 12:e.next=15;break;case 14:"/"!==location.pathname&&"/sign-up.html"!==location.pathname&&(location.href="/");case 15:case"end":return e.stop()}}),e,null,[[2,8]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){R(o,r,a,c,i,"next",e)}function i(e){R(o,r,a,c,i,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}(),j={"Высокий":"green","Низкий":"yellow","Срочный":"red"};function q(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}var P=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.loadPriorities(t);case 3:n=e.sent,r=L.querySelector("ul"),n.forEach((function(e){r.insertAdjacentHTML("beforeend",'\n        <li  data-hash="'.concat(e.hash,'">\n            <div class="priority__circle ').concat(j[e.name]||"blue",'"></div>').concat(e.name,"\n        </li>\n    "))})),B(L,r,T),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){q(o,r,a,c,i,"next",e)}function i(e){q(o,r,a,c,i,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}(),_=function(e,t,n){var r=t.querySelector("ul");e.forEach((function(e){r.insertAdjacentHTML("beforeend",'\n        <li data-hash="'.concat(e.hash,'">').concat(e.name||e.title,"</li>\n    "))})),t.firstElementChild.onclick=function(){t.classList.toggle("open")},r.onclick=function(e){var r=e.target.dataset.hash,a=e.target.textContent;n.value=a.trim(),n.dataset.hash=r,t.classList.remove("open")}},E=document.getElementById("addLeadForm"),O=E.querySelector("#resetForm"),L=E.querySelector("#priorityCont"),T=L.querySelector("#dealPriority"),A=E.querySelector("#executorCont"),D=A.querySelector("#dealExecutor"),I=E.querySelector("#clientsCont"),N=I.querySelector("#dealClient"),H=E.querySelector("#leadsCont"),M=H.querySelector("#dealSection"),F=E.querySelector("#deasDeadline"),U=E.querySelector("#dealCompany"),Z=E.querySelector("#dealMail"),z=E.querySelector("#dealTel"),G=E.querySelector("#dealClientComment"),J=E.querySelectorAll(".errorMessage"),B=function(e,t,n){e.firstElementChild.onclick=function(){e.classList.toggle("open")},t.onclick=function(t){var r=t.target.dataset.hash,a=t.target.textContent.trim();r||(r=t.target.parentElement.dataset.hash,a=t.target.parentElement.textContent);var o=n.previousElementSibling;"DIV"===o.tagName&&(o.removeAttribute("class"),o.setAttribute("class","priority__circle ".concat(j[a]||"blue"))),n.value=a.trim(),n.dataset.hash=r,e.classList.toggle("open")}};function V(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}var K=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.loadLeads(t,5,1);case 3:n=e.sent,r=n.docs,_(r,H,M),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){V(o,r,a,c,i,"next",e)}function i(e){V(o,r,a,c,i,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}();function Q(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}n(9653),n(9714);var W,X=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={dealName:n.get("dealName"),dealSection:n.get("dealSection"),dealExecutor:n.get("dealExecutor"),dealCost:Number(n.get("dealCost")),dealClient:n.get("dealClient")},e.prev=1,e.next=4,ee.validate(r,{abortEarly:!1});case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),Array.isArray(e.t0.inner)&&Y(e.t0.inner,J),e.abrupt("return",null);case 10:return o={title:r.dealName,amount:r.dealCost,pipeline:"new",status:n.get("dealPriority"),deadline:new Date(n.get("deasDeadline")).valueOf().toString(),comment:n.get("dealComment"),clientHash:n.get("clientHash")},e.prev=11,e.next=14,v.addLead(t,JSON.stringify(o));case 14:e.next=19;break;case 16:e.prev=16,e.t1=e.catch(11),a().error(e.t1.message,"Ошибка регистрации.");case 19:case 20:case"end":return e.stop()}}),e,null,[[1,6],[11,16]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){Q(o,r,a,c,i,"next",e)}function i(e){Q(o,r,a,c,i,"throw",e)}c(void 0)}))});return function(e,n){return t.apply(this,arguments)}}(),Y=(n(1249),n(2479),function(e,t){var n=Object.values(e).map((function(e){return e.path}));t.forEach((function(t){var r=t,a=r.dataset.path;if(void 0!==a){var o=n.indexOf(a);r.innerText=o>=0?e[o].message:""}}))}),$=n(9501),ee=$.Ry().shape({dealName:$.Z_().required("Не заполнено").min(5,"Минимум 5 символов"),dealSection:$.Z_().required("Не выбран тип сделки"),dealExecutor:$.Z_().required("Не выбран исполнитель"),dealCost:$.Rx("Неверный формат").min(.01,"Введите цену сделки"),dealClient:$.Z_().required("Не выбран клиент")});C(),document.querySelector(".logout__btn").onclick=function(){localStorage.removeItem("token"),location.href="/"},S(),P(W=localStorage.getItem("token")),m(W),x(W),K(W),F.valueAsDate=new Date,F.setAttribute("min",(new Date).toISOString().slice(0,10)),E.onsubmit=function(e){e.preventDefault();var t=new FormData(E);console.log(N.dataset.hash),t.append("clientHash",N.dataset.hash),X(W,t)},O.onclick=function(){E.reset(),F.value=(new Date).toISOString().slice(0,10)}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=t,r.amdD=function(){throw new Error("define cannot be used indirect")},e=[],r.O=function(t,n,a,o){if(!n){var c=1/0;for(l=0;l<e.length;l++){n=e[l][0],a=e[l][1],o=e[l][2];for(var i=!0,u=0;u<n.length;u++)(!1&o||c>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(i=!1,o<c&&(c=o));if(i){e.splice(l--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,a,o]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e={737:0,901:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,c=n[0],i=n[1],u=n[2],s=0;for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(u)var l=u(r);for(t&&t(n);s<c.length;s++)o=c[s],r.o(e,o)&&e[o]&&e[o][0](),e[c[s]]=0;return r.O(l)},n=self.webpackChunkjs_personal_projects=self.webpackChunkjs_personal_projects||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=r.O(void 0,[773,747,599,901],(function(){return r(9905)}));a=r.O(a)}();