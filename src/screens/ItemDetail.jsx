import {
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
	ScrollView,
	ActivityIndicator,
	Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../global/color";
import { useDispatch } from "react-redux";
import { addItem } from "../features/shop/cartSlice";
import { useGetProductsQuery } from "../services/shopServices";
import Counter from "../components/Counter";

const ItemDetail = ({ navigation, route }) => {
	const [product, setProduct] = useState(null);
	const [quantity, setQuantity] = useState(0);
	const { id } = route.params;

	const dispatch = useDispatch();

	const onAddCart = () => {
		dispatch(addItem({ ...product, quantity: quantity }));
		Alert.alert(
			"Item has been added to the cart",
			"Item has been added to the cart"[
				{
					text: "OK",
				}
			]
		);
	};

	const { data: allProducts, isLoading, error } = useGetProductsQuery();

	useEffect(() => {
		const productFinded = allProducts.find((product) => product.id === id);
		setProduct(productFinded);
	}, [id]);

	return (
		<>
			{!isLoading && product ? (
				<View style={styles.container}>
					<ScrollView>
						<Image
							source={{ uri: product.images[0] }}
							style={styles.image}
							resizeMode="cover"
						/>
						<View style={styles.textContainer}>
							<Text style={styles.title}>{product.title}</Text>
							<Text style={styles.descriptionText}>{product.description}</Text>
							<Text style={styles.descriptionTextPrice}>${product.price}</Text>
							<Counter stock={product.stock} onChangeQuantity={setQuantity} />
							<Pressable
								style={[quantity > 0 ? styles.buy : styles.disabledButton]}
								onPress={onAddCart}
								disabled={quantity === 0}
							>
								<Text style={styles.buyText}>Add to cart</Text>
							</Pressable>
						</View>
					</ScrollView>
				</View>
			) : (
				<View
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				>
					<ActivityIndicator size={"large"} />
				</View>
			)}
		</>
	);
};

export default ItemDetail;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: colors.color_2,
	},
	image: {
		width: "100%",
		height: 300,
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
	disabledButton: {
		opacity: 0.9,
		borderRadius: 6,
		borderWidth: 1,
		padding: 10,
	},
});
