import errorHandler from "../middleware/error-handler.js";
import express from "express"
import { newOrder, getAllOrders } from "../controllers/order-controller.js"
import expressAsyncHandler from "express-async-handler";



const orderRouter = express.Router();


orderRouter.route('/')
    .get(getAllOrders, errorHandler)


orderRouter.route('/new')
    .post(newOrder, errorHandler)

// orderRouter.route()

export default orderRouter;