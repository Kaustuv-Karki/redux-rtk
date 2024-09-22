import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    // Get All products
    getAllProducts: builder.query({
      query: () => `products`,
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
