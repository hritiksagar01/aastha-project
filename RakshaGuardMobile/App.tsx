import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/contexts/AuthContext';
import AuthScreen from './src/screens/AuthScreen';
import Dashboard from './src/screens/Dashboard';
import EmergencyContacts from './src/screens/EmergencyContacts';
import History from './src/screens/History';
import MapView from './src/screens/MapView';
import Settings from './src/screens/Settings';

export type RootStackParamList = {
  Auth: undefined;
  Dashboard: undefined;
  EmergencyContacts: undefined;
  History: undefined;
  MapView: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Auth"
            screenOptions={{
              headerShown: false,
              gestureEnabled: true,
            }}
          >
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="EmergencyContacts" component={EmergencyContacts} />
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="MapView" component={MapView} />
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
};

export default App;
