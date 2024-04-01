import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Pressable,
	Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../global/color";
import CartItem from "../components/CartItem";
import { usePostOrderMutation } from "../services/shopServices";
import { useSelector } from "react-redux";
import { clearCart } from "../features/shop/cartSlice";
import { useDispatch } from "react-redux";

export default function Cart({ navigation }) {
	const cartItems = useSelector((state) => state.cartReducer.value.items);
	const total = useSelector((state) => state.cartReducer.value.total);
	const date = new Date().toLocaleString();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.authReducer.value);

	const [triggerPost, result] = usePostOrderMutation();
	const confirmCart = () => {
		triggerPost({ total, cartItems, date, user: user });
		dispatch(clearCart());
		Alert.alert(
			"Order successfuly placed",
			"Order successfuly placed"[
				{
					text: "OK",
					onPress: () => navigation.navigate("Orders"),
				}
			]
		);
	};

	const deleteCart = () => {
		dispatch(clearCart());
		Alert.alert(
			"Order deleted",
			"Order deleted"[{ text: "OK", onPress: () => console.log("OK Pressed") }]
		);
	};
	return (
		<View style={styles.container}>
			{cartItems.length > 0 ? (
				<>
					<View style={styles.cartItem}>
						<FlatList
							data={cartItems}
							renderItem={({ item }) => <CartItem item={item} />}
							keyExtractor={(cartItem) => cartItem.id}
							style={styles.flat}
						/>
						<Text style={styles.total}>Total:${total}</Text>
						<View style={styles.buttonContainer}>
							<Pressable onPress={confirmCart} style={styles.confirmCart}>
								<Text style={styles.buttonText}>Confirm</Text>
							</Pressable>
							<Pressable onPress={deleteCart} style={styles.deleteCart}>
								<Text style={styles.buttonText}>Delete</Text>
							</Pressable>
						</View>
					</View>
				</>
			) : (
				<View style={styles.notProductContainer}>
					<Text style={styles.notProduct}>No hay Productos Agregados</Text>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		paddingHorizontal: 20,
		backgroundColor: colors.color_2,
	},
	cartItem: {
		// marginHorizontal: 30,
		marginVertical: 20,
		padding: 10,
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: colors.color_5,
		borderRadius: 10,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "100%",
		marginTop: 8,
	},
	confirmCart: {
		padding: 10,
		borderRadius: 6,
		backgroundColor: colors.color_7,
	},
	deleteCart: {
		padding: 10,
		borderRadius: 6,
		backgroundColor: colors.color_7,
	},
	buttonText: {
		fontFamily: "InterBold",
		fontSize: 14,
		color: "white",
	},
	total: {
		fontFamily: "InterBold",
		fontSize: 18,
		color: "white",
		marginBottom: 10,
		marginTop: 20,
	},
	notProductContainer: {
		marginVertical: 20,
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.color_1,
		borderRadius: 10,
	},
	notProduct: {
		flexDirection: "row",
		fontFamily: "InterBold",
		fontSize: 18,
		color: "white",
	},
});
