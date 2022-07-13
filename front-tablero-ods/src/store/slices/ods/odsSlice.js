import { createSlice } from '@reduxjs/toolkit';

export const odsSlice = createSlice({
    name: 'ods',
    initialState: {
        ods:[],
        isLoading: false,
    },
    reducers: {
        startLoadingOds: (state) => {
            state.isLoading = true;
        },
        setOds: (state, action) => {
            state.ods = action.payload.ods;
            state.isLoading = false;
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingOds, setOds } = odsSlice.actions;