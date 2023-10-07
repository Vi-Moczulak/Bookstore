// importuję expresa
const express = require('express');

// tworzę instancję expresa
const app = express();

app.use((req, res, next) => {
    res.status(200).json({ wiadomosc: 'Wszystko śmiga' });
});

module.exports = app;