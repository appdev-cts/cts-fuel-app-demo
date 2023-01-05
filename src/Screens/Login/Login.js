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
import React from 'react';
import {Icon} from '../../Config/AppIcon';
import {family} from '../../Config/AppFont';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [isShowEmailError, setisShowEmailError] = React.useState(false);
  const [isShowPassError, setisShowPassError] = React.useState(false);
  const [params, setParams] = React.useState({
    email: '',
    password: '',
  });
  const loginApi = () => {
    fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.token) {
          AsyncStorage.setItem('token', res.token + '');
          navigation.navigate('Disclaimer');
          setParams({...params, password: '', email: ''});
        } else {
          alert(JSON.stringify(res.error));
          console.log(res);
        }
      })
      .catch(err => console.log(err));
  };
  const validations = () => {
    if (email == '' || password == '' || !reg.test(email)) {
      setisShowEmailError(email == '' || !reg.test(email));
      setisShowPassError(password == '');
    } else {
      loginApi();
    }
  };
  const {email, password} = params;
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Image
        source={Icon.Bg}
        style={{
          width: '100%',
          height: 428,
          position: 'absolute',
          bottom: 0,
          // backgroundColor: 'red',
        }}
      />
      <View style={{flex: 1}}>
        <Image
          source={Icon.Logo}
          style={{
            height: 88,
            width: 82,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginTop: Dimensions.get('window').height / 10,
          }}
        />
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 21,
            fontWeight: '700',
            marginTop: Dimensions.get('window').height / 22,
            fontFamily: family.black,
          }}>
          Login
        </Text>
        <View
          style={{
            width: '80%',
            height: 40,
            alignSelf: 'center',
            // backgroundColor: 'pink',
            marginTop: 54,
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#F0F4F5',
          }}>
          <Image
            source={Icon.At}
            style={{
              resizeMode: 'contain',
              height: 16,
              width: 16,
              alignSelf: 'center',
              marginHorizontal: 10,
            }}
          />
          <TextInput
            style={{
              marginHorizontal: 15,
              fontWeight: '700',
              fontSize: 16,
              fontFamily: family.black,
            }}
            value={email}
            onChangeText={e =>
              setParams({...params, email: e.split(' ').join('')})
            }
            placeholder="Enter Your Email"
          />
        </View>
        {isShowEmailError && (
          <Text
            style={{
              fontSize: 12,
              fontFamily: family.light,
              color: 'red',
              marginTop: 5,
              marginHorizontal: 40,
            }}>
            {email == ''
              ? '*Please Enter your Email'
              : !reg.test(email) && '*Please Enter Your Correct Email'}
          </Text>
        )}
        <View
          style={{
            width: '80%',
            height: 40,
            alignSelf: 'center',
            // backgroundColor: 'pink',
            marginTop: 28,
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#F0F4F5',
          }}>
          <Image
            source={Icon.Lock}
            style={{
              resizeMode: 'contain',
              height: 16,
              width: 16,
              alignSelf: 'center',
              marginHorizontal: 10,
            }}
          />
          <TextInput
            style={{
              marginHorizontal: 15,
              fontWeight: '700',
              fontSize: 16,
              fontFamily: family.black,
            }}
            value={password}
            onChangeText={e =>
              setParams({...params, password: e.split(' ').join('')})
            }
            secureTextEntry
            placeholder="Enter Your Password"></TextInput>
        </View>
        {isShowPassError && (
          <Text
            style={{
              fontSize: 12,
              fontFamily: family.light,
              color: 'red',
              marginTop: 5,

              marginHorizontal: 40,
            }}>
            {password == '' && '*Please Enter your Password'}
            {/* {'*Please Enter Your Correct Password'} */}
          </Text>
        )}
        <TouchableOpacity
          style={{
            marginTop: 24,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#DD1D21',
            height: 59,
            width: 129,
            borderRadius: 50,
            flexDirection: 'row',
          }}
          onPress={() => {
            setisShowEmailError(false);
            setisShowPassError(false);
            validations();
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: '600',
              fontFamily: family.black,
            }}>
            Login
          </Text>
          <Image
            source={Icon.Arrow}
            style={{
              resizeMode: 'contain',
              width: 16,
              height: 8,
              marginLeft: 8,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 23,
            alignSelf: 'center',
            fontSize: 12,
            fontWeight: '700',
            fontFamily: family.black,
          }}>
          Forgot Password ?
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
