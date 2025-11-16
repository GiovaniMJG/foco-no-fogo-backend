import { Router } from "express";
import denunciasRoutes from "./denuncias.routes.js";

const routes = Router();

routes.use("/denuncias", denunciasRoutes);

export default routes;
