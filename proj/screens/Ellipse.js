import * as React from "react";
import { StyleSheet, View } from "react-native";

const Ellipse = () => {
  return <View style={styles.ellipseView} />;
};

const styles = StyleSheet.create({
  ellipseView: {
    backgroundColor: "#a7ccda",
    flex: 1,
    width: "100%",
    height: 106,
  },
});

export default Ellipse;
