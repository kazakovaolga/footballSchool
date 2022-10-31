//react
import React, { FC } from "react";
//assets
import logo from "../../../assets/emblem.jpg";
import foto1 from "../../../assets/fotos/foto1.jpg";
import foto2 from "../../../assets/fotos/foto2.jpg";
import foto3 from "../../../assets/fotos/foto3.jpg";
import foto4 from "../../../assets/fotos/foto4.jpg";
//components
import { Header } from "../../components/Header";
import { Emblem } from "../../components/Emblem";
import { List } from "../../components/List";
import { Navigation } from "../../components/Navigation";
import { Slider } from "../../components/Slider/slider";

export const Photo: FC = function () {
    return (
        <>
            <Header className="header" level={1} text="Детская Академия Футбола" />
            <Emblem src={logo} className='emblem' />            
            <Navigation><List /></Navigation>
            <Slider foto1={foto1} foto2={foto2} foto3={foto3} foto4={foto4} />            
        </>
    );
};