const fs = require("fs");

// fs.writeFile('read.txt' , "today is awesome day :)", (err) => {
//     console.log("files is created");
//     console.log(err);
// });


//fs.appendFile('read.txt' , 'plz follow my github account', (err)=>{
//  console.log("task completed");
//})

fs.readFile('read.txt', "utf-8", (err, data) => {
    console.log(data);
})
