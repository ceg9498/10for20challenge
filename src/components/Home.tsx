import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import EntryForm from './EntryForm';
import TasksForm from './TasksForm';

export default function Home(props:any){
  let tasks = props.tasks;
  return (
    <Container fluid={true} style={ props.style }>
      <CardColumns>
        <Card>
          <Card.Body>
            <Card.Title>Home Section</Card.Title>
            <Card.Text>Here you can manage your tasks and submit a new entry.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>New Entry</Card.Title>
            <EntryForm tasks={tasks} updateEntries={props.updateEntries} />
          </Card.Body>
        </Card>
        {tasks.length > 0 &&
          <Card>
            <Card.Body>
              <Card.Title>My Tasks</Card.Title>
              <TasksForm tasks={tasks} updateTasks={props.updateTasks} />
            </Card.Body>
          </Card>
        }
      </CardColumns>
    </Container>
  );
}