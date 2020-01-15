(this.webpackJsonpexam_sem3_frontend=this.webpackJsonpexam_sem3_frontend||[]).push([[0],{10:function(e,t,n){},19:function(e,t,n){e.exports=n(30)},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(16),r=n.n(o),c=(n(24),n(4)),i=n(6),u=n(7);n(10);var s=function(e){e.isLoggedIn;var t=e.loginMsg,n=e.username;return l.a.createElement("div",null,l.a.createElement("ul",{className:"header"},l.a.createElement("li",null,l.a.createElement(u.b,{exact:!0,activeClassName:"active",to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(u.b,{activeClassName:"active",to:"/movies"},"Movie")),l.a.createElement("li",null,l.a.createElement(u.b,{activeClassName:"active",to:"/login-out"},t," ",l.a.createElement("small",null,n&&"(".concat(n,")"))))))};var m=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Home"),l.a.createElement("p",null,"Discribe how to use the front-end."))};var g=function(e){var t=e.movies,n=e.getMovieById,o=e.getMoviesByGenre,r=e.getMoviesAll,i=Object(a.useState)(""),u=Object(c.a)(i,2),s=u[0],m=u[1],g=Object(a.useState)(""),v=Object(c.a)(g,2),d=v[0],E=v[1];return l.a.createElement("div",null,l.a.createElement("h2",null,"Movies"),l.a.createElement("button",{onClick:function(){r()}},"Get all movies"),l.a.createElement("button",{onClick:function(){n(d)}},"Get movies by ID"),l.a.createElement("input",{type:"text",id:"movieid",placeholder:"ID",onChange:function(e){return E(e.target.value)}}),l.a.createElement("button",{onClick:function(){o(s)}},"Get movies by genre"),l.a.createElement("input",{type:"text",id:"genrename",placeholder:"Genre",onChange:function(e){return m(e.target.value)}}),l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Id"),l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Year"),l.a.createElement("th",null,"Votes"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.id),l.a.createElement("td",null,e.title),l.a.createElement("td",null,e.year),l.a.createElement("td",null,e.votes))})))))};function v(e){var t=e.isLoggedIn,n=e.login,o=e.logout,r=Object(a.useState)(""),i=Object(c.a)(r,2),u=i[0],s=i[1],m=Object(a.useState)(""),g=Object(c.a)(m,2),v=g[0],d=g[1];return l.a.createElement("div",null,!t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Login"),l.a.createElement("form",{onChange:function(e){},onSubmit:function(){n(u,v)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",className:"form-control",id:"username",placeholder:"User name",onChange:function(e){return s(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",onChange:function(e){return d(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"col-sm-offset-3 col-sm-9"},l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))))),t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h4",null,"Logout")),l.a.createElement("div",{className:"modal-body"},"Are you sure you want to log-off?"),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{onClick:o,className:"btn btn-primary btn-block"},"Logout")))))}function d(){return l.a.createElement("div",null,l.a.createElement("h2",null,"This URL does not exist!"))}var E=function(e){var t=e.apiFacade,n=(e.match,Object(a.useState)(!1)),o=Object(c.a)(n,2),r=o[0],u=o[1],E=Object(a.useState)(""),f=Object(c.a)(E,2),h=f[0],p=f[1],b={title:"",year:"",id:"",votes:""},y=Object(a.useState)([b]),j=Object(c.a)(y,2),M=j[0],I=j[1],N=Object(i.f)();return Object(a.useEffect)((function(){}),[t]),l.a.createElement("div",null,l.a.createElement(s,{loginMsg:r?"Logout":"Login",isLoggedIn:r,username:h}),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(m,null)),l.a.createElement(i.a,{path:"/movies",exact:!0},l.a.createElement(g,{movies:M,getMovieById:function(e){console.log("getMovieById:",e),t.getMovieById(e).then((function(e){console.log(e);var t=[];t.push(e),I(t)})).catch((function(e){console.log("Ups refreshitems:"+e),I([b])}))},getMoviesByGenre:function(e){console.log("getMoviesByGenre:",e),t.getMoviesByGenre(e).then((function(e){I(e)})).catch((function(e){console.log("Ups refreshitems:"+e),I([b])}))},getMoviesAll:function(){console.log("getMoviesAll"),t.getMoviesAll().then((function(e){I(e)})).catch((function(e){return console.log("Ups refreshitems:"+e)}))}})),l.a.createElement(i.a,{path:"/login-out"},l.a.createElement(v,{isLoggedIn:r,login:function(e,n){console.log(e,n),t.login(e,n).then((function(n){u(t.loggedIn),p(e),N.push("/")})).catch((function(e){console.log("Ups login:"+e)})),N.push("/")},logout:function(){t.logout(),u(t.loggedIn),p(""),N.push("/")}})),l.a.createElement(i.a,null,l.a.createElement(d,null))))},f="https://aieou.dk/exam_sem3/api";var h=function(){var e=function(e,t,a){var o={method:e,headers:{"Content-type":"application/json",Accept:"application/json"}};return t&&l()&&(o.headers["x-access-token"]=n()),a&&(o.body=JSON.stringify(a)),o};function t(e){return console.log(e),e.ok?e.json():(a(),Promise.reject({status:e.status,fullError:e.json()}))}var n=function(){return localStorage.getItem("jwtToken")},a=function(){localStorage.removeItem("jwtToken")},l=function(){var e=null!=n();return e};return{login:function(n,a){var l=e("POST",!0,{username:n,password:a});return fetch(f+"/login",l).then(t).then((function(e){var t;t=e.token,localStorage.setItem("jwtToken",t),console.log("apiFacade-login: ",e.token)}))},logout:function(){a()},loggedIn:l,getMovieById:function(n){console.log("getMovieById: ",f,l());var a=e("GET",!0);return fetch(f+"/movie/id/"+n,a).then(t)},getMoviesByGenre:function(n){console.log("getMoviesByGenre: ",f,l());var a=e("GET",!0);return fetch(f+"/movie/genre/name/"+n,a).then(t)},getMoviesAll:function(){console.log("getMoviesAll: ",f,l());var n=e("GET",!0);return fetch(f+"/movie/all",n).then(t)}}}();r.a.render(l.a.createElement((function(){return l.a.createElement("div",{style:{marginLeft:"5%",marginRight:"5%"}},l.a.createElement(u.a,null,l.a.createElement(E,{apiFacade:h})))}),null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.14ba93b5.chunk.js.map