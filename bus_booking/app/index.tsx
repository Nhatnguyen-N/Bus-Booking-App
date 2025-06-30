import { useEffect } from "react";
import { Image, Text, View } from "react-native";

export default function SplashScreen() {
  const tokenCheck = async () => {};

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      tokenCheck();
    }, 1500);
    return () => clearTimeout(timeOutId);
  }, []);

  return (
    <View className="flex-1 justify-center bg-white items-center">
      <Image
        source={require("../assets/images/logo_t.png")}
        className="h-[30%] w-[60%]"
        resizeMode="contain"
      />
    </View>
  );
}
