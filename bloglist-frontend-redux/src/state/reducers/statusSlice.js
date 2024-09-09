import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: '',
};

const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        clearStatus: (state) => {
            state.status = '';
        },
    },
});

export const { setStatus, clearStatus } = statusSlice.actions;

export default statusSlice.reducer;