const express = require('express');
const product = require('./api/rotas')

const app = express();

const PORT  = process.env.PORT || 5050;

app.use("/user", product);

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));