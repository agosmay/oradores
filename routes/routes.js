const express = require('express');
const router = express.Router();

const {inicioGET, agregarPOST, oradoresGET, comprarGET, editarPOST, borrarGET, editarGET} = require('../controllers/controllers')

//rutas GET

router.get('/', inicioGET)
router.get('/oradores', oradoresGET)
router.get('/comprar', comprarGET)
router.get('/editar-orador/:id', editarGET)
router.get('/borrar-orador/:id', borrarGET)


//rutas POST


router.post('/agregar-orador', agregarPOST)
router.post('/editar-orador/:id', editarPOST)



module.exports  = router