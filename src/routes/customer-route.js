import errorHandler from "../middleware/error-handler.js";
import express from "express"
import { getAllCustomers, getCustomerById, newCustomer, editCustomer, deleteCustomer, getCustomerByEmail } from "../controllers/customer-controller.js"
import expressAsyncHandler from "express-async-handler";



const customerRouter = express.Router();


customerRouter.route('/')
    .get(getAllCustomers, errorHandler)

customerRouter.route('/:id')
    .get(getCustomerById, errorHandler)

customerRouter.route('/:email')
    .get(getCustomerByEmail, expressAsyncHandler)


export default customerRouter;