import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil(props) {

    console.log(props)

  return (
    <View>
      <Text>Perfil</Text>
      <Text>Nome: {props.nome}</Text>
      <Text>Nome: {props.idade}</Text>
      <Text>Nome: {props.sobrenome}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})