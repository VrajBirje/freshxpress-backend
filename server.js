const express = require('express');
const bodyParser = require('body-parser');
const businessRoutes = require('./routes/businessRoutes');
const db = require('./config/db'); // Import the database connection
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api/business', businessRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
