"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[149],{713:function(n,t,e){e.d(t,{Df:function(){return u},MK:function(){return o},TP:function(){return i},jP:function(){return s},zv:function(){return a}});var r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDZmMmViODRlZmMxMzljMTk5OGU5YmRmYzZlMTU2ZiIsInN1YiI6IjY0MzhlODZmYWI2ODQ5MDBiZDAxM2E2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MX0hLc_etjm7AgFSwCGHbxJEsYMEfLi6jQCO-l5vNZc"}},c="https://api.themoviedb.org/3",u=function(){return fetch("".concat(c,"/trending/all/day?language=en-US"),r).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},o=function(n){return fetch("".concat(c,"/search/movie?query=").concat(n),r).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},i=function(n){return fetch("".concat(c,"/movie/").concat(n),r).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},a=function(n){return fetch("".concat(c,"/movie/").concat(n,"/credits"),r).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},s=function(n){return fetch("".concat(c,"/movie/").concat(n,"/reviews"),r).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}},623:function(n,t,e){e.d(t,{Z:function(){return i}});e(791);var r,c=e(168),u=e(867).ZP.div(r||(r=(0,c.Z)(["\nmardin-bottom: 20px;\npadding: 10px 15px;\n"]))),o=e(184),i=function(n){var t=n.children;return(0,o.jsx)(u,{children:t})}},821:function(n,t,e){e(791);var r=e(689),c=e(87),u=e(184);t.Z=function(n){var t=n.movies,e=(0,r.TH)();return(0,u.jsx)("ul",{children:t.map((function(n){var t=n.title,r=n.id;return(0,u.jsx)("li",{children:(0,u.jsxs)(c.rU,{to:"/movies/".concat(r),state:{from:e},children:[t," "]})},r)}))})}},149:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r=e(439),c=e(791),u=e(821),o=e(623),i=e(87),a=e(713),s=e(184),f=function(n){var t=n.handleSearch,e=n.searchRequest;return(0,s.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.target.elements.search.value;if(""===e)return alert("Please, enter your search request ");t(e)},children:[(0,s.jsx)("input",{type:"text",name:"search",defaultValue:e}),(0,s.jsx)("button",{type:"submit",children:"Search"})]})},h=function(){var n,t=(0,c.useState)([]),e=(0,r.Z)(t,2),h=e[0],l=e[1],m=(0,c.useState)(null),d=(0,r.Z)(m,2)[1],v=(0,i.lr)(),j=(0,r.Z)(v,2),p=j[0],Z=j[1],x=null!==(n=p.get("search"))&&void 0!==n?n:"";return(0,c.useEffect)((function(){(0,a.MK)(x).then((function(n){return n.results.map((function(n){return{title:n.title||n.name,id:n.id}}))})).then((function(n){return l(n)})).catch((function(n){return d(n)}))}),[x]),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(f,{handleSearch:function(n){Z({search:n}),l([])},searchRequest:x}),h.length>0&&(0,s.jsx)(u.Z,{movies:h})]})}}}]);
//# sourceMappingURL=149.0f5e8ee1.chunk.js.map