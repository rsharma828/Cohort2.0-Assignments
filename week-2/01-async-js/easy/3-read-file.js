/* this is code to read contents of a file using fs function and async function*/

const fs = require('fs').promises;


async function readFile(filePath, encoding = 'utf-8') {
    try {
      const data = await fs.readFile(filePath, encoding);
      // console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  }
  
async function main() {
    try {
      const finalAns = await readFile("a.txt");
      console.log(finalAns);
    } catch (error) {
      console.log("error loading file" + error);
    }
  }
  
  main();

  // this is the code using normal function
  // const fs = require('fs');

// function readFile(filePath, encoding = 'utf8') {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, encoding, (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// // Example usage:
// readFile('a.txt')
//   .then(content => {
//     console.log('File content:', content);
//   })
  