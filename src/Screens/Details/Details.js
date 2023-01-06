import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '../../Config/AppIcon';
import {family} from '../../Config/AppFont';
import AsyncStorage from '@react-native-async-storage/async-storage';
let interval = null;
var counter = 60;
const Details = ({route, navigation}) => {
  const [timerOn, settimerOn] = useState(0);
  const [running, setRunning] = useState(true);

  React.useEffect(() => {
    async function getTime() {
      const time = await AsyncStorage.getItem(route.params.id + '');

      if (time != null) {
        var current = new Date().valueOf() / 1000;
        let _timerOn = parseInt(current) - parseInt(time);
        if (_timerOn >= 60) {
          setRunning(false);
          if (interval != null) {
            clearInterval(interval);
            settimerOn(0);
            counter = 0;
          }
        } else {
          counter = 60 - _timerOn;
          settimerOn(counter);
          timer();
        }
        // timer(time);
      } else {
        setStartTime();
        timer();
      }
    }
    getTime();

    return () => {
      clearInterval(interval);
    };
    // settimerOn(true);
  }, []);

  const setStartTime = () => {
    AsyncStorage.setItem(
      route.params.id + '',
      (new Date().valueOf() / 1000).toString(),
    );
  };

  const timer = () => {
    interval = setInterval(() => {
      // settimerOn(timerOn - 1);
      counter = counter - 1 > 0 ? counter - 1 : 0;
      settimerOn(counter);
      if (counter <= 0) {
        setRunning(false);
        clearInterval(interval);
      }
    }, 1000);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Image
        source={Icon.Bg}
        style={{
          width: '100%',
          height: 428,
          position: 'absolute',
          top: -100,
          // backgroundColor: 'red',
        }}
      />
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 78,
            alignItems: 'center',
            width: '100%',
            // backgroundColor: 'red',
          }}>
          <TouchableOpacity
            style={{marginHorizontal: 32}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={Icon.Back}
              style={{resizemode: 'contain', height: 10, width: 22}}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: family.black,
              fontSize: 21,
              fontWeight: '700',
              marginHorizontal: 70,
            }}>
            Details
          </Text>
        </View>
        <View
          style={{
            marginTop: 43,
            flex: 1,
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}>
          <Text
            style={{
              fontFamily: family.black,
              fontSize: 21,
              fontWeight: '700',
              marginTop: 50,
              marginHorizontal: 38,
            }}>
            Station Subscribed
          </Text>
          <View
            style={{
              width: '85%',
              backgroundColor: 'white',
              height: 149,
              alignSelf: 'center',
              marginTop: 15,
              borderRadius: 16,
              shadowRadius: 20,
              shadowColor: '#000000BB',
              shadowOpacity: 0.2,
            }}>
            <Text
              style={{
                fontFamily: family.black,
                fontSize: 16,
                fontWeight: '600',
                marginHorizontal: 25,
                marginTop: 20,
              }}>
              ACTIVE FROM
            </Text>
            <View style={{flexDirection: 'row', marginTop: 7, justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 36,
                    fontWeight: '700',
                    marginLeft: 25,
                    fontFamily: family.black,
                    // backgroundColor:"red",
                    // width:60
                  }}>
                  {timerOn}
                </Text>
                <Text
                  style={{
                    lineHeight: 18,
                    fontWeight: '600',
                    fontSize: 11,
                    fontFamily: family.black,
                  }}>
                  seconds
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  if (running) {
                    clearInterval(interval);
                    counter = 0;
                    settimerOn(counter);
                    setRunning(false);
                  } else {
                    setRunning(true);
                    counter = 60;
                    settimerOn(counter);
                    setStartTime();
                    timer();
                  }
                }}
                style={{
                  width: 110,
                  height: 28,
                  backgroundColor: '#DD1D21',
                  borderRadius: 50,
                  marginRight: 10,
                  // alignSelf:'center'
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: 'white',
                    fontWeight: '600',
                    fontFamily: family.black,
                  }}>
                  {running ? 'Stop' : 'Start'}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 25,
              }}>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '600',
                  alignSelf: 'center',
                  fontFamily: family.black,
                }}>
                MORE INFO
              </Text>
              <TouchableOpacity
                style={{
                  height: 21,
                  width: 21,
                  backgroundColor: '#E2E8E1',
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 11,
                }}>
                <Image
                  source={Icon.Down}
                  style={{resizeMode: 'contain', height: 7, width: 7}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({});
