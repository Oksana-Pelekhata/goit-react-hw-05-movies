"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{713:function(t,n,e){e.d(n,{Df:function(){return o},MK:function(){return i},TP:function(){return u},jP:function(){return f},zv:function(){return a}});var r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDZmMmViODRlZmMxMzljMTk5OGU5YmRmYzZlMTU2ZiIsInN1YiI6IjY0MzhlODZmYWI2ODQ5MDBiZDAxM2E2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MX0hLc_etjm7AgFSwCGHbxJEsYMEfLi6jQCO-l5vNZc"}},c="https://api.themoviedb.org/3",o=function(){return fetch("".concat(c,"/trending/all/day?language=en-US"),r).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))},i=function(t){return fetch("".concat(c,"/search/movie?query=").concat(t),r).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))},u=function(t){return fetch("".concat(c,"/movie/").concat(t),r).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))},a=function(t){return fetch("".concat(c,"/movie/").concat(t,"/credits"),r).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))},f=function(t){return fetch("".concat(c,"/movie/").concat(t,"/reviews"),r).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))}},387:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r,c=e(439),o=e(791),i=e(689),u=e(168),a=e(867).ZP.ul(r||(r=(0,u.Z)(["\nlist-style: none;\n"]))),f=e(713),s=e(127),h=e(184),l=function(){var t=(0,o.useState)([]),n=(0,c.Z)(t,2),e=n[0],r=n[1],u=(0,o.useState)(null),l=(0,c.Z)(u,2)[1],m=(0,i.UO)().movieId;return(0,o.useEffect)((function(){(0,f.zv)(m).then((function(t){var n=t.cast;return r(n)})).catch((function(t){return l(t)}))}),[m]),(0,h.jsx)("div",{children:(0,h.jsx)(a,{children:e.length>0&&e.map((function(t){var n=t.profile_path?"https://image.tmdb.org/t/p/w500/".concat(t.profile_path):s;return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{src:n,width:"100px",alt:t.original_name}),(0,h.jsx)("p",{children:t.original_name}),(0,h.jsx)("p",{children:t.character})]},t.credit_id)}))})})}},127:function(t,n,e){t.exports=e.p+"static/media/not_found.302ec86419e42f1e5081.jpeg"}}]);
//# sourceMappingURL=387.92f3bf39.chunk.js.map