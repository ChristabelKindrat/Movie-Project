import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import {Link, useParams} from "react-router-dom";

import {MoviesListCard} from "../MoviesListCard ";


function MoviesList() {

    const {id} = useParams();

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
        dispatch(movieActions.getAll(({page, id})
        ))
    }, [page, id]);


    return (
        <div>

            <h2 className={'MovieListText'}>Movie List</h2>

            <div className={'MoviesListCardWrap'}>

                {movies?.results && movies.results.map(movies =>
                    <Link to={'/movie'} state={movies}>
                        <MoviesListCard key={movies.id} value={movies}/>
                    </Link>
                )}
            </div>

            <button onClick={decPage}>{'<<'}</button>

            <button onClick={incPage}>{'>>'}</button>

        </div>
    );
}

export {MoviesList};