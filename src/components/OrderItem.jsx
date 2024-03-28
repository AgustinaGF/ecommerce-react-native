import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/color";

const OrderItem = ({ item }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.user}>User: {item.user}</Text>
			<Text style={styles.date}>Date: {item.date}</Text>
			<Text style={styles.total}>Total: ${item.total}</Text>
		</View>
	);
};

export default OrderItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		paddingHorizontal: 20,
		alignContent: "center",
		justifyContent: "center",
		borderBottomColor: colors.color_3,
		borderBottomWidth: 2,
		borderRadius: 10,
		marginBottom: 10,
	},
	user: {
		fontFamily: "InterBold",
		fontSize: 18,
		color: colors.color_1,
		marginBottom: 10,
		marginTop: 20,
	},
	date: {
		fontFamily: "InterBold",
		fontSize: 16,
		color: colors.color_1,
		marginBottom: 10,
		marginTop: 10,
	},
	total: {
		fontFamily: "InterBold",
		fontSize: 20,
		color: colors.color_1,
		marginBottom: 10,
		marginTop: 20,
	},
});
