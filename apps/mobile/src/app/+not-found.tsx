import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

import { Container } from "@/components/container";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Container>
        <View className="flex-1 justify-center items-center p-6">
          <View className="items-center">
            <Text className="mb-4 text-6xl">🤔</Text>
            <Text className="mb-2 font-bold text-foreground text-2xl text-center">
              Page Not Found
            </Text>
            <Text className="mb-8 max-w-sm text-muted-foreground text-center">
              Sorry, the page you're looking for doesn't exist.
            </Text>
            <Link href="/" asChild>
              <Text className="bg-primary/10 px-6 py-3 rounded-lg font-medium text-primary">
                Go to Home
              </Text>
            </Link>
          </View>
        </View>
      </Container>
    </>
  );
}
