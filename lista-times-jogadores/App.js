import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Text, Image } from 'react-native';
import { PaperProvider } from 'react-native-paper';

const Time = ({ nome, anoFundacao, mascote, imagem, jogadores }) => {
  return (
    <View style={styles.timeContainer}>
      <Image source={{ uri: imagem }} style={styles.timeImage} />
      <Text style={styles.timeNome}>{nome}</Text>
      <Text style={styles.timeInfo}>Fundado em: {anoFundacao}</Text>
      <Text style={styles.timeInfo}>Mascote: {mascote}</Text>

      <FlatList
        data={jogadores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.jogadorContainer}>
            <Image source={{ uri: item.imagem }} style={styles.jogadorImagem} />
            <Text style={styles.jogadorNome}>{item.nome}</Text>
            <Text style={styles.jogadorNumero}>#{item.numero}</Text>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.jogadoresLista}
      />
    </View>
  );
};

export default function App() {
  const times = [
    {
      nome: "Flamengo",
      anoFundacao: 1895,
      mascote: "Urubu",
      imagem: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
      jogadores: [
        { nome: "Erick Pulgar", numero: 13, imagem: "https://i.pinimg.com/736x/60/e5/f8/60e5f8bafd4b3aa0c8ab53888c3621a4.jpg" },
        { nome: "Arrascaeta", numero: 10, imagem: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg" },
        { nome: "Bruno Henrique", numero: 27, imagem: "https://i.pinimg.com/736x/13/be/ff/13beff00a3d4e312d2e431df24a4f3dd.jpg" },
        { nome: "Everton Cebolinha", numero: 11, imagem: "https://i.pinimg.com/736x/54/78/01/547801eb53b3b2980337b0a2b431d728.jpg" },
        { nome: "Pedro", numero: 21, imagem: "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg" },
      ],
    },
    {
      nome: "Barcelona",
      anoFundacao: 1899,
      mascote: "Cobi",
      imagem: "https://i.pinimg.com/736x/80/65/c9/8065c9e0231029e8fda40e7eaeb0d933.jpg",
      jogadores: [
        { nome: "Lamine Yamal", numero: 19, imagem: "https://i.pinimg.com/736x/85/16/4b/85164b4269b348093834d286dd390849.jpg" },
        { nome: "Lewandowski", numero: 9, imagem: "https://i.pinimg.com/736x/04/b9/e7/04b9e72d30290c81b2cd05caf0f6e4f6.jpg" },
        { nome: "Raphinha", numero: 11, imagem: "https://i.pinimg.com/736x/d7/f1/0b/d7f10b46656fb2baaf1c0d0e354ec8e2.jpg" },
        { nome: "Dani Olmo", numero: 10, imagem: "https://i.pinimg.com/736x/41/18/ce/4118ce4fdbc82afaea99bb9bcfce4d5a.jpg" },
        { nome: "Pedri", numero: 20, imagem: "https://i.pinimg.com/736x/c2/01/af/c201af145c4b861435fa0ba2edd17b4d.jpg" },
      ],
    },
    {
      nome: "Corinthians",
      anoFundacao: 1910,
      mascote: "Mosqueteiro",
      imagem: "https://i.pinimg.com/736x/73/d4/c9/73d4c91ebafab8088a7415fbac160297.jpg",
      jogadores: [
        { nome: "Memphis Depay", numero: 10, imagem: "https://i.pinimg.com/736x/2b/8a/cf/2b8acffe3ad03586ed0fc7047a633e44.jpg" },
        { nome: "Rodrigo Garro", numero: 8, imagem: "https://i.pinimg.com/736x/85/98/82/85988266cd4c8209dd5d57c5f58c2e8d.jpg" },
        { nome: "Yuri Alberto", numero: 9, imagem: "https://i.pinimg.com/736x/78/d7/f2/78d7f2cf6f71332d6dce4b2ba9d54f73.jpg" },
        { nome: "Hugo Souza", numero: 1, imagem: "https://i.pinimg.com/474x/52/08/5c/52085c908d791f046dec2c1b3ed0a8bb.jpg" },
        { nome: "Igor Coronado", numero: 77, imagem: "https://i.pinimg.com/736x/e2/2e/9d/e22e9d6891d2e5d88db90cbbd171011c.jpg" },
      ],
    }
  ];

  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <FlatList
          data={times}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Time {...item} />}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  timeContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  timeImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
  },
  timeNome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  timeInfo: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
  jogadoresLista: {
    marginTop: 10,
    paddingLeft: 10,
  },
  jogadorContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    width: 120,
  },
  jogadorImagem: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  jogadorNome: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  jogadorNumero: {
    fontSize: 12,
    color: '#666',
  },
});