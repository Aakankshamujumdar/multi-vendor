const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Multivendor').then(()=>{
  console.log('db connected');
})
