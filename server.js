import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
  res.json({
    id: 1,
    nome: "Cesar",
    email: "cesar@email.com",
    valor: 250.75,
    data_teste: "2025-11-12"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
