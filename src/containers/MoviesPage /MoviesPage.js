import {MoviesList} from "../../components/MoviesList";
import {Header} from "../../components/Header";
import {Genre} from "../../components/Genre";
import React from "react";


function MoviesPage() {


    return (
        <div>

            <div className={'Header'}>
                <Header/>
            </div>

            <h2 className={'GenreText'}>All genres</h2>

            <Genre/>

            <MoviesList/>

        </div>
    );
};

export {MoviesPage};