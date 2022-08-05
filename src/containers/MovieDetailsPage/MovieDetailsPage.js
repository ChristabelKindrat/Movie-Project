import React from 'react';
import {MovieInfo} from "../../components/MovieInfo";
import {PosterPreview} from "../../components/PosterPreview";
import {useLocation} from "react-router-dom";

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
