import { TouchableOpacity, Text } from 'react-native';

interface DatePickerButtonProps {
  onPress: VoidFunction;
  formattedDate: string;
}

export function DatePickerButton({ onPress, formattedDate }: DatePickerButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="mb-6 h-16 w-full justify-center rounded-lg border border-gray-200 bg-white px-4">
      <Text className="text-base text-gray-800">{formattedDate}</Text>
    </TouchableOpacity>
  );
}
