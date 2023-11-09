
import { Router } from "express";
import { getYtLink, uploadLink } from "../controllers/socialMedia.js";
const socialRoute = Router()

socialRoute.get("/youtube", getYtLink)
socialRoute.post("/new", uploadLink)

export default socialRoute;