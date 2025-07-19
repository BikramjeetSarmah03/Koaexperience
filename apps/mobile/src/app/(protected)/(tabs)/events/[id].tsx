import { Text, View, Dimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useCallback, useRef, useMemo } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import { Container } from "@/components/container";

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
            <View>
              <Text className="text-foreground">Hey working</Text>
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      </GestureHandlerRootView>
    </Container>
  );
}
