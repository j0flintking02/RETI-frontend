import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs } from "@reduxjs/toolkit/query/react";
import { customError, InspirationsResponseType } from "./types.ts";
import { getHeaders } from "../utils.ts";

export const inspirationApi = createApi({
    reducerPath: 'inspirationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}/v1/`
    }) as BaseQueryFn<string | FetchArgs, unknown, customError>,
    tagTypes: ['Inspirations'],
    endpoints: ({ mutation, query }) => ({
        getInspirations: query<InspirationsResponseType, void>({
            query: () => ({
                url: 'inspirations',
                method: 'GET',
                headers: getHeaders(),
            }),
        }),
        addInspirations: mutation<InspirationsResponseType, void>({
            query: () => ({
                url: 'inspirations',
                method: 'POST',
                headers: getHeaders(),
            }),
        })
    }),
});

export const {
    useGetInspirationsQuery,
    useAddInspirationsMutation
} = inspirationApi;
