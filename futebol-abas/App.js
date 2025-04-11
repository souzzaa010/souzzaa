import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EscudoScreen from './screens/EscudoScreen';
import JogadoresScreen from './screens/JogadoresScreen';
import TituloScreen from './screens/TituloScreen';
import { Ionicons } from '@expo/vector-icons'


const Tab = createBottomTabNavigator()


export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>

        <Tab.Navigator>
          
          <Tab.Screen 
          name='Escudo' 
          component={EscudoScreen} 
          options={{
            title: 'Escudo',
            headerTitleAlign: 'center',
            headerTitleColor: 'white',
            headerStyle:{
              backgroundColor: '#a10a08'
            },
          tabBarIcon: ({color, size}) => <Ionicons name="shield" color={color} size={size} />
          }}
          />

          <Tab.Screen 
          name='ProfileScreen' 
          component={JogadoresScreen}
          options={{
            title: 'Jogadores',
            headerTitleAlign: 'center',
            headerTitleColor: 'white',
            headerStyle:{
              backgroundColor: 'white'
            },
            tabBarIcon: ({color, size}) => <Ionicons name="person" color={color} size={size} />
          }}/>

          <Tab.Screen 
          name='Titulo' 
          component={TituloScreen}
          options={{
            title: 'Titulo Importantes',
            headerTitleAlign: 'center',
            headerTitleColor: 'white',
            headerStyle:{
              backgroundColor: 'gold'
            },
            tabBarIcon: ({color, size}) => <Ionicons name="trophy" color={color} size={size} />
          }}
          />

        </Tab.Navigator>

      </NavigationContainer>
    </PaperProvider>
  );
}