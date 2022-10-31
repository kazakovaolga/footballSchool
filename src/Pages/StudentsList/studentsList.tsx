//scss
import "./index.scss";
//assets
import { Emblem } from "../../components/Emblem";
import logo from "../../../assets/emblem.jpg";
//react
import React, { FC, useEffect } from "react";
import { Navigate } from "react-router-dom";
//hooks&store
import { setUser } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { useAuth } from "../../hooks/use-auth";
//firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
//components
import { Header } from "../../components/Header";
import { List } from "../../components/List";
import { Navigation } from "../../components/Navigation";
import { StudentList } from "../../components/StudentList/studentList";

export const StudentsList: FC = function () {
    useEffect(() => {
        try {
            const querySnapshot = async function () {
                return await getDocs(collection(db, "studentsList"));
            };            
            querySnapshot().then(
                (result) => {
                    result.forEach(
                        (doc) => {                                                        
                            const divStudentsList=document.querySelector(".studentsList") as HTMLElement;
                            divStudentsList.innerHTML=divStudentsList?.innerHTML+StudentList(doc.data());                                        
                        }
                    );
                }
            );            
        }
        catch (e) {
            console.error("Ошибка чтения списка спортсменов: ", e);
        }
    });

    const tokenString = sessionStorage.getItem("user") as string;
    const userToken = JSON.parse(tokenString);
    if (!userToken) return <Navigate to='/login' />;
    
    const dispatch = useAppDispatch();
    dispatch(setUser({
        email: userToken.email,
        id: userToken.id,
        token: userToken.token
    }));    
    const { isAuth, email } = useAuth();

    return isAuth ? (
        <>
            <Header className="header" level={1} text="Детская Академия Футбола" />
            <Emblem src={logo} className='emblem' />
            <Navigation><List /></Navigation>
            <Header className="header" level={3} text="Наши спортсмены" />
            <div className="studentsList">                                
            </div>
        </>
    ) : (
        <Navigate to='/login' />
    );
};