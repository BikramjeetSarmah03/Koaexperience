import { Ionicons } from "@expo/vector-icons";
import { Dimensions, ScrollView, Text, View } from "react-native";

const WIDTH = Dimensions.get("window").width;

export default function HomePage() {
  return (
    <View className="flex-1">
      <View className="relative bg-background p-4 pt-8 rounded-b-[2rem] h-72">
        <Text className="text-white">Hey</Text>

        <View
          className="-bottom-4 absolute"
          style={{
            width: WIDTH,
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="px-8"
          >
            {EVENT_TYPES.map((event, idx) => (
              <View
                key={idx.toString()}
                className="flex-row justify-center items-center gap-2 mr-3 px-5 py-2.5 rounded-xl"
                style={{ backgroundColor: event.color, borderRadius: 999 }}
              >
                <Ionicons
                  // biome-ignore lint/suspicious/noExplicitAny: <needed>
                  name={event.icon as any}
                  color={"#ffffff"}
                  size={18}
                />
                <Text className="font-medium text-white">{event.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export const EVENT_TYPES = [
  {
    name: "Sports",
    icon: "football-outline",
    color: "#1E88E5", // Blue
  },
  {
    name: "Music",
    icon: "musical-notes-outline",
    color: "#9C27B0", // Purple
  },
  {
    name: "Food",
    icon: "restaurant-outline",
    color: "#FF7043", // Orange
  },
  {
    name: "Party",
    icon: "beer-outline",
    color: "#43A047", // Green
  },
];
