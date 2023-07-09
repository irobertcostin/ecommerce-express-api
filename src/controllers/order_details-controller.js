import db from "../config/db.js";
import expressAsyncHandler from "express-async-handler";
import { getDetailsById, getProdPic } from "../service/order-details-service.js";


let getAllOrderDetails = expressAsyncHandler((async (req, res) => {


    let order_details = await db.models.order_details.findAll();



    res.status(200).json(order_details)



}))


let getAllOrderDetailsByOrderId = expressAsyncHandler((async (req, res) => {

    let ids = [];
    ids.push(+req.params.id)

    // arr cu order details 

    let x = await getDetailsById(ids);



    if (x.length > 0) {


        //     console.log(element);



        //     getProdPic(element.product_id)
        //         .then(element2 => {

        //             let newDetail = {
        //                 id: element.id,
        //                 price: element.price,
        //                 quantity: element.quantity,
        //                 product_id: element.product_id,
        //                 order_id: element.order_id,
        //                 product_image: element2
        //             }

        //             element = newDetail;


        //         })


        // });

        // console.log(x);

        res.status(200).json(x)
    } else {
        res.status(200).json({ info: "No order details found" })
    }
}))






export { getAllOrderDetails, getAllOrderDetailsByOrderId }