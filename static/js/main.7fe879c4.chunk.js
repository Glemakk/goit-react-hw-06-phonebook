(this["webpackJsonpreact-app-start-package"]=this["webpackJsonpreact-app-start-package"]||[]).push([[0],{30:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var r,c,a=t(1),i=t.n(a),o=t(10),b=t.n(o),s=(t(30),t(16)),d=t(7),l=t(21),j=t.n(l),u=t(9),x=t(22),p=t.n(x),O=t(5),h=t(12),f=Object(d.b)("FILTER_FIND"),g=Object(d.c)("",Object(h.a)({},f,(function(e,n){return n.payload}))),m=t(17),v=Object(d.b)("ITEM_ADD"),C=Object(d.b)("ITEM_DELETE"),k=Object(d.c)([],(r={},Object(h.a)(r,v,(function(e,n){var t=n.payload;if(!e.find((function(e){return e.name.includes(t.name)})))return[].concat(Object(s.a)(e),[t]);m.b.warn("".concat(t.name," is already in contacts"))})),Object(h.a)(r,C,(function(e,n){var t=n.payload;return e.filter((function(e){return e.id!==t}))})),r)),w=Object(O.b)({items:k,filter:g}),y=[].concat(Object(s.a)(Object(d.d)({serializableCheck:{ignoredActions:[u.a,u.f,u.b,u.c,u.d,u.e]}})),[j.a]),z={key:"contacts",storage:p.a},A=Object(u.g)(z,w),P=Object(d.a)({reducer:A,middleware:y,devTools:!1}),T={store:P,persistor:Object(u.h)(P)},E=t(8),F=t(23),D=(t(38),t(20)),I=t(43),L=t(14),S=t(0),M=t(3),B=t(4),J=B.a.button(c||(c=Object(M.a)(["\n  font-weight: 400;\n  line-height: 1.33;\n    width: 197px;\n  background-color: orange;\n  margin-top: 15px;\n  margin-left: 29px;\n  border: none;\n  outline: none;\n  border-radius: 4px;\n  text-align: center;\n  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),\n    0px 2px 1px rgb(0 0 0 / 20%);\n    &:focus,\n  &:hover {\n    box-shadow: 2px 3px 17px 0px rgb(0 0 0 / 78%), -1px 0px 2px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);\n    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),N=t(2);var Z,_,q,R,$,G,H=function(e){var n=e.onClick,t=e.text;return Object(N.jsx)(J,{onClick:n,children:t})},K=B.a.form(Z||(Z=Object(M.a)(["\n  padding: 15px;\n"]))),Q=B.a.div(_||(_=Object(M.a)(["\n  display: flex;\n"]))),U=B.a.input(q||(q=Object(M.a)(["\n \n  padding: 3px 10px;\n border: 2px solid rgba(33, 33, 33, 0.2);\n box-sizing: border-box;\n  border-radius: 4px;\n  &:focus,\n  &:hover {\n    border-color: #00adffa8;\n    outline: none;\n    transition: border-color 350ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),V=function(){var e=Object(a.useState)(""),n=Object(D.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),i=Object(D.a)(c,2),o=i[0],b=i[1],s=Object(E.b)(),d=function(e){var n=e.target,t=n.name,c=n.value;switch(t){case"name":r(c);break;case"number":b(c);break;default:return}},l=function(){r(""),b("")};return Object(N.jsx)("div",{children:Object(N.jsxs)(K,{onSubmit:function(e){e.preventDefault();var n=Object(I.a)();s(v({id:n,name:t,number:o})),l()},children:[Object(N.jsxs)("label",{children:[Object(N.jsx)("h2",{children:"Name"}),Object(N.jsxs)(Q,{children:[Object(N.jsx)(S.b.Provider,{value:{size:"23px"},children:Object(N.jsx)(L.a,{})}),"\xa0",Object(N.jsx)(U,{type:"text",name:"name",value:t,onChange:d,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off"})]})]}),Object(N.jsxs)("label",{children:[Object(N.jsx)("h2",{children:"Number"}),Object(N.jsxs)(Q,{children:[Object(N.jsx)(S.b.Provider,{value:{size:"23px"},children:Object(N.jsx)(L.b,{})}),"\xa0",Object(N.jsx)(U,{type:"tel",name:"number",value:o,onChange:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,autoComplete:"off"})]})]}),Object(N.jsx)(H,{text:"Add contact"})]})})},W=t(24),X=function(e){return e.filter},Y=function(e){var n=X(e),t=function(e){return e.items}(e),r=n.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(r)}))},ee=B.a.ul(R||(R=Object(M.a)(["\n  border-radius: 4px;\n  padding: 24px;\n  //   background-color: #7c7c7c;\n  //   color: #fff;\n"]))),ne=B.a.li($||($=Object(M.a)(["\n  display: flex;\n  padding-bottom: 10px;\n  justify-content: space-between;\n  align-items: baseline;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n"]))),te=B.a.button(G||(G=Object(M.a)(["\n  background-color: transparent;\n  border: none;\ntransition: 100ms;\n    &:focus,\n  &:hover {\n\n    transform: scale(1.1);\n    color: red;\n"])));function re(e){var n=e.children,t=e.onClick;return Object(N.jsx)(te,{type:"button",onClick:t,children:n})}re.defaultProps={onClick:function(){return null},children:null};var ce,ae=re;function ie(){var e=Object(E.b)(),n=Object(E.c)(Y);return Object(N.jsx)(ee,{children:n.map((function(n){return Object(N.jsxs)(ne,{children:[n.name,": ",n.number,Object(N.jsx)(ae,{onClick:function(){return t=n.id,void e(C(t));var t},children:Object(N.jsx)(S.b.Provider,{value:{size:"23px"},children:Object(N.jsx)(W.a,{})})})]},n.id)}))})}var oe,be=B.a.div(ce||(ce=Object(M.a)(["\n  padding: 15px;\n"])));function se(e){e.onChange;var n=Object(E.b)(),t=Object(E.c)(X);return Object(N.jsx)("label",{children:Object(N.jsxs)(be,{children:[Object(N.jsx)("h3",{children:"Find contacts by name"}),Object(N.jsxs)(Q,{children:[Object(N.jsx)(S.b.Provider,{value:{size:"23px"},children:Object(N.jsx)(L.c,{})}),"\xa0",Object(N.jsx)(U,{type:"text",name:"filter",value:t,onChange:function(e){return n(f(e.currentTarget.value))},placeholder:"Search contact",autoComplete:"off"})]})]})})}var de=B.a.div(oe||(oe=Object(M.a)(["\n  margin: 0 auto;\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: rgb(0 0 0 / 12%);\n  background-image: linear-gradient(28deg, #a8ff36, transparent);\n  border: 2px solid #4a4a4a;\n  border-radius: 5px;\n  max-width: 400px;\n"])));var le=function(e){var n=e.children;return Object(N.jsx)(de,{children:n})},je=function(){return Object(N.jsxs)(le,{children:[Object(N.jsx)("h1",{children:"Phonebook"}),Object(N.jsx)(V,{}),Object(N.jsx)("h2",{children:"Contacts"}),Object(N.jsx)(se,{}),Object(N.jsx)(ie,{}),Object(N.jsx)(m.a,{position:"top-center",autoClose:2e3})]})},ue=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),a(e),i(e)}))};b.a.render(Object(N.jsx)(i.a.StrictMode,{children:Object(N.jsx)(E.a,{store:T.store,children:Object(N.jsx)(F.a,{loading:null,persistor:T.persistor,children:Object(N.jsx)(je,{})})})}),document.getElementById("root")),ue()}},[[41,1,2]]]);
//# sourceMappingURL=main.7fe879c4.chunk.js.map