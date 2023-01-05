import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Screens/Login/Login';
import Disclaimer from './src/Screens/Disclaimer/Disclaimer';
import Select_Station from './src/Screens/Select_Station/Select_Station';
import Details from './src/Screens/Details/Details';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();

const App = () => {
  const [route, setRoute] = React.useState(null);
  React.useEffect(() => {
    async function fetchToken() {
      const value = await AsyncStorage.getItem('token');
      const accept = await AsyncStorage.getItem('accept');
      if (accept != null && accept == '1') {
        setRoute('Station');
      } else {
        if (value != null) {
          setRoute('Disclaimer');
        } else {
          setRoute('Login');
        }
      }
    }
    fetchToken();
  }, []);
  return route != null ? (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={route}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Disclaimer"
          component={Disclaimer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Station"
          component={Select_Station}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <View />
  );
};

export default App;

const styles = StyleSheet.create({});
