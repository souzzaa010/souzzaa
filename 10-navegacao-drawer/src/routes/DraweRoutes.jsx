import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen'
import UserScreen from '../screens/UserScreen'
import ConfigScreen from '../screens/ConfigScreen'
import ProfileScreen from '../screens/ProfileScreen'
import {IonIcons} from '@expo/vector-icons'

const Drawer = createDrawerNavigator()

export default function DraweRoutes() {
  return (
    <Drawer.Navigator>

        <Drawer.Screen 
        name='HomeScreen' 
        component={HomeScreen} 
        options={{
            title:"Início",
            drawerIcon: ({color, size}) => <IonIcons name='home' color={color} size={size}/>
        }}/>
        <Drawer.Screen name='UserScreen' component={UserScreen} />
        <Drawer.Screen name='ProfileScreen' component={ProfileScreen} />
        <Drawer.Screen name='ConfigScreen' component={ConfigScreen} />

    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})