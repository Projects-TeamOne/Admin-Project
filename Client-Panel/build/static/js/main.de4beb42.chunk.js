(this["webpackJsonpclient-panel-app"]=this["webpackJsonpclient-panel-app"]||[]).push([[0],{217:function(e,a,t){e.exports=t.p+"static/media/spinner.2c9683e0.gif"},218:function(e,a,t){e.exports=t(427)},426:function(e,a,t){},427:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(215),c=t.n(r),s=t(11),i=t(12),o=t(14),m=t(13),u=t(8),d=t(5),p=t(10),b=t(138),h=t.n(b),E=t(140),f=t(217),g=t.n(f),v=function(){return l.a.createElement("div",null,l.a.createElement("img",{src:g.a,alt:"Loading...",style:{width:"350px",margin:"auto",display:"block"}}))},N=h()({}),O=Object(E.connectedRouterRedirect)({wrapperDisplayName:"UserIsAuthenticated",AuthenticatingComponent:v,allowRedirectBack:!0,redirectPath:function(e,a){return N.getRedirectQueryParam(a)||"/login"},authenticatingSelector:function(e){var a=e.firebase,t=a.auth,n=(a.profile,a.isInitializing);return!t.isLoaded||!0===n},authenticatedSelector:function(e){var a=e.firebase.auth;return a.isLoaded&&!a.isEmpty}}),y=Object(E.connectedRouterRedirect)({wrapperDisplayName:"UserIsNotAuthenticated",AuthenticatingComponent:v,allowRedirectBack:!1,redirectPath:function(e,a){return N.getRedirectQueryParam(a)||"/"},authenticatingSelector:function(e){var a=e.firebase,t=a.auth,n=a.isInitializing;return!t.isLoaded||!0===n},authenticatedSelector:function(e){var a=e.firebase.auth;return a.isLoaded&&a.isEmpty}}),C=t(6),j=t(64),w=t.n(j),S=(t(249),t(15)),A=t(141),k=t(24),B={message:null,messageType:null};w.a.initializeApp({apiKey:"AIzaSyBrm-CX-Qe4netBCY4EzhvRiykCzvHwLQ0",authDomain:"client-panel-24102000.firebaseapp.com",databaseURL:"https://client-panel-24102000.firebaseio.com",projectId:"client-panel-24102000",storageBucket:"client-panel-24102000.appspot.com",messagingSenderId:"170720546841"});var x=Object(C.c)(Object(S.reactReduxFirebase)(w.a,{userProfile:"users",useFirestoreForProfile:!0}),Object(A.reduxFirestore)(w.a))(C.d),D=Object(C.b)({firebase:S.firebaseReducer,firestore:A.firestoreReducer,notify:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"NOTIFY_USER":return Object(k.a)(Object(k.a)({},e),{},{message:a.message,messageType:a.messageType});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"DISABLE_BALANCE_ON_ADD":return Object(k.a)(Object(k.a)({},e),{},{disableBalanceOnAdd:a.payload});case"DISABLE_BALANCE_ON_EDIT":return Object(k.a)(Object(k.a)({},e),{},{disableBalanceOnEdit:a.payload});case"ALLOW_REGISTRATION":return Object(k.a)(Object(k.a)({},e),{},{allowRegistration:a.payload});default:return e}}});if(null===localStorage.getItem("settings")){localStorage.setItem("settings",JSON.stringify({disableBalanceOnAdd:!0,disableBalanceOnEdit:!1,allowRegistration:!0}))}var R=x(D,{settings:JSON.parse(localStorage.getItem("settings"))},Object(C.c)(Object(S.reactReduxFirebase)(w.a),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__():function(e){return e})),L=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={isAuthenticated:!1},e.onLogoutClick=function(a){a.preventDefault(),e.props.firebase.logout()},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state.isAuthenticated,a=this.props.auth,t=this.props.settings.allowRegistration;return l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-primary mb-4"},l.a.createElement("div",{className:"container"},l.a.createElement(u.b,{to:"/",className:"navbar-brand"},"Client Panel"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarMain"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarMain"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},e?l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/",className:"nav-link"},"Dashboard")):null),e?l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#!",className:"nav-link"},a.email)),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/settings",className:"nav-link"},"Settings")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#!",className:"nav-link",onClick:this.onLogoutClick},"Logout"))):null,t&&!e?l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/login",className:"nav-link"},"Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/register",className:"nav-link"},"Register"))):null)))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.auth.uid?{isAuthenticated:!0}:{isAuthenticated:!1}}}]),t}(n.Component),F=Object(C.c)(Object(S.firebaseConnect)(),Object(p.connect)((function(e,a){return{auth:e.firebase.auth,settings:e.settings}})))(L),I=t(51),_=t.n(I),T=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={totalOwed:null},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.clients,a=this.state.totalOwed,t=window.screen.width;return e?l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-7 "},l.a.createElement("h2",null,l.a.createElement("i",{className:"fas fa-users"})," Clients")),l.a.createElement("div",{className:"col-md-6 text-right"},l.a.createElement("h5",{className:"text-right text-secondary"},"Total Owed "," ",l.a.createElement("span",{className:"text-primary"},"$",parseFloat(a).toFixed(2))))),l.a.createElement("table",{className:_()({"table table-dark table-sm table-hover":t>576,"table table-dark table-hover":t>576})},l.a.createElement("thead",{className:"thead-inverse"},l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Balance"),l.a.createElement("th",null))),l.a.createElement("tbody",null,e.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.firstName," ",e.lastName),l.a.createElement("td",null,e.email),l.a.createElement("td",null,l.a.createElement("span",null,"$",parseFloat(e.balance).toFixed(2))),l.a.createElement("td",null,l.a.createElement(u.b,{to:"/client/".concat(e.id),className:"btn text-baby-blue btn-sm"},l.a.createElement("i",{className:"fas fa-sm fa-arrow-circle-right"})," Details")))}))))):l.a.createElement(v,null)}}],[{key:"getDerivedStateFromProps",value:function(e,a){var t=e.clients;return t?{totalOwed:t.reduce((function(e,a){return e+parseFloat(a.balance.toString())}),0)}:null}}]),t}(n.Component),U=Object(C.c)(Object(S.firestoreConnect)([{collection:"clients"}]),Object(p.connect)((function(e,a){return{clients:e.firestore.ordered.clients}})))(T),P=function(){return l.a.createElement(u.b,{to:"/client/add",className:"btn btn-block btn-grad"},l.a.createElement("i",{className:"fas fa-plus"})," New")},q=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-10 col-10"},l.a.createElement(U,null)),l.a.createElement("div",{className:"col-md-2 col-10"},l.a.createElement(P,null)))},J=t(27),V=t(3),z=t.n(V),M=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={firstName:"",lastName:"",email:"",phone:"",balance:""},e.onChange=function(a){return e.setState(Object(J.a)({},a.target.name,a.target.value))},e.onSubmit=function(a){a.preventDefault();var t=e.state,n=e.props,l=n.firestore,r=n.history;""===t.balance&&(t.balance=0),l.add({collection:"clients"},t).then((function(){return r.push("/")}))},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.settings.disableBalanceOnAdd;return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement(u.b,{to:"/",className:"btn btn-link"},l.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back To Dashboard"))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},"Add Client"),l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"firstName"},"First Name"),l.a.createElement("input",{type:"text",className:"form-control",name:"firstName",minLength:"2",required:!0,onChange:this.onChange,autoFocus:!0,value:this.state.firstName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"lastName"},"Last Name"),l.a.createElement("input",{type:"text",className:"form-control",name:"lastName",minLength:"2",required:!0,onChange:this.onChange,value:this.state.lastName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"type",className:"form-control",name:"email",minLength:"2",required:!0,onChange:this.onChange,value:this.state.email})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"phone"},"Phone"),l.a.createElement("input",{type:"text",className:"form-control",name:"phone",minLength:"10",onChange:this.onChange,value:this.state.phone})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"balance"},"Balance"),l.a.createElement("input",{type:"text",className:"form-control",name:"balance",onChange:this.onChange,value:this.state.balance,disabled:e})),l.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-primary btn-block"})))))}}]),t}(n.Component);M.propType={firestore:z.a.object.isRequired,settings:z.a.object.isRequired};var X=Object(C.c)(Object(S.firestoreConnect)(),Object(p.connect)((function(e,a){return{settings:e.settings}})))(M),Q=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={showBalanceUpdate:!1,balanceUpdateAmount:null},e.onChange=function(a){return e.setState(Object(J.a)({},a.target.name,a.target.value))},e.balanceSubmit=function(a){a.preventDefault();var t=e.props,n=t.client,l=t.firestore,r={balance:e.state.balanceUpdateAmount};l.update({collection:"clients",doc:n.id},r),console.log(e.state.balanceUpdateAmount)},e.Delete=function(){var a=e.props,t=a.client,n=a.firestore,l=a.history;n.delete({collection:"clients",doc:t.id}).then(l.push("/"))},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.props.client,t=this.state,n=t.showBalanceUpdate,r=t.balanceUpdateAmount,c="";return c=n?l.a.createElement("form",{onSubmit:this.balanceSubmit},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"number",step:"0.01",min:"0",className:"form-control",name:"balanceUpdateAmount",placeholder:"Add New Balance",value:r,onChange:this.onChange}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("input",{type:"submit",value:"Update",className:"btn btn-outline-dark"})))):null,a?l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement(u.b,{to:"/",className:"btn btn-link"},l.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back To Dashboard")),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"btn-group float-right"},l.a.createElement(u.b,{to:"/client/edit/".concat(a.id),className:"btn btn-purple"},"Edit"),l.a.createElement("button",{onClick:this.Delete,className:"btn btn-blue"},"Delete")))),l.a.createElement("hr",null),l.a.createElement("div",{className:"card"},l.a.createElement("h3",{className:"card-header bg-primary text-white pl-3"},a.firstName," ",a.lastName),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8 col-sm-6"},l.a.createElement("h4",null,"Client ID:"," ",l.a.createElement("span",{className:"text-secondary"},a.id)," ")),l.a.createElement("div",{className:"col-md-3 col-sm-6"},l.a.createElement("h3",{className:"pull-right"},"Balance: ",l.a.createElement("span",{className:_()({"text-danger":a.balance>0,"text-success":"0"===a.balance||0===a.balance})},"$",parseFloat(a.balance).toFixed(2)),l.a.createElement("small",null,l.a.createElement("a",{href:"#!",onClick:function(){return e.setState({showBalanceUpdate:!e.state.showBalanceUpdate})},style:{cursor:"pointer"}},l.a.createElement("i",{className:"fas fa-pencil-alt pl-2 text-secondary"})))),c)),l.a.createElement("hr",null),l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item"},"Contact Email: ",a.email),l.a.createElement("li",{className:"list-group-item"},"Contact Phone: ",a.phone))))):l.a.createElement(v,null)}}]),t}(n.Component),W=Object(C.c)(Object(S.firestoreConnect)((function(e){return[{collection:"clients",storeAs:"client",doc:e.match.params.id}]})),Object(p.connect)((function(e,a){var t=e.firestore.ordered;return{client:t.client&&t.client[0]}})))(Q),Y=0,$=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={},e.onChange=function(a){return e.setState(Object(k.a)(Object(k.a)({},e.state),{},Object(J.a)({},a.target.name,a.target.value)))},e.initState=function(a){return e.setState({e:a})},e.onSubmit=function(a){a.preventDefault();var t=e.state,n=e.props,l=n.client,r=n.firestore,c=n.history;""===l.balance&&(t.balance=0),r.update({collection:"clients",doc:l.id},t).then((function(){return c.push("/client/".concat(l.id))}))},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.client,a=this.props.settings.disableBalanceOnEdit;return e?(0===Y&&(this.initState(e),Y++),l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement(u.b,{to:"/client/".concat(e.id),className:"btn btn-link"},l.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back To Client Details"))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},"Edit Client"),l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"firstName"},"First Name"),l.a.createElement("input",{type:"text",className:"form-control",name:"firstName",minLength:"2",required:!0,onChange:this.onChange,autoFocus:!0,defaultValue:e.firstName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"lastName"},"Last Name"),l.a.createElement("input",{type:"text",className:"form-control",name:"lastName",minLength:"2",required:!0,onChange:this.onChange,defaultValue:e.lastName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"type",className:"form-control",name:"email",minLength:"2",required:!0,onChange:this.onChange,defaultValue:e.email})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"phone"},"Phone"),l.a.createElement("input",{type:"text",className:"form-control",name:"phone",minLength:"10",onChange:this.onChange,defaultValue:e.phone})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"balance"},"Balance"),l.a.createElement("input",{type:"number",step:"0.01",min:"0",className:"form-control",name:"balance",onChange:this.onChange,defaultValue:e.balance,disabled:a})),l.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-primary btn-block"})))))):l.a.createElement(v,null)}}]),t}(n.Component),G=Object(C.c)(Object(S.firestoreConnect)((function(e){return[{collection:"clients",storeAs:"client",doc:e.match.params.id}]})),Object(p.connect)((function(e,a){var t=e.firestore.ordered,n=e.settings;return{client:t.client&&t.client[0],settings:n}})))($),H=function(e,a){return{type:"NOTIFY_USER",message:e,messageType:a}},K=function(e){var a=e.message,t=e.messageType;return l.a.createElement("div",{className:_()("alert",{"alert-success":"success"===t,"alert-danger":"error"===t})},a)},Z=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={email:"",password:""},e.onChange=function(a){return e.setState(Object(J.a)({},a.target.name,a.target.value))},e.onSubmit=function(a){a.preventDefault();var t=e.props,n=t.firebase,l=t.notifyUser,r=e.state,c=r.email,s=r.password;n.login({email:c,password:s}).catch((function(e){return l("Invalid Login Credentials","error")}))},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.notify,a=e.message,t=e.messageType;return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mx-auto"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},a?l.a.createElement(K,{message:a,messageType:t}):null,l.a.createElement("h1",{className:"text-center pb-4 pt-3"},l.a.createElement("span",{className:"text-primary"},l.a.createElement("i",{className:"fas fa-lock pr-2"}),"Login")),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",className:"form-control",name:"email",required:!0,value:this.state.email,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",required:!0,value:this.state.password,onChange:this.onChange})),l.a.createElement("input",{type:"submit",value:"Login",className:"btn-primary btn-block py-1"}))))))}}]),t}(n.Component),ee=Object(C.c)(Object(S.firebaseConnect)(),Object(p.connect)((function(e,a){return{notify:e.notify}}),{notifyUser:H}))(Z),ae=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={email:"",password:"",confpass:""},e.onChange=function(a){return e.setState(Object(J.a)({},a.target.name,a.target.value))},e.onSubmit=function(a){a.preventDefault();var t=e.props,n=t.firebase,l=t.notifyUser,r=e.state,c=r.email,s=r.password;s===r.confpass?n.createUser({email:c,password:s}).catch((function(e){return l("User already exists","error")})):l("Passwords don't match","error")},e}return Object(i.a)(t,[{key:"componentWillMount",value:function(){this.props.settings.allowRegistration||this.props.history.push("/")}},{key:"render",value:function(){var e=this.props.notify,a=e.message,t=e.messageType;return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mx-auto"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},a?l.a.createElement(K,{message:a,messageType:t}):null,l.a.createElement("h1",{className:"text-center pb-4 pt-3"},l.a.createElement("span",{className:"text-primary"},l.a.createElement("i",{className:"fas fa-lock pr-2"}),"Register")),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",className:"form-control",name:"email",required:!0,value:this.state.email,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",required:!0,value:this.state.password,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Confirm Password"),l.a.createElement("input",{type:"password",className:"form-control",name:"confpass",required:!0,value:this.state.confpass,onChange:this.onChange})),l.a.createElement("input",{type:"submit",value:"Register",className:"btn-primary btn-block py-1"}))))))}}]),t}(n.Component),te=Object(C.c)(Object(S.firebaseConnect)(),Object(p.connect)((function(e,a){return{notify:e.notify,settings:e.settings}}),{notifyUser:H}))(ae),ne=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).disableBalanceOnAddChange=function(){(0,e.props.setDisableBalanceOnAdd)()},e.disableBalanceOnEditChange=function(){(0,e.props.setDisableBalanceOnEdit)()},e.allowRegistrationChange=function(){(0,e.props.setAllowRegistration)()},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.settings,a=e.disableBalanceOnAdd,t=e.disableBalanceOnEdit,n=e.allowRegistration;return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement(u.b,{to:"/",className:"btn btn-link"},l.a.createElement("i",{className:"fas fa-arrow-circle-left pr-2"}),"Back To Dashboard"))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},"Edit Settings"),l.a.createElement("div",{className:"card-body"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Allow Registration")," ",l.a.createElement("input",{type:"checkbox",name:"allowRegistration",checked:!!n,onChange:this.allowRegistrationChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Disable Balance On Add")," ",l.a.createElement("input",{type:"checkbox",name:"disableBalanceOnAdd",checked:!!a,onChange:this.disableBalanceOnAddChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Disable Balance On Edit")," ",l.a.createElement("input",{type:"checkbox",name:"disableBalanceOnEdit",checked:!!t,onChange:this.disableBalanceOnEditChange}))))))}}]),t}(n.Component),le=Object(p.connect)((function(e,a){return{auth:e.firebase.auth,settings:e.settings}}),{setAllowRegistration:function(){var e=JSON.parse(localStorage.getItem("settings"));return e.allowRegistration=!e.allowRegistration,localStorage.setItem("settings",JSON.stringify(e)),{type:"ALLOW_REGISTRATION",payload:e.allowRegistration}},setDisableBalanceOnAdd:function(){var e=JSON.parse(localStorage.getItem("settings"));return e.disableBalanceOnAdd=!e.disableBalanceOnAdd,localStorage.setItem("settings",JSON.stringify(e)),{type:"DISABLE_BALANCE_ON_ADD",payload:e.disableBalanceOnAdd}},setDisableBalanceOnEdit:function(){var e=JSON.parse(localStorage.getItem("settings"));return e.disableBalanceOnEdit=!e.disableBalanceOnEdit,localStorage.setItem("settings",JSON.stringify(e)),{type:"DISABLE_BALANCE_ON_EDIT",payload:e.disableBalanceOnEdit}}})(ne),re=(t(426),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(p.Provider,{store:R},l.a.createElement(u.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(F,null),l.a.createElement("div",{className:"container"},l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:O(q)}),l.a.createElement(d.a,{exact:!0,path:"/client/add",component:O(X)}),l.a.createElement(d.a,{exact:!0,path:"/client/:id",component:O(W)}),l.a.createElement(d.a,{exact:!0,path:"/client/edit/:id",component:O(G)}),l.a.createElement(d.a,{exact:!0,path:"/login",component:y(ee)}),l.a.createElement(d.a,{exact:!0,path:"/settings",component:O(le)}),l.a.createElement(d.a,{exact:!0,path:"/register",component:y(te)}))))))}}]),t}(n.Component));c.a.render(l.a.createElement(re,null),document.getElementById("root"))}},[[218,1,2]]]);
//# sourceMappingURL=main.de4beb42.chunk.js.map