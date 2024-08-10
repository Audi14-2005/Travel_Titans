import * as React from "react";
import { StyleSheet, View } from "react-native";

const Slice = () => {
  return <View style={styles.sliceView} />;
};

const styles = StyleSheet.create({
  sliceView: {
    flex: 1,
    width: "100%",
    height: 100,
  },
});

export default Slice;
