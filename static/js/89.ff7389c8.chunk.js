"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[89],{89:function(e,n,t){t.r(n);var r=t(861),c=t(439),o=t(757),i=t.n(o),a=t(791),u=t(689),s=t(184);n.default=function(){var e=(0,a.useState)([]),n=(0,c.Z)(e,2),t=n[0],o=n[1],f=(0,u.bx)();(0,a.useEffect)((function(){l(),console.log(t)}),[f]);var l=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(f,"/reviews?api_key=").concat("ec14b12534cfa5aa544b4a61898160f3"));case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,o(t.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return(0,s.jsx)("div",{children:t.length>0?(0,s.jsx)("ul",{children:t.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsx)("p",{children:e.author}),(0,s.jsx)("p",{children:e.content})]},e.id)}))}):(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:"No reviews yet"})})})}},861:function(e,n,t){function r(e,n,t,r,c,o,i){try{var a=e[o](i),u=a.value}catch(s){return void t(s)}a.done?n(u):Promise.resolve(u).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,o){var i=e.apply(n,t);function a(e){r(i,c,o,a,u,"next",e)}function u(e){r(i,c,o,a,u,"throw",e)}a(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=89.ff7389c8.chunk.js.map