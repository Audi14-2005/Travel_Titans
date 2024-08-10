import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IPhone13147 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13147}>
      <View style={[styles.statusBarIphone, styles.roadMapIcon121Layout]}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.time1}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={[styles.battery, styles.borderPosition]}>
            <View style={[styles.border, styles.borderPosition]} />
            <Image
              style={[styles.capIcon, styles.iconPosition2]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.borderPosition]} />
          </View>
          <Image
            style={[styles.wifiIcon, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
      </View>
      <View style={[styles.statusBarIphone, styles.roadMapIcon121Layout]}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.time1}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={[styles.battery, styles.borderPosition]}>
            <View style={[styles.border, styles.borderPosition]} />
            <Image
              style={[styles.capIcon, styles.iconPosition2]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.borderPosition]} />
          </View>
          <Image
            style={[styles.wifiIcon, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
      </View>
      <Image
        style={styles.iphone13147Child}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Image
        style={styles.iphone13147Item}
        contentFit="cover"
        source={require("../assets/ellipse-25.png")}
      />
      <Image
        style={[styles.iphone13147Inner, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-26.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-27.png")}
      />
      <View style={styles.rectangleView} />
      <View style={[styles.iphone13147Child1, styles.iphone13147ChildLayout]} />
      <View style={[styles.iphone13147Child2, styles.iphone13147ChildLayout]} />
      <Image
        style={[styles.image2Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <View style={[styles.iphone13147Child3, styles.iphone13147ChildLayout]} />
      <Image
        style={[styles.icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/5167053-1.png")}
      />
      <Image
        style={[styles.icon1, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/61122-1.png")}
      />
      <View style={styles.searchBarBigParent}>
        <View style={styles.searchBarBig}>
          <Image
            style={[styles.iconRight, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/icon-right.png")}
          />
          <Text
            style={[styles.searchInput, styles.searchInputFlexBox]}
          >{`Search for apps & games`}</Text>
          <Image
            style={[styles.iconLeft, styles.iconLeftLayout]}
            contentFit="cover"
            source={require("../assets/icon-left.png")}
          />
        </View>
        <View style={[styles.frameChild, styles.ss61IconLayout]} />
        <Image
          style={[styles.ss61Icon, styles.ss61IconLayout]}
          contentFit="cover"
          source={require("../assets/ss6-1.png")}
        />
        <Pressable
          style={[styles.accountCircle, styles.iconLeftLayout]}
          onPress={() => navigation.navigate("IPhone13146")}
        >
          <Image
            style={styles.icon2}
            contentFit="cover"
            source={require("../assets/account-circle1.png")}
          />
        </Pressable>
      </View>
      <View style={styles.iphone13147Child4} />
      <Image
        style={[styles.roadMapIcon121, styles.roadMapIcon121Layout]}
        contentFit="cover"
        source={require("../assets/roadmapicon12-1.png")}
      />
      <View style={styles.iphone13147Child5} />
      <Text style={[styles.restaurants, styles.fuelTypo]}>Restaurants</Text>
      <Text style={[styles.fuel, styles.fuelTypo]}>Fuel</Text>
      <View
        style={[styles.iphone13147Child6, styles.iphone13147ChildShadowBox]}
      />
      <Text style={[styles.hotels, styles.hotelsTypo]}>Hotels</Text>
      <View
        style={[styles.iphone13147Child7, styles.iphone13147ChildShadowBox]}
      />
      <Text style={[styles.hospitals, styles.hotelsTypo]}>Hospitals</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  roadMapIcon121Layout: {
    height: 54,
    position: "absolute",
  },
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
  iconPosition2: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  ellipseIconPosition: {
    top: 301,
    width: 299,
    position: "absolute",
  },
  iphone13147ChildLayout: {
    width: 97,
    height: 107,
    top: 737,
    position: "absolute",
  },
  iconPosition1: {
    height: 65,
    top: 748,
    position: "absolute",
  },
  iconPosition: {
    marginTop: -12,
    top: "50%",
  },
  searchInputFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  iconLeftLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  ss61IconLayout: {
    height: 28,
    width: 31,
    position: "absolute",
  },
  fuelTypo: {
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    lineHeight: 19,
    position: "absolute",
  },
  iphone13147ChildShadowBox: {
    height: 34,
    backgroundColor: Color.colorDarkorange,
    borderRadius: Border.br_11xl,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
  },
  hotelsTypo: {
    top: 144,
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    lineHeight: 19,
    color: Color.labelsPrimary,
    position: "absolute",
  },
  time1: {
    top: "33.89%",
    left: "38.58%",
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.sFPro,
    textAlign: "center",
    color: Color.labelsPrimary,
    position: "absolute",
  },
  time: {
    right: "64.25%",
    left: "0%",
  },
  border: {
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    borderStyle: "solid",
    borderColor: Color.labelsPrimary,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    height: "100%",
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    width: 1,
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
    backgroundColor: Color.backgroundsPrimary,
    height: 54,
  },
  iphone13147Child: {
    top: 125,
    left: 136,
    width: 369,
    height: 170,
    position: "absolute",
  },
  iphone13147Item: {
    top: 659,
    left: 168,
    height: 204,
    width: 299,
    position: "absolute",
  },
  iphone13147Inner: {
    left: -68,
    height: 211,
  },
  ellipseIcon: {
    left: 231,
    height: 252,
  },
  rectangleView: {
    backgroundColor: "#26cf41",
    width: 390,
    height: 107,
    right: 0,
    top: 737,
    position: "absolute",
  },
  iphone13147Child1: {
    left: 98,
    backgroundColor: "#8a429c",
  },
  iphone13147Child2: {
    left: 292,
    backgroundColor: "#d31c31",
  },
  image2Icon: {
    width: 65,
    height: 65,
    top: 748,
    left: 16,
  },
  iphone13147Child3: {
    left: 195,
    backgroundColor: "#a1ad16",
  },
  icon: {
    left: 206,
    width: 74,
    height: 65,
    top: 748,
  },
  icon1: {
    left: 311,
    width: 65,
    height: 65,
    top: 748,
  },
  iconRight: {
    right: 36,
    width: 0,
    height: 0,
    position: "absolute",
  },
  searchInput: {
    height: "50%",
    top: "25%",
    left: 55,
    fontSize: FontSize.singleLineBodyBase_size,
    fontFamily: FontFamily.robotoRegular,
    color: Color.black38,
    width: 269,
    textAlign: "left",
    lineHeight: 19,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  iconLeft: {
    marginTop: -12,
    top: "50%",
    left: 16,
  },
  searchBarBig: {
    marginTop: -24,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowRadius: 1.33,
    elevation: 1.33,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    height: 48,
    right: 0,
    top: "50%",
    backgroundColor: Color.backgroundsPrimary,
    position: "absolute",
  },
  frameChild: {
    top: 18,
    left: 101,
  },
  ss61Icon: {
    top: 10,
    left: 12,
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  accountCircle: {
    left: 308,
    top: 12,
  },
  searchBarBigParent: {
    top: 79,
    left: 19,
    width: 344,
    height: 48,
    position: "absolute",
  },
  iphone13147Child4: {
    left: 126,
    height: 35,
    backgroundColor: Color.colorDarkorange,
    borderRadius: Border.br_11xl,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 138,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    width: 65,
    position: "absolute",
  },
  roadMapIcon121: {
    top: 749,
    left: 109,
    width: 69,
  },
  iphone13147Child5: {
    top: 137,
    left: 5,
    backgroundColor: "rgba(254, 254, 254, 0.9)",
    width: 115,
    height: 37,
    borderRadius: Border.br_11xl,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
  },
  restaurants: {
    top: 146,
    color: "#b3b3b3",
    width: 109,
    left: 12,
    alignItems: "center",
    display: "flex",
  },
  fuel: {
    top: 145,
    left: 142,
    color: Color.labelsPrimary,
  },
  iphone13147Child6: {
    top: 139,
    left: 196,
    width: 89,
  },
  hotels: {
    left: 214,
  },
  iphone13147Child7: {
    left: 288,
    width: 100,
    top: 138,
    height: 34,
  },
  hospitals: {
    left: 300,
  },
  iphone13147: {
    backgroundColor: Color.colorSkyblue_200,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13147;
