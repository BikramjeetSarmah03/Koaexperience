import { authClient } from "@/lib/auth-client";
import { useQuery } from "@tanstack/react-query";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { Container } from "@/components/container";
import { SignIn } from "@/components/sign-in";
import { SignUp } from "@/components/sign-up";

export default function Home() {
  const { data: session } = authClient.useSession();

  return (
    <Container>
      <ScrollView className="flex-1">
        <View className="px-4">
          <Text className="mb-4 font-mono font-bold text-foreground text-3xl">
            BETTER T STACK
          </Text>
          {session?.user ? (
            <View className="bg-card mb-6 p-4 border border-border rounded-lg">
              <View className="flex-row justify-between items-center mb-2">
                <Text className="text-foreground text-base">
                  Welcome,{" "}
                  <Text className="font-medium">{session.user.name}</Text>
                </Text>
              </View>
              <Text className="mb-4 text-muted-foreground text-sm">
                {session.user.email}
              </Text>

              <TouchableOpacity
                className="self-start bg-destructive px-4 py-2 rounded-md"
                onPress={() => {
                  authClient.signOut();
                  //   queryClient.invalidateQueries();
                }}
              >
                <Text className="font-medium text-white">Sign Out</Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <View className="mb-6 p-4 border border-border rounded-lg">
            <Text className="mb-3 font-medium text-foreground">API Status</Text>
            <View className="flex-row items-center gap-2">
              <View className={"h-3 w-3 rounded-full"} />
              <Text className="text-muted-foreground">
                {/* {healthCheck.isLoading
                  ? "Checking..."
                  : healthCheck.data
                    ? "Connected to API"
                    : "API Disconnected"} */}
                Text
              </Text>
            </View>
          </View>
          <View className="mb-6 p-4 border border-border rounded-lg">
            <Text className="mb-3 font-medium text-foreground">
              Private Data
            </Text>
            Private
          </View>
          {!session?.user && (
            <>
              <SignIn />
              <SignUp />
            </>
          )}
        </View>
      </ScrollView>
    </Container>
  );
}
