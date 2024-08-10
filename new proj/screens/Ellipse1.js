import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Ellipse1 = () => {
  return <View style={styles.ellipseView} />;
};

const styles = StyleSheet.create({
  ellipseView: {
    backgroundColor: "#cce2ea",
    borderStyle: "solid",
    borderColor: Color.labelsPrimary,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 106,
  },
});

export default Ellipse1;
