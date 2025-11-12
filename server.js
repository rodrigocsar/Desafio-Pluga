const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Rota principal do webhook
app.post("/", (req, res) => {
  console.log("📩 Dados recebidos:", req.body);

  // Simula o formato que o Pluga espera
  const dados = {
    nome: req.body.nome || "Exemplo Nome",
    email: req.body.email || "exemplo@email.com",
    mensagem: req.body.mensagem || "Mensagem teste"
  };

  res.status(200).json(dados);
});

// Apenas rota de teste para ver se o servidor está no ar
app.get("/", (req, res) => {
  res.send("Servidor da Atividade Pluga rodando!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
