import prismaClient from "../../prisma";

class DetailUserService{
    async execute(id){
        return { ok: true}
    }
}

export { DetailUserService };