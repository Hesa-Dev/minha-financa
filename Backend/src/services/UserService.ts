
import { Prisma } from "@prisma/client"
import prismaClient from "../prisma"
import { hash } from "bcryptjs"
import { promises } from "dns"

interface UserReq {
    name: string,
    email: string,
    password: string,
    photo?: string
    id?: string
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

        const response = { sucess: "add" }

        return response
        // return newUser; 
    }


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

        const response = "add"
        return response;
        // return newUser
    }

    // buscar todos usuarios 
    async getAll() {

        const users = await prismaClient.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
            }
        })

        if (users) {
            return users;
        }

        throw new Error("tabela vazia")

    }

    async delete(id: string) {

        if (id) {

            //  verificar se o utilizador existe 
            const userCheck = await prismaClient.user.findFirst({
                where: { id: id }
            })

            if (userCheck) {

                const mov = await prismaClient.movimento.findMany({
                    where: {
                        userID: id
                    }
                })

                const deletMovimento = await prismaClient.movimento.deleteMany({
                    where: {
                        userID: id,
                    },
                })

                const deletUser = await prismaClient.user.delete({
                    where: {
                        id: id
                    },
                })

                // const transaction = await prismaClient.$transaction<any> ([{deletMovimento}, {deletUser}])


                const respo = {
                    sucess: "deletado"
                }

                return respo

                // return deletUser
            }
            return "n/existe"
        }

    }

    async update({ id, name, email, password }: UserReq) {

        if (name && email && password && id) {

            const user = await prismaClient.user.findUnique({
                where: {
                    id: id,
                }
            });

            if (!user) {
                throw new Error(`User with ID ${user} not found`);
            }

            const passwordHash = await hash(password, 8)
            const updatedUser = await prismaClient.user.update({
                where: {
                  id: id,
                },
                data: {
                    name:name,
                    email:email,
                    password:passwordHash
                },
                select:{
                    id: true,
                    name:true,
                    email:true
                }
               
              });

              return updatedUser
        }
        throw new Error("Campos Vazios ...");
    }
}

export { UserService }