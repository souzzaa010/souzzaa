import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Home from '../../../09-navegacao-stack/src/screens/Home'
import ReceitaScreen from '../screens/ReceitaScreen'

const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>

      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Receitas' component={ReceitaScreen} />

    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})