import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import TestChart from './charts/testChart';

export default function Chart(props:any) {
  return (
    <Container fluid={true} style={ props.style }>
      <Card>
        <Card.Body>
          <Card.Title>Chart section</Card.Title>
          {JSON.stringify(props.entries)}
          <TestChart entries={props.entries} tasks={props.tasks} />
        </Card.Body>
      </Card>
    </Container>
  );
}