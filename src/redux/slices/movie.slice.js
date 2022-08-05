import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getMovies} from "../../services";

const initialState = {
    movies: [],
    errors: null
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (payload, {rejectWithValue}) => {
        try {
            const response = await getMovies(payload)
            return response
        } catch (e) {
            return rejectWithValue(e.response)
        }
    }

    // Axios Service
    // async () => {
    //     try {
    //         const {data} = await movieService.getMovies();
    //         return data
    //     }catch (e) {
    //         return rejectWithValue(e.response.data)
    //     }
    // }
);


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null
                state.movies = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
            })
});

const {reducer: movieReducer} = movieSlice

const movieActions = {
    getAll
};

export {
    movieReducer,
    movieActions
};