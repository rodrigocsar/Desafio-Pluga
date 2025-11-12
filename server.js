const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// 🔥 Rota principal do webhook
app.post("/", (req, res) => {
  console.log("📩 Dados recebidos:", req.body);

  // Se vier um array, pegamos o primeiro objeto
  const body = Array.isArray(req.body) ? req.body[0] : req.body;

  // Garante um objeto plano com chaves
  const dados = {
    id: body.id || Date.now(),
    nome: body.nome || "Exemplo Nome",
    email: body.email || "exemplo@email.com",
    mensagem: body.mensagem || "Mensagem teste"
  };

  console.log("✅ Enviando de volta:", dados);
  res.status(200).json(dados);
});

// Teste simples para checar se o servidor está no ar
app.get("/", (req, res) => {
  res.send("🚀 Servidor da Atividade Pluga está rodando!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🔥 Servidor rodando na porta ${PORT}`));
