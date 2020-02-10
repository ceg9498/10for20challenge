(this.webpackJsonp10for20challenge=this.webpackJsonp10for20challenge||[]).push([[0],{70:function(e,t,a){e.exports=a(82)},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(33),l=a.n(o),s=a(34),c=a(27),i=a.n(c),u=a(17),h=a(18),d=a(25),m=a(19),f=a(12),p=a(24),y=a(13),g=a.n(y),v=a(28),k=a(29),E=a(58),b=a(60);function w(e){var t="dark"===e.textTheme?"light":"dark";return r.a.createElement(v.a,{bg:e.bg,variant:e.textTheme,fixed:"top"},r.a.createElement(v.a.Brand,{onClick:function(){return e.setSection("home")}},"#10For20Challenge"),r.a.createElement(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(v.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(k.a,{className:"mr-auto",variant:"pills",defaultActiveKey:"home"},r.a.createElement(k.a.Link,{onClick:function(){return e.setSection("home")},eventKey:"home"},"Home"),r.a.createElement(k.a.Link,{onClick:function(){return e.setSection("chart")},eventKey:"chart"},"Chart"),r.a.createElement(k.a.Link,{onClick:function(){return e.setSection("settings")},eventKey:"settings"},"Settings"))),r.a.createElement(E.a,{className:"text-".concat(t),icon:b.a}))}var C=a(5),x=a(21),D=a(9),T=a(40),S=a(7);function F(e){return r.a.createElement(S.a.Control,{style:O,type:"color",value:e.color,onChange:function(t){return e.setColor(t.target.value,e.index)}})}var O={width:"20px",height:"20px",border:"1px solid black",borderRadius:"3px",padding:"2px"};function j(e){return r.a.createElement(x.a,{fluid:!0,style:e.style},r.a.createElement(T.a,null,r.a.createElement(C.a,{bg:e.theme,style:{color:"dark"===e.theme?"white":"black"}},r.a.createElement(C.a.Header,null,r.a.createElement(C.a.Title,null,"Page Theme")),r.a.createElement(C.a.Body,null,r.a.createElement(D.a,{activeKey:"#".concat(e.theme)},r.a.createElement(D.a.Item,{variant:e.theme,href:"#light",as:"button",action:!0,onClick:function(){return e.setTheme("light")}},"Light"),r.a.createElement(D.a.Item,{variant:e.theme,href:"#dark",as:"button",action:!0,onClick:function(){return e.setTheme("dark")}},"Dark")))),r.a.createElement(C.a,{bg:e.theme,style:{color:"dark"===e.theme?"white":"black"}},r.a.createElement(C.a.Header,null,r.a.createElement(C.a.Title,null,"Colors & Patterns")),r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Text,null,"This will be accordion groups once options are available."),r.a.createElement(D.a,null,r.a.createElement(D.a.Item,{variant:e.theme,action:!0,active:!0},"Colors"),r.a.createElement(D.a.Item,{variant:e.theme,action:!0,disabled:!0},"Patterns")))),r.a.createElement(C.a,{bg:e.theme,style:{color:"dark"===e.theme?"white":"black"}},r.a.createElement(C.a.Header,null,r.a.createElement(C.a.Title,null,"Chart Formats")),r.a.createElement(C.a.Body,null,r.a.createElement(D.a,{activeKey:"#".concat(e.singleMonth?"monthly":"yearly")},r.a.createElement(D.a.Item,{variant:e.theme,href:"#monthly",as:"button",action:!0,onClick:function(){return e.setChart("month")}},"Monthly"),r.a.createElement(D.a.Item,{variant:e.theme,href:"#yearly",as:"button",action:!0,onClick:function(){return e.setChart("year")}},"Yearly")))),r.a.createElement(C.a,{bg:e.theme,style:{color:"dark"===e.theme?"white":"black"}},r.a.createElement(C.a.Header,null,r.a.createElement(C.a.Title,null,"Task Colors")),r.a.createElement(C.a.Body,null,r.a.createElement(D.a,null,e.tasks&&e.tasks.map((function(t,a){return r.a.createElement(D.a.Item,{variant:e.theme,key:"task-".concat(a),style:{display:"flex",alignItems:"center"}},r.a.createElement(F,{color:e.colors[a],setColor:e.setColor,index:a}),"\xa0",a+1,". ",t)})),r.a.createElement(D.a.Item,{variant:e.theme,style:{display:"flex",alignItems:"center"}},r.a.createElement(F,{color:e.noneColor,setColor:e.setColor,index:-1}),"\xa0 No Task"))))))}var U=a(35),M=a(11),B=a(41),I=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={task:"placeholder",date:"".concat((new Date).getFullYear(),"-").concat(((new Date).getMonth()+1).toString().padStart(2,"0"),"-").concat((new Date).getDate()),validation:""},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;e.preventDefault(),"task"===a&&this.setState({validation:""}),this.setState(Object(U.a)({},a,n))}},{key:"submitEntry",value:function(){""!==this.state.task&&"placeholder"!==this.state.task?this.props.updateEntries({id:new Date(this.state.date).valueOf(),date:this.state.date,task:this.state.task}):this.setState({validation:"You must select a task"})}},{key:"render",value:function(){var e=this;return r.a.createElement(S.a,null,r.a.createElement(S.a.Group,{controlId:"date-pick"},r.a.createElement(S.a.Row,null,r.a.createElement(M.a,null,r.a.createElement(S.a.Label,null,"Date")),r.a.createElement(M.a,null,r.a.createElement(S.a.Control,{as:"input",type:"date",name:"date",value:this.state.date,onChange:function(t){return e.handleChange(t)}})))),r.a.createElement(S.a.Group,{controlId:"task-pick"},r.a.createElement(S.a.Row,null,r.a.createElement(M.a,null,r.a.createElement(S.a.Label,null,"Task Completed")),r.a.createElement(M.a,null,r.a.createElement(S.a.Control,{as:"select",name:"task",value:this.state.task,onChange:function(t){return e.handleChange(t)}},r.a.createElement("option",{value:"placeholder",disabled:!0,hidden:!0},"Select a Task"),this.props.tasks&&this.props.tasks.map((function(e){return""!==e&&r.a.createElement("option",{key:e,value:e},e)}))))),r.a.createElement(S.a.Row,null,r.a.createElement(S.a.Text,{className:"text-muted"},this.state.validation))),r.a.createElement(B.a,{variant:"primary",onClick:function(){return e.submitEntry()}},"Submit"))}}]),t}(r.a.Component),A=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={tasks:a.props.tasks},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"onChange",value:function(e,t){e.preventDefault();var a=this.state.tasks;a[t]=e.target.value,this.setState({tasks:a})}},{key:"render",value:function(){var e=this;return r.a.createElement(S.a,null,this.state.tasks.map((function(t,a){return r.a.createElement(S.a.Group,{controlId:"task-"+a,key:"task-"+a},r.a.createElement("div",{style:H},r.a.createElement(S.a.Label,{style:{width:"40px",marginTop:"5px"}},a+1,"."),r.a.createElement(S.a.Control,{type:"text",value:t,onChange:function(t){return e.onChange(t,a)}})))})),r.a.createElement(B.a,{variant:"primary",onClick:function(){return e.props.updateTasks(e.state.tasks)}},"Submit"))}}]),t}(r.a.Component),H={display:"flex",alignItems:"center"};function P(e){var t=e.tasks;return r.a.createElement(x.a,{fluid:!0,style:e.style},r.a.createElement(T.a,null,r.a.createElement(C.a,{bg:e.theme,style:{color:"dark"===e.theme?"white":"black"}},r.a.createElement(C.a.Header,null,r.a.createElement(C.a.Title,null,"Home Section")),r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Text,null,"Here you can manage your tasks and submit a new entry."))),r.a.createElement(C.a,{bg:e.theme,style:{color:"dark"===e.theme?"white":"black"}},r.a.createElement(C.a.Header,null,r.a.createElement(C.a.Title,null,"New Entry")),r.a.createElement(C.a.Body,null,r.a.createElement(I,{tasks:t,updateEntries:e.updateEntries}))),t.length>0&&r.a.createElement(C.a,{bg:e.theme,style:{color:"dark"===e.theme?"white":"black"}},r.a.createElement(C.a.Header,null,r.a.createElement(C.a.Title,null,"My Tasks")),r.a.createElement(C.a.Body,null,r.a.createElement(A,{tasks:t,updateTasks:e.updateTasks})))))}var J=a(52),N=a(22);var Y=new Map([[0,"Jan"],[1,"Feb"],[2,"Mar"],[3,"Apr"],[4,"May"],[5,"Jun"],[6,"Jul"],[7,"Aug"],[8,"Sep"],[9,"Oct"],[10,"Nov"],[11,"Dec"]]),L=new Map([[0,"January"],[1,"February"],[2,"March"],[3,"April"],[4,"May"],[5,"June"],[6,"July"],[7,"August"],[8,"September"],[9,"October"],[10,"November"],[11,"December"]]),K=["#FF0000","#FFA500","#FFFF00","#32CD32","#008000","#ADD8E6","#0000FF","#8A2BE2","#800080","#FFC0CB"];function R(e,t,a,n,r,o,l,s){o||(o=K),l||(l="lightgray"),(!r.year||r.year<1970||r.year>(new Date).getUTCFullYear())&&(r.year=(new Date).getUTCFullYear()),(!r.month||r.month<0)&&(r.month=0),r.month>11&&(r.month=11);var c="dark"===s?"white":"black",i=50;n>410&&(n/=2);var u=5/6*n/7>i?10:1/6*n/8,h=5/6*n/7>i?i:5/6*n/7,d=7*h+6*u;a=60+6*h+5*u;var m=N.a("#chart").append("svg").attr("height",a).attr("width",n),f=e.filter((function(e){return r.month===new Date(e.id).getUTCMonth()&&r.year===new Date(e.id).getUTCFullYear()})),p=[];(function(e,t){for(var a=new Date(t,e+1,0).getDate(),n=[],r=1;r<=a;r++)n.push(r);return n})(r.month,r.year).forEach((function(e){if(f.length>0){var t=f.findIndex((function(t){return new Date(t.id).getUTCDate()===e}));-1!==t?p.push({day:e,entry:f[t]}):p.push({day:e,entry:{id:new Date(r.year,r.month,e),tasks:[]}})}else p.push({day:e,entry:{id:new Date(r.year,r.month,e),tasks:[]}})}));var y=m.append("defs"),g=new Map;m.append("text").text((function(){return L.get(r.month)})).style("fill",c).attr("x",(function(){return d/2})).attr("y",25).attr("text-anchor","middle").attr("font-size","24"),m.append("g").selectAll("text").data(["S","M","T","W","T","F","S"]).enter().append("text").text((function(e){return e})).style("fill",c).attr("x",(function(e,t){return t*(h+u)+h/2})).attr("y",50).attr("font-size","24"),m.selectAll("rect").data(p).enter().append("rect").attr("class","cell").attr("x",(function(e){return new Date(e.entry.id).getUTCDay()*(h+u)+u})).attr("y",(function(e){return(function(e){for(var t=e.getUTCDate(),a=1,n=new Date(e.setUTCDate(1)).getUTCDay(),r=1;r<t;r++)6===n?(n=0,a++):n<6&&n++;return a}(new Date(e.entry.id))-1)*(h+u)+60})).attr("height",h).attr("width",h).attr("rx",5).style("fill",(function(e){if(0===e.entry.tasks.length)return l;if(1===e.entry.tasks.length){var a=t.indexOf(e.entry.tasks[0]);return o[a]}var n=y.append("linearGradient").attr("id","lg-".concat(e.entry.id)).attr("x1","0%").attr("y1","0%").attr("x2","0%").attr("y2","100%");return g.set(e.entry.id,n),e.entry.tasks.forEach((function(a,n){g.get(e.entry.id).append("stop").attr("offset",(function(){return 0===n?"0%":n/e.entry.tasks.length*100+"%"})).attr("stop-color",o[t.indexOf(a)]),g.get(e.entry.id).append("stop").attr("offset",(function(){return(n+1)/e.entry.tasks.length*100+"%"})).attr("stop-color",o[t.indexOf(a)])})),"url(#lg-".concat(e.entry.id,")")})).append("svg:title").text((function(e){return function(e){return Y.get(e.getUTCMonth())+" "+e.getUTCDate()+", "+e.getUTCFullYear()}(new Date(e.entry.id))+"\n"+(e.entry.tasks.length>0?function(e){var t="";return e.forEach((function(a,n){t+=a,n<e.length-1&&(t+="\n")})),t}(e.entry.tasks):"")}))}var G=[[0,"January"],[1,"February"],[2,"March"],[3,"April"],[4,"May"],[5,"June"],[6,"July"],[7,"August"],[8,"September"],[9,"October"],[10,"November"],[11,"December"]];function W(e){var t=r.a.useState((new Date).getUTCMonth()),a=Object(J.a)(t,2),n=a[0],o=a[1],l=r.a.useState((new Date).getUTCFullYear()),s=Object(J.a)(l,2),c=s[0],i=s[1],u=window.innerHeight-90,h=.7*u,d=e.tasks.filter((function(e){return""!==e}));if(N.a("#chart").html(""),e.singleMonth)R(e.entries,d,h,u,{month:n,year:c},e.colors,e.noneColor,e.theme);else for(var m=0;m<12;m++)R(e.entries,d,h,u,{month:m,year:c},e.colors,e.noneColor,e.theme);return function(e,t,a,n){var r="dark"===t?"white":"black",o=20*(e.length+1)+5*e.length,l=N.a("#chart").append("svg").attr("height",o).append("g").attr("id","legend").attr("height",25*e.length).attr("width",100);e.forEach((function(e,t){l.append("rect").attr("x",0).attr("y",20*t+5*t).attr("height",20).attr("width",20).style("fill",(function(){return n[t]})).style("stroke",r),l.append("text").text(e).style("fill",r).attr("x",25).attr("y",20*t+5*t+15).attr("height",20)})),l.append("rect").attr("x",0).attr("y",20*e.length+5*e.length).attr("height",20).attr("width",20).style("fill",a).style("stroke",r),l.append("text").text("No activity").style("fill",r).attr("x",25).attr("y",20*e.length+5*e.length+15).attr("height",20)}(d,e.theme,e.noneColor,e.colors),r.a.createElement(x.a,{fluid:!0,style:e.style},r.a.createElement(C.a,{bg:e.theme,style:{color:"dark"===e.theme?"white":"black"}},r.a.createElement(C.a.Header,null,r.a.createElement(C.a.Title,null,"Chart section")),r.a.createElement(C.a.Body,null,r.a.createElement(S.a.Row,{style:{width:u}},e.singleMonth&&r.a.createElement(M.a,null,r.a.createElement(S.a.Control,{as:"select",name:"month",value:n.toString(),onChange:function(e){e.preventDefault();var t=parseInt(e.target.value);o(t)}},G.map((function(e){return r.a.createElement("option",{key:e[1],value:e[0]},e[1])})))),r.a.createElement(M.a,null,r.a.createElement(S.a.Control,{type:"number",name:"year",value:c.toString(),onChange:function(e){e.preventDefault();var t=parseInt(e.target.value);i(t)}}))),r.a.createElement("div",{id:"chart"}))))}var z={init:function(e,t,a){return new Promise((function(n,r){if("indexedDB"in window){var o=window.indexedDB.open(e,t);o.onerror=function(e){console.error("IndexedDB Error: ",o.error),r("Failed to open database")},o.onupgradeneeded=function(e){var t=e.target.result,o=0;a.forEach((function(e,l){(function(e,t){return new Promise((function(a,n){var r=e.createObjectStore(t,{keyPath:"id",autoIncrement:!0});r.onerror=function(){console.error("store not created, error: ",r.error),n("Failed to open database")},r.onsuccess=function(){a("Store ".concat(t," created successfully"))}}))})(t,e).then((function(){o++})).catch((function(e){console.error(e)})).finally((function(){l+1===a.length&&(console.log("Reached end of foreach:",l+1,a.length),a.length===o?n("Database access granted"):r("Database access rejected"))}))}))},o.onsuccess=function(e){e.target.result.version===t&&n("success")}}else console.warn("This browser doesn't support IndexedDB")}))},getAll:function(e,t,a){return new Promise((function(n,r){var o=window.indexedDB.open(e,t);o.onsuccess=function(e){var t=o.result.transaction(a,"readwrite"),l=t.objectStore(a).getAll();l.onsuccess=function(e){n(e.target.result)},l.onerror=function(e){r("Unable to get data")},t.onerror=function(e){r("Unable to get data")}},o.onerror=function(e){r("Unable to get data")}}))},getOne:function(e,t,a,n){return new Promise((function(r,o){var l=window.indexedDB.open(e,t);l.onsuccess=function(e){var t=l.result.transaction(a,"readwrite"),s=t.objectStore(a).get(n);s.onsuccess=function(e){r(e.target.result)},s.onerror=function(e){o("Unable to get data")},t.onerror=function(e){o("Unable to get data")}},l.onerror=function(e){o("Unable to get data")}}))},addOrUpdateMany:function(e,t,a,n){return new Promise((function(r,o){var l=window.indexedDB.open(e,t);l.onsuccess=function(e){var t=l.result.transaction(a,"readwrite"),s=t.objectStore(a);n.forEach((function(e){s.put(e).onerror=function(t){o("Error storing item "+e)}})),t.oncomplete=function(e){r("Data saved successfully")},t.onerror=function(e){o("Failed to save data")}},l.onerror=function(e){o("Failed to save data")}}))},addOrUpdateOne:function(e,t,a,n){return new Promise((function(r,o){var l=window.indexedDB.open(e,t);l.onsuccess=function(e){var t=l.result.transaction(a,"readwrite");t.objectStore(a).put(n),t.oncomplete=function(e){r("Data saved successfully")},t.onerror=function(e){o("Failed to save data")}},l.onerror=function(e){o("Failed to save data")}}))},deleteOne:function(e,t,a,n){return new Promise((function(r,o){var l=window.indexedDB.open(e,t);l.onsuccess=function(e){var t=l.result.transaction(a,"readwrite"),s=t.objectStore(a).delete(n);s.onsuccess=function(e){r("Item was deleted")},s.onerror=function(e){o("Unable to delete entry")},t.onerror=function(e){o("Unable to delete entry")}},l.onerror=function(e){o("Unable to delete entry")}}))},deleteAll:function(e,t,a){return new Promise((function(n,r){var o=window.indexedDB.open(e,t);o.onsuccess=function(e){var t=o.result;a.forEach((function(e){var a=t.transaction(e,"readwrite"),o=a.objectStore(e).clear();o.onsuccess=function(e){n("Data has been successfully deleted")},o.onerror=function(e){r("Unable to delete data")},a.onerror=function(e){r("Unable to delete data")}}))},o.onerror=function(e){r("Unable to delete data")}}))}},$="tasks",q="entries",Q=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={section:"home",tasks:[],entries:[],theme:"light",singleMonth:!0,colors:["#FF0000","#FFA500","#FFFF00","#32CD32","#008000","#ADD8E6","#0000FF","#8A2BE2","#800080","#FFC0CB"],noneColor:"#D3D3D3"},a.setSection=a.setSection.bind(Object(f.a)(a)),a.setTheme=a.setTheme.bind(Object(f.a)(a)),a.updateTasks=a.updateTasks.bind(Object(f.a)(a)),a.addEntry=a.addEntry.bind(Object(f.a)(a)),a.setColor=a.setColor.bind(Object(f.a)(a)),a.setChart=a.setChart.bind(Object(f.a)(a)),a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){for(var e=g.a.get("theme")||this.state.theme,t=g.a.get("noneColor")||this.state.noneColor,a="year"!==g.a.get("chart"),n=[],r=0;r<10;r++){var o=g.a.get("color-".concat(r));n.push(o||this.state.colors[r])}this.setState({theme:e,colors:n,noneColor:t,singleMonth:a}),this.getData()}},{key:"getData",value:function(){var e,t,a,n;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.a.awrap(z.init("10for20",1,[$,q]));case 3:e=r.sent,r.next=9;break;case 6:r.prev=6,r.t0=r.catch(0),console.error(r.t0);case 9:if(!e){r.next=29;break}return r.prev=10,r.next=13,i.a.awrap(z.getOne("10for20",1,$,1));case 13:(n=r.sent)&&(t=n.tasks),r.next=20;break;case 17:r.prev=17,r.t1=r.catch(10),console.error(r.t1);case 20:return r.prev=20,r.next=23,i.a.awrap(z.getAll("10for20",1,q));case 23:a=r.sent,r.next=29;break;case 26:r.prev=26,r.t2=r.catch(20),console.error(r.t2);case 29:t||(t=["","","","","","","","","",""]),a||(a=[]),this.setState({tasks:t,entries:a});case 32:case"end":return r.stop()}}),null,this,[[0,6],[10,17],[20,26]])}},{key:"setSection",value:function(e){this.setState({section:e})}},{key:"setTheme",value:function(e){this.setState({theme:e}),g.a.set("theme",e,{expires:30,path:""})}},{key:"updateTasks",value:function(e){this.setState({tasks:e}),z.addOrUpdateOne("10for20",1,$,{id:1,tasks:e}).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))}},{key:"setChart",value:function(e){"year"===e?this.setState({singleMonth:!1}):this.setState({singleMonth:!0}),g.a.set("chart",e,{expires:30,path:""})}},{key:"addEntry",value:function(e){var t=this.state.entries,a=t.findIndex((function(t){return t.id===e.id}));-1===a?(e.tasks=[e.task],delete e.task,t.push(e),a=t.length-1):t[a].tasks.push(e.task),this.setState({entries:t}),z.addOrUpdateOne("10for20",1,q,t[a]).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))}},{key:"setColor",value:function(e,t){if(t>-1){var a=this.state.colors;a[t]=e,this.setState({colors:a}),g.a.set("color-".concat(t),e,{expires:30,path:""})}else this.setState({noneColor:e}),g.a.set("noneColor",e,{expires:30,path:""})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{current:"Current",bg:this.state.theme,textTheme:this.state.theme,setSection:this.setSection}),r.a.createElement("div",{style:Object(s.a)({},V,{backgroundColor:"light"===this.state.theme?X:Z})},r.a.createElement(P,{style:{display:"home"===this.state.section?"block":"none"},theme:this.state.theme,tasks:this.state.tasks,updateTasks:this.updateTasks,updateEntries:this.addEntry}),r.a.createElement(W,{style:{display:"chart"===this.state.section?"block":"none"},colors:this.state.colors,theme:this.state.theme,noneColor:this.state.noneColor,tasks:this.state.tasks,entries:this.state.entries,singleMonth:this.state.singleMonth}),r.a.createElement(j,{style:{display:"settings"===this.state.section?"block":"none"},colors:this.state.colors,noneColor:this.state.noneColor,tasks:this.state.tasks,setTheme:this.setTheme,theme:this.state.theme,setColor:this.setColor,singleMonth:this.state.singleMonth,setChart:this.setChart})))}}]),t}(r.a.Component),V={minHeight:"100vh",padding:"20px",paddingTop:"76px"},X="rgba(0,0,0,.1)",Z="hsl(208, 8%, 30%)";Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Q,null),document.getElementById("react-app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[70,1,2]]]);
//# sourceMappingURL=main.e585da64.chunk.js.map