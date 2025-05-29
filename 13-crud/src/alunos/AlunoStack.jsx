import React from 'react'
import AlunoForm from './AlunoForm'
import AlunoLista from './AlunoLista'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function AlunoStack() {
    return (
        <Stack.Navigator>
    
          <Stack.Screen 
            name='Aluno Form'
            component={AlunoForm} />
          <Stack.Screen name='Aluno Lista' component={AlunoLista} />
    
        </Stack.Navigator>
      )
}
