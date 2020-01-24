
export function dateString(date){
  return months.get(date.getUTCMonth()) + " " + date.getUTCDate() + ", " + date.getUTCFullYear();
}
/*
function monthDays(month:number, year:number){
  // this function should take month number as a 0-base!
  let days = new Date(year, month+1, 0).getDate();
  let res = [];
  for(let i = 0; i<= days; i++){
    res.push(i);
  }
  return res;
}
*/
export const months = new Map([
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

export const colors = [
  "red",
  "orange",
  "yellow",
  "limegreen",
  "green",
  "lightblue",
  "blue",
  "violet",
  "purple",
  "pink"
];

export function stringifyArray(arr){
  let res = "";
  arr.forEach((item, index)=>{
    res += item;
    if(index < arr.length-1){
      res += "\n";
    }
  });
  return res;
}

export function getWeekOfMonthNumber(dt){
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