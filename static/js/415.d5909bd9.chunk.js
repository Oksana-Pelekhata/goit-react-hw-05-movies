"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{713:function(n,t,r){r.d(t,{Df:function(){return c},MK:function(){return i},TP:function(){return u},jP:function(){return f},zv:function(){return a}});var e={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDZmMmViODRlZmMxMzljMTk5OGU5YmRmYzZlMTU2ZiIsInN1YiI6IjY0MzhlODZmYWI2ODQ5MDBiZDAxM2E2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MX0hLc_etjm7AgFSwCGHbxJEsYMEfLi6jQCO-l5vNZc"}},o="https://api.themoviedb.org/3",c=function(){return fetch("".concat(o,"/trending/all/day?language=en-US"),e).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},i=function(n){return fetch("".concat(o,"/search/movie?query=").concat(n),e).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},u=function(n){return fetch("".concat(o,"/movie/").concat(n),e).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},a=function(n){return fetch("".concat(o,"/movie/").concat(n,"/credits"),e).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},f=function(n){return fetch("".concat(o,"/movie/").concat(n,"/reviews"),e).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}},623:function(n,t,r){r.d(t,{Z:function(){return u}});r(791);var e,o=r(168),c=r(867).ZP.div(e||(e=(0,o.Z)(["\nmardin-bottom: 20px;\npadding: 10px 15px;\n"]))),i=r(184),u=function(n){var t=n.children;return(0,i.jsx)(c,{children:t})}},821:function(n,t,r){r(791);var e=r(689),o=r(87),c=r(184);t.Z=function(n){var t=n.movies,r=(0,e.TH)();return(0,c.jsx)("ul",{children:t.length>0&&t.map((function(n){var t=n.title,e=n.id;return(0,c.jsx)("li",{children:(0,c.jsxs)(o.rU,{to:"/movies/".concat(e),state:{from:r},children:[t," "]})},e)}))})}},415:function(n,t,r){r.r(t);var e=r(433),o=r(439),c=r(713),i=r(623),u=r(821),a=r(791),f=r(184);t.default=function(){var n=(0,a.useState)([]),t=(0,o.Z)(n,2),r=t[0],s=t[1],h=(0,a.useState)(null),l=(0,o.Z)(h,2)[1];return(0,a.useEffect)((function(){(0,c.Df)().then((function(n){return n.results.map((function(n){return s((function(t){return[].concat((0,e.Z)(t),[{title:n.title||n.name,id:n.id}])}))}))})).catch((function(n){return l(n)}))}),[]),(0,f.jsxs)(i.Z,{children:[(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)(u.Z,{movies:r})]})}}}]);
//# sourceMappingURL=415.d5909bd9.chunk.js.map