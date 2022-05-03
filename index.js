const express = require('express');
const User = require('./src/routes');
const app = express();


const PORT  = process.env.PORT || 5050;

app.use("/", User);

app.listen(PORT, () => console.log(`Server rodando na porta  ${PORT}`));


