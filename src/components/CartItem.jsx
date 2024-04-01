import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { colors } from "../global/color";

import { removeItem } from "../features/shop/cartSlice";

const CartItem = ({ item }) => {
	const dispatch = useDispatch();
	const handleRemoveItem = () => {
		dispatch(removeItem({ id: item.id }));

		Alert.alert(
			"Item has been deleted",
			"Item has been deleted"[
				{
					text: "OK",
				}
			]
		);
	};

	return (
		<View style={styles.container}>
			<View style={styles.containerText}>
				<Text style={styles.text}> Title:{item.title}</Text>
				<Text style={styles.text}>Description:{item.brand}</Text>
				<Text style={styles.text}> Price: $ {item.price}</Text>
				<Text style={styles.text}> Quantity:{item.quantity}</Text>
			</View>
			<Pressable onPress={handleRemoveItem}>
				<AntDesign name="delete" size={24} color={colors.color_1} />
			</Pressable>
		</View>
	);
};

export default CartItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginBottom: 6,
		borderBottomColor: colors.color_2,
		borderBottomWidth: 2,
	},
	containerText: {
		justifyContent: "center",
		alignItems: "flex-start",
		marginBottom: 8,
	},
	text: {
		fontFamily: "InterBold",
		fontSize: 12,
		color: "white",
		marginRight: 4,
	},
});
