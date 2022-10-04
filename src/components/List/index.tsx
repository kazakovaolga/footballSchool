//scss
import "./index.scss";
//react
import React, { FC } from "react";
import {Link} from "react-router-dom";

export const List: FC = function () {      
    return (
        <>
            <ul className="navigation__list">
                <li className="navigation__list-element">
                    <Link to="/">Главная</Link>
                </li>
                <li className="navigation__list-element">
                    <Link to="/studentsList">Наши ученики</Link>
                </li>
                <li className="navigation__list-element">
                    <Link to="/feedBack">Запись на пробное занятие</Link>
                </li>
                <li className="navigation__list-element">
                    <Link to="/photo">Наши фото</Link>
                </li>
            </ul>
        </>
    );
};