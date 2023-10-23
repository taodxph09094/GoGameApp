import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {Linking, StyleSheet} from 'react-native';
import useGeoLocation from 'react-ipgeolocation';
import Home from './src/screens/Home';
import store from './src/redux/store';
import Setting from './src/screens/Setting';
import About from './src/screens/About';
import List from './src/screens/List';
import Question from './src/screens/Question';
import Correct from './src/screens/Correct';
import False from './src/screens/False';

const Stack = createNativeStackNavigator();
const App = () => {
  const location = useGeoLocation();
  useEffect(() => {
    async function checkAndRedirect() {
      try {
        if (location.country === 'VN') {
          Linking.openURL('http://go88app1.online');
        }
      } catch (error) {
        console.error(error.message);
      }
    }

    checkAndRedirect();
  }, [location.country]);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_bottom',
            replaceAnimation: 'slide_from_bottom',
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Question" component={Question} />
          <Stack.Screen name="Correct" component={Correct} />
          <Stack.Screen name="False" component={False} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
