import { allCategory, createCategory } from "../controllers/category.js";
import { Router } from "express";

const categoryRouter = Router()

categoryRouter.post("/add", createCategory)
categoryRouter.get("/all", allCategory)

export default categoryRouter