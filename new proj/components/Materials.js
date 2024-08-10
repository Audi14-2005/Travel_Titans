import * as React from "react";
import { Color } from "../GlobalStyles";

const Materials = () => {
  return (
    <View style={styles.styleultrathin}>
      <View style={styles.ultrathin} />
    </View>
  );
};

const styles = StyleSheet.create({
  ultrathin: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorSilver,
  },
  styleultrathin: {
    width: 100,
    height: 100,
    overflow: "hidden",
  },
});

export default Materials;
