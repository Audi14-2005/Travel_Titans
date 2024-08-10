import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13144 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13145}>
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
        style={[styles.iphone13145Child, styles.iphone13145ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.iphone13145Item, styles.iphone13145Position]}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />
      <Image
        style={[styles.iphone13145Inner, styles.iphone13145Position]}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.iphone13145ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />
      <Image
        style={[styles.iphone13145Child1, styles.iphone13145ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.iphone13145Child2, styles.iphone13145ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />
      <Pressable
        style={[styles.eventWrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("IPhone13145")}
      >
        <Text style={[styles.event, styles.skipTypo]}>Event</Text>
      </Pressable>
      <Pressable
        style={[styles.touristWrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("IPhone13145")}
      >
        <Text style={[styles.tourist, styles.skipTypo]}>Tourist</Text>
      </Pressable>
      <Pressable
        style={[styles.regularWrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("IPhone13145")}
      >
        <Text style={[styles.regular, styles.skipTypo]}>Regular</Text>
      </Pressable>
      <Image
        style={[
          styles.whatsappImage20240809At1,
          styles.whatsappImage20240809At1Position,
        ]}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240809-at-173919-f77685d1-1.png")}
      />
      <Image
        style={[styles.screenshot202408091746531, styles.wrapperPosition]}
        contentFit="cover"
        source={require("../assets/screenshot-20240809-174653-1.png")}
      />
      <Image
        style={[
          styles.screenshot202408091745411,
          styles.whatsappImage20240809At1Position,
        ]}
        contentFit="cover"
        source={require("../assets/screenshot-20240809-174541-1.png")}
      />
      <Pressable
        style={[styles.skipWrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("IPhone13145")}
      >
        <Text style={[styles.skip, styles.skipTypo]}>Skip</Text>
      </Pressable>
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
  iphone13145ChildLayout: {
    height: 170,
    width: 235,
    position: "absolute",
  },
  iphone13145Position: {
    top: 674,
    height: 170,
    width: 235,
    position: "absolute",
  },
  wrapperLayout: {
    height: 110,
    width: 264,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.backgroundsPrimary,
    overflow: "hidden",
  },
  skipTypo: {
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
    lineHeight: 45,
    fontSize: FontSize.size_16xl,
    textAlign: "center",
    color: Color.labelsPrimary,
    position: "absolute",
  },
  wrapperPosition: {
    left: 65,
    position: "absolute",
  },
  whatsappImage20240809At1Position: {
    left: 76,
    position: "absolute",
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
    width: 393,
    height: 54,
    backgroundColor: Color.backgroundsPrimary,
    left: -3,
    position: "absolute",
  },
  iphone13145Child: {
    top: 80,
    left: 155,
  },
  iphone13145Item: {
    left: -28,
  },
  iphone13145Inner: {
    left: 197,
  },
  ellipseIcon: {
    top: 55,
    left: -3,
    width: 235,
  },
  iphone13145Child1: {
    top: 315,
    left: 15,
  },
  iphone13145Child2: {
    top: 337,
    left: 181,
  },
  event: {
    left: 134,
    top: 32,
    fontStyle: "italic",
    lineHeight: 45,
    fontSize: FontSize.size_16xl,
  },
  eventWrapper: {
    top: 140,
    left: 62,
    position: "absolute",
    height: 110,
    width: 264,
    borderRadius: Border.br_16xl,
  },
  tourist: {
    left: 113,
    top: 32,
    fontStyle: "italic",
    lineHeight: 45,
    fontSize: FontSize.size_16xl,
  },
  touristWrapper: {
    top: 290,
    height: 110,
    width: 264,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.backgroundsPrimary,
    overflow: "hidden",
  },
  regular: {
    left: 118,
    top: 32,
    fontStyle: "italic",
    lineHeight: 45,
    fontSize: FontSize.size_16xl,
  },
  regularWrapper: {
    top: 440,
    left: 63,
    position: "absolute",
    height: 110,
    width: 264,
    borderRadius: Border.br_16xl,
  },
  whatsappImage20240809At1: {
    top: 295,
    borderRadius: 15,
    width: 79,
    height: 100,
  },
  screenshot202408091746531: {
    top: 460,
    borderRadius: Border.br_xl,
    width: 102,
    height: 82,
  },
  screenshot202408091745411: {
    top: 162,
    borderRadius: 10,
    width: 93,
    height: 63,
  },
  skip: {
    top: 8,
    left: 88,
  },
  skipWrapper: {
    top: 630,
    borderRadius: Border.br_81xl,
    width: 247,
    height: 62,
    backgroundColor: Color.backgroundsPrimary,
    left: 65,
    overflow: "hidden",
  },
  iphone13145: {
    backgroundColor: Color.colorSkyblue_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone13144;
