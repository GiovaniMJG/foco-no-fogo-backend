import pool from "../config/db.js";
import bairros from "../data/bairros.js";

function getRandomOffset() {
  return (Math.random() - 0.5) * 0.002;
}

export async function getDenuncias(req, res) {
  try {
    const query = "SELECT * FROM denuncias ORDER BY id DESC";
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (err) {
    console.error("Erro ao buscar denúncias:", err);
    res.status(500).json({ error: "Erro ao buscar denúncias" });
  }
}

export async function criarDenuncia(req, res) {
  try {
    const { tipo, localizacao, data } = req.body;

    const bairro = bairros.find((b) => b.nome === localizacao);
    if (!bairro) {
      return res.status(400).json({ error: "Bairro não encontrado na base" });
    }

    const lat = bairro.latitude + getRandomOffset();
    const lng = bairro.longitude + getRandomOffset();

    const query = `
      INSERT INTO denuncias (tipo, localizacao, latitude, longitude, data)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    const result = await pool.query(query, [
      tipo,
      localizacao,
      lat,
      lng,
      data,
    ]);

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Erro ao criar denúncia:", err);
    res.status(500).json({ error: "Erro ao criar denúncia" });
  }
}
