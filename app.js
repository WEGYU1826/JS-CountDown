const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadLine = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4")   

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// console.log(items);
let futureDate = new Date(tempYear , tempMonth , tempDay + 10 , 11 , 30 ,0);
// console.log(futureDate);

const year = futureDate.getFullYear();
const month = futureDate.getMonth();
const day = futureDate.getDay();
const date = futureDate.getUTCDate();
const hour = futureDate.getHours();
const mins = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${weekdays[day]}, ${date} ${months[month]} ${year} ${hour}:${mins}am`

// future time in ms

const  futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  // console.log(t);

  // 1s = 1000ms;
  
  // value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 *1000;
  const oneMinute = 60 * 1000;

  // calculate all value
  let days = Math.floor(t / oneDay);
  let hour = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array;
  const value = [days , hour , minutes , seconds];

  function format(items){
    return items < 10 ?  items = `0${items}` : items;
  }
  items.forEach((content,index) => {
    content.innerHTML = format(value[index]);
  })
  if(t < 0){
    clearInterval(countdown);
    deadLine.innerHTML = `<h4 class="expired">Sorry this giveaway expired</h4>`
  }
}

// countdown 
let countdown = setInterval(getRemainingTime , 1000);
getRemainingTime();