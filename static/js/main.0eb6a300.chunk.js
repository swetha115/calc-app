(this["webpackJsonpcalc-app"]=this["webpackJsonpcalc-app"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),l=a(16),r=(a(51),a(44)),c=a(6),u=(a(29),a(27));function o(e){var t=e.startyear,a=e.startmonth,n=e.startday,s=e.endyear,l=e.endmonth,r=e.endday,c=0,u=0;return r>=n?u=r-n:(u=(r=30+r)-n,l-=1),l>=a?c=l-a:(c=(l=12+l)-a,s-=1),{years:s-t,months:c,days:u}}var d=function(e){var t=e.amount,a=e.interestRate,n=e.startDate,s=e.endDate,l=e.interestSelectType,r=new Date(n),c=new Date(s),u=r.getFullYear(),d=r.getMonth()+1,i=r.getDate(),h=c.getFullYear(),j=c.getMonth()+1,b=c.getDate();if("0"===t||"0"===a||null===n||null===s||""===l||""===t||""===a)return"All fields are manditory";if(u>h||u==h&&d>j||d==j&&i>b)return"Please check dates entered";if(d>12||j>12||i>31||b>31)return"Please check dates entered";var m=o({startyear:u,startmonth:d,startday:i,endyear:h,endmonth:j,endday:b}),p=m.years,y=m.months,O=m.days;return 0===p&&0===y&&0===O?"Please check dates entered":t<=0?"Amount sould be greater than '0'":a<=0?"Interest rate sould be greater than '0'":""},i=a(36),h=a.n(i);a(52);function j(e){!function(e){var t=e.startDate,a=e.endDate,n=new Date(t),s=new Date(a),l=n.getUTCFullYear(),r=n.getUTCMonth()+1,c=n.getUTCDate()+1,u=s.getUTCFullYear(),o=s.getUTCMonth()+1,d=s.getUTCDate()+1,i=0,h=0;d>=c?h=d-c:(h=(d=30+d)-c,o-=1);o>=r?i=o-r:(i=(o=12+o)-r,u-=1);!function(e,t){var a=e.amount,n=e.interestRate,s=e.startDate,l=e.endDate,r=e.interestSelectType,c=e.onCalculationClick,u=t.years,o=t.months,d=t.days;a=Number(a);var i=0,h=0,j=0,b=0,m=0,p=0,y=0,O=0,v=0,x=0,g=0,D=[];"compound interest"==r?u<1?(h=(i=a*n/100)*o+i*d/30,D.push(h)):1==u?o>1?(h=12*(i=a*n/100),D.push(h),b=(j=(v=a+h)*n/100)*o+j*d/30,D.push(b)):(h=12*(i=a*n/100),D.push(h),b=(j=a*n/100)*o+j*d/30,D.push(b)):2==u?o>1?(h=12*(i=a*n/100),D.push(h),b=12*(j=(v=a+h)*n/100),D.push(b),y=(m=(x=a+h+b)*n/100)*o+m*d/30,D.push(y)):(h=12*(i=a*n/100),D.push(h),b=12*(j=(v=a+h)*n/100),D.push(b),y=(m=v*n/100)*o+m*d/30,D.push(y)):3==u?(h=12*(i=a*n/100),D.push(h),b=12*(j=(v=a+h)*n/100),D.push(b),y=(y=12*(m=(x=a+h+b)*n/100))+(p=x*n/100)*o+p*d/30,D.push(y)):(O=12*(u-3)+o,h=12*(i=a*n/100),D.push(h),b=12*(j=(v=a+h)*n/100),D.push(b),y=(y=12*(m=(x=a+h+b)*n/100))+(p=x*n/100)*O+p*d/30,D.push(y)):u<1?(h=(i=a*n/100)*o+i*d/30,D.push(h)):1==u?(h=12*(i=a*n/100),D.push(h),b=(j=a*n/100)*o+j*d/30,D.push(b)):2==u?(h=12*(i=a*n/100),D.push(h),b=12*(j=a*n/100),D.push(b),y=(m=a*n/100)*o+m*d/30,D.push(y)):3==u?(h=12*(i=a*n/100),D.push(h),b=12*(j=a*n/100),D.push(b),y=(y=12*(m=a*n/100))+(p=a*n/100)*o+p*d/30,D.push(y)):(O=12*(u-3)+o,h=12*(i=a*n/100),D.push(h),b=12*(j=a*n/100),D.push(b),y=(y=12*(m=a*n/100))+(p=a*n/100)*O+p*d/30,D.push(y));for(var f=[],T=1,C=0;C<D.length;C++)f.push({name:"interest for "+T+"year(s)",value:D[C]}),T++;var N=h+b+y;g=N+a;var S=new Date(s),w=new Date(l),k=S.getUTCFullYear(),M=S.getUTCMonth()+1,U=S.getUTCDate()+1,I=w.getUTCFullYear(),Y=w.getUTCMonth()+1,F=w.getUTCDate()+1,R=[{name:"Start Date",value:k+"/"+M+"/"+U},{name:"End Date",value:I+"/"+Y+"/"+F},{name:"Total Years",value:u},{name:"Total Months",value:o},{name:"Total Days",value:d},{name:"Amount",value:a},{name:"Interest Rate",value:n},{name:"Interests",value:f},{name:"Total Interest",value:Math.round(N)},{name:"Total Amount",value:Math.round(Number(g))}];c(R)}(e,{years:u-l,months:i,days:h})}(e)}a(53);var b=a(4),m=function(e){var t,a=e.onCalculationClick,s=Object(n.useState)("0"),l=Object(c.a)(s,2),r=l[0],i=l[1],m=Object(n.useState)("0"),p=Object(c.a)(m,2),y=p[0],O=p[1],v=Object(n.useState)(null),x=Object(c.a)(v,2),g=x[0],D=x[1],f=Object(n.useState)(null),T=Object(c.a)(f,2),C=T[0],N=T[1],S=Object(n.useState)(""),w=Object(c.a)(S,2),k=w[0],M=w[1],U=Object(n.useState)(""),I=Object(c.a)(U,2),Y=I[0],F=I[1],R=Object(n.useState)(!0),P=Object(c.a)(R,2),B=P[0],E=P[1],_=Object(n.useState)(!0),A=Object(c.a)(_,2),J=A[0],V=A[1];function K(){var e=function(e){var t=e.amount,a=e.interestRate,n=e.startDate,s=e.endDate,l=e.interestSelectType,r=new Date(n),c=new Date(s),u=r.getFullYear(),d=r.getMonth()+1,i=r.getDate(),h=c.getFullYear(),j=c.getMonth()+1,b=c.getDate(),m=o({startyear:u,startmonth:d,startday:i,endyear:h,endmonth:j,endday:b}),p=m.years,y=m.months,O=m.days;return"0"===t||"0"===a||null===n||null===s||""===l||""===t||""===a||u>h||u==h&&d>j||d==j&&i>b||d>12||j>12||i>31||b>31||0===p&&0===y&&0===O||t<=0||a<=0}({amount:y,interestRate:r,startDate:g,endDate:C,interestSelectType:k});E(e)}function q(){var e=d({amount:y,interestRate:r,startDate:g,endDate:C,interestSelectType:k});F(e)}Object(n.useEffect)((function(){K(),J?V(!1):q()}),[y,r,g,C,k]);return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{className:"formStyle mb-20",children:[Object(b.jsx)("h2",{className:"text-align",children:" Interest Calculator "}),Object(b.jsx)("div",{className:""!=Y?"c-red":"",children:""!=Y?Y:""}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{className:"display-block",children:"Start Date(dd/mm/yyyy) *"}),Object(b.jsx)(h.a,{selected:g,onChange:function(e){D(e)},dateFormat:"dd/MM/yyyy",peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",placeholderText:"dd/mm/yyyy \uf073",className:"datepicker_placeholder"}),Object(b.jsx)("i",{class:"far fa-calendar-alt"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{className:"display-block",children:"End Date(dd/mm/yyyy) *"}),Object(b.jsx)(h.a,{selected:C,onChange:function(e){N(e)},dateFormat:"dd/MM/yyyy",peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",placeholderText:"\uf073",className:"datepicker_placeholder"})]}),Object(b.jsxs)("div",{class:"amount",children:[Object(b.jsx)("label",{className:"labelStyle",children:"Amount *"}),Object(b.jsx)("input",{id:"amount",type:"number",className:"inputStyle input-icons",placeholder:"\uf156",onChange:function(e){var t=""===e.currentTarget.value?"0":Number(e.currentTarget.value);Number(e.currentTarget.value)<0?(t="1",document.getElementById("amount").value=t,O(t),K(),q()):O(t)},min:"0"})]}),Object(b.jsxs)("div",{class:"interest_rate",children:[Object(b.jsx)("label",{className:"labelStyle",children:"Interest Rate *"}),Object(b.jsx)("input",(t={id:"interest",type:"number",placeholder:"\uf295",className:"datepicker_placeholder"},Object(u.a)(t,"className","inputStyle input-icons"),Object(u.a)(t,"onChange",(function(e){var t=""===e.currentTarget.value?"0":Number(e.currentTarget.value);Number(e.currentTarget.value)<0?(t="1",document.getElementById("interest").value=t,i(t),K(),q()):i(t)})),Object(u.a)(t,"min","0"),t))]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{className:"labelStyle",children:"Interest type *"}),Object(b.jsx)("select",{onChange:function(e){M(e.currentTarget.value)},value:k,className:""==k?"my_class c-grey":"my_class",children:[{name:"Please select interest",value:""},{name:"simple interest",value:"simple interest"},{name:"compound interest",value:"compound interest"}].map((function(e,t){return Object(b.jsx)("option",{value:e.value,disabled:"Please select interest"==e.name,children:e.name},t)}))})]}),Object(b.jsx)("input",{type:"button",onClick:function(){j({amount:y,interestRate:r,startDate:g,endDate:C,interestSelectType:k,onCalculationClick:a})},value:"Calculate",className:B?"submitStyle button-disabled w-100":"submitStyle button-enabled w-100"})]})})};var p=function(e){return Object(b.jsx)("div",{className:"table-view",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("h1",{className:"title",children:"View Data"}),Object(b.jsx)("table",{className:"viewdata",children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Key"},"0"),Object(b.jsx)("th",{children:"Value"},"1")]}),e.allProps.map((function(e,t){return"Interests"==e.name&&e.value.length>0?e.value.map((function(e,a){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name},t+a),Object(b.jsx)("td",{children:Math.round(e.value)},t+a)]})})):Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name},t),Object(b.jsx)("td",{children:e.value},t)]})}))]})}),Object(b.jsx)("input",{type:"button",className:"submitStyle table-back-button button-enabled",onClick:e.onBackClick,value:"Back to calculator"})]})})};var y=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)([]),r=Object(c.a)(l,2),u=r[0],o=r[1];return Object(b.jsx)("div",{class:"main-screen",children:Object(b.jsx)("div",{className:"app-container",children:a?Object(b.jsx)(p,{onBackClick:function(e){s(!1)},allProps:u}):Object(b.jsx)(m,{onCalculationClick:function(e){s(!0),o(e)}})})})};Object(l.render)(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(r.a,{children:Object(b.jsx)(y,{})})}),document.getElementById("root"))},29:function(e,t,a){},51:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.0eb6a300.chunk.js.map