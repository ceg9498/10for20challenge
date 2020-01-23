import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Navigation(props:any) {
  return(
    <Navbar bg={props.bg} variant={props.textTheme} fixed="top">
      <Navbar.Brand onClick={()=>props.setSection("home")}>#10For20Challenge</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" variant="pills" defaultActiveKey="home">
          <Nav.Link onClick={()=>props.setSection("home")} eventKey="home">Home</Nav.Link>
          <Nav.Link onClick={()=>props.setSection("chart")} eventKey="chart">Chart</Nav.Link>
          <Nav.Link onClick={()=>props.setSection("settings")} eventKey="settings">Settings</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <span>Notification Icon</span>
    </Navbar>
  );
}