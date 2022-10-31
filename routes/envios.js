const {Router} = require ('express');
//Uso {Router} para destructurar un objeto y solo obtener lo que ocupo de él
const {
    GetEnvios,
    PostEnvios,
    PutEnvios,
    DeleteEnvios

} = require('../controllers/envios');



const router = Router();


router.get('/', GetEnvios)
router.post('/', PostEnvios)
router.put('/:id', PutEnvios)
router.delete('/:id', DeleteEnvios)

module.exports=router