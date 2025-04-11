import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, Card, Title, Paragraph } from 'react-native-paper'
import React from 'react'

export default function TituloScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text variant='headlineSmall' style={styles.titulo}>Titulos</Text>

        <Card style={{ margin:10 }}>
            <Card.Content>
                <Title style={{ textAlign: 'center'}}>Campeonato Brasileiro</Title>
                <Paragraph></Paragraph>
                <Paragraph style={styles.infos}>Campeões nos Anos:</Paragraph>
                <Paragraph>
                    1980, 1982, 1983, 1992, 2009, 2019, 2020
                </Paragraph>
            </Card.Content>
            <Card.Cover style={{height: 400}} source={{uri: 'https://i.pinimg.com/736x/5d/df/2f/5ddf2fcc4d7b73f6bcd245776f642112.jpg'}} />
        </Card>

        <Card style={{ margin:10 }}>
            <Card.Content>
                <Title style={{ textAlign: 'center'}}>Copa Libertadores da América</Title>
                <Paragraph></Paragraph>
                <Paragraph style={styles.infos}>Campeões nos Anos:</Paragraph>
                <Paragraph>1981, 2019, 2022</Paragraph>
            </Card.Content>
            <Card.Cover style={{height: 400}} source={{ uri: 'https://i.pinimg.com/736x/40/a2/9b/40a29b600497737cce7010d0af0d8289.jpg'}} />
        </Card>

        <Card style={{ margin:10 }}>
            <Card.Content>
                <Title style={{ textAlign: 'center'}}>Copa do Brasil</Title>
                <Paragraph></Paragraph>
                <Paragraph style={styles.infos}>Campeões nos Anos:</Paragraph>
                <Paragraph>1990, 2006, 2013, 2022, 2024</Paragraph>
            </Card.Content>
            <Card.Cover style={{height: 300}} source={{ uri: 'https://i.pinimg.com/736x/61/99/53/6199539237ea95e92ffd588174e503fb.jpg'}} />
        </Card>

        <Card style={{ margin:10 }}>
            <Card.Content>
                <Title style={{ textAlign: 'center'}}>Supercopa do Brasil</Title>
                <Paragraph></Paragraph>
                <Paragraph style={styles.infos}>Campeões nos Anos:</Paragraph>
                <Paragraph>2020, 2021, 2025</Paragraph>
            </Card.Content>
            <Card.Cover style={{height: 390}} source={{ uri: 'https://i.pinimg.com/736x/88/66/f6/8866f6a0a1605236e3a2e74e40c6b432.jpg'}} />
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
        textAlign: 'center',
        fontWeight: 'bold',
        color:'white'
    },
    infos:{
        fontWeight:'600'
    }
})