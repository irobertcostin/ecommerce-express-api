import errorHandler from "../middleware/error-handler.js";
import express from "express"
import { login, getAllCustomers, getCustomerById, newCustomer, editCustomer, deleteCustomer, getCustomerByEmail } from "../controllers/customer-controller.js"
import expressAsyncHandler from "express-async-handler";



const customerRouter = express.Router();


customerRouter.route('/')
    .get(getAllCustomers, errorHandler)

customerRouter.route('/email=:email')
    .get(getCustomerByEmail, expressAsyncHandler)

customerRouter.route('/id=:id')
    .get(getCustomerById, errorHandler)


customerRouter.route('/login')
    .post(login, errorHandler)

export default customerRouter;