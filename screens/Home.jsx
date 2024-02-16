import { View, StyleSheet } from "react-native";
import Header from "../src/components/Header";

import Categories from "../src/components/Categories";

function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<Categories navigation={navigation} />
		</View>
	);
}

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
	},
});