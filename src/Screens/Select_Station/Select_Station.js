import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Icon } from "../../Config/AppIcon";
import { styles } from "./Styles";
const Select_Station = ({ navigation }) => {
  useEffect(() => {
    getDataUsingGet();
  }, []);
  const getDataUsingGet = () => {
    fetch("https://reqres.in/api/unknown", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("=====>", responseJson);
        setFilter(responseJson.data);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  };
  const [Search, setSearch] = useState();
  const [filterData, setFilter] = useState([]);
  const FilterHandle = (query) => {
    let filter = filterData.filter((item) => {
      return (
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.id.toString().includes(query)
      );
    });
    if (query == "") {
      getDataUsingGet();
    }
    setFilter(filter);
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listView}
      onPress={() => {
        navigation.navigate("Details", { id: item.id });
      }}
    >
      <Image source={Icon.Pump} style={styles.pump} />
      <View style={{ marginHorizontal: 31 }}>
        <Text style={styles.id}>{item.id}</Text>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.safeView}>
      <Image source={Icon.Bg} style={styles.Bg} />
      <View style={{ flex: 1 }}>
        <Text style={styles.heading}>Select Station</Text>
        <View style={styles.lowerView}>
          <View style={styles.inputView}>
            <Image source={Icon.Search} style={styles.search} />
            <TextInput
              placeholder="Search by ID, Name, City"
              value={Search}
              style={styles.textInput}
              onChangeText={(e) => {
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
