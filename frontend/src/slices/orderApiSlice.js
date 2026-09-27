import { apiSlice } from "./apiSlice";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    createOrder: builder.mutation({
      query: (order) => ({
        url: "/orders",
        method: "POST",
        body: order,
      }),
    }),

    getMyOrders: builder.query({
      query: () => "/orders/myorders",
    }),

    getOrderById: builder.query({
      query: (id) => `/orders/${id}`,
    }),

  }),
});

export const {
  useCreateOrderMutation,
  useGetMyOrdersQuery,
  useGetOrderByIdQuery,
} = orderApiSlice;