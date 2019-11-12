const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

let Book = mongoose.model('Book', {name: String});
let practicalNodeBook = new Book({name:'Practical Node Book'});
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