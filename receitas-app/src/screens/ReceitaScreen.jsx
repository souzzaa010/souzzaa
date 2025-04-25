import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Detalhes({ route }) {
  const { receita } = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{receita.nome}</Text>
      <Image source={{ uri: receita.imagem }} style={styles.image} />

      <Text style={styles.subtitulo}>Tempo de Preparo: <Text style={styles.texto}>{receita.tempoPreparo}</Text></Text>
      <Text style={styles.subtitulo}>Porções: <Text style={styles.texto}>{receita.porcoes}</Text></Text>

      <Text style={styles.sectionTitle}>Ingredientes</Text>
      {receita.ingredientes.map((item, index) => (
        <Text key={index} style={styles.item}>• {item}</Text>
      ))}

      <Text style={styles.sectionTitle}>Modo de Preparo</Text>
      {receita.modoPreparo.map((passo, index) => (
        <Text key={index} style={styles.item}>{passo}</Text>
      ))}

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4
  },
  texto: {
    fontWeight: '400'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8
  },
  item: {
    fontSize: 16,
    marginVertical: 2
  }
});