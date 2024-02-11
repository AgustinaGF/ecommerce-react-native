import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import Home from "./screens/Home";
import ItemListCategories from "./screens/ItemListCategories";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");

  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {categorySelected ? (
        <ItemListCategories />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.StatusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 14,
  },
  product: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
