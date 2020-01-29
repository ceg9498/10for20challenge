import React from 'react';
import Form from 'react-bootstrap/Form';

export function Color(props:{color:string}){
  return(
    <div style={{...style, backgroundColor: props.color}} />
  )
}

export function ColorSetter(props:{color:string, setColor:Function, index:number}){
  return(
    <Form.Control style={inputStyle} type="color" value={props.color} onChange={(e:any)=>props.setColor(e.target.value, props.index)} />
  )
}

const style = {
  display: "inline-block",
  border: "1px solid black",
  borderRadius: "3px",
  height: "20px",
  width: "20px"
}

const inputStyle = {
  width: "20px",
  height: "20px",
  border: "1px solid black",
  borderRadius: "3px",
  padding: "2px"
}