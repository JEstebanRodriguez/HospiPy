import { useState } from 'react';
import axios from 'axios';

const RegistroPaciente = () => {
  const [datosPaciente, setDatosPaciente] = useState({
    nombre: '',
    fechaNacimiento: '',
    genero: '',
    direccion: '',
    telefono: '',
    email: '',
    antecedentesPersonales: '',
    antecedentesFamiliares: '',
    notas: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatosPaciente((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/pacientes', datosPaciente);
      alert(response.data.mensaje);
    } catch (error) {
      console.log(error);
      alert('Error al registrar al paciente');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        Nombre:
        <input type="text" name="nombre" value={datosPaciente.nombre} onChange={handleChange} required />
      </label>
      <label>
        Fecha de nacimiento:
        <input type="date" name="fechaNacimiento" value={datosPaciente.fechaNacimiento} onChange={handleChange} required />
      </label>
      <label>
        Género:
        <select name="genero" value={datosPaciente.genero} onChange={handleChange} required>
          <option value="">Seleccione una opción</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>
      </label>
      <label>
        Dirección:
        <input type="text" name="direccion" value={datosPaciente.direccion} onChange={handleChange} required />
      </label>
      <label>
        Teléfono:
        <input type="tel" name="telefono" value={datosPaciente.telefono} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={datosPaciente.email} onChange={handleChange} />
      </label>
      <label>
        Antecedentes personales:
        <textarea name="antecedentesPersonales" value={datosPaciente.antecedentesPersonales} onChange={handleChange} />
      </label>
      <label>
        Antecedentes familiares:
        <textarea name="antecedentesFamiliares" value={datosPaciente.antecedentesFamiliares} onChange={handleChange} />
      </label>
      <label>
        Notas:
        <textarea name="notas" value={datosPaciente.notas} onChange={handleChange} />
      </label>
      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegistroPaciente;
