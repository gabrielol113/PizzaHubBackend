import { Router } from 'express';
import multer from 'multer';
// User
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

// Category

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

// Product

import { CreateProductController } from './controllers/product/CreateProductController';
// Middlewares

import { isAuthenticated } from './middlewares/isAuthenticated';
import  uploadConfig  from './config/multer';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { DeleteItemController } from './controllers/order/DeleteItemController';




const router = Router();
const upload = multer(uploadConfig.upload("./tmp"))

// --- ROTAS USER -----

router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated , new DetailUserController().handle)


// --- ROTAS CATEGORY ------

router.post('/categories', isAuthenticated, new CreateCategoryController().handle)

router.get('/listCategories', isAuthenticated, new ListCategoryController().handle)

router.get('/category/product', isAuthenticated, new ListByCategoryController().handle);

// --- ROTAS PRODUCT ------

router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)

// --- ROTAS ORDER ------

router.post('/order', isAuthenticated, new CreateOrderController().handle);

router.delete('/order', isAuthenticated, new RemoveOrderController().handle);

router.post('/order/add', isAuthenticated, new AddItemController().handle);

router.delete('/order/remove', isAuthenticated, new DeleteItemController().handle);

export  { router };