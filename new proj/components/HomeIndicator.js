import * as React from "react";
import { Border, Color } from "../GlobalStyles";

const HomeIndicator = () => {
  return (
    <View style={styles.deviceiphoneOrientationpor}>
      <View style={styles.homeIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicator: {
    position: "absolute",
    marginLeft: 69.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelsPrimary,
    width: 139,
    height: 5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  deviceiphoneOrientationpor: {
    width: 393,
    height: 21,
  },
});

export default HomeIndicator;
