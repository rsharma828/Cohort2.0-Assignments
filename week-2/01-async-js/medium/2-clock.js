function dateTime() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    if (hours > 12) {
        hours = hours -12;
      console.log("hello");
      console.clear();
      console.log(`${hours}:${minutes}:${seconds} PM`);
    } else {
      console.clear();
      console.log(`${hours}:${minutes}:${seconds} AM`);
    }
  
    
  }
  
  setInterval(function(){dateTime()},1000);
  