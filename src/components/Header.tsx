import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export function Header() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} className="py-6">
      <Ionicons name="arrow-back" size={24} color="gray" />
    </TouchableOpacity>
  );
}
