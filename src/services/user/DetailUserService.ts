import prismaClient from "../../prisma";

class DetailUserService{
    async execute(id){
        const user = await prismaClient.user.findFirst({
            where:{
                id:id
            },
            select:{
                id: true,
                name: true,
                email: true,
            }
        })
        return user;
    }
}

export { DetailUserService };