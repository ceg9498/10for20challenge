import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import drawMonth from './charts/drawMonth';
import drawLegend from './charts/legend';
import { clearCanvas } from './charts/helpers';

const monthsArr = [
  [0, "January"],
  [1, "February"],
  [2, "March"],
  [3, "April"],
  [4, "May"],
  [5, "June"],
  [6, "July"],
  [7, "August"],
  [8, "September"],
  [9, "October"],
  [10, "November"],
  [11, "December"]
];

export default function Chart(props:{entries:any, tasks: any, style:any, colors:any, noneColor:string, theme:any, singleMonth:boolean}) {
  const [month, setMonth] = React.useState(new Date().getUTCMonth());
  const [year, setYear] = React.useState(new Date().getUTCFullYear());
  // available width, based on CSS: 2.5rem + 70px
  let width = window.innerHeight - 90;;
  let height = width * .7;
  let filteredTasks = props.tasks.filter((task:string)=> task !== "");

  clearCanvas();
  if(props.singleMonth){
    drawMonth(props.entries, filteredTasks, height, width, {month, year}, props.colors, props.noneColor, props.theme);
  } else {
    for(let month = 0; month < 12; month++){
      drawMonth(props.entries, filteredTasks, height, width, {month, year}, props.colors, props.noneColor, props.theme);
    }
  }
  drawLegend(filteredTasks, props.theme, props.noneColor, props.colors);
  
  return (
    <Container fluid={true} style={ props.style }>
      <Card bg={props.theme} style={{color: props.theme === "dark" ? "white" : "black"}}>
        <Card.Header>
          <Card.Title>Chart section</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form.Row style={{width:width}}>
            <Col>
              <Form.Control as="select" name="month" 
                value={month.toString()}
                onChange={(e:any)=>{
                  e.preventDefault();
                  let value = parseInt(e.target.value);
                  setMonth(value);
                }}
              >
                {monthsArr.map((value)=>
                  <option key={value[1]} value={value[0]}>{value[1]}</option>
                )}
              </Form.Control>
            </Col>
            <Col>
              <Form.Control type="number" name="year"
                value={year.toString()}
                onChange={(e:any)=>{
                  e.preventDefault();
                  let value = parseInt(e.target.value);
                  setYear(value);
                }}
              />
            </Col>
          </Form.Row>
          <div id="chart" />
        </Card.Body>
      </Card>
    </Container>
  );
}