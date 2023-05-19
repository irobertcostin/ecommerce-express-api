import { Sequelize } from "sequelize";

import product from "../models/product.js";
import order from "../models/order.js";
import order_details from "../models/order_details.js";
import customer from "../models/customer.js";


const connectDb = () => {

    try {


        // config sequelizeObj as new sequelize class
        let sequelizeObj = new Sequelize(

            "ecommerce_db",
            "root",
            "Borisescul23",
            {
                host: "localhost",
                dialect: "mysql"
            }
        )

        // declaring db object
        let db = {
            models: {}
        }


        // sequelize class
        db.Sequelize = Sequelize;
        // sequelize object
        db.sequelize = sequelizeObj;

        db.models.product = product(sequelizeObj);
        db.models.order = order(sequelizeObj);
        db.models.customer = customer(sequelizeObj);
        db.models.order_details = order_details(sequelizeObj);




        // customer and order
        db.models.customer.hasMany(db.models.order, {

            onDelete: "CASCADE",
            as: "fk_customer_id",

            foreignKey: {
                fieldName: "customer_id",
                allowNull: false
            }

        });

        db.models.order.belongsTo(db.models.customer, {

            as: "fk_customer_id",

            foreignKey: {
                fieldName: "customer_id",
                allowNull: false
            }



        })

        // product and order details 
        db.models.product.hasMany(db.models.order_details, {

            onDelete: "CASCADE",
            as: "fk_product_id",

            foreignKey: {
                fieldName: "product_id",
                allowNull: false
            }

        })


        db.models.order_details.belongsTo(db.models.product, {
            as: "fk_product_id",

            foreignKey: {
                fieldName: "product_id",
                allowNull: false
            }
        })





        // order and order_details


        db.models.order.hasMany(db.models.order_details, {

            onDelete: "CASCADE",
            as: "fk_order_id",

            foreignKey: {
                fieldName: "order_id",
                allowNull: false
            }
        })



        db.models.order_details.belongsTo(db.models.order, {

            as: "fk_order_id",

            foreignKey: {
                fieldName: "order_id",
                allowNull: false
            }


        })

        return db;

    } catch (error) {
        console.log(error);
    }

}


let db = connectDb();

export default db;