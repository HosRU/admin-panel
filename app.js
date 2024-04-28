const express = require("express");
const path = require('path');
const app = express();
const PORT = 3000;

// Основное

const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games'); 
const bodyParser = require("body-parser");
app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRoute,
    gamesRouter
  ) 

app.listen(PORT, () => {
    console.log("Работаем")
})