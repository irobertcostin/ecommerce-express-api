import db from "../config/db.js";
import expressAsyncHandler from "express-async-handler";
import { getDetailsById } from "../service/order-details-service.js";


let getAllOrderDetails = expressAsyncHandler((async (req, res) => {


    let order_details = await db.models.order_details.findAll();



    res.status(200).json(order_details)



}))


let getAllOrderDetailsByOrderId = expressAsyncHandler((async (req, res) => {

    let ids = [];
    ids.push(+req.params.id)

    let x = await getDetailsById(ids)

    if (x.length > 0) {
        res.status(200).json(x)
    } else {
        res.status(200).json({ info: "No order details found" })
    }






}))






export { getAllOrderDetails, getAllOrderDetailsByOrderId }