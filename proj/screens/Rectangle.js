import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Rectangle = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    backgroundColor: Color.borderDefaultDefault,
    flex: 1,
    width: "100%",
    height: 100,
  },
});

export default Rectangle;
