import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSchema, UISchema } from '../types/UISchema';

const initialState: UISchema = {
    scroll: {},
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ position: number, path: string }>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: uiActions } = uiSlice;
export const { reducer: uiReducer } = uiSlice;
