import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState, useContext } from 'react';
import { View, Platform } from 'react-native';

import { CustomInput } from '../components/CustomInput';
import { DatePickerButton } from '../components/DatePickerButton';
import { TaskContext } from '../context/TaskContext';

import { Button } from '~/components/Button';
import { Header } from '~/components/Header';
import { RootStackParamList } from '~/navigation';

export default function AddTaskScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { addTask, isLoading } = useContext(TaskContext);

  const handleAddTask = () => {
    if (title.trim()) {
      addTask({
        title,
        description,
        date: date.toISOString(),
        completed: false,
      });
      setTimeout(() => {
        navigation.goBack();
      }, 1000);
    }
  };

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR');
  };

  const isFormValid = title.trim() !== '' && description.trim() !== '';

  return (
    <View className="flex-1 px-6 py-16">
      <Header />
      <View className="flex-1 ">
        <CustomInput
          placeholder="Digite o título da tarefa"
          value={title}
          onChangeText={setTitle}
        />
        <CustomInput
          placeholder="Digite a descrição da tarefa"
          value={description}
          onChangeText={setDescription}
          multiline
          height={128}
        />
        <DatePickerButton
          onPress={() => setShowDatePicker(true)}
          formattedDate={date ? formatDate(date) : 'Selecione uma data'}
        />

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={handleDateChange}
            locale="pt-BR"
          />
        )}

        <View className="mb-8 flex-1 items-center justify-end">
          <Button
            title="Salvar Nova Tarefa"
            onPress={handleAddTask}
            isValid={isFormValid}
            isLoading={isLoading}
          />
        </View>
      </View>
    </View>
  );
}
