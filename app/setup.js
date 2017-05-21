import React, { Component } from 'react';
import  App from './App';

class setup extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoading: false,
      };
    }
    render() {
      return (
          <App />
      );
    }
  }
export default setup;
