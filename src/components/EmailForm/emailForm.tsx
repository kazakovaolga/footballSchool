//scss
import "./index.scss";
//react
import { useState,FC } from "react";
//email
import { send } from "emailjs-com";

export const EmailForm:FC = function () {
    const [fromName, setFromName] = useState("");
    const [childName, setChildName] = useState("");
    const [childAge, setChildAge] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        send(
            "service_bmhvhui",
            "template_71fswn7",
            { from_name: fromName, to_name: "Dmitry", child_name: childName,child_age:childAge, message: message },            
            "hNnMYU-JY_Omwj-1p"
        )
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
            })
            .catch((err) => {
                console.log("FAILED...", err);
            });
            setFromName("");
            setChildName("");
            setChildAge("");
            setMessage("");            
    };

    return (
        <div className="EmailForm">
            <form onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => onSubmit(e)}>
                <label>Введите ваше имя</label>
                <input
                    className='emailFormInput'
                    type='text'
                    name='from_name'                    
                    value={fromName}
                    onChange={(e) => setFromName(e.target.value)}
                />
                <br/><br/>
                <label>Кому</label>
                <input
                    className='emailFormInput'
                    type='text'
                    name='to_name'
                    placeholder='Dmitry'
                    readOnly
                />
                <br/><br/>
                <label>Введите имя ребенка</label>
                <input
                    className='emailFormInput'
                    type='text'
                    name='childName'                    
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                />
                <br/><br/>
                <label>Введите возраст ребенка</label>
                <input
                    className='emailFormInput'
                    type='text'
                    name='childAge'                    
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                />
                <br/><br/>
                <label>Ваши комментарии</label>
                <input
                    className='emailFormInput'
                    type='text'
                    name='message'                    
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <br/><br/>
                <button className="emailFormButton" type="submit">отправить</button>
            </form>
        </div>
    );
};