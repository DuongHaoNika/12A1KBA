import express from 'express'
import 'dotenv/config'
import AppConfig from './configs/AppConfig.js'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = process.env.PORT || 3000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

AppConfig(app, __dirname)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})