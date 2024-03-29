import {
	Text,
	View,
	FlatList,
	StyleSheet,
	ActivityIndicator,
} from "react-native";
import CategoryItem from "./CategoryItem";
import { colors } from "../global/color";
import Counter from "./Counter";
import { useSelector } from "react-redux";

import { useGetCategoriesQuery } from "../services/shopServices";
import { useGetProductsQuery } from "../services/shopServices";

const Categories = ({ navigation }) => {
	// 	const fetchCategories = () => {
	// 		try {
	// 			const { data: categories, isLoading, error } = useGetCategoriesQuery();
	// 			return categories;
	// 		} catch (error) {
	// 			console.error("Error al obtener las categorías:", error);
	// 			return [];
	// 		}
	// 	};

	// 	const initialCategories = fetchCategories();
	// console.log(initialCategories.isLoading);
	// const categories = useSelector((state) => state.shopReducer.value.categories);
	const { data, isLoading, error } = useGetCategoriesQuery();
	const {
		data: products,
		isLoading: isLoadingProducts,
		error: errorProducts,
	} = useGetProductsQuery();

	return (
		<View style={styles.container}>
			{isLoading || isLoadingProducts ? (
				<View
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				>
					<ActivityIndicator size={"large"} />
				</View>
			) : (
				<FlatList
					data={data}
					renderItem={({ item }) => (
						<CategoryItem
							navigation={navigation}
							category={item}
							allProducts={products}
						/>
					)}
					keyExtractor={(category) => category}
				/>
			)}
		</View>
	);
};

export default Categories;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		backgroundColor: colors.color_2,
	},
});
