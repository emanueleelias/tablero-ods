import { createSlice } from '@reduxjs/toolkit';

export const indicatorSlice = createSlice({
    name: 'indicator',
    initialState: {
        isLoading: false,
        totalItems: 0,
        totalPages: 0,
        page: 0,
        indicators: [],
        editStatus: false
    },
    reducers: {
        startLoadingIndicator: (state) => {
            state.isLoading = true;
        },
        setIndicators: (state, action) => {
            state.isLoading = false,
            state.totalItems = action.payload.totalItems;
            state.totalPages = action.payload.totalPages;
            state.page = action.payload.page;
            state.indicators = action.payload.indicators;
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingIndicator, setIndicators } = indicatorSlice.actions;