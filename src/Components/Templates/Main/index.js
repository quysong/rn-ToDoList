import React from 'react';
import { Button, View, Text } from 'react-native';
import Header from '../../Organisms/Header';

const Main = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Header></Header>
      {props.children}
    </View>
  );
};

export default Main;