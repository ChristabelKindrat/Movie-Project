import React from 'react';
import {UserInfo} from "../UserInfo";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className={'HeaderWrapAll'}>

            <img  className={'HeaderImage'} src={'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg'}/>

            <NavLink className={"MovieLink"} to={'/AllMovie'}>
                <div className={'MainPage'}>Movie Main</div>
            </NavLink>


            <div className={'HeaderWrap'}>
                <UserInfo/>
            </div>

        </div>
    );
}

export {Header};