import { Stack } from "expo-router";
import "../global.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/service/queryClient";
export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }} />
    </QueryClientProvider>
  );
}
