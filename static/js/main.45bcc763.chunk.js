(this.webpackJsonp10for20challenge=this.webpackJsonp10for20challenge||[]).push([[0],{67:function(e,t,a){e.exports=a(79)},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),l=a.n(o),s=a(25),c=a.n(s),i=a(15),u=a(16),d=a(22),h=a(17),f=a(23),m=a(21),p=a(26),g=a(27),k=a(54),v=a(56);function E(e){return r.a.createElement(p.a,{bg:e.bg,variant:e.textTheme,fixed:"top"},r.a.createElement(p.a.Brand,{onClick:function(){return e.setSection("home")}},"#10For20Challenge"),r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(g.a,{className:"mr-auto",variant:"pills",defaultActiveKey:"home"},r.a.createElement(g.a.Link,{onClick:function(){return e.setSection("home")},eventKey:"home"},"Home"),r.a.createElement(g.a.Link,{onClick:function(){return e.setSection("chart")},eventKey:"chart"},"Chart"),r.a.createElement(g.a.Link,{onClick:function(){return e.setSection("settings")},eventKey:"settings"},"Settings"))),r.a.createElement(k.a,{icon:v.a}))}var y=a(6),b=a(19),w=a(9),x=a(36);function D(e){return r.a.createElement(b.a,{fluid:!0,style:e.style},r.a.createElement(x.a,null,r.a.createElement(y.a,null,r.a.createElement(y.a.Body,null,r.a.createElement(y.a.Title,null,"Page Theme"),r.a.createElement(w.a,null,r.a.createElement(w.a.Item,{active:!0},"Light"),r.a.createElement(w.a.Item,{disabled:!0},"Dark")))),r.a.createElement(y.a,null,r.a.createElement(y.a.Body,null,r.a.createElement(y.a.Title,null,"Colors & Patterns"),r.a.createElement(y.a.Text,null,"This will be accordion groups once options are available."),r.a.createElement(w.a,null,r.a.createElement(w.a.Item,{active:!0},"Colors"),r.a.createElement(w.a.Item,{disabled:!0},"Patterns")))),r.a.createElement(y.a,null,r.a.createElement(y.a.Body,null,r.a.createElement(y.a.Title,null,"Chart Formats"),r.a.createElement(w.a,null,r.a.createElement(w.a.Item,{active:!0},"Monthly"),r.a.createElement(w.a.Item,{disabled:!0},"Weekly"),r.a.createElement(w.a.Item,{disabled:!0},"Calendar View")))),r.a.createElement(y.a,null,r.a.createElement(y.a.Body,null,r.a.createElement(y.a.Title,null,"Tasks"),r.a.createElement(w.a,null,e.tasks&&e.tasks.map((function(e,t){return r.a.createElement(w.a.Item,{key:"task-".concat(t)},t+1,". ",e)})))))))}var T=a(57),C=a(7),S=a(14),O=a(37),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={task:"placeholder",date:"".concat((new Date).getFullYear(),"-").concat(((new Date).getMonth()+1).toString().padStart(2,"0"),"-").concat((new Date).getDate()),validation:""},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;e.preventDefault(),"task"===a&&this.setState({validation:""}),this.setState(Object(T.a)({},a,n))}},{key:"submitEntry",value:function(){""!==this.state.task&&"placeholder"!==this.state.task?this.props.updateEntries({id:new Date(this.state.date).valueOf(),date:this.state.date,task:this.state.task}):this.setState({validation:"You must select a task"})}},{key:"render",value:function(){var e=this;return r.a.createElement(C.a,null,r.a.createElement(C.a.Group,{controlId:"date-pick"},r.a.createElement(C.a.Row,null,r.a.createElement(S.a,null,r.a.createElement(C.a.Label,null,"Date")),r.a.createElement(S.a,null,r.a.createElement(C.a.Control,{as:"input",type:"date",name:"date",value:this.state.date,onChange:function(t){return e.handleChange(t)}})))),r.a.createElement(C.a.Group,{controlId:"task-pick"},r.a.createElement(C.a.Row,null,r.a.createElement(S.a,null,r.a.createElement(C.a.Label,null,"Task Completed")),r.a.createElement(S.a,null,r.a.createElement(C.a.Control,{as:"select",name:"task",value:this.state.task,onChange:function(t){return e.handleChange(t)}},r.a.createElement("option",{value:"placeholder",disabled:!0,hidden:!0},"Select a Task"),this.props.tasks&&this.props.tasks.map((function(e){return""!==e&&r.a.createElement("option",{key:e,value:e},e)}))))),r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Text,{className:"text-muted"},this.state.validation))),r.a.createElement(O.a,{variant:"primary",onClick:function(){return e.submitEntry()}},"Submit"))}}]),t}(r.a.Component),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={tasks:a.props.tasks},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onChange",value:function(e,t){e.preventDefault();var a=this.state.tasks;a[t]=e.target.value,this.setState({tasks:a})}},{key:"render",value:function(){var e=this;return r.a.createElement(C.a,null,this.state.tasks.map((function(t,a){return r.a.createElement(C.a.Group,{controlId:"task-"+a,key:"task-"+a},r.a.createElement("div",{style:B},r.a.createElement(C.a.Label,{style:{width:"40px",marginTop:"5px"}},"#",a+1),r.a.createElement(C.a.Control,{type:"text",value:t,onChange:function(t){return e.onChange(t,a)}})))})),r.a.createElement(O.a,{variant:"primary",onClick:function(){return e.props.updateTasks(e.state.tasks)}},"Submit"))}}]),t}(r.a.Component),B={display:"flex"};function I(e){var t=e.tasks;return r.a.createElement(b.a,{fluid:!0,style:e.style},r.a.createElement(x.a,null,r.a.createElement(y.a,null,r.a.createElement(y.a.Body,null,r.a.createElement(y.a.Title,null,"Home Section"),r.a.createElement(y.a.Text,null,"Here you can manage your tasks and submit a new entry."))),r.a.createElement(y.a,null,r.a.createElement(y.a.Body,null,r.a.createElement(y.a.Title,null,"New Entry"),r.a.createElement(j,{tasks:t,updateEntries:e.updateEntries}))),t.length>0&&r.a.createElement(y.a,null,r.a.createElement(y.a.Body,null,r.a.createElement(y.a.Title,null,"My Tasks"),r.a.createElement(U,{tasks:t,updateTasks:e.updateTasks})))))}var F=a(48);var P=new Map([[0,"Jan"],[1,"Feb"],[2,"Mar"],[3,"Apr"],[4,"May"],[5,"Jun"],[6,"Jul"],[7,"Aug"],[8,"Sep"],[9,"Oct"],[10,"Nov"],[11,"Dec"]]),M=["red","orange","yellow","limegreen","green","lightblue","blue","violet","purple","pink"];function A(e,t,a,n,r){F.a("#chart").html(""),r||(r=0),r>11&&(r=11),t=t.filter((function(e){return""!==e}));var o=F.a("#chart").append("svg").attr("height",a).attr("width",n),l=e.filter((function(e){return r===new Date(e.id).getUTCMonth()})),s=[],c=(new Date).getUTCFullYear();(function(e,t){for(var a=new Date(t,e+1,0).getDate(),n=[],r=1;r<=a;r++)n.push(r);return n})(r,c).forEach((function(e){if(l.length>0){var t=l.findIndex((function(t){return new Date(t.id).getUTCDate()===e}));-1!==t?s.push({day:e,entry:l[t]}):s.push({day:e,entry:{id:new Date(c,r,e),tasks:[]}})}else s.push({day:e,entry:{id:new Date(c,r,e),tasks:[]}})})),o.append("g").selectAll("text").data(["S","M","T","W","T","F","S"]).enter().append("text").text((function(e){return e})).attr("x",(function(e,t){return 60*t+25})).attr("y",35).attr("font-size","24"),o.selectAll("rect").data(s).enter().append("rect").attr("class","cell").attr("x",(function(e){return 60*new Date(e.entry.id).getUTCDay()+10})).attr("y",(function(e){return 60*(function(e){for(var t=e.getUTCDate(),a=1,n=new Date(e.setUTCDate(1)).getUTCDay(),r=1;r<t;r++)6===n?(n=0,a++):n<6&&n++;return a}(new Date(e.entry.id))-1)+60})).attr("height",50).attr("width",50).attr("rx",5).style("fill",(function(e){var a=t.indexOf(e.entry.tasks[0]);return-1!==a?M[a]:"lightgrey"})).append("svg:title").text((function(e){return t=new Date(e.entry.id),P.get(t.getUTCMonth())+" "+t.getUTCDate()+", "+t.getUTCFullYear()+"\n"+(e.entry.tasks.length<0?function(e){var t="";return e.forEach((function(a,n){t+=a,n<e.length-1&&(t+="\n")})),t}(e.entry.tasks):"");var t}));var i=o.append("g").attr("id","legend").attr("height",25*t.length).attr("width",100).attr("transform","translate(".concat(440,",20)"));t.forEach((function(e,t){i.append("rect").attr("x",0).attr("y",20*t+5*t).attr("height",20).attr("width",20).style("fill",(function(){return M[t]})).style("stroke","black"),i.append("text").text(e).attr("x",25).attr("y",20*t+5*t+15).attr("height",20)})),i.append("rect").attr("x",0).attr("y",20*t.length+5*t.length).attr("height",20).attr("width",20).style("fill","lightgrey").style("stroke","black"),i.append("text").text("No activity").attr("x",25).attr("y",20*t.length+5*t.length+15).attr("height",20)}function L(e){return A(e.entries,e.tasks,420,600,0),r.a.createElement(b.a,{fluid:!0,style:e.style},r.a.createElement(y.a,null,r.a.createElement(y.a.Body,null,r.a.createElement(y.a.Title,null,"Chart section"),r.a.createElement("div",{id:"chart"}))))}var J={init:function(e,t,a){return new Promise((function(n,r){if("indexedDB"in window){var o=window.indexedDB.open(e,t);o.onerror=function(e){console.error("IndexedDB Error: ",o.error),r("Failed to open database")},o.onupgradeneeded=function(e){var t=e.target.result,o=0;a.forEach((function(e,l){(function(e,t){return new Promise((function(a,n){var r=e.createObjectStore(t,{keyPath:"id",autoIncrement:!0});r.onerror=function(){console.error("store not created, error: ",r.error),n("Failed to open database")},r.onsuccess=function(){a("Store ".concat(t," created successfully"))}}))})(t,e).then((function(){o++})).catch((function(e){console.error(e)})).finally((function(){l+1===a.length&&(console.log("Reached end of foreach:",l+1,a.length),a.length===o?n("Database access granted"):r("Database access rejected"))}))}))},o.onsuccess=function(e){e.target.result.version===t&&n("success")}}else console.warn("This browser doesn't support IndexedDB")}))},getAll:function(e,t,a){return new Promise((function(n,r){var o=window.indexedDB.open(e,t);o.onsuccess=function(e){var t=o.result.transaction(a,"readwrite"),l=t.objectStore(a).getAll();l.onsuccess=function(e){n(e.target.result)},l.onerror=function(e){r("Unable to get data")},t.onerror=function(e){r("Unable to get data")}},o.onerror=function(e){r("Unable to get data")}}))},getOne:function(e,t,a,n){return new Promise((function(r,o){var l=window.indexedDB.open(e,t);l.onsuccess=function(e){var t=l.result.transaction(a,"readwrite"),s=t.objectStore(a).get(n);s.onsuccess=function(e){r(e.target.result)},s.onerror=function(e){o("Unable to get data")},t.onerror=function(e){o("Unable to get data")}},l.onerror=function(e){o("Unable to get data")}}))},addOrUpdateMany:function(e,t,a,n){return new Promise((function(r,o){var l=window.indexedDB.open(e,t);l.onsuccess=function(e){var t=l.result.transaction(a,"readwrite"),s=t.objectStore(a);n.forEach((function(e){s.put(e).onerror=function(t){o("Error storing item "+e)}})),t.oncomplete=function(e){r("Data saved successfully")},t.onerror=function(e){o("Failed to save data")}},l.onerror=function(e){o("Failed to save data")}}))},addOrUpdateOne:function(e,t,a,n){return new Promise((function(r,o){var l=window.indexedDB.open(e,t);l.onsuccess=function(e){var t=l.result.transaction(a,"readwrite");t.objectStore(a).put(n),t.oncomplete=function(e){r("Data saved successfully")},t.onerror=function(e){o("Failed to save data")}},l.onerror=function(e){o("Failed to save data")}}))},deleteOne:function(e,t,a,n){return new Promise((function(r,o){var l=window.indexedDB.open(e,t);l.onsuccess=function(e){var t=l.result.transaction(a,"readwrite"),s=t.objectStore(a).delete(n);s.onsuccess=function(e){r("Item was deleted")},s.onerror=function(e){o("Unable to delete entry")},t.onerror=function(e){o("Unable to delete entry")}},l.onerror=function(e){o("Unable to delete entry")}}))},deleteAll:function(e,t,a){return new Promise((function(n,r){var o=window.indexedDB.open(e,t);o.onsuccess=function(e){var t=o.result;a.forEach((function(e){var a=t.transaction(e,"readwrite"),o=a.objectStore(e).clear();o.onsuccess=function(e){n("Data has been successfully deleted")},o.onerror=function(e){r("Unable to delete data")},a.onerror=function(e){r("Unable to delete data")}}))},o.onerror=function(e){r("Unable to delete data")}}))}},N="tasks",H="entries",K=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={section:"home",tasks:[],entries:[]},a.setSection=a.setSection.bind(Object(f.a)(a)),a.updateTasks=a.updateTasks.bind(Object(f.a)(a)),a.addEntry=a.addEntry.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e,t,a,n;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.a.awrap(J.init("10for20",1,[N,H]));case 3:e=r.sent,r.next=9;break;case 6:r.prev=6,r.t0=r.catch(0),console.error(r.t0);case 9:if(!e){r.next=29;break}return r.prev=10,r.next=13,c.a.awrap(J.getOne("10for20",1,N,1));case 13:(n=r.sent)&&(t=n.tasks),r.next=20;break;case 17:r.prev=17,r.t1=r.catch(10),console.error(r.t1);case 20:return r.prev=20,r.next=23,c.a.awrap(J.getAll("10for20",1,H));case 23:a=r.sent,r.next=29;break;case 26:r.prev=26,r.t2=r.catch(20),console.error(r.t2);case 29:t||(t=["","","","","","","","","",""]),a||(a=[]),this.setState({tasks:t,entries:a});case 32:case"end":return r.stop()}}),null,this,[[0,6],[10,17],[20,26]])}},{key:"setSection",value:function(e){this.setState({section:e})}},{key:"updateTasks",value:function(e){this.setState({tasks:e}),J.addOrUpdateOne("10for20",1,N,{id:1,tasks:e}).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))}},{key:"addEntry",value:function(e){var t=this.state.entries,a=t.findIndex((function(t){return t.id===e.id}));-1===a?(e.tasks=[e.task],delete e.task,t.push(e),a=t.length-1):t[a].tasks.push(e.task),this.setState({entries:t}),J.addOrUpdateOne("10for20",1,H,t[a]).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{current:"Current",bg:"light",textTheme:"light",setSection:this.setSection}),r.a.createElement("div",{style:R},r.a.createElement(I,{style:{display:"home"===this.state.section?"block":"none"},tasks:this.state.tasks,updateTasks:this.updateTasks,updateEntries:this.addEntry}),r.a.createElement(L,{style:{display:"chart"===this.state.section?"block":"none"},tasks:this.state.tasks,entries:this.state.entries,updateTasks:this.updateTasks}),r.a.createElement(D,{style:{display:"settings"===this.state.section?"block":"none"},tasks:this.state.tasks})))}}]),t}(r.a.Component),R={backgroundColor:"lightgrey",minHeight:"100vh",padding:"20px",paddingTop:"76px"};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(K,null),document.getElementById("react-app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[67,1,2]]]);
//# sourceMappingURL=main.45bcc763.chunk.js.map