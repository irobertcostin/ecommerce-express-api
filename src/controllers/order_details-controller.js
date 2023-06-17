import db from "../config/db.js";
import expressAsyncHandler from "express-async-handler";
import { getDetailsById } from "../service/order-details-service.js";


let getAllOrderDetails = expressAsyncHandler((async (req, res) => {


    let order_details = await db.models.order_details.findAll();



    res.status(200).json(order_details)



}))


let getAllOrderDetailsByOrderId = expressAsyncHandler((async (req, res) => {

    let id = req.params;

    let x = await getDetailsById(id)

    console.log(x);


    res.status(200).json("ok")

}))






export { getAllOrderDetails, getAllOrderDetailsByOrderId }