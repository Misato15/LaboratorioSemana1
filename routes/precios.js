const {Router} = require ('express');
//Uso {Router} para destructurar un objeto y solo obtener lo que ocupo de él

const {
    GetPrecios,
    PostPrecios,
    PutPrecios,
    DeletePrecios

} = require('../controllers/precios');


const router = Router();

router.get('/', GetPrecios)
router.post('/', PostPrecios)
router.put('/id:', PutPrecios)
router.delete('/id:', DeletePrecios)

module.exports = router