
# App de Tarefas - React Native (com AsyncStorage, Dark Mode e Gráficos)

# Tecnologias Utilizadas:
- React Native
- React Navigation (para navegação entre telas)
- React Native Paper (UI e componentes visuais)
- AsyncStorage (armazenamento local)
- react-native-chart-kit (gráficos)
- React Context API (controle de tema - Dark Mode)
- Expo (opcional)

# Estrutura de Pastas:
src/
├── App.js
├── contexts/
│   └── ThemeContext.js
├── routes/
│   └── Routes.js
├── screens/
│   ├── HomeScreen.js
│   ├── TasksScreen.js
│   ├── TaskFormScreen.js
│   ├── ProgressScreen.js
│   └── SettingsScreen.js
└── services/
    └── storage.js

# Funcionalidades do App:
- Cadastro de tarefas com Título, Descrição, Data, Hora e Prioridade
- Edição de tarefas
- Conclusão de tarefas (sem excluir)
- Exclusão individual de tarefas
- Progresso com gráfico (concluídas vs pendentes)
- Dark Mode (preferência do usuário)
- Nome de usuário nas configurações
- Mensagem de boas-vindas na Home
- Navegação com Bottom Tab Navigator e Stack Navigator

# Dark Mode (Tema Escuro):
- Controlado via `/src/contexts/ThemeContext.js`
- Salvo no AsyncStorage
- Afeta todas as telas e o gráfico

# CRUD de Tarefas:
- Funções no `/src/services/storage.js`:
  - salvarTarefa(tarefa)
  - listarTarefas()
  - excluirTarefa(id)
  - marcarComoConcluida(id)

# Gráfico de Progresso:
- Tela: `/src/screens/ProgressScreen.js`
- Biblioteca: react-native-chart-kit
- Exibe: Concluídas vs Pendentes

# Configurações do Usuário:
- Tela: `/src/screens/SettingsScreen.js`
- Permite mudar nome e modo escuro
- Salvo no AsyncStorage

# Como Rodar o Projeto:
1. Instalar dependências:

npm install

2. Rodar o app:

npm start

3. Instalar pacotes adicionais se precisar:

npm install @react-native-async-storage/async-storage react-native-paper react-native-chart-kit @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack react-native-screens react-native-safe-area-context react-native-vector-icons
