(this["webpackJsonpcalc-app"]=this["webpackJsonpcalc-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),c=a(4),s=a.n(c),j=(a(9),a(2)),i=(a.p,a(10),a(0));var b=function(){var e=Object(l.useState)(0),t=Object(j.a)(e,2),a=t[0],n=t[1],c=Object(l.useState)(0),s=Object(j.a)(c,2),b=s[0],r=s[1],u=Object(l.useState)(0),o=Object(j.a)(u,2),O=o[0],d=o[1],h=Object(l.useState)(0),g=Object(j.a)(h,2),x=g[0],p=g[1],y=Object(l.useState)(0),S=Object(j.a)(y,2),m=S[0],v=S[1],f=Object(l.useState)(0),D=Object(j.a)(f,2),N=D[0],C=D[1],F=Object(l.useState)(0),M=Object(j.a)(F,2),Y=(M[0],M[1]),w=Object(l.useState)(0),E=Object(j.a)(w,2),k=E[0],I=E[1];function B(e){Y(e.target.value)}return Object(i.jsxs)("div",{class:"app-container",children:[Object(i.jsxs)("div",{class:"display-flex",children:[Object(i.jsxs)("form",{className:"formStyle mb-20",children:[Object(i.jsx)("h2",{children:" Start Date "}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"labelStyle",children:"Start Year"}),Object(i.jsx)("input",{type:"text",className:"inputStyle",onChange:function(e){n(e.target.value)}})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"labelStyle",children:"Start Month"}),Object(i.jsx)("input",{type:"text",className:"inputStyle",onChange:function(e){r(e.target.value)}})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"labelStyle",children:"Start Day"}),Object(i.jsx)("input",{type:"text",className:"inputStyle",onChange:function(e){d(e.target.value)}})]}),Object(i.jsx)("div",{})]}),Object(i.jsxs)("form",{className:"formStyle mb-20",children:[Object(i.jsx)("h2",{children:" End date "}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"labelStyle",children:"End Year"}),Object(i.jsx)("input",{type:"text",className:"inputStyle",onChange:function(e){p(e.target.value)}})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"labelStyle",children:"End Month"}),Object(i.jsx)("input",{type:"text",className:"inputStyle",onChange:function(e){v(e.target.value)}})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"labelStyle",children:"End Day"}),Object(i.jsx)("input",{type:"text",className:"inputStyle",onChange:function(e){C(e.target.value)}})]}),Object(i.jsx)("div",{})]})]}),Object(i.jsxs)("form",{className:"formStyle",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"labelStyle",children:"Amount"}),Object(i.jsx)("input",{type:"text",className:"inputStyle",onChange:B})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"labelStyle",children:"Interest Rate"}),Object(i.jsx)("input",{type:"text",className:"inputStyle",onChange:B})]}),k,Object(i.jsx)("input",{type:"button",className:"submitStyle",onClick:function(){var e=a+"-"+b+"-"+O,t=x+"-"+m+"-"+N,l=new Date(e),n=new Date(t);console.log(e),console.log(t),function(e,t){var a=t.getMonth()-e.getMonth(),l=t.getFullYear()-e.getFullYear(),n=t.getDate()-e.getDate();a=t.getMonth()+12*t.getFullYear()-(e.getMonth()+12*e.getFullYear());var c=0;c=a-12*l<0?-1:1;c<0&&(l-=1);a-=12*l;var s=new Date(t.getFullYear(),t.getMonth()+1,0,23,59,59);s=s.getDate(),n=c<0&&e.getDate()>t.getDate()?s+(t.getDate()-e.getDate())-1:t.getDate()-e.getDate();n<0&&(a-=1);var j=new Date(t.getFullYear(),t.getMonth(),0),i=new Date(e.getFullYear(),e.getMonth()+1,0);n<0&&(n=i>j?i.getDate()+n:j.getDate()+n);console.log(l+"Year(s), "+a+" Month(s), "+n+"Day(s)"),I(l+"/"+a+"/"+n),function(e,t,a){if(e>5||t>12||a>31)alert("please check start and end dates")}(l,a,n)}(l,n)},value:"Calculate"})]})]})},r=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,l=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),l(e),n(e),c(e),s(e)}))};s.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root")),r()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.e187c10a.chunk.js.map