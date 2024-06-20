import loginService from "../services/loginService.js"
import jwt from "jsonwebtoken"

// [GET] /login
const getPageLogin = async (req, res, next) => {
    return res.render('pages-login', { layout: false })
}

// [POST] /login
const login = async (req, res, next) => {
    const data = req.body
    try {
        const usr = await loginService.login(data.username, data.password)
        if(!usr) {
            return res.render('pages-login', { error: 'Username or Password is Incorrect!', layout: false })
        }
        else {
            const token = jwt.sign(
                { id: usr.id, username: usr.username },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );
            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: 10000 * 1000
            });
            return res.redirect('/')
        }
    }
    catch (err) {
        console.log(err)
    }
}

export default { getPageLogin, login }