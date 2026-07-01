const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.get('/api/status', (req, res) => {
    res.json({ message: "Server beží úspešne!" });
});

app.get('/api/about', (req, res) => {
    res.json({
        name: "Samuel Kováč",
        role: "Fullstack Developer"
    });
});

app.listen(PORT, () => {console.log('Server načítaný...');
});
