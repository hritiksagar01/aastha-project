const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function testSMS() {
  try {
    // Use a different test number that's not the Twilio number
    const response = await fetch('http://localhost:3001/api/send-emergency-sms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        toNumbers: ['+918957974254'], // Use a different test number
        userName: 'Test User',
        location: {
          latitude: 28.6139,
          longitude: 77.2090,
          accuracy: 50
        },
        emergencySessionId: 'test-session-123'
      })
    });

    const result = await response.json();
    console.log('SMS Test Result:', result);
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testSMS();
