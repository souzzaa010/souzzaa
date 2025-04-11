import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, Card, Title, Paragraph } from 'react-native-paper'
import React from 'react'


export default function JogadoresScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text variant='headlineSmall' style={styles.titulo}>Jogadores Principais</Text>

        <Card style={{ margin:10 }}>
            <Card.Content>
                <Title>Bruno Henrique Pinto</Title>
                <Paragraph>
                  É um futebolista brasileiro que atua como atacante. 
                </Paragraph>
                <Paragraph>
                Nasceu no dia 30 de dezembro de 1990 (idade 34 anos), em Belo Horizonte - Minas Gerais.
                </Paragraph>
            </Card.Content>
            <Card.Cover style={{height: '410'}} source={{ uri: 'https://i.pinimg.com/736x/24/f7/5d/24f75d5896eb7ae87625ca14831cd588.jpg'}} />
        </Card>

        <Card style={{ margin:10 }}>
            <Card.Content>
                <Title>Giorgian Daniel De Arrascaeta</Title>
                <Paragraph>
                 É um futebolista uruguaio que atua como meio-campista. Atualmente, defende o Flamengo e a Seleção Uruguaia.
                </Paragraph>
                <Paragraph>Nasceu dia 1 de junho de 1994 (idade 30 anos), em Nuevo Berlín - Uruguai</Paragraph>
            </Card.Content>
            <Card.Cover style={{height: '410'}} source={{ uri: 'https://i.pinimg.com/736x/eb/d7/a1/ebd7a1f5d8d7c474e863c5e870483c7d.jpg'}} />
        </Card>

        <Card style={{ margin:10 }}>
            <Card.Content>
                <Title>Wesley Vinícius França Lima</Title>
                <Paragraph>
                É um futebolista brasileiro que atua como lateral-direito. Atualmente joga pelo Flamengo.
                </Paragraph>
                <Paragraph>Nasceu dia 6 de setembro de 2003 (idade 21 anos), em Açailândia - Maranhão</Paragraph>
            </Card.Content>
            <Card.Cover style={{height: '410'}} source={{ uri: 'https://i.pinimg.com/736x/18/b8/82/18b8825e266ea8a21b58d686630eaf8b.jpg'}} />
        </Card>

        <Card style={{ margin:10 }}>
            <Card.Content>
                <Title>Erick Pulgar</Title>
                <Paragraph>
                é um futebolista chileno que atua como volante. Atualmente, defende o Flamengo e a Seleção Chilena.
                </Paragraph>
                <Paragraph>Nasceu dia 15 de janeiro de 1994 (idade 31 anos), no Antofagasta - Chile</Paragraph>
            </Card.Content>
            <Card.Cover style={{height: '410'}} source={{ uri: 'https://i.pinimg.com/736x/96/4f/52/964f5293c0bc3a51df0bbc1e307fafce.jpg'}} />
        </Card>

        <Card style={{ margin:10 }}>
            <Card.Content>
                <Title>Gerson Santos da Silva</Title>
                <Paragraph>
                É um futebolista brasileiro que atua como meio-campista. Atualmente, defende o Flamengo.
                </Paragraph>
                <Paragraph>Nasceu dia 20 de maio de 1997 (idade 27 anos), em Belford Roxo - Rio de Janeiro</Paragraph>
            </Card.Content>
            <Card.Cover style={{height: '410'}} source={{ uri: 'https://i.pinimg.com/736x/18/0c/75/180c75acb8895fd01edb19922678fe57.jpg'}} />
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
      }
})