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
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Icon} from '../../Config/AppIcon';
import {family} from '../../Config/AppFont';
const DATA = [];

const Select_Station = ({navigation}) => {
  useEffect(() => {
    getDataUsingGet();
  }, []);

  const getDataUsingGet = () => {
    //GET request
    fetch('https://reqres.in/api/unknown', {
      method: 'GET',
      //Request Type
    })
      .then(response => response.json())
      //If response is in json then in success
      .then(responseJson => {
        console.log('=====>', responseJson);
        setFilter(responseJson.data);
      })
      //If response is not in json then in error
      .catch(error => {
        //Error
        alert(JSON.stringify(error));
        console.error(error);
      });
  };

  const [Search, setSearch] = useState();
  const [filterData, setFilter] = useState([]);
  const FilterHandle = query => {
    let filter = filterData.filter(item => {
      return (
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.id.toString().includes(query)
      );
    });
    if (query == '') {
      getDataUsingGet();
    }
    setFilter(filter);
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        marginTop: 28,
        alignSelf: 'center',
        // backgroundColor: 'pink',
        flexDirection: 'row',
        width: '85%',
        height: 77,
        // justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F4F5',
      }}
      onPress={() => {
        navigation.navigate('Details');
      }}>
      <Image
        source={Icon.Pump}
        style={{height: 36, width: 36, resizemode: 'contain'}}
      />
      <View style={{marginHorizontal: 31}}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 18,
            lineHeight: 27,
            fontFamily: family.black,
          }}>
          {item.id}
        </Text>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 14,
            lineHeight: 27,
            color: '#ADB7C6',
            fontFamily: family.black,
          }}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

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
        <Text
          style={{
            fontFamily: family.black,
            alignSelf: 'center',
            fontSize: 21,
            fontWeight: '700',
            marginTop: 78,
          }}>
          Select Station
        </Text>
        <View
          style={{
            marginTop: 43,
            flex: 1,
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}>
          <View
            style={{
              alignSelf: 'center',
              height: 60,
              backgroundColor: '#F0F4F5',
              borderRadius: 11,
              width: '85%',
              flexDirection: 'row',
              // justifyContent:'center',
              marginTop: 37,
              alignItems: 'center',
            }}>
            <Image
              source={Icon.Search}
              style={{
                resizeMode: 'contain',
                height: 19,
                width: 19,
                marginHorizontal: 22,
              }}
            />

            <TextInput
              placeholder="Search by ID, Name, City"
              value={Search}
              style={{
                fontSize: 15,
                fontWeight: '500',
                fontFamily: family.black,
              }}
              onChangeText={e => {
                setSearch(e);
                FilterHandle(e.toString());
              }}
            />
          </View>
          <FlatList data={filterData} renderItem={renderItem} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Select_Station;

const styles = StyleSheet.create({});
