import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  FontFamily,
  FontSize,
  StyleVariable,
  Border,
} from "../GlobalStyles";

const IPhone13146 = () => {
  return (
    <View style={styles.iphone13148}>
      <View style={styles.statusBarIphone}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.time1}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={[styles.battery, styles.borderPosition]}>
            <View style={[styles.border, styles.menuBorder]} />
            <Image
              style={styles.capIcon}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.borderPosition]} />
          </View>
          <Image
            style={[styles.wifiIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.iphone13148Child, styles.iphone13148ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.iphone13148Item, styles.iphone13148ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.iphone13148Inner, styles.iphone13148ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.iphone13148ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.iphone13148Child1, styles.iphone13148ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.iphone13148Child2, styles.iphone13148ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.iphone13148Child3, styles.menuPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-23.png")}
      />
      <View style={styles.frameView} />
      <Image
        style={[styles.iphone13148Child4, styles.iphone13148ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <View style={[styles.menu, styles.menuPosition]}>
        <View style={[styles.menuHeader, styles.menuFlexBox]}>
          <Text style={[styles.heading, styles.headingTypo]} />
          <Text style={styles.welcomeUser1}>Welcome user1</Text>
        </View>
        <View style={[styles.menuSeparator, styles.menuFlexBox]}>
          <View style={[styles.rule, styles.ruleBg]} />
        </View>
        <View style={[styles.menuSeparator1, styles.menuFlexBox]}>
          <View style={styles.ruleBg} />
        </View>
        <View style={[styles.menuItem, styles.menuFlexBox1]}>
          <Image
            style={styles.starIcon}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <View style={styles.body}>
            <View style={[styles.row, styles.rowFlexBox]}>
              <Text style={[styles.label, styles.aTypo]}>Menu Label</Text>
              <View style={[styles.menuShortcut, styles.rowFlexBox]}>
                <Text style={[styles.a, styles.aTypo]}>⇧A</Text>
              </View>
            </View>
            <Text style={[styles.description, styles.headingTypo]}>
              Menu description.
            </Text>
          </View>
        </View>
        <View style={[styles.menuItem, styles.menuFlexBox1]}>
          <Image
            style={styles.starIcon}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <View style={styles.body}>
            <View style={[styles.row, styles.rowFlexBox]}>
              <Text style={[styles.label, styles.aTypo]}>Wallet</Text>
              <View style={[styles.menuShortcut, styles.rowFlexBox]}>
                <Text style={[styles.a, styles.aTypo]}>⇧A</Text>
              </View>
            </View>
            <Text style={[styles.description, styles.headingTypo]} />
          </View>
        </View>
        <View style={styles.menuSection}>
          <View style={[styles.menuItem, styles.menuFlexBox1]}>
            <Image
              style={styles.starIcon}
              contentFit="cover"
              source={require("../assets/star.png")}
            />
            <View style={styles.body}>
              <View style={[styles.row, styles.rowFlexBox]}>
                <Text
                  style={[styles.label, styles.aTypo]}
                >{`Language & region`}</Text>
                <View style={[styles.menuShortcut, styles.rowFlexBox]}>
                  <Text style={[styles.a, styles.aTypo]}>⇧A</Text>
                </View>
              </View>
              <Text style={[styles.description, styles.headingTypo]}>
                Menu description.
              </Text>
            </View>
          </View>
          <View style={[styles.menuItem, styles.menuFlexBox1]}>
            <Image
              style={styles.starIcon}
              contentFit="cover"
              source={require("../assets/star.png")}
            />
            <View style={styles.body}>
              <View style={[styles.row, styles.rowFlexBox]}>
                <Text style={[styles.label, styles.aTypo]}>Settings</Text>
                <View style={[styles.menuShortcut, styles.rowFlexBox]}>
                  <Text style={[styles.a, styles.aTypo]}>⇧A</Text>
                </View>
              </View>
              <Text style={[styles.description, styles.headingTypo]}>
                Menu description.
              </Text>
            </View>
          </View>
          <View style={[styles.menuItem, styles.menuFlexBox1]}>
            <Image
              style={styles.starIcon}
              contentFit="cover"
              source={require("../assets/star.png")}
            />
            <View style={styles.body}>
              <View style={[styles.row, styles.rowFlexBox]}>
                <Text style={[styles.label, styles.aTypo]}>About us</Text>
                <View style={[styles.menuShortcut, styles.rowFlexBox]}>
                  <Text style={[styles.a, styles.aTypo]}>⇧A</Text>
                </View>
              </View>
              <Text style={[styles.description, styles.headingTypo]}>
                Menu description.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={styles.accountCircleIcon}
        contentFit="cover"
        source={require("../assets/account-circle.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    top: "50%",
    width: "35.75%",
    marginTop: -27,
    height: 54,
    position: "absolute",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  menuBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  iconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  iphone13148ChildLayout: {
    height: 170,
    width: 235,
  },
  menuPosition: {
    left: 0,
    position: "absolute",
  },
  menuFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  headingTypo: {
    textAlign: "left",
    color: Color.textDefaultSecondary,
    fontFamily: FontFamily.bodySmall,
    lineHeight: 20,
    fontSize: FontSize.bodySmall_size,
    display: "none",
  },
  ruleBg: {
    backgroundColor: Color.borderDefaultDefault,
    alignSelf: "stretch",
    height: 1,
  },
  menuFlexBox1: {
    flexDirection: "row",
    paddingHorizontal: StyleVariable.space400,
    overflow: "hidden",
  },
  rowFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  aTypo: {
    fontSize: FontSize.singleLineBodyBase_size,
    color: Color.textDefaultDefault,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  time1: {
    top: "33.89%",
    left: "38.58%",
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontFamily: FontFamily.sFPro,
    color: Color.labelsPrimary,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  time: {
    right: "64.25%",
    left: "0%",
  },
  border: {
    height: "100%",
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    borderColor: Color.labelsPrimary,
    width: 25,
    opacity: 0.35,
    left: "50%",
    position: "absolute",
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    width: 1,
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  capacity: {
    height: "69.23%",
    marginLeft: -11.65,
    top: "15.38%",
    bottom: "15.38%",
    borderRadius: Border.br_10xs_5,
    backgroundColor: Color.labelsPrimary,
    width: 21,
  },
  battery: {
    height: "24.07%",
    marginLeft: 10.75,
    top: "42.59%",
    bottom: "33.33%",
    width: 27,
  },
  wifiIcon: {
    height: "22.78%",
    marginLeft: -13.55,
    top: "43.7%",
    bottom: "33.52%",
    width: 17,
  },
  cellularConnectionIcon: {
    height: "22.59%",
    marginLeft: -40.25,
    top: "43.52%",
    bottom: "33.89%",
    width: 19,
  },
  levels: {
    right: "0%",
    left: "64.25%",
  },
  statusBarIphone: {
    top: 0,
    left: -3,
    width: 393,
    height: 54,
    backgroundColor: Color.backgroundsPrimary,
    position: "absolute",
  },
  iphone13148Child: {
    top: 18,
    left: 236,
    position: "absolute",
  },
  iphone13148Item: {
    top: 190,
    left: 215,
    position: "absolute",
  },
  iphone13148Inner: {
    top: 104,
    left: -42,
    position: "absolute",
  },
  ellipseIcon: {
    top: 317,
    left: -35,
    position: "absolute",
  },
  iphone13148Child1: {
    top: 402,
    left: 162,
    position: "absolute",
  },
  iphone13148Child2: {
    top: -3,
    left: 13,
    position: "absolute",
  },
  iphone13148Child3: {
    top: 631,
    height: 170,
    width: 235,
  },
  frameView: {
    top: 99,
    left: 64,
    height: 1,
    width: 1,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13148Child4: {
    top: 716,
    left: 138,
    position: "absolute",
  },
  heading: {
    width: 253,
    display: "none",
  },
  welcomeUser1: {
    fontSize: FontSize.size_11xl,
    lineHeight: 42,
    fontFamily: FontFamily.interSemiBold,
    color: Color.textDefaultDefault,
    textAlign: "left",
    fontWeight: "600",
  },
  menuHeader: {
    paddingTop: StyleVariable.space200,
    paddingBottom: StyleVariable.space100,
    paddingHorizontal: StyleVariable.space400,
    flexDirection: "row",
    overflow: "hidden",
  },
  rule: {
    display: "none",
  },
  menuSeparator: {
    height: 17,
    paddingVertical: StyleVariable.space200,
    alignSelf: "stretch",
    paddingHorizontal: StyleVariable.space400,
  },
  menuSeparator1: {
    paddingHorizontal: StyleVariable.paddingLg,
    paddingVertical: StyleVariable.paddingSm,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  starIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  label: {
    lineHeight: 22,
    flex: 1,
  },
  a: {
    lineHeight: 16,
  },
  menuShortcut: {
    justifyContent: "flex-end",
    borderRadius: Border.br_5xs,
  },
  row: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  description: {
    marginTop: 4,
    alignSelf: "stretch",
    display: "none",
  },
  body: {
    marginLeft: 12,
    flex: 1,
  },
  menuItem: {
    borderRadius: StyleVariable.radiusMd,
    paddingVertical: StyleVariable.space300,
    alignSelf: "stretch",
    paddingHorizontal: StyleVariable.space400,
  },
  menuSection: {
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  menu: {
    top: 47,
    shadowColor: "rgba(12, 12, 13, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: StyleVariable.radius200,
    borderColor: Color.borderDefaultDefault,
    width: 390,
    height: 798,
    padding: StyleVariable.space200,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.backgroundsPrimary,
    left: 0,
    overflow: "hidden",
  },
  accountCircleIcon: {
    top: 46,
    left: 297,
    width: 80,
    height: 64,
    position: "absolute",
  },
  iphone13148: {
    backgroundColor: Color.colorSkyblue_200,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default IPhone13146;
