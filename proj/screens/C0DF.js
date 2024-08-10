import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const C0DF = () => {
  return <Text style={styles.c0df}>67C0DF</Text>;
};

const styles = StyleSheet.create({
  c0df: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontFamily: FontFamily.bodySmall,
    color: Color.colorSkyblue_200,
    textAlign: "center",
  },
});

export default C0DF;
