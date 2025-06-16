import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-native-paper'
import { Text } from 'react-native-paper'
import { FlatList, StyleSheet, View } from 'react-native'
import AlunosService from './AlunosService'

export default function AlunoLista(navigation) {

    const [alunos, setAlunos] = useState([])

    useEffect(() => {
      AlunosService.listar()
    },
    []
  )

  async function buscarAlunos() {
    const ListaAlunos = await AlunosService.listar()
    setAlunos (ListaAlunos)
  }


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
                <Button icon='pencil' onPress={() => navigation.navigate()}>Editar</Button>
                <Button icon='delete'onPress={{}}>Excluir</Button>
            </Card.Actions>
        </Card>
        )}
      />
    </View>
  )
}
