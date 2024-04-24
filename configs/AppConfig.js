import express from "express"
import path from "path"
import cookieParser from "cookie-parser"
import expressLayouts from "express-ejs-layouts"

const AppConfig = (app, __dirname) => {
    app.set("views", path.join(__dirname, "/views"))
    app.set("view engine", "ejs")
    app.use(cookieParser())
    app.use(express.urlencoded({extended: false}))
    app.use(express.static(path.join(__dirname, "/public")))
    app.use(expressLayouts);
    app.set('layout', 'layout/main');
}

export default AppConfig