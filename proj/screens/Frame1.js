import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Frame1 = () => {
  return <View style={styles.frameView} />;
};

const styles = StyleSheet.create({
  frameView: {
    borderRadius: 22,
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 47,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Frame1;
