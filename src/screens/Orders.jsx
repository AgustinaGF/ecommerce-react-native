import {
	StyleSheet,
	Text,
	View,
	FlatList,
	ActivityIndicator,
} from "react-native";
import React from "react";
import OrderItem from "../components/OrderItem";
import { colors } from "../global/color";
import { useGetOrdersQuery } from "../services/shopServices";

const Orders = () => {
	const { data: orders, isLoading, error } = useGetOrdersQuery();

	const ordersObject = orders || {};

	const ordersList = Object.keys(ordersObject).map((key) => ({
		id: key,
		...ordersObject[key],
	}));

	return (
		<View style={styles.container}>
			{isLoading ? (
				<View
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				>
					<ActivityIndicator size={"large"} />
				</View>
			) : ordersList.length > 0 ? (
				<FlatList
					data={ordersList}
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
