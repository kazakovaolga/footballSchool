//scss
import "./index.scss";
//react
import React, { FC } from "react";
import {Link} from "react-router-dom";

export const List4Trainer: FC = function () {    
    const className="navigation__list-element";
    return (
        <>
            <ul className="navigation__list">
                <li className={className}>
                    <Link to="/">Главная</Link>
                </li>
                <li className={className}>
                    <Link to="/studentsListControl">Управление списком учеников</Link>
                </li>
                <li className={className}>
                    <Link to="/messageToParents">Отправить сообщение родителям</Link>
                </li>
            </ul>
        </>
    );
};