import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService";
import { Extensions } from "@prisma/client/runtime";



class RemoveOrderController{
    async handle(req: Request, res: Response){
        const order_id  = req.query.order_id as string;
        const removeOrderService = new RemoveOrderService();

        const deleteOrder = await removeOrderService.execute({
            order_id
        })

        return res.json(deleteOrder);
    }
}

export { RemoveOrderController };