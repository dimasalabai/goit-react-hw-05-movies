"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[36],{913:function(e,t,n){n.d(t,{Fb:function(){return s},Jh:function(){return u},Mj:function(){return c},gH:function(){return i},u8:function(){return a}});var r=n(294).Z.create({baseURL:"https://api.themoviedb.org",params:{api_key:"68860e7024beff1d4722639f018ec6ec"}}),s=function(){return r.get("/3/trending/movie/day")},a=function(e){return r.get("/3/movie/".concat(e))},i=function(e){return r.get("/3/search/movie",{params:{query:e,page:1}})},c=function(e){return r.get("/3/movie/".concat(e,"/credits"))},u=function(e){return r.get("/3/movie/".concat(e,"/reviews"))}},36:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(861),s=n(439),a=n(757),i=n.n(a),c=n(689),u=n(791),o="reviews_list__djUl7",l="reviews_item__kMitW",f="reviews_author__uJ3FR",h="reviews_content__lRyVy",v="reviews_reviewDetails__34TXl",d=n(913),m=n(393),p=n(184),_=function(){var e=(0,u.useState)([]),t=(0,s.Z)(e,2),n=t[0],a=t[1],_=(0,u.useState)(!1),w=(0,s.Z)(_,2),g=w[0],x=w[1],j=(0,u.useState)(null),k=(0,s.Z)(j,2),b=k[0],y=k[1],Z=(0,c.UO)().movieId;(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,d.Jh)(Z);case 4:t=e.sent,n=t.data.results,a(null!==n&&void 0!==n&&n.length?n:[]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),y(e.t0.message);case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[Z]);var N=n.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,p.jsx)("li",{className:l,children:(0,p.jsxs)("div",{className:v,children:[(0,p.jsxs)("h4",{className:f,children:[(0,p.jsx)("span",{children:"Author:"})," ",n]}),(0,p.jsx)("p",{className:h,children:r})]})},t)}));return(0,p.jsxs)(p.Fragment,{children:[g&&(0,p.jsx)(m.Z,{}),b&&(0,p.jsxs)("p",{children:["Error: ",b]}),n.length?(0,p.jsx)("ul",{className:o,children:N}):(0,p.jsx)("p",{children:"We don't have any reviews for this movie"})]})}}}]);
//# sourceMappingURL=36.34346dc2.chunk.js.map