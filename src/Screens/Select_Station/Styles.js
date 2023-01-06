import { StyleSheet } from "react-native";
import { family } from "../../Config/AppFont";

 export const styles = StyleSheet.create({
    listView: {
      marginTop: 28,
      alignSelf: "center",
      flexDirection: "row",
      width: "85%",
      height: 77,
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#F0F4F5",
    },
    pump: { height: 36, width: 36, resizemode: "contain" },
    id: {
      fontWeight: "600",
      fontSize: 18,
      lineHeight: 27,
      fontFamily: family.black,
    },
    name: {
      fontWeight: "600",
      fontSize: 14,
      lineHeight: 27,
      color: "#ADB7C6",
      fontFamily: family.black,
    },
    safeView: { flex: 1, backgroundColor: "#FFFFFF" },
    Bg: {
      width: "100%",
      height: 428,
      position: "absolute",
      top: -100,
    },
    heading: {
      fontFamily: family.black,
      alignSelf: "center",
      fontSize: 21,
      fontWeight: "700",
      marginTop: 78,
    },
    lowerView: {
      marginTop: 43,
      flex: 1,
      backgroundColor: "#FFFFFF",
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
    },
    inputView: {
      alignSelf: "center",
      height: 60,
      backgroundColor: "#F0F4F5",
      borderRadius: 11,
      width: "85%",
      flexDirection: "row",
      marginTop: 37,
      alignItems: "center",
    },
    search: {
      resizeMode: "contain",
      height: 19,
      width: 19,
      marginHorizontal: 22,
    },
    textInput: {
      fontSize: 15,
      fontWeight: "500",
      fontFamily: family.black,
    },
  });