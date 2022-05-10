import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AccelerometerScreen from './AccelerometerScreen';
import MagnetometerScreen from './MagnetometerScreen';
import GyroscopeScreen from './GyroscopeScreen';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="AccelerometerScreen"
          component={AccelerometerScreen}
        />
        <Stack.Screen
          name="MagnetometerScreen"
          component={MagnetometerScreen}
        />
        <Stack.Screen name="GyroscopeScreen" component={GyroscopeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
