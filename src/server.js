import express from "express";
import cors from "cors";

import denunciasRoutes from "./routes/denuncias.js";
import bairrosRoutes from "./routes/bairros.js";

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/denuncias", denunciasRoutes);
app.use("/api/bairros", bairrosRoutes);

app.get("/", (req, res) => {
  res.send("API Foco no Fogo ativa");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});
