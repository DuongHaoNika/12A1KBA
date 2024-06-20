import loginRoute from "./loginRoute.js"
import indexRoute from "./indexRoute.js"
import page404 from "../middlewares/404.js"
import registerRoute from "./registerRoute.js"
import profileRoute from "./profileRoute.js"
import contactRoute from "./contactRoute.js"
import authen from "../middlewares/authentication.js"

const UseRoute = (app) => {
    app.use(authen)
    app.use('/', indexRoute)
    app.use('/login', loginRoute)
    app.use('/register', registerRoute)
    app.use('/profile', profileRoute)
    app.use('/pages-contact', contactRoute)
    app.use(page404)
}

export default UseRoute