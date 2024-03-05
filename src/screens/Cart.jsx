import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import allCartItems from "../data/cart.json";

import CartItem from "../components/CartItem";
import { usePostOrderMutation } from "../services/shopServices";
import { useSelector } from "react-redux";

export default function Cart() {
	const cartItems = useSelector((state) => state.cartReducer.value.items);

	const total = useSelector((state) => state.cartReducer.value.total);

	const [triggerPost, result] = usePostOrderMutation();

	return (
		<View>
			{cartItems.length > 0 ? (
				<>
					<FlatList
						data={cartItems}
						renderItem={({ item }) => <CartItem item={item} />}
						keyExtractor={(cartItem) => cartItem.id}
					/>
					<Text>Total:${total}</Text>
				</>
			) : (
				<Text>No hay Productos Agregados</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({});
