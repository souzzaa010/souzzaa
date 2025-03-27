import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/primeiroComponente';
import SegundoComponente from './componentes/SegundoComponente';
import JavascriptComponente from './componentes/JavascriptComponente';
import Perfil from './componentes/Perfil';

export default function App() {
  return (
    <View style={styles.container}>

      <PrimeiroComponente />
      <SegundoComponente />
      <JavascriptComponente />

      <Perfil 
        nome="Alee"
        sobrenome="Sousa"
        idade={19}
      />
      <Perfil 
        nome="Jão"
        sobrenome="Leal"
        idade={19}
      />
      <Perfil 
        nome="Tonhao"
        sobrenome="Pereira"
        idade={19}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
