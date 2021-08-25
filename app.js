const express = require ("express"); // en el app.js va todo el servidor y el envio de datos al cliente 
const app = express();
const path = require ('path');
const productos = require("./utils/productos")
const title = "Coffee House"



app.set('views',path.join(__dirname, "views"));
app.set ('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));


// app.get('/', (req,res)=>{

//     res.render('index',{
//         title: 'Coffee-House',

//     })
// })

app.get('/', (req, res)=>{
    productos.AllTheCoffes((error, data)=>{
        if(error){
            return res.send({
                error
            })
        }
        const JSONBody = JSON.parse(data);
        return res.render('index', {  // renderizame la pagina index y te paso estas 2 variables con info 
            title,                      // title y JSONbody que es una array de objetos
            JSONBody
        });
    })
})

app.get('/contactanos', (req,res)=>{
    res.render('pages/contactanos')
})

app.get('/nuestrosCafes', (req,res)=>{
    res.render('pages/nuestrosCafes')
})

app.get('/nuestrosLocales', (req,res)=>{
    res.render('pages/nuestrosLocales')
})


app.listen(3000, ()=>{
    console.log("Puerto 3000 funcionando")
})


// Desde aca interactuamos con la base de datos segun lo que pida el cliente 
// Esta atento a lo que hace el cliente 