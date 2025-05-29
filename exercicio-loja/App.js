// Atvd que será usada para portifolio do linkedin

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ListaProdutosScreen from './screens/ListaProdutosScreen';
import ProdutoScreen from './screens/ProdutoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Produtos" component={ListaProdutosScreen} />
        <Stack.Screen name="Detalhes" component={ProdutoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}