const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const uri = "mongodb://localhost:27017/testNativeDriver";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  if(err){
    console.log("err connecting to db");
    process.exit(1);
  }

  console.log("OK");
  const collection = client.db("testNativeDriver").collection("collection1");
  // collection.insert({name:"An", tuoi:20}, (err, result) => {
  //   if(err){
  //     console.log("err inserting");
  //   }
  //   else{
  //     console.log(result);
  //   }
  // })

  // collection.insert({name:"Tien", tuoi:21}, (err, result) => {
  //   if(err){
  //     console.log("err inserting");
  //   }
  //   else{
  //     console.log(result);
  //   }
  // })

  // collection.insert({name:"Hoang", tuoi:22}, (err, result) => {
  //   if(err){
  //     console.log("err inserting");
  //   }
  //   else{
  //     console.log(result);
  //   }
  // })

  // collection.insert({name:"Hung", tuoi:23}, (err, result) => {
  //   if(err){
  //     console.log("err inserting");
  //   }
  //   else{
  //     console.log(result);
  //   }
  // })

  

  // collection.updateMany({name:"Ann"}, {$set: {name:"Tien"}}, (err, result) => {
  //   if(err){
  //     console.log("update failed");
  //   }
  //   else{
  //     console.log("updated successfully");
  //   }
  // });

  // collection.remove({name: "Tien"}, (err, result) => {
  //   if(err){
  //     console.log("update failed");
  //   }
  //   else{
  //     console.log("updated successfully");
  //   }
  // })
  // perform actions on the collection object

  collection.find({_id: mongodb.ObjectID("5dca5de16f0ec43194440aaa")}, (err, result) => {
    if(err){
      console.log("error finding");
    }
    else{
      console.log(result.toArray((err, doc) => {
        console.log(doc);
      }));
    }
  });

  client.close();
});