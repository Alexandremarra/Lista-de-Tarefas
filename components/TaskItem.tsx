import { useEffect, useRef } from "react";
import {
    Animated,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Task } from "../context/TaskContext";

type TaskItemProps = {
  task: Task;
  onPress: () => void;
  onDelete: () => void; // Adicionado para receber a função de exclusão
};

export default function TaskItem({ task, onPress, onDelete }: TaskItemProps) {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 420,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  return (
    <Animated.View
      style={[
        styles.container,
        task.completed && styles.completedContainer,
        {
          opacity: animation,
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [16, 0],
              }),
            },
          ],
        },
      ]}
    >
      {/* Lado esquerdo: Informações da tarefa (clicável para ver detalhes) */}
      <TouchableOpacity 
        onPress={onPress} 
        activeOpacity={0.8} 
        style={styles.taskDetailsContainer}
      >
        <View>
          <Text style={[styles.title, task.completed && styles.completedText]}>
            {task.title}
          </Text>
          <Text
            style={[
              styles.status,
              task.completed ? styles.completedText : styles.pendingText,
            ]}
          >
            {task.completed ? "✅ concluída" : "🕐 pendente"}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Lado direito: Botão de Deletar */}
      <TouchableOpacity 
        onPress={onDelete} 
        activeOpacity={0.7} 
        style={styles.deleteButton}
      >
        <Text style={styles.deleteButtonText}>🗑️</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#dde5eb",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
    // Garante que os textos e o botão fiquem lado a lado horizontalmente
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "space-between",
  },
  taskDetailsContainer: {
    flex: 1, // Faz os textos ocuparem todo o espaço disponível, empurrando o botão para a ponta
    marginRight: 12,
  },
  completedContainer: {
    opacity: 0.72,
    backgroundColor: "#f4f8fb",
  },
  title: {
    color: "#2b323d",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
  },
  status: {
    fontSize: 13,
    color: "#59646f",
  },
  pendingText: {
    color: "#626d7a",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#7b8d9e",
  },
  deleteButton: {
    backgroundColor: "#fee2e2", // Um fundo vermelho bem clarinho (estilo tailwind red-100)
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButtonText: {
    fontSize: 16,
  },
});