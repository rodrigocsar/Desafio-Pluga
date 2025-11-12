const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Rota principal do webhook (POST e GET)
app.all("/", (req, res) => {
  console.log("📩 Dados recebidos:", req.body);

  const dados = {
    id: Date.now(),
    nome: req.body.nome || "Exemplo Nome",
    email: req.body.email || "exemplo@email.com",
    valor: req.body.valor || 250.75, // 👈 corresponde à coluna 'valor'
    data_teste: req.body.data_teste || new Date().toISOString().split("T")[0], // 👈 corresponde à coluna 'data_teste'
  };

  res.status(200).json(dados);
});

// Rota padrão para qualquer outro caminho
app.all("*", (req, res) => {
  res.status(200).json({ status: "Servidor online e recebendo dados!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
