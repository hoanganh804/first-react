(this["webpackJsonpfirst-react"]=this["webpackJsonpfirst-react"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),o=n(9),r=n.n(o),a=(n(15),n(16),n(6)),l=n(2),u=n(0);function s(t){return Object(u.jsx)("div",{children:Object(u.jsx)("li",{onClick:function(){return t.deleteItem(t.id)},children:t.listItem})})}var j=n(10);n(20);function b(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],i=e[1],o=function(t){var e=Object(a.a)(n);e.splice(t,1),i(e)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Todo List"}),Object(u.jsx)("input",{type:"text",onKeyDown:function(t){if(13===t.which){var e=t.target.value;if(e){var c={title:e,id:Object(j.v4)()},o=Object(a.a)(n);o.unshift(c),i(o),t.target.value=""}}},placeholder:"Nhap ...."}),Object(u.jsx)("ul",{children:n.map((function(t,e){return Object(u.jsx)(s,{id:e,listItem:t.title,deleteItem:o},t.id)}))})]})}n(21);function d(){var t=Object(c.useState)((function(){return parseInt(localStorage.getItem("clicked"))||0})),e=Object(l.a)(t,2),n=e[0],i=e[1];return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h2",{children:["So lan click la: ",n]}),Object(u.jsx)("button",{type:"button",onClick:function(){var t=n-1;i(t),localStorage.setItem("clicked",t)},children:"Click Giam"}),Object(u.jsx)("button",{type:"button",onClick:function(){var t=n+1;i(t),localStorage.setItem("clicked",t)},children:"Click Tang"})]})}n(22);function f(){var t=Object(c.useState)((function(){return localStorage.getItem("color_box")||"deeppink"})),e=Object(l.a)(t,2),n=e[0],i=e[1];return Object(u.jsx)("div",{className:"box",onClick:function(){var t=function(){var t=["deeppink","green","yellow","black","blue"][Math.floor(4*Math.random())];return console.log(Math.floor(5*Math.random())),t}();i(t),localStorage.setItem("color_box",t)},style:{backgroundColor:n}})}var h=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d,{}),Object(u.jsx)(f,{}),Object(u.jsx)(b,{})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),o(t),r(t)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),O()}},[[23,1,2]]]);
//# sourceMappingURL=main.ed94778f.chunk.js.map