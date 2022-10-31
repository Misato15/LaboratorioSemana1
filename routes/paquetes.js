const {Router} = require ('express')
//Uso {Router} para destructurar un objeto y solo obtener lo que ocupo de él

const {
    GetPaquetes,
    PostPaquetes,
    PutPaquetes,
    DeletePaquetes

} = require('../controllers/paquetes');


const router = Router();


router.allget('/', GetPaquetes)
router.allpost('/', PostPaquetes)
router.allput('/id:', PutPaquetes)
router.alldelete('/id:', DeletePaquetes)

module.exports = router