(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{106:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(2);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},107:function(e,t,a){e.exports={container:"ContactForm_container__1evjh",label:"ContactForm_label__MrT3T",input:"ContactForm_input__1_Yy8",button:"ContactForm_button__1JMdF"}},121:function(e,t,a){"use strict";a.r(t);var n=a(106),r=a(2),o=a(32),c=a(33),l=a(35),i=a(34),s=a(0),u=a.n(s),p=a(12),b=a(15),m=a(105),h=a(107),f=a.n(h),O=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,l=new Array(c),i=0;i<c;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:""},e.handleChange=function(t){var a=t.target,n=a.name,o=a.value;e.setState(Object(r.a)({},n,o))},e.handleSubmit=function(t){t.preventDefault(),e.props.onLogin(Object(n.a)({},e.state)),e.setState({email:"",password:""})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return u.a.createElement("div",null,u.a.createElement("h1",null,"Login Page"),u.a.createElement("form",{onSubmit:this.handleSubmit,className:f.a.container},u.a.createElement("label",{className:f.a.label},"Email",u.a.createElement("input",{className:f.a.input,type:"email",name:"email",value:t,autoComplete:"off",placeholder:"Enter email",onChange:this.handleChange})),u.a.createElement("label",{className:f.a.label},"Password",u.a.createElement("input",{className:f.a.input,type:"password",name:"password",value:a,autoComplete:"off",placeholder:"Enter password",onChange:this.handleChange})),u.a.createElement(m.a,{type:"submit",variant:"outline-primary"},"Login")))}}]),a}(s.Component);t.default=Object(p.b)(null,{onLogin:b.a.logIn})(O)}}]);
//# sourceMappingURL=login-view.3324180f.chunk.js.map