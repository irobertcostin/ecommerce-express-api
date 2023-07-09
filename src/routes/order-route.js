import errorHandler from "../middleware/error-handler.js";
import express from "express"
import { newOrder, getAllOrders, getAllOrdersByCustomerId, getOrderById } from "../controllers/order-controller.js"




const orderRouter = express.Router();


orderRouter.route('/')
    .get(getAllOrders, errorHandler)

orderRouter.route('/customer-id=:id')
    .get(getAllOrdersByCustomerId, errorHandler)


orderRouter.route('/new')
    .post(newOrder, errorHandler)

orderRouter.route('/order-id=:id')
    .get(getOrderById, errorHandler)


export default orderRouter;