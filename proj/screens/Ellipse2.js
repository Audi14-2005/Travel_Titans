import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Ellipse2 = () => {
  return (
    <ImageBackground
      style={styles.ellipseIcon}
      resizeMode="cover"
      source={require("../assets/ellipse12.png")}
    />
  );
};

const styles = StyleSheet.create({
  ellipseIcon: {
    flex: 1,
    width: "100%",
    height: 181,
  },
});

export default Ellipse2;
