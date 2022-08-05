import React from 'react';
import {PosterPreview} from "../PosterPreview";
import {StarsRating} from "../StarsRating ";

function MoviesListCard({value}) {

    const posterLink = value.poster_path

    return (

        <div className={'MoviesListCard'}>
            <img src={'https://image.tmdb.org/t/p/w500' + posterLink}/>
            <h3 className={'MoviesListCardTitle'}>{value.title}</h3>
            <div className={'MoviesListCardStar'}>{value.vote_average}</div>
            <StarsRating/>
        </div>
    );
}

export {MoviesListCard};