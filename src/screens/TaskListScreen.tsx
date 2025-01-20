import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { View, FlatList } from 'react-native';

import { Button } from '../components/Button';
import { TaskItem } from '../components/TaskItem';
import { TaskContext, Task } from '../context/TaskContext';

import { Empty } from '~/components/Empty';
import { RootStackParamList } from '~/navigation';

export default function TaskListScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { tasks, toggleTaskCompletion, clearCompleted, isLoading } = useContext(TaskContext);

  const hasCompletedTasks = tasks.some((task) => task.completed);

  const renderTask = ({ item }: { item: Task }) => (
    <TaskItem task={item} onToggle={toggleTaskCompletion} />
  );

  return (
    <View className="flex-1 px-6 py-16">
      {tasks.length === 0 ? (
        <Empty onPress={() => navigation.navigate('AddTask')} />
      ) : (
        <View className="flex-1">
          <FlatList
            showsVerticalScrollIndicator={false}
            data={tasks}
            renderItem={renderTask}
            keyExtractor={(item) => item.id.toString()}
          />
          <View className="p-3">
            <Button
              onPress={() => navigation.navigate('AddTask')}
              title="Adicionar Tarefa"
              className="mb-8"
            />
            <Button
              onPress={clearCompleted}
              title="Limpar Concluídas"
              isLoading={isLoading}
              isValid={hasCompletedTasks}
            />
          </View>
        </View>
      )}
    </View>
  );
}
