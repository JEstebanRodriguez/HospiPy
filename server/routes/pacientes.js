const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/paciente');

router.get('/', pacienteController.obtenerPacientes);
router.post('/', pacienteController.crearPaciente);
router.get('/:id', pacienteController.obtenerPaciente);
router.put('/:id', pacienteController.actualizarPaciente);
router.delete('/:id', pacienteController.eliminarPaciente);

module.exports = router;
