import * as d3 from 'd3';

export default function drawLegend(tasks, theme, noneColor, colors){
  let legendblock = 20;
  let legendpad = 5;
  let textColor = theme === "dark" ? "white" : "black";
  let height = (legendblock*(tasks.length+1)) + (legendpad*tasks.length);

  let svg = d3.select("#chart")
    .append('svg')
    .attr("height", height);
  let legend = svg.append("g")
    .attr("id","legend")
    .attr("height", (legendblock+legendpad)*tasks.length)
    .attr("width", 100);
  tasks.forEach((task, index)=>{
    legend.append("rect")
      .attr("x",0)
      .attr("y",(legendblock*index)+(legendpad*index))
      .attr("height",legendblock)
      .attr("width",legendblock)
      .style("fill", ()=>colors[index])
      .style("stroke", textColor);
    legend.append("text")
      .text(task)
      .style("fill", textColor)
      .attr("x",legendblock+legendpad)
      .attr("y",(legendblock*index)+(legendpad*index)+15)
      .attr("height",20);
  });
  legend.append("rect")
    .attr("x",0)
    .attr("y",(legendblock*tasks.length)+(legendpad*tasks.length))
    .attr("height",legendblock)
    .attr("width",legendblock)
    .style("fill", noneColor)
    .style("stroke", textColor);
  legend.append("text")
    .text("No activity")
    .style("fill", textColor)
    .attr("x",legendblock+legendpad)
    .attr("y",(legendblock*tasks.length)+(legendpad*tasks.length)+15)
    .attr("height",20);
}