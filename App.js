import React from 'react';
import { Text, View, Image } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ProductScreen from './screens/ProductScreen';
import DetailScreen from './screens/DetailScreen';
import MenuScreen from './screens/MenuScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0096DA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'เมนูหลัก'}}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{title: 'เกี่ยวกับเรา'}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: 'ลงทะเบียน'}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'เข้าสู่ระบบ'}}
      />
    </Stack.Navigator>
  );
};

function ProductStack(){
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
          name="Product" 
          component={ProductScreen}
          options={{title: 'สินค้า'}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{title: 'รายละเอียด'}}
        />
      </Stack.Navigator>
  )
}

function App (){
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        drawerPositon='left'
        drawerContent={(props) => <MenuScreen {...props}/>}>
        <Drawer.Screen name='HomeStack' component={HomeStack} />
        <Drawer.Screen name='ProductStack' component={ProductStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
