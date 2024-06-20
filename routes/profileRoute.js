import express from "express";
import profileController from "../controller/profileController.js"

const app = express.Router()

app.get('/', profileController.getProfile)

export default app