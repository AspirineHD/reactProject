import React from 'react';
import { Text, View, Image } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreenStack(){
  return(
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0096DA',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{title:'Home Page'}}
        />
      </Stack.Navigator>
  )
}

function SettingScreenStack(){
  return(
    <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0096DA',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Setting" 
          component={SettingScreen}
          options={{title:'Setting Page'}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{title: 'Profile Page'}}
        />
      </Stack.Navigator>
  )
}

function App (){
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({focused})=>{
          let iconName;
          if(route.name === "Home"){
            iconName = focused
            ? <Image source={require('./assets/logo1.png')} style={{width: 25, height: 25, marginLeft: 5}}/>
            : <Image source={require('./assets/logo2.png')} style={{width: 25, height: 25, marginLeft: 5}}/>;
          }else if(route.name === "Setting"){
            iconName = focused
            ? <Image source={require('./assets/logo1.png')} style={{width: 25, height: 25, marginLeft: 5}}/>
            : <Image source={require('./assets/logo3.png')} style={{width: 25, height: 25, marginLeft: 5}}/>;
          }
          return iconName;
        }
      })}
      tabBarOptions={{
        activeTintColor:'tomato',
        inactiveTintColor: 'gray',
        tabBarVisible: true
      }}
      >
      <Tab.Screen name="Home" component={HomeScreenStack}/>
      <Tab.Screen name="Setting" component={SettingScreenStack}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
