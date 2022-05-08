//modulos

const { Router } = require('express');

const router = require ('express').Router();
const Film = require('../models/filmsModel');

//Rutas
// Ruta que trae todas las pelis
router.get('/', async(req,res)=>{
    const films = await Film.find();
    res.status(200).json({
        succes: true,
        results: films.length,
        data: { films }
    })
})

// Ruta que trae todas las pelis por id

router.get('/:id',async(req,res)=>{
    const film = await Film.findById(req.params.id);
    res.status(200).json({
        succes: true,
        data:{film}
    })
})

// Ruta que AÑADIR UNA NUEVA RUTA

router.post('/', async(req,res)=>{
    const newFilm = await Film.create(req.body);
    res.status(201).json({
        succes: true,
        data: { films:newFilm}
    })
})

//RUTA PARA BORRAR PELI

router.delete('/:id',async(req,res)=>{
    await Film.findByIdAndDelete(req.params.id)
    res.status(204).json({
        succes: true,
        data: null
    })
})


//Ruta para axtualizar

router.put('/:id', async(req,res)=>{
    const updateFilm = await Film.findByIdAndUpdate(req.params.id, req.body,{
        new : true,
    })
    res.status(200).json({
        succes: true,
        data: { films: updateFilm}
    })
})
//Exportar Router

module.exports = router;