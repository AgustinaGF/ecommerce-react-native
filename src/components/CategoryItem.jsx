import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { colors } from "../global/color";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";

function CategoryItem({ category, navigation }) {
	const dispatch = useDispatch();
	return (
		// <Pressable onPress={}>
		<Pressable
			onPress={() => {
				dispatch(setCategorySelected(category));
				navigation.navigate("ItemListCategories", { category });
			}}
		>
			<Card style={styles.textContainer}>
				<Text style={styles.text}>{category}</Text>
			</Card>
		</Pressable>
	);
}

export default CategoryItem;

const styles = StyleSheet.create({
	textContainer: {
		marginHorizontal: 30,
		marginVertical: 10,
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.color_5,
		borderRadius: 10,
	},
	text: {
		fontSize: 25,
		fontFamily: "InterBold",
		color: "white",
	},
});
