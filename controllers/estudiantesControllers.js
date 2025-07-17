class EstudiantesController {
    constructor() { }

    consultar(req, res) {
        {
            res.json({
                msg: "consulta estudiante"
            })
        }}

        insertar(req, res){
            res.json({
                msg: "creando estudiante"
            })
        }
        actualizar(req, res){  res.json({
            msg: "actualizacion de estudiante"
        })}
        borrar(req, res){ res.json({
            msg: "Eliminacion de estudiante"
        }) }
        consultarDetalle(req, res){ }
    }

module.exports = new EstudiantesController();