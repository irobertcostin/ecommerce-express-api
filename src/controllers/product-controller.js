import db from "../config/db.js";
import express from "express";
import expressAsyncHandler from "express-async-handler";
// asyncHandler - pentru a nu mai pune try catch pe await 



let getAllProducts = expressAsyncHandler((async (req, res) => {
    let products = await db.models.product.findAll();
    res.status(200).json(products)
})
)

let newProduct = expressAsyncHandler((async (req, res) => {

    let newProduct = req.body
    await db.models.product.create(newProduct);
    res.status(201).end('Successfully registered')
})
)


let getProductById = expressAsyncHandler((async (req, res) => {


    let id = req.params.id;
    console.log(id);
    let product = await db.models.product.findByPk(id);


    if (product) {
        res.status(200).json(product)
    } else {
        res.status(404).end(`No object with id ${id} found`)
    }

}))

let deleteProduct = expressAsyncHandler((async (req, res) => {

    let id = req.params

    let product = await db.models.product.findByPk(id);

    if (product) {
        await product.destroy();
        res.status(202).end('Successfully deleted')
    } else {
        res.status(404).end(`No object with id ${id} found`)
    }

})
)



let editProduct = expressAsyncHandler((async (req, res) => {

    let id = req.params
    let product = await db.models.product.findByPk(id);



    if (product) {
        let editedProduct = req.body;
        product.set(editedProduct)
        res.status(202).end("Successfully edited")
    } else {
        res.status(404).json(`No object with id ${id} found`)
    }

})
)




export { getAllProducts, getProductById, editProduct, newProduct, deleteProduct }