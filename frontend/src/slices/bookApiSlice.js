import { apiSlice } from "./apiSlice";

const bookApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getBooks: builder.query({
      query: () => ({
        url: "/books",
        provideTags: ["Books"],
      }),
    }),
    addBook: builder.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      
      }),
       invalidatesTags: ["Books"],
    }),
    getBookById: builder.query({
      query: (id) => `/books/${id}`,
    }),

    updatBook : builder.mutation({
      query : (id, ...bookData)=>({
        
        url : `/books/${id}`,
        method :'PUT',
        body : bookData,
      }),
       invalidatesTags: ["Books"],

    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation
} = bookApiSlice;
