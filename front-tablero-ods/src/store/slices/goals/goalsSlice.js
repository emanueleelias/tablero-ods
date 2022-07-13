import { createSlice } from '@reduxjs/toolkit';

export const goalSlice = createSlice({
    name: 'goal',
    initialState: {
        isLoading: false,
        totalItems: 0,
        totalPages: 0,
        page: 0,
        editStatus: false,
        goals: []
    },
    reducers: {
        startLoadingGoal: (state) => {
            state.isLoading = true;
        },
        setGoals: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.totalItems = action.payload.totalItems;
            state.totalPages = action.payload.totalPages;
            state.goals = action.payload.goals;
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingGoal, setGoals } = goalSlice.actions;