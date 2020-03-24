import React from 'react';
import { Button, View, Text } from 'react-native';

const List = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Product List Screen</Text>
      <Button
        title="Go to Product detail"
        onPress={() => navigation.navigate('ProductDetail')}
      />
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default List;