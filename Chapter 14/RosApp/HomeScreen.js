import {View, Button} from 'react-native';
import React from 'react';

function HomeScreen({navigation}) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Accelerometer Screen"
        onPress={() => navigation.navigate('AccelerometerScreen')}
      />
      <Button
        title="Go to Magnetometer Screen"
        onPress={() => navigation.navigate('MagnetometerScreen')}
      />
      <Button
        title="Go to Gyroscope Screen"
        onPress={() => navigation.navigate('GyroscopeScreen')}
      />
    </View>
  );
}

export default HomeScreen;
