//Modulos
const mongoose = require('mongoose');
require('dotenv').config();

//conexion con la db
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
})
.then(()=> console.log('DB conection succesfull!'))
.catch((error)=> {
    console.error(error.message);
    process.exit(0);
})