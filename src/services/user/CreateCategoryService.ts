import prismaClient from '../../prisma';
import PrismaClient from '../../prisma';
import { hash } from 'bcryptjs';


interface CategoryRequest{
    name: string;
}


class CreateCategoryService{
    
    async execute({name}: CategoryRequest){
        if(!name){
            throw new Error("Email incorret")
        }

        const userAlreadyExistsExists = await PrismaClient.user.findFirst({
            where:{
                name:name
            }
        })

        if(userAlreadyExistsExists){
            throw new Error("Category already exists!");
        }
        const user = await prismaClient.category.create({
            data:{
                name: name
            },
            select:{
                id: true,
                name: true,
            }
        })

        return {user}
    }
}


export { CreateCategoryService };