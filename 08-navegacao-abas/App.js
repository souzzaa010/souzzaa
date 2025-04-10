import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreens from "./screens/SettingsScreens";
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>

        <Tab.Navigator>
          
          <Tab.Screen 
          name='HomeScreen' 
          component={HomeScreen} 
          options={{
            title: 'Tela de Início',
            headerTitleAlign: 'center',
            headerTitleColor: 'white',
            headerStyle:{
              backgroundColor: 'red'
            },
          tabBarIcon: ({color, size}) => <Ionicons name="home" color={color} size={size} />
          }}
          />

          <Tab.Screen 
          name='ProfileScreen' 
          component={ProfileScreen}
          options={{
            title: 'aplicativos',
            headerTitleAlign: 'center',
            headerTitleColor: 'white',
            headerStyle:{
              backgroundColor: 'blue'
            },
            tabBarIcon: ({color, size}) => <Ionicons name="apps" color={color} size={size} />
          }}/>

          <Tab.Screen 
          name='SettingsScreens' 
          component={SettingsScreens}
          options={{
            title: 'Aplicativos',
            headerTitleAlign: 'center',
            headerTitleColor: 'white',
            headerStyle:{
              backgroundColor: 'blue'
            },
            tabBarIcon: ({color, size}) => <Ionicons name="ban" color={color} size={size} />
          }}
          />

        </Tab.Navigator>

      </NavigationContainer>
    </PaperProvider>
  );
}


