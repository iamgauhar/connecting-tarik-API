

import { Router } from "express";
import { allProduct, createProduct } from "../controllers/product.js";
const productRouter = Router()

productRouter.post("/add", createProduct)
productRouter.get("/all", allProduct)

export default productRouter
