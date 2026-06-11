import { StackScreenProps } from "@react-navigation/stack";
import { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { RootStackParamList } from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import { useTaskContext } from "../context/TaskContext";

type Props = StackScreenProps<RootStackParamList, "AddTask">;

export default function AddTaskScreen({ navigation }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addTask } = useTaskContext();

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert("Atenção", "O título é obrigatório.");
      return;
    }

    addTask(title.trim(), description.trim());
    navigation.goBack();
  };

  return (
    <View style={styles.safe}>
      <Navbar title="Nova Tarefa" onBackPress={() => navigation.goBack()} />
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Digite o título"
          placeholderTextColor="#95a5a6"
        />

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.multiline]}
          value={description}
          onChangeText={setDescription}
          placeholder="Detalhes da tarefa"
          placeholderTextColor="#95a5a6"
          multiline
          numberOfLines={4}
        />

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Salvar Tarefa</Text>
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
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#f7f8fa",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#d3d7dd",
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: "#2b323d",
    marginBottom: 18,
  },
  multiline: {
    minHeight: 120,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#4b5563",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
