import express from "express";
import indexController from "../controller/indexController.js";
const app = express.Router()

app.get('/', indexController.index)

export default app