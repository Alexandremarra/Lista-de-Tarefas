import { StackScreenProps } from "@react-navigation/stack";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { RootStackParamList } from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import { useTaskContext } from "../context/TaskContext";

type Props = StackScreenProps<RootStackParamList, "TaskDetails">;

export default function TaskDetailsScreen({ navigation, route }: Props) {
  const { taskId } = route.params;
  const { getTaskById, toggleTask } = useTaskContext();
  const task = getTaskById(taskId);

  if (!task) {
    return (
      <View style={styles.safe}>
        <Navbar title="Detalhes" />
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Tarefa não encontrada.</Text>
          <TouchableOpacity
            style={styles.outlineButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.outlineButtonText}>Voltar para Home</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </View>
    );
  }

  return (
    <View style={styles.safe}>
      <Navbar title="Detalhes" onBackPress={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Título</Text>
        <Text style={styles.value}>{task.title}</Text>

        <Text style={styles.label}>Descrição</Text>
        <Text style={styles.value}>{task.description || "Sem descrição"}</Text>

        <Text style={styles.label}>Status</Text>
        <Text
          style={[
            styles.value,
            task.completed ? styles.completedText : styles.pendingText,
          ]}
        >
          {task.completed ? "Concluída" : "Pendente"}
        </Text>

        <TouchableOpacity
          style={[styles.button, task.completed && styles.pendingButton]}
          onPress={() => toggleTask(task.id)}
        >
          <Text style={styles.buttonText}>
            {task.completed ? "Marcar como Pendente" : "Marcar como Concluída"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.outlineButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.outlineButtonText}>Voltar para Home</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#eceff4",
    paddingBottom: 90,
  },
  container: {
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 30,
  },
  label: {
    color: "#2b323d",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 8,
  },
  value: {
    backgroundColor: "#f7f8fa",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#d3d7dd",
    padding: 16,
    color: "#2b323d",
    fontSize: 15,
    marginBottom: 16,
  },
  completedText: {
    color: "#4a6550",
  },
  pendingText: {
    color: "#6f767f",
  },
  button: {
    backgroundColor: "#4b5563",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 12,
  },
  pendingButton: {
    backgroundColor: "#6f767f",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  outlineButton: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#4b5563",
    paddingVertical: 14,
    alignItems: "center",
  },
  outlineButtonText: {
    color: "#4b5563",
    fontSize: 16,
    fontWeight: "700",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 40,
  },
  emptyText: {
    color: "#2b323d",
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
});
