const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/recommend', async (req, res) => {
  try {
    const userPreferences = req.body.preferences;

    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama3-8b-8192',
        messages: [
          {
            role: 'system',
            content: 'You are a smart nutritionist recommending Indian canteen meals based on user preferences like calorie needs, veg/non-veg, budget, etc.'
          },
          {
            role: 'user',
            content: `Suggest canteen menu items for this: ${userPreferences}`
          }
        ],
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.json({ recommendation: response.data.choices[0].message.content });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Groq AI API call failed' });
  }
});

module.exports = router;
