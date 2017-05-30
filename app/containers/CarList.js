import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import { fetchCars } from '../actions/actionCreators';
import PushNotification from '../services/notifications';

const mapStateToProps = (state) => ({
  cars: state.cars
});

const mapActionsToProps = (dispatch) => ({
  fetchCars() {
    return dispatch(fetchCars());
  },
});

class Container extends Component {
  constructor() {
    super();
    this.NewNotification = this.NewNotification.bind(this);
  }
  static defaultProps = {
    cars: []
  }
  componentDidMount() {
    //this.props.fetchCars();
    var id;
}
      NewNotification(){

          let date = new Date(Date.now() + (1000));

        PushNotification.localNotificationSchedule({
            message: "My Notification Message", // (required)
            date: date,// (optional) for setting delay
            largeIcon:""// set this blank for removing large icon
            //smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
        });

    }

  render() {
    return (
      <View>
        <Button
          onPress={()=>{this.NewNotification()}}
          title="Show Notification"
          color="#841584"
          accessibilityLabel="Show Notification"
        />
      </View>
      // <View style={{alignItems: 'center', marginTop: 40}}>
      // // {this.props.cars.map((car, i) => {
      // //   return (
      // //     <Text key={i}>{car.name} - {car.brand}</Text>
      // //   );
      // // })}
      // </View>
    );
  }
}

export const CarList = connect(mapStateToProps, mapActionsToProps)(Container);
