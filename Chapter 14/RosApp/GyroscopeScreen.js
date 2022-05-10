import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {
  gyroscope,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';

const Value = ({name, value}) => (
  <View style={styles.valueContainer}>
    <Text style={styles.valueName}>{name}:</Text>
    <Text style={styles.valueValue}>{new String(value).substr(0, 8)}</Text>
  </View>
);

export default class GyroscopeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      z: 0,
      timestamp: 0,
    };
  }

  componentDidMount() {
    setUpdateIntervalForType(SensorTypes.gyroscope, 100);
    const subscription = gyroscope.subscribe(
      ({x, y, z, timestamp}) => this.setState({x, y, z, timestamp}),
      // This line will set the x, y, z, timestamp values to the state         also we can send these values to the ros server via web socket protocol.
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}> Gyroscope values</Text>
        <Value name="x" value={this.state.x} />
        <Value name="y" value={this.state.y} />
        <Value name="z" value={this.state.z} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headline: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  valueContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  valueValue: {
    width: 200,
    fontSize: 20,
  },
  valueName: {
    width: 50,
    fontSize: 20,
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
