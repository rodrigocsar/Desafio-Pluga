const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Rota principal do webhook (POST)
app.post("/", (req, res) => {
  console.log("📩 Dados recebidos:", req.body);

  const body = Array.isArray(req.body) ? req.body[0] : req.body;

  const dados = {
    nome: body.nome || "Exemplo Nome",
    email: body.email || "exemplo@email.com",
    mensagem: body.mensagem || "Mensagem teste"
  };

  res.status(200).json(dados);
});

// Rota GET para ver se o servidor está ativo
app.get("/", (req, res) => {
  res.send("🚀 Servidor da Atividade Pluga rodando e recebendo Webhooks!");
});

// Porta padrão
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor rodando na porta ${PORT}`));
