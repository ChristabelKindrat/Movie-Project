import React from 'react';
import {MovieInfo} from "../../components/MovieInfo";
import {PosterPreview} from "../../components/PosterPreview";
import {useLocation} from "react-router-dom";

function MovieDetailsPage() {

    const {state}=useLocation();

    return (
        <div>

            <PosterPreview state={state}/>
            <h2>{state.title}</h2>
            <MovieInfo state={state}/>
        </div>
    );
}

export {MovieDetailsPage};
