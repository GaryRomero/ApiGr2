//modulos

const { Router } = require('express');

const router = require ('express').Router();

//Rutas
// Ruta que trae todas las pelis
router.get('/', (req,res)=>{
    res.status(200).json({
        succes: true,
        message: 'ALL FILMS',
    })
})

// Ruta que trae todas las pelis por id

router.get('/:id',(req,res)=>{
    res.status(201).json({
        succes: true,
        message: 'FILM BY ID',
    })
})

// Ruta que AÑADIR UNA NUEVA RUTA

router.post('/', (req,res)=>{
    res.status(200).json({
        succes: true,
        message: 'NEW FILM ADDED',
    })
})

//RUTA PARA BORRAR PELI

router.delete('/:id',(req,res)=>{
    res.status(204).json({
        succes: true,
        message: 'FILM DELETED',
    })
})

//Exportar Router

module.exports = router;