import React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator initailRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#C45',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
     >
        <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title:'Home'}}
        />
        <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{title:'About'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App