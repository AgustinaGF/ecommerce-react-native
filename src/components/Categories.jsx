import { Text, View, FlatList, StyleSheet } from "react-native";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";
import { colors } from "../global/color";
function Categories({ navigation }) {
	return (
		<View style={styles.container}>
			<FlatList
				data={categories}
				renderItem={({ item }) => (
					<CategoryItem navigation={navigation} category={item} />
				)}
				keyExtractor={(category) => category}
			/>
		</View>
	);
}

export default Categories;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		backgroundColor: colors.color_2,
	},
});