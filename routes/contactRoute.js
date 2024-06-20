import express from "express"
import contactController from "../controller/contactController.js"
const app = express.Router()

app.get('/', contactController.getContact)

export default app