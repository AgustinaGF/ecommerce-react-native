import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import { StyleSheet, View, Text } from "react-native";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { colors } from "../global/color";
import OrderStack from "./OrderStack";
import MyProfileStack from "./MyProfileStack";

const TabNavigator = () => {
	const Tab = createBottomTabNavigator();
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: styles.tabBar,
			}}
		>
			<Tab.Screen
				name="ShopStack"
				component={ShopStack}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<View style={styles.tabContainer}>
								<Entypo
									name="shop"
									size={24}
									color={focused ? "black" : "grey"}
								/>
								<Text style={{ color: focused ? "black" : "grey" }}>Shop</Text>
							</View>
						);
					},
				}}
			/>
			<Tab.Screen
				name="CartTab"
				component={CartStack}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<View>
								<Entypo
									name="shopping-cart"
									size={24}
									color={focused ? "black" : "grey"}
								/>
								<Text style={{ color: focused ? "black" : "grey" }}>Cart</Text>
							</View>
						);
					},
				}}
			/>
			<Tab.Screen
				name="OrdersTab"
				component={OrderStack}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<View>
								<FontAwesome
									name="list"
									size={24}
									color={focused ? "black" : "grey"}
								/>
								<Text style={{ color: focused ? "black" : "grey" }}>Order</Text>
							</View>
						);
					},
				}}
			/>
			<Tab.Screen
				name="MyProfileStack"
				component={MyProfileStack}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<View style={styles.tabContainer}>
								<Ionicons
									name="person-circle-outline"
									size={30}
									color={focused ? "black" : "grey"}
								/>
								<Text style={{ color: focused ? "black" : "grey" }}>
									My profile
								</Text>
							</View>
						);
					},
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabNavigator;

const styles = StyleSheet.create({
	tabBar: {
		backgroundColor: colors.color_4,
		height: 70,
	},
	tabContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
});
