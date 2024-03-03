// import { user } from "react"
import { User } from "@prisma/client";
import prismaClient from "../prisma"


class DetailUserService {

    async execute( id: string ) {

        if (id) {
            const user = await prismaClient.user.findUnique({
                where: {
                    id:id
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    password: true
                }
            })

            return user;
        }

        console.log("id : "  , id)

        throw new Error("id nulo")
    }

    //  user info v2 

    async executeInfo( id: string ) {

        if (id) {
            const user = await prismaClient.user.findUnique({
                where: {
                    id:id
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    password: true
                }
            })

            return user;
        }

        console.log("id_req : "  , id)

        // throw new Error("id nulo")
    }



}

export { DetailUserService }