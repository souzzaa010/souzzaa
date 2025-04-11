import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, Card, Title, Paragraph } from 'react-native-paper'
import React from 'react'

export default function EscudoScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text variant='headlineSmall' style={styles.titulo}>Clube Regatas do Flamengo</Text>

        <Card style={{ margin:10 }}>
            <Card.Content>
                <Title>Primeiro Escudo (1895)</Title>
                <Paragraph>
                O primeiro escudo do Flamengo foi desenhado para o remo, esporte responsável pelo nascimento do clube no final do século XIX. Quando o futebol começou a fazer parte dessa estrutura, desenvolveram um segundo escudo. Eles sofreram alterações no decorrer do tempo, mas não teriam evoluído de um escudo para o outro.
                </Paragraph>
            </Card.Content>
            <Card.Cover style={{height: '400'}} source={{uri: 'https://i.pinimg.com/736x/35/1e/e5/351ee5a6298a2b3bf77f12194da38bc7.jpg'}} />
        </Card>

        <Card style={{ margin:10 }}>
            <Card.Content>
                <Title>Escudo Atual (1981)</Title>
                <Paragraph>As cores do Flamengo são o vermelho e o preto. O vermelho representa paixão, energia e amor pelo time, enquanto o preto simboliza força, determinação e garra.</Paragraph>
                
                <Paragraph>
                O Flamengo tem dois mascotes oficiais: o Urubão e o Binho. O Urubão representa a garra da equipe, enquanto o Binho é uma versão voltada para o público infantil.</Paragraph>
            </Card.Content>
            <Card.Cover style={{height: '410'}} source={{ uri: 'https://i.pinimg.com/736x/0d/15/7f/0d157f0d183f0ed1e4309167792447ff.jpg'}} />
        </Card>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'black'
  },
  titulo:{
    color:'white',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})