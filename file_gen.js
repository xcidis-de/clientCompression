const faker = require('faker');
const fs = require('fs');


let array = [
    faker.address.zipCode,
    faker.address.city,
    faker.address.cityPrefix,
    faker.address.citySuffix,
    faker.address.streetName,
    faker.address.streetAddress,
    faker.address.streetSuffix
];

let x = 0;
let string = ``;

while(x < 1000){
    string = ``;
    for(let y = 0; y < 100000; y++){
        string += array[y%array.length]() + ' ';
    }
    x++
    fs.appendFileSync('./big_text.txt', string, (err)=>{
        if(err){
            console.log(err);
        }
    })
}