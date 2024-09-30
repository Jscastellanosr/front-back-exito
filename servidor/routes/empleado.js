//rutas para empleado

const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController')


//api/usuarios
router.post('/', empleadoController.crearEmpleado);
router.get('/', empleadoController.obtenerEmpleados);
router.put('/:id', empleadoController.actualizarEmpleado);
router.get('/:id', empleadoController.obtenerEmpleado);
router.delete('/:id', empleadoController.eliminarEmpleado);

router.get('/buscar/:correo', empleadoController.buscarPorCorreo)

module.exports = router;