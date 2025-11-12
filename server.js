const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Rota principal do webhook
app.post("/", (req, res) => {
  console.log("📩 Dados recebidos:", req.body);

  // Garante que retorna um objeto com as chaves esperadas pela Pluga
  const dados = {
    nome: req.body.nome,
    email: req.body.email,
    data_teste: req.body.data_teste
  };

  res.status(200).json(dados);
});

// Apenas rota de teste para ver se o servidor está no ar
app.get("/", (req, res) => {
  res.send("Servidor da Atividade Pluga rodando!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
