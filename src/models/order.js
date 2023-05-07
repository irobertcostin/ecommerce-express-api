import { Sequelize } from "sequelize";




export default (sequelize) => {


    class Order extends Sequelize.Model { }


    Order.init({

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customer_id: {
            type: Sequelize.INTEGER,
            validate: {
                notNull: {
                    msg: "Provide a customer id"
                },
                notEmpty: {
                    msg: "Provide a customer id"
                }
            }
        },
        amount: {
            type: Sequelize.INTEGER,
            validate: {
                notNull: {
                    msg: "Provide amount"
                },
                notEmpty: {
                    msg: "Provide amount"
                }
            }
        },
        order_email: {
            type: Sequelize.STRING,
            validate: {
                notNull: {
                    msg: "Provide email"
                },
                notEmpty: {
                    msg: "Provide email"
                }
            }
        }


    }, {
        sequelize,
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })

    return Order;

}