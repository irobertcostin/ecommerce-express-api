import db from "../config/db.js";
import { Sequelize } from "sequelize";
import expressAsyncHandler from "express-async-handler";




async function getDetailsById(id) {


    try {

        console.log(id);

        const order_details = await db.models.order_details.findAll({

            where: {
                order_id: {
                    [Sequelize.Op.id]: id,
                }
            }
        })

        return order_details;

    } catch (error) {
        return error
    }

}







export { getDetailsById }