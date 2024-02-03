import prismaClient from "../prisma"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
interface AuthRequest {

    email: string,
    password: string
}

class AuthUserService {

    async execute({ email, password }: AuthRequest) {

        // verificar email 
        const user = await prismaClient.user.findFirst({
            where: { email: email }
        })
        if (!user) {
            throw new Error("email/password  errado !")
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
                subject: user.email ,
                expiresIn: '30d'
            }
        )

        return { 
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }

}

export { AuthUserService }