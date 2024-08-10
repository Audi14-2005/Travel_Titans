import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const PASSWORDii1 = ({ labelProps = "PASSWORD" }) => {
  return (
    <View style={styles.passwordii}>
      <Text style={styles.password}>{labelProps}</Text>
      <View style={styles.innerFrame}>
        <Text style={styles.password}>ENTER YOUR PASSWOSD</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  password: {
    fontSize: FontSize.size_mid_3,
    lineHeight: 24,
    fontFamily: FontFamily.nunitoRegular,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  innerFrame: {
    alignSelf: "stretch",
    shadowColor: "rgba(255, 255, 255, 0.15)",
    shadowOffset: {
      width: 0,
      height: 2.877230644226074,
    },
    shadowRadius: 2.88,
    elevation: 2.88,
    shadowOpacity: 1,
    borderRadius: 12,
    backgroundColor: Color.backgroundsPrimary,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 1.4,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 17,
    paddingVertical: 12,
    marginTop: 5.8,
  },
  passwordii: {
    flex: 1,
    width: "100%",
  },
});

export default PASSWORDii1;
