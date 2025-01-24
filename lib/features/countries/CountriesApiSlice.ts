import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// interface Quote {
//   id: number;
//   quote: string;
//   author: string;
// }

// interface QuotesApiResponse {
//   quotes: Quote[];
//   total: number;
//   skip: number;
//   limit: number;
// }

export const countriesApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/all" }),
  reducerPath: "countriesApi",
  tagTypes: ["countries"],
  endpoints: (build) => ({
    // Supply generics for the return type (in this case `QuotesApiResponse`)
    // and the expected query argument. If there is no argument, use `void`
    // for the argument type instead.
    getCountries: build.query<any, number>({
      query: (limit = 10) => ``,
      // `providesTags` determines which 'tag' is attached to the
      // cached data returned by the query.
      // providesTags: (result, error, id) => [{ type: "Quotes", id }],
    }),
  }),
});

export const { useGetCountriesQuery } = countriesApiSlice;
