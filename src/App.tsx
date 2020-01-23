import React from 'react';
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
      tasks: ["", "", "", "", "", "", "", "", "", ""],
      entries: []
    };
    this.setSection = this.setSection.bind(this);
    this.updateTasks = this.updateTasks.bind(this);
    this.addEntry = this.addEntry.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount")
    iDB.init(dbName, DB_VER, [store.tasks, store.entries])
    .then((message)=>{
      console.log(message);
      iDB.getAll(dbName, DB_VER, store.tasks)
      .then((res)=>{
        console.log(res);
        this.setState({
          tasks: (res as any).tasks
        });
        iDB.getAll(dbName, DB_VER, store.entries)
        .then((entries)=>{
          console.log(entries);
          if(Array.isArray(entries)){
            this.setState({
              entries: entries
            });
          }
        }).catch((message:string)=>{
          console.error(message);
        })
      }).catch((message:string)=>{
        console.error(message);
      });
    }).catch((message:string) => {
      console.error(message);
    }).finally(()=>{
      console.log("callback hell is over.")
    });
  }

  setSection(section:string) {
    this.setState({
      section:section
    });
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
    entry.id = new Date().valueOf();
    let entries = this.state.entries;
    entries.push(entry);
    this.setState({
      entries: entries
    });
    iDB.addOrUpdateOne(dbName, DB_VER, store.entries, entry)
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
          bg="light" 
          textTheme="light"
          setSection={this.setSection} />
        { this.state.section === "home" &&
          <Home style={pageBg} tasks={this.state.tasks} updateTasks={this.updateTasks} updateEntries={this.addEntry} />
        }
        { this.state.section === "chart" &&
          <Chart style={pageBg} tasks={this.state.tasks} entries={this.state.entries} updateTasks={this.updateTasks} />
        }
        { this.state.section === "settings" &&
          <Settings style={pageBg} tasks={this.state.tasks} />
        }
      </>
    )
  }
}

const pageBg = {
  backgroundColor: "lightgrey",
  height: "100vh",
  padding: "20px",
  paddingTop: "76px"
};