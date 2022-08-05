import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {genreActions} from "../../redux";
import {Link} from "react-router-dom";



function Genre() {
    const {genre} = useSelector(state => state.genre);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, []);

    return (

        <div className={'GenreWrap'}>

            {genre?.genres && genre.genres.map(value =>
                <Link  className={'GenreLink'} to={value.id.toString()}>
                    <div key={value.id} className={'GenreDiv'}>{value.name}</div>
                </Link>
            )}
        </div>
    );
}

export {Genre};