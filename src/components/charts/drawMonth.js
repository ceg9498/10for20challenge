import * as d3 from 'd3';
import * as helpers from './helpers';

export default function drawMonth(entries, tasks, height, width){
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
  let filtered = entries.filter((entry)=> new Date().getUTCMonth() === new Date(entry.id).getUTCMonth());
  
  svg.append("g")
    .selectAll("text")
    .data(["S","M","T","W","T","F","S"]).enter()
    .append("text")
    .text((d)=>d)
    .attr("x", (d, i)=>i*(cellsize+cellpadding)+(cellsize/2))
    .attr("y", 35)
    .attr("font-size", "24");

  /*svg.selectAll("rect")
    .data(monthDays(0, 2020))
    .enter()
    .append("rect")
    .attr("x", (d)=> new Date(2020, 0, d).getUTCDay()*(cellsize+cellpadding))
    .attr("y", (d)=> (getWeekOfMonthNumber(new Date(2020, 0, d))-1)*(cellsize+cellpadding)+60-cellpadding)
    .attr("height", cellsize+cellpadding)
    .attr("width", cellsize+cellpadding)
    .style("fill", "lightblue")
    .style("fill-opacity", "0.1")
    .style("stroke", "black");*/

  let cell = svg.selectAll("rect")
    .data(filtered)
    .enter()
    .append("rect")
    .attr("class", "cell")
    .attr("x", (d)=> new Date(d.id).getUTCDay()*(cellsize+cellpadding)+cellpadding)
    .attr("y", (d)=> (helpers.getWeekOfMonthNumber(new Date(d.id))-1)*(cellsize+cellpadding)+60)
    .attr("height", cellsize)
    .attr("width", cellsize)
    .attr("rx", 5)
    .style("fill", (d)=>{
        let i = tasks.indexOf(d.tasks[0]);
        return i !== -1 ? helpers.colors[i] : "black";
      });
  
  cell.append("svg:title")
    .text((d)=>helpers.dateString(new Date(d.id)) + "\n" + helpers.stringifyArray(d.tasks))

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
      .style("fill", ()=>helpers.colors[index])
      .style("stroke", "black");
    legend.append("text")
      .text(task)
      .attr("x",legendblock+legendpad)
      .attr("y",(legendblock*index)+(legendpad*index)+15)
      .attr("height",20);
  });
}
