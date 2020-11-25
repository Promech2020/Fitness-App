import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import intro from "./screens/intro";
import LandingPage from "./screens/LandingPage";
import SignUp from "./screens/SignUp"
import HomePageFY from "./screens/HomePageFY"
import HomePageSP from "./screens/HomePageSP"
import HomePageCH from "./screens/HomePageCH";
import HomePageT from "./screens/HomePageT";
import UserProfileWP from "./screens/UserProfileWP";
import UserProfileLT from "./screens/UserProfileLT";
import UserProfileCH from "./screens/UserProfileCH";
import Registration from "./screens/Registration";
import HeightInfo from "./screens/HeightInfo";
import WeightInfo from "./screens/WeightInfo";
import Gender from "./screens/Gender";
import BodyType from "./screens/BodyType";
import Hello from "./screens/Hello";
import Welcome from "./screens/Welcome";
import IntroVideo from "./screens/IntroVideo";
import WorkoutPageIntro from "./screens/WorkoutPageIntro";
import WorkoutPageDown from "./screens/WorkoutPageDown";
import WorkoutpageStartNow from "./screens/WorkoutpageStartNow";
import WorkoutPageVideo from "./screens/WorkoutPageVideo";
import WorkoutPageVideoTwo from "./screens/WorkOutPageVideoTwo";
import WorkoutPageVideoThree from "./screens/WorkoutPageVideoThree";
import WorkoutPageSave from "./screens/WorkoutPageSave";
import WorkoutPageJoin from "./screens/WorkoutPageJoin";
import ServiceProviderPageFY from "./screens/ServiceProviderPageFY";
import ServiceProviderPageW from "./screens/ServiceProviderPageW";
import ServiceProviderPageN from "./screens/ServiceProviderPageN";
import ServiceProviderPageT from "./screens/ServiceProviderPageT";
import Subscription from "./screens/Subscription";
import Payment from "./screens/Payment";
import HomePageMenu from "./screens/HomePageMenu";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={intro} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomePageFY" component={HomePageFY} />
        <Stack.Screen name="HomePageSP" component={HomePageSP} />
        <Stack.Screen name="HomePageCH" component={HomePageCH} />
        <Stack.Screen name="HomePageT" component={HomePageT} />
        <Stack.Screen name="UserProfileWP" component={UserProfileWP} />
        <Stack.Screen name="UserProfileLT" component={UserProfileLT} />
        <Stack.Screen name="UserProfileCH" component={UserProfileCH} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="HeightInfo" component={HeightInfo} />
        <Stack.Screen name="WeightInfo" component={WeightInfo} />
        <Stack.Screen name="Gender" component={Gender} />
        <Stack.Screen name="BodyType" component={BodyType} />
        <Stack.Screen name="Hello" component={Hello} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="IntroVideo" component={IntroVideo} />
        <Stack.Screen name="WorkoutPageIntro" component={WorkoutPageIntro} />
        <Stack.Screen name="WorkoutPageDown" component={WorkoutPageDown} />
        <Stack.Screen name="WorkoutpageStartNow" component={WorkoutpageStartNow} />
        <Stack.Screen name="WorkoutPageVideo" component={WorkoutPageVideo} />
        <Stack.Screen name="WorkoutPageVideoTwo" component={WorkoutPageVideoTwo} />
        <Stack.Screen name="WorkoutPageVideoThree" component={WorkoutPageVideoThree} />
        <Stack.Screen name="WorkoutPageSave" component={WorkoutPageSave} />
        <Stack.Screen name="WorkoutPageJoin" component={WorkoutPageJoin} />
        <Stack.Screen name="ServiceProviderPageFY" component={ServiceProviderPageFY} />
        <Stack.Screen name="ServiceProviderPageW" component={ServiceProviderPageW} />
        <Stack.Screen name="ServiceProviderPageN" component={ServiceProviderPageN} />
        <Stack.Screen name="ServiceProviderPageT" component={ServiceProviderPageT} />
        <Stack.Screen name="Subscription" component={Subscription} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="HomePageMenu" component={HomePageMenu} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}