import EventCard from "@/components/cards/event-card";
import EventGridCard from "@/components/cards/event-grid-card";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, ScrollView, TextInput } from "react-native";

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
              <EventGridCard
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
              <EventGridCard
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
            <EventGridCard key={i.toString()} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const CATEGORIES = ["MUSIC", "EDUCATION", "FITNESS", "PARTY"];
