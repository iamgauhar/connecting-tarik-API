
import { Router } from "express";
import { getInstaLink, getYtLink, updateLinks, uploadLink } from "../controllers/socialMedia.js";
const socialRoute = Router()

socialRoute.get("/youtube", getYtLink)
socialRoute.get("/instagram", getInstaLink)
socialRoute.post("/new", uploadLink)
socialRoute.patch("/update", updateLinks)

export default socialRoute;