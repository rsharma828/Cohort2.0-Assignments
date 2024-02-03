/* this code contains counter using timeout function*/

function myFunction(param) {
    console.clear();
    console.log(param);
  }
  // Call setTimeout with a delay of 2000 milliseconds (2 seconds)
  function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function counter(count) {
    for (let i = 0; i < count; i++) {
      await delay(1000);
      myFunction(i);
    }
  }
  counter(30);
  