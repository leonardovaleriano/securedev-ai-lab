// Exemplo vulnerável a XSS
const express = require('express');
const app = express();

app.get('/search', (req, res) => {
    const query = req.query.q;
    // Função para escapar caracteres especiais de HTML
    function escapeHtml(text) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
    res.send(`<div>Você pesquisou por: ${escapeHtml(query)}</div>`);
});
