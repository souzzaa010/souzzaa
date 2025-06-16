import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { useIsFocused } from '@react-navigation/native';
import { listarTarefas } from '../services/storage';
import { ThemeContext } from '../contexts/ThemeContext';

const screenWidth = Dimensions.get('window').width;

export default function ProgressScreen() {
  const [tarefas, setTarefas] = useState([]);
  const isFocused = useIsFocused();
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    carregarTarefas();
  }, [isFocused]);

  const carregarTarefas = async () => {
    const todas = await listarTarefas();
    setTarefas(todas || []);
  };

  const tarefasConcluidas = tarefas.filter(t => t.concluida).length;
  const tarefasPendentes = tarefas.length - tarefasConcluidas;

  const chartData = [
    {
      name: 'Concluídas',
      population: tarefasConcluidas,
      color: '#4CAF50',
      legendFontColor: darkMode ? '#fff' : '#333',
      legendFontSize: 14,
    },
    {
      name: 'Pendentes',
      population: tarefasPendentes,
      color: '#F44336',
      legendFontColor: darkMode ? '#fff' : '#333',
      legendFontSize: 14,
    },
  ];

  const chartConfig = {
    color: () => (darkMode ? '#fff' : '#000'),
    labelColor: () => (darkMode ? '#fff' : '#000'),
    backgroundColor: 'transparent',
    backgroundGradientFrom: darkMode ? '#121212' : '#fff',
    backgroundGradientTo: darkMode ? '#121212' : '#fff',
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: darkMode ? '#121212' : '#fff',
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      color: darkMode ? '#fff' : '#000',
      marginBottom: 20,
      textAlign: 'center',
    },
    textoInfo: {
      fontSize: 16,
      color: darkMode ? '#ccc' : '#666',
      textAlign: 'center',
    },
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Progresso das Tarefas</Text>

      {tarefas.length === 0 ? (
        <Text style={styles.textoInfo}>Nenhuma tarefa cadastrada.</Text>
      ) : (
        <PieChart
          data={chartData}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="10"
          absolute
        />
      )}
    </ScrollView>
  );
}