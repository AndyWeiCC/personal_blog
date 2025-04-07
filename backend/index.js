const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();
const fileUpload = require('express-fileupload');


const postRoutes = require('./routes/postRoutes');


// Initialize Express app
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


// ??????????
app.use(fileUpload());



// Define Routes
app.use('/cities', require('./routes/cityRoutes'));
app.use('/upload', require('./routes/uploadRoutes'));
app.use('/posts', postRoutes);
app.use('/videos', require('./routes/videoRoute'));


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
