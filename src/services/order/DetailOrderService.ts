import prismaClient from "../../prisma";
import { SendOrderService } from "./SendOrderService";


interface DetailRequest{
    order_id:string;
}




class DetailOrderService{
    async execute({ order_id }: DetailRequest){
        const order = prismaClient.item.findMany({
            where:{
                order_id: order_id,
            },
            include:{
                product:true,
                order:true
            }
        })
        return order;
    }
}



export { DetailOrderService };