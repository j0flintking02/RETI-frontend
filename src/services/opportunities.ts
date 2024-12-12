import {createApi, fetchBaseQuery, BaseQueryFn, FetchArgs} from "@reduxjs/toolkit/query/react"
import {customError, LoginResponseType, OpportunitiesType, ProfileResponseType} from "./types.ts";
import {getHeaders} from "../utils.ts";



export const opportunityApi = createApi({
    reducerPath: 'opportunityApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: `${import.meta.env.VITE_BASE_URL}/v1/`
        }
    ) as BaseQueryFn<string | FetchArgs, unknown, customError>,
    tagTypes: ['Opportunities'],
    endpoints: ({mutation, query}) => ({
        addOpportunity: mutation<LoginResponseType, User>({
            query: (data) => ({
                url: 'jobs',
                method: 'POST',
                headers: getHeaders(),
                body: data,
            }),
            transformResponse: (response) => response,
            transformErrorResponse: (
                response
            ) => response,
        }),
        getOpportunities: query<OpportunitiesType, void>({
            query: () => ({
                url: `jobs`,
                method: "GET",
                headers: getHeaders(),
            }),
        }),
        UpdateJob: query<ProfileResponseType, string>({
            query: (user_id) => ({
                url: `/profiles/${user_id}`,
                method: "GET",
                headers: getHeaders(),
            }),
        }),
    })
})

export const {
    useAddOpportunityMutation,
    useGetOpportunitiesQuery
} = opportunityApi