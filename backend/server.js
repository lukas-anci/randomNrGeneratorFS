require('dotenv').config();
const express = require('express');
var cors = require('cors');
const app = express();
const connectDB = require('./config/db');
const numberRoutes = require('./routes/numberRoutes');

connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/number', numberRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
