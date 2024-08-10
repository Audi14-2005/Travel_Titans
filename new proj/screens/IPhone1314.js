import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const IPhone1314 = () => {
  return (
    <View style={styles.iphone13141}>
      <Image
        style={styles.logo1Icon}
        contentFit="cover"
        source={require("../assets/logo-1.png")}
      />
      <Text style={[styles.xploreAseTravelContainer, styles.eFlexBox]}>
        <Text style={styles.xploreAse}>
          <Text style={styles.xplore}>
            <Text style={styles.xplore1}>{`         
         xplore
`}</Text>
            <Text style={styles.blankLine}> </Text>
          </Text>
          <Text style={styles.ase}>{`    ase

`}</Text>
        </Text>
        <Text style={[styles.travelWithEase, styles.eTypo]}>
          Travel with ease!
        </Text>
      </Text>
      <Image
        style={styles.iphone13141Child}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.e, styles.eTypo]}>E</Text>
      <View style={[styles.pageControl, styles.pageControlPosition]}>
        <View style={styles.frame}>
          <View style={styles.platter}>
            <View style={[styles.ultrathin, styles.borderPosition]} />
          </View>
          <View style={[styles.dot1, styles.dotLayout]} />
          <View style={[styles.dot2, styles.dotLayout]} />
        </View>
      </View>
      <View style={styles.statusBarIphone}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={[styles.time1, styles.eFlexBox]}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={styles.battery}>
            <View style={[styles.border, styles.borderPosition]} />
            <Image
              style={[styles.capIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/cap1.png")}
            />
            <View style={[styles.capacity, styles.capacityPosition]} />
          </View>
          <Image
            style={[styles.wifiIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/cellular-connection1.png")}
          />
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.pageControlPosition]}>
        <View style={[styles.homeIndicator1, styles.capacityPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  eTypo: {
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
  },
  pageControlPosition: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  borderPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  dotLayout: {
    marginLeft: 8,
    height: 8,
    width: 8,
    backgroundColor: Color.labelsPrimary,
    borderRadius: Border.br_31xl,
  },
  timePosition: {
    width: "35.74%",
    marginTop: -27,
    height: 54,
    top: "50%",
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  capacityPosition: {
    backgroundColor: Color.labelsPrimary,
    left: "50%",
    position: "absolute",
  },
  logo1Icon: {
    top: 54,
    height: 835,
    width: 390,
    left: 0,
    position: "absolute",
  },
  xplore1: {
    fontSize: FontSize.size_21xl,
  },
  blankLine: {
    fontSize: 80,
  },
  xplore: {
    lineHeight: 22,
  },
  ase: {
    lineHeight: 18,
    fontSize: FontSize.size_21xl,
  },
  xploreAse: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    fontStyle: "italic",
  },
  travelWithEase: {
    fontSize: FontSize.size_xl,
    fontWeight: "300",
    lineHeight: 22,
  },
  xploreAseTravelContainer: {
    left: -1,
    height: 116,
    transform: [
      {
        rotate: "0.2deg",
      },
    ],
    color: Color.labelsPrimary,
    textAlign: "center",
    top: 119,
    width: 390,
  },
  iphone13141Child: {
    left: -268,
    width: 925,
    height: 169,
    top: 119,
    position: "absolute",
  },
  e: {
    top: 162,
    left: 94,
    fontSize: 100,
    color: "#61b4cf",
    width: 95,
    height: 133,
    lineHeight: 18,
    textAlign: "center",
    position: "absolute",
  },
  ultrathin: {
    backgroundColor: Color.colorSilver,
    left: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  platter: {
    right: 0,
    bottom: 0,
    zIndex: 0,
    borderRadius: Border.br_81xl,
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  dot1: {
    zIndex: 1,
  },
  dot2: {
    opacity: 0.3,
    zIndex: 2,
  },
  frame: {
    marginTop: -12,
    marginLeft: -24.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_31xl,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  pageControl: {
    top: 790,
    height: 44,
  },
  time1: {
    top: "33.89%",
    left: "38.88%",
    fontSize: FontSize.size_mid,
    fontWeight: "600",
    fontFamily: FontFamily.sFPro,
    lineHeight: 22,
    color: Color.labelsPrimary,
    textAlign: "center",
  },
  time: {
    right: "64.26%",
    left: "0%",
  },
  border: {
    marginLeft: -13.65,
    borderRadius: Border.br_8xs_3,
    borderStyle: "solid",
    borderColor: Color.labelsPrimary,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    left: "50%",
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
    width: 21,
  },
  battery: {
    height: "24.07%",
    marginLeft: 11.3,
    top: "42.59%",
    bottom: "33.33%",
    width: 27,
    left: "50%",
    position: "absolute",
  },
  wifiIcon: {
    height: "22.78%",
    marginLeft: -13,
    top: "43.7%",
    bottom: "33.52%",
    width: 17,
  },
  cellularConnectionIcon: {
    height: "22.59%",
    marginLeft: -39.7,
    top: "43.52%",
    bottom: "33.89%",
    width: 19,
  },
  levels: {
    left: "64.26%",
    right: "0%",
  },
  statusBarIphone: {
    height: 54,
    top: 0,
    width: 390,
    left: 0,
    position: "absolute",
    backgroundColor: Color.backgroundsPrimary,
  },
  homeIndicator1: {
    marginLeft: 69.5,
    bottom: 8,
    width: 139,
    height: 5,
    borderRadius: Border.br_81xl,
    transform: [
      {
        rotate: "0.2deg",
      },
    ],
  },
  homeIndicator: {
    top: 823,
    height: 21,
  },
  iphone13141: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.backgroundsPrimary,
    width: "100%",
  },
});

export default IPhone1314;
