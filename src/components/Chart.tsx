import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function Chart(props:any) {
  return (
    <Container fluid={true} style={ props.style }>
      <Card>
        <Card.Body>
          <Card.Title>Chart section</Card.Title>
          {JSON.stringify(props.entries)}
        </Card.Body>
      </Card>
    </Container>
  );
}