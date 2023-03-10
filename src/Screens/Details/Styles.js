import { StyleSheet } from "react-native";
import { family } from "../../Config/AppFont";

 export const styles = StyleSheet.create({
    safeView: { flex: 1, backgroundColor: "#FFFFFF" },
    Bg: {
      width: "100%",
      height: 428,
      position: "absolute",
      top: -100,
    },
    headingView: {
      flexDirection: "row",
      marginTop: 78,
      alignItems: "center",
      width: "100%",
    },
    back: { resizemode: "contain", height: 10, width: 22 },
    heading: {
      fontFamily: family.black,
      fontSize: 21,
      fontWeight: "700",
      marginHorizontal: 70,
    },
    lowerView: {
      marginTop: 43,
      flex: 1,
      backgroundColor: "#FFFFFF",
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
    },
    heading1: {
      fontFamily: family.black,
      fontSize: 21,
      fontWeight: "700",
      marginTop: 50,
      marginHorizontal: 38,
    },
    listView: {
      width: "85%",
      backgroundColor: "white",
      height: 149,
      alignSelf: "center",
      marginTop: 15,
      borderRadius: 16,
      shadowRadius: 20,
      shadowColor: "#000000BB",
      shadowOpacity: 0.2,
    },
    activeText: {
      fontFamily: family.black,
      fontSize: 16,
      fontWeight: "600",
      marginHorizontal: 25,
      marginTop: 20,
    },
    timeView: {
      flexDirection: "row",
      marginTop: 7,
      justifyContent: "space-between",
    },
    time: {
      fontSize: 36,
      fontWeight: "700",
      marginLeft: 25,
      fontFamily: family.black,
    },
    secText: {
      lineHeight: 18,
      fontWeight: "600",
      fontSize: 11,
      fontFamily: family.black,
    },
    button: {
      width: 110,
      height: 28,
      backgroundColor: "#DD1D21",
      borderRadius: 50,
      marginRight: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    btnText: {
      fontSize: 12,
      color: "white",
      fontWeight: "600",
      fontFamily: family.black,
    },
    infoView: {
      flexDirection: "row",
      marginLeft: 25,
    },
    infoText: {
      fontSize: 10,
      fontWeight: "600",
      alignSelf: "center",
      fontFamily: family.black,
    },
    arrowView: {
      height: 21,
      width: 21,
      backgroundColor: "#E2E8E1",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 11,
    },
    arrow: { resizeMode: "contain", height: 7, width: 7 },
  });