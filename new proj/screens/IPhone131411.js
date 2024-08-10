import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone131411 = () => {
  return (
    <View style={styles.iphone13149}>
      <View style={[styles.iphone13149Child, styles.iphone13149Layout]} />
      <View style={[styles.iphone13149Item, styles.iphone13149Layout]} />
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
        style={[styles.iphone13149Inner, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-25.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-27.png")}
      />
      <Text style={[styles.package, styles.packageTypo]}>Package</Text>
      <Text style={[styles.customised, styles.packageTypo]}>Customised</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone13149Layout: {
    height: 153,
    width: 259,
    backgroundColor: Color.borderDefaultDefault,
    borderRadius: Border.br_21xl,
    left: 74,
    position: "absolute",
  },
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
  ellipseIconLayout: {
    width: 299,
    position: "absolute",
  },
  packageTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
    lineHeight: 19,
    fontSize: FontSize.size_21xl,
    color: Color.labelsPrimary,
    position: "absolute",
  },
  iphone13149Child: {
    top: 455,
  },
  iphone13149Item: {
    top: 154,
  },
  time1: {
    top: "33.89%",
    left: "38.58%",
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.sFPro,
    textAlign: "center",
    color: Color.labelsPrimary,
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
    top: 0,
    left: -3,
    backgroundColor: Color.backgroundsPrimary,
    width: 393,
    height: 54,
    position: "absolute",
  },
  iphone13149Inner: {
    top: 659,
    left: 168,
    height: 204,
  },
  ellipseIcon: {
    top: 301,
    left: 231,
    height: 252,
  },
  package: {
    top: 215,
    left: 122,
  },
  customised: {
    top: 522,
    left: 94,
  },
  iphone13149: {
    backgroundColor: Color.colorSkyblue_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone131411;
