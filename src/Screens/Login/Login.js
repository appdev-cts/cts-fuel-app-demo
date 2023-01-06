import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Icon } from "../../Config/AppIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./Style";

const Login = ({ navigation }) => {
  const [isShowEmailError, setisShowEmailError] = React.useState(false);
  const [isShowPassError, setisShowPassError] = React.useState(false);
  const [params, setParams] = React.useState({
    email: "",
    password: "",
  });
  const loginApi = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          AsyncStorage.setItem("token", res.token + "");
          navigation.navigate("Disclaimer");
          setParams({ ...params, password: "", email: "" });
        } else {
          alert(JSON.stringify(res.error));
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };
  const validations = () => {
    if (email == "" || password == "" || !reg.test(email)) {
      setisShowEmailError(email == "" || !reg.test(email));
      setisShowPassError(password == "");
    } else {
      loginApi();
    }
  };
  const { email, password } = params;
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Image source={Icon.Bg} style={styles.Bg} />
      <View style={{ flex: 1 }}>
        <Image source={Icon.Logo} style={styles.logo} />
        <Text style={styles.heading}>Login</Text>
        <View style={styles.textInputView}>
          <Image source={Icon.At} style={styles.inputLogo} />
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={(e) =>
              setParams({ ...params, email: e.split(" ").join("") })
            }
            placeholder="Enter Your Email"
          />
        </View>
        {isShowEmailError && (
          <Text style={styles.errorMes}>
            {email == ""
              ? "*Please Enter your Email"
              : !reg.test(email) && "*Please Enter Your Correct Email"}
          </Text>
        )}
        <View style={[styles.textInputView, { marginTop: 28 }]}>
          <Image source={Icon.Lock} style={styles.inputLogo} />
          <TextInput
            style={styles.textInput}
            value={password}
            onChangeText={(e) =>
              setParams({ ...params, password: e.split(" ").join("") })
            }
            secureTextEntry
            placeholder="Enter Your Password"
          ></TextInput>
        </View>
        {isShowPassError && (
          <Text style={styles.errorMes}>
            {password == "" && "*Please Enter your Password"}
          </Text>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setisShowEmailError(false);
            setisShowPassError(false);
            validations();
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
          <Image source={Icon.Arrow} style={styles.buttonLogo} />
        </TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password ?</Text>
      </View>
    </SafeAreaView>
  );
};
export default Login;
