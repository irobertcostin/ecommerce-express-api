import { Sequelize } from "sequelize";



export default (sequelize) => {

    class Customer extends Sequelize.Model { }


    Customer.init({

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,

            validate: {
                isEmail: true,
                customValidator(value) {
                    if (!value.includes('@') || !value.endsWith('.com')) {
                        throw new Error('Email should contain "@" and end with ".com"');
                    }
                }
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                is: /^(?=.*[A-Z]).{8,}$/i // Regex constraint for at least 1 uppercase letter and minimum length of 8 characters
            }
        },
        full_name: {
            type: Sequelize.STRING,
            allowNull: false,

            validate: {
                notNull: {
                    msg: "Provide full name"
                },
                notEmpty: {
                    msg: "Provide full name"
                }
            }
        },



    }, {

        sequelize,
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })

    return Customer;

}