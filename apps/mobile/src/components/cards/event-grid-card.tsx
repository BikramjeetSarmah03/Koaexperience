import { Ionicons } from "@expo/vector-icons";
import { Text, View, type ViewProps } from "react-native";

export default function EventGridCard({ ...props }: ViewProps) {
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
