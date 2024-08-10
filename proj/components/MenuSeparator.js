import * as React from "react";
import { Color, Border, StyleVariable } from "../GlobalStyles";

const MenuSeparator = () => {
  return (
    <View style={styles.menuSeparator}>
      <View style={styles.rule} />
    </View>
  );
};

const styles = StyleSheet.create({
  rule: {
    alignSelf: "stretch",
    backgroundColor: Color.borderDefaultDefault,
    height: 1,
  },
  menuSeparator: {
    borderRadius: Border.br_5xs,
    width: 284,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: StyleVariable.paddingLg,
    paddingVertical: StyleVariable.paddingSm,
  },
});

export default MenuSeparator;
