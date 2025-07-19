import { View, Text, TouchableOpacity } from "react-native";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function EventCard() {
  const router = useRouter();
  const eventId = Math.floor(Math.random() * 10000); // unique event ID

  return (
    <View
      className="bg-white mr-4 rounded-xl min-h-80 overflow-hidden"
      style={{ width: 250, borderRadius: 10 }}
    >
      {/* Top Image Section */}
      <Link
        href={{
          pathname: "/events/[id]",
          params: {
            id: eventId,
          },
        }}
        asChild
      >
        <TouchableOpacity>
          <View className="relative">
            <Text
              className="top-3 left-3 z-10 absolute bg-white px-4 py-1.5 font-medium"
              style={{ borderRadius: 5 }}
            >
              Dance
            </Text>

            <View className="bg-gray-800 w-full h-48" />

            <View
              className="top-3 right-3 z-10 absolute bg-white/80 p-2 px-2.5"
              style={{ borderRadius: 5 }}
            >
              <Ionicons name="heart-outline" size={18} />
            </View>
          </View>
        </TouchableOpacity>
      </Link>

      {/* Description Section */}
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/events/[id]",
            params: {
              id: eventId,
            },
          })
        }
        className="flex-1 gap-2 bg-background/90 p-4"
      >
        <Text className="font-semibold text-foreground text-lg">
          Going to a Rock Concert
        </Text>

        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center gap-2">
            <Ionicons name="calendar-outline" color={"#ffffff"} size={14} />
            <Text className="text-foreground text-sm">12-15 Oct, 25</Text>
          </View>

          <View className="flex-row items-center gap-2">
            <Ionicons name="location" color={"#ffffff"} size={14} />
            <Text className="text-foreground text-sm">Guwahati</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Footer Section */}
      <View className="flex-row justify-between items-center bg-background/90 px-4 py-2">
        <View>
          <View className="flex-row items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <View
                key={i.toString()}
                className="bg-white -ml-2 border border-gray-300 size-6"
                style={{
                  borderRadius: 999,
                  zIndex: 5 - i,
                }}
              />
            ))}
          </View>
          <Text className="mt-1 -ml-1 text-muted-foreground text-xs">
            Members Joined
          </Text>
        </View>

        <View className="bg-orange-400 -mt-2 px-6 py-2 rounded-full">
          <Text className="font-semibold text-white text-sm">Join Now</Text>
        </View>
      </View>
    </View>
  );
}
