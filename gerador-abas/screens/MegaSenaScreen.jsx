import React, { useState } from 'react';
import { View, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';

function gerarJogo() {
  const numeros = new Set();
  while (numeros.size < 6) {
    numeros.add(Math.floor(Math.random() * 60) + 1);
  }
  return Array.from(numeros).sort((a, b) => a - b).join(' - ');
}

export default function MegaSenaScreen() {
  const [jogoGerado, setJogoGerado] = useState('');
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerarNovoJogo = () => {
    const novo = gerarJogo();
    setJogoGerado(novo);
    setJogosMegaSena([...jogosMegaSena, novo]);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxaA3AJe4aJr5yisiOrDJONYu26fQ-bQ_2g&s' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Gerador de Jogo da Mega Sena</Text>
        <Text style={styles.subtitulo}>Clique abaixo para gerar um novo jogo com 6 dezenas!</Text>
        <Button
          mode="contained"
          onPress={gerarNovoJogo}
          style={styles.botao}
          buttonColor="#008000"
        >
          Gerar Jogo
        </Button>
        <Text style={styles.resultado}>{jogoGerado}</Text>
        <FlatList
          data={jogosMegaSena}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Card style={styles.card}><Card.Content><Text>{item}</Text></Card.Content></Card>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  botao: {
    marginBottom: 20,
    alignSelf: 'center',
    width: '60%',
  },
  resultado: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
  card: {
    marginVertical: 5,
    backgroundColor: '#fff',
  },
});
