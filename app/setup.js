import React, { Component } from 'react';
import  App from './App';
import { Provider } from 'react-redux';
import { store } from './store.js';

class setup extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoading: false,
      };
    }
    render() {
      return (
         <Provider store={store}>
            <App />
          </Provider>
      );
    }
  }
export default setup;
