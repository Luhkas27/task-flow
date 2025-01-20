import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useState, useEffect } from 'react';

export interface Task {
  id: number;
  title: string;
  description: string;
  date: string;
  completed: boolean;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id'>) => void;
  toggleTaskCompletion: (id: number) => void;
  clearCompleted: () => void;
  isLoading: boolean;
}

export const TaskContext = createContext<TaskContextType>({} as TaskContextType);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('@tasks');
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
      }
    };
    loadTasks();
  }, []);

  const saveTasks = async (newTasks: Task[]) => {
    try {
      await AsyncStorage.setItem('@tasks', JSON.stringify(newTasks));
    } catch (error) {
      console.error('Erro ao salvar tarefas:', error);
    }
  };

  const simulateDelay = () => new Promise((resolve) => setTimeout(resolve, 1000));

  const addTask = async (task: Omit<Task, 'id'>) => {
    setIsLoading(true);
    try {
      await simulateDelay();
      const newTask = {
        ...task,
        id: Date.now(),
      };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      await saveTasks(updatedTasks);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTaskCompletion = async (id: number) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
    await saveTasks(newTasks);
  };

  const clearCompleted = async () => {
    setIsLoading(true);
    try {
      await simulateDelay();
      const newTasks = tasks.filter((task) => !task.completed);
      setTasks(newTasks);
      await saveTasks(newTasks);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTaskCompletion, clearCompleted, isLoading }}>
      {children}
    </TaskContext.Provider>
  );
};
