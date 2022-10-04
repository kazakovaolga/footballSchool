//scss
import "./index.scss";
//react
import React, { FC } from "react";
import { Link } from "react-router-dom";
//components
import { SignUp } from "../../components/SignUp/signUp";

export const Register: FC = function () {
    return (
        <>
            <h1>Регистрация</h1>
            <SignUp/>
            <p className='accountExist'>
               Может быть у вас уже есть аккаунт? <Link to='/login'>Вход</Link>
            </p>
        </>
    );
};