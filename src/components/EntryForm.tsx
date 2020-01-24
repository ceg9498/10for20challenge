import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default class EntryForm extends React.Component<{tasks:string[], updateEntries:Function}, any>{
  constructor(props:any){
    super(props);
    this.state = {
      task: this.props.tasks[0],
      date: `${new Date().getFullYear()}-${(new Date().getMonth()+1).toString().padStart(2, '0')}-${new Date().getDate()}`
    };
  }

  handleChange(e:any){
    let { name, value } = e.target;
    e.preventDefault();

    this.setState({
      [name]: value
    });
  }

  render(){
    return(
      <Form>
        {/** Date Picker */}
        <Form.Group controlId="date-pick">
          <Form.Row>
            <Col>
              <Form.Label>Date</Form.Label>
            </Col>
            <Col>
              <Form.Control as="input" type="date" 
                name="date"
                value={this.state.date} 
                onChange={(e)=>this.handleChange(e)}>
              </Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>
        {/** Time Spent (TODO) */}

        {/** Task Completed (select) */}
        <Form.Group controlId="task-pick">
          <Form.Row>
            <Col>
              <Form.Label>Task Completed</Form.Label>
            </Col>
            <Col>
              <Form.Control as="select" 
                name="task"
                value={this.state.task} 
                onChange={(e)=>this.handleChange(e)}
              >
                {this.props.tasks.map((task)=>
                  task !== "" &&
                    <option key={task} value={task}>{task}</option>
                )}
              </Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>
        <Button variant="primary" onClick={()=>this.props.updateEntries({date:this.state.date, task:this.state.task})}>Submit</Button>
      </Form>
    );
  }
}