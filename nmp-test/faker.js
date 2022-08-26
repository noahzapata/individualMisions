let faker = require('faker');
let fs = require('fs');



// for(let i=0;i<1000;i++){
//         let name = faker.name.findName();
//         fs.appendFile('names.txt', name, (err) => {
//             if (err) throw err;
//             console.log('The "data to append" was appended to file!');
//           });
//     }


let i=0
let bool= false
while(i<1000 && bool===false){
    let name = faker.name.findName();
    fs.appendFile('names.txt', `${name} `, (err) => {
        if (err) {
            console.log(`Error : ${err}`)
        }
})
i++  
} console.log('The "data to append" was appended to file!');



