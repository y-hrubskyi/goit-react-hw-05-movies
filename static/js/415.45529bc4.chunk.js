"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{368:function(r,e,t){t.d(e,{Z:function(){return o}});var n=t(689),a=t(87),i=t(553),s=t(184);function o(r){var e,t=r.data,o=r.isLoading,u=r.isError,c=(0,n.TH)();return(0,s.jsxs)(s.Fragment,{children:[u&&(0,s.jsx)("div",{children:"Something went wrong..."}),o&&(0,s.jsx)(i.a,{}),(null===t||void 0===t||null===(e=t.results)||void 0===e?void 0:e.length)>0?(0,s.jsx)("ul",{children:t.results.map((function(r){var e=r.id,t=r.name,n=r.title;return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:c},children:t||n})},e)}))}):"No results"]})}},976:function(r,e,t){t.d(e,{Z:function(){return d}});var n=t(861),a=t(439),i=t(757),s=t.n(i),o=t(791),u=t(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"345007f9ab440e5b86cef51be6397df1"};var c=function(r,e){switch(e.type){case"FETCH_INIT":return{isLoading:!0,isError:!1};case"FETCH_SUCCESS":return{isLoading:!1,isError:!1,data:e.payload};case"FETCH_FAILURE":return{isLoading:!1,isError:!0};default:return r}};function d(r,e){var t=(0,o.useState)(r),i=(0,a.Z)(t,2),d=i[0],l=i[1],f=(0,o.useReducer)(c,{isLoading:!1,isError:!1,data:e}),p=(0,a.Z)(f,2),v=p[0],h=p[1];return(0,o.useEffect)((function(){if(d){var r=function(){var r=(0,n.Z)(s().mark((function r(){var e;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return h({type:"FETCH_INIT"}),r.prev=1,r.next=4,(0,u.Z)(d);case 4:e=r.sent,h({type:"FETCH_SUCCESS",payload:e.data}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),h({type:"FETCH_FAILURE"});case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(){return r.apply(this,arguments)}}();r()}}),[d]),[v,l]}},415:function(r,e,t){t.r(e),t.d(e,{default:function(){return o}});var n=t(439),a=t(976),i=t(368),s=t(184);function o(){var r=(0,a.Z)("/trending/all/day",{movies:[]}),e=(0,n.Z)(r,1)[0],t=e.data,o=e.isLoading,u=e.isError;return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Trending today"}),(0,s.jsx)(i.Z,{data:t,isLoading:o,isError:u})]})}}}]);
//# sourceMappingURL=415.45529bc4.chunk.js.map