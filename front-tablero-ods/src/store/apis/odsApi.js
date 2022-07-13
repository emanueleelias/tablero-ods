import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const odsApi = createApi({
    
    reducerPath: 'odss',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005/api'
    }),

    endpoints: (builder) => ({
        getOds: builder.query({
            query: () => "/ods?size=17"
        }),
        
        getOdsById: builder.query({
            query: (id) => `/ods/${id}`
        }),
    })
})

//useSetOdsMutation si se tratara de un post, put o delete...

export const { useGetOdsQuery, useGetOdsByIdQuery } = odsApi;