import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Ellipse3 = () => {
  return <View style={styles.ellipseView} />;
};

const styles = StyleSheet.create({
  ellipseView: {
    backgroundColor: Color.borderDefaultDefault,
    flex: 1,
    width: "100%",
    height: 170,
  },
});

export default Ellipse3;
