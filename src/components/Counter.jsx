import { Pressable, StyleSheet, Text, View } from "react-native";
import { increment, decrement, reset } from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../global/color";
const Counter = ({ stock, onChangeQuantity }) => {
	const count = useSelector((state) => state.counterReducer.value);

	const dispatch = useDispatch();

	const handleDecrement = () => {
		if (count >= 1) {
			dispatch(decrement());
			onChangeQuantity(count - 1);
		}
	};

	const handleIncrement = () => {
		if (count < stock) {
			dispatch(increment());
			onChangeQuantity(count + 1);
		}
	};

	const handleReset = () => {
		dispatch(reset());
		onChangeQuantity(0);
	};

	return (
		<View style={styles.container}>
			<View style={styles.buttonsContainer}>
				<Pressable onPress={handleDecrement} style={styles.button}>
					<Text style={styles.buttonText}>-</Text>
				</Pressable>
				<Text>{count}</Text>
				<Pressable onPress={handleIncrement} style={styles.button}>
					<Text style={styles.buttonText}>+</Text>
				</Pressable>
				<Pressable onPress={handleReset} style={styles.button}>
					<AntDesign name="delete" size={24} color={colors.color_1} />
				</Pressable>
			</View>
		</View>
	);
};

export default Counter;

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		width: "100%",
		marginBottom: 10,
	},
	button: {
		padding: 10,
		backgroundColor: colors.color_4,
		marginLeft: 2,
		marginRight: 2,
	},
	buttonText: {
		fontSize: 18,
		fontFamily: "InterRegular",
		color: "white",
	},
});
