import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeader = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "e5067dc6bamsh8d2b7c842fd530dp103b7ejsn4542ff994181",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};
const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeader });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
