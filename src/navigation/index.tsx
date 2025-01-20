import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddTaskScreen from '~/screens/AddTaskScreen';
import TaskListScreen from '~/screens/TaskListScreen';

export type RootStackParamList = {
  TaskList: undefined;
  AddTask: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TaskList"
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#FFFFFF',
          },
          gestureEnabled: false,
        }}>
        <Stack.Screen name="TaskList" component={TaskListScreen} />
        <Stack.Screen name="AddTask" component={AddTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
