//scss
import "./index.scss";
//react
import { useState } from "react";
//amail
import { send } from "emailjs-com";

export const SendForm = function () {
    const [toName, settoName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");    
    
    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        send(
            "service_bmhvhui",
            "template_r49ekbe",
            { from_name: "Dmitry", to_name: toName, message: message, reply_to: email },
            "hNnMYU-JY_Omwj-1p"
        )
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
            })
            .catch((err) => {
                console.log("FAILED...", err);
            });
        settoName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="sendForm">
            <form onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => onSubmit(e)}>
                <label>От кого</label>
                <input
                    className='sendFormInput'
                    type='text'
                    name='from_name'
                    placeholder='Dmitry'
                    readOnly
                />
                <br /><br />
                <label>Кому (введите ваше имя)</label>
                <input
                    className='sendFormInput'
                    type='text'
                    name='to_name'
                    value={toName}
                    onChange={(e) => settoName(e.target.value)}
                />
                <br /><br />
                <label>Введите email</label>
                <input
                    className='sendFormInput'
                    type='text'
                    name='reply_to'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br /><br />
                <label>Введите сообщение</label>
                <input
                    className='sendFormInput'
                    type='text'
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <br /><br />
                <button className='sendFormButton' type="submit">Отправить</button>
            </form>
        </div>
    );
};