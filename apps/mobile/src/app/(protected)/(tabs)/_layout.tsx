import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const tabIcons: Record<"home" | "explore" | "events" | "profile", string> = {
  home: "home-outline",
  explore: "search-outline",
  events: "calendar-outline",
  profile: "person-outline",
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF7A59",
        tabBarInactiveTintColor: "#A0A0A0",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 10,
          height: 65,
        },
        tabBarIcon: ({ color, size }) => {
          const iconName =
            tabIcons[route.name as keyof typeof tabIcons] ?? "ellipse-outline"; // fallback
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="explore" options={{ title: "Explore" }} />
      <Tabs.Screen name="events" options={{ title: "Events" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
