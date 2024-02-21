import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import allCartItems from "../src/data/cart.json";

import CartItem from "../src/components/CartItem";

export default function Cart() {
	const [cartItems, setCartItems] = useState([]);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const total = allCartItems.reduce(
			(acc, currentItem) => (acc += currentItem.quantity * currentItem.price),
			0
		);
		setCartItems(allCartItems);
		setTotal(total);
	});
	return (
		<View>
			<FlatList
				data={cartItems}
				renderItem={({ item }) => <CartItem item={item} />}
				keyExtractor={(cartItem) => cartItem.id}
			/>
			<Text>Total:${total}</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
