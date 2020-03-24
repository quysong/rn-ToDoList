import React from 'react';
import { Button, View, Text } from 'react-native';

const Detail = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Product Detail Screen</Text>
      <Button
        title="Go home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Detail;