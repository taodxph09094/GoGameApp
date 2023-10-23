import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AppLayout from '../layout/AppLayout';
import {setCurrentQuestion} from '../redux/questionActions';
import {dataEZ} from '../constants/ezData';
import {deviceHeight} from '../utils/Dimensions';

const Question = ({navigation, route}) => {
  const currentQuestionIndex = useSelector(
    state => state.question.currentQuestionIndex,
  );
  const dispatch = useDispatch();
  const [index, setIndex] = useState();
  useEffect(() => {
    if (route?.params?.layout === 'Home') {
      setIndex(currentQuestionIndex);
    } else {
      setIndex(route?.params?.index);
    }
  }, [route?.params]);

  const selectedItem = dataEZ?.find(item => item.index === index);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const handleAnswerSelect = index => {
    setSelectedAnswer(index);
  };
  const onBack = () => {
    navigation.goBack();
  };
  const checkCorrect = () => {
    if (selectedAnswer + 1 === selectedItem?.isCorrect) {
      navigation.navigate('Correct', {index: index, data: dataEZ});
      dispatch(setCurrentQuestion(currentQuestionIndex + 1));
    } else {
      navigation.navigate('False', {index: index});
    }
  };

  return (
    <AppLayout typeScreen="notMain">
      <View
        style={{
          marginTop: deviceHeight * 0.1 - 350,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.question}>
          <Text
            style={{
              color: '#E8663E',
              fontSize: 25,
              fontWeight: 'bold',
              maxWidth: 340,
            }}>
            Câu {index}: {selectedItem?.title}
          </Text>
        </View>
        <View style={styles.listCorrect}>
          {selectedItem?.correct.map((item, itemIndex) => (
            <TouchableOpacity
              style={[
                styles.itemCorrect,
                selectedAnswer === itemIndex ? {borderColor: 'green'} : null,
              ]}
              key={item.key}
              onPress={() => handleAnswerSelect(itemIndex)}>
              <Text
                style={{color: '#E8663E', fontSize: 25, fontWeight: 'bold'}}>
                {item.value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.formButton}>
        <TouchableOpacity onPress={onBack} style={styles.buttonNext}>
          <Text style={styles.textBtn}>Quay lại</Text>
        </TouchableOpacity>

        {selectedAnswer !== null ? (
          <TouchableOpacity style={styles.buttonCancel} onPress={checkCorrect}>
            <Text style={styles.textBtn}>Tiếp theo</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </AppLayout>
  );
};

export default Question;

const styles = StyleSheet.create({
  titleQ: {
    position: 'absolute',
    top: 120,
    left: 45,
  },
  question: {
    maxWidth: 400,
    minHeight: 120,
    backgroundColor: '#FFFADF',
    borderRadius: 20,
    transform: [{translateY: 20}],
    padding: 20,
    borderColor: '#E8663E',
    borderWidth: 3,
  },
  listCorrect: {
    flexDirection: 'column',
    alignItems: 'center',
    transform: [{translateY: 100}],
  },
  itemCorrect: {
    width: 300,
    height: 60,
    backgroundColor: '#FFFADF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: '#E8663E',
    borderWidth: 2,
    marginVertical: 10,
  },
  formButton: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    transform: [{translateY: -60}],
  },
  buttonNext: {
    width: 125,
    height: 60,
    backgroundColor: '#FF735C',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCancel: {
    width: 125,
    height: 60,
    backgroundColor: 'green',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold',
  },
});
