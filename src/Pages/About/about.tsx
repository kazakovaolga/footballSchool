//scss
import "./index.scss";
//assets
import logo from "../../../assets/emblem.jpg";
import vk from "../../../assets/vk.png";
import insta from "../../../assets/insta.jpg";
//firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
//react
import React, { FC, useEffect } from "react";
import { Navigate } from "react-router-dom";
//hooks&store
import { useAuth } from "../../hooks/use-auth";
import { removeUser, setUser } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";
//components
import { Header } from "../../components/Header";
import { Emblem } from "../../components/Emblem";
import { List } from "../../components/List";
import { Navigation } from "../../components/Navigation";
import { Slider } from "../../components/Slider/slider";
import { Article } from "../../components/Article/article";
import { Contacts } from "../../components/Contacts/contacts";
import { List4Trainer } from "../../components/List4Trainer";
import { Calendar } from "../../components/Calendar/calendar";
import { formatDate } from "../../components/Calendar/utils";

export const About: FC = function () {
    const [selectedDate, setSelectedDay] = React.useState(new Date());

    const dispatch = useAppDispatch();

    useEffect(() => {
        try {
            const q = query(collection(db, "privileges"), where("email", "==", email));
            const querySnapshot = async function () {
                return await getDocs(q);
            };
            querySnapshot().then(
                (result) => {
                    result.forEach(
                        (doc) => {                            
                            const tokenString = sessionStorage.getItem("user") as string;
                            const userToken = JSON.parse(tokenString);

                            dispatch(setUser({
                                email: userToken.email,
                                id: userToken.id,
                                token: userToken.token,
                                role: doc.data().role
                            }));
                        }
                    );
                }
            );
        }
        catch (e) {
            console.error("Error reading students list: ", e);
        }
    }, []);

    const { isAuth, email, role } = useAuth();

    if (!isAuth) return (
        <Navigate to='/login'/>
    );

    if (isAuth && !role) return (<Header className="header" level={1} text="Идет загрузка данных. Подождите..." />);

    if (isAuth && role === "trainer") return (
        <>
            <Header className="header" level={1} text="Детская Академия Футбола" />
            <Emblem src={logo} className='emblem' />
            <button className='signOut'
                onClick={() => { dispatch(removeUser()); sessionStorage.clear(); }}
            >
                Logaut from {email}
            </button>
            <Navigation><List4Trainer /></Navigation>
            <div className='app__container'>
                <div className='date__container'>{formatDate(selectedDate, "DDD DD MMM YYYY")}</div>
                <Calendar selectedDate={selectedDate} selectDate={(date) => setSelectedDay(date)}/>
            </div>
        </>
    );

    return (
        <>
            <Header className="header" level={1} text="Детская Академия Футбола" />
            <Emblem src={logo} className='emblem' />
            <button className='signOut'
                onClick={() => { dispatch(removeUser()); sessionStorage.clear(); }}
            >
                Logaut from {email}
            </button>
            <Navigation><List /></Navigation>
            <Article />
            <Header className="header" level={3} text="Контакты" />
            <footer className="footer">
                <Contacts src={vk} href='https://vk.com/footballacademynn' />
                <Contacts src={insta} href='https://www.instagram.com/footballacademynn' />
            </footer>
        </>
    );
};