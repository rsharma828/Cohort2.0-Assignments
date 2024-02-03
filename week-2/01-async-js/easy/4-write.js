//this code contains writing content to the a.txt file using .write function

const  fs = require('fs');

function readFile(filePath,encoding='utf-8'){
    return new Promise((resolve,reject)=>{
    fs.readFile(filePath,encoding,(err,data) => {
        if(err){
            reject(err);
            
        }
        else{
            resolve(data);
        }
    });
});
}

function writeFile(filePath,content="added something"){
    return new Promise((resolve,reject) => {
        fs.writeFile(filePath,content,(err) => {
            if(err){
                reject(err)
            }
            else{
                console.log("data written successfully")
            }
        });
    });
}


// readFile("a.txt")
// .then(content=>{
//     console.log(content);
// })
// for (let index = 0; index < 10000000; index++) {
    
// }

writeFile("a.txt");


readFile("a.txt")
.then(content=>{
    console.log(content);
})