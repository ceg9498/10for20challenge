import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import CardColumns from 'react-bootstrap/CardColumns';
import { ColorSetter } from './Color';

export default function Settings(props:any){
  return(
    <Container fluid={true} style={ props.style }>
      <CardColumns>
        <Card>
          <Card.Body>
            <Card.Title>Page Theme</Card.Title>
            <ListGroup defaultActiveKey="#dark">
              <ListGroup.Item href="#light" as="button" action 
                onClick={()=>props.setTheme("light")}>Light</ListGroup.Item>
              <ListGroup.Item href="#dark" as="button" action 
                onClick={()=>props.setTheme("dark")}>Dark</ListGroup.Item>
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
            <Card.Title>Task Colors</Card.Title>
            <ListGroup>
              {props.tasks && props.tasks.map((task:string, index:number)=>
                <ListGroup.Item key={`task-${index}`} style={{display: "flex", alignItems: "center"}}>
                  <ColorSetter color={props.colors[index]} setColor={props.setColor} index={index} />
                  &nbsp;
                  {index+1}. {task}
                </ListGroup.Item>
              )}
              <ListGroup.Item style={{display: "flex", alignItems: "center"}}>
                <ColorSetter color={props.noneColor} setColor={props.setColor} index={-1} />
                &nbsp;
                No Task
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </CardColumns>
    </Container>
  );
}