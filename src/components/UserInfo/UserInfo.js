import React from 'react';


function UserInfo() {
    return (
        <div className={'UserInfoWrap'}>
            <img className={'UserInfoImg'} src={'https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg'}/>
            <div className={'UserInfoAbout'}>
                <p>Name Surname</p>
                <p>adress@gmail.com</p>
            </div>
        </div>
    );
}

export {UserInfo};