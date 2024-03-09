import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import { useSignUpMutation } from "../services/authServices";
import SubmitButton from "../components/SubmitButton";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";
import { colors } from "../global/color";
import { Link } from "@react-navigation/native";

// 1.16

const Signup = () => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState("");
	const [errorEmail, setErrorEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorPassword, setErrorPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
	const [triggerSignup, result] = useSignUpMutation();

	const onSubmit = () => {
		try {
			const validation = signupSchema.validateSync({
				email,
				password,
				confirmPassword,
			});
			triggerSignup({ email, password });
		} catch (err) {
			console.log("Catch error", err);
			switch (err.path) {
				case "email":
					setErrorEmail(err.message);
					break;
				case "password":
					setErrorPassword(err.message);
					break;
				case "confirmPassword":
					setErrorConfirmPassword(err.message);
					break;
				default:
					break;
			}
		}
	};

	useEffect(() => {
		if (result.data) {
			dispatch(setUser(result));
		}
	}, [result]);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>SignUp</Text>
			<InputForm label={"Email"} error={errorEmail} onChange={setEmail} />
			<InputForm
				label={"Password"}
				error={errorPassword}
				onChange={setPassword}
				isSecure={true}
			/>
			<InputForm
				label={"Confirm password"}
				error={errorConfirmPassword}
				onChange={setConfirmPassword}
			/>
			<SubmitButton title={"Register"} onPress={onSubmit} />
			<Text style={styles.account}>Already have an account? </Text>
			<Pressable onPress={() => navigation.navigate("Login")}>
				<Text style={styles.login}>Login</Text>
			</Pressable>
		</View>
	);
};

export default Signup;

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
	login: {
		padding: 10,
		fontFamily: "InterBold",
		fontSize: 20,
		color: colors.color_3,
	},
});
