"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{368:function(e,r,t){t.d(r,{O:function(){return u}});var n=t(689),a=t(87),i=t(769),s=t(184),u=function(e){var r=e.data,t=e.isLoading,u=e.isError,o=(0,n.TH)(),c=(null===r||void 0===r?void 0:r.results)&&!r.results.length;return(0,s.jsxs)(s.Fragment,{children:[u&&(0,s.jsx)("div",{children:"Something went wrong..."}),t&&(0,s.jsx)(i.a,{}),c?"No results":(0,s.jsx)("ul",{children:null===r||void 0===r?void 0:r.results.map((function(e){var r=e.id,t=e.name,n=e.title;return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"/movies/".concat(r),state:{from:o},children:t||n})},r)}))})]})}},976:function(e,r,t){t.d(r,{k:function(){return l}});var n=t(861),a=t(439),i=t(757),s=t.n(i),u=t(791),o=t(340);o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={api_key:"345007f9ab440e5b86cef51be6397df1"};var c=function(e,r){switch(r.type){case"FETCH_INIT":return{isLoading:!0,isError:!1};case"FETCH_SUCCESS":return{isLoading:!1,isError:!1,data:r.payload};case"FETCH_FAILURE":return{isLoading:!1,isError:!0};default:return e}},l=function(e){var r=(0,u.useState)(e),t=(0,a.Z)(r,2),i=t[0],l=t[1],d=(0,u.useReducer)(c,{isLoading:!1,isError:!1,data:null}),f=(0,a.Z)(d,2),v=f[0],h=f[1];return(0,u.useEffect)((function(){if(i){var e=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h({type:"FETCH_INIT"}),e.prev=1,e.next=4,(0,o.Z)(i);case 4:r=e.sent,h({type:"FETCH_SUCCESS",payload:r.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),h({type:"FETCH_FAILURE"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[i]),[v,l]}},134:function(e,r,t){t.r(r);var n=t(439),a=t(87),i=t(976),s=t(368),u=t(184);r.default=function(){var e,r=(0,a.lr)(),t=(0,n.Z)(r,2),o=t[0],c=t[1],l=null!==(e=o.get("query"))&&void 0!==e?e:"",d=(0,i.k)(l?"/search/movie?query=".concat(l):""),f=(0,n.Z)(d,2),v=f[0],h=v.data,p=v.isLoading,m=v.isError,E=f[1];return(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"Search"}),(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l?E("/search/movie?query=".concat(l)):alert("Please, enter movie's name!")},children:[(0,u.jsx)("input",{type:"text",value:l,onChange:function(e){var r=e.target.value;c(""!==r?{query:r}:{})}}),(0,u.jsx)("button",{type:"submit",children:"Search"})]}),(0,u.jsx)(s.O,{data:h,isLoading:p,isError:m})]})}}}]);
//# sourceMappingURL=134.bd0740c3.chunk.js.map