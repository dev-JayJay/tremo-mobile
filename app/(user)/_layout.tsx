import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const UserLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
};

export default UserLayout;
