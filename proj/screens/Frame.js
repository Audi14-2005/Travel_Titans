import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Frame = () => {
  return <View style={styles.frameView} />;
};

const styles = StyleSheet.create({
  frameView: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_200,
    flex: 1,
    width: "100%",
    height: 42,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Frame;
