import { Tabs } from "expo-router";
import TabsComponent from "@/components/tab";

const tabs = [
  { name: "home", title: "Home" },
  { name: "crypto", title: "Crypto" },
  { name: "wallet", title: "Wallet" },
  { name: "settings", title: "Settings" },
];

const UserLayout = () => {
  return (
    <>
      <Tabs
        tabBar={(props) => <TabsComponent {...props} />}
        screenOptions={{
          tabBarActiveTintColor: "#144E32",
          tabBarInactiveTintColor: "gray",
          headerTitleAlign: "center",
        }}
      >
        {tabs.map(({ name, title }) => (
          <Tabs.Screen
            key={name}
            name={name}
            options={{ title, headerShown: false }}
          />
        ))}
      </Tabs>
    </>
  );
};

export default UserLayout;
