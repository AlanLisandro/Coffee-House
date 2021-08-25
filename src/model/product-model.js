const mongoose = require('mongoose');

const Product = mongoose.model('Producto',{
    especie:{
        type:String,
        required:true
        },
    origen:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true,
     },
    img:{
        type: String,
        required: true
    }                    
})

module.exports = Product;