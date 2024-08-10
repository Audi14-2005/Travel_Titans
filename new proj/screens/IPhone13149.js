import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const IPhone13149 = () => {
  return (
    <View style={styles.iphone131411}>
      <View style={styles.statusBarIphone}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.time1}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={[styles.battery, styles.borderPosition]}>
            <View style={[styles.border, styles.borderPosition]} />
            <Image
              style={[styles.capIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.borderPosition]} />
          </View>
          <Image
            style={[styles.wifiIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
      </View>
      <View style={styles.statusBarIphone}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.time1}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={[styles.battery, styles.borderPosition]}>
            <View style={[styles.border, styles.borderPosition]} />
            <Image
              style={[styles.capIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.borderPosition]} />
          </View>
          <Image
            style={[styles.wifiIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.iphone131411Child, styles.iphone131411ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Image
        style={styles.iphone131411Item}
        contentFit="cover"
        source={require("../assets/ellipse-25.png")}
      />
      <Image
        style={[styles.iphone131411Inner, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-26.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-27.png")}
      />
      <Image
        style={[styles.iphone131411Child1, styles.iphone131411ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Image
        style={[styles.iphone131411Child2, styles.iphone131411ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    top: "50%",
    width: "35.75%",
    marginTop: -27,
    height: 54,
    position: "absolute",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  iphone131411ChildLayout: {
    height: 170,
    width: 369,
    position: "absolute",
  },
  ellipseIconPosition: {
    top: 301,
    width: 299,
    position: "absolute",
  },
  time1: {
    top: "33.89%",
    left: "38.58%",
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.sFPro,
    color: Color.labelsPrimary,
    textAlign: "center",
    position: "absolute",
  },
  time: {
    right: "64.25%",
    left: "0%",
  },
  border: {
    height: "100%",
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    borderStyle: "solid",
    borderColor: Color.labelsPrimary,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    width: 1,
  },
  capacity: {
    height: "69.23%",
    marginLeft: -11.65,
    top: "15.38%",
    bottom: "15.38%",
    borderRadius: Border.br_10xs_5,
    backgroundColor: Color.labelsPrimary,
    width: 21,
  },
  battery: {
    height: "24.07%",
    marginLeft: 10.75,
    top: "42.59%",
    bottom: "33.33%",
    width: 27,
  },
  wifiIcon: {
    height: "22.78%",
    marginLeft: -13.55,
    top: "43.7%",
    bottom: "33.52%",
    width: 17,
  },
  cellularConnectionIcon: {
    height: "22.59%",
    marginLeft: -40.25,
    top: "43.52%",
    bottom: "33.89%",
    width: 19,
  },
  levels: {
    right: "0%",
    left: "64.25%",
  },
  statusBarIphone: {
    left: -3,
    backgroundColor: Color.backgroundsPrimary,
    width: 393,
    height: 54,
    top: 0,
    position: "absolute",
  },
  iphone131411Child: {
    top: 131,
    left: 141,
  },
  iphone131411Item: {
    top: 659,
    left: 168,
    height: 204,
    width: 299,
    position: "absolute",
  },
  iphone131411Inner: {
    left: -68,
    height: 211,
  },
  ellipseIcon: {
    left: 231,
    height: 252,
  },
  iphone131411Child1: {
    left: -86,
    top: 0,
    height: 170,
    width: 369,
  },
  iphone131411Child2: {
    top: 407,
    left: -208,
  },
  iphone131411: {
    backgroundColor: Color.colorSkyblue_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone13149;
