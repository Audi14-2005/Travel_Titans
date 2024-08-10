import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const USERNAMEii1 = () => {
  return (
    <View style={styles.usernameii}>
      <View style={styles.stateactive}>
        <Text style={[styles.username, styles.usernameTypo]}>USERNAME</Text>
        <View style={[styles.innerFrame, styles.innerFrameShadowBox]}>
          <Text style={[styles.username, styles.usernameTypo]}>
            ENTER YOUR USERNAME
          </Text>
        </View>
      </View>
      <View style={styles.statedefault}>
        <Text style={[styles.username, styles.usernameTypo]}>USERNAME</Text>
        <View style={[styles.innerFrame1, styles.innerFrameShadowBox]}>
          <Text style={[styles.enterYourUsername1, styles.usernameTypo]}>
            ENTER YOUR USERNAME
          </Text>
        </View>
      </View>
      <View style={styles.statedefault}>
        <Text style={[styles.username, styles.usernameTypo]}>USERNAME</Text>
        <View style={[styles.innerFrame2, styles.innerFrameShadowBox]}>
          <Text style={[styles.username, styles.usernameTypo]}>
            ENTER YOUR USERNAME
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  usernameTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
  },
  innerFrameShadowBox: {
    marginTop: 4,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.backgroundsPrimary,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(255, 255, 255, 0.15)",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  username: {
    color: Color.colorGray_100,
  },
  innerFrame: {
    borderColor: Color.colorGray_100,
    marginTop: 4,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.backgroundsPrimary,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(255, 255, 255, 0.15)",
  },
  stateactive: {
    alignSelf: "stretch",
  },
  enterYourUsername1: {
    color: Color.colorGainsboro_300,
  },
  innerFrame1: {
    borderColor: Color.colorGainsboro_300,
    marginTop: 4,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.backgroundsPrimary,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(255, 255, 255, 0.15)",
  },
  statedefault: {
    width: 100,
    marginTop: 8,
  },
  innerFrame2: {
    borderColor: Color.colorGray_100,
    marginTop: 4,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.backgroundsPrimary,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(255, 255, 255, 0.15)",
  },
  usernameii: {
    borderRadius: Border.br_8xs,
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
});

export default USERNAMEii1;
