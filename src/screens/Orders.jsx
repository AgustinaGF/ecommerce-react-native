import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import orders from "../data/orders.json";
import OrderItem from "../components/OrderItem";
import { colors } from "../global/color";

const Orders = () => {
	return (
		<View style={styles.container}>
			{orders.length > 0 ? (
				<FlatList
					data={orders}
					renderItem={({ item }) => <OrderItem item={item} />}
					keyExtractor={(order) => order.id}
				/>
			) : (
				<View style={styles.containerText}>
					<Text style={styles.text}>No hay órdenes realizadas.</Text>
				</View>
			)}
		</View>
	);
};

export default Orders;

const styles = StyleSheet.create({
	container: {
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.color_2,
	},
	text: {
		fontSize: 30,
		backgroundColor: colors.color_2,
		color: "white",
		padding: 40,
		fontFamily: "PacificoRegular",
		borderRadius: 15,
	},
	containerText: {
		backgroundColor: colors.color_4,
		width: "100%",
	},
});
