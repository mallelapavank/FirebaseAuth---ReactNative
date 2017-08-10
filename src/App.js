import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCgih_b8BoRdUaV5YLTUSmG_KyuIau6F4A',
      authDomain: 'fir-database-demo-80665.firebaseapp.com',
      databaseURL: 'https://fir-database-demo-80665.firebaseio.com',
      projectId: 'fir-database-demo-80665',
      storageBucket: 'fir-database-demo-80665.appspot.com',
      messagingSenderId: '851508621110'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
