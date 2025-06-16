import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import { FAB, Button, Card } from 'react-native-paper';
import { listarTarefas, excluirTarefa, marcarComoConcluida } from '../services/storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { ThemeContext } from '../contexts/ThemeContext';

export default function TasksScreen() {
  const [tarefas, setTarefas] = useState([]);
  const navigation = useNavigation();
  const { darkMode } = useContext(ThemeContext);

  async function carregarTarefas() {
    const dados = await listarTarefas();
    setTarefas(dados);
  }

  async function concluirTarefa(id) {
    await marcarComoConcluida(id);
    carregarTarefas();
  }

  async function excluirTarefaIndividual(id) {
    Alert.alert('Excluir', 'Deseja excluir esta tarefa?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          await excluirTarefa(id);
          carregarTarefas();
        },
      },
    ]);
  }

  useFocusEffect(
    React.useCallback(() => {
      carregarTarefas();
    }, [])
  );

  const styles = getStyles(darkMode);

  const corPrioridade = (prioridade) => {
    if (prioridade === 'Alta') return '#ff6b6b';
    if (prioridade === 'Média') return '#feca57';
    if (prioridade === 'Baixa') return '#1dd1a1';
    return darkMode ? '#fff' : '#000';
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title
        title={item.titulo}
        subtitle={`Prioridade: ${item.prioridade}`}
        titleStyle={{ color: corPrioridade(item.prioridade) }}
      />
      <Card.Content>
        <Text style={styles.text}>Descrição: {item.descricao}</Text>
        <Text style={styles.text}>Data: {item.data} | Hora: {item.hora}</Text>
        <Text style={styles.text}>
          Status: {item.concluida ? '✅ Concluída' : '❌ Pendente'}
        </Text>
      </Card.Content>
      <Card.Actions>
        {!item.concluida && (
          <Button onPress={() => concluirTarefa(item.id)}>Concluir</Button>
        )}
        <Button onPress={() => navigation.navigate('TaskForm', { task: item })}>
          Editar
        </Button>
        <Button onPress={() => excluirTarefaIndividual(item.id)} color="red">
          Excluir
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      {tarefas.length === 0 ? (
        <Text style={[styles.text, { textAlign: 'center', marginTop: 20 }]}>
          Nenhuma tarefa cadastrada.
        </Text>
      ) : (
        <FlatList data={tarefas} keyExtractor={(item) => item.id} renderItem={renderItem} />
      )}

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate('TaskForm')}
        color="white"
      />
    </View>
  );
}

function getStyles(darkMode) {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: darkMode ? '#121212' : '#fff',
    },
    text: {
      color: darkMode ? '#fff' : '#000',
      marginBottom: 4,
    },
    card: {
      marginBottom: 12,
      backgroundColor: darkMode ? '#1e1e1e' : '#f9f9f9',
    },
    fab: {
      position: 'absolute',
      right: 16,
      bottom: 16,
      backgroundColor: darkMode ? '#BB86FC' : '#6200ee',
    },
  });
}