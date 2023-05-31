import errorHandler from "../middleware/error-handler.js";
import express from "express"
import { getAllProducts, getProductById } from "../controllers/product-controller.js"
import expressAsyncHandler from "express-async-handler";


const productRouter = express.Router();

productRouter.route("/")
    .get(getAllProducts, errorHandler)


productRouter.route("/:id")
    .get(getProductById, errorHandler)




export default productRouter;