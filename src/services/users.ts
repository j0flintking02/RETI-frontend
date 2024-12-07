import {createApi, fetchBaseQuery, BaseQueryFn, FetchArgs} from "@reduxjs/toolkit/query/react"
import {customError, LoginResponseType, ProfileResponseType} from "./types.ts";
import {getHeaders} from "../utils.ts";

interface User {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    dateOfBirth?: string;
    role?: string;
    aboutMe?: string;
    profilePicture?: string;
}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery(

        {
            baseUrl: `${import.meta.env.VITE_BASE_URL}/v1/`
        }
    ) as BaseQueryFn<string | FetchArgs, unknown, customError>,
    tagTypes: ['Users'],
    endpoints: ({mutation, query}) => ({
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
        register: mutation<LoginResponseType, User>({
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
        getUserProfile: query<ProfileResponseType, string>({
            query: (user_id) => ({
                url: `/profiles/${user_id}`,
                method: "GET",
                headers: getHeaders(),
            }),
        }),
        updateProfile: mutation<LoginResponseType, { data:User; user_id: string }>({
            query: ({data, user_id}) => ({
                url: `profiles/${user_id}`,
                method: 'POST',
                body: data,
                headers: getHeaders(),
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
    useGoogleAuthMutation,
    useUpdateProfileMutation,
    useGetUserProfileQuery
} = userApi