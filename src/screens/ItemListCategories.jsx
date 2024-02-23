import { Text, View, FlatList, StyleSheet, Pressable } from "react-native";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import { colors } from "../global/color";
import { useSelector } from "react-redux";

function ItemListCategories({ navigation, route }) {
	const [products, setProducts] = useState([]);
	const [keyword, setKeyword] = useState("");

	const productsFilteredByCategory = useSelector(
		(state) => state.shopReducer.value.productsFilteredByCategory
	);

	useEffect(() => {
		const productsFiltered = productsFilteredByCategory.filter((product) =>
			product.title.includes(keyword)
		);
		setProducts(productsFiltered);
	}, [productsFilteredByCategory, keyword]);

	return (
		<View style={styles.container}>
			<Search onSearch={setKeyword} />
			<FlatList
				data={products}
				renderItem={({ item }) => (
					<ProductItem product={item} navigation={navigation} />
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}
export default ItemListCategories;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 20,
		backgroundColor: colors.color_2,
	},
	containerText: {
		backgroundColor: colors.color_4,
		width: "100%",
	},
});
