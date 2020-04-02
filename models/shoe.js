const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema


const shoeSchema = new mongoose.Schema({
    brand: {
            type: String,
            required: true
    },
    name: {
        type: String,
        required: true
    },
    productcode: {
        type: String,
        default: function() {
            return Math.floor(100000 + Math.random() * 900000)
        }
    },
    category: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        default: 1 
    },
    stage:{
        type: Number,
        default: 1
    },
    imgurl: {
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model("Shoe", shoeSchema);