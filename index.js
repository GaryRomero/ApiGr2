
//Modulos
require('dotenv').config();
const express = require ('express');
const app =  express();
const PORT = process.env.PORT;
const routes = require('./routes');


//Conexion con BBDD
require('./config/db')

//Rutas
app.use('/',routes);


app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})