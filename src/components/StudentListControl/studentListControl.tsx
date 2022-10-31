//assets
import foto from "../../../assets/4.jpg";

export const StudentListControl = function (data: any,id:string) {
    return `
        <div class="studentsListControl__div">
            <p class="studentsListControl__div-p">               
                <img class="foto" src="../../../assets/4.jpg"/>                
                <br />${data.surname} ${data.name}
            </p>
            <p class="studentsListControl__div-p">${data.age} лет</p>
            <p class="studentsListControl__div-p">дата рождения: ${data.date}</p>
            <p class="studentsListControl__div-p">команда: ${data.teamName}</p>
            <button class="btn${id}">Удалить</button>
        </div>`;
};