import React from 'react';
//import Cookies from 'js-cookie';
import Navigation from './components/Nav';
import Settings from './components/Settings';
import Home from './components/Home';
import Chart from './components/Chart';
import iDB from './data/indexedDb';

let dbName = "10for20";
let store = {
  tasks: "tasks",
  entries: "entries"
};
const DB_VER = 1;

export default class App extends React.Component<any,any> {
  constructor(props:any){
    super(props);
    this.state = {
      section: "home",
      tasks: [],
      entries: [],
      theme: "dark"
    };
    this.setSection = this.setSection.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.updateTasks = this.updateTasks.bind(this);
    this.addEntry = this.addEntry.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  async getData(){
    let db;
    let tasks;
    let entries;
    try {
      db = await iDB.init(dbName, DB_VER, [store.tasks, store.entries]);
    } catch(e) {
      console.error(e);
    }
    if(db){
      try {
        let res = await iDB.getOne(dbName, DB_VER, store.tasks, 1);
        if(res){
          tasks = (res as any).tasks;
        }
      } catch(e) {
        console.error(e);
      }
      try {
        entries = await iDB.getAll(dbName, DB_VER, store.entries);
      } catch(e) {
        console.error(e);
      }
    }
    if(!tasks){
      tasks = ["", "", "", "", "", "", "", "", "", ""];
    }
    if(!entries){
      entries = [];
    }
    this.setState({
      tasks: tasks,
      entries: entries
    })
  }

  setSection(section:string) {
    this.setState({
      section:section
    });
  }

  setTheme(theme:string) {
    this.setState({
      theme: theme
    });
    //Cookies.set('theme', theme, {path: ''})
  }

  updateTasks(tasks:any){
    this.setState({
      tasks: tasks
    });
    iDB.addOrUpdateOne(dbName, DB_VER, store.tasks, {id:1, tasks:tasks})
    .then((message)=>{
      console.log(message);
    }).catch((message)=>{
      console.error(message);
    });
  }

  addEntry(entry:any){
    let entries = this.state.entries;
    let index = entries.findIndex((item:any)=> item.id === entry.id);
    if(index === -1){
      entry.tasks = [entry.task];
      delete entry.task;
      entries.push(entry);
      index = entries.length-1;
    } else {
      entries[index].tasks.push(entry.task);
    }
    this.setState({
      entries: entries
    });
    iDB.addOrUpdateOne(dbName, DB_VER, store.entries, entries[index])
    .then((message)=>{
      console.log(message);
    }).catch((message)=>{
      console.error(message);
    });
  }

  render(){
    return(
      <>
        <Navigation
          current="Current" 
          bg={this.state.theme} 
          textTheme={this.state.theme}
          setSection={this.setSection} />
        <div style={{...pageBg, backgroundColor: this.state.theme === "light" ? lightBG : darkBG}}>
        <Home 
          style={{display: this.state.section === "home" ? "block" : "none"}} 
          tasks={this.state.tasks} updateTasks={this.updateTasks} updateEntries={this.addEntry} />
        <Chart
          style={{display: this.state.section === "chart" ? "block" : "none"}}
          tasks={this.state.tasks} entries={this.state.entries} updateTasks={this.updateTasks} />
        <Settings 
          style={{display: this.state.section === "settings" ? "block" : "none"}}
          tasks={this.state.tasks}
          setTheme={this.setTheme} />
        </div>
      </>
    )
  }
}

const pageBg = {
  minHeight: "100vh",
  padding: "20px",
  paddingTop: "76px"
};

const lightBG = "rgba(0,0,0,.1)";
const darkBG = "hsl(208, 8%, 30%)";