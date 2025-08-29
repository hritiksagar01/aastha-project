# Raksha Guard Plus - Setup Guide

## Backend Setup

### 1. Install Dependencies
```bash
cd raksha-backend
npm install
```

### 2. Environment Configuration
Create a `.env` file with the following variables:
```
TWILIO_ACCOUNT_SID=your_twilio_account_sid_here
TWILIO_AUTH_TOKEN=your_twilio_auth_token_here
TWILIO_PHONE_NUMBER=+1234567890  # Must be a valid Twilio phone number
PORT=3001
```

### 3. Twilio Setup Requirements
- Ensure your Twilio account has sufficient credits
- Verify your Twilio phone number can send SMS to your target countries
- The "From" number must be different from the "To" numbers

### 4. Start the Server
```bash
npm start
```

## Frontend Setup

### 1. Environment Variables
Create a `.env` file in the main project directory:
```
VITE_BACKEND_URL=http://localhost:3001
```

### 2. Supabase Storage Configuration
For media uploads to work, you need to:
1. Go to Supabase Dashboard → Storage → Policies
2. Create a policy for the "suraksha" bucket that allows authenticated users to upload files
3. Example policy:
   - Policy Name: "Allow authenticated uploads"
   - Target: All storage objects
   - Operation: INSERT
   - Expression: `auth.role() = 'authenticated'`

## Testing

### Test SMS Functionality
```bash
cd raksha-backend
node test-sms-fixed.js
```

### Test Emergency Button
1. Start both frontend and backend servers
2. Navigate to the dashboard
3. Press and hold the emergency button for 3 seconds
4. Check console logs for any errors

## Troubleshooting

### Common Issues

1. **Twilio Errors**:
   - "To and From cannot be the same": Use different numbers
   - "Not a Twilio phone number": Verify your Twilio number

2. **Supabase Storage Errors**:
   - "Row-level security policy": Configure storage policies in Supabase dashboard

3. **CORS Issues**:
   - Ensure backend is running on port 3001
   - Check that frontend is configured to use the correct backend URL

## API Endpoints

- `POST /api/send-emergency-sms` - Send emergency SMS to contacts
- `GET /health` - Health check endpoint

The system is now ready for production use once all configurations are properly set up!
