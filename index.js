const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database.js');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(cors()); 

app.use('/api/auth', authRoutes); 

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
