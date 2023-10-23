import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AppLayout from '../layout/AppLayout';

const List = ({navigation}) => {
  return (
    <AppLayout typeScreen="main">
      <View style={styles.container}>
        <View>
          <Text
            style={{
              fontSize: 35,
              color: '#E8663E',
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'PlaypenSans-Regular_ExtraBold',
              marginBottom: 20,
            }}>
            Danh sách cấp độ
          </Text>
          <View style={styles.list}>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.text}>Dễ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.text}>Trung bình</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.text}>Khó</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.text}>Cực khó</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          marginHorizontal: 20,
          height: 70,
          backgroundColor: '#E8663E',
          position: 'relative',
          bottom: 50,
          borderRadius: 15,
          justifyContent: 'center',
        }}
        onPress={() => navigation.goBack()}>
        <Text
          style={{
            textAlign: 'center',
            color: '#FFFADF',
            fontFamily: 'PlaypenSans-Regular_ExtraBold',
            fontWeight: 'bold',
            fontSize: 37,
          }}>
          Quay lại
        </Text>
      </TouchableOpacity>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  box: {
    width: 180,
    height: 100,
    backgroundColor: '#E8663E',
    borderRadius: 15,
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontSize: 30,
    color: '#FFFADF',
    fontFamily: 'PlaypenSans-Regular_ExtraBold',
    fontWeight: 'bold',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});
export default List;
