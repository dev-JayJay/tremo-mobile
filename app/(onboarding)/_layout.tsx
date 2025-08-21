import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const OnboardingLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="first-tab" options={{ headerShown: false }} />
        <Stack.Screen name="second-tab" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
};

export default OnboardingLayout;
