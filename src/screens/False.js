import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AppLayout from '../layout/AppLayout';

const False = ({navigation}) => {
  const handleBack = () => {
    navigation.goBack();
  };
  const handleQuit = () => {
    navigation.navigate('Home');
  };
  return (
    <AppLayout>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <View>
            <Text
              style={{
                color: '#E8663E',
                fontSize: 56,
                fontFamily: 'PlaypenSans-Regular_ExtraBold',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Opps! Sai rồi
            </Text>
            {/* <Image style={{alignSelf: 'center', width: 100, height: 100}} source={require('./assets/image/cry.png')} /> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <TouchableOpacity
              onPress={handleBack}
              style={{
                backgroundColor: '#385A64',
                width: 120,
                height: 60,
                height: 45,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 5,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Quay lại
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleQuit}
              style={{
                backgroundColor: '#FF735C',
                width: 120,
                height: 45,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 5,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Thoát
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </AppLayout>
  );
};

export default False;
