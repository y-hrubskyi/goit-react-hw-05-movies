"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[973],{976:function(e,r,t){t.d(r,{k:function(){return u}});var n=t(861),a=t(439),s=t(757),i=t.n(s),c=t(791),o=t(340);o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={api_key:"345007f9ab440e5b86cef51be6397df1"};var d=function(e,r){switch(r.type){case"FETCH_INIT":return{isLoading:!0,isError:!1};case"FETCH_SUCCESS":return{isLoading:!1,isError:!1,data:r.payload};case"FETCH_FAILURE":return{isLoading:!1,isError:!0};default:return e}},u=function(e,r){var t=(0,c.useState)(e),s=(0,a.Z)(t,2),u=s[0],l=s[1],h=(0,c.useReducer)(d,{isLoading:!1,isError:!1,data:r}),f=(0,a.Z)(h,2),p=f[0],v=f[1];return(0,c.useEffect)((function(){if(u){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v({type:"FETCH_INIT"}),e.prev=1,e.next=4,(0,o.Z)(u);case 4:r=e.sent,v({type:"FETCH_SUCCESS",payload:r.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),v({type:"FETCH_FAILURE"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[u]),[p,l]}},973:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var n=t(439),a=t(791),s=t(689),i=t(87),c=t(976),o=t(769),d=t(184),u=function(e){var r=e.data;return(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(r.poster_path),alt:""}),(0,d.jsx)("h2",{children:r.title}),(0,d.jsx)("p",{children:r.release_date}),(0,d.jsx)("p",{children:r.overview})]})},l=t(459),h=function(){return(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Additional information"}),(0,d.jsxs)(l.$6,{children:[(0,d.jsx)(l.LY,{children:(0,d.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)(l.LY,{children:(0,d.jsx)(l.rU,{to:"reviews",children:"Reviews"})})]})]})},f=function(){var e,r,t=(0,s.UO)().movieId,l=(0,c.k)("/movie/".concat(t),{}),f=(0,n.Z)(l,1)[0],p=f.data,v=f.isLoading,x=f.isError,j=(0,s.TH)(),m=(0,a.useRef)(null!==(e=null===(r=j.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/");return(0,d.jsxs)("div",{children:[(0,d.jsx)(i.rU,{to:m.current,children:"\u2b05\ufe0f Go Back"}),(0,d.jsx)("h1",{children:"MovieDetails"}),x&&(0,d.jsx)("div",{children:"Something went wrong..."}),v&&(0,d.jsx)(o.a,{}),p&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u,{data:p}),(0,d.jsx)(h,{}),(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(o.a,{}),children:(0,d.jsx)(s.j3,{})})]})]})}}}]);
//# sourceMappingURL=973.0d85f186.chunk.js.map