import * as d3 from 'd3';
import * as helpers from './helpers';

export default function drawMonth(entries, tasks, height, width, date, colors, noneColor, theme){
  if(!colors){
    colors = helpers.colors;
  }
  if(!noneColor){
    noneColor = "lightgray";
  }
  if(!date.year || date.year < 1970 || date.year > new Date().getUTCFullYear()) date.year = new Date().getUTCFullYear();
  if(!date.month || date.month < 0) date.month = 0;
  if(date.month > 11) date.month = 11;
  let textColor = theme === "dark" ? "white" : "black"
  /** SIZING & SCALE */
  const max = {
    pad: 10,
    size: 50,
    total: (10*6) + (50*7)
  };
  if(width > max.total){
    // divide the width into multiple columns
    width = width/2;
  }
  let cellpadding = ((5/6 * width/7) > max.size) ? max.pad : (1/6 * width/8);
  let cellsize = ((5/6 * width/7) > max.size) ? max.size : (5/6 * width/7);
  let aWidth = (cellsize*7)+(cellpadding*6);
  height = 60 + (6*cellsize) + (5*cellpadding);
  /** SVG */
  let svg = d3.select("#chart")
    .append('svg')
    .attr("height", height)
    .attr("width", width);
  /** CHART */
  let filtered = entries.filter((entry)=> date.month === new Date(entry.id).getUTCMonth() && date.year === new Date(entry.id).getUTCFullYear());
  let data = [];
  helpers.monthDays(date.month, date.year).forEach((day)=>{
    if(filtered.length > 0){
      let entryIndex = filtered.findIndex((entry)=>new Date(entry.id).getUTCDate() === day);
      if(entryIndex !== -1){
        data.push({day: day, entry: filtered[entryIndex]});
      } else {
        data.push({day: day, entry: {id:new Date(date.year, date.month, day), tasks: []}});
      }
    } else {
      data.push({day: day, entry: {id: new Date(date.year, date.month, day), tasks: []}});
    }
  });

  /** LINEAR GRADIENT DEFS */
  let defs = svg.append("defs");
  let gradientMap = new Map();

  svg.append("text")
    .text(()=>helpers.fullMonths.get(date.month))
    .style("fill", textColor)
    .attr("x", ()=>aWidth/2)
    .attr("y", 25)
    .attr("text-anchor", "middle")
    .attr("font-size", "24");
  
  svg.append("g")
    .selectAll("text")
    .data(["S","M","T","W","T","F","S"]).enter()
    .append("text")
    .text((d)=>d)
    .style("fill", textColor)
    .attr("x", (d, i)=>i*(cellsize+cellpadding)+(cellsize/2))
    .attr("y", 50)
    .attr("font-size", "24");

  let cell = svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "cell")
    .attr("x", (d)=> new Date(d.entry.id).getUTCDay()*(cellsize+cellpadding)+cellpadding)
    .attr("y", (d)=> (helpers.getWeekOfMonthNumber(new Date(d.entry.id))-1)*(cellsize+cellpadding)+60)
    .attr("height", cellsize)
    .attr("width", cellsize)
    .attr("rx", 5)
    .style("fill", (d)=>{
        if(d.entry.tasks.length === 0){
          return noneColor;
        } else if(d.entry.tasks.length === 1){
          let i = tasks.indexOf(d.entry.tasks[0]);
          return colors[i];
        } else {
          // LINEAR GRADIENT
          let gradient = defs.append("linearGradient")
            .attr("id", `lg-${d.entry.id}`)
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "0%")
            .attr("y2", "100%");
          gradientMap.set(d.entry.id, gradient);

          d.entry.tasks.forEach((task, index)=>{
            gradientMap.get(d.entry.id).append("stop")
              .attr("offset", ()=> index === 0 ? 0+"%" : index/d.entry.tasks.length*100+"%")
              .attr("stop-color", colors[tasks.indexOf(task)]);
            gradientMap.get(d.entry.id).append("stop")
              .attr("offset", ()=> (index+1)/d.entry.tasks.length*100+"%")
              .attr("stop-color", colors[tasks.indexOf(task)]);
          });
          return `url(#lg-${d.entry.id})`;
        }
      });
  
  cell.append("svg:title")
    .text((d)=>helpers.dateString(new Date(d.entry.id)) + "\n" + (d.entry.tasks.length > 0 ? helpers.stringifyArray(d.entry.tasks) : ""));
}
