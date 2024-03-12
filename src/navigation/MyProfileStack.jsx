import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyProfile from "../screens/MyProfile";
import Header from "../components/Header";
import ImageSelector from "../screens/ImageSelector";
import LocationSelector from "../screens/LocationSelector";
import MyLocation from "../screens/MyLocation";

const Stack = createNativeStackNavigator();

export default function MyProfileStack() {
	return (
		<Stack.Navigator
			initialRouteName="Cart"
			screenOptions={{ header: () => <Header title="My Profile" /> }}
		>
			<Stack.Screen name="My Profile" component={MyProfile} />
			<Stack.Screen name="Image Selector" component={ImageSelector} />
			<Stack.Screen name="My Location" component={MyLocation} />
			<Stack.Screen name="Location Selector" component={LocationSelector} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({});
