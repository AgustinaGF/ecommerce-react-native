import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { colors } from "../global/color";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useGetUserLocationQuery } from "../services/shopServices";

const MyLocation = ({ navigation }) => {
	const { user, localId } = useSelector((state) => state.authReducer.value);
	const { data: location } = useGetUserLocationQuery(localId);
	console.log(location, localId, "qqqq");
	return (
		<Pressable
			style={styles.container}
			onPress={() => navigation.navigate("Location Selector")}
		>
			<Text style={styles.text}>{location.address}</Text>
			<FontAwesome name="map" size={24} style={{ color: "white" }} />
		</Pressable>
	);
};

export default MyLocation;

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 10,
		backgroundColor: colors.color_1,
		borderRadius: 10,
		marginLeft: 30,
		marginRight: 30,
		minHeight: 100,
		padding: 8,
	},
	text: {
		textAlign: "center",
		color: "white",
		fontSize: 25,
		fontFamily: "InterBold",
		marginRight: 2,
	},
});
