const {Router} = require ('express');
//Uso {Router} para destructurar un objeto y solo obtener lo que ocupo de él

const {
    GetPaquetes,
    PostPaquetes,
    PutPaquetes,
    DeletePaquetes

} = require('../controllers/paquetes');


const router = Router();


router.get('/', GetPaquetes)
router.post('/', PostPaquetes)
router.put('/id:', PutPaquetes)
router.delete('/id:', DeletePaquetes)

module.exports = router