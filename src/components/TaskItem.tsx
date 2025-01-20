import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';

import { Task } from '../context/TaskContext';

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
}

export function TaskItem({ task, onToggle }: TaskItemProps) {
  return (
    <TouchableOpacity
      onPress={() => onToggle(task.id)}
      className={`border-b p-4 ${
        task.completed
          ? 'border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900'
          : 'border-zinc-200 dark:border-zinc-800'
      }`}>
      <View className="flex-row items-center">
        <Ionicons
          name={task.completed ? 'checkmark-circle' : 'ellipse-outline'}
          size={24}
          color={task.completed ? '#22c55e' : '#71717a'}
          className="mr-3"
        />
        <View className="flex-1">
          <View className="flex-row items-center justify-between">
            <Text
              className={`text-base font-semibold ${
                task.completed
                  ? 'text-zinc-500 line-through dark:text-zinc-600'
                  : 'text-zinc-900 dark:text-zinc-100'
              }`}>
              {task.title}
            </Text>
            <Text className={`text-xs ${task.completed ? 'text-green-500' : 'text-amber-500'}`}>
              {task.completed ? 'Concluído' : 'Pendente'}
            </Text>
          </View>
          {task.description && (
            <Text
              className={`mt-1 text-sm ${
                task.completed
                  ? 'text-zinc-400 dark:text-zinc-600'
                  : 'text-zinc-600 dark:text-zinc-400'
              }`}>
              {task.description}
            </Text>
          )}
          {task.date && (
            <Text className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
              {new Date(task.date).toLocaleDateString('pt-BR')}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
