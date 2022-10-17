//scss
import "./index.scss";
//react
import { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
//firebase
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
//components
import { Header } from "../Header";


export const AddStudentForm: FC = function () {
    const navigate = useNavigate();

    const [surname, setSurname] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [age, setAge] = useState("");
    const [teamName, setTeamName] = useState("");


    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const docRef = async function () {
                return await addDoc(collection(db, "studentsList"), {
                    name: name,
                    surname: surname,
                    age: Number(age),
                    date: date,
                    teamName: teamName,
                    teamId: 1
                });
            };
            docRef();
        }
        catch (e) {
            console.error("Ошибка добавления спортсмена", e);
        }
        setAge("");
        setDate("");
        setName("");
        setSurname("");
        setTeamName("");
        navigate("/studentsListControl");
    };

    return (
        <div className="addStudentForm">
            <form onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => onSubmit(e)}>
                <Header className="headerAddStudent" level={2} text="Добавить нового спортсмена" />
                <br /><br />
                <label>Фамилия</label>
                <input
                    className='addStudentFormInput'
                    type='text'
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                />
                <br /><br />
                <label>Имя</label>
                <input
                    className='addStudentFormInput'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br /><br />
                <label>Возраст</label>
                <input
                    className='addStudentFormInput'
                    type='text'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <br /><br />
                <label>Дата рождения</label>
                <input
                    className='addStudentFormInput'
                    type='text'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <br /><br />
                <label>Название команды</label>
                <input
                    className='addStudentFormInput'
                    type='text'
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                />
                <br /><br />
                <button className='addStudentButton' type="submit">Добавить</button>
            </form>
        </div>
    );
};