(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{151:function(e,t,n){},157:function(e,t){},159:function(e,t){},170:function(e,t){},172:function(e,t){},199:function(e,t){},201:function(e,t){},202:function(e,t){},207:function(e,t){},209:function(e,t){},228:function(e,t){},240:function(e,t){},243:function(e,t){},254:function(e,t,n){},255:function(e,t,n){},257:function(e,t,n){},283:function(e,t,n){"use strict";n.r(t);var c=n(149),s=n(32),a=(n(151),n(152)),r="uI2ooxtwHeI6q69PS98fx9SWVGbpQohO",o=n(0),u=n.n(o),i=n(31),j=n(2);var l=function(e){var t=e.username,n=e.roomname,u=e.socket,l=Object(o.useState)(""),m=Object(s.a)(l,2),h=m[0],b=m[1],d=Object(o.useState)([]),O=Object(s.a)(d,2),f=O[0],x=O[1],p=Object(i.b)();Object(o.useEffect)((function(){u.on("message",(function(e){var t,n,s,o=function(e,t){return e.startsWith("Welcome")||e.startsWith(t)?e:a.decrypt(r,e)}(e.text,e.username);t=!1,n=o,s=e.text,p(function(e,t,n){return{type:"PROCESS",payload:{encrypt:e,text:t,cypher:n}}}(t,n,s)),console.log(o);var u=f;u.push({userId:e.userId,username:e.username,text:o}),x(Object(c.a)(u))}))}),[u]);var v=function(){if(""!==h){var e=function(e){return a.encrypt(r,e)}(h);u.emit("chat",e),b("")}},g=Object(o.useRef)(null);return Object(o.useEffect)((function(){g.current.scrollIntoView({behavior:"smooth"})}),[f]),console.log(f,"mess"),Object(j.jsxs)("div",{className:"chat",children:[Object(j.jsx)("div",{className:"user-name",children:Object(j.jsxs)("h2",{children:[t," ",Object(j.jsxs)("span",{style:{fontSize:"0.7rem"},children:["in ",n]})]})}),Object(j.jsxs)("div",{className:"chat-message",children:[f.map((function(e){return e.username===t?Object(j.jsxs)("div",{className:"message",children:[Object(j.jsx)("p",{children:e.text}),Object(j.jsx)("span",{children:e.username})]}):Object(j.jsxs)("div",{className:"message mess-right",children:[Object(j.jsxs)("p",{children:[e.text," "]}),Object(j.jsx)("span",{children:e.username})]})})),Object(j.jsx)("div",{ref:g})]}),Object(j.jsxs)("div",{className:"send",children:[Object(j.jsx)("input",{placeholder:"enter your message",value:h,onChange:function(e){return b(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&v()}}),Object(j.jsx)("button",{onClick:v,children:"Send"})]})]})};n(254);var m=function(){return Object(i.c)((function(e){return e.ProcessReducer})),Object(j.jsx)("div",{className:"process"})},h=(n(255),n(54));var b=function(e){var t=e.socket,n=Object(o.useState)(""),c=Object(s.a)(n,2),a=c[0],r=c[1],u=Object(o.useState)(""),i=Object(s.a)(u,2),l=i[0],m=i[1];return Object(j.jsxs)("div",{className:"homepage",children:[Object(j.jsx)("h1",{children:"Welcome to DHAAN"}),Object(j.jsx)("input",{placeholder:"Input your user name",value:a,onChange:function(e){return r(e.target.value)}}),Object(j.jsx)("input",{placeholder:"Input the room name",value:l,onChange:function(e){return m(e.target.value)}}),Object(j.jsx)(h.b,{to:"/chat/".concat(l,"/").concat(a),children:Object(j.jsx)("button",{onClick:function(){""!==a&&""!==l?t.emit("joinRoom",{username:a,roomname:l}):(alert("username and roomname are must !"),window.location.reload())},children:"Join"})})]})},d=n(5),O=(n(257),n(148)),f=n.n(O).a.connect("/");function x(e){return Object(j.jsxs)(u.a.Fragment,{children:[Object(j.jsx)("div",{className:"right",children:Object(j.jsx)(l,{username:e.match.params.username,roomname:e.match.params.roomname,socket:f})}),Object(j.jsx)("div",{className:"left",children:Object(j.jsx)(m,{})})]})}var p=function(){return Object(j.jsx)(h.a,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/",exact:!0,children:Object(j.jsx)(b,{socket:f})}),Object(j.jsx)(d.a,{path:"/chat/:roomname/:username",component:x})]})})})},v=n(150),g=n(55),y=Object(g.a)({ProcessReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROCESS":return Object(v.a)({},t.payload);default:return e}}}),S=n(52),N=n.n(S),k=Object(g.b)(y);N.a.render(Object(j.jsx)(i.a,{store:k,children:Object(j.jsx)(p,{})}),document.getElementById("chatSrc"))}},[[283,1,2]]]);
//# sourceMappingURL=main.a0956e1f.chunk.js.map