import React, {useState} from 'react';
import {useForm} from "react-hook-form";


function UserInfo() {

    const {register, handleSubmit} = useForm();


    return (
        <div className={'UserInfoWrap'}>
            <div className={'UserInfoAbout'}>

                <form className={'UserForm'} onSubmit={handleSubmit((obj)=>{
                    console.log(obj)
                //    !Push to API Server

                })}>

                    <input className={'UserInfoName'} type={"text"} placeholder={'Username'} {...register('username')} />
                    <input className={'UserInfoPassword'} type={'text'} placeholder={'Password'} {...register('password')}/>
                    <button>Register</button>
                </form>

            </div>
            <img className={'UserInfoImg'}
                 src={'https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg'}/>
        </div>
    );
}

export {UserInfo};