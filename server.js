const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Rota principal do webhook (POST)
app.post("/", (req, res) => {
  console.log("📩 Dados recebidos:", req.body);

  // Dados simulando a estrutura esperada pela Pluga
  const dados = {
    id: req.body.id || Date.now(), // gera ID único se não vier
    nome: req.body.nome || "Exemplo Nome",
    email: req.body.email || "exemplo@email.com",
    valor: req.body.valor || 100,
    data_teste: req.body.data_teste || new Date().toISOString(),
  };

  // Envia esses dados de volta para o Pluga
  res.status(200).json(dados);
});

// Rota GET para ver se o servidor está ativo
app.get("/", (req, res) => {
  res.send("🚀 Servidor da Atividade Pluga rodando e recebendo Webhooks!");
});

// Porta padrão
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor rodando na porta ${PORT}`));
