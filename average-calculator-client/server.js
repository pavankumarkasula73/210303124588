const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Endpoint to calculate average
app.post('/average', (req, res) => {
    const numbers = req.body.numbers;
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return res.status(400).send({ error: 'Invalid input' });
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    res.send({ average });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
