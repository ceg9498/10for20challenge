import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import drawMonth from './charts/drawMonth';

export default function Chart(props:any) {
  let width = 600;
  let height = width * .7;
  drawMonth(props.entries, props.tasks, height, width, new Date().getMonth(), props.colors, props.noneColor);
  return (
    <Container fluid={true} style={ props.style }>
      <Card bg={props.theme} style={{color: props.theme === "dark" ? "white" : "black"}}>
        <Card.Header>
          <Card.Title>Chart section</Card.Title>
        </Card.Header>
        <Card.Body>
          <div id="chart" />
        </Card.Body>
      </Card>
    </Container>
  );
}