import { StackScreenProps } from "@react-navigation/stack";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

type Props = StackScreenProps<RootStackParamList, "Info">;

export default function InfoScreen({ navigation }: Props) {
  return (
    <View style={styles.safe}>
      <Navbar title="Info" onBackPress={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Como funciona</Text>
        <Text style={styles.description}>
          Esse app de lista de tarefas ajuda você a organizar o dia com passos
          simples e visuais. Crie tarefas, acompanhe o progresso e marque as
          atividades concluídas com apenas um toque.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>1. Adicione uma tarefa</Text>
          <Text style={styles.cardText}>
            Toque em "Nova Tarefa" e informe o título e os detalhes. Use a
            descrição para lembrar de prazos e prioridades.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>2. Visualize o progresso</Text>
          <Text style={styles.cardText}>
            O painel inicial mostra quantas tarefas estão pendentes e
            concluídas. Quanto mais você marca como concluída, mais o progresso
            aumenta.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>3. Toque para ver detalhes</Text>
          <Text style={styles.cardText}>
            Abra qualquer tarefa para ver descrição completa e alterar o status
            entre pendente e concluída.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>4. Mantenha o foco</Text>
          <Text style={styles.cardText}>
            Use o app diariamente para manter a sua rotina organizada e reduzir
            o estresse. Atualize as tarefas conforme elas avançam.
          </Text>
        </View>
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
    paddingBottom: 40,
  },
  title: {
    color: "#2b323d",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 12,
  },
  description: {
    color: "#5c6772",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f7f8fa",
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#d7d9dd",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  cardTitle: {
    color: "#323d49",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
  },
  cardText: {
    color: "#5c6772",
    lineHeight: 21,
    fontSize: 14,
  },
});
