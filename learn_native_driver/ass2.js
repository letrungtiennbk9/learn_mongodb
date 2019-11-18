const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const fs = require("fs");

let url = 'mongodb://localhost:27017/';

var text = fs.readFileSync("./m3-customer-data.json");
let data = JSON.parse(text);
console.log(data[0]);

var text2 = fs.readFileSync("./m3-customer-address-data.json");
let data2 = JSON.parse(text2);
// console.log(data2);

for(let i = 0; i<data.length; i++){
  data[i].country = data2[i].country;
  data[i].city = data2[i].city;
  data[i].state = data2[i].state;
  data[i].phone = data2[i].phone;
}
console.log(data);

MongoClient.connect(url, (err, result) => {
  if(err) { console.log('Err connecting to client'); }
  else { 
    console.log('OK');
    const collection = result.db('ass2').collection('collection1');

    // collection.insertOne(data[0], (err, result) => {
    //   if(err) { console.log('Error adding'); }
    //   else {
    //     console.log('OK');
    //   }
    // });

    // collection.insertMany(data, (err, result) => {
    //   if(err) { console.log('Error adding'); }
    //   else {
    //     console.log('OK');
    //   }
    // });

    for(let i = 0; i<data.length; i++){
      collection.insertOne(data[i], (err, result) => {
        if(err) { console.log('Error adding'); }
        else {
          console.log(i);
        }
      });
    }
  }
})