import React from 'react';
import { Card, Text, Button } from 'react-native-paper';
import { View } from 'react-native';

export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <Card style={{ marginVertical: 6 }}>
      <Card.Title title={task.titulo} subtitle={`Prioridade: ${task.prioridade}`} />
      <Card.Content>
        <Text>{task.descricao}</Text>
        <Text style={{ marginTop: 8 }}>Data: {task.data}</Text>
        <Text>Hora: {task.hora}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => onEdit(task)}>Editar</Button>
        <Button onPress={() => onDelete(task.id)}>Excluir</Button>
      </Card.Actions>
    </Card>
  );
}