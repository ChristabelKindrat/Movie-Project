import React from 'react';
import {useLocation} from "react-router-dom";

import {MovieInfo} from "../../components/MovieInfo";
import {PosterPreview} from "../../components/PosterPreview";

function MovieDetailsPage() {

    const {state} = useLocation();

    return (
        <div>
            <div className={'MDPoster'}>
                <PosterPreview state={state}/>
            </div>
            <MovieInfo state={state}/>
        </div>
    );
}

export {MovieDetailsPage};
