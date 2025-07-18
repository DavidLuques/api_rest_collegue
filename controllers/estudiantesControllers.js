class EstudiantesController {
    constructor() {}

    consultar(req, res) {
        {
            res.json({
                msg: "consulta estudiante"
            })
        }
    }

    insertar(req, res) {
        res.json({
            msg: "creando estudiante"
        })
    }
    actualizar(req, res) {
        res.json({
            msg: "actualizacion de estudiante"
        })
    }
    borrar(req, res) {
        res.json({
            msg: "Eliminacion de estudiante"
        })
    }
    consultarDetalle(req, res) {
        const id= req.params.id;
        res.json({
            msg:`Consulta detalle estudiande desde clase con id ${id}`
        })
    }

}

module.exports = new EstudiantesController();
module.exports = new EstudiantesController();