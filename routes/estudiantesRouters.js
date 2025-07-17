const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesControllers')

router.post('/', estudiantesController.insertar)
router.use('/',(req,res)=>{res.send('ejecutando middleware')})
router.route('/:id')
    .get(estudiantesController.consultar)
    .put(estudiantesController.actualizar)
    .delete(estudiantesController.borrar)

    


module.exports = router;

