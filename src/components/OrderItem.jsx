import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OrderItem = ({ item }) => {
	// const total = item.items
	// 	? item.items.reduce(
	// 			(acc, currentItem) => (acc += currentItem.quantity * currentItem.price),
	// 			0
	// 	  )
	// 	: 0;

	return (
		<View>
			{/* <Text>{item.cartItems.description}</Text>
			<Text>{item.date}</Text> */}
			<Text>{item.total}</Text>
		</View>
	);
};

export default OrderItem;

const styles = StyleSheet.create({});
