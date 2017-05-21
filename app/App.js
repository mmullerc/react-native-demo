import React, { Component } from 'react';
import { StyleSheet,
  AppRegistry,
  Image,
  View,
  Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <View>
        <Cars />
      </View>
    );
  }
}

class Cars extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  render() {
    return (
      <View style={{alignItems: 'center', marginTop: 40}}>
      {this.state.data.map((car, i) => {
        return (
          <Text key={i}>{car.name} - {car.brand}</Text>
        );
      })}
      </View>
    );
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/cars')
    .then((response) => response.json())
     .then((responseJson) => {
       this.showResult(responseJson);
    });
  }

  showResult(response) {
    this.setState({
        data: response
    });
  }
}

export default App;
