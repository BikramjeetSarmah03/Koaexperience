import { Feather, Ionicons } from "@expo/vector-icons";
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";
import { usePathname } from "expo-router";
import { StatusBar, View } from "react-native";

import { cn } from "@/lib/utils";

export default function Layout() {
  const pathname = usePathname();

  const isActiveLink = (link: string) => {
    return pathname === link;
  };

  return (
    <Tabs>
      <StatusBar className="bg-background" />
      <TabSlot />

      <TabList className="bottom-6 absolute bg-white mx-3 p-1 border border-gray-200 rounded-full w-[95%] elevation-sm">
        <TabTrigger
          name="home"
          href="/"
          className={cn(
            "p-2.5 w-16 rounded-full",
            isActiveLink("/") && "bg-orange-400",
          )}
        >
          <View className="justify-center items-center w-full h-full">
            <Feather name="home" size={24} />
          </View>
        </TabTrigger>
        <TabTrigger
          name="moods"
          href="/explore"
          className={cn(
            "p-2.5 w-16 rounded-full",
            isActiveLink("/explore") && "bg-orange-400",
          )}
        >
          <View className="justify-center items-center w-full h-full">
            <Feather name="smile" size={24} />
          </View>
        </TabTrigger>
        <TabTrigger
          name="explore"
          href="/events"
          className={cn(
            "p-2.5 w-16 rounded-full",
            isActiveLink("/events") && "bg-orange-400",
          )}
        >
          <View className="justify-center items-center w-full h-full">
            <Ionicons name="aperture-outline" size={24} />
          </View>
        </TabTrigger>
        <TabTrigger
          name="profile"
          href="/profile"
          className={cn(
            "p-2.5 w-16 rounded-full",
            isActiveLink("/profile") && "bg-orange-400",
          )}
        >
          <View className="justify-center items-center w-full h-full">
            <Feather name="user" size={24} />
          </View>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}
