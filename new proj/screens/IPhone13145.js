import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const IPhone13145 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13146}>
      <View style={styles.statusBarIphone}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.time1}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={[styles.battery, styles.borderPosition]}>
            <View style={[styles.border, styles.borderPosition]} />
            <Image
              style={[styles.capIcon, styles.iconPosition1]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.borderPosition]} />
          </View>
          <Image
            style={[styles.wifiIcon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.iphone13146Child, styles.iphone13146ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.iphone13146Item, styles.iphone13146ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.iphone13146Inner, styles.iphone13146ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.iphone13146ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.iphone13146Child1, styles.iphone13146ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.iphone13146Child2, styles.iphone13146ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.iphone13146Child3, styles.iphone13146ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-23.png")}
      />
      <View style={[styles.searchBarBigParent, styles.searchLayout]}>
        <View style={[styles.searchBarBig, styles.searchLayout]}>
          <Image
            style={[styles.iconRight, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/icon-right.png")}
          />
          <Text style={styles.searchInput}>{`Search for apps & games`}</Text>
          <Image
            style={[styles.iconLeft, styles.iconLeftLayout]}
            contentFit="cover"
            source={require("../assets/icon-left.png")}
          />
        </View>
        <View style={[styles.frameChild, styles.ss61IconLayout]} />
        <Image
          style={[styles.ss61Icon, styles.ss61IconLayout]}
          contentFit="cover"
          source={require("../assets/ss6-1.png")}
        />
        <Pressable
          style={[styles.accountCircle, styles.iconLeftLayout]}
          onPress={() => navigation.navigate("IPhone13146")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/account-circle1.png")}
          />
        </Pressable>
      </View>
      <Image
        style={styles.iphone13146Child4}
        contentFit="cover"
        source={require("../assets/ellipse-241.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    width: "35.75%",
    marginTop: -27,
    top: "50%",
    height: 54,
    position: "absolute",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition1: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  iphone13146ChildLayout: {
    height: 170,
    width: 235,
    position: "absolute",
  },
  searchLayout: {
    height: 48,
    position: "absolute",
  },
  iconPosition: {
    marginTop: -12,
    top: "50%",
  },
  iconLeftLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  ss61IconLayout: {
    height: 28,
    width: 31,
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
    top: "50%",
  },
  border: {
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    borderStyle: "solid",
    borderColor: Color.labelsPrimary,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    height: "100%",
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
    top: "50%",
  },
  statusBarIphone: {
    top: 0,
    left: -3,
    width: 393,
    height: 54,
    backgroundColor: Color.backgroundsPrimary,
    position: "absolute",
  },
  iphone13146Child: {
    left: 236,
    top: 18,
  },
  iphone13146Item: {
    top: 190,
    left: 215,
  },
  iphone13146Inner: {
    top: 104,
    left: -42,
  },
  ellipseIcon: {
    top: 317,
    left: -35,
  },
  iphone13146Child1: {
    top: 402,
    left: 162,
  },
  iphone13146Child2: {
    top: -3,
    left: 13,
  },
  iphone13146Child3: {
    top: 631,
    left: 0,
  },
  iconRight: {
    right: 36,
    width: 0,
    height: 0,
    position: "absolute",
  },
  searchInput: {
    height: "50%",
    top: "25%",
    left: 55,
    fontSize: FontSize.singleLineBodyBase_size,
    lineHeight: 19,
    fontFamily: FontFamily.robotoRegular,
    color: Color.black38,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 269,
    position: "absolute",
  },
  iconLeft: {
    left: 16,
    marginTop: -12,
    top: "50%",
  },
  searchBarBig: {
    marginTop: -24,
    right: 0,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1.33,
    elevation: 1.33,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
    left: 0,
    top: "50%",
    backgroundColor: Color.backgroundsPrimary,
    height: 48,
  },
  frameChild: {
    left: 101,
    top: 18,
  },
  ss61Icon: {
    top: 10,
    left: 12,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  accountCircle: {
    left: 308,
    top: 12,
  },
  searchBarBigParent: {
    top: 74,
    left: 21,
    width: 344,
  },
  iphone13146Child4: {
    top: 533,
    left: 204,
    width: 299,
    height: 217,
    position: "absolute",
  },
  iphone13146: {
    backgroundColor: Color.colorSkyblue_200,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13145;
