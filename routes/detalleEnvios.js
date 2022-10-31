const {Router} = require ('express')
//Uso {Router} para destructurar un objeto y solo obtener lo que ocupo de él
const {
    GetDetalleEnvios,
    PostDetalleEnvios,
    PutDetalleEnvios,
    DeleteDetalleEnvios

} = require('../controllers/detalleEnvios');


const router = Router();

router.get('/', GetDetalleEnvios)
router.post('/', PostDetalleEnvios)
router.put('/:id', PutDetalleEnvios)
router.delete('/:id', DeleteDetalleEnvios)

module.exports = router