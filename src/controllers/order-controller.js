import db from "../config/db.js";
import { orderCheck, getOrdersByUser } from "../service/order-service.js";
import expressAsyncHandler from "express-async-handler";
// asyncHandler - pentru a nu mai pune try catch pe await 



let getAllOrders = expressAsyncHandler((async (req, res) => {
    let orders = await db.models.order.findAll();
    res.status(200).json(orders)
})
)



let getAllOrdersByCustomerId = expressAsyncHandler((async (req, res) => {
    let ids = [];
    ids.push(req.params.id)

    let orders = await getOrdersByUser(ids)

    if (orders.length > 0) {
        res.status(200).json(orders)
    } else {
        res.status(404).json("This user has no orders")
    }



})
)




let newOrder = expressAsyncHandler((async (req, res) => {

    let body = req.body
    await orderCheck(body);
    res.status(201).json("Accepted")
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
    }

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



export { newOrder, getAllOrders, getAllOrdersByCustomerId }


