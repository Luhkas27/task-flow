import { TextInput, TextInputProps } from 'react-native';

interface CustomInputProps extends TextInputProps {
  height?: number;
}

export function CustomInput({ height = 64, ...props }: CustomInputProps) {
  return (
    <TextInput
      className="mb-6 w-full rounded-lg border border-gray-200 bg-white px-4 text-base text-gray-800 shadow-sm focus:border-blue-500"
      style={{ height }}
      placeholderTextColor="#9CA3AF"
      {...props}
    />
  );
}
