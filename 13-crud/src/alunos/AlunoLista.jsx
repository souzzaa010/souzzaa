import React, { useState } from 'react'
import { Card, Button } from 'react-native-paper'
import { Text } from 'react-native-paper'
import { FlatList } from 'react-native'

export default function AlunoLista(navigation) {

    const [alunos, setAlunos] = useState([
        {
            id: '1',
            nome: 'Gustavo',
            cpf: '000.000.000-00',
            email: 'fulano@gmail.com',
            telefone: '(61)90000-0000',
            dataNascimento: '02/02/2000'
        },
        {
            id: '2',
            nome: 'Fernandin',
            cpf: '001.001.001-10',
            email: 'fulanodetal@gmail.com',
            telefone: '(61)88000-0000',
            dataNascimento: '01/01/2001'
        }
    ])

  return (
    <View>
      <Button
        style={{ margin: 10 }}
        mode='contained'
        icon='plus'
        onPress={() => navigation.navigate('AlunoForm')}
      >
        Cadastrar
      </Button>

      <FlatList 
        data={alunos}
        renderItem={({ item }) => (
        <Card style={{ margin:10 }}>
            <Card.Content>
                <Text> ID: {item.id}</Text>
                <Text>Nome: {item.nome}</Text>
                <Text>CPF: {item.cpf}</Text>
            </Card.Content>

            <Card.Actions>
                <Button icon='pencil'>Editar</Button>
                <Button icon='delete'>Excluir</Button>
            </Card.Actions>
        </Card>
        )}
      />
    </View>
  )
}
