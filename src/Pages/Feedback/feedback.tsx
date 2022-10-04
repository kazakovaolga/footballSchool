//scss
import "./index.scss";
//react
import React, { FC } from "react";
//assets
import logo from "../../../assets/emblem.jpg";
//components
import { Header } from "../../components/Header";
import { Emblem } from "../../components/Emblem";
import { List } from "../../components/List";
import { Navigation } from "../../components/Navigation";
import { EmailForm } from "../../components/EmailForm/emailForm";

export const FeedBack: FC = function () {
    return (
        <>            
            <Header className="header" level={1} text="Детская Академия Футбола" />
            <Emblem src={logo} className='emblem' />
            <Navigation><List /></Navigation>
            <Header className="header" level={3} text="Введите данные" />     
            <EmailForm />              
        </>
    );
};