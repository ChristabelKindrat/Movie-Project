import './App.css';
import {Routes, Route} from "react-router-dom";

import {MoviesList} from "./components/MoviesList";
import {MovieDetailsPage} from "./containers";
import {NotFoundPage} from "./containers";
import {MoviesPage} from "./containers/MoviesPage ";

function App() {


    return (

        <div className="App">

            <Routes>
                <Route path={'/'} element={<MoviesPage/>}>
                    <Route index element={<MoviesList/>}/>
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
