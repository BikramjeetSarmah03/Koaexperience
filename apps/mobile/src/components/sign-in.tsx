import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await authClient.signIn.email(
        {
          email,
          password,
        },
        {
          onError: (error) => {
            console.log(error);
            setError(error.error?.message || "Failed to sign in");
            setIsLoading(false);
          },
          onSuccess: () => {
            setEmail("");
            setPassword("");
            //   queryClient.refetchQueries();
          },
          onFinished: () => {
            setIsLoading(false);
          },
        },
      );
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <View className="bg-card mt-6 p-4 border border-border rounded-lg">
      <Text className="mb-4 font-semibold text-foreground text-lg">
        Sign In
      </Text>

      {error && (
        <View className="bg-destructive/10 mb-4 p-3 rounded-md">
          <Text className="text-destructive text-sm">{error}</Text>
        </View>
      )}

      <TextInput
        className="bg-input mb-3 p-4 border border-input rounded-md text-foreground"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#9CA3AF"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        className="bg-input mb-4 p-4 border border-input rounded-md text-foreground"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#9CA3AF"
        secureTextEntry
      />

      <TouchableOpacity
        onPress={handleLogin}
        disabled={isLoading}
        className="flex-row justify-center items-center bg-primary p-4 rounded-md"
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text className="font-medium text-primary-foreground">Sign In</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
