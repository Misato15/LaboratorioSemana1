const {Router} = require ('express')
//Uso {Router} para destructurar un objeto y solo obtener lo que ocupo de él
const {
    GetDetallesEnvios,
    PostDetallesEnvios,
    PutDetallesEnvios,
    DeleteDetallesEnvios

} = require('../controllers/detallesEnvios');


const router = Router();

router.get('/', GetDetallesEnvios)
router.post('/', PostDetallesEnvios)
router.put('/', PutDetallesEnvios)
router.delete('/', DeleteDetallesEnvios)

module.exports = router