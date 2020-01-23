import React from 'react';
import Navigation from './components/Nav';
import Settings from './components/Settings';
import Home from './components/Home';
import Chart from './components/Chart';

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

  setSection(section:string) {
    this.setState({
      section:section
    });
  }

  updateTasks(tasks:string[]){
    this.setState({
      tasks: tasks
    });
  }

  addEntry(entry:{task:string,date:any}){
    let entries = this.state.entries;
    entries.push(entry);
    this.setState({
      entries: entries
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
          <Settings style={pageBg} />
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