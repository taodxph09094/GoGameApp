import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AppLayout from '../layout/AppLayout';

const About = ({navigation}) => {
  return (
    <AppLayout typeScreen="main">
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.text}>
            Sản phẩm này thuộc quyền sở hữu của Tao Xuan Dang.{' '}
          </Text>
          <Text style={styles.text}>
            Chúc các bạn sẽ có những phút giây thư giãn với sản phẩm này.{' '}
          </Text>
          <Text style={styles.text}>Xin cảm ơn ! </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              marginVertical: 40,
              backgroundColor: '#FFFADF',
              padding: 10,
              width: 300,
              height: 60,
              borderRadius: 20,
            }}>
            <Text
              style={{
                color: '#E8663E',
                textAlign: 'center',
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              Đóng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppLayout>
  );
};

export default About;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    transform: [{translateY: -90}],
    padding: 20,
    width: 380,
    height: 300,
    backgroundColor: '#E8663E',
    borderRadius: 25,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#FFFADF',
    fontSize: 23,
    fontWeight: 'bold',
  },
});
