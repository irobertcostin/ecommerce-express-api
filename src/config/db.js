import { Sequelize } from "sequelize";

import product from "../models/product";
import order from "../models/order";
import order_details from "../models/order_details";
import customer from "../models/customer";


const connectDb = () => {

    try {

        let sequelize = new Sequelize(

            "ecommerce_db",
            "root",
            "Borisescul23",
            {
                host: "localhost",
                dialect: "mysql"
            }
        )


        let db = {
            models: {}
        }

        db.Sequelize = Sequelize;

        db.sequelize = sequelize;






    } catch (error) {
        console.log(error);
    }

}