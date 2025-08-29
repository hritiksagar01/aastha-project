# RakshaGuard Mobile App

A React Native mobile application for emergency safety and alert system, built with TypeScript and Supabase.

## Features

- User authentication (Sign up/Sign in)
- Emergency alert system
- Location tracking
- Emergency contacts management
- History of emergency events
- Map view for emergency locations
- Settings management

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 18 or higher)
- npm or yarn
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd RakshaGuardMobile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a Supabase account at [supabase.com](https://supabase.com)
   - Create a new project
   - Update the Supabase configuration in `src/integrations/supabase/client.ts`:
     ```typescript
     const supabaseUrl = 'your-supabase-url';
     const supabaseAnonKey = 'your-anon-key';
     ```

4. **Set up environment variables** (optional)
   Create a `.env` file in the root directory:
   ```
   SUPABASE_URL=your-supabase-url
   SUPABASE_ANON_KEY=your-anon-key
   ```

## Running the App

### Android

1. **Start the Metro bundler**
   ```bash
   npm start
   ```

2. **In a new terminal, run on Android**
   ```bash
   npm run android
   ```

### iOS

1. **Install iOS dependencies**
   ```bash
   cd ios && pod install && cd ..
   ```

2. **Start the Metro bundler**
   ```bash
   npm start
   ```

3. **In a new terminal, run on iOS**
   ```bash
   npm run ios
   ```

## Project Structure

```
RakshaGuardMobile/
├── src/
│   ├── contexts/          # React contexts (Auth, etc.)
│   ├── integrations/      # Third-party integrations (Supabase)
│   ├── screens/           # App screens
│   └── types/            # TypeScript type definitions
├── App.tsx               # Main application component
├── index.js              # Entry point
└── package.json          # Dependencies and scripts
```

## Key Dependencies

- **React Native**: Core framework
- **TypeScript**: Type safety
- **React Navigation**: Navigation between screens
- **Supabase**: Backend and authentication
- **React Native Safe Area Context**: Safe area handling
- **React Native Vector Icons**: Icon library

## Development

### Adding New Screens

1. Create a new component in `src/screens/`
2. Add the screen to the navigation stack in `App.tsx`
3. Update the navigation types if needed

### Styling

The app uses React Native's StyleSheet for styling. Consider using a design system or component library for consistency.

### State Management

- Local state: React hooks (`useState`, `useEffect`)
- Global state: React Context API
- Async state: Custom hooks with error handling

## Building for Production

### Android

```bash
cd android && ./gradlew assembleRelease
```

### iOS

1. Open the Xcode project in `ios/`
2. Select the target device
3. Product → Archive

## Troubleshooting

### Common Issues

1. **Metro bundler not starting**: Try clearing the cache
   ```bash
   npm start -- --reset-cache
   ```

2. **Build failures**: Clean the project
   ```bash
   cd android && ./gradlew clean
   ```

3. **Dependency issues**: Clear npm cache and reinstall
   ```bash
   npm cache clean --force
   npm install
   ```

### Debugging

- Use React Native Debugger
- Enable remote debugging in the app
- Check console logs in browser developer tools

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please create an issue in the repository or contact the development team.
