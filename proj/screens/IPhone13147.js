import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const IPhone13147 = () => {
  return (
    <View style={styles.iphone13147}>
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
        style={[styles.iphone13147Child, styles.iphone13147ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Image
        style={styles.iphone13147Item}
        contentFit="cover"
        source={require("../assets/ellipse-25.png")}
      />
      <Image
        style={[styles.iphone13147Inner, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-26.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-27.png")}
      />
      <Image
        style={[styles.iphone13147Child1, styles.iphone13147ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <View style={styles.rectangleView} />
      <View
        style={[styles.iphone13147Child2, styles.iphone13147ChildPosition]}
      />
      <View
        style={[styles.iphone13147Child3, styles.iphone13147ChildPosition]}
      />
      <View
        style={[styles.iphone13147Child4, styles.iphone13147ChildPosition]}
      />
      <View
        style={[styles.iphone13147Child5, styles.iphone13147ChildPosition]}
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
  iphone13147ChildLayout: {
    height: 170,
    width: 369,
    position: "absolute",
  },
  ellipseIconPosition: {
    top: 301,
    width: 299,
    position: "absolute",
  },
  iphone13147ChildPosition: {
    width: 97,
    top: 737,
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
  iphone13147Child: {
    top: 131,
    left: 141,
  },
  iphone13147Item: {
    top: 659,
    left: 168,
    height: 204,
    width: 299,
    position: "absolute",
  },
  iphone13147Inner: {
    left: -68,
    height: 211,
  },
  ellipseIcon: {
    left: 231,
    height: 252,
  },
  iphone13147Child1: {
    left: -86,
    top: 0,
    height: 170,
    width: 369,
  },
  rectangleView: {
    right: 0,
    backgroundColor: Color.colorGainsboro_100,
    width: 390,
    height: 107,
    top: 737,
    position: "absolute",
  },
  iphone13147Child2: {
    left: 0,
    backgroundColor: "#54e07b",
    height: 126,
  },
  iphone13147Child3: {
    left: 98,
    backgroundColor: "#9c428e",
    height: 107,
  },
  iphone13147Child4: {
    left: 195,
    backgroundColor: "#a1ad16",
    height: 107,
  },
  iphone13147Child5: {
    left: 292,
    backgroundColor: "#d31c31",
    height: 107,
  },
  iphone13147: {
    backgroundColor: Color.colorSkyblue_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone13147;
