import React from 'react';
import { Button, View, Text } from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Go to Product list"
        onPress={() => navigation.navigate('ProductList')}
      />
    </View>
  );
};

export default Home;