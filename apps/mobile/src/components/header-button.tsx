import FontAwesome from "@expo/vector-icons/FontAwesome";
import { forwardRef } from "react";
import { Pressable } from "react-native";

export const HeaderButton = forwardRef<
  typeof Pressable,
  { onPress?: () => void }
>(({ onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      className="bg-secondary/50 active:bg-secondary mr-2 p-2 rounded-lg"
    >
      {({ pressed }) => (
        <FontAwesome
          name="info-circle"
          size={20}
          className="text-secondary-foreground"
          style={{
            opacity: pressed ? 0.7 : 1,
          }}
        />
      )}
    </Pressable>
  );
});
