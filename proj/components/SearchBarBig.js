import * as React from "react";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SearchBarBig = () => {
  return (
    <View style={styles.searchBarBig}>
      <Image
        style={[styles.iconRight, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/icon-right1.png")}
      />
      <Text style={styles.searchInput}>{`Search for apps & games`}</Text>
      <Image
        style={[styles.iconLeft, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/icon-left1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    height: 24,
    width: 24,
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  iconRight: {
    right: 12,
  },
  searchInput: {
    height: "50%",
    top: "25%",
    left: 55,
    fontSize: FontSize.singleLineBodyBase_size,
    lineHeight: 19,
    fontFamily: FontFamily.robotoRegular,
    color: Color.black38,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 269,
    position: "absolute",
  },
  iconLeft: {
    left: 16,
  },
  searchBarBig: {
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1.33,
    elevation: 1.33,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.backgroundsPrimary,
    width: 344,
    height: 48,
  },
});

export default SearchBarBig;
