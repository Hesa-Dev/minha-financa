
import prismaClient from "../prisma"
import { hash } from "bcryptjs"

interface UserReq {
    name: string,
    email: string,
    password: string,
    photo?: string 
}

interface IdUser {
    id: Number
}


class UserService {

    async add({ name, email, password }: UserReq) {

        // verificar se enviou email 
        if (!email) {
            throw new Error("email incorrect")
        }

        // verificar se email existe
        const emailCheck = await prismaClient.user.findFirst({
            where: { email: email }
        })
        if (emailCheck) {
            throw new Error("email existe")
        }

        // cadastrar user

        // criptografar password
        const passwordHash = await hash(password, 8)
        const newUser = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return newUser
    }

    /*async delete(id: IdUser){

        if (!id) {
            throw new Error("id vazio")
        }

        const deletUser = await prismaClient.user.delete({
            where:{
                id:id
            }
        })

    }*/

    //  cadastrar utilizador com photo
    async addprofile({ name, email, password, photo }: UserReq) {

        if (!email || !name || !password) {
            throw new Error("Campos Obrigatório")
        }

        // verificar se email existe
        const emailCheck = await prismaClient.user.findFirst({
            where: { email: email }
        })
        if (emailCheck) {
            throw new Error("Email existe !")
        }
        // cadastrar user | criptografar password
        const passwordHash = await hash(password, 8)
        const newUser = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
                photo: photo
            },
            select: {
                id: true,
                name: true,
                email: true,
                photo: true
            }
        })

        return newUser
    }

}

export { UserService }