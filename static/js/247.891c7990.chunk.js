"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(e,r,t){t.r(r);var a=t(439),n=t(689),s=t(976),i=t(769),c=t(184);r.default=function(){var e,r=(0,n.UO)().movieId,t=(0,s.k)("/movie/".concat(r,"/credits"),{}),o=(0,a.Z)(t,1)[0],u=o.data,d=o.isLoading,l=o.isError;return(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{children:"Cast"}),l&&(0,c.jsx)("div",{children:"Something went wrong..."}),d&&(0,c.jsx)(i.a,{}),null!==u&&void 0!==u&&null!==(e=u.cast)&&void 0!==e&&e.length?(0,c.jsx)("ul",{children:u.cast.map((function(e){return(0,c.jsxs)("li",{children:[(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path),alt:""}),(0,c.jsx)("h2",{children:e.name}),(0,c.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))}):"No any casts"]})}},976:function(e,r,t){t.d(r,{k:function(){return d}});var a=t(861),n=t(439),s=t(757),i=t.n(s),c=t(791),o=t(340);o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={api_key:"345007f9ab440e5b86cef51be6397df1"};var u=function(e,r){switch(r.type){case"FETCH_INIT":return{isLoading:!0,isError:!1};case"FETCH_SUCCESS":return{isLoading:!1,isError:!1,data:r.payload};case"FETCH_FAILURE":return{isLoading:!1,isError:!0};default:return e}},d=function(e,r){var t=(0,c.useState)(e),s=(0,n.Z)(t,2),d=s[0],l=s[1],p=(0,c.useReducer)(u,{isLoading:!1,isError:!1,data:r}),f=(0,n.Z)(p,2),h=f[0],v=f[1];return(0,c.useEffect)((function(){if(d){var e=function(){var e=(0,a.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v({type:"FETCH_INIT"}),e.prev=1,e.next=4,(0,o.Z)(d);case 4:r=e.sent,v({type:"FETCH_SUCCESS",payload:r.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),v({type:"FETCH_FAILURE"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[d]),[h,l]}}}]);
//# sourceMappingURL=247.891c7990.chunk.js.map