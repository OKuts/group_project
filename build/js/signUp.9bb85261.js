!function(){"use strict";var e,r={7394:function(e,r,t){t(7042),t(1539),t(8309),t(1038),t(8783),t(2526),t(1817),t(2165),t(6992),t(3948),t(8674),t(5666),t(3371),t(9714);var n=t(8901),o=t.n(n),a="https://lab.lectrum.io/js2/api/crm",i=t(1581),c=t.n(i),u=t(5477),s=new(c())({allErrors:!0});u(s);var f=s.compile({$schema:"http://json-schema.org/draft-07/schema#",title:"Login",description:"Schema for sign up entity",type:"object",properties:{name:{type:"string"},email:{type:"string",format:"email"},phone:{type:"string"},password:{type:"string",minLength:8}},additionalProperties:!1,required:["name","email","phone","password"]});function l(e,r,t,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void t(e)}c.done?r(u):Promise.resolve(u).then(n,o)}var p=Object.freeze({signUp:{fetch:function(e){function r(r){return e.apply(this,arguments)}return r.toString=function(){return e.toString()},r}(function(){var e,r=(e=regeneratorRuntime.mark((function e(r){var t,n,i,c,u,s,l,p,h,m,v,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.name,n=r.email,i=r.phone,c=r.password,s=f(u={name:t,email:n,phone:i,password:c}),console.log(t,n,i,c),s){e.next=9;break}throw l="Форма заполнена не верно. Проверьте правильность заполнения полей, а так же убедитесь что пароль не короче 8 символов",o().error(l,"Ошибка!"),console.error(f.errors),new Error(l);case 9:return e.next=11,fetch("".concat(a,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(u)});case 11:if((p=e.sent).ok){e.next=19;break}return e.next=15,p.json();case 15:throw h=e.sent,m=h.message,o().error(m,"Ошибка!"),new Error(m);case 19:return e.next=21,p.json();case 21:v=e.sent,d=v.data,localStorage.setItem("token",d),window.location.href="dashboard.html";case 25:case"end":return e.stop()}}),e)})),function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function i(e){l(a,n,o,i,c,"next",e)}function c(e){l(a,n,o,i,c,"throw",e)}i(void 0)}))});return function(e){return r.apply(this,arguments)}}())}});function h(e,r,t,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void t(e)}c.done?r(u):Promise.resolve(u).then(n,o)}function m(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function i(e){h(a,n,o,i,c,"next",e)}function c(e){h(a,n,o,i,c,"throw",e)}i(void 0)}))}}var v=Object.freeze({verifyToken:function(e){return m(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(a,"/auth"),{method:"GET",headers:{"x-token":e}});case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)})))()},getUserName:function(e){return m(regeneratorRuntime.mark((function r(){var t,n,i,c,u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(a,"/profile"),{method:"GET",headers:{"x-token":e}});case 2:if((t=r.sent).ok){r.next=12;break}return r.next=6,t.json();case 6:throw n=r.sent,i=n.message,o().error(i,"Ошибка!"),localStorage.removeItem("token"),location.href="/",new Error(i);case 12:return r.next=14,t.json();case 14:return c=r.sent,u=c.data,r.abrupt("return",u);case 17:case"end":return r.stop()}}),r)})))()}});function d(e,r,t,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void t(e)}c.done?r(u):Promise.resolve(u).then(n,o)}function g(e,r,t,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void t(e)}c.done?r(u):Promise.resolve(u).then(n,o)}function y(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}!function(){var e,r=(e=regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=localStorage.getItem("token"))){e.next=14;break}return e.prev=2,e.next=5,v.verifyToken(r);case 5:"/"!==location.pathname&&"/sign-up.html"!==location.pathname||(location.href="/dashboard.html"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),localStorage.removeItem("token"),location.href="/";case 12:e.next=15;break;case 14:"/"!==location.pathname&&"/sign-up.html"!==location.pathname&&(location.href="/");case 15:case"end":return e.stop()}}),e,null,[[2,8]])})),function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function i(e){d(a,n,o,i,c,"next",e)}function c(e){d(a,n,o,i,c,"throw",e)}i(void 0)}))});return function(){return r.apply(this,arguments)}}()();var w,b=document.querySelectorAll(".form form input"),x=document.querySelector(".form form"),k=function(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return y(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(e,r):void 0}}(e))){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw a}}}}(b);try{for(k.s();!(w=k.n()).done;){var j=w.value;"submit"!==j.type&&j.addEventListener("input",(function(e){e.target.value&&e.target.value.length?e.target.classList.add("filled"):e.target.classList.remove("filled")}))}}catch(e){k.e(e)}finally{k.f()}x.addEventListener("submit",function(){var e,r=(e=regeneratorRuntime.mark((function e(r){var t,n,o,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),t=new FormData(r.target),n=t.get("name"),o=t.get("email"),a=t.get("phone"),i=t.get("password"),e.next=8,p.signUp.fetch({name:n,phone:a,email:o,password:i});case 8:case"end":return e.stop()}}),e)})),function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function i(e){g(a,n,o,i,c,"next",e)}function c(e){g(a,n,o,i,c,"throw",e)}i(void 0)}))});return function(e){return r.apply(this,arguments)}}())}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={exports:{}};return r[e].call(a.exports,a,a.exports,n),a.exports}n.m=r,n.amdD=function(){throw new Error("define cannot be used indirect")},e=[],n.O=function(r,t,o,a){if(!t){var i=1/0;for(f=0;f<e.length;f++){t=e[f][0],o=e[f][1],a=e[f][2];for(var c=!0,u=0;u<t.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](t[u])}))?t.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(f--,1);var s=o();void 0!==s&&(r=s)}}return r}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[t,o,a]},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,{a:r}),r},n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e={150:0,901:0};n.O.j=function(r){return 0===e[r]};var r=function(r,t){var o,a,i=t[0],c=t[1],u=t[2],s=0;for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var f=u(n);for(r&&r(t);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[i[s]]=0;return n.O(f)},t=self.webpackChunkjs_personal_projects=self.webpackChunkjs_personal_projects||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var o=n.O(void 0,[773,165,984,901],(function(){return n(7394)}));o=n.O(o)}();