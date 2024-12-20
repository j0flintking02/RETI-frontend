import {configureStore} from '@reduxjs/toolkit'

import {userApi} from './src/services/users.ts'
import {opportunityApi} from './src/services/opportunities.ts'
import {notificationApi} from './src/services/notifications.ts'
import { conversationApi } from './src/services/conversations.ts'
import { inspirationApi } from './src/services/inspirations.ts'
import { productApi } from './src/services/products.ts'

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [opportunityApi.reducerPath]: opportunityApi.reducer,
        [notificationApi.reducerPath]: notificationApi.reducer,
        [conversationApi.reducerPath]: conversationApi.reducer,
        [inspirationApi.reducerPath]: inspirationApi.reducer,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            userApi.middleware,
            opportunityApi.middleware,
            notificationApi.middleware,
            conversationApi.middleware,
            inspirationApi.middleware,
            productApi.middleware,
        ),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
