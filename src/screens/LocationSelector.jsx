import {
	StyleSheet,
	Text,
	View,
	Pressable,
	ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../global/color";
import * as Location from "expo-location";
import MapPreview from "../components/MapPreview";
import { googleApi } from "../firebase/googleApi";
import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "../features/auth/authSlice";
import { usePostUserLocationMutation } from "../services/shopServices";

const LocationSelector = () => {
	const [location, setLocation] = useState({ latitude: "", longitude: "" });
	const [error, setError] = useState("");
	const [address, setAddres] = useState(null);
	const { localId } = useSelector((state) => state.authReducer.value);
	const [triggerPostAddress, result] = usePostUserLocationMutation();

	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setError("Permission to access location was denied");
				return;
			}
			let location = await Location.getCurrentPositionAsync();
			console.log(location, "location");
			setLocation({
				latitude: location.coords.latitude,
				longitude: location.coords.longitude,
			});
		})();
	}, []);

	useEffect(() => {
		(async () => {
			try {
				if (location.latitude) {
					const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=${googleApi.mapStatic}`;
					const response = await fetch(url_reverse_geocode);
					const data = await response.json();
					setAddres(data.results[0].formatted_address);
				}
			} catch (err) {}
		})();
	}, [location]);

	const onConfirmAddress = () => {
		console.log(address, localId, location);
		const locationFormatted = {
			latitude: location.latitude,
			longitude: location.longitude,
			address: address,
		};
		dispatch(setUserLocation(locationFormatted));

		triggerPostAddress({ localId, location: locationFormatted });
	};
	return (
		<View style={styles.container}>
			<Text>My Adresses</Text>

			{location.latitude ? (
				<View style={styles.noLocationContainer}>
					<Text>
						Lat: {location.latitude}, Long:{location.longitude}
					</Text>
					<MapPreview location={location} />
					<Text>{address}</Text>
					<Pressable style={styles.button} onPress={onConfirmAddress}>
						<Text style={styles.text}>Confirm Address</Text>
					</Pressable>
				</View>
			) : (
				<Text>{error}</Text>
			)}
		</View>
	);
};

export default LocationSelector;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		gap: 20,
		paddingBottom: 130,
		paddingTop: 40,
	},
	noLocationContainer: {
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
	},
	address: {
		padding: 10,
		fontFamily: "InterRegular",
		fontSize: 16,
	},
	button: {
		width: "80%",
		elevation: 10,
		backgroundColor: colors.color_3,
		justifyContent: "center",
		alignItems: "center",
		padding: 15,
	},
	text: {
		fontFamily: "InterRegular",
		fontSize: 18,
		color: "white",
	},
});
