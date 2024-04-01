import {
	StyleSheet,
	Text,
	Image,
	useWindowDimensions,
	Pressable,
} from "react-native";
import Card from "./Card";
import { useEffect, useState } from "react";
import { colors } from "../global/color";

const ProductItem = ({ product, navigation }) => {
	const [isPortrait, setIsPortrait] = useState(true);
	const [isLandscape, setIsLandscape] = useState(false);

	const { width, height } = useWindowDimensions();

	useEffect(() => {
		if (height > width) {
			setIsPortrait(true);
			setIsLandscape(false);
		} else {
			setIsPortrait(false);
			setIsLandscape(true);
		}
	}, [width, height]);

	return (
		<Pressable
			onPress={() => navigation.navigate("ItemDetail", { id: product.id })}
		>
			<Card style={styles.card}>
				<Text style={width < 400 ? styles.textMin : styles.text}>
					{product.title}
				</Text>
				<Image
					style={styles.image}
					resizeMode="cover"
					source={{ uri: product.thumbnail }}
				/>
			</Card>
		</Pressable>
	);
};

export default ProductItem;

const styles = StyleSheet.create({
	card: {
		height: 100,
		padding: 20,
		margin: 15,
		borderWidth: 2,
		borderRadius: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		gap: 4,
		backgroundColor: "white",
	},
	image: {
		minHeight: 90,
		minWidth: 90,
		width: "30%",
		borderRadius: 5,
	},
	text: {
		fontSize: 25,
		width: "70%",
		fontFamily: "InterBold",
		color: colors.color_1,
	},
	textMin: {
		fontSize: 14,
		width: "70%",
		fontFamily: "InterBold",
		color: colors.color_1,
	},
});
