import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import PrimeiroComponente from './Componentes/PrimeiroComponente';
import JavaScriptComponente from './Componentes/JavaScriptComponente';
import Perfil from './Componentes/Perfil';
import ListaCompenentes from './Componentes/ListaComponente';
import Atleta from './Componentes/Atleta';

export default function App() {

  const listaAtletas = [
    {
      nome: "Caça Rato",
      idade: 38,
      numero: 7,
      imagem:'https://i.pinimg.com/736x/51/9a/c2/519ac2b1db61823ba1df9ebdddd68bc4.jpg'
    },
    {
      nome: "Ronaldo",
      idade: 48,
      numero: 9,
      imagem:'https://i.pinimg.com/736x/25/22/2a/25222acc29f054f6b491ceee74747d23.jpg'
    },
    {
      nome: "LeBronha",
      idade: 38,
      numero: 23,
      imagem:'https://i.pinimg.com/736x/7c/48/19/7c481977061c7f68bb5970dae91f1787.jpg'
    },
  ]

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        {listaAtletas.map(
          atleta => {
            return(
              <Atleta 
                nome={atleta.nome}
                idade={atleta.idade}
                numero={atleta.numero}
                imagem={atleta.imagem}
              />
            )
          }
        )}

    </View>

    </ScrollView>
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
