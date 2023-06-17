import errorHandler from "../middleware/error-handler.js";
import express from "express"
import { newOrder, getAllOrders, getAllOrdersByCustomerId } from "../controllers/order-controller.js"




const orderRouter = express.Router();


orderRouter.route('/')
    .get(getAllOrders, errorHandler)

orderRouter.route('/customer-id=:id')
    .get(getAllOrdersByCustomerId, errorHandler)


orderRouter.route('/new')
    .post(newOrder, errorHandler)


export default orderRouter;