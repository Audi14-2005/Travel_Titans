import * as React from "react";
import {
  FontFamily,
  Color,
  FontSize,
  Border,
  StyleVariable,
} from "../GlobalStyles";

const MenuItem = ({
  label = "Menu Label",
  hasShortcut = true,
  hasIcon = true,
  description = "Menu description.",
  hasDescription = true,
}) => {
  return (
    <View style={styles.statedefault}>
      {hasIcon && (
        <Image
          style={styles.starIcon}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
      )}
      <View style={styles.body}>
        <View style={[styles.row, styles.rowFlexBox]}>
          <Text style={[styles.label, styles.aTypo]}>{label}</Text>
          {hasShortcut && (
            <View style={[styles.menuShortcut, styles.rowFlexBox]}>
              <Text style={[styles.a, styles.aTypo]}>⇧A</Text>
            </View>
          )}
        </View>
        {hasDescription && (
          <Text style={[styles.description, styles.aTypo]}>{description}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  aTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  starIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  label: {
    lineHeight: 22,
    color: Color.textDefaultDefault,
    fontSize: FontSize.singleLineBodyBase_size,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
    flex: 1,
  },
  a: {
    lineHeight: 16,
    color: Color.textDefaultDefault,
    fontSize: FontSize.singleLineBodyBase_size,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  menuShortcut: {
    borderRadius: Border.br_5xs,
    justifyContent: "flex-end",
  },
  row: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
  },
  description: {
    fontSize: FontSize.bodySmall_size,
    lineHeight: 20,
    color: Color.textDefaultSecondary,
    marginTop: 4,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
    alignSelf: "stretch",
  },
  body: {
    marginLeft: 12,
    flex: 1,
  },
  statedefault: {
    borderRadius: StyleVariable.radiusMd,
    width: 320,
    paddingHorizontal: StyleVariable.space400,
    paddingVertical: StyleVariable.space300,
    flexDirection: "row",
    overflow: "hidden",
  },
});

export default MenuItem;
