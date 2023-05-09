const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Configuración del middleware
app.use(cors());
app.use(express.json());

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/pacientes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Conexión exitosa a la base de datos MongoDB');
});

mongoose.connection.on('error', (error) => {
  console.log('Error al conectar a la base de datos MongoDB:', error);
});

// Rutas
const pacientesRouter = require('./routes/pacientes');
app.use('/pacientes', pacientesRouter);

// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
})