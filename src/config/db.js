import { Sequelize } from "sequelize";

import product from "../models/product.js";
import order from "../models/order.js";
import order_details from "../models/order_details.js";
import customer from "../models/customer.js";
import dotenv from "dotenv"

// const { DB_NAME, DB_PASSWORD, DB_USER, DB_HOST, DB_DIAL, dotenv } = pkg;

dotenv.config();

let name = process.env.DB_NAME
let user = process.env.DB_USER
let pass = process.env.DB_PASSWORD
let host = process.env.DB_HOST
let dialect = process.env.DB_DIAL

// console.log(name);
// console.log(user);
// console.log(pass);
// console.log(host);
// console.log(dialect);


const connectDb = () => {

    try {


        // config sequelizeObj as new sequelize class
        let sequelizeObj = new Sequelize(

            name,
            user,
            pass,
            {
                host: host,
                dialect: dialect
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