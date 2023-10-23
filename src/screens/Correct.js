import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState, useMemo} from 'react';
import AppLayout from '../layout/AppLayout';

const Correct = ({navigation, route}) => {
  const index = route?.params?.index;
  const data = route?.params?.data;
  const [checkEnd, setCheckEnd] = useState(false);
  const handleBack = () => {
    navigation.navigate('Home');
  };
  const handleNext = () => {
    navigation.navigate('Question', {index: index + 1});
  };

  useEffect(() => {
    if (data && data) {
      if (index + 1 >= data && data?.length) {
        setCheckEnd(true);
      }
    }
  }, [index, data]);

  const ViewNow = useMemo(() => {
    return checkEnd ? (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: '#fff',
            fontSize: 40,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Chúc mừng bạn đã hoàn tất bộ câu hỏi!
        </Text>
        <TouchableOpacity
          onPress={handleBack}
          style={{
            backgroundColor: '#FF735C',
            width: 120,
            height: 45,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 5,
          }}>
          <Text>Thoát</Text>
        </TouchableOpacity>
      </View>
    ) : (
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
            Chính xác!
          </Text>
          <Image style={{alignSelf: 'center', width: 100, height: 100}} />
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
              Thoát
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleNext}
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
              Tiếp tục{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }, [checkEnd]);
  return (
    <AppLayout typeScreen="main">
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {ViewNow}
      </View>
    </AppLayout>
  );
};

export default Correct;
