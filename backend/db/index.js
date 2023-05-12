const mongoose = require('mongoose');






mongoose.connect('mongodb+srv://aswathycse21:l0Ox53xaL3nj4mo0@cluster0.yhklq7c.mongodb.net/test2')
    .then(() => console.log('mongo DB connected'))
    .catch(err => console.log(err))
