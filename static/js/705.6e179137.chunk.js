"use strict";(self.webpackChunktweets=self.webpackChunktweets||[]).push([[705],{2705:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r=n(1087),s=n(1413),a=n(3433),l=n(9439),o=n(2791),i=n(4165),u=n(5861),c=n(1243);c.Z.defaults.baseURL="https://645554f1f803f3457640a025.mockapi.io/users";var f={fetchUsersAll:function(){return d.apply(this,arguments)},fetchUsersAllPagination:function(e){return h.apply(this,arguments)},updateFollowersUser:function(e){return p.apply(this,arguments)}};function d(){return(d=(0,u.Z)((0,i.Z)().mark((function e(){var t,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"get"},e.next=3,(0,c.Z)(t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=(0,u.Z)((0,i.Z)().mark((function e(t){var n,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"get",params:{limit:3,page:"".concat(t)}},e.next=3,(0,c.Z)(n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,u.Z)((0,i.Z)().mark((function e(t){var n,r,s,a,l,o,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.user,s=t.tweets,a=t.followers,l=t.avatar,o={method:"PUT",url:"/".concat(n),data:{user:r,tweets:s,followers:a,avatar:l}},e.next=4,(0,c.Z)(o);case 4:return u=e.sent,e.abrupt("return",u.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=f;var w=n(5538),Z=n(4697);var _=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},v="Card_card-wrap__9wKOy",x="Card_avatar-frame__lRkov",m="Card_avatar-image__G4GxT",b="Card_user-tweets__4OHsO",j="Card_user-followers__Y29Zz",C="Card_follow-btn__8ZvaT",F="Card_following-btn__Fgs90",N=n(184),k=function(e){var t=e.user,n=e.onChangeFollowers,r=(0,o.useState)(t.isFollowing),a=(0,l.Z)(r,2),i=a[0],u=a[1];return(0,N.jsxs)("div",{className:v,children:[(0,N.jsx)("div",{className:x,children:(0,N.jsx)("img",{className:m,src:t.avatar,width:"62",height:"62",alt:"avatar"})}),(0,N.jsxs)("p",{className:b,children:[t.tweets," TWEETS"]}),(0,N.jsxs)("p",{className:j,children:[_(t.followers)," FOLLOWERS"]}),(0,N.jsx)("button",{className:i||t.isFollowing?"".concat(C," ").concat(F):C,onClick:function(){i?g.updateFollowersUser((0,s.Z)((0,s.Z)({},t),{},{followers:t.followers-1})).then((function(e){return n((0,s.Z)((0,s.Z)({},e),{},{isFollowing:!1}))})):g.updateFollowersUser((0,s.Z)((0,s.Z)({},t),{},{followers:t.followers+1})).then((function(e){return n((0,s.Z)((0,s.Z)({},e),{},{isFollowing:!0}))}));u((function(e){return!e}))},type:"button",children:i||t.isFollowing?"FOLLOWING":"FOLLOW"})]})},S="CardsList_users__draHl",y="CardsList_dropDown__Cg-zi",L="CardsList_users-list__OitDe",O="CardsList_loadMore-btn__A+L6c",U=n(4721),E=n(7214),A=function(){var e=(0,o.useState)([]),t=(0,l.Z)(e,2),n=t[0],r=t[1],i=(0,o.useState)((function(){return function(){try{var e=localStorage.getItem("tweets"),t=JSON.parse(e);return null!==t?Math.ceil(t.length/3):1}catch(n){return console.log(n),1}}()})),u=(0,l.Z)(i,2),c=u[0],f=u[1],d=(0,o.useState)(null),h=(0,l.Z)(d,2),p=h[0],_=h[1],v=(0,o.useState)(!1),x=(0,l.Z)(v,2),m=x[0],b=x[1],j=(0,o.useState)(" "),C=(0,l.Z)(j,2),F=C[0],A=C[1],R=(0,o.useState)(!1),T=(0,l.Z)(R,2),I=T[0],W=T[1],G=(0,o.useRef)(!0),M=(0,o.useRef)(!0),P=function(e,t){return" "===t?e:"follow"===t?e.filter((function(e){return!e.isFollowing})):"followings"===t?e.filter((function(e){return e.isFollowing})):void 0}(n,F);(0,o.useEffect)((function(){var e=function(){try{var e=localStorage.getItem("tweets"),t=JSON.parse(e);return null!==t?(0,a.Z)(t):[]}catch(n){return console.log(n),[]}}();0!==e.length?(W(!0),g.fetchUsersAll().then((function(t){_(Math.ceil(t.length/3)),t.length===e.length&&b(!0),W(!1);var n=e.map((function(e){var n=t.filter((function(t){return e.id===t.id}));return 0===n.length?(console.log("user deleted"),(0,s.Z)((0,s.Z)({},e),{},{user:"User was deleted"})):(0,s.Z)((0,s.Z)({},n[0]),{},{isFollowing:e.isFollowing})}));r((0,a.Z)(n))}))):(W(!0),g.fetchUsersAll().then((function(e){return _(Math.ceil(e.length/3))})),g.fetchUsersAllPagination(1).then((function(e){W(!1);var t=e.map((function(e){return(0,s.Z)((0,s.Z)({},e),{},{isFollowing:!1})}));r((0,a.Z)(t))})))}),[]),(0,o.useEffect)((function(){M.current?M.current=!1:(W(!0),g.fetchUsersAllPagination(c).then((function(e){W(!1);var t=e.map((function(e){return(0,s.Z)((0,s.Z)({},e),{},{isFollowing:!1})}));r((function(e){return[].concat((0,a.Z)(e),(0,a.Z)(t))}))})))}),[c]),(0,o.useEffect)((function(){G.current?G.current=!1:localStorage.setItem("tweets",JSON.stringify(n))}),[n]);var B=function(e){var t=n.findIndex((function(t){return t.id===e.id})),s=(0,a.Z)(n);s.splice(t,1,e),r(s)};return(0,N.jsxs)("section",{className:S,children:[(0,N.jsx)("div",{className:y,children:(0,N.jsxs)(Z.Z,{value:F,onChange:function(e){A(e.target.value)},displayEmpty:!0,inputProps:{"aria-label":"Without label"},sx:{paddingLeft:"16px",paddingRight:"16px"},children:[(0,N.jsx)(w.Z,{value:" ",children:(0,N.jsx)("em",{children:"show all"})}),(0,N.jsx)(w.Z,{value:"follow",children:"follow"}),(0,N.jsx)(w.Z,{value:"followings",children:"followings"})]})}),(0,N.jsx)(U.Z,{sx:{borderBlockEndWidth:"2px"}}),(0,N.jsxs)("ul",{className:L,children:[0===P.length&&!I&&(0,N.jsx)("h1",{children:"There is No Tweets"}),P.length>0&&P.map((function(e){return(0,N.jsx)("li",{children:(0,N.jsx)(k,{user:e,onChangeFollowers:B})},e.id)}))]}),I&&(0,N.jsx)(E.Z,{}),!m&&!I&&(0,N.jsx)("button",{className:O,onClick:function(){f((function(e){return e+1})),c>=p-1&&(b(!0),alert("It is last page"))},disabled:m,type:"button",children:"Load More"})]})},R=n(7641),T=n(9033),I=function(){return(0,N.jsxs)("div",{className:R.Z.container,children:[(0,N.jsx)(r.rU,{to:"/",children:(0,N.jsx)("button",{className:T.Z["goback-btn"],type:"button",children:"Go Back"})}),(0,N.jsx)(A,{})]})}},9033:function(e,t){t.Z={"goback-btn":"pages_goback-btn__d0R3o","home-bgd":"pages_home-bgd__XiK3m","title-wrap":"pages_title-wrap__K0G4e",title:"pages_title__EC3Ll"}}}]);
//# sourceMappingURL=705.6e179137.chunk.js.map