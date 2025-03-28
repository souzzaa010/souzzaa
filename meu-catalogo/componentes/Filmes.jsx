import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Filmes(props) {

    const {nome, ano, diretor, tipo, capa} = props

  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Filmes</Text>
      
      <Text style={styles.texto}>NOME: {nome}</Text>
      <Text style={styles.texto}>ANO: {ano}</Text>
      <Text style={styles.texto}>DIRETOR: {diretor}</Text>
      <Text style={styles.texto}>TIPO: {tipo}</Text>

      <Image 
        source={{
            uri: capa
        }}
        style={{
            height: 280,
            width: 200
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'whitesmoke',
        borderWidth: 10,
        padding: 5,
        flex: 1,
        alignItems: 'center'
    },
    texto:{
        fontSize: 20,
        fontWeight: 600
    }
})