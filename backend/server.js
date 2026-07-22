const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(express.json());
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

app.post('/api/contact', (req, res) => {
    const {name, message} = req.body;
    console.log("Cele telo požiadavky:", req.body);
    console.log("Správa bola prijatá", name, message);
    res.json({message: "Správa bola úspešne prijatá!"});
})

app.listen(PORT, () => {console.log('Server načítaný...');
});
