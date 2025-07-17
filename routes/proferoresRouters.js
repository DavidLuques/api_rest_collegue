const express = require('express');
const router = express.Router();
const profesoresRouters=require('../controllers/profesoresRouters')

router.post('/', profesoresRouters.insertar)

router.route('/:id')
    .get(profesoresRouters.consultar)
    .put(profesoresRouters.actualizar)
    .delete(profesoresRouters.borrar)

    
module.exports = router;

