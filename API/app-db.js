// Import do framework Express
const express = require("express");
const router = require('./src/routes/UserRoute')

const app = express();

app.use(express.json());

app.use('/', router);

// INICIA O SERVIDOR NA PORTA INFORMADA
app.listen(3000, () => {
    console.log("Servidor respondendo na porta 3000");
});