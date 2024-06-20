import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
const prisma = new PrismaClient()

const check = async (_email, _username) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                username: _username
            }
        })
        const user2 = await prisma.userinfo.findUnique({
            where: {
                email: _email
            }
        })
        if(user || user2) return false
        return true
    }
    catch (err) {
        res.send(err)
    }
}

const register = async (_name, _email, _username, _password) => {
    try {
        const rowCount = await prisma.user.count()
        await prisma.user.create({
            data: {
                id: rowCount + 1,
                username: _username,
                password: await bcrypt.hash(_password, 10),
            }
        })
        await prisma.userinfo.create({
            data: {
                id: rowCount + 1,
                userid: rowCount + 1,
                email: _email, 
                name: _name,
                img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fghim-trn-ly-nh-nh-cre--984881012238091336%2F&psig=AOvVaw01GAznNJzcziJ_9argawLH&ust=1718989683176000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiSxN3V6oYDFQAAAAAdAAAAABAo",
                facebook: "",
                school: "",
                sex: false,
                age: 20,
            }
        })
    }
    catch (err) {
        console.log(err)
    }
}

export default { check, register }