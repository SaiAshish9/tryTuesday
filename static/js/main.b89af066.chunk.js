(this.webpackJsonptrytuesday=this.webpackJsonptrytuesday||[]).push([[0],{17:function(e,t,a){e.exports=a(33)},22:function(e,t,a){},23:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),c=a.n(r),l=(a(22),a(1)),i=(a(23),a(6)),s=Object(i.e)((function(e){var t=e.history,a=Object(n.useState)("black"),r=Object(l.a)(a,2),c=r[0],i=r[1];return o.a.createElement("div",{style:{marginTop:"20vh"}},o.a.createElement("h4",{style:{padding:10,fontFamily:"Roberto"}},"Hello there! Help us to help you dress better by answering the following questions. This will let us know you better and what you want and come up with the perfect look for you!"),o.a.createElement("button",{className:"btn btn-dark",style:{marginTop:30,backgroundColor:"".concat("white"===c?"white":"black"),color:"".concat("white"===c?"black":"white"),boxShadow:"none"},onMouseOver:function(){i("white")},onMouseLeave:function(){i("black")},onClick:function(e){e.preventDefault(),t.push("/step1")}},"Get Started"))})),u=function(){var e=Object(n.useState)("black"),t=Object(l.a)(e,2),a=(t[0],t[1]),r=Object(n.useState)(""),c=Object(l.a)(r,2),i=c[0],s=c[1];return o.a.createElement("div",null,["18-25","26-33","34-41","42-49"].map((function(e,t){return o.a.createElement("button",{className:"btn btn-outline-dark ",style:{margin:30,fontSize:25,width:300,fontWeight:"bold",backgroundColor:"".concat(i==e?"#343a40":""),color:"".concat(i==e?"white":""),boxShadow:"none"},onClick:function(){a("black"),s(e)}},e)})))},m=function(){var e=Object(n.useState)("black"),t=Object(l.a)(e,2),a=(t[0],t[1]),r=Object(n.useState)(""),c=Object(l.a)(r,2),i=c[0],s=c[1];return o.a.createElement("div",null,o.a.createElement("h4",{style:{padding:10,fontFamily:"Roberto"}},"The basic shape that your body takes that can be categorised and referred to while determining the best choice of garments.        "),["Garments","Curvy","Fit","Tall","Plus"].map((function(e,t){return o.a.createElement("button",{className:"btn btn-outline-dark ",style:{margin:20,marginTop:50,fontSize:20,width:200,fontWeight:"bold",backgroundColor:"".concat(i==e?"#343a40":""),color:"".concat(i==e?"white":""),boxShadow:"none"},onClick:function(){a("black"),s(e)}},e)})))},h=function(){var e=Object(n.useState)("black"),t=Object(l.a)(e,2),a=(t[0],t[1]),r=Object(n.useState)(""),c=Object(l.a)(r,2),i=c[0],s=c[1];return o.a.createElement("div",null,o.a.createElement("h4",{style:{padding:10,fontFamily:"Roberto"}},"The category of clothes that you usually wear, are comfortable with or matches your personality"),["Chic","Boho","Classic","Streetwear","Sexy","Minimal"].map((function(e,t){return o.a.createElement("button",{className:"btn btn-outline-dark ",style:{margin:20,marginTop:50,fontSize:20,width:200,fontWeight:"bold",backgroundColor:"".concat(i==e?"#343a40":""),color:"".concat(i==e?"white":""),boxShadow:"none"},onClick:function(){a("black"),s(e)}},e)})))},b=function(){var e=Object(n.useState)("black"),t=Object(l.a)(e,2),a=(t[0],t[1]),r=Object(n.useState)(""),c=Object(l.a)(r,2),i=c[0],s=c[1];return o.a.createElement("div",null,o.a.createElement("h4",{style:{padding:10,fontFamily:"Roberto"}},"The fit you usually wear in dresses or bottoms"),["Slim","Regular","Relaxed","Boxy"].map((function(e,t){return o.a.createElement("button",{className:"btn btn-outline-dark ",style:{margin:20,marginTop:50,fontSize:20,width:200,fontWeight:"bold",backgroundColor:"".concat(i==e?"#343a40":""),color:"".concat(i==e?"white":""),boxShadow:"none"},onClick:function(){a("black"),s(e)}},e)})))},d=function(){var e=Object(n.useState)("black"),t=Object(l.a)(e,2),a=(t[0],t[1]),r=Object(n.useState)(""),c=Object(l.a)(r,2),i=c[0],s=c[1];return o.a.createElement("div",null,o.a.createElement("h4",{style:{padding:10,fontFamily:"Roberto"}},"Which situation you want to be styled for"),["day to day","corporate wear","business casuals","weekend","special occasion"].map((function(e,t){return o.a.createElement("button",{className:"btn btn-outline-dark ",style:{margin:20,marginTop:50,fontSize:20,width:200,fontWeight:"bold",backgroundColor:"".concat(i==e?"#343a40":""),color:"".concat(i==e?"white":""),boxShadow:"none"},onClick:function(){a("black"),s(e)}},e)})))},p=Object(i.e)((function(e){var t=e.history,a=Object(n.useState)("black"),r=Object(l.a)(a,2),c=(r[0],r[1]),i=Object(n.useState)(""),s=Object(l.a)(i,2),u=s[0],m=s[1];return o.a.createElement("div",null,o.a.createElement("h4",{style:{padding:10,fontFamily:"Roberto"}},"How much you are willing to spend on your look"),["1000 - 2000","2000 - 3000","3000 - 5000","5000 above"].map((function(e,a){return o.a.createElement("button",{className:"btn btn-outline-dark ",style:{margin:20,marginTop:50,fontSize:20,width:200,fontWeight:"bold",backgroundColor:"".concat(u==e?"#343a40":""),color:"".concat(u==e?"white":""),boxShadow:"none"},onClick:function(){c("black"),m(e),t.push("/feedback")}},e)})))})),f=Object(i.e)((function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=(t[0],t[1]);return o.a.createElement("div",null,a?o.a.createElement("h4",{style:{padding:10,fontFamily:"Roberto",marginTop:"30vh"}},"Your response is recorded."):o.a.createElement("div",null,o.a.createElement("h4",{style:{padding:10,fontFamily:"Roberto",marginTop:"30vh"}},"Any other specifications you would like us to keep in mind while sending to you the recommendations."),o.a.createElement("textarea",{placeholder:"Type your feedback here...",rows:"10",style:{width:"100%",marginTop:10}}),o.a.createElement("button",{className:"btn btn-outline-dark btn-lg",style:{position:"relative",left:"43.5%",top:10},onClick:function(e){e.preventDefault(),a(!0)}},"Submit")))}));var y=Object(i.e)((function(e){var t=e.history,a=Object(n.useState)(1),r=Object(l.a)(a,2),c=r[0],y=r[1];return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{style:{textAlign:"center",width:"100%",height:"8vh",borderBottom:"1px solid black"}},o.a.createElement("a",{style:{cursor:"pointer",position:"absolute",left:50,top:20},onClick:function(e){e.preventDefault(),t.push("/")}},o.a.createElement("i",{className:"fa fa-home fa-2x","area-hidden":"true"})),o.a.createElement("h4",{style:{marginTop:"2vh",fontFamily:"'Roboto', sans-serif"}},"Questionnaire")),"/"!=t.location.pathname&&"/feedback"!=t.location.pathname?o.a.createElement("div",{className:"row",style:{width:"100%",height:"20vh",textAlign:"center",display:"inline"}},c>1?o.a.createElement("a",{style:{cursor:"pointer"},onClick:function(){y(c>1?c-1:c),t.push("/step"+parseInt(c-1))}},o.a.createElement("i",{className:"fa fa-angle-left ",style:{position:"absolute",left:"25%",fontSize:"6vh",fontWeight:"lighter"},"aria-hidden":"true"})):null,o.a.createElement("h5",{style:{display:"inline",margin:40,position:"relative",top:14,fontWeight:"lighter"}},"STEP ",c," OF 6:",o.a.createElement("span",{style:{marginLeft:40}},["Age","Body Type","Preferred Style","Preferred Fit","Occasion","Preferred Budget"][c-1].toUpperCase())),c<6?o.a.createElement("a",{style:{cursor:"pointer"},onClick:function(){y(c<6?c+1:c),t.push("/step"+parseInt(c+1))}},o.a.createElement("i",{className:"fa fa-angle-right ",style:{position:"absolute",right:"30%",fontSize:"6vh",fontWeight:"lighter"},"aria-hidden":"true"})):null):null,o.a.createElement("div",{className:"container",style:{alignItems:"center",textAlign:"center",height:"80vh",width:"100%"}},o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:s}),o.a.createElement(i.a,{path:"/step1",component:u}),o.a.createElement(i.a,{path:"/step2",component:m}),o.a.createElement(i.a,{path:"/step3",component:h}),o.a.createElement(i.a,{path:"/step4",component:b}),o.a.createElement(i.a,{path:"/step5",component:d}),o.a.createElement(i.a,{path:"/step6",component:p}),o.a.createElement(i.a,{path:"/feedback",component:f}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(7);c.a.render(o.a.createElement(g.a,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.b89af066.chunk.js.map