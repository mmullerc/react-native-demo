import React, { Component } from 'react';
import { StyleSheet,
  AppRegistry,
  Image,
  View,
  Text } from 'react-native';
import { CarList } from './containers/CarList';

class App extends Component {
  render() {
    return (
      <View>
        <CarList />
      </View>
    );
  }
}

export default App;
