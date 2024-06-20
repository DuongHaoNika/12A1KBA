
import registerService from "../services/registerService.js"

// [GET] /register
const getPage = async (req, res) => {
    return res.render('pages-register', { layout: false })
}

// [POST] /register
const register = async (req, res) => {
    try {
        const { name, email, username, password } = req.body
        const checkUser = await registerService.check(email, username)
        if(!checkUser) throw new Error("Email or Username has already exist!")
        await registerService.register(name, email, username, password)
        return res.redirect('/login')
    }
    catch(err) {
        return res.send(err)
    }
}   

export default { getPage, register }