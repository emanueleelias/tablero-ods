import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './apis/auth';
// import { authSlice } from './slices/auth/authSlice';
// import { goalApi } from './apis/goalApi';
// import { odsApi } from './apis/odsApi';
// import { authSlice } from './slices/auth/authSlice';



export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
});


// export const store = configureStore({
//   reducer: {
//     [odsApi.reducerPath]: odsApi.reducer,
//     [goalApi.reducerPath]: goalApi.reducer,
//     [authApi.reducerPath]: authApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware()
//     .concat( odsApi.middleware )
//     .concat( goalApi.middleware )
//     .concat( authApi.middleware )
// })

