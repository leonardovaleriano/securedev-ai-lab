// Exemplo vulnerável a XSS
const express = require('express');
const app = express();

app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`<div>Você pesquisou por: ${query}</div>`);
});
