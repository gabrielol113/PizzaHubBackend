import PrismaClient from '../../prisma';


interface CategoryRequest{
    name: string;
}


class CreateCategoryService{
    
    async execute({name}: CategoryRequest){
        
            if(name === ''){
                throw new Error("Name invalid!");
            }
            const categoryAlreadyExistsExists = await PrismaClient.category.findFirst({
                where:{
                    name:name
                }
            })
    
            if(categoryAlreadyExistsExists){
                throw new Error("Category already exists!");
            }
            const category = await PrismaClient.category.create({
                data:{
                    name: name
                },
                select:{
                    id: true,
                    name: true,
                }            
            })
            return  category;
        
    }
}


export { CreateCategoryService };