"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[97],{97:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(861),i=t(439),c=t(757),s=t.n(c),a=t(791),o=t(689),l=t(87),u="movieDetails_movieImg__kDVXP",h="movieDetails_goBackBtn__BqxgE",v="movieDetails_movieDetails__dmKh1",d=t(184),p=function(){var e=(0,o.UO)().id,n=(0,a.useState)(null),t=(0,i.Z)(n,2),c=t[0],p=t[1],m=(0,o.s0)();(0,a.useEffect)((function(){f()}),[e]);var f=function(){var n=(0,r.Z)(s().mark((function n(){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("ec14b12534cfa5aa544b4a61898160f3"));case 3:return t=n.sent,n.next=6,t.json();case 6:r=n.sent,p(r),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.error("Error:",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();return(0,d.jsxs)("div",{className:v,children:[(0,d.jsx)("div",{children:(0,d.jsx)("button",{className:h,onClick:function(){m(-1)},children:"Go Back"})}),(0,d.jsxs)("div",{children:[c&&(0,d.jsx)("img",{className:u,src:"https://image.tmdb.org/t/p/w500/".concat(c.poster_path),alt:c.title}),c?(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{children:c.title}),(0,d.jsxs)("h2",{children:["Popularity: ",c.popularity]}),(0,d.jsx)("h2",{children:"Overview:"}),(0,d.jsx)("p",{children:c.overview}),(0,d.jsx)("h2",{children:"Genres:"}),(0,d.jsx)("p",{children:c.genres.map((function(e){return e.name})).join(", ")})]}):(0,d.jsx)("p",{children:"Loading..."})]}),(0,d.jsx)("nav",{children:(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(l.rU,{to:{pathname:"movies/".concat(e,"/cast")},children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(l.rU,{to:{pathname:"movies/".concat(e,"/reviews")},children:"Reviews"})})]})}),(0,d.jsx)(o.j3,{context:e})]})}},861:function(e,n,t){function r(e,n,t,r,i,c,s){try{var a=e[c](s),o=a.value}catch(l){return void t(l)}a.done?n(o):Promise.resolve(o).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,c){var s=e.apply(n,t);function a(e){r(s,i,c,a,o,"next",e)}function o(e){r(s,i,c,a,o,"throw",e)}a(void 0)}))}}t.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=97.94ed4c3d.chunk.js.map