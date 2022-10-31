const {Router} = require ('express')
//Uso {Router} para destructurar un objeto y solo obtener lo que ocupo de él

const {
    GetSeguimiento,
    PostSeguimiento,
    PutSeguimiento,
    DeleteSeguimiento

} = require('../controllers/detallesEnvios');


const router = Router();

router.get('/', GetSeguimiento)
router.post('/', PostSeguimiento)
router.put('/', PutSeguimiento)
router.delete('/', DeleteSeguimiento)


module.exports = router