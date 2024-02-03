import prismaClient from "../prisma"


class DetailUserService{

    async execute(){

        return {ok: "details"}
    }

}

export {DetailUserService}