//rutas para solicitudes

const express = require('express');
const router = express.Router();
const solicitudesController = require('../controllers/solicitudesController')


//api/solicitudes
router.post('/', solicitudesController.crearSolicitud);
router.get('/', solicitudesController.obtenerSolicitudes);
router.put('/:id', solicitudesController.actualizarSolicitud);
router.get('/:id', solicitudesController.obtenerSolicitud);
router.delete('/:id', solicitudesController.eliminarSolicitud);

router.get('/buscar/idcliente/:clienteId', solicitudesController.buscarPorclienteId)
router.get('/buscar/idconductor/:conductorId', solicitudesController.buscarPorconductorId)

module.exports = router;