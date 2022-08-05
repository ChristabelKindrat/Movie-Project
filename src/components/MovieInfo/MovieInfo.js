import React from 'react';

function MovieInfo({state}) {

    return (
        <div>
            <p>Original Title: {state.original_title}</p>
            <p>Overview: {state.overview}</p>
            <p>Realise date: {state.release_date}</p>
            <p>Language: {state.original_language}</p>
            <p>Average: {state.vote_average}</p>
        </div>
    );
}

export {MovieInfo};