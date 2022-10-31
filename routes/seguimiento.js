const {Router} = require ('express');
//Uso {Router} para destructurar un objeto y solo obtener lo que ocupo de él

const {
    GetSeguimiento,
    PostSeguimiento,
    PutSeguimiento,
    DeleteSeguimiento

} = require('../controllers/seguimiento');


const router = Router();

router.get('/', GetSeguimiento)
router.post('/', PostSeguimiento)
router.put('/id:', PutSeguimiento)
router.delete('/id', DeleteSeguimiento)


module.exports = router