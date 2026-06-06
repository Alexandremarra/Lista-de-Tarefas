# Lista de Tarefas

Aplicativo de tarefas em React Native usando Expo.

## Funcionalidades

- Adicionar nova tarefa com título e descrição
- Listar tarefas com status pendente ou concluída
- Tela de detalhes da tarefa
- Marcar tarefa como concluída ou pendente
- Navegação entre telas com React Navigation Stack
- Layout responsivo com `FlatList`, `ScrollView`, `TouchableOpacity`, `TextInput`, `StyleSheet` e componentes nativos do React Native

## Estrutura do projeto

- `App.tsx` — entrypoint do app com `NavigationContainer` e `Stack.Navigator`
- `app/index.tsx` — tela principal com lista de tarefas
- `app/add-task.tsx` — tela para adicionar tarefa
- `app/task-details.tsx` — tela de detalhes da tarefa
- `context/TaskContext.tsx` — contexto global de tarefas
- `components/Navbar.tsx` — cabeçalho em todas as telas
- `components/Footer.tsx` — rodapé fixo
- `components/TaskItem.tsx` — item da lista de tarefas

## Rodando o app

1. Instale as dependências:

```bash
npm install
```

2. Inicie o Expo:

```bash
npm start
```

3. Abra no emulador ou em um dispositivo físico.

## Observações

- O app usa `@react-navigation/native` e `@react-navigation/stack` para navegação de telas.
- O estado das tarefas é gerenciado globalmente via `TaskContext`.
