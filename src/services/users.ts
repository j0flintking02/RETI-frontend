import {createApi, fetchBaseQuery, BaseQueryFn, FetchArgs} from "@reduxjs/toolkit/query/react"
import {customError, LoginResponseType} from "./types.ts";



export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery(

        {
            baseUrl: `${import.meta.env.VITE_BASE_URL}/v1/`
        }
    ) as BaseQueryFn<string | FetchArgs, unknown, customError>,
    tagTypes: ['Users'],
    endpoints: ({mutation}) => ({
        login: mutation<LoginResponseType, void>({
            query: (data) => ({
                url: 'auth/login',
                method: 'POST',
                body: data,
            }),
            transformResponse: (response) => response,
            transformErrorResponse: (
                response
            ) => response,
        }),
        register: mutation<LoginResponseType, void>({
            query: (data) => ({
                url: 'users',
                method: 'POST',
                body: data,
            }),
            transformResponse: (response) => response,
            transformErrorResponse: (
                response
            ) => response,
        }),
        googleAuth: mutation<LoginResponseType, void>({
            query: (data) => ({
                url: 'auth/login/google',
                method: 'POST',
                body: data,
            }),
            transformResponse: (response) => response,
            transformErrorResponse: (
                response
            ) => response,
        }),
    })
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useGoogleAuthMutation
} = userApi