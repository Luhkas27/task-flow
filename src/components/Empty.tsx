import { Text, View } from 'react-native';

import { Button } from './Button';

type EmptyProps = {
  onPress: VoidFunction;
};

export function Empty({ onPress }: EmptyProps) {
  return (
    <View className="flex-1">
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg text-gray-500">Nenhuma tarefa encontrada</Text>
      </View>
      <View className="mb-8 items-center">
        <Button onPress={onPress} title="Adicionar Nova Tarefa" />
      </View>
    </View>
  );
}
