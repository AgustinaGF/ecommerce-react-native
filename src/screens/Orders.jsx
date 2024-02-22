import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import orders from "../data/orders.json";
import OrderItem from "../components/OrderItem";

export default function Orders() {
	return (
		<View>
			<FlatList
				data={orders}
				renderItem={({ item }) => <OrderItem item={item} />}
				keyExtractor={(order) => order.id}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});
