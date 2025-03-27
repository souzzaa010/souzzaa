import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './Componentes/PrimeiroComponente';
import JavaScriptComponente from './Componentes/JavaScriptComponente';
import Perfil from './Componentes/Perfil';
import ListaCompenentes from './Componentes/ListaComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* <Perfil 
      nome="Alee"
      idade={22}
      email="teste@gmail.com"
      telefone={6199999999}
      />

      <Perfil 
      nome="Gayzin"
      idade={69}
      email="teste@hotmail.com"
      telefone={6188888888}
      /> */}
      
      <ListaCompenentes />


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
