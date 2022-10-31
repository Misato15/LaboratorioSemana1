const {Router} = require ('express')
//Uso {Router} para destructurar un objeto y solo obtener lo que ocupo de él

const {
    GetPaquetes,
    PostPaquetes,
    PutPaquetes,
    DeletePaquetes

} = require('../controllers/detallesEnvios');


const router = Router();


router.allget('/', GetPaquetes)
router.allpost('/', PostPaquetes)
router.allput('/', PutPaquetes)
router.alldelete('/', DeletePaquetes)

module.exports = router