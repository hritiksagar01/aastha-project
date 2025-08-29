const express = require('express');
const cors = require('cors');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Twilio client
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Emergency SMS endpoint
app.post('/api/send-emergency-sms', async (req, res) => {
  try {
    const { toNumbers, userName, location, emergencySessionId, messageBody } = req.body;

    if (!toNumbers || !Array.isArray(toNumbers) || toNumbers.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No phone numbers provided',
      });
    }

    let finalMessageBody = messageBody;

    // Extract latitude and longitude if location is provided
    const latitude = location?.latitude;
    const longitude = location?.longitude;

    if (!finalMessageBody) {
      if (latitude && longitude) {
        finalMessageBody = `🚨 HELP! 🚨
${userName || 'User'} needs assistance.
📍 ${latitude.toFixed(5)}, ${longitude.toFixed(5)}
🔗 https://maps.google.com/?q=${latitude},${longitude}
⏰ ${new Date().toLocaleString()}`;
      } else {
        finalMessageBody = `🚨 HELP! 🚨
${userName || 'User'} needs assistance.
⏰ ${new Date().toLocaleString()}`;
      }
    }

    const results = [];

    for (const toNumber of toNumbers) {
      try {
        const message = await twilioClient.messages.create({
          body: finalMessageBody,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: toNumber,
        });

        results.push({
          to: toNumber,
          success: true,
          messageId: message.sid,
        });
      } catch (error) {
        console.error(`❌ Failed to send SMS to ${toNumber}:`, error);
        results.push({
          to: toNumber,
          success: false,
          error: error.message,
        });
      }
    }

    res.json({
      success: true,
      message: 'SMS sending completed',
      results,
    });

  } catch (error) {
    console.error('❌ Error in /api/send-emergency-sms:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Emergency SMS server running on port ${PORT}`);
  console.log(`📧 SMS endpoint: http://localhost:${PORT}/api/send-emergency-sms`);
});

module.exports = app;
