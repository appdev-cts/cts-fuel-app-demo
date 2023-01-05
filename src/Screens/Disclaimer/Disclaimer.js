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
const Disclaimer = ({navigation}) => {
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
        <Image
          source={Icon.Logo}
          style={{
            height: 88,
            width: 82,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginTop: Dimensions.get('window').height / 17,
          }}
        />
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
              alignSelf: 'center',
              fontSize: 21,
              fontWeight: '700',
              marginTop: 33,
              fontFamily: family.black,
            }}>
            Disclaimer
          </Text>
          <Image
            source={Icon.Disclaimer}
            style={{
              marginTop: 24,
              height: 250,
              width: 300,
              alignSelf: 'center',
              resizeMode: 'contain',
            }}
          />
          <TouchableOpacity
            style={{
              marginTop: 24,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#DD1D21',
              height: 59,
              width: 239,
              borderRadius: 50,
              flexDirection: 'row',
            }}
            onPress={() => {
              AsyncStorage.setItem('accept', '1');
              navigation.replace('Station');
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '600',
                fontFamily: family.black,
              }}>
              I Accept
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Disclaimer;

const styles = StyleSheet.create({});
