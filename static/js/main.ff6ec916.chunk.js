(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),i=n.n(c),l=n(6),o=n(8),r=n(1),a=n(4),u=n.n(a),b=(n(13),n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.Alphabetically="Alphabetically",t.Length="Length",t.Default=""}(s||(s={}));var d=function(t){var e=t.visibleGoods;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})},j=function(){var t=Object(r.useState)(s.Default),e=Object(l.a)(t,2),n=e[0],c=e[1],i=Object(r.useState)(!1),a=Object(l.a)(i,2),j=a[0],g=a[1],p=function(t,e){var n=e.sortField,c=e.reverseField,i=Object(o.a)(t);return n&&i.sort((function(t,e){switch(n){case s.Alphabetically:return t.localeCompare(e);case s.Length:return t.length-e.length;default:return 0}})),c&&i.reverse(),i}(h,{sortField:n,reverseField:j});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{onClick:function(){return c(s.Alphabetically)},type:"button",className:u()("button","is-info",{"is-light":n!==s.Alphabetically}),children:"Sort alphabetically"}),Object(b.jsx)("button",{onClick:function(){return c(s.Length)},type:"button",className:u()("button","is-success",{"is-light":n!==s.Length}),children:"Sort by length"}),Object(b.jsx)("button",{onClick:function(){return g(!j)},type:"button",className:u()("button","is-warning",{"is-light":!j}),children:"Reverse"}),(n||j)&&Object(b.jsx)("button",{onClick:function(){c(s.Default),g(!1)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(b.jsx)(d,{visibleGoods:p})]})};i.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ff6ec916.chunk.js.map