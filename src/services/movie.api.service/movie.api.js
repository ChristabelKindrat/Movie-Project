let baseUrl = 'https://api.themoviedb.org/3';

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjRiZDQzYjMzZDAzMGE5NWU5NzRlN2MxMWNlYjY0NyIsInN1YiI6IjYyZTc3ZDJkNjljNzBmMDA2MTcyZGIxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yQCWb3QTNDwz06fyw0w2ReNvQG8hym1VdfPOnovymXI");

const getMovies = (page) => fetch(baseUrl + "/discover/movie?page=" + page, {method: 'GET', headers: myHeaders})
    .then(value => value.json())

export {
    getMovies

};

