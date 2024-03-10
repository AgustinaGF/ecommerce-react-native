import { base_url } from "../firebase/database";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
	reducerPath: "shopApi",
	baseQuery: fetchBaseQuery({ baseUrl: base_url }),
	endpoints: (builder) => ({
		// getProducts: builder.query({
		//     query: () => 'products.json'
		// }),
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
	useGetProductsByCategoryQuery,
	useGetCategoriesQuery,
	usePostOrderMutation,
	useGetProfileImageQuery,
	usePostProfileImageMutation,
	usePostUserLocationMutation,
} = shopApi;
