import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AddTaskScreen from "./app/add-task";
import HomeScreen from "./app/index";
import InfoScreen from "./app/info";
import TaskDetailsScreen from "./app/task-details";
import { TaskProvider } from "./context/TaskContext";

export type RootStackParamList = {
  Home: undefined;
  AddTask: undefined;
  TaskDetails: { taskId: string };
  Info: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <TaskProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home"
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AddTask" component={AddTaskScreen} />
            <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
            <Stack.Screen name="Info" component={InfoScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </TaskProvider>
  );
}
