import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

export default function Navigation(props:any) {
  let iconTheme = props.textTheme === "dark" ? "light" : "dark";
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
      <FontAwesomeIcon className={`text-${iconTheme}`} icon={faBell} />
    </Navbar>
  );
}