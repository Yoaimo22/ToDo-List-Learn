(this["webpackJsonptodolist-learn"]=this["webpackJsonptodolist-learn"]||[]).push([[0],{94:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),s=n(27),a=n.n(s),i=n(13),j=n(7),r=n(46),l=n(55),b=n(43),d=n(45),g=n(47),u=n(48),O=n(49),h=n(52),x=n(4),m=function(e){var t=e.setTextTodo,n=e.getTextTodo,o=e.setTodo,s=e.getTodos,a=e.setStatus,m=e.setAnimateInsert,f=e.getAnimateInsert,p=e.insertIdLast,T=e.getLengthTask,k=e.setLengthTask,I=Object(j.b)(),L=Object(i.a)(I,2),v=L[0],S=L[1],C=Object(c.useState)(""),w=Object(i.a)(C,2),A=w[0],F=w[1],y=Object(c.useState)(""),_=Object(i.a)(y,2),E=_[0],z=_[1],D=function(e){if(e.preventDefault(),!0!==v&&S.toggle(),""===n)F("error"),z("Inputan tidak boleh kosong!");else{var c={id:1e3*Math.random(),text:n,completed:!1,date:Date.now()};o([].concat(Object(l.a)(s),[c])),p(c.id),m.toggle(),t(""),F("success"),z("Todo telah ditambahkan"),k(T+1)}};Object(c.useEffect)((function(){setTimeout((function(){!0===f&&(m.toggle(),p(""))}),1e3)}));return Object(x.jsxs)(x.Fragment,{children:[v&&Object(x.jsxs)(b.a,{status:A,mb:4,children:[Object(x.jsx)(b.b,{}),E,Object(x.jsx)(d.a,{position:"absolute",right:"8px",top:"8px",onClick:function(){S.toggle(),F(""),z("")}})]}),Object(x.jsxs)(r.h,{columns:2,spacing:10,mb:10,children:[Object(x.jsxs)(g.b,{size:"md",children:[Object(x.jsx)(g.a,{value:n,pr:"4.5rem",placeholder:"Enter Todo List",onChange:function(e){t(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&D(e)}}),Object(x.jsx)(g.c,{width:"4.5rem",children:Object(x.jsx)(u.a,{h:"1.75rem",size:"sm",onClick:D,bg:"teal.400",color:"white",children:"+"})})]}),Object(x.jsxs)(O.a,{icon:Object(x.jsx)(h.a,{}),placeholder:"Filter Todo List",onChange:function(e){a(e.target.value)},children:[Object(x.jsx)("option",{value:"all",children:"All"}),Object(x.jsx)("option",{value:"completed",children:"Completed"}),Object(x.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})]})]})},f=n(42),p=n(38),T=n(50),k=function(e){var t=e.todo,n=e.text,o=e.completed,s=e.getTodos,a=e.setTodo,l=e.getAnimateInsert,b=e.getIdLast,d=e.getLengthTask,g=e.setLengthTask,u=Object(j.b)(),O=Object(i.a)(u,2),h=O[0],m=O[1];Object(c.useEffect)((function(){h&&m.toggle()}),[]);return Object(x.jsx)(r.k,{mt:3,mb:3,className:"".concat(l&&t.id===b?"animate__animated animate__fadeInDown":""," ").concat(h?"animate__animated animate__fadeOutRight":""),children:Object(x.jsx)(r.b,{bg:o?"blue":"tomato",w:"100%",p:4,color:"white",children:Object(x.jsxs)(r.e,{children:[Object(x.jsx)(T.a,{colorScheme:"blue",onChange:function(){g(d-1),a(s.map((function(e){return e.id!==t.id?e:Object(f.a)(Object(f.a)({},e),{},{completed:!e.completed})})))},defaultIsChecked:o,children:o?Object(x.jsx)(r.j,{as:"del",children:n}):Object(x.jsx)(r.j,{children:n})}),Object(x.jsx)(r.i,{}),Object(x.jsx)(p.a,{mt:1,onClick:function(){!1===t.completed&&g(d-1),m.toggle(),setTimeout((function(){a(s.filter((function(e){return e.id!==t.id})))}),1e3)}})]})})})},I=n(41),L=function(e){var t=e.setTodo,n=e.getTodos,c=e.getFilterTodos,o=e.getAnimateInsert,s=e.getIdLast,a=e.getLengthTask,i=e.setLengthTask;return Object(x.jsxs)(x.Fragment,{children:[a>0&&"You have ".concat(a," pending task"),c.length>0?c.map((function(e){return Object(x.jsx)(k,{todo:e,getTodos:n,text:e.text,completed:e.completed,setTodo:t,getAnimateInsert:o,getIdLast:s,getLengthTask:a,setLengthTask:i},e.id)})):Object(x.jsx)(r.c,{mr:1,children:Object(x.jsx)(r.e,{children:Object(x.jsxs)(r.a,{variant:"outline",colorScheme:"green",p:"4",m:"20",borderRadius:"xl",children:[Object(x.jsx)(I.a,{}),"No Todos, yay!!!",Object(x.jsx)(I.a,{})]})})})]})},v=n(11),S=n(30),C=function(){var e=Object(v.b)(),t=e.colorMode,n=e.toggleColorMode;return Object(x.jsxs)(r.k,{p:4,children:[Object(x.jsx)(u.b,{icon:"light"===t?Object(x.jsx)(S.b,{}):Object(x.jsx)(S.a,{}),isRound:"true",size:"lg",alignSelf:"flex-end",onClick:n}),Object(x.jsx)(r.f,{mb:"8",fontWeight:"extrabold",size:"2xl",bgGradient:"linear(to-r, pink.500, pink.300, blue.500)",bgClip:"text",children:"Todo Application"})]})},w=n(53),A=n(54),F=function(){return Object(x.jsx)(r.b,{bg:Object(v.c)("black.600","blue.900"),px:10,children:Object(x.jsxs)(r.e,{h:70,alignItems:"center",justifyContent:"space-between",children:[Object(x.jsxs)(r.b,{children:[" WhatsApp",Object(x.jsx)(r.g,{href:"https://bit.ly/3j2lxXY",children:Object(x.jsx)(w.a,{})})]}),Object(x.jsx)(r.e,{alignItems:"center",children:Object(x.jsxs)(r.b,{children:[" TikTok",Object(x.jsx)(r.g,{href:"https://www.tiktok.com/@pesmobile_exe",children:Object(x.jsx)(S.c,{})})]})}),Object(x.jsx)(r.e,{alignItems:"right",children:Object(x.jsxs)(r.b,{children:[" Github",Object(x.jsx)(r.g,{href:"https://github.com/yoaimo22",w:100,children:Object(x.jsx)(A.a,{})})]})})]})})},y=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(""),a=Object(i.a)(s,2),l=a[0],b=a[1],d=Object(c.useState)([]),g=Object(i.a)(d,2),u=g[0],O=g[1],h=Object(c.useState)("all"),f=Object(i.a)(h,2),p=f[0],T=f[1],k=Object(c.useState)([]),I=Object(i.a)(k,2),v=I[0],S=I[1],w=Object(j.b)(),A=Object(i.a)(w,2),y=A[0],_=A[1],E=Object(c.useState)(0),z=Object(i.a)(E,2),D=z[0],J=z[1];Object(c.useEffect)((function(){B()}),[]),Object(c.useEffect)((function(){N(),R(),G()}),[u.sort((function(e,t){return t.date-e.date})),p]);var M=function(e){S(u.filter((function(t){return t.completed===e})))},N=function(){switch(p){case"completed":M(!0);break;case"uncompleted":M(!1);break;default:S(u)}},R=function(){localStorage.setItem("getTodos",JSON.stringify(u))},B=function(){if(null!==localStorage.getItem("getTodos")){var e=JSON.parse(localStorage.getItem("getTodos"));O(e)}},G=function(){var e=u.filter((function(e){return!1===e.completed}));J(e.length)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(F,{}),Object(x.jsx)(C,{}),Object(x.jsxs)(r.d,{children:[Object(x.jsx)(m,{getTextTodo:n,setTextTodo:o,getTodos:u,setTodo:O,setStatus:T,filterHandler:N,getAnimateInsert:y,setAnimateInsert:_,insertIdLast:b,getLengthTask:D,setLengthTask:J}),Object(x.jsx)(L,{getFilterTodos:v,setTodo:O,getTodos:u,getAnimateInsert:y,getIdLast:l,getLengthTask:D,setLengthTask:J})]})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),s(e),a(e)}))},E=n(19);n(93);a.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(E.a,{children:Object(x.jsx)(y,{})})}),document.getElementById("root")),_()}},[[94,1,2]]]);
//# sourceMappingURL=main.300bfa2e.chunk.js.map