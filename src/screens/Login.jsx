import {
	StyleSheet,
	Text,
	View,
	Pressable,
	ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { colors } from "../global/color";
import { useLoginMutation } from "../services/authServices";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { loginSchema } from "../validations/loginSchema";

const Login = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [errorEmail, setErrorEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorPassword, setErrorPassword] = useState("");
	const [triggerSignin, result] = useLoginMutation();
	const [notLogger, setNotLogger] = useState("");

	const dispatch = useDispatch();

	useEffect(() => {
		if (result.data) {
			dispatch(setUser(result));
		}
		if (result.error) {
			if (result.error.data?.error.code == 400) {
				setNotLogger("incorrect username or password");
			}
		}
	}, [result]);

	const onSubmit = () => {
		setNotLogger("");
		try {
			loginSchema.validateSync({
				email,
				password,
			});
			triggerSignin({ email, password });
		} catch (err) {
			switch (err.path) {
				case "email":
					setErrorEmail(err.message);
					break;
				case "password":
					setErrorPassword(err.message);
					break;
				default:
					break;
			}
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Login</Text>
			<InputForm label={"Email"} error={errorEmail} onChange={setEmail} />
			<InputForm
				label={"Password"}
				error={errorPassword}
				onChange={setPassword}
				isSecure={true}
			/>
			{result.isLoading ? (
				<ActivityIndicator size="large" color="#0000ff" />
			) : (
				<SubmitButton title={"Login"} onPress={onSubmit} />
			)}
			{notLogger ? <Text style={styles.error}>{notLogger}</Text> : null}
			<Text style={styles.account}>You don't have an account? </Text>
			<Pressable onPress={() => navigation.navigate("Signup")}>
				<Text style={styles.signUp}>SignUp</Text>
			</Pressable>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 100,
		backgroundColor: colors.color_7,
		borderRadius: 10,
		marginLeft: 30,
		marginRight: 30,
		minHeight: 400,
		padding: 8,
	},
	text: {
		color: colors.color_1,
		fontFamily: "PacificoRegular",
		fontSize: 30,
		paddingBottom: 10,
	},
	account: {
		padding: 10,
		marginTop: 8,
		color: colors.color_1,
		fontFamily: "InterBold",
		fontSize: 16,
	},
	signUp: {
		padding: 10,
		fontFamily: "InterBold",
		fontSize: 20,
		color: colors.color_3,
	},
	error: {
		fontSize: 16,
		color: "red",
		fontFamily: "InterRegular",
		fontStyle: "italic",
		paddingTop: 6,
	},
});
