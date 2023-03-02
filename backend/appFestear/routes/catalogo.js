const router = require('express').Router();

const Catalogo = require('../models/catalogo.model');

router.get('/', async (req, res) => {
    
    const videojuegos = await Catalogo.getAll();
    res.json(videojuegos);

});




module.exports = router;