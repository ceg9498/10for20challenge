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
      theme: "dark",
      colors: [
        "#FF0000", // red
        "#FFA500", // orange
        "#FFFF00", // yellow
        "#32CD32", // limegreen
        "#008000", // green
        "#ADD8E6", // lightblue
        "#0000FF", // blue
        "#8A2BE2", // blueviolet
        "#800080", // purple
        "#FFC0CB" // pink
      ],
      noneColor: "#D3D3D3"
    };
    this.setSection = this.setSection.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.updateTasks = this.updateTasks.bind(this);
    this.addEntry = this.addEntry.bind(this);
    this.setColor = this.setColor.bind(this);
  }

  componentDidMount() {
    //let theme = Cookies.get('theme');
    //let noneColor = Cookies.get('noneColor');
    //let colors = [];
    // FUTURE: When updating # of tasks, 
    //    the number for this loop needs to be adjusted.
    /**
     * for(let i=0, i< 10; i++){
     *   colors.push(Cookies.get(`color-${i}`));
     * }
     */
    /**
     * this.setState({
     *   theme: theme,
     *   colors: colors,
     *   noneColor: noneColor
     * });
     */
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

  setColor(color:string, index:number){
    if(index > -1){
      let colors = this.state.colors;
      colors[index] = color;
      this.setState({
        colors: colors
      });
      //Cookies.set(`color-${index}`, color, {path: ''});
    } else {
      this.setState({
        noneColor: color
      });
      // Cookies.set('noneColor', color, {path: ''});
    }
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
          theme={this.state.theme}
          tasks={this.state.tasks} updateTasks={this.updateTasks} updateEntries={this.addEntry} />
        <Chart
          style={{display: this.state.section === "chart" ? "block" : "none"}}
          colors={this.state.colors}
          theme={this.state.theme}
          noneColor={this.state.noneColor}
          tasks={this.state.tasks} entries={this.state.entries} updateTasks={this.updateTasks} />
        <Settings 
          style={{display: this.state.section === "settings" ? "block" : "none"}}
          colors={this.state.colors}
          noneColor={this.state.noneColor}
          tasks={this.state.tasks}
          setTheme={this.setTheme}
          theme={this.state.theme}
          setColor={this.setColor} />
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