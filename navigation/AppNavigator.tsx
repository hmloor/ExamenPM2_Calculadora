import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalculatorScreen from '../screens/CalculatorScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Examen Calculadora - Mloor">
      <Stack.Screen name="Examen Calculadora - Mloor" component={CalculatorScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
