import { base_url } from "../firebase/database";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
	reducerPath: "shopApi",
	baseQuery: fetchBaseQuery({ baseUrl: base_url }),
	tagTypes: ["getOrders"],
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => "products.json",
		}),
		getProductsByCategory: builder.query({
			query: (category) =>
				`products.json?orderBy="category"&equalTo="${category}"`,
		}),
		getCategories: builder.query({
			query: () => "categories.json",
		}),
		postOrder: builder.mutation({
			query: ({ ...order }) => ({
				url: "orders.json",
				method: "POST",
				body: order,
			}),
			invalidatesTags: ["getOrders"],
		}),
		getOrders: builder.query({
			query: () => "orders.json",
			providesTags: ["getOrders"],
		}),
		getProfileImage: builder.query({
			query: (localId) => `profileImages/${localId}.json`,
		}),
		postProfileImage: builder.mutation({
			query: ({ localId, image }) => ({
				url: `profileImages/${localId}.json`,
				method: "PUT",
				body: {
					image: image,
				},
			}),
		}),
		getUserLocation: builder.query({
			query: (localId) => `location/${localId}.json`,
		}),
		postUserLocation: builder.mutation({
			query: ({ location, localId }) => ({
				url: `location/${localId}.json`,
				method: "PUT",
				body: {
					latitude: location.latitude,
					longitude: location.longitude,
					address: location.address,
				},
			}),
		}),
	}),
});

export const {
	useGetProductsQuery,
	useGetProductsByCategoryQuery,
	useGetCategoriesQuery,
	usePostOrderMutation,
	useGetOrdersQuery,
	useGetProfileImageQuery,
	usePostProfileImageMutation,
	useGetUserLocationQuery,
	usePostUserLocationMutation,
} = shopApi;
