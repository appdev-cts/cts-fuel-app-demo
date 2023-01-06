import { Dimensions, StyleSheet } from "react-native";
import { family } from "../../Config/AppFont";

 export const styles = StyleSheet.create({
    Bg: {
      width: "100%",
      height: 428,
      position: "absolute",
      top: -100,
    },
    logo: {
      height: 88,
      width: 82,
      resizeMode: "contain",
      alignSelf: "center",
      marginTop: Dimensions.get("window").height / 17,
    },
    lowerView: {
      marginTop: 43,
      flex: 1,
      backgroundColor: "#FFFFFF",
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
    },
    heading: {
      alignSelf: "center",
      fontSize: 21,
      fontWeight: "700",
      marginTop: 33,
      fontFamily: family.black,
    },
    description: {
      marginTop: 24,
      height: 250,
      width: 300,
      alignSelf: "center",
      resizeMode: "contain",
    },
    button: {
      marginTop: 24,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#DD1D21",
      height: 59,
      width: 239,
      borderRadius: 50,
      flexDirection: "row",
    },
    buttonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "600",
      fontFamily: family.black,
    },
  });