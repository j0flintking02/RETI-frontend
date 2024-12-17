import {configureStore} from '@reduxjs/toolkit'

import {userApi} from './src/services/users.ts'
import {opportunityApi} from './src/services/opportunities.ts'
import {notificationApi} from './src/services/notifications.ts'
import { conversationApi } from './src/services/conversations.ts'

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [opportunityApi.reducerPath]: opportunityApi.reducer,
        [notificationApi.reducerPath]: notificationApi.reducer,
        [conversationApi.reducerPath]: conversationApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            userApi.middleware,
            opportunityApi.middleware,
            notificationApi.middleware,
            conversationApi.middleware,
        ),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
