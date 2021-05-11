import React, { useState } from "react";
import { Button, Text, View } from "react-native";

//https://reactnative.dev/docs/state
StateDemo = () => {
  const [state, setState] = useState(0);
  function change() {
    setState(state + 1);
  }
  return (
    <View style={{ flex: 1, paddingTop: 22 }}>
      <Text style={{ fontSize: 18 }}>{state}</Text>
      <Button
        style={{ fontSize: 20, color: 'green' }}
        styleDisabled={{ color: 'red' }}
        onPress={() => change()}
        title="Press Me"
      >
        Press Me
</Button>
    </View>
  );
}

//https://reactnative.dev/docs/touchableopacity
export default function StateScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>State Demo</Text>
      <StateDemo />
    </View>
  );
}