import { View, Text } from 'react-native'
import React from 'react'

export default function JavascriptComponente() {
  const nome = 'Alee'
  const idade = 19

  function exibirNome(){
    return nome
  }

  function maiorIdade(){
    if(idade >= 18){
        return "Maior de Idade"
    }
    else{
        return "Menor de Idade"
    }
  }

  return (
    <View>
      <Text>JavascriptComponente</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Nome: {exibirNome()}</Text>
      <Text>Resultado: {25 + 31}</Text>
      <Text>{idade + 20}</Text>
      <Text>Checagem 18+: {maiorIdade()}</Text>
      <Text>Checagem 18+: {idade >= 18 ? "Maior de idade" : "Menor de Idade"}</Text>
    </View>
  )
}