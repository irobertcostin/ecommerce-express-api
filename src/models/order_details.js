import { Sequelize } from "sequelize";




export default (sequelize) => {


    class OrderDetails extends Sequelize.Model { }


    OrderDetails.init({

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        order_id: {
            type: Sequelize.INTEGER,
            validate: {
                notNull: {
                    msg: "Provide an order id"
                },
                notEmpty: {
                    msg: "Provide an order id"
                }
            }
        },
        product_id: {
            type: Sequelize.INTEGER,
            validate: {
                notNull: {
                    msg: "Provide a product id"
                },
                notEmpty: {
                    msg: "Provide a product id"
                }
            }
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false
        }


    }, {
        sequelize,
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })

    return OrderDetails;

}