import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

export default function App() {
  return (
    <GluestackUIProvider >
      <Navigation />
    </GluestackUIProvider>
  );
}

