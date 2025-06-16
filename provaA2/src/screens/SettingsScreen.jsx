import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Switch, Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeContext } from "../contexts/ThemeContext";

export default function SettingsScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [modoEscuro, setModoEscuro] = useState(false);
  const { toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const loadSettings = async () => {
      const data = await AsyncStorage.getItem('@user_settings');
      if (data) {
        const parsed = JSON.parse(data);
        setNome(parsed.nome || '');
        setModoEscuro(parsed.modoEscuro || false);
      }
    };
    loadSettings();
  }, []);

  const saveSettings = async () => {
    const data = { nome, modoEscuro };
    await AsyncStorage.setItem('@user_settings', JSON.stringify(data));
    toggleTheme(modoEscuro);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Seu Nome"
        value={nome}
        onChangeText={setNome}
        mode="outlined"
        style={styles.input}
      />
      <View style={styles.switchContainer}>
        <Text>Modo Escuro</Text>
        <Switch value={modoEscuro} onValueChange={setModoEscuro} />
      </View>
      <Button mode="contained" onPress={saveSettings}>Salvar</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { marginBottom: 16 },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});