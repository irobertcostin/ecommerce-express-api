import db from "../config/db.js";
import expressAsyncHandler from "express-async-handler";
import { Sequelize } from "sequelize";






async function getProductsWithIds(ids) {


    try {

        const products = await db.models.product.findAll({

            where: {
                id: {
                    // id operator is in ids
                    [Sequelize.Op.in]: ids,
                }
            },

        });

        return products;

    } catch (error) {
        console.error(error);
    }


}






async function orderCheck(orderDto) {




    const { customer_id } = orderDto;

    const { order } = orderDto;


    const user = await db.models.customer.findByPk(customer_id);
    console.log(user);


    let map = new Map();


    order.forEach(element => {

        map.set(+element.product_id, element);
    });



    let products = await getProductsWithIds(Array.from(map.keys()));







    let amountTotal = 0;

    products.forEach(element => {

        amountTotal += element.price;

    })



    let newOrder = {
        amount: 10,
        customer_id: user.id
    }



    let createdOrder = await db.models.order.create(newOrder);
    console.log(createdOrder);



    // const orderDetails = db.models.order_details.bulkCreate([



    // ])

    // await createdOrder.addOrder_details(products)
    // await createdOrder.save();


}








export { orderCheck }