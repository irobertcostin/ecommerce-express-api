import cors, { } from "cors";
import express from "express";
import db from "./config/db.js";
import productRouter from "./routes/product-route.js";
import customerRouter from "./routes/customer-route.js";


const app = express();

app.use(cors());

app.use(express.json());



app.use("/api/v1/products", productRouter)

app.use("/api/v1/customers", customerRouter)



db.sequelize.sync().then((result) => {

    app.listen(4242, () => {

        console.log("Listening...");

    })

})