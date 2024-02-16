import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { colors } from "../global/color";

function CategoryItem({ category, navigation }) {
	return (
		<Card style={styles.textContainer}>
			<Pressable
				onPress={() => navigation.navigate("ItemListCategories", { category })}
			>
				<Text style={styles.text}>{category}</Text>
			</Pressable>
		</Card>
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
