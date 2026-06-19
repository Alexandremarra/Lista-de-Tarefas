import { useEffect, useRef } from "react";
import {
    Animated,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Task, TaskStatus } from "../context/TaskContext";

type TaskItemProps = {
  task: Task;
  onPress: () => void;
  onDelete: () => void;
  onStatusChange: (status: TaskStatus) => void; // Nova prop para alterar o status
};

export default function TaskItem({ task, onPress, onDelete, onStatusChange }: TaskItemProps) {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 420,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  // Função auxiliar para renderizar o texto do status atual
  const renderStatusText = () => {
    if (task.status === "concluida") return "✅ concluída";
    if (task.status === "andamento") return "🚀 em andamento";
    return "🕐 pendente";
  };

  return (
    <Animated.View
      style={[
        styles.container,
        task.status === "concluida" && styles.completedContainer,
        task.status === "andamento" && styles.inProgressContainer,
        { opacity: animation },
      ]}
    >
      <TouchableOpacity 
        onPress={onPress} 
        activeOpacity={0.8} 
        style={styles.taskDetailsContainer}
      >
        <View>
          <Text style={[styles.title, task.status === "concluida" && styles.completedText]}>
            {task.title}
          </Text>
          <Text style={styles.status}>{renderStatusText()}</Text>
        </View>
      </TouchableOpacity>

      {/* Grupo de Ações (Botões Laterais) */}
      <View style={styles.actionsContainer}>
        {task.status !== "concluida" && (
          <>
            {/* Botão Em Andamento */}
            {task.status !== "andamento" && (
              <TouchableOpacity 
                onPress={() => onStatusChange("andamento")} 
                style={[styles.actionButton, styles.progressButton]}
              >
                <Text>⏳</Text>
              </TouchableOpacity>
            )}
            
            {/* Botão Concluir */}
            <TouchableOpacity 
              onPress={() => onStatusChange("concluida")} 
              style={[styles.actionButton, styles.checkButton]}
            >
              <Text>✅</Text>
            </TouchableOpacity>
          </>
        )}

        {/* Botão Deletar */}
        <TouchableOpacity onPress={onDelete} style={[styles.actionButton, styles.deleteButton]}>
          <Text>🗑️</Text>
        </TouchableOpacity>
      </View>
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
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "space-between",
  },
  taskDetailsContainer: {
    flex: 1,
    marginRight: 8,
  },
  completedContainer: {
    opacity: 0.6,
    backgroundColor: "#f4f8fb",
  },
  inProgressContainer: {
    borderColor: "#3b82f6", // Borda azul para destacar o andamento
    backgroundColor: "#eff6ff",
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
    fontWeight: "600",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#7b8d9e",
  },
  actionsContainer: {
    flexDirection: "row",
    gap: 6,
  },
  actionButton: {
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  progressButton: { backgroundColor: "#fef3c7" }, // Amarelo claro
  checkButton: { backgroundColor: "#dcfce7" },    // Verde claro
  deleteButton: { backgroundColor: "#fee2e2" },   // Vermelho claro
});