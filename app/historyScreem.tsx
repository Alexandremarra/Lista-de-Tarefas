// import React from "react";
// import {
//     FlatList,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     View,
//     Alert,
// } from "react-native";
// import { useRouter } from "expo-router"; // Hook correto do Expo Router

// import Navbar from "../components/navbar";
// import Footer from "../components/Footer";
// import TaskItem from "../components/TaskItem"; 
// import { useTaskContext } from "../context/TaskContext";

// export default function HistoryScreen() {
//   const router = useRouter(); // Ativa o roteador
//   const { deletedTasks, restoreTask, permanentlyDeleteTask } = useTaskContext(); 

//   const handleRestore = (id: string) => {
//     restoreTask(id);
//     Alert.alert("Sucesso", "Tarefa restaurada com sucesso!");
//   };

//   const handlePermanentDelete = (id: string) => {
//     Alert.alert(
//       "Aviso", 
//       "Tem certeza que deseja apagar permanentemente?", 
//       [
//         { text: "Cancelar", style: "cancel" },
//         { text: "Excluir", style: "destructive", onPress: () => permanentlyDeleteTask(id) }
//       ]
//     );
//   };

//   return (
//     <View style={styles.safe}>
//       <View style={styles.navbarRow}>
//         <Navbar
//           title="Histórico de Apagadas"
//           actionLabel="VOLTAR"
//           onActionPress={() => router.back()} // Volta de tela nativamente no Expo Router
//         />
//       </View>
      
//       <View style={styles.content}>
//         <View style={styles.infoCard}>
//           <Text style={styles.infoTitle}>Lixeira</Text>
//           <Text style={styles.infoSubtitle}>
//             As tarefas listadas aqui foram excluídas. Você pode restaurá-las para a tela principal a qualquer momento.
//           </Text>
//         </View>

//         <FlatList
//           data={deletedTasks}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.itemContainer}>
//               <TaskItem
//                 task={item}
//                 onPress={() => {}} 
//                 onDelete={() => handlePermanentDelete(item.id)} 
//                 onStatusChange={() => {}} 
//               />
              
//               <TouchableOpacity 
//                 style={styles.restoreButton} 
//                 onPress={() => handleRestore(item.id)}
//               >
//                 <Text style={styles.restoreButtonText}>↩ Restaurar Tarefa</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//           contentContainerStyle={styles.list}
//           showsVerticalScrollIndicator={false}
//           ListEmptyComponent={
//             <Text style={styles.emptyText}>Nenhuma tarefa na lixeira.</Text>
//           }
//         />
//       </View>
      
//       <Footer />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   safe: { flex: 1, backgroundColor: "#eceff4", paddingBottom: 100 },
//   navbarRow: { backgroundColor: "#232730" },
//   content: { flex: 1, paddingHorizontal: 18, paddingTop: 16 },
//   infoCard: { backgroundColor: "#f7f8fa", borderRadius: 18, padding: 18, borderWidth: 1, borderColor: "#d7d9dd", marginBottom: 20 },
//   infoTitle: { color: "#2c3e50", fontSize: 16, fontWeight: "700", marginBottom: 6 },
//   infoSubtitle: { color: "#7f8c8d", fontSize: 13, lineHeight: 18 },
//   list: { paddingBottom: 30 },
//   itemContainer: { marginBottom: 16, backgroundColor: "#ffffff", borderRadius: 12, overflow: "hidden", borderWidth: 1, borderColor: "#e2e8f0" },
//   restoreButton: { backgroundColor: "#2f7d35", paddingVertical: 8, alignItems: "center", justifyContent: "center" },
//   restoreButtonText: { color: "#ffffff", fontSize: 13, fontWeight: "700" },
//   emptyText: { color: "#95a5a6", fontSize: 16, textAlign: "center", marginTop: 40 },
// });