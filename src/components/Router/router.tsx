//react
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
//store
import { store } from "../../store/store";
//pages
import { About } from "../../Pages/About/about";
import { StudentsList } from "../../Pages/StudentsList/studentsList";
import { StudentInfo } from "../../Pages/StudentInfo/studentInfo";
import {StudentsListControl} from "../../Pages/StudentsListControl/studentsListControl";
import { FeedBack } from "../../Pages/Feedback/feedback";
import { LoginPage } from "../../Pages/LoginPage/loginPage";
import { Register } from "../../Pages/Register/register";
import { SendMessage } from "../../Pages/SendMessageToParents/sendMessage";
import { Photo } from "../../Pages/Poto/poto";

export const App = () => {
    return <>
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/studentsList" element={<StudentsList />} />
                    <Route path="/studentInfo" element={<StudentInfo />} />
                    <Route path="/feedBack" element={<FeedBack />} />
                    <Route path="/photo" element={<Photo />} />
                    <Route path="/studentsListControl" element={<StudentsListControl />} />
                    <Route path="/messageToParents" element={<SendMessage />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    </>;
};