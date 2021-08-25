require('./db/mongoose')
const express = require ('express')
const app = express();
const Product = require ('./model/product-model')

app.use(express.json()); // los JSON que nos llegan lo parcea a objetos manipulables

// El post es cuando el cliente agrega productos por eso le pasamos el modelo y el .save para que lo guarde. 
// Lo que el cliente envie se pasa a travez del new Product y se guarda en el req.body. 

app.post('/AgregarProductos',(req,res)=>{
    const producto = new Product(req.body) // req lo que envia y todo lo que envia es en un body
    producto.save()
    .then(()=> res
    .status(201)
    .send(producto))

    .catch((error)=>res
    .status(400)
    .send(error));

});

app.get('/TodosLosProductos',(req,res)=>{
    Product.find().then((AllProducts)=> res.send(AllProducts).status(200))
                  .catch((error) => res.send(error).status(404))
});

app.get('/TraerUnProducto/:id',(req,res)=>{
    const _id = req.params.id;
    Product.findById(_id).then((producto)=> {if(!producto){
        return res.status(404).send("No se encontro el producto")
    } res.send(producto);
})
 .catch((error)=> res.send(error).status(404))
})

app.patch('/ActualizarProducto/:id',(req,res)=>{
    const _id = req.params.id;
    Product.findByIdAndUpdate(_id,req.body,{new:true, runValidators:true})
        .then((updateProduct)=>{res.send(updateProduct)})
})


app.listen(3001, ()=>{
    console.log("Puerto 3001 funcionando")
})



// este puerto del lado de la API escucha la base de datos // 

// index.js esta antento a lo que hace el app.js // 