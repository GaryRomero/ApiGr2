//Modulos
const mongoose = require('mongoose');
const{Schema} = require('mongoose');

//Films Schema
const filmsSchema=new Schema({
    title:{
        type: String,
        require: true,
        trim: true,
    },
    duration:{
        type: String,
        require: true,
        trim: true,
    },
    director:{
        type: String,
        require: true,
        trim: true,
    },
    sinopsis:{
        type: String,
        require: true,
        trim: true,
    },
});

//Films Model
const Film = mongoose.model('film', filmsSchema);

//Exportar modelo
module.exports = Film