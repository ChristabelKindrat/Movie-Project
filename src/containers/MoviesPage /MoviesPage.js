
import {MoviesList} from "../../components/MoviesList";
import {Header} from "../../components/Header";
import {Genre} from "../../components/Genre";


function MoviesPage() {

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

export {MoviesPage};