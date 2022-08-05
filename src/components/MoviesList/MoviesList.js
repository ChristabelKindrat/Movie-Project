import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import {MovieDetailsPage} from "../../containers/MoviesPage ";
import {MoviesListCard} from "../MoviesListCard ";
import {Link, Outlet, useParams} from "react-router-dom";


function MoviesList() {

    const {id}=useParams();


    const {movies} = useSelector(state => state.movies);

    const [page, setPage] = useState(1);


    const incPage = () => {
        setPage(page + 1)
    };
    const decPage = () => {
        setPage(page - 1)
    };

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(movieActions.getAll(page))
    }, [page]);


    return (
        <div>
            <Outlet/>
            <div className={'MoviesListCardWrap'}>

                {movies?.results && movies.results.map(movies =>

                    <Link to={'/movie'} state={movies}>
                        <MoviesListCard key={movies.id} value={movies}/>
                    </Link>)}

            </div>

            <button onClick={decPage}>{'previous page'}</button>

            <button onClick={incPage}>{'next page'}</button>

        </div>
    );
}

export {MoviesList};