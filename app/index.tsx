import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Share,
    Alert,
} from "react-native";
import { RootStackParamList } from "../App"; 

import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import TaskItem from "../components/TaskItem";
import { Task, useTaskContext } from "../context/TaskContext";
type Props = StackScreenProps<RootStackParamList, "Home">;

export default function IndexScreen({ navigation }: Props) {
  const { tasks, deleteTask, updateStatus } = useTaskContext(); 

  const completedCount = tasks.filter((task) => task.status === "concluida").length;
  const inProgressCount = tasks.filter((task) => task.status === "andamento").length;
  const pendingCount = tasks.filter((task) => task.status === "pendente").length;
  
  const progress = tasks.length ? completedCount / tasks.length : 0;

  const handleShareList = async () => {
    try {
      const message = `📋 Minha Lista de Tarefas de Hoje:\n\n` +
        `⏳ Pendentes: ${pendingCount}\n` +
        `🔄 Em andamento: ${inProgressCount}\n` +
        `✅ Concluídas: ${completedCount}\n\n` +
        `Falta pouco para atingir a meta do dia! 🚀`;

      await Share.share({
        message: message,
      });
    } catch (error) {
      Alert.alert("Erro", "Não foi possível compartilhar a lista.");
    }
  };

  return (
    <View style={styles.safe}>
      {/* Container horizontal para alinhar a Navbar e o Compartilhar em linha reta */}
      <View style={styles.navbarRow}>
        <View style={styles.navbarWrapper}>
          <Navbar
            title="Minhas Tarefas"
            actionLabel="INFO"
            onActionPress={() => navigation.navigate("Info")}
          />
        </View>
        
        <TouchableOpacity style={styles.navShareButton} onPress={handleShareList}>
          <Text style={styles.navShareText}>COMPARTILHAR</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <View style={styles.summaryCard}>
          <View style={styles.summaryHeader}>
            <Text style={styles.summaryTitle}>Resumo do dia</Text>
            <Text style={styles.summarySubtitle}>
              {pendingCount} Em Progresso. | {inProgressCount} Em andamento. | {completedCount} Concluida.
            </Text>
          </View>
          <Text style={styles.summaryNote}>
            Organize seu fluxo com clareza e foco no que realmente importa.
          </Text>
          <View style={styles.progressBarBackground}>
            <View
              style={[styles.progressBarFill, { width: `${progress * 100}%` }]}
            />
          </View>
        </View>

        <Text style={styles.counter}>
          Toque em uma tarefa para ver detalhes
        </Text>
        
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onPress={() => navigation.navigate("TaskDetails", { taskId: item.id })}
              onDelete={() => deleteTask(item.id)} 
              onStatusChange={(newStatus) => updateStatus(item.id, newStatus)}
            />
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Nenhuma tarefa encontrada.</Text>
          }
        />
      </View>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("AddTask")}
      >
        <Text style={styles.fabLabel}>＋ Nova Tarefa</Text>
      </TouchableOpacity>
      
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#eceff4",
    paddingBottom: 100,
  },
  navbarRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2f343d", // Altere para a cor de fundo da sua Navbar para ficar uniforme
    paddingRight: 16,
  },
  navbarWrapper: {
    flex: 1,
  },
  navShareButton: {
    backgroundColor: "#4b5563",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginLeft: 8,
  },
  navShareText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "700",
  },
  content: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 16,
  },
  summaryCard: {
    backgroundColor: "#f7f8fa",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#d7d9dd",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  summaryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  summaryTitle: {
    color: "#2c3e50",
    fontSize: 16,
    fontWeight: "700",
  },
  summarySubtitle: {
    color: "#2f7d35",
    fontSize: 13,
    fontWeight: "700",
  },
  progressBarBackground: {
    width: "100%",
    height: 10,
    backgroundColor: "#dfe2e7",
    borderRadius: 8,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#2f7d35",
    borderRadius: 8,
  },
  counter: {
    color: "#2f343d",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 16,
  },
  summaryNote: {
    color: "#5d6570",
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 18,
  },
  list: {
    paddingBottom: 30,
  },
  emptyText: {
    color: "#95a5a6",
    fontSize: 16,
    textAlign: "center",
    marginTop: 24,
  },
  fab: {
    position: "absolute",
    right: 18,
    bottom: 100,
    backgroundColor: "#4b5563",
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  fabLabel: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },
});