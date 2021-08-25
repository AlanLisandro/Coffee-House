const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Coffee-db',{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});


// Aca solamente hacemos la conexion de mongoose y requerimos mongoose tambien desde el index.js. 
//Tenemos que requerir desde el index el modulo con el modelo y el modulo mongoose para que se puedan usar 

