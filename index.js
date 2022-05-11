const express = require('express');
const User = require('./src/routes');
const app = express();


app.use("/", User);

app.listen(3333, () => console.log(`Server rodando na porta  ${3333}`));


