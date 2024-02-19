import prismaClient from "../prisma"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface AuthRequest {

    email: string,
    password: string
}

class AuthUserService {

    async login({ email, password }: AuthRequest) {

        if (!email || !password) {
            throw new Error("Campos Obrigatório !")
        }

        // verificar email 
        const user = await prismaClient.user.findFirst({
            where: { email: email }
        })
        if (!user) {
            throw new Error("utilizador invalido!")
        }

        //  Verificar password
        const passwordMatch = await compare(password, user.password)
        if (!passwordMatch) {
            throw new Error("email/password  errado !")
        }

        //  JWT | AUTENTICAÇÃO
        const token =  await sign({
            name: user.name,
            email: user.email
        }, 
        process.env.JWT_SECRET as any,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return { 
            id: user.id,
            name: user.name,
            token: token
        }
    }
}

export { AuthUserService }