import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getGenres} from "../../services";


const initialState = {
    genre: [],
    errors: null
};

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const response = await getGenres()
            return response
        } catch (e) {
            return rejectWithValue(e.response)
        }
    }
);


const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null
                state.genre = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
            })
});

const {reducer: genreReducer} = genreSlice;

const genreActions = {
    getAll
};

export {
    genreActions,
    genreReducer
};

