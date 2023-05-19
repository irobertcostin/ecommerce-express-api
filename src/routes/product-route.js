import errorHandler from "../middleware/error-handler.js";
import express from "express"
import { getAllProducts, getProductById } from "../controllers/product-controller.js"



const productRouter = express.Router();

productRouter.route("/")
    .get(getAllProducts, errorHandler)


productRouter.route("/:id")
    .get(getProductById, errorHandler)




export default productRouter;