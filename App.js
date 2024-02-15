import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import Home from "./screens/Home";
import ItemListCategories from "./screens/ItemListCategories";
import { StyleSheet, View, SafeAreaView, Platform } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import ItemDetail from "./screens/ItemDetail";

export default function App() {
	const [categorySelected, setCategorySelected] = useState("");
	const [productDetailId, setProductDetailId] = useState(0);

	const [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<>
			<SafeAreaView style={styles.container}>
				<StatusBar style="auto" />
				{productDetailId ? (
					<ItemDetail productDetailId={productDetailId} />
				) : categorySelected ? (
					<ItemListCategories
						setCategorySelected={setCategorySelected}
						category={categorySelected}
						setProductDetailId={setProductDetailId}
					/>
				) : (
					<Home setCategorySelected={setCategorySelected} />
				)}
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ededed",
		alignItems: "center",
		paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
	},
});
