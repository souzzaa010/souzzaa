import AsyncStorage from '@react-native-async-storage/async-storage';

const TASKS_KEY = '@minhas_tarefas';

// ✅ Listar todas as tarefas
export async function listarTarefas() {
  try {
    const dados = await AsyncStorage.getItem(TASKS_KEY);
    return dados ? JSON.parse(dados) : [];
  } catch (error) {
    console.error('Erro ao listar tarefas:', error);
    return [];
  }
}

// ✅ Salvar uma nova tarefa ou atualizar uma existente
export async function salvarTarefa(novaTarefa) {
  try {
    const tarefas = await listarTarefas();

    // Se já existir, remove a antiga
    const tarefasAtualizadas = tarefas.filter((t) => t.id !== novaTarefa.id);

    // Se não tiver ID, cria um novo
    const id = novaTarefa.id || Date.now().toString();

    // Garantir que o campo "concluida" exista (se não for passado)
    const tarefaFinal = { ...novaTarefa, id, concluida: novaTarefa.concluida ?? false };

    tarefasAtualizadas.push(tarefaFinal);

    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tarefasAtualizadas));
  } catch (error) {
    console.error('Erro ao salvar tarefa:', error);
  }
}

// ✅ Excluir uma tarefa específica por ID 
export async function excluirTarefa(id) {
  try {
    const tarefas = await listarTarefas();
    const novasTarefas = tarefas.filter((t) => t.id !== id);
    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(novasTarefas));
  } catch (error) {
    console.error('Erro ao excluir tarefa:', error);
  }
}

// ✅ Marcar uma tarefa como concluída
export async function marcarComoConcluida(id) {
  try {
    const tarefas = await listarTarefas();
    const novasTarefas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return { ...tarefa, concluida: true };
      }
      return tarefa;
    });

    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(novasTarefas));
  } catch (error) {
    console.error('Erro ao marcar tarefa como concluída:', error);
  }
}

// ✅ (Opcional) Excluir todas as tarefas
export async function limparTodasTarefas() {
  try {
    await AsyncStorage.removeItem(TASKS_KEY);
  } catch (error) {
    console.error('Erro ao limpar todas as tarefas:', error);
  }
}