const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/", (req, res) => {
  console.log("📩 Dados recebidos:", req.body);
  res.status(200).json({ success: true });
});

app.get("/", (req, res) => {
  res.send("Servidor da Atividade Pluga rodando!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
