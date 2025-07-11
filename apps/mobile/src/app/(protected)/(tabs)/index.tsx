import { Ionicons } from "@expo/vector-icons";
import { Dimensions, ScrollView, Text, View } from "react-native";

const WIDTH = Dimensions.get("window").width;

export default function HomePage() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-background"
      contentContainerClassName="pb-20"
    >
      <View className="relative bg-secondary p-4 pt-8 rounded-b-[2rem] h-60">
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

      <View className="gap-4 mt-8 p-4">
        <View className="flex-row justify-between items-center w-full">
          <Text className="font-semibold text-white text-xl">
            Upcoming Events
          </Text>

          <Text className="text-white">See all</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="gap-4"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <View
              key={i.toString()}
              style={{
                borderRadius: 10,
                elevation: 10,
              }}
              className="bg-secondary p-2 w-64 h-72 overflow-hidden"
            >
              <View
                className="relative flex-1 bg-blue-900 w-full"
                style={{
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <View
                  className="top-2 left-2 absolute justify-center items-center bg-white p-1 w-14 h-fit"
                  style={{
                    borderRadius: 10,
                    elevation: 2,
                  }}
                >
                  <Text className="font-bold text-orange-400 text-xl">10</Text>
                  <Text className="font-bold text-orange-400 text-sm">
                    June
                  </Text>
                </View>

                <View
                  className="top-2 right-2 absolute justify-center items-center bg-white p-1 w-10 h-10"
                  style={{
                    borderRadius: 10,
                    elevation: 2,
                  }}
                >
                  <Ionicons name="bookmark" size={20} color={"#ea580c"} />
                </View>
              </View>

              <View className="p-2">
                <Text className="font-semibold text-white text-lg">
                  Lorem ipsum{" "}
                </Text>

                <View className="gap-2">
                  <Text className="text-white text-xs">20 People Joined</Text>
                  <View className="flex-row items-center gap-2">
                    <Ionicons name="location" color={"#ffffff"} />
                    <Text className="text-white">Guwahati, Assam</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <View className="p-4 w-full h-48">
        <Text className="bg-blue-800 h-full text-white">Offers</Text>
      </View>

      <View className="gap-4 p-4">
        <View className="flex-row justify-between items-center w-full">
          <Text className="font-semibold text-white text-xl">Nearby You</Text>

          <Text className="text-white">See all</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="gap-4"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <View
              key={i.toString()}
              style={{
                borderRadius: 10,
                elevation: 10,
              }}
              className="bg-secondary p-2 w-64 h-72 overflow-hidden"
            >
              <View
                className="relative flex-1 bg-blue-900 w-full"
                style={{
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <View
                  className="top-2 left-2 absolute justify-center items-center bg-white p-1 w-14 h-fit"
                  style={{
                    borderRadius: 10,
                    elevation: 2,
                  }}
                >
                  <Text className="font-bold text-orange-400 text-xl">10</Text>
                  <Text className="font-bold text-orange-400 text-sm">
                    June
                  </Text>
                </View>

                <View
                  className="top-2 right-2 absolute justify-center items-center bg-white p-1 w-10 h-10"
                  style={{
                    borderRadius: 10,
                    elevation: 2,
                  }}
                >
                  <Ionicons name="bookmark" size={20} color={"#ea580c"} />
                </View>
              </View>

              <View className="p-2">
                <Text className="font-semibold text-white text-lg">
                  Lorem ipsum{" "}
                </Text>

                <View className="gap-2">
                  <Text className="text-white text-xs">20 People Joined</Text>
                  <View className="flex-row items-center gap-2">
                    <Ionicons name="location" color={"#ffffff"} />
                    <Text className="text-white">Guwahati, Assam</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
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
