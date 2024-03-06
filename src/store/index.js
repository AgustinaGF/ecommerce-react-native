import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cartReducer from "../features/shop/cartSlice";
import shopReducer from "../features/shop/shopSlice";
import authReducer from "../features/auth/authSlice";
import { shopApi } from "../services/shopServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authServices";

export default configureStore({
	reducer: {
		counterReducer,
		shopReducer,
		cartReducer,
		authReducer,
		[shopApi.reducerPath]: shopApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(shopApi.middleware)
			.concat(authApi.middleware),
});

setupListeners(configureStore.dispatch);
