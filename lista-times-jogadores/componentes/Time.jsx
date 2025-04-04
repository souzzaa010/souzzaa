import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Jogador from './Jogador';

const Time = ({ nome, anoFundacao, mascote, imagem, jogadores }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.info}>Ano de Fundação: {anoFundacao}</Text>
      <Text style={styles.info}>Mascote: {mascote}</Text>
      <Text style={styles.tituloJogadores}>Jogadores:</Text>
      <FlatList
        data={jogadores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Jogador {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 4,
  },
  imagem: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  info: {
    fontSize: 16,
    color: '#666',
  },
  tituloJogadores: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Time;