import { Dimensions, StyleSheet } from "react-native";
import { family } from "../../Config/AppFont";

 
 export const styles = StyleSheet.create({
    Bg: {
      width: "100%",
      height: 428,
      position: "absolute",
      bottom: 0,
    },
    logo: {
      height: 88,
      width: 82,
      resizeMode: "contain",
      alignSelf: "center",
      marginTop: Dimensions.get("window").height / 10,
    },
    heading: {
      alignSelf: "center",
      fontSize: 21,
      fontWeight: "700",
      marginTop: Dimensions.get("window").height / 22,
      fontFamily: family.black,
    },
    textInputView: {
      width: "80%",
      height: 40,
      alignSelf: "center",
      marginTop: 54,
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#F0F4F5",
    },
    textInput: {
      marginHorizontal: 15,
      fontWeight: "700",
      fontSize: 16,
      fontFamily: family.black,
    },
    inputLogo: {
      resizeMode: "contain",
      height: 16,
      width: 16,
      alignSelf: "center",
      marginHorizontal: 10,
    },
    errorMes: {
      fontSize: 12,
      fontFamily: family.light,
      color: "red",
      marginTop: 5,
      marginHorizontal: 40,
    },
    button: {
      marginTop: 24,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#DD1D21",
      height: 59,
      width: 129,
      borderRadius: 50,
      flexDirection: "row",
    },
    buttonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "600",
      fontFamily: family.black,
    },
    buttonLogo: {
      resizeMode: "contain",
      width: 16,
      height: 8,
      marginLeft: 8,
    },
    forgotText: {
      marginTop: 23,
      alignSelf: "center",
      fontSize: 12,
      fontWeight: "700",
      fontFamily: family.black,
    },
  });
  