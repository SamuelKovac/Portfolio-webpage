const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/status', (req, res) => {
    res.json({ message: "Server beží úspešne!" });
});

app.get('/api/about', (req, res) => {
    res.json({
        name: "Samuel z HNP",
        role: "Fullstack Developer"
    });
});

app.listen(PORT, () => {console.log('Server načítaný...');
});
