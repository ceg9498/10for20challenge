import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import EntryForm from './EntryForm';
import TasksForm from './TaskForm';

export default function Home(props:any){
  let tasks = props.tasks;
  return (
    <Container fluid={true} style={ props.style }>
      <CardColumns>
        <Card bg={props.theme} style={{color: props.theme === "dark" ? "white" : "black"}}>
          <Card.Header>
            <Card.Title>Home Section</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>Here you can manage your tasks and submit a new entry.</Card.Text>
          </Card.Body>
        </Card>
        <Card bg={props.theme} style={{color: props.theme === "dark" ? "white" : "black"}}>
          <Card.Header>
            <Card.Title>New Entry</Card.Title>
          </Card.Header>
          <Card.Body>
            <EntryForm tasks={tasks} updateEntries={props.updateEntries} />
          </Card.Body>
        </Card>
        {tasks.length > 0 &&
          <Card bg={props.theme} style={{color: props.theme === "dark" ? "white" : "black"}}>
            <Card.Header>
              <Card.Title>My Tasks</Card.Title>
            </Card.Header>
            <Card.Body>
              <TasksForm tasks={tasks} updateTasks={props.updateTasks} />
            </Card.Body>
          </Card>
        }
      </CardColumns>
    </Container>
  );
}