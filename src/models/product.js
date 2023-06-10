import { Sequelize } from "sequelize";



export default (sequelize) => {


    class Product extends Sequelize.Model { }


    Product.init({

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,

            validate: {
                notNull: {
                    msg: "Provide a name"
                },
                notEmpty: {
                    msg: "Provide a name"
                }
            }
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Provide a price"
                },
                notEmpty: {
                    msg: "Provide a price"
                }
            }
        },
        stock: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Provide stock"
                },
                notEmpty: {
                    msg: "Provide stock"
                }
            }
        },
        url: {
            type: Sequelize.STRING, // or DataTypes.TEXT for longer URLs
            allowNull: false,
            validate: {
                isUrl: true, // enforce URL format validation
            },
        }



    }, {

        sequelize,
        timestamps: false,
        createdAt: false,
        updatedAt: false

    })


    return Product;



}