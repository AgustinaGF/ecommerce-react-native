import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../data/products.json";
import { colors } from "../global/color";
import Counter from "../components/Counter";
import { useDispatch } from "react-redux";
import { addItem } from "../features/shop/cartSlice";

const ItemDetail = ({ navigation, route }) => {
	const [product, setProduct] = useState(null);
	const { id } = route.params;

	const dispatch = useDispatch();

	const onAddCart = () => {
		dispatch(addItem({ ...product, quantity: 1 }));
	};

	useEffect(() => {
		const productFinded = allProducts.find((product) => product.id === id);
		setProduct(productFinded);
	}, [id]);

	return product ? (
		<View style={styles.main}>
			<View style={styles.container}>
				<Image
					source={{ uri: product.images[0] }}
					style={styles.image}
					resizeMode="cover"
				/>
				<View style={styles.textContainer}>
					<Text style={styles.title}>{product.title}</Text>
					<Text style={styles.descriptionText}>{product.description}</Text>
					<Text style={styles.descriptionTextPrice}>${product.price}</Text>

					<View style={styles.buttonContainer}>
						<Counter />
						<View>
							<Pressable style={styles.buy} onPress={onAddCart}>
								<Text style={styles.buyText}>Buy now</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</View>
		</View>
	) : (
		<View>
			<Text>Cargando..</Text>
		</View>
	);
};

export default ItemDetail;

const styles = StyleSheet.create({
	main: {
		flex: 1,
		width: "100%",
	},
	container: {
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		height: "100%",
		backgroundColor: colors.color_2,
	},
	image: {
		width: "100%",
		height: 400,
		marginVertical: 15,
	},
	title: {
		fontFamily: "InterBold",
		fontSize: 25,
		color: colors.color_1,
		paddingVertical: 4,
	},
	textContainer: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "flex-start",
		padding: 14,
	},
	descriptionText: {
		fontFamily: "InterRegular",
		fontSize: 16,
		color: colors.color_1,
		paddingVertical: 4,
	},
	descriptionTextPrice: {
		fontFamily: "InterBold",
		fontSize: 25,
		color: colors.color_1,
		paddingVertical: 6,
	},
	buttonContainer: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "flex-end",
		paddingTop: 15,
		paddingRight: 15,
	},
	buy: {
		padding: 10,
		borderRadius: 6,
		backgroundColor: colors.color_5,
	},
	buyText: {
		fontFamily: "InterBold",
		fontSize: 22,
		color: "white",
	},
});
