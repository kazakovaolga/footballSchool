//scss
import "./index.scss";
//react
import React, { FC } from "react";
//components
import { Header } from "../Header";
import {ARTICLE_TEXT} from "./articleText";
import { Paragraph } from "../Paragraph";


export const Article: FC = function () {
    return <>
        <article className="about-parameters">            
            <Header className="article__header" level={1} text="Добро пожаловать!" />
            <Paragraph text={ARTICLE_TEXT}/>            
        </article>
    </>;
};
