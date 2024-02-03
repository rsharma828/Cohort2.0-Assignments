// /*
//  * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
//  * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
//  * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
//  */

function wait1(t) {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res("promise resolved");
        }, t*1000); // Convert seconds to milliseconds
    })
}

function wait2(t) {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res("promise resolved");
        }, t*1000); // Convert seconds to milliseconds
    })
}

function wait3(t) {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res("promise resolved");
        }, t*1000); // Convert seconds to milliseconds
    })
}

async function calculateTime(t1, t2, t3) {
    const currentTime = Date.now();
   const result = await Promise.all([wait1(t1), wait2(t2), wait3(t3)])
      const endTime = Date.now();
    const timeTaken  = endTime  - currentDate;
    
    return timeTaken;

}

  module.exports = calculateTime;
