import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const goalApi = createApi({

    reducerPath: 'goalApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/'
    }),

    tagTypes: ["Goal"],

    endpoints: (builder) => ({

        getGoals: builder.query({
            query: () => '/goal',
            providesTags: ["Goal"]
        }),

        getGoal: builder.query({
            query: (id) => `/goal/${id}`
        }),

        addGoal: builder.mutation({
            query: (task) => ({
                url: '/goal',
                method: 'POST',
                body: task
            }),
            invalidatesTags: ["Goal"]
        }),

        updateGoal: builder.mutation({
             query: ({ id, ...rest }) => ({
                 url: `/goal/${id}`,
                 method: 'PUT',
                 body: rest
             }),
             invalidatesTags: ["Goal"]
        }),

        deleteGoal: builder.mutation({
            query: (id) => ({
                url: `/goal/id`,
                method: 'DELETE'
            }),
            invalidatesTags: ["Goal"]
        })
    })
});


export const { useGetGoalsQuery, useAddGoalMutation, useUpdateGoalMutation, useDeleteGoalMutation  } = goalApi;