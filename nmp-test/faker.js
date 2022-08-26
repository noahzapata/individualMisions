let faker = require('faker');
let fs = require('fs');

let i=0
while(i<1000 && bool===false){
    let name = faker.name.findName();
    fs.appendFile('names.txt', `${name} `, (err) => {
        if (err) {
            console.log(`Error : ${err}`)
        }
})
i++  
} console.log('The "data to append" was appended to file!');
