import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';
import { ThemeProvider, ThemeContext } from './src/contexts/ThemeContext';
import { PaperProvider } from 'react-native-paper';

function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}