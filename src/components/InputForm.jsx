import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/color";

const inputForm = ({ label, error, onChange, isSecure }) => {
	const [input, setInput] = useState("");

	const onChangeText = (text) => {
		setInput(text);
		onChange(text);
	};

	return (
		<View style={styles.inputContainer}>
			<Text style={styles.subtitle}>{label}</Text>
			<TextInput
				style={styles.input}
				value={input}
				onChangeText={onChangeText}
				secureTextEntry={isSecure}
			/>
			{error ? <Text style={styles.error}>{error}</Text> : null}
		</View>
	);
};

export default inputForm;

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		width: "100%",
	},
	subtitle: {
		width: "90%",
		fontSize: 16,
		fontFamily: "InterRegular",
	},
	error: {
		fontSize: 16,
		color: "red",
		fontFamily: "InterRegular",
		fontStyle: "italic",
	},
	input: {
		width: "90%",
		borderWidth: 0,
		borderBottomWidth: 3,
		borderBottomColor: colors.color_3,
		padding: 2,
		fontFamily: "InterRegular",
		fontSize: 14,
	},
});
