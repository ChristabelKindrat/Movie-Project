import {Genre} from "../../components/Genre";
import {Link, Outlet, Route, Routes, useParams} from "react-router-dom";
import {MoviesList} from "../../components/MoviesList";
import {Header} from "../../components/Header";


function MoviePage() {

    return (
        <div>
            <div className={'Header'}>
                <Header/>
            </div>
            <div>
               <Genre key={'index'}/>
            </div>
            <div>
               <MoviesList/>
            </div>
        </div>
    );
};


export {MoviePage};