import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import CardColumns from 'react-bootstrap/CardColumns';

export default function Settings(props:any){
  return(
    <Container fluid={true} style={ props.style }>
      <CardColumns>
        <Card>
          <Card.Body>
            <Card.Title>Page Theme</Card.Title>
            <ListGroup>
              <ListGroup.Item active>Light</ListGroup.Item>
              <ListGroup.Item disabled>Dark</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Colors &amp; Patterns</Card.Title>
            <Card.Text>This will be accordion groups once options are available.</Card.Text>
            <ListGroup>
              <ListGroup.Item active>Colors</ListGroup.Item>
              <ListGroup.Item disabled>Patterns</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Chart Formats</Card.Title>
            <ListGroup>
              <ListGroup.Item active>Monthly</ListGroup.Item>
              <ListGroup.Item disabled>Weekly</ListGroup.Item>
              <ListGroup.Item disabled>Calendar View</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Tasks</Card.Title>
            <ListGroup>
              {props.tasks && props.tasks.map((task:string, index:number)=>
                <ListGroup.Item>{index+1}. {task}</ListGroup.Item>
              )}
            </ListGroup>
          </Card.Body>
        </Card>
      </CardColumns>
    </Container>
  );
}