import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import { View, Text } from 'native-base';
import Login from './Login'
import Home from './Home';
import ProductList from './Product/List';
import ProductDetail from './Product/Detail';

const Stack = createStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Home" component={Home} options={{ title: 'HOME' }}></Stack.Screen>
        <Stack.Screen name="ProductList" component={ProductList}></Stack.Screen>
        <Stack.Screen name="ProductDetail" component={ProductDetail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}