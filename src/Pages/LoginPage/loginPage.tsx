//scss
import "./index.scss";
//react
import React, { FC } from "react";
import { Link } from "react-router-dom";
//components
import { Login } from "../../components/Login/login";
import { Header } from "../../components/Header";

export const LoginPage: FC = function () {    
    return (
        <>
            <Header className='header' text='Войдите в личный кабинет' level={1}/>
            <Login/>
            <p className='registration'><Link to="/register">Регистрация</Link></p>            
        </>
    );
};