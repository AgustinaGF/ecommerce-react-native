import { createSlice } from "@reduxjs/toolkit";
import allProducts from "../../data/products.json";
import allCategories from "../../data/categories.json";

export const shopSlice = createSlice({
	name: "shop",
	initialState: {
		value: {
			products: allProducts,
			categories: allCategories,
			categorySeleted: "",
			productIdSeleted: null,
			productsFilteredByCategory: [],
		},
	},
	reducers: {
		setCategorySeleted: (state, action) => {
			const categorySeleted = action.payload;
			const productsFiltered = allProducts.filter(
				(product) => product.category === categorySeleted
			);
			state.value.categorySeleted = categorySeleted;
			state.value.productsFilteredByCategory = productsFiltered;
		},
		setProductIdSeleted: (state, action) => {
			state.value.productIdSeleted = action.payload;
		},
	},
});

export const { setCategorySeleted, setProductIdSeleted } = shopSlice.actions;

export default shopSlice.reducer;
