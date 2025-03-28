import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Series(props) {
    
    const {nome, ano, diretor, temporadas, capa} = props

    return (
      <View style={styles.container}>
  
        <Text style={styles.texto}>Series</Text>
        
        <Text style={styles.texto}>NOME: {nome}</Text>
        <Text style={styles.texto}>ANO: {ano}</Text>
        <Text style={styles.texto}>DIRETOR: {diretor}</Text>
        <Text style={styles.texto}>TEMPORADAS: {temporadas}</Text>
  
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
      alignItems: 'center'
  },
  texto:{
      fontSize: 20,
      fontWeight: 600
  }
})