class ProfesoresController {
    constructor() { }

    consultar(req, res) {
        {
            res.json({
                msg: "consulta profesor"
            })
        }
    }
    insertar(req, res) {
        res.json({
            msg: "creando profesor"
        })
    }
    actualizar(req, res) {
        res.json({
            msg: "actualizacion de profesor"
        })
    }
    borrar(req, res) {
        res.json({
            msg: "Eliminacion de profesor"
        })
    }
    consultarDetalle(req, res) { }
}

module.exports = new ProfesoresController