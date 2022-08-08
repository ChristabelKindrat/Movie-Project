import {MoviesList} from "../../components/MoviesList";
import {Header} from "../../components/Header";
import {Genre} from "../../components/Genre";

import React from "react";
import {Outlet} from "react-router-dom";


function MoviesPage() {


    return (
        <div>

            <div className={'Header'}>
                <Header/>
            </div>

            <h2 className={'GenreText'}>All genres</h2>

            <Genre/>

            <Outlet/>

        </div>
    );
};

export {MoviesPage};