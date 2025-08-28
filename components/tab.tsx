import React, { JSX } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { House, LineChart, WalletMinimal, Settings } from "lucide-react-native";

type TabRouteName = "home" | "crypto" | "wallet" | "settings";

const TabsComponent: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const icons: Record<TabRouteName, (props: any) => JSX.Element> = {
    home: (props: any) => <House size={32} color="#144E32" {...props} />,
    crypto: (props: any) => <LineChart size={32} color="#144E32" {...props} />,
    wallet: (props: any) => (
      <WalletMinimal size={32} color="#144E32" {...props} />
    ),
    settings: (props: any) => <Settings size={32} color="#144E32" {...props} />,
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[styles.tabButton]}
          >
            {icons[route.name as TabRouteName]({
              color: isFocused ? "#BFBFBF" : "#787575ff",
            })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#111111",
    marginHorizontal: 0,
    paddingVertical: 30,
    borderRadius: 0,
    borderTopColor: "#515151",
    borderCurve: "continuous",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  activeText: {
    color: "#144E32",
    fontWeight: "bold",
    fontSize: 11,
  },
  inactiveText: {
    color: "#888",
    fontSize: 11,
  },
});

export default TabsComponent;
