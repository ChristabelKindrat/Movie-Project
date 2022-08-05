import React from "react";

function PosterPreview({state}) {

    const backdropLink = state.backdrop_path


    return (
        <div>
            <div className={'posterPage'}>

                <h1 className={'PosterWatch'}>Watch</h1>
                <div className={'Poster'}>
                    {<img className={'PosterBackdrop'} src={'https://image.tmdb.org/t/p/w500' + backdropLink}/>}
                </div>
            </div>
            <div className={'PosterInfo'}>
                <h3 className={'Title'}>{state.title}</h3>
                <div className={'IMDb'}>IMDb {state.vote_average}</div>
                <div className={'WatchLaterWrap'}>
                    <i className="fa-solid fa-heart-circle-plus"></i>
                    <div className={'WatchLater'}>Watch Later</div>

                </div>
            </div>

        </div>
    );
}

export {PosterPreview};