import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import { useSignUpMutation } from "../services/authServices";
import SubmitButton from "../components/SubmitButton";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";

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
		<View>
			<Text>Register</Text>
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
		</View>
	);
};

export default Signup;

const styles = StyleSheet.create({});
