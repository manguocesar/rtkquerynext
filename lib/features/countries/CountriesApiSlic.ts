import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Country {
  name: {
    common: string;
  };
  flags: string;
  id: string;
}



export const countriesApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/all" }),
  reducerPath: "countriesApi",
  tagTypes: ["countries"],
  endpoints: (build) => ({
    // Supply generics for the return type (in this case `QuotesApiResponse`)
    // and the expected query argument. If there is no argument, use `void`
    // for the argument type instead.
    getCountries: build.query<Country[], number>({
      query: (limit = 10) => ``,
      // `providesTags` determines which 'tag' is attached to the
      // cached data returned by the query.
      // providesTags: (result, error, id) => [{ type: "Quotes", id }],
    }),
  }),
});

export const { useGetCountriesQuery } = countriesApiSlice;
