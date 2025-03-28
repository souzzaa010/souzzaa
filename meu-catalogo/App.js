import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Filmes from './componentes/Filmes';
import Series from './componentes/Series';

export default function App() {

  const listaFilmes = [
    {
    nome: "A Doce Vida",
    ano: 1960,
    diretor: "Federico Fellini",
    tipo: "Drama",
    capa: 'https://i.pinimg.com/736x/f3/c6/1c/f3c61cedf30d5212ba7a6885a55c71fc.jpg'
    },
    {
    nome: "Psicose",
    ano: 1960,
    diretor: "Alfred Hitchcock",
    tipo: "Terror",
    capa: 'https://i.pinimg.com/736x/ac/57/a5/ac57a5bdafcc3754e5b62a1106f69f57.jpg'
    },
    {
    nome: "O Beijo da Mulher Aranha",
    ano: 1985,
    diretor: "Hector Babenco",
    tipo: "Drama",
    capa: 'https://i.pinimg.com/736x/81/df/25/81df2507a0729a6f38b54c8e4e6632b9.jpg'
    },
    {
    nome: "Poltergeist - O Fenômeno",
    ano: 1982,
    diretor: "Tobe Hooper",
    tipo: "Terror",
    capa: 'https://i.pinimg.com/736x/41/c5/f8/41c5f886f05c25d435723dea1a94f165.jpg'
    }
    
    ];

    
    const listaSeries = [
    {
    nome: "Buffy, a Caça-Vampiros",
    ano: 1997,
    diretor: "Joss Whedon",
    temporadas: 7,
    capa: 'https://i.pinimg.com/736x/da/71/74/da71743ddd8f1cc98fa0565215919275.jpg'
    },
    {
    nome: "Desperate Housewives",
    ano: 2004,
    diretor: "Marc Cherry",
    temporadas: 8,
    capa: 'https://i.pinimg.com/736x/15/cc/88/15cc8856eb29f92689dd1268077db45e.jpg'
    },
    {
    nome: "Sons of Anarchy",
    ano: 2008,
    diretor: "Kurt Sutter",
    temporadas: 7,
    capa: 'https://i.pinimg.com/736x/0b/d0/21/0bd0217b70f03276beff9132833e8305.jpg'
    }
    ];

  return (
    <ScrollView>

      <View style={styles.container}>

        <StatusBar style="auto" />

        {listaFilmes.map(
          Filme => {
            return(
              <Filmes 
                nome={Filme.nome}
                ano={Filme.ano}
                diretor={Filme.diretor}
                tipo={Filme.tipo}
                capa={Filme.capa}
              />
            )
          }
        )}

        {listaSeries.map(
          Serie => {
            return(
              <Series 
                nome={Serie.nome}
                ano={Serie.ano}
                diretor={Serie.diretor}
                temporadas={Serie.temporadas}
                capa={Serie.capa}

                style
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
