import db from "../config/db.js";
import { orderCheck } from "../service/order-service.js";
import expressAsyncHandler from "express-async-handler";
// asyncHandler - pentru a nu mai pune try catch pe await 



let getAllOrders = expressAsyncHandler((async (req, res) => {
    let orders = await db.models.order.findAll();
    res.status(200).json(orders)
})
)

let newOrder = expressAsyncHandler((async (req, res) => {



    // console.log("ceva");
    let body = req.body
    // console.log(body);

    await orderCheck(body);

    // let newOrder = {
    //     customer_id: body.customer_id,
    //     amount: amountTotal
    // }

    // console.log(newOrder);

    // await db.models.order.create(newOrder);


    // res.status(201).send({ newOrder })
})
)


let deleteOrder = expressAsyncHandler((async (req, res) => {

    let id = req.params

    let order = await db.models.order.findByPk(id);

    if (order) {
        await order.destroy();
        res.status(202).json('Successfully deleted')
    } else {
        res.status(404).json(`No object with id ${id} found`)
    } ß

})
)



let editOrder = expressAsyncHandler((async (req, res) => {

    let id = req.params
    let order = await db.models.order.findByPk(id);



    if (order) {
        let editedOrder = req.body;
        order.set(editedOrder)
        res.status(202).end("Successfully edited")
    } else {
        res.status(404).json(`No object with id ${id} found`)
    }

})
)



export { newOrder, getAllOrders }
//{idClient idProdus cantiate}

