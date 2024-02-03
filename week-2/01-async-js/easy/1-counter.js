/* this code includes solution for counter in console which clears itself after every
second and shows other number*/

function counter(count) {
    const intervaId = setInterval(function () {
      if (count > 0) {
        console.clear();
        console.log(count);
        count--;
      } else {
        clearInterval(intervaId);
      }
    },1000);
  }
  counter(30);
  