const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Simulando um "banco de dados" em memória
let registros = [];
let ultimoId = 1;

// Rota para webhook do Pluga (GET - Polling)
app.get("/", (req, res) => {
  console.log("📡 Pluga solicitando dados (polling)...");
  
  // Simular novos dados (na prática, você buscaria do seu banco)
  const novosDados = [
    {
      id: ultimoId++,
      nome: `Cliente ${Date.now()}`,
      email: `cliente${Date.now()}@email.com`,
      valor: Math.random() * 1000,
      data_teste: new Date().toISOString().split("T")[0]
    }
  ];
  
  console.log("📤 Enviando dados para Pluga:", novosDados);
  
  // O Pluga espera um ARRAY de objetos
  res.status(200).json(novosDados);
});

// Rota para receber dados via POST (se necessário)
app.post("/", (req, res) => {
  console.log("📩 Dados recebidos via POST:", req.body);
  
  const novoRegistro = {
    id: ultimoId++,
    nome: req.body.nome || "Sem nome",
    email: req.body.email || "sem@email.com",
    valor: req.body.valor || 0,
    data_teste: req.body.data_teste || new Date().toISOString().split("T")[0]
  };
  
  registros.push(novoRegistro);
  
  res.status(200).json({ 
    status: "Dados recebidos com sucesso!",
    registro: novoRegistro 
  });
});

// Rota de health check
app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "Servidor online",
    registros: registros.length,
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));