import express from "express"
import registerController from "../controller/registerController.js"
const app = express.Router()

app.get('/', registerController.getPage)
app.post('/', registerController.register)

export default app