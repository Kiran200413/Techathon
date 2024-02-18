const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    usermail:String,
    mobile:Number,
    pass:String,
    
    stream:String,
    course:String,
    gender:String,
    score:Number,
    notes:String
    
})

module.exports = mongoose.model('edutechUser', productSchema);