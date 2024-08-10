const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone13144 from "./screens/IPhone13144";
import USERNAMEii from "./screens/USERNAMEii";
import USERNAMEii1 from "./screens/USERNAMEii1";
import Rectangle from "./screens/Rectangle";
import USERNAMEii2 from "./screens/USERNAMEii2";
import Frame from "./screens/Frame";
import IPhone13149 from "./screens/IPhone13149";
import Ellipse4 from "./screens/Ellipse4";
import IPhone131411 from "./screens/IPhone131411";
import Ellipse3 from "./screens/Ellipse3";
import Ellipse2 from "./screens/Ellipse2";
import IPhone1314 from "./screens/IPhone1314";
import PASSWORDii from "./screens/PASSWORDii";
import IPhone13142 from "./screens/IPhone13142";
import IPhone13146 from "./screens/IPhone13146";
import IPhone13147 from "./screens/IPhone13147";
import Frame1 from "./screens/Frame1";
import C0DF from "./screens/C0DF";
import Ellipse from "./screens/Ellipse";
import IPhone131410 from "./screens/IPhone131410";
import IPhone13141 from "./screens/IPhone13141";
import Ellipse5 from "./screens/Ellipse5";
import IPhone13145 from "./screens/IPhone13145";
import IPhone13148 from "./screens/IPhone13148";
import Ellipse1 from "./screens/Ellipse1";
import IPhone13143 from "./screens/IPhone13143";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone13144"
              component={IPhone13144}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="USERNAMEii"
              component={USERNAMEii}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="USERNAMEii1"
              component={USERNAMEii1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle"
              component={Rectangle}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="USERNAMEii2"
              component={USERNAMEii2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13149"
              component={IPhone13149}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ellipse4"
              component={Ellipse4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone131411"
              component={IPhone131411}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ellipse3"
              component={Ellipse3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ellipse2"
              component={Ellipse2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1314"
              component={IPhone1314}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PASSWORDii"
              component={PASSWORDii}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13142"
              component={IPhone13142}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13146"
              component={IPhone13146}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13147"
              component={IPhone13147}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="C0DF"
              component={C0DF}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ellipse"
              component={Ellipse}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone131410"
              component={IPhone131410}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13141"
              component={IPhone13141}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ellipse5"
              component={Ellipse5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13145"
              component={IPhone13145}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13148"
              component={IPhone13148}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ellipse1"
              component={Ellipse1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13143"
              component={IPhone13143}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
