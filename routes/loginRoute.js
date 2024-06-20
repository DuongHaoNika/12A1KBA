import express from "express"
import loginController from "../controller/loginController.js"
const loginRoute = express.Router()

loginRoute.post('/', loginController.login)
loginRoute.get('/', loginController.getPageLogin)

export default loginRoute