(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n.n(a),s=n(3),o=n.n(s),i=(n(17),n(4)),d=n(5),b=n(6),j=n(11),l=n(10),u=n(0),x=function(e){var t=e.title,n=e.children;return Object(u.jsxs)("section",{children:[Object(u.jsx)("h1",{children:t}),n]})},h=n(7),p=n(9).a.button(c||(c=Object(h.a)(["\n  margin-left: 10px;\n  padding: 2px 6px;\n  border: none;\n  border-radius: 5px;\n  border: 0.2px solid #dedddd;\n  cursor: pointer;\n  transition: box-shadow 250ms linear;\n\n  &:hover {\n    -webkit-box-shadow: 0px 1px 5px 1px rgba(34, 60, 80, 0.92);\n    -moz-box-shadow: 0px 1px 5px 1px rgba(34, 60, 80, 0.92);\n    box-shadow: 0px 1px 5px 1px rgba(34, 60, 80, 0.92);\n  }\n\n  &:active {\n    color: #fff;\n    background-color: #3a6edd;\n  }\n"]))),O=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(u.jsxs)(p,{type:"button","data-name":e,onClick:n,children:[e," "]},e)}))},f=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Statistics"}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:"Good:"}),Object(u.jsx)("span",{children:t})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:"Neutral:"}),Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:"Bad:"}),Object(u.jsx)("span",{children:c})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:"Total:"}),Object(u.jsx)("span",{children:a})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:"Positive feedback:"}),Object(u.jsxs)("span",{children:[r,"%"]})]})]})]})},g=function(e){var t=e.message;return Object(u.jsx)("p",{children:t})},v=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.incrementStats=function(t){var n=t.target.dataset.name;e.setState((function(e){return Object(i.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return e.state.good?Math.round(e.state.good/e.countTotalFeedback()*100):0},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=this.state,n=t.good,c=t.neutral,a=t.bad,r=this.incrementStats,s=this.countTotalFeedback,o=this.countPositiveFeedbackPercentage;return Object(u.jsxs)(x,{title:"\u0412\u0438\u0434\u0436\u0435\u0442 \u043e\u0442\u0437\u044b\u0432\u043e\u0432",children:[Object(u.jsx)(O,{options:Object.keys(e),onLeaveFeedback:r}),s()?Object(u.jsx)(f,{good:n,neutral:c,bad:a,total:s(),positivePercentage:o()}):Object(u.jsx)(g,{message:"No feedback given"})]})}}]),n}(a.Component);o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.a308258f.chunk.js.map