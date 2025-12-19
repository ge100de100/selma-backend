// Express importieren
const express = require('express');
const app = express();

// Endpunkt /health
app.get('/health', (req, res) => {
    console.log(`Request received at ${new Date()}`);
    res.send('OK');
});

// Endpunkt /status
app.get('/status', (req, res) => {
    res.send('Running');
});

// Server starten
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
