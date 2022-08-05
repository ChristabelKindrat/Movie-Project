import axios from "axios";

let baseUrl = 'https://api.themoviedb.org/3/discover/movie';

const axiosService = axios.create({
    baseURL: 'https://api.themoviedb.org/3/discover/movie',
    headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjRiZDQzYjMzZDAzMGE5NWU5NzRlN2MxMWNlYjY0NyIsInN1YiI6IjYyZTc3ZDJkNjljNzBmMDA2MTcyZGIxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yQCWb3QTNDwz06fyw0w2ReNvQG8hym1VdfPOnovymXI"}
});

const movieService = {
    getMovies: () => axiosService.get("")
}

export {movieService};