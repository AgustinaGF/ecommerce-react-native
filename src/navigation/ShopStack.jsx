import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";
import ItemDetail from "../screens/ItemDetail";
import ItemListCategories from "../screens/ItemListCategories";
import Header from "../components/Header";

const ShopStack = () => {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				header: () => {
					return (
						<Header
							title={
								route.name === "Home"
									? "Categories"
									: route.name === "ItemListCategories"
									? route.params.category
									: "Detail"
							}
						/>
					);
				},
			})}
		>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="ItemDetail" component={ItemDetail} />
			<Stack.Screen name="ItemListCategories" component={ItemListCategories} />
		</Stack.Navigator>
	);
};

export default ShopStack;
