import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13142 = () => {
  return (
    <View style={styles.iphone13143}>
      <View style={styles.frameParent}>
        <View style={styles.frameWrapper}>
          <View style={styles.frameContainer}>
            <View style={[styles.createAccountWrapper, styles.wrapperFlexBox1]}>
              <Text style={styles.createAccount}>Create Account</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameView, styles.platterPosition]}>
          <View style={styles.frameContainer}>
            <View style={styles.wrapperFlexBox1}>
              <Text style={[styles.signUp, styles.time1Clr]}>Sign Up</Text>
            </View>
          </View>
        </View>
        <View style={[styles.dateOfBirthWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.dateOfBirth, styles.time1Clr]}>
            Date Of Birth
          </Text>
        </View>
        <View style={[styles.emailAddressWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.dateOfBirth, styles.time1Clr]}>
            Email Address
          </Text>
        </View>
        <View style={[styles.nameWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.dateOfBirth, styles.time1Clr]}>Name</Text>
        </View>
        <View style={[styles.passwordWrapper, styles.passwordWrapperFlexBox]}>
          <Text style={[styles.dateOfBirth, styles.time1Clr]}>Password</Text>
        </View>
        <View
          style={[styles.confirmPasswordWrapper, styles.passwordWrapperFlexBox]}
        >
          <Text style={[styles.dateOfBirth, styles.time1Clr]}>
            Confirm Password
          </Text>
        </View>
      </View>
      <Image
        style={styles.iphone13143Child}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <View style={styles.homeIndicator}>
        <View style={[styles.homeIndicator1, styles.capacityPosition]} />
      </View>
      <View style={styles.frame}>
        <View style={[styles.platter, styles.platterPosition]}>
          <View style={[styles.ultrathin, styles.borderPosition]} />
        </View>
        <View style={[styles.dot1, styles.dotLayout]} />
        <View style={[styles.dot2, styles.dotLayout]} />
      </View>
      <View style={styles.statusBarIphoneWrapper}>
        <View style={styles.statusBarIphone}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.time1, styles.time1Clr]}>9:41</Text>
          </View>
          <View style={[styles.levels, styles.timePosition]}>
            <View style={styles.battery}>
              <View style={[styles.border, styles.borderPosition]} />
              <Image
                style={[styles.capIcon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/cap.png")}
              />
              <View style={[styles.capacity, styles.capacityPosition]} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    padding: Padding.p_3xs,
  },
  platterPosition: {
    top: 0,
    position: "absolute",
  },
  time1Clr: {
    color: Color.labelsPrimary,
    textAlign: "center",
    lineHeight: 22,
  },
  wrapperFlexBox: {
    width: 263,
    backgroundColor: Color.colorGainsboro_100,
    left: 31,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xl,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  passwordWrapperFlexBox: {
    width: 264,
    backgroundColor: Color.colorGainsboro_200,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xl,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  capacityPosition: {
    backgroundColor: Color.labelsPrimary,
    left: "50%",
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
    width: "35.75%",
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
  createAccount: {
    fontFamily: FontFamily.interSemiBold,
    color: Color.backgroundsPrimary,
    textAlign: "center",
    lineHeight: 22,
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: FontSize.size_5xl,
  },
  createAccountWrapper: {
    backgroundColor: "#3f94c2",
    borderRadius: Border.br_xl,
    alignItems: "center",
    flexDirection: "row",
  },
  frameContainer: {
    alignSelf: "stretch",
    padding: Padding.p_3xs,
  },
  frameWrapper: {
    top: 384,
    left: 43,
    width: 242,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  signUp: {
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.labelsPrimary,
    fontStyle: "italic",
  },
  frameView: {
    left: 7,
    width: 164,
    padding: Padding.p_3xs,
  },
  dateOfBirth: {
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    color: Color.labelsPrimary,
    fontStyle: "italic",
    fontSize: FontSize.size_5xl,
  },
  dateOfBirthWrapper: {
    top: 147,
    overflow: "hidden",
  },
  emailAddressWrapper: {
    top: 212,
  },
  nameWrapper: {
    top: 82,
  },
  passwordWrapper: {
    top: 277,
    left: 27,
  },
  confirmPasswordWrapper: {
    top: 342,
    left: 31,
    width: 264,
    backgroundColor: Color.colorGainsboro_200,
  },
  frameParent: {
    top: 197,
    left: 38,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 323,
    height: 466,
    backgroundColor: Color.backgroundsPrimary,
    borderRadius: Border.br_31xl,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13143Child: {
    top: 708,
    left: -6,
    width: 415,
    height: 272,
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: 69.5,
    bottom: 8,
    width: 139,
    height: 5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderRadius: Border.br_81xl,
  },
  homeIndicator: {
    top: 823,
    left: -2,
    width: 393,
    height: 21,
    position: "absolute",
  },
  ultrathin: {
    backgroundColor: Color.colorSilver,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  platter: {
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 0,
    borderRadius: Border.br_81xl,
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
    marginTop: 377,
    marginLeft: -24,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    top: "50%",
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  time1: {
    top: "33.89%",
    left: "38.58%",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.sFPro,
    fontWeight: "600",
    color: Color.labelsPrimary,
    position: "absolute",
  },
  time: {
    right: "64.25%",
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
    marginLeft: 10.75,
    top: "42.59%",
    bottom: "33.33%",
    width: 27,
    left: "50%",
    position: "absolute",
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
    right: "0%",
  },
  statusBarIphone: {
    height: 54,
    alignSelf: "stretch",
    backgroundColor: Color.backgroundsPrimary,
  },
  statusBarIphoneWrapper: {
    top: -10,
    left: -10,
    width: 413,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  iphone13143: {
    backgroundColor: Color.colorSkyblue_200,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13142;
