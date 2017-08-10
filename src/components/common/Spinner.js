import React from 'react';
import { View, AvtivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  <View style={styles.spinnerStyle}>
    <AvtivityIndicato size={size || 'large'} />
  </View>;
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
