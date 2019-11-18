const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

mongoose.connect('mongodb+srv://thanh:1@cluster0-hjpbg.mongodb.net/test?retryWrites=true&w=majority', (err) => {
  if(err){
    console.log("errr" + err.message);
  }
  else{
    console.log("OK");

    let a = mongoose.model('a', {name: String}, 'as');

    // let aa = new a({name:'Practical Node Bookkk'});
    // aa.save((err, results) => {
    //   if(err){
    //     console.log(err);
    //     process.exit(1);
    //   }
    //   else{
    //     console.log('saved' + results);
    //     process.exit(0);
    //   }
    // })

    
    a.findOne({name:'Practical Node Book'}, (err, aa)=>{
      if(err){
        console.log(err);
      }
      else{
        console.log("CC");
        console.log(aa);
      }
    })
  }
});



// let Book = mongoose.model('Book', {name: String, price: String, type: String, img: String});
// let practicalNodeBook = new Book({name:'Practical Node Book', price:'10000', type: "Tay cam", img:"a.jpg"});
// practicalNodeBook.save((err, results) => {
//   if(err){
//     console.log(err);
//     process.exit(1);
//   }
//   else{
//     console.log('saved' + results);
//     process.exit(0);
//   }
// })

