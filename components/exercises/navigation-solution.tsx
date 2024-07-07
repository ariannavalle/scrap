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
        <Drawer.Navigator
            drawerStyle={{
            backgroundColor: '#c6cbef',
            width: 240,
            }}
           drawerContentOptions={{
               activeTintColor: '#e91e63',
               itemStyle: { marginVertical: 5 },
           }}>
            <Drawer.Screen name="Main" component={StackNavigator} />
            {/*Refactor: Lazy-load screens in the drawer navigator to optimize performance.*/}
            <Drawer.Screen name="Profile" component={ProfileScreen} options={{ lazy: true }}  />
            <Drawer.Screen name="Settings" component={SettingsScreen} options={{ lazy: true }}  />
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

// For Deep linking, define prefixes, and config
const linking = {
    prefixes: ['myapp://'],
    config: {
        screens: {
            Main: {
                screens: {
                    Home: 'home',
                    Details: 'details/:id',
                },
            },
            Profile: 'profile',
            Settings: 'settings',
        },
    },
};
export default function App() {

    return (
        // Question: How would you handle navigation state and deep linking for specific screens in both the drawer and stack navigators?
        // Answer: Add the linking prop
        // @ts-ignore
        <NavigationContainer linking={linking}>
            <DrawerNavigator />
        </NavigationContainer>
    );
}

