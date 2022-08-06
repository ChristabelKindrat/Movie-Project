import React from 'react';


function MoviesListCard({value}) {

    const posterLink = value.poster_path

    return (

        <div className={'MoviesListCard'}>
            <img className={'MoviesListCardImg'} src={'https://image.tmdb.org/t/p/w500' + posterLink}/>
            <div className={'MovieCardText'}>
                <h3 className={'MoviesListCardTitle'}>{value.title}</h3>
                <div className={'MovieCardRating'}>
                    <i className="fa-solid fa-thumbs-up"></i>
                    <div className={'MoviesListCardStar'}>{value.vote_average}</div>
                </div>
            </div>

        </div>);
}

export {MoviesListCard};