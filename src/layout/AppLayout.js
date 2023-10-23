import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {deviceHeight} from '../utils/Dimensions';

const AppLayout = ({children, typeScreen}) => {
  const logo = require('../assets/images/logo.png');
  return (
    <View style={styles.container}>
      {typeScreen === 'main' ? (
        <>
          <Image source={logo} style={styles.logoMain} />
          {children}
        </>
      ) : (
        <>
          <Image source={logo} style={styles.logoNotMain} />
          {children}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFFF1',
  },
  logoMain: {
    marginTop: deviceHeight * 0.1,
    resizeMode: 'contain',
    alignSelf: 'center',
    width: '90%',
  },
  logoNotMain: {
    marginTop: deviceHeight * 0.1 - 60,
    resizeMode: 'contain',
    alignSelf: 'center',
    width: '90%',
  },
});

export default AppLayout;
