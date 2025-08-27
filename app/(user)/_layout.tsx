import Home from "./home";
import Crypto from "./crypto";
import Wallet from "./wallet";
import Settings from "./settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const UserLayout = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="crypto" component={Crypto} />
        <Tab.Screen name="wallet" component={Wallet} />
        <Tab.Screen name="settings" component={Settings} />
      </Tab.Navigator>
    </>
  );
};

export default UserLayout;
