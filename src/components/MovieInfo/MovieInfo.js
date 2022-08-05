import React from 'react';

function MovieInfo({state}) {
    const posterLink = state.poster_path
    return (
        <div className={'MovieInfoWrap'}>
            <div>
                {<img className={'Poster'} src={'https://image.tmdb.org/t/p/w500' + posterLink}/>}
            </div>
            <div className={'MovieInfoInfo'}>
                <h2 className={'MovieInfoTitle'}>{state.original_title}</h2>
                <p className={'MovieInfoOverview'}> {state.overview}</p>
                <div className={'MIDivOverview'}>
                    <i className="fa-solid fa-eye"></i>
                    <p className={'MovieInfoEye'}> {state.vote_count}</p>
                    <p className={'MovieInfoP'}>|</p>
                    <i className="fa-solid fa-thumbs-up"></i>
                    <p className={'MovieInfoAverage'}> {state.vote_average}</p>
                </div>
                <p className={'MoviesDivDetails'}>Details</p>
                <p className={'MovieInfoData'}>Release Date: {state.release_date}</p>
                <p className={'MovieInfoLanguage'}>Original Language: {state.original_language}</p>

            </div>
        </div>
    );
}

export {MovieInfo};