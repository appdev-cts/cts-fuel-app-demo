import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Icon } from "../../Config/AppIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./Styles";
const Disclaimer = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Image source={Icon.Bg} style={styles.Bg} />
      <View style={{ flex: 1 }}>
        <Image source={Icon.Logo} style={styles.logo} />
        <View style={styles.lowerView}>
          <Text style={styles.heading}>Disclaimer</Text>
          <Image source={Icon.Disclaimer} style={styles.description} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              AsyncStorage.setItem("accept", "1");
              navigation.replace("Station");
            }}
          >
            <Text style={styles.buttonText}>I Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Disclaimer;


