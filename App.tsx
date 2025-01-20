import './global.css';

import 'react-native-gesture-handler';

import { TaskProvider } from './src/context/TaskContext';
import RootStack from './src/navigation';

export default function App() {
  return (
    <TaskProvider>
      <RootStack />
    </TaskProvider>
  );
}
