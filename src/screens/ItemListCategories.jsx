import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { colors } from "../global/color";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../services/shopServices";

function ItemListCategories({ navigation }) {
	const [products, setProducts] = useState([]);
	const [keyword, setKeyword] = useState("");

	const category = useSelector(
		(state) => state.shopReducer.value.categorySelected
	);
	const {
		data: productsFilteredByCategory,
		isLoading,
		error,
	} = useGetProductsByCategoryQuery(category);

	useEffect(() => {
		if (productsFilteredByCategory) {
			const productsRaw = Object.values(productsFilteredByCategory);
			const productsFiltered = productsRaw.filter((product) =>
				product.title.includes(keyword)
			);
			setProducts(productsFiltered);
		}
	}, [productsFilteredByCategory, keyword]);

	return (
		<View style={styles.container}>
			{isLoading ? (
				<View
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				>
					<ActivityIndicator size={"large"} />
				</View>
			) : (
				<>
					<Search onSearch={setKeyword} />
					<FlatList
						data={products}
						renderItem={({ item }) => (
							<ProductItem product={item} navigation={navigation} />
						)}
						keyExtractor={(item) => item.id}
					/>
				</>
			)}
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
