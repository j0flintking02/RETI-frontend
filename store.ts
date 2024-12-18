import {configureStore} from '@reduxjs/toolkit'

import {userApi} from './src/services/users.ts'
import {opportunityApi} from './src/services/opportunities.ts'

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [opportunityApi.reducerPath]: opportunityApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            userApi.middleware,
            opportunityApi.middleware,
        ),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
