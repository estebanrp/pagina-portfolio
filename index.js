import express from 'express'
import { PORT } from './config.js'
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('hola mundo')
})

app.post('/login', (req, res) => {})
app.post('/register', (req, res) => {})
app.post('/logout', (req, res) => {})
app.post('/protected', (req, res) => {})

app.listen(PORT, () => {
  console.log(`server running in the port: http://localhost:${PORT}`)
})