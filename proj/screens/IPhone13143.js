import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IPhone13143 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13144}>
      <View style={styles.statusBarIphone}>
        <View style={styles.statusBarIphone1}>
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
      </View>
      <View style={styles.frameParent}>
        <View style={[styles.contactAdminWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.contactAdmin}>Contact Admin</Text>
        </View>
        <View style={[styles.wrapper, styles.wrapperPosition]}>
          <Text style={[styles.text, styles.textTypo]}>+91 8825511797</Text>
        </View>
        <View style={[styles.monicAudityaParent, styles.wrapperFlexBox]}>
          <Text style={[styles.monicAuditya, styles.textTypo]}>
            Monic Auditya
          </Text>
          <View style={[styles.frameChild, styles.frameChildPosition]} />
        </View>
        <View style={[styles.lavanyaPWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.lavanyaP, styles.textTypo]}>Lavanya P</Text>
        </View>
        <Text style={[styles.text1, styles.textTypo]}>
          <Text style={styles.text2}>+91</Text>
          <Text style={styles.text3}>{` `}</Text>
          <Text style={styles.text2}>9042805089</Text>
        </Text>
        <Pressable
          style={[styles.backWrapper, styles.frameChildPosition]}
          onPress={() => navigation.navigate("IPhone13141")}
        >
          <Text style={[styles.back, styles.textTypo]}>Back</Text>
        </Pressable>
      </View>
      <Image
        style={[styles.iphone13144Child, styles.wrapperPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-121.png")}
      />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/2-1.png")}
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
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  wrapperPosition: {
    left: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    fontSize: FontSize.size_16xl,
    textAlign: "center",
    lineHeight: 22,
  },
  frameChildPosition: {
    left: 88,
    position: "absolute",
    overflow: "hidden",
  },
  time1: {
    top: "33.89%",
    left: "38.58%",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.sFPro,
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 22,
    color: Color.labelsPrimary,
    position: "absolute",
  },
  time: {
    right: "64.25%",
    left: "0%",
    top: "50%",
    width: "35.75%",
    marginTop: -27,
  },
  border: {
    marginLeft: -13.65,
    borderRadius: Border.br_8xs_3,
    borderStyle: "solid",
    borderColor: Color.labelsPrimary,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    bottom: "0%",
    top: "0%",
    height: "100%",
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
    left: "64.25%",
    top: "50%",
    width: "35.75%",
    marginTop: -27,
    right: "0%",
  },
  statusBarIphone1: {
    backgroundColor: Color.backgroundsPrimary,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  statusBarIphone: {
    top: 0,
    left: -1,
    width: 393,
    height: 54,
    position: "absolute",
  },
  contactAdmin: {
    fontFamily: FontFamily.interSemiBold,
    color: "#ef6f6f",
    fontStyle: "italic",
    fontSize: FontSize.size_16xl,
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 22,
  },
  contactAdminWrapper: {
    top: 14,
    justifyContent: "center",
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    left: 24,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  text: {
    color: Color.colorIndigo,
    fontStyle: "italic",
  },
  wrapper: {
    top: 125,
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  monicAuditya: {
    zIndex: 0,
    fontStyle: "italic",
    color: Color.labelsPrimary,
  },
  frameChild: {
    top: 42,
    width: 100,
    height: 100,
    zIndex: 1,
  },
  monicAudityaParent: {
    top: 75,
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    left: 24,
    position: "absolute",
  },
  lavanyaP: {
    fontStyle: "italic",
    color: Color.labelsPrimary,
  },
  lavanyaPWrapper: {
    top: 182,
    left: 62,
    justifyContent: "center",
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  text2: {
    color: Color.colorIndigo,
  },
  text3: {
    color: Color.labelsPrimary,
  },
  text1: {
    top: 232,
    left: 2,
    fontStyle: "italic",
    position: "absolute",
  },
  back: {
    top: 25,
    left: 28,
    color: Color.backgroundsPrimary,
    position: "absolute",
  },
  backWrapper: {
    top: 288,
    borderRadius: 30,
    backgroundColor: Color.colorLightskyblue,
    width: 143,
    height: 62,
  },
  frameParent: {
    top: 358,
    left: 34,
    borderRadius: Border.br_31xl,
    width: 323,
    height: 379,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.backgroundsPrimary,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13144Child: {
    top: 692,
    width: 445,
    height: 181,
  },
  icon: {
    top: 84,
    left: 26,
    width: 334,
    height: 242,
    position: "absolute",
  },
  iphone13144: {
    backgroundColor: Color.colorSkyblue_200,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13143;
