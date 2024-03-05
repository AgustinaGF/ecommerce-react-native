import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cartReducer from "../features/shop/cartSlice";
import shopReducer from "../features/shop/shopSlice";
import { shopApi } from "../services/shopServices";
import { setupListeners } from "@reduxjs/toolkit/query";

export default configureStore({
	reducer: {
		counterReducer,
		shopReducer,
		cartReducer,
		[shopApi.reducerPath]: shopApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(shopApi.middleware),
});

setupListeners(configureStore.dispatch);
