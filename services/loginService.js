import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
const prisma = new PrismaClient()

const login = async (_username, _password) => {
    try {
        const usr = await prisma.user.findUnique({
            where: {
                username: _username
            }
        })
        if(!usr) return false
        const cmp = await bcrypt.compare(_password, usr.password)
        if(!cmp) return false
        return usr
    }
    catch (err) {
        
    }
}

export default { login }