import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Cart";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

export default function CartStack() {
	return (
		<Stack.Navigator
			initialRouteName="Cart"
			screenOptions={{ header: () => <Header title="Cart" /> }}
		>
			<Stack.Screen name="Cart" component={Cart} />
		</Stack.Navigator>
	);
}
