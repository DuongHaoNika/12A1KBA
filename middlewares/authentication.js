import jwt from "jsonwebtoken"

const authen = async (req, res, next) => {
    if(req.path === '/login' || req.path === '/register') next()
    else {
        const secretKey = process.env.JWT_SECRET
        try {
            const ck = req.headers.cookie
            const indexOfJWT = ck.indexOf("jwt")
            if(indexOfJWT === -1) return res.redirect("/login")
            let jwtToken = ck.substr(indexOfJWT + 3)
            const idx = jwtToken.indexOf(";")
            if(idx === -1){
                jwtToken = jwtToken.split("=")[1]
            }
            else{
                jwtToken = jwtToken.substr(1, idx - 1)
            }
            await jwt.verify(jwtToken, secretKey)
            next()
        }
        catch (err) {
            return res.redirect('/login')
        }
    }
}

export default authen