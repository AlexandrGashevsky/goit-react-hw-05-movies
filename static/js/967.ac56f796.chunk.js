"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[967],{967:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(885),c=t(2791),a=t(501),i=t(6871),s=t(4635),o="MovieRender_container__it4s2",u="MovieRender_img_container__9XzDi",p="MovieRender_content_container__-VVgG",l=t(184);function h(e){var n=e.movie;return(0,l.jsxs)("div",{className:o,children:[(0,l.jsx)("div",{className:u,children:(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(n.poster_path),alt:n.title})}),(0,l.jsxs)("div",{className:p,children:[(0,l.jsx)("h2",{children:n.title}),(0,l.jsxs)("p",{children:["User score: ",10*n.vote_average,"%"]}),(0,l.jsx)("h3",{children:"Overview"}),(0,l.jsx)("p",{children:n.overview}),(0,l.jsx)("h3",{children:"Genres"}),n.genres.map((function(e){return"".concat(e.name," ")}))]})]})}var f=t(3033),d="ToPrevPageButton_toPrevPageBtn__cIyj5";function v(){return(0,l.jsx)("button",{className:d,children:"To previous page"})}function x(){var e,n,t=(0,i.UO)().movieId,o=(0,c.useState)(null),u=(0,r.Z)(o,2),p=u[0],d=u[1],x=(0,i.TH)();(0,c.useEffect)((function(){(0,s.Y5)(t).then((function(e){d(e.data)}))}),[t]);var m=null!==(e=null===x||void 0===x||null===(n=x.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.OL,{to:m,children:(0,l.jsx)(v,{})}),p&&(0,l.jsx)(h,{movie:p}),(0,l.jsx)("hr",{}),(0,l.jsx)("h3",{children:"Additional information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(a.OL,{to:"cast",state:{from:m},children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(a.OL,{to:"reviews",state:{from:m},children:"Reviews"})})]}),(0,l.jsx)("hr",{}),(0,l.jsx)(c.Suspense,{fallback:(0,l.jsx)(f.Z,{}),children:(0,l.jsx)(i.j3,{})})]})}},4635:function(e,n,t){t.d(n,{Hx:function(){return _},Y5:function(){return d},bI:function(){return h},rQ:function(){return p},xc:function(){return x}});var r=t(5861),c=t(7757),a=t.n(c),i=t(4569),s=t.n(i),o="b610c698525bd18a195a4333e81be16d",u="https://api.themoviedb.org/3";function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()("".concat(u,"/trending/movie/day?api_key=").concat(o,"&page=1"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()("".concat(u,"/search/movie?api_key=").concat(o,"&query=").concat(n,"&page=1"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()("".concat(u,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()("".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()("".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=967.ac56f796.chunk.js.map