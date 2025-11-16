// backend/src/routes/denuncias.js
import express from "express";
import * as controller from "../controllers/denunciasController.js";

const router = express.Router();

router.get("/", controller.getDenuncias);
router.post("/", controller.criarDenuncia);

export default router;
