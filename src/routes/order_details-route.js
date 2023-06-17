
import errorHandler from "../middleware/error-handler.js";
import { getAllOrderDetails, getAllOrderDetailsByOrderId } from "../controllers/order_details-controller.js";
import express from "express";



const orderDetailsRouter = express.Router();

orderDetailsRouter.route('/')
    .get(getAllOrderDetails, errorHandler)

orderDetailsRouter.route('/orderId=:id')
    .get(getAllOrderDetailsByOrderId, errorHandler)


export default orderDetailsRouter;