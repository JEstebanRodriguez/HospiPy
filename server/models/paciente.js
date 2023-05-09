const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  genero: { type: String, enum: ['Masculino', 'Femenino', 'Otro'], required: true },
  direccion: { type: String, required: true },
  telefono: { type: String },
  email: { type: String },
  antecedentesPersonales: { type: String },
  antecedentesFamiliares: { type: String },
  notas: { type: String },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
});

const Paciente = mongoose.model('Paciente', pacienteSchema);

module.exports = Paciente;
