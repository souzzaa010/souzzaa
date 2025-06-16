import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@user_settings';

export default function HomeScreen({ navigation }) {
  const [userData, setUserData] = useState(null);

  const carregarDados = async () => {
    try {
      const dados = await AsyncStorage.getItem(STORAGE_KEY);
      if (dados) {
        setUserData(JSON.parse(dados));
      }
    } catch (e) {
      console.error('Erro ao carregar dados', e);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', carregarDados);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Bem-vindo{userData?.nome ? `, ${userData.nome}` : ''}!
      </Text>

      {userData ? (
        <>
          <Text>Nome: {userData.nome}</Text>
          <Text>Modo Escuro: {userData.modoEscuro ? 'Ativado' : 'Desativado'}</Text>
        </>
      ) : (
        <Text>Nenhum dado encontrado.</Text>
      )}

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Settings')}
        style={{ marginTop: 20 }}
      >
        Preferências
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { marginBottom: 20, textAlign: 'center' },
  text: { marginBottom: 10, textAlign: 'center' },
});