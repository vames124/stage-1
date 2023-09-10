//Getting current day of the week
const dayOfWeek = document.getElementById('day-of-week');
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

days.forEach((day, index)=>{
    if(index == new Date().getDay()){
       dayOfWeek.textContent = `${day}`;
    }
})


//Getting current UTC time

const currentUtcTime = document.getElementById('utc-time');
    
  function timeUpdate(){
    let time = new Date();
    let ms = time.getUTCMilliseconds();
    let utcString = time.toUTCString();
    
    currentUtcTime.innerText = ms
    console.log(utcString);

  };

setInterval(timeUpdate, 1000);