(this.webpackJsonplearnRedux=this.webpackJsonplearnRedux||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);n(0);var c=n(4),r=n.n(c),o=n(3),u=(n(19),n(5)),i=n(9),a="amount/add",s="amount/take",l="amount/clear",d=n(10),j="goods/add",b="goods/take",f="goods/clear",h=n(2),O="left",x="right",p="up",v="down",g={left:function(){return{type:O}},right:function(){return{type:x}},up:function(){return{type:p}},down:function(){return{type:v}},circle:function(t){return function(e){return new Promise((function(n){e(g.right()),setTimeout((function(){e(g.down())}),t),setTimeout((function(){e(g.left())}),2*t),setTimeout((function(){e(g.up()),n()}),3*t)}))}}},m=function(t){return t.y},y={x:0,y:0};function w(t){return{x:(e=t.position,e.x),y:m(t.position)};var e}var k=Object(u.b)({amount:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a:return t+e.value;case s:return e.value>t?(console.log("\u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u0445\u043e\u0447\u0435\u0448\u044c \u0441\u043d\u044f\u0442\u044c"),t):t-e.value;case l:return 0;default:return t}},goods:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return[].concat(Object(d.a)(t),[e.good]);case b:return t.filter((function(t){return t!==e.good}));case f:return[];default:return t}},position:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return Object(h.a)(Object(h.a)({},t),{},{x:t.x-1});case x:return Object(h.a)(Object(h.a)({},t),{},{x:t.x+1});case p:return Object(h.a)(Object(h.a)({},t),{},{y:t.y-1});case v:return Object(h.a)(Object(h.a)({},t),{},{y:t.y+1});default:return t}}}),N=Object(u.c)(k,Object(u.a)(i.a)),C=(n(20),n(1));var R=function(){var t=Object(o.b)(),e=Object(o.c)(w),n=e.x,c=e.y,r="".concat(n,":").concat(c),u=n+c,i={transform:"translate(".concat(20*n,"px, ").concat(20*c,"px)")};return Object(C.jsx)("section",{children:Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:"group",children:Object(C.jsx)("button",{onClick:function(){return t(g.up())},children:"^"})}),Object(C.jsxs)("div",{className:"group",children:[Object(C.jsx)("button",{onClick:function(){return t(g.left())},children:"<"}),r,Object(C.jsx)("button",{onClick:function(){return t(g.right())},children:">"})]}),Object(C.jsx)("div",{className:"group",children:Object(C.jsx)("button",{onClick:function(){return t(g.down())},children:"v"})}),Object(C.jsx)("div",{className:"group",children:Object(C.jsx)("button",{onClick:function(){t(g.circle(500))},children:"Rotate"})}),Object(C.jsx)("div",{className:"warehouse",children:Object(C.jsx)("div",{className:"truck",style:i,children:u})})]})})};r.a.render(Object(C.jsx)(o.a,{store:N,children:Object(C.jsx)(R,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.dd969506.chunk.js.map