import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function JavaScriptComponente() {
    // Lógica do Componente
  const nome = "Alee"
  const idade = 19

  function ChecarMaiorIdade(){
    console.log("Chamou a Função ChecarMaiorIdade")

    if(idade >= 18){
        return "Maior de Idade"
    }
    else{
        return "Menor de Idade"
    }
  }

  function alerta(){
    alert('Clique!')
  }

    // Retorno do JSX
  return (
    <View style={styles.container}>

      <Text style={styles.texto}>-------------------</Text>
      <Text>NOME: {nome}</Text>
      <Text>IDADE: {idade}</Text>
      <Text>Ano de Nascimento: {2025 - idade}</Text>
      <Text>18+: {ChecarMaiorIdade()}</Text>
      <Text style={styles.texto}>-------------------</Text>

      <Button title='enviar' onPress={alerta}/>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'grey',
        borderWidth: 5,
        padding: 10
    },
    texto: {
        fontSize: 20,
        fontWeight: 600
    }
})