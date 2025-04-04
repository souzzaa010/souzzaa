import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Jogador = ({ nome, numero, imagem }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <View>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.numero}>Número: {numero}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  imagem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  numero: {
    fontSize: 14,
    color: '#555',
  },
});

export default Jogador;