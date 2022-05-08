//modulos

const router = require ('express').Router();
const filmsRoutes = require('./filmsRoutes');

router.use('/films',filmsRoutes);

//Exportar Router

module.exports = router;