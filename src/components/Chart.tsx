import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import drawMonth from './charts/drawMonth';

export default function Chart(props:any) {
  const [month, setMonth] = React.useState(new Date().getMonth());
  let width = 600;
  let height = width * .7;
  drawMonth(props.entries, props.tasks, height, width, month, props.colors, props.noneColor, props.theme);
  return (
    <Container fluid={true} style={ props.style }>
      <Card bg={props.theme} style={{color: props.theme === "dark" ? "white" : "black"}}>
        <Card.Header>
          <Card.Title>Chart section</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form.Control as="select" name="month" 
            value={month.toString()}
            onChange={(e:any)=>{e.preventDefault(); setMonth(parseInt(e.target.value));}}
          >
            <option value="0">January</option>
            <option value="1">February</option>
            <option value="2">March</option>
            <option value="3">April</option>
            <option value="4">May</option>
            <option value="5">June</option>
            <option value="6">July</option>
            <option value="7">August</option>
            <option value="8">September</option>
            <option value="9">October</option>
            <option value="10">November</option>
            <option value="11">December</option>
          </Form.Control>
          <div id="chart" />
        </Card.Body>
      </Card>
    </Container>
  );
}