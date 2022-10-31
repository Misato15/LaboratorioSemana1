const {Router} = require ('express')
//Uso {Router} para destructurar un objeto y solo obtener lo que ocupo de él
const {
    GetDetallesEnvios,
    PostDetallesEnvios,
    PutDetallesEnvios,
    DeleteDetallesEnvios

} = require('../controllers/detalleEnvios');


const router = Router();

router.get('/', GetDetallesEnvios)
router.post('/', PostDetallesEnvios)
router.put('/:id', PutDetallesEnvios)
router.delete('/:id', DeleteDetallesEnvios)

module.exports = router