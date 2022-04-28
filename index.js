const express = require('express');
const User = require('./api/rotas');
const app = express();


const PORT  = process.env.PORT || 5050;

app.use("/user", User);

app.listen(PORT, () => console.log(`Server rodando na porta  ${PORT}`));


