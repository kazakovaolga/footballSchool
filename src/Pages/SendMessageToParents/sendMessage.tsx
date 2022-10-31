//scss
import "./index.scss";
//react
import React, { FC } from "react";
//assets
import logo from "../../../assets/emblem.jpg";
//components
import { Header } from "../../components/Header";
import { Emblem } from "../../components/Emblem";
import { List4Trainer } from "../../components/List4Trainer";
import { Navigation } from "../../components/Navigation";
import { SendForm } from "../../components/SendForm/sendForm";

export const SendMessage: FC = function () {
    return (
        <>            
            <Header className="header" level={1} text="Детская Академия Футбола" />
            <Emblem src={logo} className='emblem' />
            <Navigation><List4Trainer /></Navigation>
            <Header className="header" level={3} text="Введите данные" />     
            <SendForm />              
        </>
    );
};