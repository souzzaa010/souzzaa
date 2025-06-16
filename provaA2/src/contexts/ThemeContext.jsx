import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(MD3LightTheme);

  useEffect(() => {
    const carregarPreferencias = async () => {
      const dados = await AsyncStorage.getItem('@user_settings');
      if (dados) {
        const parsed = JSON.parse(dados);
        const isDark = parsed.modoEscuro || false;
        setDarkMode(isDark);
        setTheme(isDark ? MD3DarkTheme : MD3LightTheme);
      }
    };

    carregarPreferencias();
  }, []);

  const toggleTheme = async (newValue) => {
    setDarkMode(newValue);
    setTheme(newValue ? MD3DarkTheme : MD3LightTheme);

    const dados = await AsyncStorage.getItem('@user_settings');
    const parsed = dados ? JSON.parse(dados) : {};
    await AsyncStorage.setItem('@user_settings', JSON.stringify({
      ...parsed,
      modoEscuro: newValue,
    }));
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}