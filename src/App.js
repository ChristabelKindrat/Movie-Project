import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import {GenreMoviesPage, MoviePage, NotFoundPage} from "./containers/MoviesPage ";
import {MovieDetailsPage} from "./containers/MoviesPage ";
import {MoviesList} from "./components/MoviesList";

function App() {


    return (

        <div className="App">

            <Routes>
                <Route path={'/'} element={<MoviePage/>}>
                    <Route path={':id'} element={<MoviesList/>}/>
                </Route>
                <Route path={'title'} element={<MovieDetailsPage/>}/>
                <Route path={'/movie'} element={<MovieDetailsPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>

        </div>
    )
        ;
}

export {App};
