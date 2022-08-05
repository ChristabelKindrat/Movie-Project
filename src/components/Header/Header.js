import React from 'react';
import {UserInfo} from "../UserInfo";

function Header() {
    return (
        <div>
            <div className={'HeaderWrap'}>
                <UserInfo/>
            </div>

        </div>
    );
}

export {Header};