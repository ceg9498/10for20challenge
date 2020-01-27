import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import drawMonth from './charts/drawMonth';

export default function Chart(props:any) {
  let width = 600;
  let height = width * .7;
  drawMonth(props.entries, props.tasks, height, width);
  return (
    <Container fluid={true} style={ props.style }>
      <Card>
        <Card.Body>
          <Card.Title>Chart section</Card.Title>
          <div id="chart" />
        </Card.Body>
      </Card>
    </Container>
  );
}