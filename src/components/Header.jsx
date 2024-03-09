import { Text, View, StyleSheet } from "react-native";
import { colors } from "../global/color";

function Header({ title }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{title}</Text>
		</View>
	);
}

export default Header;

const styles = StyleSheet.create({
	container: {
		height: 80,
		width: "100%",
		backgroundColor: colors.color_4,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		textAlign: "center",
		color: "white",
		fontSize: 25,
		fontFamily: "PacificoRegular",
	},
});
