import React from 'react';


function UserInfo() {
    return (
        <div className={'UserInfoWrap'}>
            <div className={'UserInfoAbout'}>
                <p className={'UserInfoName'}>Name Surname</p>
                <p className={'UserInfoGmail'}>useradress@gmail.com</p>
            </div>
            <img className={'UserInfoImg'} src={'https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg'}/>
        </div>
    );
}

export {UserInfo};