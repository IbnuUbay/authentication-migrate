// index.js (travel-api)

const express = require('express');
const app = express();

// Daftar travel (dummy data)
let travels = [
    { id: 1, type: 'mobil', name: 'Travel Mobil A', capacity: 4 },
    { id: 2, type: 'mobil', name: 'Travel Mobil B', capacity: 5 },
    { id: 3, type: 'bus', name: 'Travel Bus X', capacity: 20 },
    { id: 4, type: 'bus', name: 'Travel Bus Y', capacity: 25 },
];

app.use(express.json());

// Endpoint untuk mendapatkan daftar travel
app.get('/travels', (req, res) => {
    res.json(travels);
});

// Endpoint untuk pemesanan travel
app.post('/order', (req, res) => {
    const { travelId, passengerCount } = req.body;
    const travel = travels.find((t) => t.id === travelId);

    if (!travel) {
        return res.status(404).json({ error: 'Travel not found' });
    }

    if (passengerCount > travel.capacity) {
        return res
            .status(400)
            .json({ error: 'Insufficient capacity for passenger count' });
    }

    // Lakukan proses pemesanan
    // ...

    res.json({ message: 'Order placed successfully' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
