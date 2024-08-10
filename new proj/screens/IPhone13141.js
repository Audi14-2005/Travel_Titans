import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13141 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13142}>
      <Image
        style={styles.iphone13142Child}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <View style={[styles.pageControl, styles.pageControlLayout]}>
        <View style={[styles.frame, styles.wrapperFlexBox]}>
          <View style={styles.platter}>
            <View style={styles.ultrathin} />
          </View>
          <View style={[styles.dot1, styles.dotLayout]} />
          <View style={[styles.dot2, styles.dotLayout]} />
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.pageControlLayout]}>
        <View style={[styles.homeIndicator1, styles.capacityPosition]} />
      </View>
      <Image
        style={styles.iphone13142Item}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={styles.iphone13142Inner}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <View style={styles.statusBarIphone}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.time1}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={styles.battery}>
            <View style={styles.border} />
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
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <View style={styles.frameParent}>
        <View style={[styles.frameWrapper, styles.frameSpaceBlock]}>
          <View style={[styles.frameContainer, styles.frameWrapperFlexBox]}>
            <View style={[styles.confirmWrapper, styles.frameWrapperFlexBox]}>
              <Text style={[styles.confirm, styles.confirmTypo]}>Confirm</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameView, styles.frameSpaceBlock]}>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.signInWrapper, styles.frameWrapperFlexBox]}>
              <Text style={[styles.signIn, styles.signInTypo]}>Sign in</Text>
            </View>
          </View>
        </View>
        <Pressable
          style={styles.newregistersignIn}
          onPress={() => navigation.navigate("IPhone13142")}
        >
          <Text style={[styles.newregistersignIn1, styles.signInTypo]}>
            New?Register/Sign In
          </Text>
        </Pressable>
        <Pressable
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("IPhone13143")}
        >
          <Text style={[styles.forgotPassword1, styles.confirmTypo]}>
            Forgot Password?
          </Text>
        </Pressable>
        <View style={[styles.usernameii, styles.usernameiiPosition]}>
          <Text style={[styles.enterUsername, styles.passwordTypo]}>
            {" "}
            USERNAME
          </Text>
          <View style={[styles.innerFrame, styles.innerFrameBorder]}>
            <Text style={[styles.enterUsername, styles.passwordTypo]}>
              ENTER USERNAME
            </Text>
          </View>
        </View>
        <View style={[styles.password1ii, styles.usernameiiPosition]}>
          <Text style={[styles.password, styles.passwordTypo]}>PASSWORD</Text>
          <View style={[styles.innerFrame1, styles.innerFrameBorder]}>
            <Text style={[styles.password, styles.passwordTypo]}>
              ENTER YOUR PASSWORD
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageControlLayout: {
    width: 393,
    position: "absolute",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  dotLayout: {
    marginLeft: 8,
    height: 8,
    width: 8,
    backgroundColor: Color.labelsPrimary,
    borderRadius: Border.br_31xl,
  },
  capacityPosition: {
    backgroundColor: Color.labelsPrimary,
    left: "50%",
    position: "absolute",
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
  frameSpaceBlock: {
    padding: Padding.p_3xs,
    position: "absolute",
  },
  frameWrapperFlexBox: {
    alignSelf: "stretch",
    padding: Padding.p_3xs,
  },
  confirmTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontStyle: "italic",
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 22,
  },
  signInTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontStyle: "italic",
    textAlign: "center",
    lineHeight: 22,
  },
  usernameiiPosition: {
    width: 284,
    left: 20,
    position: "absolute",
  },
  passwordTypo: {
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoRegular,
  },
  innerFrameBorder: {
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderWidth: 1.3,
    borderColor: Color.colorGray_100,
    borderRadius: 11,
    shadowColor: "rgba(255, 255, 255, 0.15)",
    alignSelf: "stretch",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderStyle: "solid",
    backgroundColor: Color.backgroundsPrimary,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  iphone13142Child: {
    top: 85,
    left: -344,
    width: 925,
    height: 169,
    position: "absolute",
  },
  ultrathin: {
    backgroundColor: "rgba(255, 255, 255, 0.44)",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  platter: {
    right: 0,
    bottom: 0,
    zIndex: 0,
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
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
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_31xl,
    top: "50%",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  pageControl: {
    top: 790,
    left: -2,
    height: 44,
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
    left: 7,
    height: 21,
  },
  iphone13142Item: {
    top: 680,
    left: -17,
    width: 446,
    height: 194,
    position: "absolute",
  },
  iphone13142Inner: {
    top: 52,
    left: 61,
    width: 588,
    height: 234,
    position: "absolute",
  },
  time1: {
    top: "33.89%",
    left: "38.58%",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.sFPro,
    textAlign: "center",
    fontWeight: "600",
    color: Color.labelsPrimary,
    lineHeight: 22,
    position: "absolute",
  },
  time: {
    right: "64.25%",
    left: "0%",
  },
  border: {
    marginLeft: -13.65,
    borderRadius: Border.br_8xs_3,
    borderColor: Color.labelsPrimary,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    borderStyle: "solid",
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "50%",
    position: "absolute",
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
    width: "35.75%",
    marginTop: -27,
  },
  statusBarIphone: {
    height: 54,
    backgroundColor: Color.backgroundsPrimary,
    left: 0,
    top: 0,
    width: 393,
    position: "absolute",
  },
  ellipseIcon: {
    top: 343,
    left: -62,
    width: 313,
    height: 147,
    position: "absolute",
  },
  confirm: {
    fontSize: FontSize.size_5xl,
    color: Color.backgroundsPrimary,
    width: 182,
    height: 20,
  },
  confirmWrapper: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorLightskyblue,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameContainer: {
    height: 50,
  },
  frameWrapper: {
    top: 256,
    width: 268,
    height: 195,
    left: 20,
  },
  signIn: {
    fontSize: FontSize.size_11xl,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.labelsPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  signInWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameView: {
    top: 13,
    width: 164,
    left: 0,
  },
  newregistersignIn1: {
    fontSize: 19,
    color: "#fd0505",
    width: 250,
    height: 41,
  },
  newregistersignIn: {
    top: 333,
    left: 20,
    position: "absolute",
  },
  forgotPassword1: {
    fontSize: FontSize.size_xl,
    color: Color.colorSkyblue_100,
  },
  forgotPassword: {
    left: 57,
    top: 363,
    position: "absolute",
  },
  enterUsername: {
    fontSize: FontSize.size_base_9,
    lineHeight: 23,
  },
  innerFrame: {
    shadowRadius: 2.66,
    elevation: 2.66,
    marginTop: 5.3,
  },
  usernameii: {
    top: 95,
    height: 113,
  },
  password: {
    fontSize: FontSize.size_base_7,
    lineHeight: 22,
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoRegular,
  },
  innerFrame1: {
    shadowRadius: 2.62,
    elevation: 2.62,
    marginTop: 5.2,
  },
  password1ii: {
    top: 181,
  },
  frameParent: {
    top: 229,
    left: 13,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    width: 323,
    height: 451,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.backgroundsPrimary,
    borderRadius: Border.br_31xl,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13142: {
    backgroundColor: Color.colorSkyblue_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13141;
