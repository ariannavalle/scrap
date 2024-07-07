import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// @ts-ignore
import { createDrawerNavigator } from '@react-navigation/drawer';
// @ts-ignore
import { createStackNavigator } from '@react-navigation/stack';
// @ts-ignore
import HomeScreen from './screens/HomeScreen';
// @ts-ignore
import DetailsScreen from './screens/DetailsScreen';
// @ts-ignore
import ProfileScreen from './screens/ProfileScreen';
// @ts-ignore
import SettingsScreen from './screens/SettingsScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
}
