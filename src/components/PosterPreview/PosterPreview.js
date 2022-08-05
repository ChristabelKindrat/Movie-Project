import React, {useEffect} from 'react';

function PosterPreview({state}) {

    const backdropLink = state.backdrop_path
    const posterLink = state.poster_path

    return (
        <div>
            {<img src={'https://image.tmdb.org/t/p/w500' + backdropLink}/>}
            {<img src={'https://image.tmdb.org/t/p/w500' + posterLink}/>}
        </div>
    );
}

export {PosterPreview};