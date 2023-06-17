import db from "../config/db.js";
import expressAsyncHandler from "express-async-handler";
import { Sequelize } from "sequelize";






// async function getProductsWithIds(ids) {


//     try {

//         const products = await db.models.product.findAll({

//             where: {
//                 id: {
//                     // id operator is in ids
//                     [Sequelize.Op.in]: ids,
//                 }
//             },

//         });

//         return products;

//     } catch (error) {
//         console.error(error);
//     }


// }



async function getOrdersByUser(ids) {


    try {

        const orders = await db.models.order.findAll({

            where: {
                customer_id: {
                    // id operator is in ids
                    [Sequelize.Op.in]: ids,
                }
            },

        });

        return orders;

    } catch (error) {
        console.error(error);
    }


}






async function orderCheck(orderDto) {




    const { customer_id } = orderDto;

    const { customer_cart } = orderDto;


    const user = await db.models.customer.findByPk(customer_id);




    let amountTotal = 0;

    customer_cart.forEach(element => {

        amountTotal += element.price;

    })

    // console.log(amountTotal);

    let newOrder = {
        amount: amountTotal,
        customer_id: user.id
    }


    let createdOrder = await db.models.order.create(newOrder);

    // console.log(createdOrder.id);






    customer_cart.forEach(element => {

        let order_details = {
            price: element.price,
            quantity: element.quantity,
            product_id: element.id,
            order_id: createdOrder.id
        }

        db.models.order_details.create(order_details)
            .then((result) => {
                console.log("ok");
            }).catch((err) => {
                console.log(err);
            });

    })


}








export { orderCheck, getOrdersByUser }