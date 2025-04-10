import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, Card, Title, Paragraph } from 'react-native-paper'
import React from 'react'

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>Início</Text>

        <Card style={{ margin:10 }}>
            <Card.Content>
                <Title>Titulo</Title>
                <Paragraph>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700'}} />
        </Card>

        <Card style={{ margin:10 }}>
            <Card.Content>
                <Title>Titulo</Title>
                <Paragraph>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700'}} />
        </Card>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'fff',
        flex: 1,
        alignItems: 'center',
    }
})