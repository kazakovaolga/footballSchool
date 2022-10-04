import React,{ FC } from "react";

interface ParagraphProps {
    text: string
}
export const Paragraph: FC<ParagraphProps> = function({ text }) {
    return (
        <p
                className="article__header-about"                
            >
                {text}
            </p>
    );
};
