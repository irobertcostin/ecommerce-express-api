import db from "../config/db.js";
import expressAsyncHandler from "express-async-handler";
// asyncHandler - pentru a nu mai pune try catch pe await 



let getAllCustomers = expressAsyncHandler((async (req, res) => {
    let customers = await db.models.customer.findAll();
    res.status(200).json(customers)
})
)

let newCustomer = expressAsyncHandler((async (req, res) => {

    let newCustomer = req.body
    await db.models.customer.create(newCustomer);
    res.status(201).end('Successfully registered')
})
)


let getCustomerById = expressAsyncHandler((async (req, res) => {


    let id = req.params.id;
    console.log(id);
    let customer = await db.models.customer.findByPk(id);


    if (customer) {
        res.status(200).json(customer)
    } else {
        res.status(404).end(`No object with id ${id} found`)
    }

}))



let getCustomerByEmail = expressAsyncHandler((async (req, res) => {


    let email = req.params.email;

    let customers = await db.models.customer.findAll();

    let x = customers.filter(e => e.email == email)
    console.log(x[0]);
    if (x) {
        res.status(200).json(x[0])
    } else {
        res.status(404).end(`No object with id ${id} found`)
    }

}))







let deleteCustomer = expressAsyncHandler((async (req, res) => {

    let id = req.params

    let customer = await db.models.customer.findByPk(id);

    if (customer) {
        await customer.destroy();
        res.status(202).json('Successfully deleted')
    } else {
        res.status(404).json(`No object with id ${id} found`)
    }

})
)



let editCustomer = expressAsyncHandler((async (req, res) => {

    let id = req.params
    let customer = await db.models.customer.findByPk(id);



    if (customer) {
        let editedCustomer = req.body;
        customer.set(editedCustomer)
        res.status(202).end("Successfully edited")
    } else {
        res.status(404).json(`No object with id ${id} found`)
    }

})
)



let login = expressAsyncHandler((async (req, res) => {

    let foundUser = await db.models.customer.findOne({

        where: {
            email: req.body.email,

        }
    })


    if (foundUser) {

        if (foundUser.password === req.body.password) {



            res.status(202).json({
                user: {
                    customerId: foundUser.id,
                    full_name: foundUser.full_name,
                    email: foundUser.email
                }
            })
        } else {
            res.status(401).json({
                error: `unauthorized : false password`
            })
        }


    } else {
        res.status(404).json({
            error: `Have you registered yet?`
        })
    }

}))





export { getAllCustomers, getCustomerById, newCustomer, editCustomer, deleteCustomer, getCustomerByEmail, login }

