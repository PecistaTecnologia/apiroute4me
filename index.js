const express = require('express');
const userController = require('./api/Controller/userController');
const app = express();


const PORT  = process.env.PORT || 5050;

app.use("/user", userController);

app.listen(PORT, () => console.log(`Server rodando na porta  ${PORT}`));


