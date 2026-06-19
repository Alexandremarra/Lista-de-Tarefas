import { createContext, ReactNode, useContext, useState } from "react";

// 1. Atualizamos o tipo do status para aceitar as três opções
export type TaskStatus = "pendente" | "andamento" | "concluida";

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus; // Mudamos de 'completed: boolean' para 'status: TaskStatus'
};

type TaskContextData = {
  tasks: Task[];
  addTask: (title: string, description: string) => void;
  updateStatus: (id: string, newStatus: TaskStatus) => void; // Nova função genérica de status
  getTaskById: (id: string) => Task | undefined;
  deleteTask: (id: string) => void;
};

const TaskContext = createContext<TaskContextData | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: String(Date.now()),
      title,
      description,
      status: "pendente", // Começa como pendente
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  // Altera o status da tarefa para qualquer um dos três estados
  const updateStatus = (id: string, newStatus: TaskStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const getTaskById = (id: string) => tasks.find((task) => task.id === id);

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider 
      value={{ 
        tasks, 
        addTask, 
        updateStatus, 
        getTaskById, 
        deleteTask 
      }}
    >
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