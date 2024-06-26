import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { colors } from "../global/color";
import { useSelector } from "react-redux";

const MyProfile = ({ navigation }) => {
	const { profileImage, imageCamera } = useSelector(
		(state) => state.authReducer.value
	);

	return (
		<View style={styles.container}>
			{profileImage || imageCamera ? (
				<Image
					source={{ uri: profileImage || imageCamera }}
					resizeMode="cover"
					style={styles.image}
				/>
			) : (
				<>
					<Image
						source={require("../../assets/defaultProfile.png")}
						style={styles.image}
						resizeMode="cover"
					/>
				</>
			)}
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate("Image Selector")}
			>
				<Text style={styles.text}>Add profile picture</Text>
			</Pressable>
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate("My Location")}
			>
				<Text style={styles.text}>My adresses</Text>
			</Pressable>
		</View>
	);
};

export default MyProfile;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		gap: 15,
		alignItems: "center",
		justifyContent: "flex-start",
	},
	image: {
		width: 100,
		height: 100,
	},
	button: {
		width: "80%",
		elevation: 10,
		backgroundColor: colors.color_5,
		justifyContent: "center",
		alignItems: "center",
		padding: 8,
	},
	text: {
		fontFamily: "InterRegular",
		fontSize: 18,
		color: "white",
	},
});
