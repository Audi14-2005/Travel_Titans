import * as React from "react";
import { Color, Border, Padding } from "../GlobalStyles";

const PageControl = () => {
  return (
    <View style={styles.dots2Selection1Plattert}>
      <View style={styles.frame}>
        <View style={styles.platter}>
          <View style={styles.ultrathin} />
        </View>
        <View style={[styles.dot1, styles.dotLayout]} />
        <View style={[styles.dot2, styles.dotLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dotLayout: {
    marginLeft: 8,
    height: 8,
    width: 8,
    backgroundColor: Color.labelsPrimary,
    borderRadius: Border.br_31xl,
  },
  ultrathin: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorSilver,
    position: "absolute",
  },
  platter: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: Border.br_81xl,
    overflow: "hidden",
    zIndex: 0,
    position: "absolute",
  },
  dot1: {
    zIndex: 1,
  },
  dot2: {
    opacity: 0.3,
    zIndex: 2,
  },
  frame: {
    marginTop: -12,
    marginLeft: -24.5,
    top: "50%",
    left: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  dots2Selection1Plattert: {
    width: 393,
    height: 44,
  },
});

export default PageControl;
