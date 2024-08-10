import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const USERNAMEii2 = ({ labelProps = "USERNAME" }) => {
  return (
    <View style={styles.usernameii}>
      <Text style={styles.username}>{labelProps}</Text>
      <View style={styles.innerFrame}>
        <Text style={styles.username}>ENTER YOUR USERNAME</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  username: {
    fontSize: FontSize.size_xs,
    lineHeight: 17,
    fontFamily: FontFamily.nunitoRegular,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  innerFrame: {
    alignSelf: "stretch",
    shadowColor: "rgba(255, 255, 255, 0.15)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.backgroundsPrimary,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    marginTop: 4,
  },
  usernameii: {
    flex: 1,
    width: "100%",
  },
});

export default USERNAMEii2;
