import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/color";

const CartItem = ({ item }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{item.title}</Text>
			<Text style={styles.text}>{item.brand}</Text>
			<Text style={styles.text}>{item.price}</Text>
		</View>
	);
};

export default CartItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 6,
	},
	text: {
		fontFamily: "InterBold",
		fontSize: 14,
		color: "white",
	},
});
