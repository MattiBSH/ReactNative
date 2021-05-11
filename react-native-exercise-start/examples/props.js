import React from 'react';
import { Text, View } from 'react-native';

Cafe = (props) => {
  return (
    <View style={{ flex: 1, paddingTop: 22 }}>
      <Text style={{ fontSize: 18 }}>{props.props}</Text>
    </View>
  );
}

//https://reactnative.dev/docs/intro-react#props
export default function PropsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>PropsDemo</Text>
      <Cafe props={"this is a prop"}/>
    </View>
  );
}