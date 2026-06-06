import { createContext, ReactNode, useContext, useState } from "react";

export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

type TaskContextData = {
  tasks: Task[];
  addTask: (title: string, description: string) => void;
  toggleTask: (id: string) => void;
  getTaskById: (id: string) => Task | undefined;
};

const TaskContext = createContext<TaskContextData | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Organizar mesa de trabalho",
      description: "Colocar todos os papéis e arquivos em pastas separadas.",
      completed: false,
    },
    {
      id: "2",
      title: "Fazer compras semanais",
      description: "Comprar leite, pão, frutas e itens de higiene.",
      completed: true,
    },
  ]);

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: String(Date.now()),
      title,
      description,
      completed: false,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const toggleTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const getTaskById = (id: string) => tasks.find((task) => task.id === id);

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, getTaskById }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within TaskProvider");
  }
  return context;
}
