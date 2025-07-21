import { Text, View, Dimensions, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useCallback, useRef, useMemo } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import { LinearGradient } from "expo-linear-gradient";

import { Container } from "@/components/container";
import { Ionicons } from "@expo/vector-icons";

const SCREEN_HEIGHT = Dimensions.get("window").height;

export default function EventDetails() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Snap points: 10%, 60%, 100%
  const snapPoints = useMemo(
    () => [SCREEN_HEIGHT * 0.1, SCREEN_HEIGHT * 0.6, SCREEN_HEIGHT],
    [],
  );

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <Container className="relative flex-1">
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* Full height background */}
        <View
          className="top-0 right-0 absolute bg-gray-900 w-full"
          style={{ height: SCREEN_HEIGHT }}
        />

        {/* Bottom Sheet */}
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          index={1} // Default: 60%
          enablePanDownToClose={false}
          onChange={handleSheetChanges}
          handleIndicatorStyle={{
            backgroundColor: "#999",
            width: 60,
            height: 5,
            borderRadius: 3,
            alignSelf: "center",
            marginTop: 8,
          }}
          backgroundStyle={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          {/* Scrollable content */}
          <BottomSheetScrollView
            style={{ paddingHorizontal: 20, paddingTop: 10 }}
            contentContainerStyle={{ paddingBottom: 100 }}
          >
            <View className="gap-2">
              <View className="flex-row justify-between items-start">
                <View className="gap-2">
                  <Text className="font-medium text-foreground text-2xl">
                    Shere Bangla Concert
                  </Text>

                  <View className="flex-row items-center gap-2">
                    <Ionicons name="location" size={24} color={"#f97316"} />
                    <Text className="text-foreground">
                      ABC, Avenue, Guwahati
                    </Text>
                  </View>
                </View>

                <TouchableOpacity
                  className="bg-orange-400 px-4 py-2"
                  style={{
                    borderRadius: 10,
                  }}
                >
                  <Text className="font-semibold text-foreground text-lg">
                    $ 299 USD
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="flex-row justify-between items-center w-full">
                <View className="flex-row items-center gap-2">
                  <Ionicons name="calendar" size={20} color={"#f97316"} />
                  <Text className="text-foreground">25-26 Oct, 25</Text>
                </View>

                <View className="flex-row items-center gap-2">
                  <Ionicons name="people" size={20} color={"#f97316"} />
                  <Text className="text-foreground">15.7k+ Members Joined</Text>
                </View>
              </View>
            </View>

            <View className="my-8">
              <LinearGradient
                colors={[
                  "transparent",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "transparent",
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ height: 0.7, width: "100%" }}
              />
            </View>

            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center gap-2">
                <View
                  className="bg-blue-200 size-14"
                  style={{
                    borderRadius: 100,
                  }}
                />

                <View>
                  <Text className="font-semibold text-foreground text-xl">
                    Tamim Ikram
                  </Text>
                  <Text className="text-foreground text-xs">Event Manager</Text>
                </View>
              </View>

              <View
                className="justify-center items-center bg-blue-100 p-2.5"
                style={{
                  borderRadius: 100,
                }}
              >
                <Ionicons name="chatbox-ellipses" color={"#000000"} size={24} />
              </View>
            </View>

            <View className="gap-2 my-4">
              <Text className="font-semibold text-foreground text-xl">
                Description
              </Text>

              <Text className="mt-2 text-foreground text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veniam, architecto! Molestias iure ipsum laboriosam aperiam
                atque enim ipsa rem officia!
              </Text>
            </View>

            <View
              style={{
                borderRadius: 10,
                overflow: "hidden",
              }}
              className="my-4"
            >
              <View className="bg-blue-100 w-full h-56" />
            </View>

            <View className="flex-row items-center gap-4">
              <View
                className="p-3 border border-white w-fit"
                style={{
                  borderRadius: 10,
                }}
              >
                <Ionicons name="bookmark-outline" size={24} color={"#ffffff"} />
              </View>

              <TouchableOpacity
                className="flex-1 justify-center items-center bg-orange-500 h-14"
                style={{
                  borderRadius: 10,
                }}
              >
                <Text className="font-semibold text-foreground text-xl">
                  BUY A TICKET
                </Text>
              </TouchableOpacity>
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      </GestureHandlerRootView>
    </Container>
  );
}
