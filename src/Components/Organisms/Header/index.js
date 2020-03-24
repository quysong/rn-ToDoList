import React from 'react';
import {View, Text } from 'react-native';

const Header = () => {
  return (
    <View style={{ flex: 0.08, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ddd' }}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;