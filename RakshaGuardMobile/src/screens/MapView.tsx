import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MapView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Map View</Text>
      <Text style={styles.subtitle}>View emergency locations on map</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default MapView;
