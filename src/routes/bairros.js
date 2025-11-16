import express from "express";
import bairros from "../data/bairros.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(bairros);
});

export default router;
