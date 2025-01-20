import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

interface ButtonProps {
  onPress: VoidFunction;
  title: string;
  isValid?: boolean;
  className?: string;
  isLoading?: boolean;
}

export function Button({
  onPress,
  title,
  isValid = true,
  className = '',
  isLoading = false,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLoading}
      className={`w-full items-center justify-center rounded-lg p-5 ${
        isValid ? 'bg-blue-500' : 'bg-gray-400'
      } ${className}`}>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text className="font-semibold text-white">{title}</Text>
      )}
    </TouchableOpacity>
  );
}
