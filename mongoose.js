const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

let Book = mongoose.model('Book', {name: String, price: String, type: String, img: String});
let practicalNodeBook = new Book({name:'Practical Node Book', price:'10000', type: "Tay cầm", img:"a.jpg"});
practicalNodeBook.save((err, results) => {
  if(err){
    console.log(err);
    process.exit(1);
  }
  else{
    console.log('saved' + results);
    process.exit(0);
  }
})