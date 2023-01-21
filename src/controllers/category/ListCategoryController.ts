import { Request, Response } from "express";
import {ListCategoryService} from '../../services/category/ListCategoriesService';





class ListCategoryController{
    async handle(req: Request, res: Response){

        const { name } = req.body;

        const listCategories = new ListCategoryService();

        const categories = await listCategories.execute();

        return res.json(categories);
    }
}



export {ListCategoryController};