const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const fs = require('fs/promises');

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

app.post('/api/contact', async (req, res) => {
    if (!req.body.name?.trim() || !req.body.message?.trim()) {  
        return res.status(400).json({ error: "Meno aj správa sú povinné polia!" })
    }
    try {
    const {name, message} = req.body;
    const rawData = await fs.readFile('messages.json', 'utf-8');
    const spravy = JSON.parse(rawData);
    spravy.push({ name, message, date: new Date() });
    await fs.writeFile('messages.json', JSON.stringify(spravy, null, 2));
    res.json({message: "Správa bola úspešne prijatá!"});
    } catch (error) {
        console.error("Chyba pri práci so súborom:", error);
        res.status(500).json({ error: "Nepodarilo sa uložiť správu." });
    }
});

app.listen(PORT, () => {console.log('Server načítaný...');
});
