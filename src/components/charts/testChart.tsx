import React from 'react';
import * as d3 from 'd3';

export default function TestChart(props:{entries:any, tasks:string[]}){
  let width = 800;
  let height = width * .7;
  draw(props.entries, props.tasks, height, width);
  return(<div id="chart" style={{border: "1px solid limegreen", height: height, width: width}}></div>);
}

function draw(entries:any, tasks:string[], height:number, width:number){
  //getWeekOfMonthNumber(new Date(new Date().setUTCDate(5)));
  tasks = tasks.filter(task => task !== "");
  /** SIZING & SCALE */
  let cellpadding = 10;
  let cellsize = 50;
  let legendblock = 20;
  let legendpad = 5;
  let legendPosX = (cellsize*7)+(cellpadding*8);
  /** SVG */
  let svg = d3.select("#chart")
    .append('svg')
    .attr("height", height)
    .attr("width", width);
  /** CHART */
  let filtered = entries.filter((entry:any)=> new Date().getUTCMonth() === new Date(entry.id).getUTCMonth());
  
  let labels = svg.append("g")
    .selectAll("text")
    .data(["S","M","T","W","T","F","S"]).enter()
    .append("text")
    .text((d:string)=>d)
    .attr("x", (d:string,i:number)=>i*(cellsize+cellpadding)+(cellsize/2)-5)
    .attr("y", 35)
    .attr("font-size", "24");

  let cell = svg.selectAll("rect")
    .data(filtered)
    .enter()
    .append("rect")
    .attr("class", "cell")
    .attr("x", (d:any)=> new Date(d.id).getUTCDay()*(cellsize+cellpadding)+cellpadding)
    .attr("y", (d:any)=> (getWeekOfMonthNumber(new Date(d.id))-1)*(cellsize+cellpadding)+60)
    .attr("height", cellsize)
    .attr("width", cellsize)
    .style("fill", "lightblue")
    .style("stroke", "black");
  
  cell.append("svg:title")
    .text((d:any)=>dateString(new Date(d.id)) + "\n" + stringifyArray(d.tasks))

  /** LEGEND */
  let legend = svg.append("g")
    .attr("id","legend")
    .attr("height", (legendblock+legendpad)*tasks.length)
    .attr("width", 100)
    .attr("transform", `translate(${legendPosX},20)`);
  tasks.forEach((task, index)=>{
    legend.append("rect")
      .attr("x",0)
      .attr("y",(legendblock*index)+(legendpad*index))
      .attr("height",legendblock)
      .attr("width",legendblock)
      .style("fill", "orange")
      .style("stroke", "black");
    legend.append("text")
      .text(task)
      .attr("x",legendblock+legendpad)
      .attr("y",(legendblock*index)+(legendpad*index)+15)
      .attr("height",20);
  });
}

function dateString(date:Date){
  return months.get(date.getUTCMonth()) + " " + date.getUTCDate() + ", " + date.getUTCFullYear();
}

const months = new Map([
  [0, "Jan"],
  [1, "Feb"],
  [2, "Mar"],
  [3, "Apr"],
  [4, "May"],
  [5, "Jun"],
  [6, "Jul"],
  [7, "Aug"],
  [8, "Sep"],
  [9, "Oct"],
  [10, "Nov"],
  [11, "Dec"]
]);

function stringifyArray(arr:string[]){
  let res = "";
  arr.forEach((item, index)=>{
    res += item;
    if(index < arr.length-1){
      res += "\n";
    }
  });
  return res;
}

function getWeekOfMonthNumber(dt:Date){
  let date = dt.getUTCDate();
  let initDay = new Date(dt.setUTCDate(1)).getUTCDay();
  let weekNum = 1;
  let cDay = initDay;
  for(let cDate = 1; cDate<date; cDate++){
    if(cDay === 6){
      cDay = 0;
      weekNum++;
    } else if(cDay < 6) {
      cDay++;
    }
  }
  return weekNum;
}