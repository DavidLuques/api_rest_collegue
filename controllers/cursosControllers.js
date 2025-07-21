const db = require('../database/config.js')


class CursosController {
    constructor() {}

    consultar(req, res) {
        {
            res.json({
                msg: "consulta cursos"
            })
        }
    }

    insertar(req, res) {
        res.json({
            msg: "creando curso"
        })
    }
    actualizar(req, res) {
        res.json({
            msg: "actualizacion de curso"
        })
    }
    borrar(req, res) {
        res.json({
            msg: "Eliminacion de cur"
        })
    }
    consultarDetalle(req, res) {
        const id= req.params.id;
        res.json({
            msg:`Consulta detalle de curso desde clase con id ${id}`
        })
    }

}

module.exports = new CursosController();
