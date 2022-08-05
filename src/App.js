import './App.css';
import {Routes, Route} from "react-router-dom";

import {MoviesList} from "./components/MoviesList";
import {MovieDetailsPage} from "./containers/MovieDetailsPage";
import {NotFoundPage} from "./containers/NotFoundPage";
import {MoviesPage} from "./containers/MoviesPage ";

function App() {


    return (

        <div className="App">

            <Routes>
                <Route path={'/'} element={<MoviesPage/>}>
                    <Route path={':id'} element={<MoviesList/>}/>
                </Route>
                <Route path={'title'} element={<MovieDetailsPage/>}/>
                <Route path={'/movie'} element={<MovieDetailsPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>

        </div>
    );
}

export {App};
