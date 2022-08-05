import React from 'react';
import {useNavigate, useParams} from "react-router-dom";


function GenreMoviesPage() {

    const {id} = useParams();
    console.log(id)



    return (
        <div>
Hello G
        </div>
    );
}

export {GenreMoviesPage};