import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
	name: "shop",
	initialState: {
		value: {
			products: [],
			categories: [],
			categorySelected: "",
			productIdSelected: null,
			productsFilteredByCategory: [],
		},
	},
	reducers: {
		setCategorySelected: (state, action) => {
			const { categorySelected, allProducts } = action.payload;
			const productsFiltered = allProducts.filter(
				(product) => product.category === categorySelected
			);
			state.value.categorySelected = categorySelected;
			state.value.products = allProducts;
			state.value.productsFilteredByCategory = productsFiltered;
		},
		setProductIdSelected: (state, action) => {
			state.value.productIdSelected = action.payload;
		},
	},
});

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions;

export default shopSlice.reducer;
