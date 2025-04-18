// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const axios = require('axios'); // If needed for direct Groq calls

const menuRoutes = require('./routes/menuRoutes');
const groqRoutes = require('./routes/groqRoutes'); // 💡 New route for AI

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// API Routes
app.use('/api/menu', menuRoutes);      // 🍔 Menu routes
app.use('/api/ai', groqRoutes);        // 🤖 Groq AI recommendation route

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas!');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('❌ MongoDB connection failed:', err));
