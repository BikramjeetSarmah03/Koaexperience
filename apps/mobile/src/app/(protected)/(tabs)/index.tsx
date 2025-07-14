import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  type ViewProps,
} from "react-native";

export default function HomePage() {
  return (
    <ScrollView
      className="flex-1 bg-background p-4"
      contentContainerClassName="pb-24"
    >
      <View className="flex-row justify-between items-center py-4">
        <View className="flex-row items-center gap-2">
          <View className="bg-blue-200 p-4 rounded-full size-12" />

          <View>
            <Text className="text-foreground text-xs">Hi Welcome 👋</Text>
            <Text className="font-semibold text-foreground text-lg">
              Bikramjeet
            </Text>
          </View>
        </View>

        <View className="gap-1">
          <Text className="ml-1 text-foreground text-xs">Current Location</Text>
          <View className="flex-row">
            <Text className="text-orange-400">
              <Ionicons name="location" size={18} />
            </Text>
            <Text className="text-foreground text-sm">Tezpur, Assam</Text>
          </View>
        </View>
      </View>

      <View className="relative flex-row w-full">
        <View
          className="justify-center items-center bg-gray-900 p-2 pl-4 text-foreground"
          style={{
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <Ionicons name="search" size={18} color={"#ffffff"} />
        </View>
        <TextInput
          placeholder="Search"
          className="flex-1 bg-gray-900 placeholder:text-foreground"
        />
        <View
          className="justify-center items-center bg-gray-900 p-2 pr-4 text-foreground"
          style={{
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Ionicons name="filter" size={20} color={"#ffffff"} />
        </View>
      </View>

      <View className="my-4">
        <View className="flex-row justify-between items-center">
          <Text className="font-semibold text-foreground text-lg">Popular</Text>
          <Text className="font-semibold text-orange-300">See All</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 16,
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <EventCard key={i.toString()} />
          ))}
        </ScrollView>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-4 my-4 "
      >
        {CATEGORIES.map((cat, i) => (
          <View
            key={i.toString()}
            className="justify-center items-center bg-gray-900/80 border border-gray-600 w-32 h-10"
            style={{
              borderRadius: 5,
            }}
          >
            <Text className="font-semibold text-foreground text-sm">{cat}</Text>
          </View>
        ))}
      </ScrollView>

      <View className="gap-4 my-4">
        <View className="flex-row justify-between items-center">
          <Text className="font-semibold text-foreground text-lg">
            Upcoming Events
          </Text>
          <Text className="font-semibold text-orange-300">See All</Text>
        </View>

        <View className="gap-4">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="gap-4"
            className="pl-1"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <UpcomingEventCard
                key={i.toString()}
                style={{
                  width: 340,
                }}
              />
            ))}
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="gap-4"
            className="pl-1"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <UpcomingEventCard
                key={i.toString()}
                style={{
                  width: 340,
                }}
              />
            ))}
          </ScrollView>
        </View>
      </View>

      <View className="gap-4 my-4">
        <View className="flex-row justify-between items-center">
          <Text className="font-semibold text-foreground text-lg">
            Recommended For You
          </Text>
          <Text className="font-semibold text-orange-300">See All</Text>
        </View>

        <View className="gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <UpcomingEventCard key={i.toString()} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const CATEGORIES = ["MUSIC", "EDUCATION", "FITNESS", "PARTY"];

function UpcomingEventCard({ ...props }: ViewProps) {
  return (
    <View
      className="flex-row bg-background p-2 border border-gray-800 w-full"
      style={{
        borderRadius: 10,
        overflow: "hidden",
        height: 112,
      }}
      {...props}
    >
      {/* Left Image Block */}
      <View
        className="bg-gray-700"
        style={{
          width: 100,
          height: "100%",
          borderRadius: 10,
        }}
      />

      {/* Right Content */}
      <View
        className="flex-1 justify-between pl-3"
        style={{ paddingVertical: 2 }}
      >
        {/* Title */}
        <Text
          className="font-semibold text-white text-xl"
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{
            flexShrink: 1,
            flexWrap: "wrap",
          }}
        >
          Satelite Mega Festival - 2025
        </Text>

        {/* Bottom Row */}
        <View className="flex-row justify-between items-center mt-1">
          {/* Location */}
          <View className="flex-row items-center gap-1">
            <Ionicons name="location-outline" size={16} color="#ffffff" />
            <Text className="text-white text-sm">Guwahati, Assam</Text>
          </View>

          {/* Join Button */}
          <View className="bg-orange-400 px-6 py-1 rounded-full">
            <Text className="font-medium text-white text-sm">Join</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function EventCard() {
  return (
    <View
      className="bg-white mr-4 rounded-xl min-h-80 overflow-hidden"
      style={{ width: 250, borderRadius: 10, overflow: "hidden" }}
    >
      <View className="relative">
        <Text
          className="top-3 left-3 z-10 absolute bg-white px-4 py-1.5 font-medium"
          style={{
            borderRadius: 5,
          }}
        >
          Dance
        </Text>

        <View className="bg-gray-800 w-full h-48" />

        <View
          className="top-3 right-3 z-10 absolute bg-white/80 p-2 px-2.5 font-medium"
          style={{
            borderRadius: 5,
          }}
        >
          <Ionicons name="heart-outline" size={18} />
        </View>
      </View>

      <View className="flex-1 gap-2 bg-background/90 p-4">
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
            <Text className="text-foreground text-sm">12-15 Oct, 25</Text>
          </View>
        </View>
      </View>

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
