import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// form for adding/editing tasks to the list of 10
export default class TaskForm extends React.Component<{tasks:string[], updateTasks:Function}, any>{
  constructor(props:{tasks:string[], updateTasks:Function}){
    super(props);
    this.state = {
      tasks:this.props.tasks,
    }
  }

  onChange(e:any, index:number){
    e.preventDefault();

    let tasks = this.state.tasks;
    tasks[index] = e.target.value;

    this.setState({
      tasks: tasks
    });
  }

  render(){
    return(
      <Form>
        {this.state.tasks.map((task:string, index:number)=>
          <Form.Group controlId={"task-" + index} key={"task-" + index}>
            <div style={taskRow}>
              <Form.Label style={{width: "40px", marginTop: "5px"}}>{index+1}.</Form.Label>
              <Form.Control type="text" value={task}  onChange={(e:any)=>this.onChange(e, index)} />
            </div>
          </Form.Group>
        )}
        <Button variant="primary" onClick={()=>this.props.updateTasks(this.state.tasks)}>Submit</Button>
      </Form>
    );
  }
}

let taskRow = {
  display: "flex",
  alignItems: "center"
}