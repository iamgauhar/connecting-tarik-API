import { Router } from "express";
import { allCustomer, createCustomer } from "../controllers/customer.js";

const customerRouter = Router()

customerRouter.post('/upload', createCustomer)
customerRouter.get('/get', allCustomer)

export default customerRouter;