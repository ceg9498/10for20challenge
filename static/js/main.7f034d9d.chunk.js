(this.webpackJsonp10for20challenge=this.webpackJsonp10for20challenge||[]).push([[0],{41:function(e,t,a){e.exports=a(50)},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),s=a.n(o),l=a(22),c=a.n(l),i=a(13),u=a(14),d=a(19),m=a(15),f=a(21),h=a(20),p=a(23),E=a(24);function v(e){return r.a.createElement(p.a,{bg:e.bg,variant:e.textTheme,fixed:"top"},r.a.createElement(p.a.Brand,{onClick:function(){return e.setSection("home")}},"#10For20Challenge"),r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(E.a,{className:"mr-auto",variant:"pills",defaultActiveKey:"home"},r.a.createElement(E.a.Link,{onClick:function(){return e.setSection("home")},eventKey:"home"},"Home"),r.a.createElement(E.a.Link,{onClick:function(){return e.setSection("chart")},eventKey:"chart"},"Chart"),r.a.createElement(E.a.Link,{onClick:function(){return e.setSection("settings")},eventKey:"settings"},"Settings"))),r.a.createElement("span",null,"Notification Icon"))}var k=a(5),b=a(17),g=a(8),y=a(31);function w(e){return r.a.createElement(b.a,{fluid:!0,style:e.style},r.a.createElement(y.a,null,r.a.createElement(k.a,null,r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,"Page Theme"),r.a.createElement(g.a,null,r.a.createElement(g.a.Item,{active:!0},"Light"),r.a.createElement(g.a.Item,{disabled:!0},"Dark")))),r.a.createElement(k.a,null,r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,"Colors & Patterns"),r.a.createElement(k.a.Text,null,"This will be accordion groups once options are available."),r.a.createElement(g.a,null,r.a.createElement(g.a.Item,{active:!0},"Colors"),r.a.createElement(g.a.Item,{disabled:!0},"Patterns")))),r.a.createElement(k.a,null,r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,"Chart Formats"),r.a.createElement(g.a,null,r.a.createElement(g.a.Item,{active:!0},"Monthly"),r.a.createElement(g.a.Item,{disabled:!0},"Weekly"),r.a.createElement(g.a.Item,{disabled:!0},"Calendar View")))),r.a.createElement(k.a,null,r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,"Tasks"),r.a.createElement(g.a,null,e.tasks&&e.tasks.map((function(e,t){return r.a.createElement(g.a.Item,{key:"task-".concat(t)},t+1,". ",e)})))))))}var S=a(40),T=a(6),x=a(12),O=a(32),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={task:"placeholder",date:"".concat((new Date).getFullYear(),"-").concat(((new Date).getMonth()+1).toString().padStart(2,"0"),"-").concat((new Date).getDate()),validation:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;e.preventDefault(),"task"===a&&this.setState({validation:""}),this.setState(Object(S.a)({},a,n))}},{key:"submitEntry",value:function(){""!==this.state.task&&"placeholder"!==this.state.task?this.props.updateEntries({date:this.state.date,task:this.state.task}):this.setState({validation:"You must select a task"})}},{key:"render",value:function(){var e=this;return r.a.createElement(T.a,null,r.a.createElement(T.a.Group,{controlId:"date-pick"},r.a.createElement(T.a.Row,null,r.a.createElement(x.a,null,r.a.createElement(T.a.Label,null,"Date")),r.a.createElement(x.a,null,r.a.createElement(T.a.Control,{as:"input",type:"date",name:"date",value:this.state.date,onChange:function(t){return e.handleChange(t)}})))),r.a.createElement(T.a.Group,{controlId:"task-pick"},r.a.createElement(T.a.Row,null,r.a.createElement(x.a,null,r.a.createElement(T.a.Label,null,"Task Completed")),r.a.createElement(x.a,null,r.a.createElement(T.a.Control,{as:"select",name:"task",value:this.state.task,onChange:function(t){return e.handleChange(t)}},r.a.createElement("option",{value:"placeholder",disabled:!0,hidden:!0},"Select a Task"),this.props.tasks&&this.props.tasks.map((function(e){return""!==e&&r.a.createElement("option",{key:e,value:e},e)}))))),r.a.createElement(T.a.Row,null,r.a.createElement(T.a.Text,{className:"text-muted"},this.state.validation))),r.a.createElement(O.a,{variant:"primary",onClick:function(){return e.submitEntry()}},"Submit"))}}]),t}(r.a.Component),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={tasks:a.props.tasks},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onChange",value:function(e,t){e.preventDefault();var a=this.state.tasks;a[t]=e.target.value,this.setState({tasks:a})}},{key:"render",value:function(){var e=this;return r.a.createElement(T.a,null,this.state.tasks.map((function(t,a){return r.a.createElement(T.a.Group,{controlId:"task-"+a,key:"task-"+a},r.a.createElement("div",{style:D},r.a.createElement(T.a.Label,{style:{width:"40px",marginTop:"5px"}},"#",a+1),r.a.createElement(T.a.Control,{type:"text",value:t,onChange:function(t){return e.onChange(t,a)}})))})),r.a.createElement(O.a,{variant:"primary",onClick:function(){return e.props.updateTasks(e.state.tasks)}},"Submit"))}}]),t}(r.a.Component),D={display:"flex"};function B(e){var t=e.tasks;return r.a.createElement(b.a,{fluid:!0,style:e.style},r.a.createElement(y.a,null,r.a.createElement(k.a,null,r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,"Home Section"),r.a.createElement(k.a.Text,null,"Here you can manage your tasks and submit a new entry."))),r.a.createElement(k.a,null,r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,"New Entry"),r.a.createElement(C,{tasks:t,updateEntries:e.updateEntries}))),t.length>0&&r.a.createElement(k.a,null,r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,"My Tasks"),r.a.createElement(j,{tasks:t,updateTasks:e.updateTasks})))))}function I(e){return r.a.createElement(b.a,{fluid:!0,style:e.style},r.a.createElement(k.a,null,r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,"Chart section"),JSON.stringify(e.entries))))}var U={init:function(e,t,a){return new Promise((function(n,r){if("indexedDB"in window){var o=window.indexedDB.open(e,t);o.onerror=function(e){console.error("IndexedDB Error: ",o.error),r("Failed to open database")},o.onupgradeneeded=function(e){var t=e.target.result,o=0;a.forEach((function(e,s){(function(e,t){return new Promise((function(a,n){var r=e.createObjectStore(t,{keyPath:"id",autoIncrement:!0});r.onerror=function(){console.error("store not created, error: ",r.error),n("Failed to open database")},r.onsuccess=function(){a("Store ".concat(t," created successfully"))}}))})(t,e).then((function(){o++})).catch((function(e){console.error(e)})).finally((function(){s+1===a.length&&(console.log("Reached end of foreach:",s+1,a.length),a.length===o?n("Database access granted"):r("Database access rejected"))}))}))},o.onsuccess=function(e){e.target.result.version===t&&n("success")}}else console.warn("This browser doesn't support IndexedDB")}))},getAll:function(e,t,a){return new Promise((function(n,r){var o=window.indexedDB.open(e,t);o.onsuccess=function(e){var t=o.result.transaction(a,"readwrite"),s=t.objectStore(a).getAll();s.onsuccess=function(e){n(e.target.result)},s.onerror=function(e){r("Unable to get data")},t.onerror=function(e){r("Unable to get data")}},o.onerror=function(e){r("Unable to get data")}}))},getOne:function(e,t,a,n){return new Promise((function(r,o){var s=window.indexedDB.open(e,t);s.onsuccess=function(e){var t=s.result.transaction(a,"readwrite"),l=t.objectStore(a).get(n);l.onsuccess=function(e){r(e.target.result)},l.onerror=function(e){o("Unable to get data")},t.onerror=function(e){o("Unable to get data")}},s.onerror=function(e){o("Unable to get data")}}))},addOrUpdateMany:function(e,t,a,n){return new Promise((function(r,o){var s=window.indexedDB.open(e,t);s.onsuccess=function(e){var t=s.result.transaction(a,"readwrite"),l=t.objectStore(a);n.forEach((function(e){l.put(e).onerror=function(t){o("Error storing item "+e)}})),t.oncomplete=function(e){r("Data saved successfully")},t.onerror=function(e){o("Failed to save data")}},s.onerror=function(e){o("Failed to save data")}}))},addOrUpdateOne:function(e,t,a,n){return new Promise((function(r,o){var s=window.indexedDB.open(e,t);s.onsuccess=function(e){var t=s.result.transaction(a,"readwrite");t.objectStore(a).put(n),t.oncomplete=function(e){r("Data saved successfully")},t.onerror=function(e){o("Failed to save data")}},s.onerror=function(e){o("Failed to save data")}}))},deleteOne:function(e,t,a,n){return new Promise((function(r,o){var s=window.indexedDB.open(e,t);s.onsuccess=function(e){var t=s.result.transaction(a,"readwrite"),l=t.objectStore(a).delete(n);l.onsuccess=function(e){r("Item was deleted")},l.onerror=function(e){o("Unable to delete entry")},t.onerror=function(e){o("Unable to delete entry")}},s.onerror=function(e){o("Unable to delete entry")}}))},deleteAll:function(e,t,a){return new Promise((function(n,r){var o=window.indexedDB.open(e,t);o.onsuccess=function(e){var t=o.result;a.forEach((function(e){var a=t.transaction(e,"readwrite"),o=a.objectStore(e).clear();o.onsuccess=function(e){n("Data has been successfully deleted")},o.onerror=function(e){r("Unable to delete data")},a.onerror=function(e){r("Unable to delete data")}}))},o.onerror=function(e){r("Unable to delete data")}}))}},P="tasks",F="entries",L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={section:"home",tasks:[],entries:[]},a.setSection=a.setSection.bind(Object(f.a)(a)),a.updateTasks=a.updateTasks.bind(Object(f.a)(a)),a.addEntry=a.addEntry.bind(Object(f.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e,t,a,n;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.a.awrap(U.init("10for20",1,[P,F]));case 3:e=r.sent,r.next=9;break;case 6:r.prev=6,r.t0=r.catch(0),console.error(r.t0);case 9:if(!e){r.next=29;break}return r.prev=10,r.next=13,c.a.awrap(U.getOne("10for20",1,P,1));case 13:(n=r.sent)&&(t=n.tasks),r.next=20;break;case 17:r.prev=17,r.t1=r.catch(10),console.error(r.t1);case 20:return r.prev=20,r.next=23,c.a.awrap(U.getAll("10for20",1,F));case 23:a=r.sent,r.next=29;break;case 26:r.prev=26,r.t2=r.catch(20),console.error(r.t2);case 29:t||(t=["","","","","","","","","",""]),a||(a=[]),this.setState({tasks:t,entries:a});case 32:case"end":return r.stop()}}),null,this,[[0,6],[10,17],[20,26]])}},{key:"setSection",value:function(e){this.setState({section:e})}},{key:"updateTasks",value:function(e){this.setState({tasks:e}),U.addOrUpdateOne("10for20",1,P,{id:1,tasks:e}).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))}},{key:"addEntry",value:function(e){e.id=(new Date).valueOf();var t=this.state.entries;t.push(e),this.setState({entries:t}),U.addOrUpdateOne("10for20",1,F,e).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return console.log("App state:",this.state),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{current:"Current",bg:"light",textTheme:"light",setSection:this.setSection}),"home"===this.state.section&&r.a.createElement(B,{style:A,tasks:this.state.tasks,updateTasks:this.updateTasks,updateEntries:this.addEntry}),"chart"===this.state.section&&r.a.createElement(I,{style:A,tasks:this.state.tasks,entries:this.state.entries,updateTasks:this.updateTasks}),"settings"===this.state.section&&r.a.createElement(w,{style:A,tasks:this.state.tasks}))}}]),t}(r.a.Component),A={backgroundColor:"lightgrey",height:"100vh",padding:"20px",paddingTop:"76px"};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(L,null),document.getElementById("react-app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.7f034d9d.chunk.js.map