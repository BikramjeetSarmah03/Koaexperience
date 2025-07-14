import { Feather, Ionicons } from "@expo/vector-icons";
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";
import { type LinkProps, usePathname } from "expo-router";
import { StatusBar, useWindowDimensions, View } from "react-native";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { useEffect, type ReactNode } from "react";

export default function Layout() {
  const pathname = usePathname();
  const { width } = useWindowDimensions();

  const activeIndex = useSharedValue(0);
  const tabListWidth = width * 0.94; // Use same % as your w-[95%] class
  const tabWidth = tabListWidth / TAB_ROUTES.length;
  const pillWidth = 75;

  useEffect(() => {
    const idx = TAB_ROUTES.findIndex((tab) => tab.href === pathname);

    if (idx !== -1) {
      activeIndex.value = withTiming(idx, {
        duration: 100,
      });
    }
  }, [pathname]);

  // console.log({ value: activeIndex.value, tabWidth });
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(
          activeIndex.value * tabWidth + (tabWidth - pillWidth) / 2,
        ),
      },
    ],
  }));

  return (
    <Tabs>
      <StatusBar className="bg-background" />
      <TabSlot />

      <TabList className="bottom-6 absolute bg-secondary mx-3 p-1 border border-secondary/80 rounded-full w-[95%] elevation-sm">
        <View className="top-0 right-0 bottom-0 left-0 absolute justify-center items-start px-1">
          <Animated.View
            style={[
              {
                width: pillWidth,
                height: 40,
                borderRadius: 999,
                backgroundColor: "#f97316", // orange-400
                position: "absolute",
              },
              animatedStyle,
            ]}
          />
        </View>

        {TAB_ROUTES.map((tab) => (
          <TabTrigger
            key={tab.name}
            name={tab.name}
            href={tab.href}
            className="flex-1 justify-center items-center rounded-full h-12"
          >
            <View className="justify-center items-center w-full h-full">
              {tab.icon("#ffffff")}
            </View>
          </TabTrigger>
        ))}
      </TabList>
    </Tabs>
  );
}

type TabRoute = {
  name: string;
  label: string;
  href: LinkProps["href"];
  icon: (color: string) => ReactNode;
  width: string;
};

const TAB_ROUTES: TabRoute[] = [
  {
    name: "home",
    label: "Home",
    href: "/",
    icon: (color: string) => <Feather name="home" size={24} color={color} />,
    width: "w-24",
  },
  {
    name: "explore",
    label: "Explore",
    href: "/explore",
    icon: (color: string) => <Feather name="smile" size={24} color={color} />,
    width: "w-16",
  },
  {
    name: "events",
    label: "Events",
    href: "/events",
    icon: (color: string) => (
      <Ionicons name="aperture-outline" size={24} color={color} />
    ),
    width: "w-16",
  },
  {
    name: "profile",
    label: "Profile",
    href: "/profile",
    icon: (color: string) => <Feather name="user" size={24} color={color} />,
    width: "w-16",
  },
];
