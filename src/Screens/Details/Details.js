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
} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '../../Config/AppIcon';
import {family} from '../../Config/AppFont';

const Details = ({navigation}) => {
  const [timerOn, settimerOn] = useState(true);
  const [resend, setResend] = useState(false);

  React.useEffect(() => {
    timer(10);
    settimerOn(true);
  }, []);

  function timer(remaining) {
    var m = Math.floor(remaining / 60);
    var s = remaining % 60;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? s : s;

    console.log('text', m + ':' + s);
    settimerOn(s);
    remaining -= 1;
    if (remaining >= 0 && timerOn) {
      let interval = setTimeout(function () {
        timer(remaining);
      }, 1000);
      return () => clearInterval(interval);
    }
    if (!timerOn) {
      // Do validate stuff here
      return;
    }
    setResend(true);
    
  }

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
            <View style={{flexDirection: 'row', marginTop: 7}}>
              <Text
                style={{
                  fontSize: 36,
                  fontWeight: '700',
                  marginLeft: 25,
                  fontFamily: family.black,
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
              <TouchableOpacity
                onPress={() => {
                  timer(10);
                  settimerOn(true);
                }}
                style={{
                  width: 110,
                  height: 28,
                  backgroundColor: '#DD1D21',
                  borderRadius: 50,
                  marginHorizontal: 105,
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
                  {!resend ? 'Stop' : 'Start'}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // backgroundColor: 'yellow',
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
