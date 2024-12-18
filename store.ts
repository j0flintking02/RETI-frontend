import {configureStore} from '@reduxjs/toolkit'

import {userApi} from './src/services/users.ts'
import {opportunityApi} from './src/services/opportunities.ts'
import {notificationApi} from './src/services/notifications.ts'

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [opportunityApi.reducerPath]: opportunityApi.reducer,
        [notificationApi.reducerPath]: notificationApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            userApi.middleware,
            opportunityApi.middleware,
            notificationApi.middleware,
        ),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
