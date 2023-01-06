import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "../../Config/AppIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./Styles";
let interval = null;
var counter = 60;
const Details = ({ route, navigation }) => {
  const [timerOn, settimerOn] = useState(0);
  const [running, setRunning] = useState(true);

  React.useEffect(() => {
    async function getTime() {
      const time = await AsyncStorage.getItem(route.params.id + "");

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
      } else {
        setStartTime();
        timer();
      }
    }
    getTime();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const setStartTime = () => {
    AsyncStorage.setItem(
      route.params.id + "",
      (new Date().valueOf() / 1000).toString()
    );
  };
  const timer = () => {
    interval = setInterval(() => {
      counter = counter - 1 > 0 ? counter - 1 : 0;
      settimerOn(counter);
      if (counter <= 0) {
        setRunning(false);
        clearInterval(interval);
      }
    }, 1000);
  };
  return (
    <SafeAreaView style={styles.safeView}>
      <Image source={Icon.Bg} style={styles.Bg} />
      <View style={{ flex: 1 }}>
        <View style={styles.headingView}>
          <TouchableOpacity
            style={{ marginHorizontal: 32 }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image source={Icon.Back} style={styles.back} />
          </TouchableOpacity>
          <Text style={styles.heading}>Details</Text>
        </View>
        <View style={styles.lowerView}>
          <Text style={styles.heading1}>Station Subscribed</Text>
          <View style={styles.listView}>
            <Text style={styles.activeText}>ACTIVE FROM</Text>
            <View style={styles.timeView}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.time}>{timerOn}</Text>
                <Text style={styles.secText}>seconds</Text>
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
                style={styles.button}
              >
                <Text style={styles.btnText}>{running ? "Stop" : "Start"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.infoView}>
              <Text style={styles.infoText}>MORE INFO</Text>
              <TouchableOpacity style={styles.arrowView}>
                <Image source={Icon.Down} style={styles.arrow} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Details;
