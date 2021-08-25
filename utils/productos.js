const request = require('postman-request');


const AllTheCoffes = (callback)=>{
    request('http://localhost:3001/TodosLosProductos',(error,res,body)=>{  // localhost:3001/ pongo el que esta en el index.js
        if(error){                      // local host3001 llamo a mi index.js y el / TraerTodosLosProductos del app.
            console.log('Error',error)
            return callback(error,undefined)
        }   
        if(res){
            if(body){
                return callback(undefined,body)
            }
            callback("No se encontraron productos",undefined)
        }
    })
}


module.exports = {AllTheCoffes} // xque entre {} ?

// en el request 


// productos.js es parte de APP.js  - 