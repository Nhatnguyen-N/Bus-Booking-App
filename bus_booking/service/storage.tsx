import * as SecureStore from "expo-secure-store";

// Lưu access token
export const setAccessToken = async (token: string) => {
  try {
    await SecureStore.setItemAsync("accessToken", token);
  } catch (error) {
    console.error("Failed to save access token", error);
  }
};

// Lấy access token
export const getAccessToken = async (): Promise<string | null> => {
  try {
    return await SecureStore.getItemAsync("accessToken");
  } catch (error) {
    console.error("Failed to get access token", error);
    return null;
  }
};

// Xóa access token
export const removeAccessToken = async () => {
  try {
    await SecureStore.deleteItemAsync("accessToken");
  } catch (error) {
    console.error("Failed to remove access token", error);
  }
};

// Lưu refresh token
export const setRefreshToken = async (token: string) => {
  try {
    await SecureStore.setItemAsync("refreshToken", token);
  } catch (error) {
    console.error("Failed to save refresh token", error);
  }
};

// Lấy refresh token
export const getRefreshToken = async (): Promise<string | null> => {
  try {
    return await SecureStore.getItemAsync("refreshToken");
  } catch (error) {
    console.error("Failed to get refresh token", error);
    return null;
  }
};

// Xóa refresh token
export const removeRefreshToken = async () => {
  try {
    await SecureStore.deleteItemAsync("refreshToken");
  } catch (error) {
    console.error("Failed to remove refresh token", error);
  }
};

// Xóa tất cả tokens
export const clearAllTokens = async () => {
  try {
    await removeAccessToken();
    await removeRefreshToken();
  } catch (error) {
    console.error("Failed to clear tokens", error);
  }
};
