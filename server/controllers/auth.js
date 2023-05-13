import { Paciente } from '../models/paciente.js';

//Login
export const login = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email })
  
      if (!user) {
        res.status(401).json({ error: 'Credenciales inválidas' })
        return
      }
  
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
      )
  
      if (!isPasswordValid) {
        res.status(401).json({ error: 'Credenciales inválidas' })
        return
      }
  
      jwt.sign({ id: user._id }, keyPhrase, { expiresIn: '1d' }, (err, token) => {
        res.json({ token, name: user.name, email: user.email, id: user._id })
      })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }