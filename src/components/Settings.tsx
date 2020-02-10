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
        <Card bg={props.theme} style={{color: props.theme === "dark" ? "white" : "black"}}>
          <Card.Header>
            <Card.Title>Page Theme</Card.Title>
          </Card.Header>
          <Card.Body>
            <ListGroup activeKey={`#${props.theme}`}>
              <ListGroup.Item 
                variant={props.theme}
                href="#light" as="button" action 
                onClick={()=>props.setTheme("light")}>Light</ListGroup.Item>
              <ListGroup.Item 
                variant={props.theme}
                href="#dark" as="button" action 
                onClick={()=>props.setTheme("dark")}>Dark</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card bg={props.theme} style={{color: props.theme === "dark" ? "white" : "black"}}>
          <Card.Header>
            <Card.Title>Colors &amp; Patterns</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>This will be accordion groups once options are available.</Card.Text>
            <ListGroup>
              <ListGroup.Item 
                variant={props.theme}
                action active>Colors</ListGroup.Item>
              <ListGroup.Item 
                variant={props.theme}
                action disabled>Patterns</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card bg={props.theme} style={{color: props.theme === "dark" ? "white" : "black"}}>
          <Card.Header>
            <Card.Title>Chart Formats</Card.Title>
          </Card.Header>
          <Card.Body>
            <ListGroup activeKey={`#${props.singleMonth ? 'monthly' : 'yearly'}`}>
              <ListGroup.Item
                variant={props.theme}
                href="#monthly" as="button" action
                onClick={()=>props.setChart("month")}>Monthly</ListGroup.Item>
              <ListGroup.Item 
                variant={props.theme}
                href="#yearly" as="button" action
                onClick={()=>props.setChart("year")}>Yearly</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card bg={props.theme} style={{color: props.theme === "dark" ? "white" : "black"}}>
          <Card.Header>
            <Card.Title>Task Colors</Card.Title>
          </Card.Header>
          <Card.Body>
            <ListGroup>
              {props.tasks && props.tasks.map((task:string, index:number)=>
                <ListGroup.Item 
                  variant={props.theme}
                  key={`task-${index}`} style={{display: "flex", alignItems: "center"}}>
                  <ColorSetter color={props.colors[index]} setColor={props.setColor} index={index} />
                  &nbsp;
                  {index+1}. {task}
                </ListGroup.Item>
              )}
              <ListGroup.Item
                  variant={props.theme}
                  style={{display: "flex", alignItems: "center"}}>
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