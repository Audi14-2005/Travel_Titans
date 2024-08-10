import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const USERNAMEii = ({ labelProps = "USERNAME" }) => {
  return (
    <View style={styles.usernameii}>
      <Text style={styles.username}>{labelProps}</Text>
      <View style={styles.innerFrame}>
        <Text style={styles.username}>ENTER YOUR USERNAME</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  username: {
    fontSize: FontSize.size_lgi_4,
    lineHeight: 27,
    fontFamily: FontFamily.nunitoRegular,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  innerFrame: {
    alignSelf: "stretch",
    shadowColor: "rgba(255, 255, 255, 0.15)",
    shadowOffset: {
      width: 0,
      height: 3.234691381454468,
    },
    shadowRadius: 3.23,
    elevation: 3.23,
    shadowOpacity: 1,
    borderRadius: 13,
    backgroundColor: Color.backgroundsPrimary,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 1.6,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 19,
    paddingVertical: 13,
    marginTop: 6.5,
  },
  usernameii: {
    flex: 1,
    width: "100%",
    height: 149,
  },
});

export default USERNAMEii;
