import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../global/color";

const SubmitButton = ({ onPress, title }) => {
	return (
		<Pressable onPress={onPress} style={styles.button}>
			<Text style={styles.text}>{title}</Text>
		</Pressable>
	);
};

export default SubmitButton;

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.color_3,
		borderRadius: 6,
		justifyContent: "center",
		alignItems: "center",
		padding: 8,
		width: "60%",
		marginTop: 30,
	},
	text: {
		color: "white",
		fontFamily: "PacificoRegular",
		fontSize: 22,
	},
});
